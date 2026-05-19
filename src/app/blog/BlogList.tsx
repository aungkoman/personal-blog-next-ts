"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

interface Props {
  posts: Post[];
}

export function BlogList({ posts }: Props) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect unique tags from all posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(p => p.tags?.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts by query and tag
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter(post => {
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description?.toLowerCase().includes(q) ||
        post.tags?.some(t => t.toLowerCase().includes(q));
      const matchesTag = !activeTag || post.tags?.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [posts, query, activeTag]);

  const handleTagClick = (tag: string) => {
    setActiveTag(prev => (prev === tag ? null : tag));
  };

  return (
    <>
      {/* SEARCH & FILTER CONTROLS */}
      <div className="blog-controls">
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            id="blog-search"
            type="text"
            className="search-input"
            placeholder="Search articles by title, description or tag…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>

        {allTags.length > 0 && (
          <div className="tag-cloud" role="group" aria-label="Filter by tag">
            {allTags.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className={`tag ${activeTag === tag ? "tag-active" : "tag-default"}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RESULTS COUNT */}
      {(query || activeTag) && (
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: ".8rem",
          color: "var(--ink-faint)",
          marginBottom: "1.5rem"
        }}>
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          {activeTag && <> tagged <span style={{ color: "var(--accent)" }}>#{activeTag}</span></>}
          {query && <> matching <span style={{ color: "var(--accent)" }}>"{query}"</span></>}
          &nbsp;·&nbsp;
          <button
            type="button"
            onClick={() => { setQuery(""); setActiveTag(null); }}
            style={{ background: "none", border: "none", color: "var(--primary)", cursor: "pointer", fontSize: "inherit", fontFamily: "inherit" }}
          >
            clear
          </button>
        </p>
      )}

      {/* POST LIST */}
      {filtered.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">📭</div>
          <p>No articles found for your search.</p>
        </div>
      ) : (
        <ul className="post-list">
          {filtered.map(post => (
            <li key={post.slug} className="post-item">
              {/* Title & Date */}
              <div className="post-item-top">
                <h2 className="post-item-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <time className="post-item-date" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              {/* Description */}
              {post.description && (
                <p className="post-item-desc">{post.description}</p>
              )}

              {/* Footer: Tags & Read link */}
              <div className="post-item-footer">
                {post.tags && post.tags.length > 0 && (
                  <div className="post-tags">
                    {post.tags.map(tag => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagClick(tag)}
                        className={`tag ${activeTag === tag ? "tag-active" : "tag-primary"}`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                )}
                <Link href={`/blog/${post.slug}`} className="post-read-link">
                  Read article →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
