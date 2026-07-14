import React, { useEffect } from 'react';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function MobileMissionControlPage() {
  useEffect(() => {
    document.title = 'Contextra - Mission Control';
  }, []);

  useStyleBlock(`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar to match aesthetic */
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #e5e2da;
            border-radius: 9999px;
        }
    

    body {
      min-height: max(884px, 100dvh);
    }
  `);

  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen relative pb-32 overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container w-full">
      
      
{/* TopAppBar */}
<header className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl docked full-width top-0 sticky z-40 bg-transparent flex justify-between items-center px-margin-page max-md:px-6 py-unit h-16 w-full">
<div className="font-headline-md text-headline-md tracking-tighter text-on-surface dark:text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[28px] text-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>dataset</span>
            Contextra
        </div>
<div className="flex items-center gap-4 text-primary dark:text-primary-fixed-dim">
<button className="scale-95 transition-all duration-200 hover:text-primary">
<span className="material-symbols-outlined">flare</span>
</button>
<button className="scale-95 transition-all duration-200 hover:text-primary">
<span className="material-symbols-outlined">notifications_none</span>
</button>
<button className="scale-95 transition-all duration-200 hover:text-primary">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/* Main Mobile Canvas */}
<main className="w-full max-w-7xl mx-auto px-6 md:px-margin-page pt-8 md:pt-16 pb-24 flex flex-col gap-gutter-grid">
{/* Command Layer (Embedded for Mobile) */}
<section className="w-full flex flex-col gap-4 relative z-10">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">Synthesis Command</h1>
<div className="relative group">
<div className="absolute inset-0 bg-secondary/5 rounded-2xl blur-xl transition-all duration-500 group-focus-within:bg-secondary/15"></div>
<div className="relative bg-surface-container-highest/80 backdrop-blur-md rounded-2xl border border-outline-variant/40 p-4 flex flex-col gap-3 shadow-sm transition-all duration-300 group-focus-within:border-secondary/40 group-focus-within:shadow-md">
<textarea className="bg-transparent border-none focus:ring-0 resize-none font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant/50 w-full h-24" placeholder="Initialize inquiry..."></textarea>
<div className="flex justify-between items-center border-t border-outline-variant/20 pt-3">
<div className="flex gap-2 text-on-surface-variant/60">
<button className="p-1 hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[20px]">attach_file</span></button>
<button className="p-1 hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[20px]">mic</span></button>
</div>
<button className="bg-primary text-on-primary rounded-full p-2 flex items-center justify-center hover:bg-on-surface transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">arrow_upward</span>
</button>
</div>
</div>
</div>
</section>
{/* Intelligence Panels (Bento Grid) */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
{/* Active Thread Panel */}
<div className="bg-surface-container-low border border-surface-variant rounded-2xl p-6 flex flex-col gap-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] md:col-span-2">
<div className="flex justify-between items-center">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Active Thread</span>
<span className="material-symbols-outlined text-secondary/50 text-[18px]">more_horiz</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">Cognitive Architecture Models</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Synthesizing current methodologies in dynamic context windows versus rigid vector embeddings. Analyzing constraints...</p>
{/* Semantic Relevance Meter */}
<div className="mt-2 flex flex-col gap-2">
<div className="flex justify-between items-center font-mono-ui text-mono-ui text-on-surface-variant/70">
<span>Relevance Index</span>
<span>87%</span>
</div>
<div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ "width": "87%" }}></div>
</div>
</div>
</div>
{/* Source DNA Card */}
<div className="bg-surface-container-highest/40 backdrop-blur-sm border border-outline-variant/30 rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/10 rounded-full blur-2xl"></div>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
<span className="font-label-caps text-label-caps uppercase">Source DNA</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface leading-tight mt-1">Neuromorphic Systems Overview</h3>
<div className="font-mono-ui text-mono-ui text-on-surface-variant/60 flex items-center gap-2 mt-auto">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Extracted 2h ago
                </div>
</div>
{/* Knowledge Node */}
<div className="bg-surface-container border border-surface-variant rounded-2xl p-5 flex flex-col justify-between relative group cursor-pointer hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[18px]">hub</span>
<span className="font-label-caps text-label-caps uppercase">Node Cluster</span>
</div>
<div className="mt-4 flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-secondary-container border-2 border-surface flex items-center justify-center text-on-secondary-container font-mono-ui text-[10px]">v.1</div>
<div className="w-8 h-8 rounded-full bg-tertiary-container border-2 border-surface flex items-center justify-center text-on-tertiary-container font-mono-ui text-[10px]">v.2</div>
<div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-on-surface-variant font-mono-ui text-[10px]">+3</div>
</div>
<div className="font-mono-ui text-mono-ui text-on-surface-variant/80 mt-4">
                    5 Connected Entities
                </div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="bg-surface-bright/40 dark:bg-surface-dim/40 backdrop-blur-3xl fixed bottom-dock-padding left-1/2 -translate-x-1/2 rounded-full px-8 py-4 w-auto min-w-[min(420px,90vw)] border border-white/20 shadow-2xl shadow-secondary/10 z-50 flex justify-between gap-gutter-grid items-center max-md:px-6 max-md:py-3 max-md:gap-4">
{/* Active Tab: Command */}
<button className="flex flex-col items-center text-primary dark:text-primary-fixed bg-primary-container/30 rounded-full px-4 py-1 scale-105 active:scale-95 duration-200 transition-all">
<span className="material-symbols-outlined text-[24px] mb-1" style={{ "fontVariationSettings": "'FILL' 1" }}>terminal</span>
<span className="font-mono-ui text-mono-ui text-[10px]">Command</span>
</button>
{/* Inactive Tab: Sources */}
<button className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all scale-100 active:scale-95 duration-200 px-2 py-1 rounded-xl">
<span className="material-symbols-outlined text-[24px] mb-1">inventory</span>
<span className="font-mono-ui text-mono-ui text-[10px]">Sources</span>
</button>
{/* Inactive Tab: Context */}
<button className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all scale-100 active:scale-95 duration-200 px-2 py-1 rounded-xl">
<span className="material-symbols-outlined text-[24px] mb-1">visibility</span>
<span className="font-mono-ui text-mono-ui text-[10px]">Context</span>
</button>
{/* Inactive Tab: Filter */}
<button className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all scale-100 active:scale-95 duration-200 px-2 py-1 rounded-xl">
<span className="material-symbols-outlined text-[24px] mb-1">filter_list</span>
<span className="font-mono-ui text-mono-ui text-[10px]">Filter</span>
</button>
</nav>

    </div>
  );
}
