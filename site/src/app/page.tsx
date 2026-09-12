import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{background:'#faf5e6'}}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{background:'#faf5e6', borderColor:'#1b3a2f20'}}>
        <div className="max-w-[1440px] mx-auto px-8 py-5 flex justify-between items-center">
          <span className="text-sm tracking-[0.12em] uppercase" style={{color:'#1b3a2f'}}>Studio Homotomo</span>
          <div className="flex gap-8 text-sm tracking-[0.06em] uppercase" style={{color:'#1b3a2f'}}>
            <Link href="#work" className="hover:opacity-60 transition">Work</Link>
            <Link href="#about" className="hover:opacity-60 transition">About</Link>
            <Link href="#services" className="hover:opacity-60 transition">Services</Link>
            <Link href="#contact" className="hover:opacity-60 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-24">
        <p className="text-xs tracking-[0.16em] uppercase mb-6" style={{color:'#4a7c59'}}>Hong Kong · Creative Studio</p>
        <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.1] max-w-4xl" style={{color:'#1b3a2f'}}>
          We make dreams,<br/>and something warm<br/>to the world.
        </h1>
        <p className="mt-8 text-lg max-w-xl leading-relaxed" style={{color:'#5c4033'}}>
          Brand strategy, visual design, and web design for ambitious brands in Hong Kong and beyond.
        </p>
        <div className="mt-12 w-px h-16 mx-auto" style={{background:'#b8860b'}} />
      </section>

      {/* WORK */}
      <section id="work" className="max-w-[1440px] mx-auto px-8 py-32">
        <div className="flex items-baseline justify-between mb-16">
          <p className="text-xs tracking-[0.16em] uppercase" style={{color:'#4a7c59'}}>Selected Work</p>
          <span className="text-sm" style={{color:'#5c4033'}}>2024 — 2026</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title:'Botanical Brand', cat:'Brand Identity', year:'2026' },
            { title:'Earth & Grain', cat:'Web Design', year:'2026' },
            { title:'Moss Studio', cat:'Visual System', year:'2025' },
            { title:'Golden Hour Co.', cat:'Branding + Web', year:'2025' },
          ].map((p,i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] flex items-center justify-center" style={{background:'#4a7c5915', border:'1px solid #4a7c5930', borderRadius:0}}>
                <span className="text-xs tracking-[0.12em] uppercase" style={{color:'#4a7c5960'}}>{p.title}</span>
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <span className="text-xl font-serif" style={{color:'#1b3a2f'}}>{p.title}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm" style={{color:'#5c4033'}}>{p.cat}</span>
                  <span className="text-sm" style={{color:'#4a7c59'}}>{p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32" style={{background:'#1b3a2f'}}>
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs tracking-[0.16em] uppercase mb-8" style={{color:'#8fbc8f'}}>About</p>
          </div>
          <div>
            <p className="font-serif text-3xl leading-[1.3] mb-8" style={{color:'#faf5e6'}}>
              Studio Homotomo is a Hong Kong-based creative collective. We craft brands, design visuals, and build websites for ambitious brands.
            </p>
            <p className="text-lg leading-relaxed" style={{color:'#faf5e6bb'}}>
              We believe in the power of storytelling, the beauty of simplicity, and the importance of human connection in everything we create.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-[1440px] mx-auto px-8 py-32">
        <p className="text-xs tracking-[0.16em] uppercase mb-16" style={{color:'#4a7c59'}}>Services</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { num:'01', title:'Brand Strategy', desc:'Defining who you are, what you stand for, and how to tell your story with clarity and purpose.' },
            { num:'02', title:'Visual Design', desc:'Logos, identities, print, and digital assets that make you memorable and unmistakably yours.' },
            { num:'03', title:'Web Design', desc:'Beautiful, responsive websites that convert visitors into customers — built to grow with you.' },
          ].map((s) => (
            <div key={s.num} className="pt-6" style={{borderTop:'1px solid #1b3a2f20'}}>
              <span className="text-sm font-mono" style={{color:'#4a7c59'}}>{s.num}</span>
              <h3 className="text-2xl font-serif mt-4 mb-5" style={{color:'#1b3a2f'}}>{s.title}</h3>
              <p className="text-base leading-relaxed" style={{color:'#5c4033'}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32" style={{background:'#4a7c5915'}}>
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-[1.4] max-w-3xl mx-auto" style={{color:'#1b3a2f'}}>
            &ldquo;Studio Homotomo transformed our brand with warmth and precision. The website they built truly reflects who we are.&rdquo;
          </p>
          <p className="mt-6 text-sm tracking-[0.12em] uppercase" style={{color:'#5c4033'}}>— Client, Hong Kong</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-[1440px] mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs tracking-[0.16em] uppercase mb-8" style={{color:'#4a7c59'}}>Get in Touch</p>
          </div>
          <div>
            <p className="font-serif text-4xl leading-[1.2] mb-10" style={{color:'#1b3a2f'}}>
              Ready to make something warm for the world?
            </p>
            <a href="mailto:hello@studio-homotomo.com" className="text-lg underline underline-offset-4 hover:no-underline" style={{color:'#1b3a2f'}}>
              hello@studio-homotomo.com
            </a>
            <div className="mt-14 space-y-3 text-sm" style={{color:'#5c4033'}}>
              <p>Studio Homotomo Limited</p>
              <p>Hong Kong</p>
              <p><a href="https://instagram.com/studio_homotomo" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">Instagram → @studio_homotomo</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8" style={{background:'#1b3a2f'}}>
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <span className="text-xs tracking-[0.12em] uppercase" style={{color:'#8fbc8f'}}>© 2026 Studio Homotomo</span>
          <span className="text-xs tracking-[0.12em] uppercase" style={{color:'#8fbc8f'}}>Hong Kong</span>
        </div>
      </footer>
    </main>
  );
}