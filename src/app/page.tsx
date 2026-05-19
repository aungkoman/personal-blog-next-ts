import styles from "./page.module.css";
import { getAllPosts } from "../lib/posts";
import Link from "next/link";
import { 
  InteractiveTerminal, 
  TechSwitcher, 
  ProjectPlanner, 
  ContactForm, 
  MobileMenu,
  ThemeToggle
} from "./components/ClientComponents";

export const metadata = {
  title: "Software 100 — Professional Software Development House in Myanmar",
  description: "Yangon's premier engineering studio building high-performance web applications, mobile apps, and enterprise API architectures.",
};

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Flutter", 
  "Laravel", "Docker", "AWS Cloud", "PostgreSQL", "MongoDB", "GitHub CI/CD"
];

export default function Home() {
  // Fetch latest 3 blog posts
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className={styles.main}>
      {/* 1. STICKY HEADER / NAVIGATION */}
      <nav className={styles.navBar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoSymbol}>&lt;/&gt;</span> Software 100
          </Link>
          <div className={styles.navLinks}>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#tech-stack" className={styles.navLink}>Tech Stack</a>
            <a href="#portfolio" className={styles.navLink}>Case Studies</a>
            <a href="#planner" className={styles.navLink}>Cost Planner</a>
            <a href="#blog" className={styles.navLink}>Insights</a>
            <a href="#contact" className={styles.navActionBtn}>&gt; Contact Us</a>
            {/* Theme toggle — desktop only (mobile gets it inside MobileMenu) */}
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            <span>Myanmar's Premier Software House</span>
          </div>
          <h1 className={styles.heroTitle}>
            Engineering <span className={styles.gradientText}>High-Performance</span> Digital Products
          </h1>
          <p className={styles.heroSub}>
            We design, engineer, and scale world-class web, mobile, and backend cloud systems. Trusted by local builders and global enterprises to deliver standard code.
          </p>
          <div className={styles.heroActions}>
            <a href="#planner" className={styles.btnPrimary}>&gt; Simulate Project</a>
            <a href="#portfolio" className={styles.btnSecondary}>Explore Work</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <InteractiveTerminal />
        </div>
      </section>

      {/* 3. TECHNOLOGY MARQUEE RUNNER */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...techStack, ...techStack, ...techStack].map((s, i) => (
            <span key={i} className={styles.marqueeItem}>
              {s} <span className={styles.marqueeDot}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* 4. PERFORMANCE STATS GRID */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={`${styles.glassCard} ${styles.statCard}`}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Successful Deployments</div>
          </div>
          <div className={`${styles.glassCard} ${styles.statCard}`}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Myanmar Tech Engineers</div>
          </div>
          <div className={`${styles.glassCard} ${styles.statCard}`}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>System Uptime SLA</div>
          </div>
          <div className={`${styles.glassCard} ${styles.statCard}`}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Myanmar Led Agency</div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES Grid */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>// What We Build</span>
          <h2 className={styles.sectionTitle}>Full-Lifecycle Engineering Services</h2>
          <p className={styles.sectionDesc}>
            From early product scoping to production hosting, we build robust systems tailored to business scale.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {/* Card 1: Web Apps */}
          <div className={`${styles.glassCard} ${styles.serviceCard}`}>
            <div className={styles.serviceIconWrap}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>Custom Web Portals</h3>
            <p className={styles.serviceDesc}>
              High-speed applications built using Next.js, React, and server-side rendering for optimal load speeds, SEO optimization, and responsive dashboards.
            </p>
            <ul className={styles.serviceFeatures}>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> React / NextJS / TypeScript</li>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> SEO-optimized layouts</li>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> Administrative management panels</li>
            </ul>
          </div>

          {/* Card 2: Mobile Apps */}
          <div className={`${styles.glassCard} ${styles.serviceCard}`}>
            <div className={styles.serviceIconWrap}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>Cross-Platform Mobile</h3>
            <p className={styles.serviceDesc}>
              Beautiful Android and iOS apps crafted with Flutter and React Native. Fully optimized for local networks and device configurations.
            </p>
            <ul className={styles.serviceFeatures}>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> Flutter & Dart compiled native</li>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> Optimized for low network bandwidth</li>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> Local payment integrations</li>
            </ul>
          </div>

          {/* Card 3: Backend APIs */}
          <div className={`${styles.glassCard} ${styles.serviceCard}`}>
            <div className={styles.serviceIconWrap}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>Enterprise APIs & Cloud</h3>
            <p className={styles.serviceDesc}>
              Scalable system architectures deploying Express.js, Laravel, and microservices on AWS, using Docker orchestration for reliable environments.
            </p>
            <ul className={styles.serviceFeatures}>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> Relational & NoSQL Database tuning</li>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> RESTful & GraphQL secure APIs</li>
              <li className={styles.serviceFeatureItem}><span className={styles.featureDot}>✓</span> Automated Docker deployments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE TECH STACK SWITCHER */}
      <TechSwitcher />

      {/* 7. PORTFOLIO CASE STUDIES */}
      <section className={styles.portfolioSection} id="portfolio">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>// Selected Cases</span>
          <h2 className={styles.sectionTitle}>Featured Projects We Engineered</h2>
          <p className={styles.sectionDesc}>
            A look at production systems we have delivered for leading businesses operating in Myanmar and globally.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <div className={`${styles.glassCard} ${styles.projectCard}`}>
            <div className={styles.projectVisual}>
              <div className={styles.projectGlow}></div>
              <div className={styles.projectMock}>myanquiz-mobile-app</div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <span className={styles.projectCat}>Mobile Application</span>
                <span className={styles.projectClient}>Quiz Academy</span>
              </div>
              <h3 className={styles.projectTitle}>Myan Quiz App</h3>
              <p className={styles.projectSummary}>
                A multiplayer quiz application configured for hundreds of thousands of concurrent local players, featuring real-time socket leaderboards.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>Flutter</span>
                <span className={styles.projectTag}>Node.js</span>
                <span className={styles.projectTag}>WebSockets</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={`${styles.glassCard} ${styles.projectCard}`}>
            <div className={styles.projectVisual}>
              <div className={styles.projectGlow} style={{ background: "var(--primary)" }}></div>
              <div className={styles.projectMock}>spylnx-gis-portal</div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <span className={styles.projectCat}>GIS Enterprise Portal</span>
                <span className={styles.projectClient}>Telecom Myanmar</span>
              </div>
              <h3 className={styles.projectTitle}>Spylnx Fiber Tracker</h3>
              <p className={styles.projectSummary}>
                A web-based geographic mapping system mapping optical fiber cable assets, enabling automated maintenance dispatch.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>React</span>
                <span className={styles.projectTag}>Laravel</span>
                <span className={styles.projectTag}>PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className={`${styles.glassCard} ${styles.projectCard}`}>
            <div className={styles.projectVisual}>
              <div className={styles.projectGlow}></div>
              <div className={styles.projectMock}>contactless-menu-qr</div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <span className={styles.projectCat}>Contactless POS</span>
                <span className={styles.projectClient}>Yangon Dine Out</span>
              </div>
              <h3 className={styles.projectTitle}>QR Menu Platform</h3>
              <p className={styles.projectSummary}>
                A restaurant digitization suite allowing direct-to-kitchen QR ordering and cash register receipts synchronization.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>Next.js</span>
                <span className={styles.projectTag}>MySQL</span>
                <span className={styles.projectTag}>APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE COST CALCULATOR */}
      <ProjectPlanner />

      {/* 9. TESTIMONIALS */}
      <section className={styles.testimonialSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>// Feedback</span>
          <h2 className={styles.sectionTitle}>What Our Partners Say</h2>
          <p className={styles.sectionDesc}>
            We build long-term relationships by providing clean code, architectural advice, and structured project management.
          </p>
        </div>

        <div className={styles.testimonialGrid}>
          <div className={`${styles.glassCard} ${styles.testimonialCard}`}>
            <p className={styles.quoteText}>
              "Software 100 provided a highly professional team of developers. Their engineering rigor is unmatched. The Spylnx system dramatically streamlined our optical layout timelines."
            </p>
            <div className={styles.clientMeta}>
              <div className={styles.clientAvatar}>U</div>
              <div className={styles.clientDetails}>
                <span className={styles.clientName}>U Myo Min Oo</span>
                <span className={styles.clientComp}>CTO, Telecom Fiber Corp</span>
              </div>
            </div>
          </div>

          <div className={`${styles.glassCard} ${styles.testimonialCard}`}>
            <p className={styles.quoteText}>
              "Developing Myan Quiz required developers who understood how to optimize applications for unstable cellular connections in remote regions. They delivered ahead of schedule."
            </p>
            <div className={styles.clientMeta}>
              <div className={styles.clientAvatar}>D</div>
              <div className={styles.clientDetails}>
                <span className={styles.clientName}>Daw Sandar Htun</span>
                <span className={styles.clientComp}>Founder, Quiz Academy</span>
              </div>
            </div>
          </div>

          <div className={`${styles.glassCard} ${styles.testimonialCard}`}>
            <p className={styles.quoteText}>
              "The pricing was fully transparent. Their interactive simulation matched our final quote, and they kept code modular so we could transition maintenance internally later."
            </p>
            <div className={styles.clientMeta}>
              <div className={styles.clientAvatar}>A</div>
              <div className={styles.clientDetails}>
                <span className={styles.clientName}>Ko Aung Naing</span>
                <span className={styles.clientComp}>Manager, Dine Out Yangon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BLOG SECTION (DYNAMIC MARKDOWN READS) */}
      <section className={styles.blogSection} id="blog">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>// Developer Journal</span>
          <h2 className={styles.sectionTitle}>Insights & Engineering Logs</h2>
          <p className={styles.sectionDesc}>
            Read the latest technical articles, tutorials, and field reports authored by our engineering crew in Yangon.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={`${styles.glassCard} ${styles.blogCard}`}>
              <div className={styles.blogHeader}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </div>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              {post.description && <p className={styles.blogExcerpt}>{post.description}</p>}
            </Link>
          ))}
        </div>

        <div className={styles.blogFooterBtn}>
          <Link href="/blog" className={styles.btnPrimary}>
            &gt; Read All Engineering Logs
          </Link>
        </div>
      </section>

      {/* 11. CONTACT & YANGON LOCATION OFFICE */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>// Connection Port</span>
          <h2 className={styles.sectionTitle}>Start Engineering Today</h2>
          <p className={styles.sectionDesc}>
            Get in touch with our tech architects to design your next software system.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>Yangon Headquarters</h3>
            <p className={styles.contactText}>
              Drop by our tech office or dispatch an email to schedule an architecture review.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <div className={styles.contactLabel}>Location Office</div>
                  <div className={styles.contactValue}>No. 42, Pyay Road, Kamayut Township, Yangon, Myanmar</div>
                </div>
              </div>
              <div className={styles.contactDetailItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <div className={styles.contactLabel}>Email Address</div>
                  <div className={styles.contactValue}>hello@software100.mm</div>
                </div>
              </div>
              <div className={styles.contactDetailItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <div className={styles.contactLabel}>Phone</div>
                  <div className={styles.contactValue}>+95 9 770 100 100</div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* 12. CORPORATE FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div>
            <Link href="/" className={styles.logo} style={{ marginBottom: "1rem" }}>
              <span className={styles.logoSymbol}>&lt;/&gt;</span> Software 100
            </Link>
            <p className={styles.footerDesc}>
              A professional software development agency in Myanmar building scalable web systems, mobile applications, and enterprise database servers.
            </p>
          </div>
          <div>
            <h4 className={styles.footerColTitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#services" className={styles.footerLink}>Services</a></li>
              <li><a href="#tech-stack" className={styles.footerLink}>Tech Stack</a></li>
              <li><a href="#portfolio" className={styles.footerLink}>Case Studies</a></li>
              <li><a href="#planner" className={styles.footerLink}>Cost Calculator</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.footerColTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/blog" className={styles.footerLink}>Engineering Blog</Link></li>
              <li><a href="#contact" className={styles.footerLink}>Careers</a></li>
              <li><a href="#contact" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#contact" className={styles.footerLink}>Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.footerColTitle}>Contact</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}>hello@software100.mm</li>
              <li className={styles.footerLink}>+95 9 770 100 100</li>
              <li className={styles.footerLink}>Kamayut, Yangon</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Software 100 (Myanmar) Co., Ltd. All Rights Reserved.</span>
          <span>Made with 🇲🇲 in Yangon, Myanmar</span>
        </div>
      </footer>
    </main>
  );
}
