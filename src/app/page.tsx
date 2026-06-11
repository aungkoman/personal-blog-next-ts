import Link from "next/link";

export const metadata = {
  title: "Software 100 — Professional Software Development in Myanmar",
  description: "Yangon's premier engineering studio building high-performance web and mobile apps.",
};

export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.6', color: '#333' }}>
      
      {/* 1. NAVIGATION */}
      <nav style={{ padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eaeaea' }}>
        <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none', color: '#000' }}>
          &lt;/&gt; Software 100
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#services" style={{ textDecoration: 'none', color: '#666' }}>Services</a>
          <a href="#portfolio" style={{ textDecoration: 'none', color: '#666' }}>Work</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#000', fontWeight: '500' }}>Contact</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header style={{ padding: '6rem 5%', textAlign: 'center', backgroundColor: '#fafafa' }}>
        <span style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', color: '#666' }}>
          Myanmar's Premier Software House
        </span>
        <h1 style={{ fontSize: '3.5rem', margin: '1rem 0', lineHeight: '1.1', color: '#000' }}>
          Engineering High-Performance <br/> Digital Products
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          We design, engineer, and scale world-class web, mobile, and backend cloud systems. Trusted by local builders and global enterprises.
        </p>
        <a href="#contact" style={{ padding: '1rem 2rem', backgroundColor: '#000', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: '500' }}>
          Start a Project
        </a>
      </header>

      {/* 3. SERVICES SECTION */}
      <section id="services" style={{ padding: '5rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #eaeaea', paddingBottom: '1rem', marginBottom: '2rem' }}>
          What We Build
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ padding: '2rem', border: '1px solid #eaeaea', borderRadius: '12px' }}>
            <h3 style={{ marginTop: 0 }}>Custom Web Portals</h3>
            <p style={{ color: '#666' }}>High-speed applications built using Next.js, React, and server-side rendering for optimal load speeds.</p>
            <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
              <li>React / Next.js / TypeScript</li>
              <li>SEO-optimized layouts</li>
            </ul>
          </div>

          <div style={{ padding: '2rem', border: '1px solid #eaeaea', borderRadius: '12px' }}>
            <h3 style={{ marginTop: 0 }}>Cross-Platform Mobile</h3>
            <p style={{ color: '#666' }}>Beautiful Android and iOS apps crafted with Flutter. Fully optimized for local networks and devices.</p>
            <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
              <li>Flutter & Dart compiled native</li>
              <li>Optimized for low bandwidth</li>
            </ul>
          </div>

          <div style={{ padding: '2rem', border: '1px solid #eaeaea', borderRadius: '12px' }}>
            <h3 style={{ marginTop: 0 }}>Enterprise APIs & Cloud</h3>
            <p style={{ color: '#666' }}>Scalable system architectures deploying Node.js and Laravel microservices on AWS.</p>
            <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
              <li>RESTful & GraphQL APIs</li>
              <li>Automated Docker deployments</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. PORTFOLIO SECTION */}
      <section id="portfolio" style={{ padding: '5rem 5%', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #eaeaea', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Featured Cases
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <article style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase' }}>Mobile Application • Quiz Academy</span>
              <h3 style={{ margin: '0.5rem 0' }}>Myan Quiz App</h3>
              <p style={{ margin: '0 0 1rem 0', color: '#444' }}>A multiplayer quiz application configured for hundreds of thousands of concurrent local players, featuring real-time socket leaderboards.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ padding: '0.3rem 0.6rem', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '0.85rem' }}>Flutter</span>
                <span style={{ padding: '0.3rem 0.6rem', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '0.85rem' }}>Node.js</span>
              </div>
            </article>

            <article style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase' }}>GIS Enterprise Portal • Telecom Myanmar</span>
              <h3 style={{ margin: '0.5rem 0' }}>Spylnx Fiber Tracker</h3>
              <p style={{ margin: '0 0 1rem 0', color: '#444' }}>A web-based geographic mapping system mapping optical fiber cable assets, enabling automated maintenance dispatch.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ padding: '0.3rem 0.6rem', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '0.85rem' }}>React</span>
                <span style={{ padding: '0.3rem 0.6rem', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '0.85rem' }}>Laravel</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" style={{ padding: '5rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #eaeaea', paddingBottom: '1rem', marginBottom: '2rem' }}>
          Start Engineering Today
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Yangon Headquarters</h3>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Drop by our tech office or dispatch an email to schedule an architecture review.</p>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><strong>📍 Location:</strong> No. 42, Pyay Road, Kamayut Township, Yangon</li>
              <li><strong>✉️ Email:</strong> hello@software100.mm</li>
              <li><strong>📞 Phone:</strong> +95 9 770 100 100</li>
            </ul>
          </div>
          
          {/* Simple Server-Side Form Structure */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem' }} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Work Email" 
              required 
              style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem' }} 
            />
            <textarea 
              name="message" 
              placeholder="Tell us about your project infrastructure needs..." 
              rows="5" 
              required 
              style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem', fontFamily: 'inherit' }}
            ></textarea>
            <button 
              type="submit" 
              style={{ padding: '1rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Submit Inquiry
            </button>
          </form>

        </div>
      </section>

      {/* 6. FOOTER */}
      <footer style={{ padding: '3rem 5%', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
        <p style={{ margin: '0 0 1rem 0', fontWeight: 'bold' }}>&lt;/&gt; Software 100</p>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#aaa' }}>© 2026 Software 100 (Myanmar) Co., Ltd. All Rights Reserved.</p>
      </footer>

    </main>
  );
}