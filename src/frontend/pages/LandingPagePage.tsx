import React, { useEffect } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function LandingPagePage() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Contextra - Home';
  }, []);

  useStyleBlock(`
        .feature-card { transition: all 0.3s ease; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(94,91,124,0.12); }
        .cta-glow { box-shadow: 0 8px 32px rgba(94,91,124,0.25); }
        .hero-badge { background: linear-gradient(135deg, rgba(94,91,124,0.08), rgba(94,87,143,0.12)); }
      `);

  return (
    <div className="text-on-surface selection:bg-secondary-container/30 w-full min-h-screen">

      {/* Navbar */}
      <nav className="bg-white/70 backdrop-blur-2xl sticky top-0 z-40 flex justify-between items-center px-8 md:px-16 h-16 w-full border-b border-outline-variant/15 shadow-sm">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/landing')}
        >
          <Logo size="sm" />
          <span className="font-headline-md text-[20px] text-on-surface font-bold tracking-tight">Contextra</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <button className="text-on-surface-variant hover:text-on-surface transition-colors text-[14px] font-medium" onClick={() => navigate('/mission-control')}>Product</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors text-[14px] font-medium" onClick={() => navigate('/pricing')}>Pricing</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors text-[14px] font-medium" onClick={() => navigate('/docs')}>Docs</button>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="text-on-surface-variant hover:text-on-surface transition-colors text-[14px] font-medium px-4 py-2"
            onClick={() => navigate('/login')}
          >
            Sign in
          </button>
          <button
            className="bg-secondary text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-secondary/90 transition-all shadow-sm"
            onClick={() => navigate('/signup')}
          >
            Get started free
          </button>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="pt-28 pb-24 px-6 max-w-6xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 border border-secondary/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-[12px] font-semibold tracking-wide uppercase">AI-Powered Research Platform</span>
          </div>

          <h1 className="text-[52px] md:text-[72px] font-bold tracking-tight leading-[1.1] text-on-surface mb-6 max-w-4xl mx-auto">
            Turn scattered research<br />
            <span className="text-secondary">into clear insights</span>
          </h1>

          <p className="text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
            Contextra connects your PDFs, notes, and web pages using AI — then helps you find patterns, generate summaries, and build knowledge that doesn't disappear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              className="bg-secondary text-white px-8 py-4 rounded-full text-[15px] font-semibold cta-glow hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95"
              onClick={() => navigate('/signup')}
            >
              Start for free →
            </button>
            <button
              className="bg-white/80 backdrop-blur-sm border border-outline-variant/40 text-on-surface px-8 py-4 rounded-full text-[15px] font-medium hover:bg-white hover:shadow-md transition-all"
              onClick={() => navigate('/mission-control')}
            >
              Open Workspace
            </button>
          </div>

          {/* Hero product preview */}
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl shadow-secondary/10 bg-white/60 backdrop-blur-md p-6">
            <div className="grid grid-cols-3 gap-4 text-left">
              {/* Source card */}
              <div className="bg-white rounded-xl p-4 border border-outline-variant/20 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">picture_as_pdf</span>
                  <span className="text-[11px] font-mono text-primary font-bold">PDF · Research Paper</span>
                </div>
                <p className="text-[13px] font-semibold text-on-surface mb-2">Neural Architecture in Modern Design Systems</p>
                <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-secondary rounded-full" />
                </div>
                <p className="text-[10px] text-secondary mt-1 font-mono">82% relevant to your workspace</p>
              </div>
              {/* AI insight card */}
              <div className="bg-secondary/5 border border-secondary/15 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
                  <span className="text-[11px] font-mono text-secondary font-bold">AI Insight</span>
                </div>
                <p className="text-[12px] text-on-surface leading-relaxed">Your 3 sources agree: haptic feedback reduces cognitive load by <strong>40%</strong> in high-density interfaces.</p>
              </div>
              {/* Knowledge map card */}
              <div className="bg-white rounded-xl p-4 border border-outline-variant/20 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">hub</span>
                  <span className="text-[11px] font-mono text-tertiary font-bold">Knowledge Map</span>
                </div>
                <p className="text-[12px] text-on-surface-variant mb-3">7 connected concepts discovered</p>
                <div className="flex gap-1 flex-wrap">
                  {['UX Design', 'Neuroscience', 'Typography'].map(tag => (
                    <span key={tag} className="text-[10px] bg-tertiary-container/40 text-on-tertiary-container px-2 py-0.5 rounded-full border border-tertiary/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-secondary text-[12px] font-bold uppercase tracking-widest mb-3">How Contextra Works</p>
            <h2 className="text-[36px] font-bold text-on-surface tracking-tight">Three steps to smarter research</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: 'upload_file',
                title: 'Upload your sources',
                desc: 'Add PDFs, paste URLs, write notes. Contextra indexes everything automatically in seconds.',
                cta: 'Upload Files',
                path: '/ingestion',
                color: 'primary',
              },
              {
                step: '02',
                icon: 'hub',
                title: 'AI maps the connections',
                desc: 'Our AI reads every source and finds hidden relationships, contradictions, and themes across your research.',
                cta: 'See Knowledge Map',
                path: '/knowledge',
                color: 'secondary',
              },
              {
                step: '03',
                icon: 'auto_awesome',
                title: 'Get clear AI insights',
                desc: 'Receive structured summaries, key quotes, and actionable insights — grounded in your actual sources.',
                cta: 'Explore Insights',
                path: '/synthesis',
                color: 'tertiary',
              },
            ].map(item => (
              <div
                key={item.step}
                className="feature-card bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-outline-variant/20 shadow-sm cursor-pointer"
                onClick={() => navigate(item.path)}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-[11px] font-mono font-bold text-${item.color}`}>{item.step}</span>
                  <span className={`material-symbols-outlined text-${item.color} text-[24px]`}>{item.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold text-on-surface mb-3">{item.title}</h3>
                <p className="text-[14px] text-on-surface-variant leading-relaxed mb-5">{item.desc}</p>
                <span className={`text-[13px] font-semibold text-${item.color} flex items-center gap-1`}>
                  {item.cta} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Feature Highlights ── */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upload feature */}
            <div
              className="feature-card bg-white/70 backdrop-blur-sm p-10 rounded-3xl border border-outline-variant/20 shadow-sm cursor-pointer"
              onClick={() => navigate('/ingestion')}
            >
              <span className="material-symbols-outlined text-primary text-[32px] mb-4">upload_file</span>
              <h3 className="text-[24px] font-bold text-on-surface mb-3">Upload files and let AI connect ideas automatically.</h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6">
                Drop in PDFs, Word docs, URLs, or plain notes. Contextra reads them, extracts the key ideas, and links them to everything else you've uploaded.
              </p>
              <button
                className="bg-primary text-white px-6 py-3 rounded-full text-[13px] font-semibold hover:bg-on-surface transition-all"
                onClick={(e) => { e.stopPropagation(); navigate('/ingestion'); }}
              >
                Upload Files
              </button>
            </div>

            {/* AI Synthesis feature */}
            <div
              className="feature-card bg-secondary/5 border border-secondary/15 p-10 rounded-3xl shadow-sm cursor-pointer"
              onClick={() => navigate('/synthesis')}
            >
              <span className="material-symbols-outlined text-secondary text-[32px] mb-4">psychology</span>
              <h3 className="text-[24px] font-bold text-on-surface mb-3">Search across your research with contextual AI.</h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6">
                Ask questions in plain English. Contextra searches your entire library and returns answers with source citations — not just keyword matches.
              </p>
              <button
                className="bg-secondary text-white px-6 py-3 rounded-full text-[13px] font-semibold hover:bg-secondary/90 transition-all"
                onClick={(e) => { e.stopPropagation(); navigate('/synthesis'); }}
              >
                Try AI Insights
              </button>
            </div>

            {/* Knowledge Map feature */}
            <div
              className="feature-card bg-tertiary/5 border border-tertiary/15 p-10 rounded-3xl shadow-sm cursor-pointer"
              onClick={() => navigate('/knowledge')}
            >
              <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">hub</span>
              <h3 className="text-[24px] font-bold text-on-surface mb-3">Visualize knowledge and discover hidden relationships.</h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6">
                See how concepts connect across all your sources in an interactive map. Spot patterns and contradictions you'd miss reading linearly.
              </p>
              <button
                className="bg-tertiary text-white px-6 py-3 rounded-full text-[13px] font-semibold hover:bg-tertiary/90 transition-all"
                onClick={(e) => { e.stopPropagation(); navigate('/knowledge'); }}
              >
                Open Knowledge Map
              </button>
            </div>

            {/* Workspace feature */}
            <div
              className="feature-card bg-white/70 backdrop-blur-sm border border-outline-variant/20 p-10 rounded-3xl shadow-sm cursor-pointer"
              onClick={() => navigate('/mission-control')}
            >
              <span className="material-symbols-outlined text-on-surface text-[32px] mb-4">space_dashboard</span>
              <h3 className="text-[24px] font-bold text-on-surface mb-3">Your research workspace — always in context.</h3>
              <p className="text-[15px] text-on-surface-variant leading-relaxed mb-6">
                Every project, source, and insight lives in one intelligent workspace. Pick up exactly where you left off, with AI ready to help.
              </p>
              <button
                className="bg-on-surface text-white px-6 py-3 rounded-full text-[13px] font-semibold hover:bg-on-surface/80 transition-all"
                onClick={(e) => { e.stopPropagation(); navigate('/mission-control'); }}
              >
                Open Workspace
              </button>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto bg-secondary/8 border border-secondary/20 rounded-3xl p-12 text-center shadow-xl shadow-secondary/10">
            <span className="material-symbols-outlined text-secondary text-[40px] mb-4">rocket_launch</span>
            <h2 className="text-[36px] font-bold text-on-surface mb-4">Ready to research smarter?</h2>
            <p className="text-[16px] text-on-surface-variant mb-8 max-w-xl mx-auto">
              Join researchers, students, and teams using Contextra to turn information overload into clear, actionable knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="bg-secondary text-white px-8 py-4 rounded-full text-[15px] font-semibold cta-glow hover:bg-secondary/90 transition-all hover:scale-105"
                onClick={() => navigate('/signup')}
              >
                Get started — it's free
              </button>
              <button
                className="bg-white border border-outline-variant/40 text-on-surface px-8 py-4 rounded-full text-[15px] font-medium hover:shadow-md transition-all"
                onClick={() => navigate('/login')}
              >
                Sign in
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-md border-t border-outline-variant/15 py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo size="xs" />
            <div>
              <div className="font-bold text-on-surface text-[15px]">Contextra</div>
              <div className="text-[12px] text-on-surface-variant">AI Research Platform</div>
            </div>
          </div>
          <div className="flex gap-8">
            {[
              { label: 'Product', path: '/mission-control' },
              { label: 'Pricing', path: '/pricing' },
              { label: 'Docs', path: '/docs' },
              { label: 'About', path: '/about' },
            ].map(item => (
              <button
                key={item.label}
                className="text-[14px] text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="text-[12px] text-on-surface-variant">
            © 2024 Contextra. Built for deep thinkers.
          </div>
        </div>
      </footer>
    </div>
  );
}
