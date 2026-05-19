import React from 'react';

export default function SearchUniversePage() {
  return (
    <div className="bg-transparent text-on-surface vellum-texture min-h-screen selection:bg-secondary-container w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.glass-surface {
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px)
    }
.vellum-texture {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuB0ywvyzuaYKCwr-3cDon4Aqqm_dV37gHpjeUMKBJoGAeDwDwzhIQePdyCNwipXoR4X2msZ_PepRxWWyoDYCQLU_WT55vzmN0wNRoNoEdNOfu4U7-ekz2rFrSeVgLRiTNIsm6OQiYuBwSAfEnRHfyB26uSRbCk1KmNyw9-pqT6HDUabrzV1Iyn1rujK2D2iIX3RoKxqJxWPhsxjAwlLlqA8DfsQUqxemKDZW5N_gVlEimPBV-Vp6UfuTAzBu5YAUg4AG9umRdAg2nI);
    background-repeat: repeat
    }
.constellation-line {
    background: linear-gradient(90deg, rgba(94, 87, 143, 0.3) 0%, rgba(94, 87, 143, 0) 100%)
    }
.node-pulse {
    box-shadow: 0 0 0 0 rgba(94, 87, 143, 0.4)
    }
.node-pulse:hover {
    box-shadow: 0 0 0 15px rgba(94, 87, 143, 0);
    transition: box-shadow 0.6s ease-out
    }` }} />
      
      
{/* TopAppBar Navigation Shell */}
<header className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl text-primary dark:text-primary-fixed-dim docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md tracking-tighter text-on-surface dark:text-on-surface-variant">Contextra</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-primary dark:text-primary-fixed-dim font-bold font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Intelligence Canvas</a>
<a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Knowledge Constellation</a>
<a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Source Hub</a>
</nav>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined scale-95 transition-transform duration-200 cursor-pointer" data-icon="flare">flare</span>
<span className="material-symbols-outlined scale-95 transition-transform duration-200 cursor-pointer" data-icon="notifications_none">notifications_none</span>
<span className="material-symbols-outlined scale-95 transition-transform duration-200 cursor-pointer" data-icon="account_circle">account_circle</span>
</div>
</header>
<main className="relative pt-12 pb-32">
{/* Search Universe Hero Section */}
<section className="max-w-7xl mx-auto px-margin-page">
<div className="text-center mb-16">
<h1 className="font-display-hero text-display-hero text-on-surface-variant mb-4">Search Universe</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant/70 max-w-2xl mx-auto">Navigate the deep semantic topology of your research. Discovery is not a list; it is a pathway.</p>
</div>
{/* Floating Central Search Bar (Command Layer Inspired) */}
<div className="relative z-20 max-w-3xl mx-auto mb-24">
<div className="glass-surface bg-surface-container-lowest/80 border border-outline-variant/30 rounded-full px-8 py-6 shadow-2xl shadow-secondary/10 flex items-center gap-4 group transition-all hover:border-secondary/40">
<span className="material-symbols-outlined text-secondary text-headline-md" data-icon="search">search</span>
<input autoFocus="" className="bg-transparent border-none focus:ring-0 w-full font-headline-md text-headline-md text-on-surface placeholder:text-on-surface-variant/30" placeholder="Explore Semantic Pathways..." type="text"/>
<div className="flex items-center gap-2">
<kbd className="font-mono-ui text-mono-ui bg-surface-container-high px-2 py-1 rounded text-on-surface-variant/60">⌘</kbd>
<kbd className="font-mono-ui text-mono-ui bg-surface-container-high px-2 py-1 rounded text-on-surface-variant/60">K</kbd>
</div>
</div>
</div>
{/* Semantic Pathways Visualization (The Constellation Canvas) */}
<div className="relative min-h-[600px] w-full Intelligence Canvas">
{/* Central Node Connection Center */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-full h-px constellation-line rotate-45 transform"></div>
<div className="w-full h-px constellation-line -rotate-45 transform"></div>
<div className="w-full h-px constellation-line rotate-90 transform"></div>
</div>
{/* Distributed Floating Nodes */}
{/* Asymmetric Layout for nodes */}
{/* Primary Cluster: Core Intelligence */}
<div className="absolute top-[10%] left-[20%] group">
<div className="glass-surface bg-white/40 border border-outline-variant/40 rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer node-pulse">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-tertiary" data-icon="neurology">neurology</span>
<span className="font-label-caps text-label-caps text-tertiary uppercase">Core Concept</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Neural Mapping</h3>
<p className="font-body-md text-body-md text-on-surface-variant/60 mt-2 max-w-[200px]">The visualization of biological thought architecture into digital vectors.</p>
</div>
{/* Connection Thread */}
<div className="absolute top-1/2 -right-16 w-16 h-0.5 bg-tertiary/20"></div>
</div>
{/* Node: Scandinavian Design */}
<div className="absolute top-[40%] right-[10%] group">
<div className="glass-surface bg-white/40 border border-outline-variant/40 rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer node-pulse">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-secondary" data-icon="architecture">architecture</span>
<span className="font-label-caps text-label-caps text-secondary uppercase">Visual Ethos</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Scandinavian Design</h3>
<p className="font-body-md text-body-md text-on-surface-variant/60 mt-2 max-w-[200px]">Functional minimalism applied to cognitive ergonomics.</p>
</div>
</div>
{/* Node: Tactile Interfaces */}
<div className="absolute bottom-[15%] left-[35%] group">
<div className="glass-surface bg-white/40 border border-outline-variant/40 rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer node-pulse">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary" data-icon="touch_app">touch_app</span>
<span className="font-label-caps text-label-caps text-primary uppercase">Interaction</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Tactile Interfaces</h3>
<p className="font-body-md text-body-md text-on-surface-variant/60 mt-2 max-w-[200px]">Physical feedback loops in ethereal digital environments.</p>
</div>
</div>
{/* Source DNA Card (Vertical Citation) */}
<div className="absolute top-0 right-[35%] group">
<div className="w-32 h-48 bg-surface-container border border-outline-variant/20 shadow-lg rounded-sm overflow-hidden vellum-texture flex flex-col p-4 hover:-translate-y-2 transition-transform">
<div className="h-2 w-full bg-secondary-container mb-4"></div>
<span className="font-mono-ui text-mono-ui text-[10px] text-on-surface-variant opacity-50">REF: SC-2401</span>
<div className="mt-auto">
<h4 className="font-label-caps text-label-caps text-on-surface leading-tight">Digital Vellum Thesis</h4>
<span className="material-symbols-outlined text-sm mt-2 opacity-40" data-icon="link">link</span>
</div>
</div>
</div>
{/* Dynamic Sugestion Pathway Overlay */}
<div className="absolute bottom-[30%] right-[30%] opacity-40">
<div className="flex flex-col items-start gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-tertiary"></div>
<span className="font-mono-ui text-mono-ui text-tertiary">Cognitive Load Distribution</span>
</div>
<div className="flex items-center gap-2 ml-8">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="font-mono-ui text-mono-ui text-secondary">Information Density Control</span>
</div>
</div>
</div>
</div>
</section>
{/* Source DNA Card Bento Section (Relationship Discovery) */}
<section className="max-w-7xl mx-auto px-margin-page mt-32">
<div className="flex items-end justify-between mb-12">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block">Synthesis DNA</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Related Vectors</h2>
</div>
<button className="font-label-caps text-label-caps text-primary flex items-center gap-2 hover:gap-4 transition-all">
          Expand Map <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-grid">
{/* Relationship Card 1 */}
<div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container-low p-10 border border-outline-variant/20">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Semantic Relevance Analysis</h3>
<p className="font-body-md text-body-md text-on-surface-variant/70 max-w-lg">How neural mapping algorithms intersect with minimal UI principles to reduce user friction. This vector explores the psychological comfort of whitespace.</p>
</div>
<div className="flex gap-4 mt-8">
<div className="px-4 py-2 bg-surface-container-highest rounded-full font-mono-ui text-mono-ui text-on-surface-variant">Cognition</div>
<div className="px-4 py-2 bg-surface-container-highest rounded-full font-mono-ui text-mono-ui text-on-surface-variant">Aesthetics</div>
</div>
</div>
<img className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-10 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" data-alt="A sophisticated abstract composition of flowing, organic 3D shapes in muted ivory and lavender tones. The lighting is soft and cinematic, casting delicate shadows that emphasize the physical texture of the surfaces. The aesthetic is clean and Scandinavian, suggesting a digital representation of biological neural networks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6F_L8XUnRyNDYnyBp4OW9WeaLiVbmxWkD0MVFCGK-gUFt0XywINwjw5qWnVhUi3fCesE392AYPV5skPVEfRbO-YypeOjNTgjpo0_qgjiaDkZE-S3eRmIjIOT19nPI51L27YvxsZi-7i4gLASxqAdF5G-1YJ6Jij7RzQPeczKpQRw7ymiCL_K2A3XvfVEJj_PCz-O5lhwq2Cer0LdRkz1wp_0MQJ0Ez107mwtQJlGToOT5mDHfIV_Gl4hPlNhk2oV1SyUrbw_fBSI"/>
</div>
{/* Relationship Card 2 (Meter Component) */}
<div className="glass-surface bg-tertiary-container/30 border border-tertiary/10 p-8 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-tertiary mb-4" data-icon="analytics">analytics</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Context Strength</h3>
</div>
<div className="flex items-end gap-2 h-32 w-full mt-8">
<div className="flex-1 bg-tertiary/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-tertiary/40 rounded-t-sm h-[65%]"></div>
<div className="flex-1 bg-tertiary/60 rounded-t-sm h-[85%]"></div>
<div className="flex-1 bg-tertiary rounded-t-sm h-[95%]"></div>
<div className="flex-1 bg-tertiary/40 rounded-t-sm h-[30%]"></div>
</div>
<p className="font-mono-ui text-mono-ui text-tertiary mt-4">98.2% Similarity Match</p>
</div>
</div>
</section>
</main>
{/* BottomNavBar (The Floating Source Dock) */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 dark:bg-surface-dim/40 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-full px-8 py-4 w-auto min-w-[420px]">
<div className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all scale-105 active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
<span className="font-mono-ui text-mono-ui">Command</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all scale-105 active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="inventory">inventory</span>
<span className="font-mono-ui text-mono-ui">Sources</span>
</div>
<div className="flex flex-col items-center text-primary dark:text-primary-fixed bg-primary-container/30 rounded-full px-4 py-1 hover:bg-white/10 transition-all scale-105 active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-mono-ui text-mono-ui">Context</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all scale-105 active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
<span className="font-mono-ui text-mono-ui">Filter</span>
</div>
</nav>
{/* Footer */}
<footer className="bg-surface dark:bg-background border-t border-surface-variant w-full py-12 px-margin-page mt-24">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto opacity-80 hover:opacity-100 transition-opacity">
<div className="flex flex-col mb-8 md:mb-0">
<span className="font-headline-lg text-headline-lg text-on-surface">Contextra</span>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-12">
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
