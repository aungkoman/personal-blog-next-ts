"use client";
import styles from "./page.module.css";

const services = [
  {
    icon: "◈",
    title: "Solo Interpreter",
    desc: "Tailored digital tools for independent translators & interpreters — booking systems, glossary managers, and client portals built around your workflow.",
  },
  {
    icon: "◉",
    title: "MSME Solutions",
    desc: "End-to-end software for micro, small & medium enterprises — inventory, POS, payroll, and CRM systems that grow with your business.",
  },
  {
    icon: "◐",
    title: "Innovator Platform",
    desc: "MVPs, prototypes, and startup-ready apps for visionaries ready to disrupt — we build fast, iterate faster, and bring your idea to market.",
  },
];

const stack = ["Web Apps", "Mobile Apps", "POS Systems", "Inventory Mgmt", "CRM", "API Integration", "Cloud Deploy", "UI/UX Design"];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Noise overlay */}
      <div className={styles.noise} />

      {/* NAV */}
      <nav className={styles.nav}>
        <span className={styles.logo}>SW<em>100</em></span>
        <a href="mailto:hello@software100.mm" className={styles.navCta}>Get in Touch →</a>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>Based in Myanmar · Est. 2024</div>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroLine1}>Software</span>
          <span className={styles.heroLine2}>100</span>
          <span className={styles.heroLine3}>Studio</span>
        </h1>
        <p className={styles.heroSub}>
          Customized software for&nbsp;
          <mark>Solo Interpreters</mark>,&nbsp;
          <mark>MSMEs</mark>&nbsp;&amp;&nbsp;
          <mark>Innovators</mark>&nbsp;across Myanmar.
        </p>
        <div className={styles.heroCtas}>
          <a href="#services" className={styles.btnPrimary}>See What We Build</a>
          <a href="#contact" className={styles.btnGhost}>Start a Project</a>
        </div>
        <div className={styles.heroScroll}>scroll ↓</div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className={styles.marqueeItem}>{s} <span className={styles.marqueeDot}>✦</span></span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionLabel}>What We Do</div>
        <h2 className={styles.sectionTitle}>Built for the<br />Builders of Myanmar</h2>
        <div className={styles.cards}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardNum}>0{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.sectionLabel}>How We Work</div>
        <div className={styles.steps}>
          {["Discover", "Design", "Develop", "Deploy"].map((step, i) => (
            <div key={i} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.stepName}>{step}</span>
              {i < 3 && <span className={styles.stepArrow}>→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className={styles.why}>
        <div className={styles.whyLeft}>
          <div className={styles.sectionLabel}>Why Software 100</div>
          <h2 className={styles.sectionTitle}>100% Custom.<br />0% Template.</h2>
        </div>
        <div className={styles.whyRight}>
          {[
            ["Local Expertise", "We understand Myanmar's business landscape — from township markets to tech hubs."],
            ["Transparent Pricing", "Fixed quotes, no surprises. You know the cost before we write a single line."],
            ["Ongoing Support", "We don't disappear post-launch. Dedicated support and continuous updates."],
            ["Fast Delivery", "Agile sprints mean you see working software within weeks, not months."],
          ].map(([title, desc], i) => (
            <div key={i} className={styles.whyItem}>
              <h4 className={styles.whyItemTitle}>{title}</h4>
              <p className={styles.whyItemDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.sectionLabel}>Contact</div>
          <h2 className={styles.contactTitle}>Ready to Build<br />Something Real?</h2>
          <p className={styles.contactSub}>Tell us about your project — we reply within 24 hours.</p>
          <a href="mailto:hello@software100.mm" className={styles.contactEmail}>
            hello@software100.mm
          </a>
          <div className={styles.contactLinks}>
            <a href="#">Viber</a>
            <span>·</span>
            <a href="#">Telegram</a>
            <span>·</span>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div className={styles.contactBg}>100</div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span>© 2024 Software 100 · Yangon, Myanmar</span>
        <span>Crafted with ♥ for local builders</span>
      </footer>
    </main>
  );
}