import styles from "./page.module.css";
import { getAllPosts } from "../lib/posts";
import Link from "next/link";

const codeSnippets = [
  {
    icon: "//",
    title: "Web Apps",
    desc: "React, Next.js, TypeScript — full-stack applications built for the modern web.",
  },
  {
    icon: "[]",
    title: "Mobile Apps",
    desc: "React Native, Flutter — cross-platform apps that work everywhere.",
  },
  {
    icon: "{}",
    title: "APIs & Backend",
    desc: "Node.js, Express, NestJS — scalable APIs and backend systems.",
  },
];

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Docker", "AWS", "Git"];

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <main className={styles.main}>
      {/* Noise overlay */}
      <div className={styles.noise} />

      {/* CODE EDITOR HEADER */}
      <header className={styles.editorHeader}>
        <div className={styles.windowControls}>
          <span className={styles.dotClose}></span>
          <span className={styles.dotMinimize}></span>
          <span className={styles.dotMaximize}></span>
        </div>
        <div className={styles.filename}>
          <span>main.tsx</span>
        </div>
      </header>

      {/* HERO CODE SECTION */}
      <section className={styles.hero}>
        <div className={styles.codeBlock}>
          <div className={styles.lineNumbers}>
            {Array.from({ length: 20 }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
          <div className={styles.codeContent}>
            <pre>
              <code>
                <span className={styles.keyword}>import</span> {"{"} <span className={styles.importName}>Software100</span> {"}"} <span className={styles.keyword}>from</span> <span className={styles.string}>'@software100/studio'</span>;
                <br />
                <br />
                <span className={styles.comment}>// Initialize the studio</span>
                <br />
                <span className={styles.keyword}>const</span> <span className={styles.variable}>studio</span> = <span className={styles.keyword}>new</span> <span className={styles.className}>Software100</span>{"{"}
                <br />
                {"  "}<span className={styles.property}>location</span>: <span className={styles.string}>'Yangon, Myanmar'</span>,
                <br />
                {"  "}<span className={styles.property}>mission</span>: <span className={styles.string}>'Build for local builders'</span>,
                <br />
                {"  "}<span className={styles.property}>services</span>: [
                <br />
                {"    "}<span className={styles.string}>'Web Apps'</span>,
                <br />
                {"    "}<span className={styles.string}>'Mobile Apps'</span>,
                <br />
                {"    "}<span className={styles.string}>'APIs & Backend'</span>
                <br />
                {"  "}],
                <br />
                {"}"};
                <br />
                <br />
                <span className={styles.comment}>// Let's build something amazing</span>
                <br />
                <span className={styles.variable}>studio</span>.<span className={styles.method}>start</span>();
                <span className={styles.cursor}></span>
              </code>
            </pre>
          </div>
        </div>
        <div className={styles.heroCtas}>
          <a href="#services" className={styles.btnPrimary}>&gt; View Services</a>
          <a href="#contact" className={styles.btnGhost}>&gt; Start Project</a>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...techStack, ...techStack].map((s, i) => (
            <span key={i} className={styles.marqueeItem}>{s} <span className={styles.marqueeDot}>•</span></span>
          ))}
        </div>
      </div>

      {/* SERVICES (CODE CARDS) */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionLabel}>// What We Build</div>
        <h2 className={styles.sectionTitle}>Services</h2>
        <div className={styles.cards}>
          {codeSnippets.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className={styles.blogSection}>
        <div className={styles.sectionLabel}>// Blog</div>
        <h2 className={styles.sectionTitle}>Latest Posts</h2>
        <div className={styles.postList}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postItem}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              {post.description && <p className={styles.postDesc}>{post.description}</p>}
            </Link>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/blog" className={styles.btnPrimary}>&gt; View All Posts</Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionLabel}>// Contact</div>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <div className={styles.contactContent}>
          <p className={styles.contactText}>Ready to start your project? Send us an email and we'll get back to you.</p>
          <a href="mailto:hello@software100.mm" className={styles.contactEmail}>
            hello@software100.mm
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span>© 2024 Software 100</span>
        <span>Built with ❤️ in Yangon</span>
      </footer>
    </main>
  );
}
