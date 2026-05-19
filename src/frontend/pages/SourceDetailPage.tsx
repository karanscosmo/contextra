import React from 'react';

export default function SourceDetailPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-secondary-container w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.paper-grain {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuAmY_YI3BtgNjZyLQotcUMAkB5csX01PAnxBAAZaQ0ELSuziYtqW0_sTqnid4snpZ3GkF_5PH3kxsilPivl5nFNQIFvj2PtLkLuLY7FhCQY8TSMteWziVtOkISJQDObwYY6zw0Z0Ec81r_t5ASJPd5MozwVh3woc0DWjFcbb4QPcZEYNJyNJSprm9w0LwguTfw3JypUzNyxbfN0UD_dzxwYLvNf61IQxB6Cfymw27nuSsd9JcU2TFmWOoR9Bok1CM6HCMcg1HTJhXE);
    background-blend-mode: multiply
    }
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
    vertical-align: middle
    }` }} />
      
      
{/* TopAppBar */}
<header className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl text-primary dark:text-primary-fixed-dim docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface" data-icon="arrow_back">arrow_back</span>
<h1 className="font-headline-md text-headline-md tracking-tighter text-on-surface dark:text-on-surface-variant">Contextra</h1>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-300" data-icon="flare">flare</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-300" data-icon="notifications_none">notifications_none</span>
<div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/30">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>
<main className="flex min-h-screen">
{/* SideNav (Suppressed for focused detail view as per mandate, but placeholder for grid context if needed. Here we use an editorial wide layout) */}
{/* The Intelligence Canvas */}
<div className="flex-grow max-w-7xl mx-auto px-margin-page py-12 flex gap-12">
{/* Left: Document Content (Editorial Focus) */}
<article className="w-2/3">
<header className="mb-12">
<div className="flex items-center gap-2 mb-4">
<span className="font-mono-ui text-mono-ui uppercase text-secondary bg-secondary-container/30 px-2 py-0.5 rounded">PDF Source</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/60">Uploaded 12 Oct 2024</span>
</div>
<h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface leading-tight">The Neural Architecture of Cognitive Synthesis: A Longitudinal Study</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant/80 italic">Ref: CX-9920-ALPHA</p>
</header>
<section className="relative space-y-8 paper-grain p-12 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20">
<div className="relative group">
<p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                            The primary mechanism of <span className="bg-secondary-container/40 border-b-2 border-secondary/40 cursor-help relative px-1">information integration</span> within the prefrontal cortex suggests a non-linear path of synthesis. Recent observations indicate that high-order cognitive processing does not follow a strict hierarchical structure but rather a fluid, constellation-like network of activation.
                        </p>
{/* Margin Annotation */}
<div className="absolute -right-48 top-0 w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto">
<div className="bg-tertiary-container p-4 rounded-lg border border-tertiary-fixed-dim shadow-sm text-on-tertiary-fixed-variant">
<p className="font-mono-ui text-[11px] font-bold uppercase mb-1">AI Insight</p>
<p className="text-xs leading-snug">This aligns with the "Global Workspace Theory" often cited in Source Hub #14.</p>
</div>
</div>
</div>
<div className="relative group">
<p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                            Data suggest that <span className="bg-tertiary-fixed/30 border-b-2 border-tertiary/40 cursor-help px-1">stochastic resonance</span> plays a critical role in how we differentiate signal from noise in high-density semantic environments. When the noise floor is elevated, the system compensates by increasing the weight of existing knowledge priors.
                        </p>
{/* Margin Annotation */}
<div className="absolute -right-48 top-0 w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-surface-container-high p-4 rounded-lg border border-outline-variant shadow-sm text-on-surface-variant">
<p className="font-mono-ui text-[11px] font-bold uppercase mb-1">Entity Linked</p>
<p className="text-xs leading-snug">Semantic Cluster: "Noise Mitigation Strategy"</p>
</div>
</div>
</div>
<p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                        Our longitudinal study of 400 subjects showed a 15% increase in synthesis accuracy when using tactile-feedback interfaces compared to traditional glass-only screens. This suggests a physical dimension to high-order thought processing that is often overlooked in contemporary digital tool design.
                    </p>
<div className="mt-12 p-8 bg-surface-bright rounded-lg border border-dashed border-outline-variant/50">
<div className="flex items-center gap-4 mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="hub">hub</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Extracted Figure Analysis</span>
</div>
<img className="w-full h-64 object-cover rounded shadow-inner filter contrast-75 grayscale sepia" data-alt="A sophisticated black and white scientific visualization of a complex neural network. The image features thousands of delicate white lines interconnecting glowing nodes against a dark, textured background, resembling a star chart or a biological web. The lighting is soft and ethereal, emphasizing the intricate and dense complexity of the cognitive structure being mapped." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA6Br5O2p0IZ8ohbT9RjtyX3Fg7CVt_GEfycqaHKFqMV_IQgCkruhD3DmUJllwCFwnIpmLQp1KxusxmKiT1QMxV2odHGX0DD_Utxle6x6p4ajDoW-q5xQ1XJrisMMFMZHyL9Xml9GzoIWbrHBz0bLgxT0vS5BOAg38QRNL7jYb4CfdbU6mVJAopwKibFsgUe_MoBDE5XdHRh8IR8vEEEkrYPDlX7dNPMjk7z7Anudkw-a1XEuyd8zU0UL5bTejryT1GnaXhymljJ8"/>
<p className="font-mono-ui text-xs mt-4 text-on-surface-variant/60 text-center italic">Fig 4.2: Vectorization of cross-cortical communication pathways during active synthesis.</p>
</div>
</section>
</article>
{/* Right: Intelligence Panel (Glassmorphism & Metadata) */}
<aside className="w-1/3 space-y-gutter-grid sticky top-24 h-fit">
{/* Confidence Score */}
<div className="bg-surface-container-high/50 p-6 rounded-xl border border-outline-variant/30 backdrop-blur-md">
<div className="flex justify-between items-end mb-4">
<span className="font-label-caps text-label-caps text-on-surface-variant">Source Confidence</span>
<span className="font-headline-md text-headline-md text-secondary">98.4%</span>
</div>
<div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[98.4%] rounded-full shadow-[0_0_8px_rgba(94,91,124,0.4)]"></div>
</div>
<p className="mt-3 font-mono-ui text-[11px] text-on-surface-variant/60">Verified via Peer Review &amp; Citational Cross-Reference</p>
</div>
{/* AI Summary */}
<div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-2">
<span className="material-symbols-outlined text-secondary/20 scale-150" data-icon="auto_awesome">auto_awesome</span>
</div>
<h3 className="font-label-caps text-label-caps mb-6 text-on-surface border-b border-outline-variant/20 pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-xs" data-icon="summarize">summarize</span>
                        AI Synthesis Summary
                    </h3>
<p className="text-on-surface-variant text-body-md leading-relaxed mb-4">
                        This paper posits that high-order cognitive synthesis is a fluid, non-linear process mediated by "stochastic resonance." It highlights the vital role of <span className="text-secondary font-bold">Tactile Interfaces</span> in improving intellectual accuracy, challenging the dominance of purely digital inputs.
                    </p>
<button className="font-label-caps text-label-caps text-secondary flex items-center gap-1 hover:gap-2 transition-all">
                        EXPAND THOUGHT <span className="material-symbols-outlined text-xs" data-icon="chevron_right">chevron_right</span>
</button>
</div>
{/* Key Entities & Clusters */}
<div className="grid grid-cols-1 gap-gutter-grid">
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
<h3 className="font-label-caps text-label-caps mb-4 text-on-surface-variant uppercase tracking-widest">Key Entities</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface rounded text-on-surface border border-outline-variant/40 font-mono-ui text-xs">Prefrontal Cortex</span>
<span className="px-3 py-1 bg-surface rounded text-on-surface border border-outline-variant/40 font-mono-ui text-xs">Tactile Feedback</span>
<span className="px-3 py-1 bg-surface rounded text-on-surface border border-outline-variant/40 font-mono-ui text-xs">Noise Signal Ratio</span>
<span className="px-3 py-1 bg-surface rounded text-on-surface border border-outline-variant/40 font-mono-ui text-xs">Global Workspace</span>
</div>
</div>
<div className="bg-tertiary-container/30 p-6 rounded-xl border border-tertiary-fixed-dim/40">
<h3 className="font-label-caps text-label-caps mb-4 text-tertiary uppercase tracking-widest">Semantic Clusters</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-body-md text-on-tertiary-fixed-variant">Neuro-Architecture</span>
<span className="ml-auto font-mono-ui text-xs opacity-40">82% Match</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
<span className="font-body-md text-on-tertiary-fixed-variant">Information Theory</span>
<span className="ml-auto font-mono-ui text-xs opacity-40">64% Match</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-outline"></div>
<span className="font-body-md text-on-tertiary-fixed-variant">Digital Ergonomics</span>
<span className="ml-auto font-mono-ui text-xs opacity-40">41% Match</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 dark:bg-surface-dim/40 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-secondary/10 rounded-full px-8 py-4 w-auto min-w-[420px]">
<a className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
<span className="font-mono-ui text-[10px] uppercase tracking-tighter">Command</span>
</a>
<a className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1" href="#">
<span className="material-symbols-outlined" data-icon="inventory" style={{ "fontVariationSettings": "'FILL' 1" }}>inventory</span>
<span className="font-mono-ui text-[10px] uppercase tracking-tighter">Sources</span>
</a>
<a className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-mono-ui text-[10px] uppercase tracking-tighter">Context</span>
</a>
<a className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full" href="#">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
<span className="font-mono-ui text-[10px] uppercase tracking-tighter">Filter</span>
</a>
</nav>
{/* Footer */}
<footer className="bg-surface w-full py-12 px-margin-page border-t border-surface-variant mt-24">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div className="flex flex-col items-start gap-2">
<span className="font-headline-lg text-headline-lg tracking-tighter">Contextra</span>
<p className="font-body-md text-body-md text-on-surface-variant opacity-80">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-8 mt-8 md:mt-0">
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Philosophy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Security</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">API</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Privacy</a>
</div>
</div>
</footer>

    </div>
  );
}
