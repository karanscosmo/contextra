import React from 'react';
import { useRouter } from '../App';

export default function LandingPagePage() {
  const { navigate } = useRouter();

  return (
    <div className="bg-surface text-on-surface selection:bg-secondary-container/30 w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24
    }
.grain-overlay {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCvprbMNbcVBEalpQDLhDlRPGZrJ1cqD6Rnqmq2okKSH_NIPHAXy1Xtt3Be28pMC96uclFRfu8NWRtCEw0sR7BrnPo9tYs3FSIAnUEbjs_NAdP33646C7mB49wH8zmxVouyjzTNbTeUXB6JkbacQ1FhQfapqUz3keTrbInHxfN1jFZRf0q4K8kMX8kPcpTKBC6EcqUXejiK9UCnm9inqj_sI5vsoA-824pZx8c-IG48_8BksZrLbkUGWuk7InlSUdGEC-e8wzPD_fg);
    opacity: 0.03;
    pointer-events: none
    }` }} />
      
      {/* TopAppBar */}
      <nav className="bg-surface/60 backdrop-blur-2xl text-primary font-headline-md text-headline-md docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full border-b border-outline-variant/10">
        <div className="font-headline-md text-headline-md tracking-tighter text-on-surface cursor-pointer" onClick={() => navigate('/landing')}>Contextra</div>
        <div className="hidden md:flex gap-gutter-grid items-center">
          <button className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300 font-label-caps text-label-caps" onClick={() => navigate('/mission-control')}>Intelligence Canvas</button>
          <button className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300 font-label-caps text-label-caps" onClick={() => navigate('/knowledge')}>Knowledge Constellation</button>
          <button className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300 font-label-caps text-label-caps" onClick={() => navigate('/ingestion')}>Source Hub</button>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/settings')}>flare</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/notifications')}>notifications_none</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/profile')}>account_circle</span>
        </div>
      </nav>

      <main className="relative">
        <div className="grain-overlay absolute inset-0 z-10"></div>
        {/* Hero Section */}
        <section className="relative pt-32 pb-48 px-margin-page max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="mb-6 inline-block py-1 px-3 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-caps text-label-caps text-secondary">
            THE NEXT CHAPTER OF SYNTHESIS
          </div>
          <h1 className="font-display-hero text-display-hero mb-12 max-w-4xl tracking-tight leading-tight">
            Where Knowledge <br/>
            <span className="italic font-light text-secondary">Becomes Context</span>
          </h1>
          {/* Hero Visual: Semantic Network & Fragments */}
          <div className="relative w-full h-[500px] mt-12 mb-12 rounded-xl overflow-hidden bg-surface-container-low/50 border border-surface-variant">
            <img alt="" className="w-full h-full object-cover mix-blend-multiply opacity-80" data-alt="A sophisticated digital landscape featuring floating translucent glass shards and glowing semantic nodes interconnected by thin golden threads." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwVFfYeHGjPBmsBTm7pZRcMlZU0kBuxVPCs1NtB6EDGSDNnZ552Xk_FJ_VV8V2SwnhtQ6u6coPcNGX3lIpCRUhLpIl96LRL1TH9UsSHi7qjXiHECSlNTCV-zUKJH0jzz85AMqcdem4aYy7J6D3R8w5qwU1hPiM7k2vLrcOy7rFVvf7z1l8NyigFgVbJTxNqR_nlBX7tkwCRy_BoEUCm7aDwRTIgWAHvZKxG5llPuwjwwbiLKfel_Gq_m750Xra11LuAsLrvCnYQCk"/>
            {/* Floating Source DNA Fragments (Glassmorphism Cards) */}
            <div className="absolute top-1/4 left-10 w-48 p-4 bg-surface-bright/40 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl rotate-[-2deg]">
              <p className="font-mono-ui text-mono-ui text-secondary uppercase mb-2">Source DNA: REF_092</p>
              <p className="font-body-md text-[13px] leading-relaxed text-on-surface-variant">Cross-referencing neurological signals with linguistic synthesis patterns...</p>
            </div>
            <div className="absolute bottom-1/4 right-10 w-56 p-4 bg-surface-bright/40 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl rotate-[3deg]">
              <p className="font-mono-ui text-mono-ui text-secondary uppercase mb-2">Vector Synthesis</p>
              <p className="font-body-md text-[13px] leading-relaxed text-on-surface-variant">Normalizing 1.2M nodes into a single coherent intelligence constellation.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-on-surface transition-all scale-100 hover:scale-105 active:scale-95 shadow-lg shadow-primary/10" onClick={() => navigate('/login')}>
              BEGIN SYNTHESIS
            </button>
            <button className="bg-surface-container-highest/50 border border-outline-variant/30 px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-surface-variant transition-all" onClick={() => navigate('/about')}>
              EXPLORE PHILOSOPHY
            </button>
          </div>
        </section>

        {/* Bento Grid: Intelligence Ecosystem */}
        <section className="py-24 px-margin-page max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-gutter-grid">
            {/* Source Ingestion Showcase */}
            <div className="col-span-12 md:col-span-7 h-[500px] p-12 bg-surface-container-low border border-outline-variant/20 rounded-3xl relative overflow-hidden group">
              <div className="relative z-20 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-4">Ingest Everything. <br/>Lose Nothing.</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Our tactile ingestion engine maps the metadata of every PDF, note, and transcript into a persistent memory layer.</p>
                </div>
                <div className="flex gap-4 items-end overflow-hidden">
                  {/* Ingestion UI Mockup */}
                  <div className="w-40 h-56 bg-surface p-4 border border-outline-variant/40 rounded-xl shadow-sm translate-y-8 group-hover:translate-y-4 transition-transform duration-500 cursor-pointer" onClick={() => navigate('/ingestion')}>
                    <span className="material-symbols-outlined text-primary mb-4">description</span>
                    <div className="h-2 w-full bg-surface-variant mb-2"></div>
                    <div className="h-2 w-2/3 bg-surface-variant mb-2"></div>
                    <div className="h-2 w-1/2 bg-surface-variant"></div>
                  </div>
                  <div className="w-40 h-56 bg-surface p-4 border border-outline-variant/40 rounded-xl shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500 cursor-pointer" onClick={() => navigate('/ingestion')}>
                    <span className="material-symbols-outlined text-secondary mb-4">folder_open</span>
                    <div className="h-2 w-full bg-surface-variant mb-2"></div>
                    <div className="h-2 w-3/4 bg-surface-variant mb-2"></div>
                    <div className="h-2 w-1/4 bg-surface-variant"></div>
                  </div>
                  <div className="w-40 h-56 bg-surface p-4 border border-outline-variant/40 rounded-xl shadow-lg translate-y-12 group-hover:translate-y-8 transition-transform duration-500 cursor-pointer" onClick={() => navigate('/ingestion')}>
                    <span className="material-symbols-outlined text-tertiary mb-4">link</span>
                    <div className="h-2 w-full bg-surface-variant mb-2"></div>
                    <div className="h-2 w-full bg-surface-variant mb-2"></div>
                    <div className="h-2 w-1/2 bg-surface-variant"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined !text-[200px]" style={{ "fontVariationSettings": "'wght' 100" }}>inventory</span>
              </div>
            </div>
            {/* Synthesis Preview */}
            <div className="col-span-12 md:col-span-5 h-[500px] p-12 bg-secondary-container/10 border border-secondary-container/20 rounded-3xl relative flex flex-col justify-between cursor-pointer" onClick={() => navigate('/synthesis')}>
              <div>
                <h3 className="font-headline-lg text-headline-lg mb-4">Pure Synthesis</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">AI-driven narrative construction that preserves your unique cognitive voice while connecting disparate dots.</p>
              </div>
              <div className="relative w-full aspect-square mt-8">
                {/* Knowledge Constellation Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(circle,rgba(94,91,124,0.1)_0%,transparent_70%)]"></div>
                  <div className="absolute border border-secondary/20 w-32 h-32 rounded-full animate-pulse"></div>
                  <div className="absolute border border-secondary/10 w-64 h-64 rounded-full"></div>
                  <div className="absolute w-2 h-2 bg-secondary rounded-full top-1/4 left-1/4"></div>
                  <div className="absolute w-1.5 h-1.5 bg-secondary/40 rounded-full bottom-1/3 right-1/4"></div>
                  <div className="absolute w-1 h-1 bg-secondary rounded-full top-1/2 right-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-32 px-margin-page">
          <div className="max-w-7xl mx-auto bg-surface-dim rounded-[48px] overflow-hidden relative">
            <img alt="" className="w-full h-[600px] object-cover opacity-60 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLqVwNQWXJf9dml5ojzeBn3IRKdGWBtx4R08-ahfGn0dL2nvgGAVTqqXiIP2wAMFX88_M1Cz648OpzS_LUs8JFRGmxWpD3yyAFGERr3GraE2xCut_glbL6U4IJWtzcHyVLwkEzS4-VpIWTtTYG299cccsmrsT2rtAfyBK_5rRbg7G6VwlY5k0HeQYBu-sw-Y9FrE3pIyhZzDns3gYvinO_-vVQ106gOP-NpOTiStOXTCujWsAhLBzYPzWi3prE_RexkSh0XGvRX-g"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-margin-page bg-gradient-to-t from-surface via-transparent to-transparent">
              <h2 className="font-display-hero text-[56px] leading-tight mb-8 text-on-surface">The Intelligence Canvas Awaits.</h2>
              <p className="font-body-lg text-body-lg max-w-xl mb-12 text-on-surface-variant">Join the waitlist for the Vellum Workspace. Designed for researchers, strategists, and thinkers who demand clarity.</p>
              <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
                <input className="flex-grow px-6 py-4 bg-surface/80 backdrop-blur-md border border-outline-variant/40 rounded-full font-body-md focus:outline-none focus:border-secondary" placeholder="Email address" type="email"/>
                <button className="px-8 py-4 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:bg-on-surface transition-all whitespace-nowrap" onClick={() => navigate('/signup')}>RESERVE ACCESS</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-surface-variant w-full py-12 px-margin-page">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full">
          <div className="mb-8 md:mb-0">
            <div className="font-headline-lg text-headline-lg tracking-tighter text-on-surface mb-2">Contextra</div>
            <p className="text-on-surface-variant font-body-md">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
          </div>
          <div className="flex gap-gutter-grid items-center">
            <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" onClick={() => navigate('/about')}>Philosophy</button>
            <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" onClick={() => navigate('/settings')}>Settings</button>
            <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" onClick={() => navigate('/docs')}>Docs</button>
            <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" onClick={() => navigate('/contact')}>Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
