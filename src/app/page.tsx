'use client';

import Link from "next/link";
import { useState } from "react";

const translations = {
  en: {
    nav: {
      methodology: "Our Way",
      caseStudies: "Success Stories",
      solutions: "Solutions",
      consultation: "Free Consultation",
    },
    hero: {
      badge: "Supporting Local Growth",
      title: "Empowering Myanmar's MSMEs with Digital Solutions",
      desc: "We build affordable, scalable, and reliable software designed specifically for Micro, Small, and Medium Enterprises. Grow your business with confidence.",
      ctaPrimary: "Start Growing",
      ctaSecondary: "Success Stories",
    },
    trusted: "Partnering with Local MSMEs",
    approach: {
      title: "Simple & Effective Growth Strategy",
      desc: "We know MSMEs. We don't use over-complicated jargon. We focus on tools that help you save time and increase profit.",
      features: [
        { title: "Affordable Tech Advisory", desc: "Expert advice that fits your budget. We help you pick only the tools you actually need." },
        { title: "Reliable Local Support", desc: "We're right here in Yangon. Quick response times and support in your own language." },
        { title: "Transparent Pricing", desc: "No hidden costs. We provide clear, fixed-price quotes tailored for small business budgets." },
        { title: "Easy-to-Use Systems", desc: "Software that your team can learn in hours, not weeks. Simple, clean, and effective." }
      ]
    },
    caseStudies: {
      badge: "Local Success",
      title: "Real Growth for Local Businesses",
      cta: "See More Stories",
      items: [
        {
          client: "Yangon Retail Shop",
          metric: "50% Less Paperwork",
          result: "Implemented a simple inventory system that saved 20 hours of manual work every week.",
          tags: ["Retail", "Inventory", "Web"]
        },
        {
          client: "Mandalay Distribution",
          metric: "30% Sales Increase",
          result: "A basic mobile order app that allowed their customers to order 24/7 without calling.",
          tags: ["Distribution", "Mobile App"]
        }
      ]
    },
    solutions: {
      title: "Solutions for Your Business Needs",
      desc: "Modern tools selected to help you manage your daily operations efficiently.",
      items: [
        { title: "Sales & Inventory", desc: "Track your sales, stock, and customers in real-time from anywhere.", techs: ['POS Systems', 'Inventory Tracking', 'Daily Reports', 'Customer Database'] },
        { title: "Digital Presence", desc: "Get found by more customers with a professional website or mobile app.", techs: ['Business Websites', 'Online Booking', 'Facebook Integration', 'Mobile Apps'] }
      ]
    },
    contact: {
      title: "Let's Grow Together",
      desc: "Have questions about digitizing your business? Contact our friendly team for a no-obligation chat.",
      labels: {
        hq: "Office",
        email: "General Inquiries",
        phone: "Call Us",
        name: "Full Name / Business Name",
        org: "Your Industry",
        bizEmail: "Email or Phone",
        scope: "How can we help you?",
        submit: "Send Message"
      }
    },
    footer: {
      desc: "Supporting Myanmar's small business community through technology and partnership.",
      solutions: "Solutions",
      company: "Company",
      privacy: "Privacy",
      terms: "Terms"
    }
  },
  mm: {
    nav: {
      methodology: "လုပ်ဆောင်ပုံအဆင့်ဆင့်",
      caseStudies: "အောင်မြင်မှုမှတ်တမ်းများ",
      solutions: "ဝန်ဆောင်မှုများ",
      consultation: "အခမဲ့ဆွေးနွေးရန်",
    },
    hero: {
      badge: "ပြည်တွင်းလုပ်ငန်းများကို အားပေးကူညီခြင်း",
      title: "မြန်မာနိုင်ငံရှိ MSME လုပ်ငန်းများအတွက် ဒစ်ဂျစ်တယ်နည်းပညာများ",
      desc: "အသေးစား၊ အငယ်စားနှင့် အလတ်စား စီးပွားရေးလုပ်ငန်းများအတွက် အထူးဒီဇိုင်းထုတ်ထားသော သင့်တင့်သောဈေးနှုန်း၊ ယုံကြည်စိတ်ချရသော ဆော့ဖ်ဝဲလ်များကို ကျွန်ုပ်တို့ တည်ဆောက်ပေးပါသည်။",
      ctaPrimary: "ယခုပဲစတင်ပါ",
      ctaSecondary: "အောင်မြင်မှုများကြည့်ရန်",
    },
    trusted: "ပြည်တွင်း MSME လုပ်ငန်းများနှင့် လက်တွဲဆောင်ရွက်ခြင်း",
    approach: {
      title: "ရိုးရှင်းပြီး ထိရောက်သော ဖွံ့ဖြိုးတိုးတက်မှု နည်းဗျူဟာ",
      desc: "ကျွန်ုပ်တို့သည် MSME လုပ်ငန်းများကို နားလည်ပါသည်။ ခက်ခဲသော စကားလုံးများအစား သင့်လုပ်ငန်းအတွက် အချိန်ကုန်သက်သာပြီး အမြတ်တိုးစေမည့် ကိရိယာများကိုသာ အဓိကထားပါသည်။",
      features: [
        { title: "သင့်တင့်သော နည်းပညာအကြံပေးခြင်း", desc: "သင့်ဘတ်ဂျက်နှင့် ကိုက်ညီသော အကြံပေးချက်များ။ သင့်လုပ်ငန်းအတွက် တကယ်လိုအပ်မည့် ကိရိယာများကိုသာ ရွေးချယ်ပေးပါသည်။" },
        { title: "ယုံကြည်စိတ်ချရသော ပြည်တွင်းအထောက်အပံ့", desc: "ကျွန်ုပ်တို့သည် ရန်ကုန်တွင် ရှိပါသည်။ မြန်မာဘာသာဖြင့် မြန်ဆန်စွာ အကူအညီပေးနိုင်ပါသည်။" },
        { title: "ပွင့်လင်းမြင်သာသော ဈေးနှုန်း", desc: "နောက်ထပ်ပေးဆောင်ရမည့် ကုန်ကျစရိတ်များ မရှိပါ။ အသေးစားလုပ်ငန်းများအတွက် ရှင်းလင်းသော ဈေးနှုန်းများဖြင့် ဆောင်ရွက်ပေးပါသည်။" },
        { title: "အသုံးပြုရလွယ်ကူသော စနစ်များ", desc: "နာရီပိုင်းအတွင်း အသုံးပြုတတ်စေမည့် ရိုးရှင်းပြီး ထိရောက်သော ဆော့ဖ်ဝဲလ်များ ဖြစ်ပါသည်။" }
      ]
    },
    caseStudies: {
      badge: "ပြည်တွင်းအောင်မြင်မှုများ",
      title: "လုပ်ငန်းရှင်များ၏ တကယ့်အောင်မြင်မှုမှတ်တမ်းများ",
      cta: "အောင်မြင်မှုများထပ်ကြည့်ရန်",
      items: [
        {
          client: "ရန်ကုန် လက်လီအရောင်းဆိုင်",
          metric: "စာရွက်စာတမ်းလုပ်ငန်း ၅၀% သက်သာခြင်း",
          result: "ရိုးရှင်းသော ကုန်ပစ္စည်းစာရင်းထိန်းစနစ်ကြောင့် တစ်ပတ်လျှင် အချိန် ၂၀ နာရီကျော် သက်သာစေခဲ့ပါသည်။",
          tags: ["လက်လီအရောင်း", "ကုန်ပစ္စည်းစာရင်း", "Web"]
        },
        {
          client: "မန္တလေး ဖြန့်ချိရေးလုပ်ငန်း",
          metric: "အရောင်း ၃၀% တိုးတက်လာခြင်း",
          result: "ဖောက်သည်များ ဖုန်းဆက်ရန်မလိုဘဲ ၂၄ နာရီ မှာယူနိုင်သော မိုဘိုင်းလ်အက်ပ်ကြောင့် အရောင်းတိုးတက်လာပါသည်။",
          tags: ["ဖြန့်ချိရေး", "Mobile App"]
        }
      ]
    },
    solutions: {
      title: "သင့်လုပ်ငန်းအတွက် လိုအပ်သော ဝန်ဆောင်မှုများ",
      desc: "နေ့စဉ်လုပ်ငန်းဆောင်တာများကို ထိရောက်စွာ စီမံခန့်ခွဲနိုင်ရန် ခေတ်မီနည်းပညာများဖြင့် ကူညီပေးပါသည်။",
      items: [
        { title: "အရောင်းနှင့် ကုန်ပစ္စည်းစာရင်း", desc: "အရောင်း၊ စတော့နှင့် ဖောက်သည်များကို နေရာမရွေး အချိန်နှင့်တပြေးညီ ကြည့်ရှုနိုင်ပါသည်။", techs: ['အရောင်းစနစ် (POS)', 'ကုန်ပစ္စည်းစာရင်းထိန်းခြင်း', 'နေ့စဉ်အစီရင်ခံစာ', 'ဖောက်သည်မှတ်တမ်း'] },
        { title: "အွန်လိုင်းရောက်ရှိမှု", desc: "လုပ်ငန်းဝဘ်ဆိုဒ် (သို့) မိုဘိုင်းလ်အက်ပ်များဖြင့် ဖောက်သည်များ ပိုမိုသိရှိလာစေရန် ဆောင်ရွက်ပေးပါသည်။", techs: ['လုပ်ငန်းဝဘ်ဆိုဒ်', 'အွန်လိုင်းမှ ဘိုကင်တင်ခြင်း', 'Facebook ချိတ်ဆက်ခြင်း', 'မိုဘိုင်းလ်အက်ပ်များ'] }
      ]
    },
    contact: {
      title: "အတူတကွ လက်တွဲဆောင်ရွက်ကြပါစို့",
      desc: "သင့်လုပ်ငန်းကို ဒစ်ဂျစ်တယ်ပြောင်းလဲရန် မေးမြန်းလိုသည်များရှိပါက ကျွန်ုပ်တို့၏အဖွဲ့ထံ အခမဲ့လာရောက်ဆွေးနွေးနိုင်ပါသည်။",
      labels: {
        hq: "ရုံးခန်းတည်နေရာ",
        email: "အထွေထွေမေးမြန်းရန်",
        phone: "ဖုန်းဖြင့်ဆက်သွယ်ရန်",
        name: "အမည် / လုပ်ငန်းအမည်",
        org: "လုပ်ငန်းအမျိုးအစား",
        bizEmail: "အီးမေးလ် (သို့) ဖုန်းနံပါတ်",
        scope: "ကျွန်ုပ်တို့ ဘယ်လိုကူညီပေးရမလဲ?",
        submit: "စာပို့ရန်"
      }
    },
    footer: {
      desc: "နည်းပညာနှင့် မိတ်ဖက်ပြုခြင်းဖြင့် မြန်မာနိုင်ငံရှိ အသေးစားလုပ်ငန်းများကို အားပေးကူညီနေပါသည်။",
      solutions: "ဝန်ဆောင်မှုများ",
      company: "ကုမ္ပဏီ",
      privacy: "ကိုယ်ရေးအချက်အလက်",
      terms: "စည်းကမ်းချက်များ"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'mm'>('en');
  const t = translations[lang];
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    bizEmail: '',
    scope: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after success
        setFormData({
          name: '',
          org: '',
          bizEmail: '',
          scope: '',
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tighter text-slate-900 transition-colors hover:text-blue-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white shadow-sm">S1</span>
            SOFTWARE 100
          </Link>
          
          <div className="flex items-center gap-4 md:gap-10">
            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 shadow-inner">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('mm')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'mm' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                MM
              </button>
            </div>

            <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest text-slate-500 lg:flex">
              <a href="#approach" className="transition-colors hover:text-slate-900">{t.nav.methodology}</a>
              <a href="#case-studies" className="transition-colors hover:text-slate-900">{t.nav.caseStudies}</a>
              <a href="#services" className="transition-colors hover:text-slate-900">{t.nav.solutions}</a>
            </div>
            
            <a href="#contact" className="rounded-full bg-slate-900 px-5 py-2.5 text-[10px] md:text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95">
              {t.nav.consultation}
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden border-b border-slate-50 bg-slate-50/30 px-6 py-24 text-center">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.3]">
            {t.hero.title}
          </h1>
          
          <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl leading-[1.8]">
            {t.hero.desc}
          </p>
          
          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a href="#contact" className="w-full rounded-full bg-slate-900 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-blue-700 sm:w-auto">
              {t.hero.ctaPrimary}
            </a>
            <a href="#case-studies" className="w-full rounded-full border border-slate-200 bg-white px-10 py-5 text-lg font-bold text-slate-900 transition-all hover:bg-slate-50 sm:w-auto">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      {/* 2.5 TRUSTED BY */}
      <section className="border-b border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{t.trusted}</p>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-30 md:gap-24">
            {['MSME Association', 'Local Tech', 'Township Biz', 'SME Hub', 'Retail Network'].map((brand) => (
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
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl leading-[1.2]">
                {t.approach.title}
              </h2>
              <p className="mt-8 text-lg font-light leading-[1.7] text-slate-500">
                {t.approach.desc}
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {t.approach.features.map((feature, idx) => (
                <div key={idx} className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:border-blue-200 hover:bg-white hover:shadow-xl">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-xs font-bold text-slate-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    0{idx + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900 leading-[1.3]">{feature.title}</h3>
                  <p className="text-sm leading-[1.7] text-slate-500">{feature.desc}</p>
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
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">{t.caseStudies.badge}</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">{t.caseStudies.title}</h2>
            </div>
            <a href="#contact" className="border-b-2 border-blue-500 pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-blue-500">
              {t.caseStudies.cta}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {t.caseStudies.items.map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-slate-800 transition-all group-hover:ring-blue-500/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent p-8 flex items-end">
                    <span className="text-4xl font-black text-blue-500 md:text-5xl">{study.metric}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{study.client}</h3>
                <p className="mb-6 text-xl font-light leading-[1.8] text-slate-300">{study.result}</p>
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
              {t.solutions.title}
            </h2>
            <p className="mt-6 text-xl font-light text-slate-500">
              {t.solutions.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {t.solutions.items.map((sol, idx) => (
              <div key={idx} className="group rounded-2xl border border-slate-200 bg-white/80 p-12 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{sol.title}</h3>
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
                {t.contact.title}
              </h2>
              <p className="mt-8 text-xl font-light leading-relaxed text-slate-500">
                {t.contact.desc}
              </p>
              
              <div className="mt-16 space-y-10">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-200">📍</div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{t.contact.labels.hq}</h4>
                    <p className="text-lg font-bold text-slate-700">No. 42, Pyay Road, Kamayut Township, Yangon</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-200">✉️</div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{t.contact.labels.email}</h4>
                    <a href="mailto:hello@software100.mm" className="text-lg font-bold text-slate-700 hover:text-blue-600">hello@software100.mm</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-200">📞</div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{t.contact.labels.phone}</h4>
                    <p className="text-lg font-bold text-slate-700">+95 9 770 100 100</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl md:p-12">
              {/* Success message */}
              {submitStatus === 'success' && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 border border-green-200">
                  <p className="font-semibold">✅ Thank you! Your message has been sent successfully.</p>
                  <p className="text-sm mt-1">We'll get back to you soon.</p>
                </div>
              )}
              
              {/* Error message */}
              {submitStatus === 'error' && (
                <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800 border border-red-200">
                  <p className="font-semibold">❌ Oops! Something went wrong.</p>
                  <p className="text-sm mt-1">Please try again later.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.contact.labels.name}</label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600 disabled:opacity-50"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="org" className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.contact.labels.org}</label>
                    <input
                      id="org"
                      name="org"
                      required
                      value={formData.org}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600 disabled:opacity-50"
                      placeholder="Retail / Cafe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="bizEmail" className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.contact.labels.bizEmail}</label>
                  <input
                    id="bizEmail"
                    name="bizEmail"
                    required
                    value={formData.bizEmail}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600 disabled:opacity-50"
                    placeholder="09xxxxxxx"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="scope" className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.contact.labels.scope}</label>
                  <textarea
                    id="scope"
                    name="scope"
                    rows={4}
                    required
                    value={formData.scope}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none border-b border-slate-200 py-3 outline-none transition-colors focus:border-blue-600 disabled:opacity-50"
                    placeholder="..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      {t.contact.labels.submit}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </>
                  )}
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
                {t.footer.desc}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 md:gap-32">
              <div>
                <h5 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{t.footer.solutions}</h5>
                <ul className="space-y-4 text-sm font-medium text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">{t.solutions.items[0].title}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t.solutions.items[1].title}</a></li>
                </ul>
              </div>
              <div>
                <h5 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{t.footer.company}</h5>
                <ul className="space-y-4 text-sm font-medium text-slate-400">
                  <li><a href="#approach" className="hover:text-white transition-colors">{t.nav.methodology}</a></li>
                  <li><a href="#case-studies" className="hover:text-white transition-colors">{t.nav.caseStudies}</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-slate-900 pt-10 md:flex-row">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              © {new Date().getFullYear()} Software 100 (Myanmar) Co., Ltd.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
