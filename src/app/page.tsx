import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-forest overflow-x-hidden">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-forest/10">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-5 flex justify-between items-center">
          <span className="text-sm tracking-[0.12em] uppercase font-medium">Studio Homotomo</span>
          <div className="hidden md:flex gap-10 text-sm tracking-[0.04em]">
            <Link href="#work" className="nav-link active">Work</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </div>
          <div className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-end px-8 lg:px-12 pt-32 pb-16">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/20 to-cream z-10" />
          <div className="absolute inset-0 bg-[#4a7c59]/8">
            <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 30% 40%, rgba(184,134,11,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(74,124,89,0.1) 0%, transparent 40%)'}} />
          </div>
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs tracking-[0.2em] uppercase mb-6 text-moss animate-fadeIn">Hong Kong · Creative Studio</p>
              <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em] animate-fadeUp">
                We make dreams,<br/>
                <span className="text-moss">and something warm</span><br/>
                to the world.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-4">
              <p className="text-base leading-relaxed text-bark max-w-sm animate-fadeUp delay-2">
                Brand strategy, visual design, and web design for ambitious brands in Hong Kong and beyond.
              </p>
              <div className="mt-8 flex items-center gap-4 animate-fadeUp delay-3">
                <a href="#work" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase hover-underline">
                  View Work <span className="text-lg">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn delay-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-forest/40">Scroll</span>
          <div className="w-px h-8 bg-forest/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-forest/60 animate-[scrollDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="py-8 border-y border-forest/10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {Array.from({length: 4}).map((_,i) => (
            <span key={i} className="text-sm tracking-[0.16em] uppercase text-forest/40 flex items-center gap-12">
              Brand Strategy · Visual Design · Web Design · Art Direction · Identity Systems · Digital Experiences
            </span>
          ))}
        </div>
      </div>

      {/* ─── WORK / GALLERY ─── */}
      <section id="work" className="max-w-[1440px] mx-auto px-8 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-moss mb-4">Selected Work</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1]">Recent Projects</h2>
          </div>
          <p className="text-bark text-base max-w-sm">A curated selection of branding, visual design, and web projects we've crafted for our clients.</p>
        </div>

        {/* Gallery Grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Large feature */}
          <div className="md:col-span-7 project-card group cursor-pointer">
            <div className="relative aspect-[4/3] bg-moss/10 overflow-hidden rounded-sm">
              <div className="card-image absolute inset-0 bg-gradient-to-br from-moss/20 to-forest/10 flex items-center justify-center">
                <span className="text-xs tracking-[0.16em] uppercase text-moss/40">Botanical Brand — Full Identity</span>
              </div>
              <div className="card-overlay absolute inset-0 bg-forest/60 opacity-0 flex items-end p-8">
                <div className="text-cream">
                  <p className="text-xs tracking-[0.16em] uppercase mb-2 text-leaf">Brand Identity</p>
                  <h3 className="font-display text-2xl">Botanical Brand</h3>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between items-baseline">
              <span className="font-display text-xl">Botanical Brand</span>
              <span className="text-sm text-bark">2026</span>
            </div>
          </div>

          {/* Small feature */}
          <div className="md:col-span-5 project-card group cursor-pointer">
            <div className="relative aspect-[4/3] bg-gold/10 overflow-hidden rounded-sm">
              <div className="card-image absolute inset-0 bg-gradient-to-bl from-gold/15 to-bark/10 flex items-center justify-center">
                <span className="text-xs tracking-[0.16em] uppercase text-gold/40">Earth & Grain — Web Design</span>
              </div>
              <div className="card-overlay absolute inset-0 bg-forest/60 opacity-0 flex items-end p-8">
                <div className="text-cream">
                  <p className="text-xs tracking-[0.16em] uppercase mb-2 text-leaf">Web Design</p>
                  <h3 className="font-display text-2xl">Earth & Grain</h3>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between items-baseline">
              <span className="font-display text-xl">Earth & Grain</span>
              <span className="text-sm text-bark">2026</span>
            </div>
          </div>

          {/* Small feature */}
          <div className="md:col-span-5 project-card group cursor-pointer">
            <div className="relative aspect-[4/3] bg-forest/5 overflow-hidden rounded-sm">
              <div className="card-image absolute inset-0 bg-gradient-to-tr from-forest/10 to-moss/10 flex items-center justify-center">
                <span className="text-xs tracking-[0.16em] uppercase text-forest/30">Moss Studio — Visual System</span>
              </div>
              <div className="card-overlay absolute inset-0 bg-forest/60 opacity-0 flex items-end p-8">
                <div className="text-cream">
                  <p className="text-xs tracking-[0.16em] uppercase mb-2 text-leaf">Visual System</p>
                  <h3 className="font-display text-2xl">Moss Studio</h3>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between items-baseline">
              <span className="font-display text-xl">Moss Studio</span>
              <span className="text-sm text-bark">2025</span>
            </div>
          </div>

          {/* Large feature */}
          <div className="md:col-span-7 project-card group cursor-pointer">
            <div className="relative aspect-[4/3] bg-bark/5 overflow-hidden rounded-sm">
              <div className="card-image absolute inset-0 bg-gradient-to-tl from-bark/10 to-gold/10 flex items-center justify-center">
                <span className="text-xs tracking-[0.16em] uppercase text-bark/30">Golden Hour Co. — Branding + Web</span>
              </div>
              <div className="card-overlay absolute inset-0 bg-forest/60 opacity-0 flex items-end p-8">
                <div className="text-cream">
                  <p className="text-xs tracking-[0.16em] uppercase mb-2 text-leaf">Branding + Web</p>
                  <h3 className="font-display text-2xl">Golden Hour Co.</h3>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between items-baseline">
              <span className="font-display text-xl">Golden Hour Co.</span>
              <span className="text-sm text-bark">2025</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase hover-underline">
            View All Projects <span className="text-lg">→</span>
          </a>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="bg-forest text-cream py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.2em] uppercase text-leaf mb-6">About Us</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1]">
              A creative collective rooted in Hong Kong, reaching the world.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <p className="text-xl leading-[1.5] text-cream/90">
              Studio Homotomo is a Hong Kong-based creative collective. We craft brands, design visuals, and build websites for ambitious brands who want to make something warm for the world.
            </p>
            <p className="text-lg leading-relaxed text-cream/70">
              We believe in the power of storytelling, the beauty of simplicity, and the importance of human connection in everything we create. Every project is a collaboration — we listen deeply, think carefully, and craft with intention.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-cream/10">
              <div>
                <p className="font-display text-3xl text-gold-light">50+</p>
                <p className="text-sm tracking-[0.08em] uppercase text-cream/50 mt-1">Projects</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold-light">8+</p>
                <p className="text-sm tracking-[0.08em] uppercase text-cream/50 mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold-light">30+</p>
                <p className="text-sm tracking-[0.08em] uppercase text-cream/50 mt-1">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="max-w-[1440px] mx-auto px-8 lg:px-12 py-24 lg:py-32">
        <div className="max-w-2xl mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-moss mb-4">What We Do</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] mb-6">Our Services</h2>
          <p className="text-bark text-lg leading-relaxed">From strategy to execution, we offer end-to-end creative services that help brands connect, grow, and thrive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { num:'01', title:'Brand Strategy', desc:'Defining who you are, what you stand for, and how to tell your story with clarity and purpose.', tags:['Positioning','Messaging','Research'] },
            { num:'02', title:'Visual Design', desc:'Logos, identities, print, and digital assets that make you memorable and unmistakably yours.', tags:['Logo Design','Identity Systems','Print'] },
            { num:'03', title:'Web Design', desc:'Beautiful, responsive websites that convert visitors into customers — built to grow with you.', tags:['Responsive','SEO','Performance'] },
          ].map((s) => (
            <div key={s.num} className="group border-t-2 border-forest/10 pt-8 hover-lift">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-sm font-mono text-moss">{s.num}</span>
                <div className="w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-cream group-hover:border-forest transition-all duration-300">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6h8M7 3l3 3-3 3"/></svg>
                </div>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mb-4">{s.title}</h3>
              <p className="text-bark leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => (
                  <span key={tag} className="text-xs tracking-[0.08em] uppercase px-3 py-1.5 bg-forest/5 text-forest/60 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-moss mb-8">Kind Words</p>
          <blockquote className="font-display text-3xl lg:text-4xl leading-[1.3] max-w-4xl mx-auto text-forest">
            "Studio Homotomo transformed our brand with warmth and precision. They didn't just design a logo — they helped us find our voice. The website they built truly reflects who we are."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-moss/20 flex items-center justify-center">
              <span className="font-display text-lg text-moss">C</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Client Name</p>
              <p className="text-sm text-bark">CEO, Company · Hong Kong</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="max-w-[1440px] mx-auto px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-moss mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] mb-8">
              Ready to make something warm for the world?
            </h2>
            <p className="text-bark text-lg leading-relaxed max-w-md">
              We'd love to hear about your project. Drop us a line and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="lg:pt-16">
            <a href="mailto:hello@studio-homotomo.com" className="block group mb-10">
              <span className="text-sm tracking-[0.08em] uppercase text-moss block mb-2">Email</span>
              <span className="text-2xl lg:text-3xl font-display group-hover:text-moss transition-colors">hello@studio-homotomo.com</span>
            </a>
            <a href="https://instagram.com/studio_homotomo" target="_blank" rel="noopener noreferrer" className="block group mb-10">
              <span className="text-sm tracking-[0.08em] uppercase text-moss block mb-2">Instagram</span>
              <span className="text-2xl lg:text-3xl font-display group-hover:text-moss transition-colors">@studio_homotomo →</span>
            </a>
            <div className="pt-8 border-t border-forest/10">
              <p className="text-sm tracking-[0.08em] uppercase text-moss block mb-2">Location</p>
              <span className="text-lg">Studio Homotomo Limited</span>
              <br />
              <span className="text-bark">Hong Kong</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-forest text-cream py-12 px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-[0.12em] uppercase">© 2026 Studio Homotomo</span>
            <span className="w-1 h-1 rounded-full bg-leaf" />
            <span className="text-sm text-cream/50">Hong Kong</span>
          </div>
          <div className="flex gap-8 text-sm text-cream/50">
            <a href="#" className="hover:text-cream transition">Privacy</a>
            <a href="#" className="hover:text-cream transition">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}