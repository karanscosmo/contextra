import React from 'react';

export default function CitationExplorerPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24
    }
.glass-edge {
    border: 0.5px solid rgba(255, 255, 255, 0.2)
    }
.paper-texture {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuA2wTfAWlWZi7a1iFRluHQ2LiwR5JR_MKdbMMnBrKKnagpazeBiSL1RnjIzlTRHKSI-eGV5yivmfL4T5NX6wYxGQtg0KMraBYMdqwnnOfuabcYLAx3etTmKO43AR9cI39aWZELVgl9XZHPKZA6_hcHw4Y-Iab7hSD80oOcYXJ1sHXWaolKJ1r3rJcylgAt1eSTvYa_PPBwARyFh2J4mDcmVBkitvsBSlUVLA1GMFQXYwjUDZLVmYF2cKGGd0xZVo27iketCeFKPOI4);
    background-blend-mode: soft-light
    }
.writing-mode-vertical {
    writing-mode: vertical-rl
    }` }} />
      
      
{/* SideNavBar */}
<nav className="bg-surface-container-low hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-30 border-r border-outline-variant/30 py-margin-page px-6">
<div className="mb-12">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tighter">Contextra</h1>
<p className="font-mono-ui text-mono-ui text-on-surface-variant/60 uppercase tracking-widest mt-1">Vellum Workspace</p>
</div>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 text-on-surface-variant/70 hover:bg-surface-variant/50 group" href="#">
<span className="material-symbols-outlined">space_dashboard</span>
<span className="font-label-caps text-label-caps uppercase">Intelligence Canvas</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 text-on-surface-variant/70 hover:bg-surface-variant/50 group" href="#">
<span className="material-symbols-outlined">hub</span>
<span className="font-label-caps text-label-caps uppercase">Knowledge Constellation</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 text-primary border-r-2 border-primary font-bold bg-surface-variant/30 group" href="#">
<span className="material-symbols-outlined">folder_open</span>
<span className="font-label-caps text-label-caps uppercase">Source Hub</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 text-on-surface-variant/70 hover:bg-surface-variant/50 group" href="#">
<span className="material-symbols-outlined">layers</span>
<span className="font-label-caps text-label-caps uppercase">Synthesis Studio</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 text-on-surface-variant/70 hover:bg-surface-variant/50 group" href="#">
<span className="material-symbols-outlined">history</span>
<span className="font-label-caps text-label-caps uppercase">Memory Timeline</span>
</a>
</div>
<div className="mt-auto pt-8">
<button className="w-full py-4 bg-on-surface text-surface rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Synthesis
            </button>
</div>
</nav>
<main className="md:ml-64 min-h-screen relative flex flex-col">
{/* TopAppBar */}
<header className="bg-surface/60 backdrop-blur-2xl sticky top-0 z-40 h-16 w-full flex justify-between items-center px-margin-page py-unit">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md tracking-tighter text-on-surface">Citation Explorer</span>
<nav className="hidden lg:flex gap-6">
<a className="text-primary font-bold font-label-caps text-label-caps transition-colors duration-300" href="#">TRUST LAYER</a>
<a className="text-on-surface-variant/60 font-label-caps text-label-caps hover:text-primary transition-colors duration-300 uppercase" href="#">Verification History</a>
<a className="text-on-surface-variant/60 font-label-caps text-label-caps hover:text-primary transition-colors duration-300 uppercase" href="#">Integrity Report</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">flare</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications_none</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">account_circle</span>
</div>
</div>
</header>
{/* Intelligence Canvas */}
<div className="flex-grow w-full max-w-7xl mx-auto px-margin-page py-12">
{/* Page Header/Introduction */}
<section className="mb-16">
<p className="font-mono-ui text-mono-ui text-tertiary mb-4 uppercase tracking-[0.2em]">Provenance Engine V2.4</p>
<h2 className="font-display-hero text-display-hero max-w-4xl text-on-surface">Validating the synthesis of human thought and artificial logic.</h2>
<div className="mt-8 flex gap-12 items-end">
<div>
<p className="font-label-caps text-label-caps text-outline uppercase mb-2">Aggregate Confidence</p>
<p className="font-headline-lg text-headline-lg text-on-surface">98.2<span className="text-primary-fixed-dim text-[24px]">%</span></p>
</div>
<div className="w-px h-12 bg-outline-variant/30"></div>
<div>
<p className="font-label-caps text-label-caps text-outline uppercase mb-2">Verified Citations</p>
<p className="font-headline-lg text-headline-lg text-on-surface">1,402</p>
</div>
<div className="w-px h-12 bg-outline-variant/30"></div>
<div>
<p className="font-label-caps text-label-caps text-outline uppercase mb-2">Source Depth</p>
<p className="font-headline-lg text-headline-lg text-on-surface">Infinite</p>
</div>
</div>
</section>
{/* Grid of Evidence Cards */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid auto-rows-min">
{/* Primary Insight Card (Large) */}
<div className="md:col-span-8 bg-surface-container-lowest paper-texture rounded-xl border border-outline-variant/30 p-8 group relative overflow-hidden flex flex-col">
<div className="flex justify-between items-start mb-12">
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">description</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Neuro-Architectural Convergence</h3>
<p className="font-mono-ui text-mono-ui text-on-surface-variant/60">Source: Nature Portfolio, Volume 582</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-mono-ui text-mono-ui text-tertiary">CONFIDENCE: 0.99</span>
<div className="w-32 h-1 bg-surface-container-high mt-1 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[99%]"></div>
</div>
</div>
</div>
<p className="font-body-lg text-body-lg text-on-surface mb-12 leading-relaxed">
                        "The integration of recursive neural patterns within generative frameworks suggests a paradigm shift from simple pattern recognition to authentic cognitive synthesis. This shift is characterized by a 40% increase in semantic density within latent spaces."
                    </p>
<div className="mt-auto border-t border-outline-variant/20 pt-6 flex items-center justify-between">
<div className="flex gap-3">
<div className="px-3 py-1 bg-surface-variant/40 rounded-full font-mono-ui text-mono-ui text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">timeline</span>
                                Synthesis Path Alpha
                            </div>
<div className="px-3 py-1 bg-surface-variant/40 rounded-full font-mono-ui text-mono-ui text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">verified</span>
                                Peer Reviewed
                            </div>
</div>
<button className="text-primary hover:text-on-surface transition-colors font-label-caps text-label-caps flex items-center gap-2 uppercase">
                            View Full Context
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
{/* Hover Preview Overlay (Conceptual) */}
<div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
</div>
{/* Vertical Stats/Meter Card */}
<div className="md:col-span-4 bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 flex flex-col justify-between">
<div>
<h4 className="font-label-caps text-label-caps text-on-surface mb-6 uppercase tracking-widest">Semantic Relevance</h4>
<div className="flex items-end gap-2 h-48 mb-8">
<div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[65%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[85%]"></div>
<div className="flex-1 bg-tertiary h-[95%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">The current thesis aligns with 94.2% of verified research in the <span className="text-tertiary">Cognitive Science</span> cluster.</p>
</div>
<div className="mt-8">
<button className="w-full py-4 border border-outline-variant rounded-xl font-label-caps text-label-caps uppercase hover:bg-surface-variant transition-colors">
                            Export Evidence Log
                        </button>
</div>
</div>
{/* Asymmetric Card Row */}
<div className="md:col-span-5 bg-surface-container-highest/40 backdrop-blur-sm border border-outline-variant/30 rounded-xl p-6 group hover:shadow-xl transition-all duration-500">
<div className="flex justify-between items-center mb-6">
<span className="font-mono-ui text-mono-ui text-on-surface-variant/40 uppercase">Citation 0882-B</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-tertiary">star</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">star</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">star</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">star</span>
<span className="material-symbols-outlined text-[16px] text-outline-variant">star</span>
</div>
</div>
<blockquote className="font-body-md text-body-md text-on-surface mb-6 italic">
                        "Memory is not a static retrieval, but a dynamic reconstruction of context."
                    </blockquote>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-surface border-2 border-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up studio portrait of a distinguished middle-aged researcher with glasses and a thoughtful expression, set against a soft, neutral, light-mode background. The lighting is editorial and soft, emphasizing intellect and warmth in a clean, minimalist Scandinavian style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLR8FHt5Q--4HPvWfvnC9pesgplLFgby354g3T43o_ZmJeAFNeX0Zni30uF5ysxdxYYfL3RT6Kyv1wHwhDzJSgAWU7rFqO7aI5Zct9BbX__6-c9hg3rTLlelpm61-Gy9v5moj-Mkg_bLb-TzJAriYlmcEaJDfV856TcvzTQyym5XxpHFIrZWYUQBaW5TQWRu70ZGMG0Odx5rd5cNIx1GNVtjMtJ1x-X40jtVsjA1j49FgfJQPou96HrJeX-Y_LMCy9OiBAKk1FFpg"/>
</div>
<div className="w-8 h-8 rounded-full bg-surface border-2 border-surface-container-highest flex items-center justify-center text-[10px] font-bold">
                                +3
                            </div>
</div>
<p className="font-mono-ui text-mono-ui text-[11px] text-on-surface-variant/60">TS: 2024.03.12:14:22</p>
</div>
</div>
<div className="md:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-0 overflow-hidden group">
<div className="flex h-full">
<div className="w-1/3 bg-surface-variant/20 flex flex-col justify-center items-center border-r border-outline-variant/20 p-6">
<div className="w-16 h-16 rounded-full border-2 border-dashed border-tertiary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-tertiary" style={{ "fontVariationSettings": "'FILL' 1" }}>dataset</span>
</div>
<p className="font-label-caps text-label-caps text-center uppercase tracking-tighter">Raw Data Stream</p>
</div>
<div className="flex-1 p-8">
<p className="font-mono-ui text-mono-ui text-tertiary mb-2 text-[11px] uppercase tracking-widest">Traceability Path</p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<p className="font-mono-ui text-mono-ui text-[12px] text-on-surface-variant">Ingested: PDF Whitepaper Cluster</p>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<p className="font-mono-ui text-mono-ui text-[12px] text-on-surface-variant">Isolated: Fragment 742-G (Cognition)</p>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(94,87,143,0.4)]"></div>
<p className="font-mono-ui text-mono-ui text-[12px] text-on-surface">Synthesized: Cross-Domain Insight</p>
</div>
</div>
</div>
</div>
</div>
{/* More Cards */}
<div className="md:col-span-4 h-64 relative rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A macro photograph of high-quality vellum paper showing a subtle, elegant grain texture. The image is bathed in warm, soft light with a shallow depth of field, creating a sense of luxury stationery and tactile quality. The colors are muted ivories and soft beiges, aligning with a serene, minimalist Japanese editorial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmbtRWJwdqAm-VTePMIJraH1nkb1y0aOirl13ZrMjeWrHPCs3V55zBPqsV2kbZnCZVK9UXPKxECyzLZSTpNB6HO889T-MQw5ShAPanD5ijWJjgeEKGcFGFop3WWKEVsUGduWdbO3C8Ieloii9eqmOb11yDjXV5uviult_I_Q9tkCEx4kfwFVc_CgEQXzOKvPZBpVyQjksNUPq3HbVKPUqUS61kA3V-qu9STCmZ3YhgG96Q0DmxfiNn2rsM93-UlQmZ21VawR8GI44"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<p className="font-label-caps text-label-caps text-white/60 uppercase mb-1">Visual Context</p>
<h4 className="font-headline-md text-headline-md text-white">Semantic Map Alpha</h4>
</div>
</div>
<div className="md:col-span-8 bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 flex gap-8">
<div className="flex-1">
<h4 className="font-headline-md text-headline-md text-on-surface mb-4">Integrity Monitoring</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Real-time cross-referencing against the Source Hub reveals a high degree of correlation with current market shifts in Artificial Intelligence ethics.</p>
<div className="flex gap-4">
<div className="flex flex-col">
<span className="font-mono-ui text-mono-ui text-[10px] text-on-surface-variant/40 uppercase">Latency</span>
<span className="font-body-md text-body-md text-on-surface">24ms</span>
</div>
<div className="flex flex-col">
<span className="font-mono-ui text-mono-ui text-[10px] text-on-surface-variant/40 uppercase">Entropy</span>
<span className="font-body-md text-body-md text-on-surface">0.02</span>
</div>
</div>
</div>
<div className="w-px bg-outline-variant/20 hidden sm:block"></div>
<div className="flex items-center gap-4">
<div className="writing-mode-vertical font-label-caps text-label-caps text-outline uppercase tracking-[0.3em]">RELIABILITY</div>
<div className="w-12 h-full bg-surface-container-high rounded-full relative p-1">
<div className="absolute bottom-1 left-1 right-1 bg-tertiary rounded-full h-[88%] shadow-lg shadow-tertiary/20"></div>
</div>
</div>
</div>
</div>
</div>
{/* Footer */}
<footer className="bg-surface border-t border-surface-variant w-full py-12 px-margin-page mt-24">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div className="mb-8 md:mb-0">
<h5 className="font-headline-lg text-headline-lg tracking-tighter text-on-surface">Contextra</h5>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-8">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Philosophy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">API</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl border border-white/20 rounded-full px-8 py-4 w-auto min-w-[420px] shadow-2xl shadow-secondary/10">
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all rounded-full px-4 py-1 group">
<span className="material-symbols-outlined group-hover:scale-105 duration-200">terminal</span>
<span className="font-mono-ui text-mono-ui uppercase text-[10px] mt-1">Command</span>
</button>
<button className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1 group scale-105">
<span className="material-symbols-outlined">inventory</span>
<span className="font-mono-ui text-mono-ui uppercase text-[10px] mt-1">Sources</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all rounded-full px-4 py-1 group">
<span className="material-symbols-outlined group-hover:scale-105 duration-200">visibility</span>
<span className="font-mono-ui text-mono-ui uppercase text-[10px] mt-1">Context</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all rounded-full px-4 py-1 group">
<span className="material-symbols-outlined group-hover:scale-105 duration-200">filter_list</span>
<span className="font-mono-ui text-mono-ui uppercase text-[10px] mt-1">Filter</span>
</button>
</nav>
{/* Context Lens FAB (Hidden on this transactional page as per rules, but shown here for exploration logic) */}
{/* Suppressed based on "Contextual FAB Suppression" for details/transactional screens */}

    </div>
  );
}
