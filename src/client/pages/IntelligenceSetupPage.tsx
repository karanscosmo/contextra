import React from 'react';

export default function IntelligenceSetupPage() {
  return (
    <div className="font-body-md text-on-surface antialiased w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.paper-grain {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCUR2AgYpWPlqdWKn-fBIXP8STFoh6SQg0JnBkVX-jb0uOTKtnrKddLp7E8BsMmEjEFR_fh37TGjTMT6ZgMhuUDIuxLU6RuJuLd6aAKvzn6s5kh41O9xmiUUFYjwQ_czgmS9uyG7LNpuA1veCNby9ZS2KicTevxMNodXy9hXzLKhvyPwLyrg6p8UmIV9X5PmJl61yNDqwGEozWmxi_h_r6Q29Q6jHrucZbjTiyi33bNoesegvBpuIjrQk9KU558mcoa3bUYbp2ALLY);
    opacity: 0.03;
    pointer-events: none
    }
.glass-panel {
    background: rgba(252, 249, 241, 0.6);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(229, 226, 218, 0.5)
    }
.personality-card:hover .personality-icon {
    transform: scale(1.1);
    color: var(--tw-color-tertiary)
    }
body {
    background-color: #fcf9f1
    }` }} />
      
      
{/* Main Layout Container */}
<main className="flex min-h-screen flex-col md:flex-row overflow-hidden">
{/* Left Column: Cinematic Visual */}
<section className="relative w-full md:w-[45%] h-64 md:h-full bg-surface-container-highest overflow-hidden order-2 md:order-1">
<img alt="Semantic Network Visualization" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" data-alt="A high-end cinematic visualization of a complex, glowing semantic network within a serene, sun-drenched library or minimalist archive. Soft, ethereal light streams through tall windows, illuminating dust motes and creating a warm, light-filled Scandi-Japanese aesthetic. The network consists of delicate, interconnected nodes and crystalline threads in shades of dusty lavender and soft indigo, echoing a premium digital synthesis environment. The overall mood is quiet, intellectual, and profoundly calm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABUayMzrz-p0WOEY4-zc1ab40Zpi6JIKHSOv6BDFpKbPK9IWkmIfXLIzS9mDX-gNhtTxr9od5DKHDNvtMxxLCYC0KbAge2L4OtATdCTJXDOlM_pF8oWK36UgV7GnvpA_dBEuL0koY0cwwoobOHjuNbkW7VRekeAlJpv3R8FxRBWi51kMincTL8wV00PCLZP-rwzDUD676n3USfmYmKLgdw7elnFdDe_wix0itwuvDTzPMpY6aGNgpZIPQ2nLo7TRI8j8JXZn8U_lw"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface/20 to-transparent"></div>
<div className="absolute inset-0 paper-grain"></div>
{/* Logo Overlay (Desktop Only) */}
<div className="absolute top-margin-page left-margin-page hidden md:block">
<span className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</span>
<p className="font-mono-ui text-mono-ui uppercase tracking-widest text-on-surface-variant/60 mt-1">Intelligence Systems</p>
</div>
{/* Visual Insight Card */}
<div className="absolute bottom-margin-page left-margin-page right-margin-page">
<div className="glass-panel p-6 rounded-xl max-w-sm">
<span className="font-mono-ui text-mono-ui text-tertiary block mb-2">01 — SYNTHESIS</span>
<h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Every connection is a step toward clarity.</h3>
</div>
</div>
</section>
{/* Right Column: Onboarding Form */}
<section className="w-full md:w-[55%] h-full flex flex-col items-center justify-center bg-surface px-6 md:px-margin-page py-12 order-1 md:order-2 overflow-y-auto">
<div className="w-full max-w-xl space-y-12">
{/* Progress Indicator */}
<header className="space-y-4">
<div className="flex items-center justify-between">
<span className="font-mono-ui text-mono-ui uppercase tracking-widest text-on-surface-variant/70">Intelligence Setup</span>
<span className="font-mono-ui text-mono-ui text-primary">Step 01 of 02</span>
</div>
<div className="h-[2px] w-full bg-surface-container-highest relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/2 bg-primary transition-all duration-700 ease-in-out"></div>
</div>
</header>
{/* Welcome Text */}
<div className="space-y-2">
<h1 className="font-headline-lg text-headline-lg text-on-surface">Create your workspace.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Begin your journey into high-order synthesis by defining your cognitive environment.</p>
</div>
{/* Registration Form */}
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-grid">
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant block">Full Name</label>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30 font-body-md text-body-md" placeholder="Elias Thorne" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant block">Email Address</label>
<input className="w-full bg-transparent border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30 font-body-md text-body-md" placeholder="elias@synthesis.io" type="email"/>
</div>
</div>
{/* Personality Selection Section */}
<div className="space-y-6 pt-4">
<div className="flex flex-col gap-1">
<label className="font-label-caps text-label-caps text-on-surface-variant block">Choose your Cognition Mode</label>
<p className="font-mono-ui text-[11px] text-tertiary">Select a persona to tailor the AI's processing style.</p>
</div>
{/* Personality Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/* Option 1: The Architect */}
<button className="group relative text-left p-6 rounded-xl border border-outline-variant/40 bg-surface-container-low transition-all duration-300 hover:bg-surface-container hover:border-primary" type="button">
<span className="material-symbols-outlined personality-icon text-on-surface-variant mb-4 transition-transform block" data-icon="architecture">architecture</span>
<h4 className="font-headline-md text-[18px] text-on-surface mb-2">The Architect</h4>
<p className="font-mono-ui text-[11px] leading-relaxed text-on-surface-variant/70">Structured, hierarchical, and precise mapping of complex systems.</p>
</button>
{/* Option 2: The Explorer */}
<button className="group relative text-left p-6 rounded-xl border-2 border-primary bg-primary-container shadow-sm" type="button">
<div className="absolute top-3 right-3">
<span className="material-symbols-outlined text-[16px] text-primary" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<span className="material-symbols-outlined personality-icon text-primary mb-4 transition-transform block" data-icon="explore" data-weight="fill">explore</span>
<h4 className="font-headline-md text-[18px] text-on-surface mb-2">The Explorer</h4>
<p className="font-mono-ui text-[11px] leading-relaxed text-on-surface-variant/70">Expansive, discovery-oriented, and focused on broad associations.</p>
</button>
{/* Option 3: The Synthesizer */}
<button className="group relative text-left p-6 rounded-xl border border-outline-variant/40 bg-surface-container-low transition-all duration-300 hover:bg-surface-container hover:border-primary" type="button">
<span className="material-symbols-outlined personality-icon text-on-surface-variant mb-4 transition-transform block" data-icon="hub">hub</span>
<h4 className="font-headline-md text-[18px] text-on-surface mb-2">The Synthesizer</h4>
<p className="font-mono-ui text-[11px] leading-relaxed text-on-surface-variant/70">Merging disparate data points into cohesive narrative insights.</p>
</button>
</div>
</div>
{/* CTA Group */}
<div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
<p className="font-body-md text-on-surface-variant text-sm">
                            Already part of Contextra? <a className="text-primary font-semibold underline decoration-outline-variant underline-offset-4 hover:decoration-primary transition-all" href="#">Sign In</a>
</p>
<button className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-full font-headline-md text-[18px] hover:bg-on-surface transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/10" type="submit">
                            Initialize Synthesis
                        </button>
</div>
</form>
{/* Footer Links (Subtle) */}
<footer className="pt-12 flex items-center gap-6 border-t border-outline-variant/20">
<a className="font-mono-ui text-[11px] text-on-surface-variant/60 hover:text-primary transition-colors" href="#">Philosophy</a>
<a className="font-mono-ui text-[11px] text-on-surface-variant/60 hover:text-primary transition-colors" href="#">Security</a>
<a className="font-mono-ui text-[11px] text-on-surface-variant/60 hover:text-primary transition-colors" href="#">API</a>
</footer>
</div>
</section>
</main>
{/* Background Decoration for Onboarding */}
<div className="fixed inset-0 pointer-events-none z-[-1] paper-grain"></div>

    </div>
  );
}
