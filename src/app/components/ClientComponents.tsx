"use client";

import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import { useTheme } from "./ThemeProvider";

/* ===== THEME TOGGLE BUTTON ===== */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  // Avoid hydration mismatch — only render icon after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={toggle}
      className={styles.themeToggle}
      aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
    </button>
  );
}

/* ===== INTERACTIVE TERMINAL COMPONENT ===== */
export function InteractiveTerminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const baseLogs = [
    "INITIALIZING software100.mm agency environment...",
    "CONNECTING database@yangon.datacenter.mm... [OK]",
    "LOADED backend core services (Laravel API)... [1.2s]",
    "BOOTSTRAPING Flutter core packages...",
    "BUILDING React Native app wrapper for iOS/Android...",
    "DEPLOING Spylnx Fiber GIS platform to AWS... [OK]",
    "INTEGRATING Myan Quiz localized payment gateways...",
    "OPTIMIZING asset delivery node via Cloudflare CDN...",
    "LINTING code assets (0 warnings, 0 errors)...",
    "STATUS: Software 100 Live | 99.9% Uptime | Yangon Core",
  ];

  useEffect(() => {
    let index = 0;
    // Add initial line
    setLogs([baseLogs[0]]);
    
    const interval = setInterval(() => {
      index = (index + 1) % baseLogs.length;
      if (index === 0) {
        // Clear and restart
        setLogs([baseLogs[0]]);
      } else {
        setLogs(prev => [...prev, baseLogs[index]].slice(-8)); // Keep last 8 lines
      }
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.terminalWindow}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalDots}>
          <span className={`${styles.terminalDot} ${styles.dotRed}`}></span>
          <span className={`${styles.terminalDot} ${styles.dotYellow}`}></span>
          <span className={`${styles.terminalDot} ${styles.dotGreen}`}></span>
        </div>
        <div className={styles.terminalTitle}>bash - software100-studio</div>
        <div style={{ width: 42 }}></div>
      </div>
      <div className={styles.terminalBody}>
        {logs.map((log, i) => (
          <div key={i} className={styles.terminalLine}>
            <span className={styles.lineNum}>{i + 1}</span>
            <span className={styles.logTime}>[100.mm]</span>
            <span className={
              log.includes("[OK]") ? styles.logSuccess :
              log.includes("INITIALIZING") ? styles.logInfo :
              log.includes("STATUS:") ? styles.logSuccess : ""
            }>
              {log}
            </span>
          </div>
        ))}
        <div className={styles.terminalLine}>
          <span className={styles.lineNum}>{logs.length + 1}</span>
          <span className={styles.logTime}>[100.mm]</span>
          <span>
            $ waiting for new query...<span className={styles.terminalCursor}></span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ===== TECH STACK FILTER COMPONENT ===== */
interface TechItem {
  name: string;
  category: "frontend" | "backend" | "mobile" | "devops";
  desc: string;
  icon: string;
}

export function TechSwitcher() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const techItems: TechItem[] = [
    { name: "React / Next.js", category: "frontend", desc: "For interactive single page apps & SSR websites", icon: "⚛️" },
    { name: "TypeScript", category: "frontend", desc: "For type-safe, maintainable enterprise scale code", icon: "🟦" },
    { name: "CSS Modules", category: "frontend", desc: "Modular, locally scoped clean styling", icon: "🎨" },
    { name: "Flutter", category: "mobile", desc: "Beautiful compiled native iOS and Android apps", icon: "⚡" },
    { name: "React Native", category: "mobile", desc: "Cross-platform mobile apps using React engine", icon: "📱" },
    { name: "iOS / Android Native", category: "mobile", desc: "Swift/Kotlin integrations for maximum performance", icon: "📲" },
    { name: "Node.js / Express", category: "backend", desc: "Scalable async APIs and real-time socket connections", icon: "🟢" },
    { name: "Laravel", category: "backend", desc: "Robust, feature-rich MVC PHP framework for scale", icon: "🟥" },
    { name: "MongoDB", category: "backend", desc: "Flexible, document-based NoSQL storage systems", icon: "🍃" },
    { name: "Docker", category: "devops", desc: "Consistent containerized code environments", icon: "🐳" },
    { name: "AWS Cloud Services", category: "devops", desc: "Secure hosting, database replication, and S3", icon: "☁️" },
    { name: "CI/CD & Git", category: "devops", desc: "Automated building, testing, and cloud deployments", icon: "⚙️" },
  ];

  const filteredItems = activeTab === "all" 
    ? techItems 
    : techItems.filter(item => item.category === activeTab);

  return (
    <div className={styles.techSection} id="tech-stack">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>// Technologies</span>
        <h2 className={styles.sectionTitle}>Our Tech Capabilities</h2>
        <p className={styles.sectionDesc}>We employ industry-leading frameworks and cloud environments to construct clean, modular, and maintainable software architectures.</p>
      </div>

      <div className={styles.techTabs}>
        {["all", "frontend", "mobile", "backend", "devops"].map(tab => (
          <button 
            key={tab}
            className={`${styles.techTab} ${activeTab === tab ? styles.techTabActive : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.techGrid}>
        {filteredItems.map((tech, idx) => (
          <div key={idx} className={`${styles.glassCard} ${styles.techCard}`}>
            <div className={styles.techLogoWrap}>{tech.icon}</div>
            <h3 className={styles.techName}>{tech.name}</h3>
            <p className={styles.techDesc}>{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== INTERACTIVE PROJECT PLANNER (COST CALCULATOR) ===== */
export function ProjectPlanner() {
  const [platform, setPlatform] = useState<"web" | "mobile" | "fullstack">("web");
  const [complexity, setComplexity] = useState<number>(3);
  const [design, setDesign] = useState<boolean>(true);
  const [devops, setDevops] = useState<boolean>(false);
  const [support, setSupport] = useState<boolean>(false);

  // Math constants
  const rates = { web: 2500, mobile: 3500, fullstack: 5500 };
  const complexityMultipliers = [0, 0.9, 1.2, 1.5, 2.0, 2.8];
  
  // Calculate price
  const basePrice = rates[platform];
  const multiplier = complexityMultipliers[complexity];
  let addonPrice = 0;
  if (design) addonPrice += 800;
  if (devops) addonPrice += 600;
  if (support) addonPrice += 400;

  const totalCost = Math.round(basePrice * multiplier + addonPrice);
  
  // Calculate timeline
  const baseWeeks = { web: 2, mobile: 3, fullstack: 4 };
  const estimatedWeeks = Math.max(3, Math.round(baseWeeks[platform] * complexity));

  const complexityLabels = [
    "",
    "Simple MVP (Informational)",
    "Standard App (User auth, CMS integrations)",
    "Robust Platform (Admin panels, payment gates)",
    "Advanced System (Complex sync APIs, dashboards)",
    "Enterprise Grade (AI integration, high-scale architecture)"
  ];

  return (
    <div className={styles.plannerSection} id="planner">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>// Interactive Estimate</span>
        <h2 className={styles.sectionTitle}>Plan Your Next Project</h2>
        <p className={styles.sectionDesc}>Adjust the interactive controls below to simulate resource hours, project budget, and timelines instantly based on your requirements.</p>
      </div>

      <div className={`${styles.glassCard} ${styles.plannerCard}`}>
        <div className={styles.plannerForm}>
          {/* PLATFORM SELECT */}
          <div className={styles.plannerGroup}>
            <label className={styles.plannerLabel}>
              1. Platform Type
              <span className={styles.plannerLabelSpan}>
                {platform === "web" ? "Web App (Next.js / Node)" : platform === "mobile" ? "Mobile App (Flutter)" : "Full-Stack System"}
              </span>
            </label>
            <div className={styles.calcGrid}>
              <button 
                type="button"
                className={`${styles.calcBtn} ${platform === "web" ? styles.calcBtnActive : ""}`}
                onClick={() => setPlatform("web")}
              >
                <span className={styles.calcBtnIcon}>🖥️</span>
                <span>Web App</span>
              </button>
              <button 
                type="button"
                className={`${styles.calcBtn} ${platform === "mobile" ? styles.calcBtnActive : ""}`}
                onClick={() => setPlatform("mobile")}
              >
                <span className={styles.calcBtnIcon}>📱</span>
                <span>Mobile App</span>
              </button>
              <button 
                type="button"
                className={`${styles.calcBtn} ${platform === "fullstack" ? styles.calcBtnActive : ""}`}
                onClick={() => setPlatform("fullstack")}
              >
                <span className={styles.calcBtnIcon}>⚙️</span>
                <span>Full-Stack/API</span>
              </button>
            </div>
          </div>

          {/* COMPLEXITY SLIDER */}
          <div className={styles.plannerGroup}>
            <label className={styles.plannerLabel}>
              2. Complexity & Scale
              <span className={styles.plannerLabelSpan}>Level {complexity} / 5</span>
            </label>
            <input 
              type="range" 
              min="1" 
              max="5" 
              value={complexity} 
              onChange={(e) => setComplexity(parseInt(e.target.value))}
              className={styles.rangeInput}
            />
            <span style={{ fontSize: "0.85rem", color: "var(--accent)" }}>
              {complexityLabels[complexity]}
            </span>
          </div>

          {/* ADDONS CHECKBOXES */}
          <div className={styles.plannerGroup}>
            <label className={styles.plannerLabel}>3. Additional Integrations</label>
            <div className={styles.calcGrid}>
              <button 
                type="button"
                className={`${styles.calcBtn} ${design ? styles.calcBtnActive : ""}`}
                onClick={() => setDesign(!design)}
              >
                <span className={styles.calcBtnIcon}>🎨</span>
                <span>UI/UX Design</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>+$800</span>
              </button>
              <button 
                type="button"
                className={`${styles.calcBtn} ${devops ? styles.calcBtnActive : ""}`}
                onClick={() => setDevops(!devops)}
              >
                <span className={styles.calcBtnIcon}>☁️</span>
                <span>Cloud Deployment</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>+$600</span>
              </button>
              <button 
                type="button"
                className={`${styles.calcBtn} ${support ? styles.calcBtnActive : ""}`}
                onClick={() => setSupport(!support)}
              >
                <span className={styles.calcBtnIcon}>🔧</span>
                <span>Maintenance</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>+$400</span>
              </button>
            </div>
          </div>
        </div>

        {/* SUMMARY BLOCK */}
        <div className={styles.plannerSummaryCard}>
          <div className={styles.summaryTitle}>Rough Simulation</div>
          <div className={styles.summaryVal}>${totalCost.toLocaleString()}</div>
          <div className={styles.summarySub}>Estimated Budget</div>

          <div className={styles.summaryDetailGrid}>
            <div className={styles.summaryDetailRow}>
              <span className={styles.summaryDetailLabel}>Development Scope</span>
              <span className={styles.summaryDetailVal}>~{estimatedWeeks * 40} Developer Hours</span>
            </div>
            <div className={styles.summaryDetailRow}>
              <span className={styles.summaryDetailLabel}>Timeframe</span>
              <span className={styles.summaryDetailVal}>{estimatedWeeks} - {estimatedWeeks + 2} Weeks</span>
            </div>
            <div className={styles.summaryDetailRow}>
              <span className={styles.summaryDetailLabel}>Location Focus</span>
              <span className={styles.summaryDetailVal}>Yangon Engineering Team</span>
            </div>
          </div>

          <a href="#contact" className={styles.btnPrimary} style={{ justifyContent: "center" }}>
            &gt; Request Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
}

/* ===== CONTACT FORM WITH FEEDBACK ===== */
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out Name, Email, and Project Description.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <div className={`${styles.glassCard} ${styles.contactFormCard}`}>
      {submitted ? (
        <div className={styles.formSuccess}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            [SYSTEM] Message Dispatched
          </h3>
          <p style={{ fontSize: "0.9rem", opacity: 0.9, lineHeight: 1.5 }}>
            Thank you, <strong>{formData.name}</strong>. Our engineering lead in Yangon will review your project details (<strong>{formData.company || "Independent"}</strong>) and get back to you at <strong>{formData.email}</strong> within 24 hours.
          </p>
          <button 
            type="button"
            className={styles.navActionBtn}
            style={{ marginTop: "1.5rem" }}
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", company: "", message: "" });
            }}
          >
            &gt; Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          {errorMsg && (
            <div style={{ color: "var(--danger)", fontSize: "0.85rem", borderLeft: "2px solid var(--danger)", paddingLeft: "0.5rem" }}>
              {errorMsg}
            </div>
          )}
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="form-name">Your Name *</label>
              <input 
                id="form-name"
                type="text" 
                className={styles.formInput} 
                placeholder="Aung Kyaw"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="form-email">Work Email *</label>
              <input 
                id="form-email"
                type="email" 
                className={styles.formInput} 
                placeholder="aungkyaw@company.mm"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="form-company">Company Name (Optional)</label>
            <input 
              id="form-company"
              type="text" 
              className={styles.formInput} 
              placeholder="e.g. Yangon Retail Group"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="form-msg">Project Scope & Features *</label>
            <textarea 
              id="form-msg"
              className={styles.formTextarea} 
              placeholder="Provide a summary of the web portal or mobile app you would like us to design and engineer..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>

          <button type="submit" className={styles.formSubmitBtn}>
            &gt; Initialize Connection
          </button>
        </form>
      )}
    </div>
  );
}

/* ===== MOBILE HEADER COMPONENT ===== */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* Mobile row: theme toggle + hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button
          onClick={toggle}
          className={styles.themeToggle}
          aria-label="Toggle theme"
        >
          {mounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
        </button>
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div 
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "2rem",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            backdropFilter: "blur(16px)"
          }}
        >
          <a href="#services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</a>
          <a href="#tech-stack" className={styles.navLink} onClick={() => setIsOpen(false)}>Tech Stack</a>
          <a href="#portfolio" className={styles.navLink} onClick={() => setIsOpen(false)}>Featured Work</a>
          <a href="#planner" className={styles.navLink} onClick={() => setIsOpen(false)}>Cost Planner</a>
          <a href="#blog" className={styles.navLink} onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#contact" className={styles.navActionBtn} style={{ textAlign: "center" }} onClick={() => setIsOpen(false)}>&gt; Contact Office</a>
        </div>
      )}
    </>
  );
}
