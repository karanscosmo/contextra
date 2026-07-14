import React, { useEffect } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

export default function AboutPage() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Contextra - About';
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen w-full relative pb-32">
      {/* TopAppBar */}
      <nav className="bg-surface/60 backdrop-blur-2xl text-primary font-headline-md docked top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full border-b border-outline-variant/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/landing')}>
          <Logo size="xs" />
          <div className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</div>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-label-caps">
          <a onClick={() => navigate('/about')} className="text-primary font-bold hover:text-primary transition-colors cursor-pointer">About</a>
          <a onClick={() => navigate('/pricing')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">Pricing</a>
          <a onClick={() => navigate('/docs')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">Docs</a>
          <a onClick={() => navigate('/contact')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/login')} className="px-4 py-2 text-xs font-label-caps border border-outline-variant/30 hover:border-primary rounded-full transition-colors">
            Sign In
          </button>
          <button onClick={() => navigate('/signup')} className="px-4 py-2 text-xs font-label-caps bg-primary text-on-primary rounded-full hover:bg-on-surface transition-colors">
            Reserve Access
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-margin-page py-24 space-y-16">
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <div className="inline-block py-1 px-3 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-caps text-[10px] text-secondary tracking-widest uppercase">
            System Philosophy
          </div>
          <h1 className="font-display-hero text-headline-lg md:text-[56px] leading-tight text-on-surface">
            Cognitive tools for complex reasoning.
          </h1>
          <p className="font-body-lg text-on-surface-variant/80">
            Contextra is designed to reduce cognitive noise. We build software that allows intelligence to align, compose, and synthesize without friction.
          </p>
        </div>

        <hr className="border-t border-outline-variant/20" />

        <div className="space-y-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center">Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-grid">
            <div className="p-8 rounded-3xl border border-surface-variant bg-surface-container-low/30 space-y-4">
              <span className="material-symbols-outlined text-secondary text-3xl">hub</span>
              <h3 className="font-headline-md text-body-lg font-bold">Interconnected Knowledge</h3>
              <p className="font-body-md text-sm text-on-surface-variant/80 leading-relaxed">
                Rather than treating files, papers, and transcripts as isolated fragments, Contextra dynamically routes metadata into a centralized spatial index.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-surface-variant bg-surface-container-low/30 space-y-4">
              <span className="material-symbols-outlined text-secondary text-3xl">psychology</span>
              <h3 className="font-headline-md text-body-lg font-bold">Autonomous Collaboration</h3>
              <p className="font-body-md text-sm text-on-surface-variant/80 leading-relaxed">
                Our lightweight agents monitor your active queries, auto-curating relevant documents and finding semantic overlap patterns in the background.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-outline-variant/20" />

        <div className="space-y-6 text-center">
          <h2 className="font-headline-md text-headline-md text-on-surface">Ready to start?</h2>
          <p className="font-body-md text-on-surface-variant/80 max-w-lg mx-auto">
            Experience our Vellum Workspace. Reserve early access and shape your synthesis canvas.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button onClick={() => navigate('/signup')} className="px-8 py-4 bg-primary text-on-primary rounded-full font-label-caps text-xs hover:bg-on-surface shadow-lg transition-all">
              Initialize Workspace
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
