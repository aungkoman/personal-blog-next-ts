import Link from "next/link";

export const metadata = {
  title: "Software 100 — Enterprise Software Engineering",
  description: "Technical partnership studio delivering high-security, scalable software solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tighter text-slate-900 transition-colors hover:text-blue-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white shadow-sm">S1</span>
            SOFTWARE 100
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            <div className="flex gap-8 text-sm font-semibold uppercase tracking-widest text-slate-500">
              <a href="#approach" className="transition-colors hover:text-slate-900">Methodology</a>
              <a href="#case-studies" className="transition-colors hover:text-slate-900">Case Studies</a>
              <a href="#services" className="transition-colors hover:text-slate-900">Solutions</a>
            </div>
            <a href="#contact" className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95">
              Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden border-b border-slate-50 bg-slate-50/30 px-6 py-24 text-center">
        {/* Background Decoration */}
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Engineering Excellence</span>
          </div>
          
          <h1 className="text-balance text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
            The Technical Partner for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">Established Enterprises.</span>
          </h1>
          
          <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl">
            We architect and build mission-critical systems that drive Myanmar's digital economy. 
            Structured teams, rigorous security, and transparent delivery.
          </p>
          
          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a href="#contact" className="w-full rounded-full bg-slate-900 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-blue-700 sm:w-auto">
              Begin Partnership
            </a>
            <a href="#case-studies" className="w-full rounded-full border border-slate-200 bg-white px-10 py-5 text-lg font-bold text-slate-900 transition-all hover:bg-slate-50 sm:w-auto">
              View Case Studies
            </a>
          </div>
        </div>
      </header>

      {/* 2.5 TRUSTED BY */}
      <section className="border-b border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-30 md:gap-24">
            {['Global Bank', 'TechCorp', 'M-Logistics', 'RetailOne', 'AeroSystems'].map((brand) => (
              <span key={brand} className="text-xl font-serif font-bold italic text-slate-900 md:text-2xl">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY */}
      <section id="approach" className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-6 h-1 w-12 bg-blue-600"></div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                A Disciplined Approach to Development
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-slate-500">
                Software failure is often a communication failure. We mitigate risk through deep domain alignment and institutionalized processes.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { title: "Strategic Technical Advisory", desc: "We provide Virtual CTO services to ensure your technology roadmap serves your business objectives." },
                { title: "Institutional Grade Security", desc: "Data integrity is non-negotiable. We implement enterprise security protocols at every layer." },
                { title: "Full-Cycle Agile Delivery", desc: "Complete transparency via real-time access to our project management ecosystem." },
                { title: "Specialized Task Forces", desc: "Dedicated teams of PMs, Architects, and specialized engineers for every engagement." }
              ].map((feature, idx) => (
                <div key={idx} className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:border-blue-200 hover:bg-white hover:shadow-xl">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-xs font-bold text-slate-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    0{idx + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 CASE STUDIES */}
      <section id="case-studies" className="bg-slate-950 px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">Success Stories</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Validated ROI Metrics</h2>
            </div>
            <a href="#contact" className="border-b-2 border-blue-500 pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-blue-500">
              Request Full Portfolio
            </a>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {[
              {
                client: "Myanmar FinTech Group",
                metric: "40% Efficiency Gain",
                result: "Architected a high-concurrency payment gateway handling 1M+ monthly transactions.",
                tags: ["FinTech", "AWS", "Node.js"]
              },
              {
                client: "Regional Logistics Hub",
                metric: "2.5x Revenue Growth",
                result: "Developed an AI-driven routing engine that reduced fuel costs by 18% at scale.",
                tags: ["Logistics", "Python", "React Native"]
              }
            ].map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-slate-800 transition-all group-hover:ring-blue-500/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent p-8 flex items-end">
                    <span className="text-4xl font-black text-blue-500 md:text-5xl">{study.metric}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{study.client}</h3>
                <p className="mb-6 text-xl font-light leading-relaxed text-slate-300">{study.result}</p>
                <div className="flex gap-3">
                  {study.tags.map(tag => (
                    <span key={tag} className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS */}
      <section id="services" className="relative overflow-hidden bg-white px-6 py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Technology for Performance
            </h2>
            <p className="mt-6 text-xl font-light text-slate-500">
              Modern stacks selected for stability and enterprise-grade scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { title: "Omnichannel Ecosystems", desc: "Unified digital experiences across mobile, web, and desktop.", techs: ['React / Next.js', 'Flutter', 'iOS Native', 'Android Native'] },
              { title: "Cloud Infrastructure", desc: "Highly available backend systems designed for complex business logic.", techs: ['AWS / Azure', 'Node.js', 'Laravel', 'PostgreSQL'] }
            ].map((sol, idx) => (
              <div key={idx} className="group rounded-2xl border border-slate-200 bg-white/80 p-12 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:shadow-2xl">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">{sol.title}</h3>
                <p className="mb-10 leading-relaxed text-slate-500">{sol.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {sol.techs.map(tech => (
                    <div key={tech} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div> {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <section id="contact" className="bg-slate-50 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Initiate Transformation
              </h2>
              <p className="mt-8 text-xl font-light leading-relaxed text-slate-500">
                Our engineering leadership is ready to discuss your architecture. Schedule a confidential consultation.
              </p>
              
              <div className="mt-16 space-y-10">
                {[
                  { label: "HQ Location", value: "No. 42, Pyay Road, Kamayut Township, Yangon", icon: "📍" },
                  { label: "Strategic Inquiries", value: "partnership@software100.mm", icon: "✉️", link: "mailto:partnership@software100.mm" },
                  { label: "Direct Line", value: "+95 9 770 100 100", icon: "📞" }
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-200">{item.icon}</div>
                    <div>
                      <h4 className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-lg font-bold text-slate-700 hover:text-blue-600">{item.value}</a>
                      ) : (
                        <p className="text-lg font-bold text-slate-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input required className="w-full border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organization</label>
                    <input required className="w-full border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600" placeholder="Global Corp" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Business Email</label>
                  <input type="email" required className="w-full border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600" placeholder="jane@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Scope</label>
                  <textarea rows={4} required className="w-full resize-none border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600" placeholder="Technical challenges..." />
                </div>
                <button className="group flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-blue-700">
                  Request Consultation
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-16 md:flex-row">
            <div className="max-w-xs">
              <p className="flex items-center gap-2.5 text-xl font-bold tracking-tighter mb-8">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-white text-[10px] font-bold text-slate-950">S1</span>
                SOFTWARE 100
              </p>
              <p className="text-sm font-light leading-relaxed text-slate-500">
                Leading Myanmar's digital evolution through rigorous engineering and strategic partnership.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 md:gap-32">
              <div>
                <h5 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Solutions</h5>
                <ul className="space-y-4 text-sm font-medium text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Enterprise Web</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Mobile Platforms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cloud Strategy</a></li>
                </ul>
              </div>
              <div>
                <h5 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Company</h5>
                <ul className="space-y-4 text-sm font-medium text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-slate-900 pt-10 md:flex-row">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              © {new Date().getFullYear()} Software 100 (Myanmar) Co., Ltd.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
