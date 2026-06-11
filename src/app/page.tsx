import Link from "next/link";

export const metadata = {
  title: "Software 100 — Reliable Software Partnerships in Myanmar",
  description: "Yangon's premier engineering studio. We act as your technical partner, bridging domain knowledge with scalable code.",
};

export default function Home() {
  return (
    <main className="font-sans text-gray-800 scroll-smooth selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
          &lt;/&gt; Software 100
        </Link>
        <div className="hidden md:flex gap-8 items-center font-medium">
          <a href="#approach" className="text-gray-500 hover:text-gray-900 transition-colors">Our Approach</a>
          <a href="#services" className="text-gray-500 hover:text-gray-900 transition-colors">Services</a>
          <a href="#contact" className="px-5 py-2 text-sm text-white bg-gray-900 rounded-full hover:bg-blue-600 transition-colors">
            Contact Us
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative flex flex-col items-center justify-center px-6 py-32 text-center bg-gradient-to-b from-gray-50 to-white">
        <span className="mb-4 text-sm font-bold tracking-widest text-blue-600 uppercase">
          More Than Just Coders
        </span>
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl leading-tight">
          Your Dedicated Tech Partner <br className="hidden md:block" /> in Myanmar
        </h1>
        <p className="max-w-2xl mt-6 text-lg text-gray-500 leading-relaxed">
          We bridge the gap between your business logic and technology. Stop worrying about miscommunication and failed projects. We bring structured teams, transparent Agile processes, and enterprise-grade security to your digital transformation.
        </p>
        <div className="mt-10">
          <a href="#contact" className="px-8 py-4 text-lg font-medium text-white transition-transform transform bg-gray-900 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-gray-800 focus:ring-4 focus:ring-gray-200">
            Discuss Your Project
          </a>
        </div>
      </header>

      {/* 3. WHY CHOOSE US */}
      <section id="approach" className="px-6 py-24 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Right Way to Build Software
          </h2>
          <div className="w-24 h-1 mt-4 mx-auto bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Virtual CTO & Domain Focus", desc: "We take time to understand your business domain, acting as your Virtual CTO to align tech with business goals." },
            { title: "Structured, Specialized Teams", desc: "No 'One Man Shows.' Every project gets a dedicated PM, UI/UX Designer, and specialized Developers." },
            { title: "Transparent Agile Process", desc: "You get a seat at the table with access to our Jira/Trello boards for continuous feedback on deliverables." },
            { title: "NDA & Data Security", desc: "We enforce strict NDAs and follow industry-best security practices to protect your business assets." }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 transition-shadow bg-white border border-gray-100 rounded-2xl hover:shadow-lg group">
              <span className="text-4xl font-black text-gray-100 group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
              <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES & TECH STACK SECTION */}
      <section id="services" className="px-6 py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Right Tech for the Right Job
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We don't force a single technology onto every problem. We select the specific stack that matches your requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-10 bg-white border border-gray-200 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">High-Performance Mobile & Web</h3>
              <p className="mt-4 text-gray-500 mb-6">Native-feeling Android and iOS apps alongside lightning-fast web portals.</p>
              <ul className="space-y-3 font-medium text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Android Native / Flutter</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Next.js / React</li>
              </ul>
            </div>

            <div className="p-10 bg-white border border-gray-200 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Scalable Backend Cloud Systems</h3>
              <p className="mt-4 text-gray-500 mb-6">Robust infrastructure capable of handling massive concurrency and complex logic.</p>
              <ul className="space-y-3 font-medium text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Laravel / Node.js</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> AWS Cloud Infrastructure</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Supabase & PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="px-6 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Effective communication is the key to software success. Reach out for an initial architecture review and see if our working style is the right fit for your business.
            </p>
            <ul className="space-y-6 text-gray-700 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <span><strong>Location:</strong><br/>No. 42, Pyay Road, Kamayut Township, Yangon</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <span><strong>Email:</strong><br/><a href="mailto:hello@software100.mm" className="text-blue-600 hover:underline">hello@software100.mm</a></span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <span><strong>Phone:</strong><br/>+95 9 770 100 100</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-white border border-gray-200 shadow-xl rounded-2xl">
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name / Company</label>
                <input 
                  type="text" 
                  id="name"
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email"
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea 
                  id="message"
                  rows="4" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Briefly describe your business logic and current bottlenecks..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-4 text-lg font-bold text-white transition-colors bg-gray-900 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
              >
                Request a Consultation
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="px-6 py-12 text-center text-gray-400 bg-gray-950">
        <p className="mb-2 text-xl font-bold text-white tracking-tight">&lt;/&gt; Software 100</p>
        <p className="text-sm">© {new Date().getFullYear()} Software 100 (Myanmar) Co., Ltd. All Rights Reserved.</p>
      </footer>

    </main>
  );
}