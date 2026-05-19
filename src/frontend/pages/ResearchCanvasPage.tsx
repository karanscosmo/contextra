import React from 'react';
import Sidebar from '../components/Sidebar';

export default function ResearchCanvasPage() {
  return (
    <div className="bg-transparent text-on-surface vellum-texture min-h-screen overflow-hidden w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24
    }
.vellum-texture {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDBOG1nNgeJ9L6a4zyLQ8RAS2tuHf39IP29xvvH3VUkZz3QCFXn5xvhP9S5XraGSnAJ6FnBWd_grZ6n6J1zmhNa-E765-B8Vu34s0FRgcWgg9yVNL9QIeR45a69rWTfs97qTYccWrYkbTTo-UTN4kYxvI_LE7JHML-pJRUxa6gdAmL1Tpuh4kOWhXXy7VIOj8H6q7rm01CHzdjg7LkGAsBtTurUqRLsDqIrdknJlFCuVa8j2bxWBeSG_y8jpCjVYxSBwG4as1FOYeM);
    background-repeat: repeat
    }
.glass-edge {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2)
    }
::-webkit-scrollbar {
    width: 4px
    }
::-webkit-scrollbar-track {
    background: transparent
    }
::-webkit-scrollbar-thumb {
    background: #e5e2da;
    border-radius: 10px
    }` }} />
      
      <Sidebar activePage="canvas" />
{/* Top: TopAppBar & Command Layer */}
<header className="fixed top-0 left-0 md:left-64 right-0 z-40 bg-surface/60 backdrop-blur-2xl px-6 md:px-margin-page h-16 flex items-center justify-between">
<div className="flex-1 max-w-2xl">
<div className="relative group">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/50" data-icon="flare">flare</span>
<input className="w-full bg-surface-container-high/50 border-none rounded-full py-2 pl-12 pr-4 font-body-md text-body-md focus:ring-1 focus:ring-primary/20 placeholder:text-on-surface-variant/40" placeholder="Synthesize across your knowledge base..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6 ml-gutter-grid">
<span className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary transition-colors cursor-pointer" data-icon="notifications_none">notifications_none</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional portrait of a researcher in a bright, modern studio setting. The lighting is soft and high-key, highlighting the person's focus and intelligence. The background is a clean, minimalist workspace with warm ivory and soft grey tones, consistent with the Scandinavian design aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5CjQ6vVF77yU9W1BOT2eAOjaVtg5jbFjA5My18T94vuy9XIzjGwBLDMu-LmKuyj0bpoRq_xf570_E8KqS4CgCIYBIjMGukdlL4BTWqc59kFWTM1SbTQglg8oKMpUWh25OwCVsyUu4RJJMG2gQuAVa494VyzHA4kHeK4d-p3Pi1LhTN9bCVr3dU5i8n1XTG-xe2r3NszirPdImiG6gK1rNrRxhUiEXLnOmiV8fJ-WOwA-9xn2YApsKzbhsWfPuhYYgJqKXj4bPzpc"/>
</div>
</div>
</header>
{/* Main Content Area */}
<main className="ml-0 md:ml-64 pt-16 h-screen overflow-hidden flex">
{/* Left Sub-Panel: Floating Source Dock */}
<section className="hidden lg:flex w-60 xl:w-72 border-r border-outline-variant/20 flex-col p-6 bg-surface-container-low/30">
<div className="mb-6 flex items-center justify-between">
<h3 className="font-label-caps text-label-caps text-on-surface-variant">Active Sources</h3>
<span className="material-symbols-outlined text-sm" data-icon="add_circle">add_circle</span>
</div>
<div className="flex-1 overflow-y-auto space-y-4">
{/* Source DNA Card */}
<div className="bg-surface p-4 rounded-lg border border-outline-variant/30 glass-edge hover:scale-[1.02] transition-transform cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-sm" data-icon="picture_as_pdf">picture_as_pdf</span>
<span className="font-mono-ui text-mono-ui text-[10px] text-primary">PDF_D-2024</span>
</div>
<p className="font-body-md text-[13px] leading-tight mb-2">Quantum Neural Mapping: A New Frontier</p>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-tertiary w-3/4 h-full"></div>
</div>
</div>
<div className="bg-surface p-4 rounded-lg border border-outline-variant/30 glass-edge hover:scale-[1.02] transition-transform cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-error text-sm" data-icon="video_library">video_library</span>
<span className="font-mono-ui text-mono-ui text-[10px] text-error">YOUTUBE_RECAP</span>
</div>
<p className="font-body-md text-[13px] leading-tight mb-2">Synthesis in Scandinavian Minimalist Systems</p>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-tertiary w-1/2 h-full"></div>
</div>
</div>
<div className="bg-surface p-4 rounded-lg border border-outline-variant/30 glass-edge hover:scale-[1.02] transition-transform cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary text-sm" data-icon="description">description</span>
<span className="font-mono-ui text-mono-ui text-[10px] text-secondary">NOTE_RAW_12</span>
</div>
<p className="font-body-md text-[13px] leading-tight mb-2">Draft Observations on Tactile Digital UI</p>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-tertiary w-1/5 h-full"></div>
</div>
</div>
</div>
</section>
{/* Center: Intelligence Canvas */}
<section className="flex-1 overflow-y-auto px-4 md:px-8 py-12 vellum-texture">
<div className="max-w-3xl mx-auto space-y-16">
{/* Thread 1 */}
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[18px]" data-icon="auto_awesome">auto_awesome</span>
</div>
<div className="space-y-4">
<h2 className="font-headline-md text-headline-md text-on-surface">Synthesis: Digital Tactility &amp; Cognitive Load</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                Research indicates that "Digital Tactility"—the simulation of physical weight and texture in software—significantly reduces cognitive overhead in knowledge management. By utilizing <span className="bg-secondary-container/30 px-1 rounded">Scandinavian functionalism</span> as a base, the UI becomes a calm frame for complex data.
                            </p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-surface-container-high border border-outline-variant/30 font-mono-ui text-mono-ui text-[10px]">RELEVANCE 94%</span>
<span className="px-2 py-1 rounded bg-surface-container-high border border-outline-variant/30 font-mono-ui text-mono-ui text-[10px]">3 CITATIONS</span>
</div>
</div>
</div>
</div>
{/* Thread 2 (Fade Effect) */}
<div className="space-y-6 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary text-[18px]" data-icon="psychology">psychology</span>
</div>
<div className="space-y-4">
<h2 className="font-headline-md text-headline-md text-on-surface">Memory Thread: Neural Mapping Nodes</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                The connection between node-based knowledge and linear thread synthesis suggests that users prefer "The Intelligence Canvas" for high-order reasoning while maintaining "Source DNA" for validation.
                            </p>
</div>
</div>
</div>
{/* Bento Style Synthesis Block */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-gutter-grid">
<div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/20">
<h4 className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Core Vector</h4>
<p className="font-body-md text-body-md mb-4">Japanese Print Precision: Focus on editorial spacing and high-contrast typography.</p>
<span className="material-symbols-outlined text-tertiary" data-icon="grid_view">grid_view</span>
</div>
<div className="bg-tertiary-container p-6 rounded-2xl border border-tertiary-fixed-dim/30">
<h4 className="font-label-caps text-label-caps text-on-tertiary-container mb-4 uppercase">AI Insight</h4>
<p className="font-body-md text-body-md text-on-tertiary-container mb-4">Potential contradiction found in source NOTE_RAW_12 regarding motion blur usage.</p>
<span className="material-symbols-outlined text-tertiary" data-icon="priority_high">priority_high</span>
</div>
</div>
</div>
</section>
{/* Right: Context Panel */}
<section className="hidden xl:flex w-72 xl:w-80 border-l border-outline-variant/20 p-6 bg-surface-bright/80 backdrop-blur-xl flex-col">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6">Context Lens</h3>
{/* Knowledge Graph Placeholder */}
<div className="aspect-square bg-surface-container rounded-xl relative overflow-hidden mb-8 border border-outline-variant/10">
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-primary/10" data-icon="hub">hub</span>
<div className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(94,95,92,0.5)] top-1/2 left-1/3"></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-secondary top-1/4 right-1/4"></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-tertiary bottom-1/3 right-1/2"></div>
</div>
<div className="absolute bottom-4 left-4 font-mono-ui text-[10px] text-on-surface-variant/40">KNOWLEDGE CONSTELLATION v1.0</div>
</div>
<div className="flex-1 space-y-6 overflow-y-auto">
<div>
<h4 className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase mb-3">Direct Citations</h4>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-surface border-l-2 border-primary text-[12px] font-body-md leading-snug">
                            "The tactile nature of digital interfaces is not merely aesthetic but a functional requirement for retention..." 
                            <span className="block mt-1 font-mono-ui text-[10px] text-primary">— PDF_D-2024, Page 42</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-outline-variant/20">
<h4 className="font-label-caps text-[10px] text-error/70 uppercase mb-3">Contradiction Warning</h4>
<div className="p-3 rounded-lg bg-error-container/30 border border-error/20">
<p className="text-[12px] font-body-md text-on-error-container leading-snug">
                            Source <strong>NOTE_RAW_12</strong> suggests rapid transitions, while <strong>PDF_D-2024</strong> argues for fluid, slow state changes.
                        </p>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar Anchor */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-full px-8 py-4 w-auto min-w-[420px] glass-edge">
<a className="flex flex-col items-center text-primary dark:text-primary-fixed bg-primary-container/30 rounded-full px-4 py-1 scale-105 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
<span className="font-mono-ui text-[10px]">Command</span>
</a>
<a className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="inventory">inventory</span>
<span className="font-mono-ui text-[10px]">Sources</span>
</a>
<a className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-mono-ui text-[10px]">Context</span>
</a>
<a className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
<span className="font-mono-ui text-[10px]">Filter</span>
</a>
</nav>
{/* Semantic Relevance Meter (Floating Overlay) */}
<div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
<div className="h-48 w-1.5 rounded-full bg-gradient-to-t from-secondary via-surface-variant to-primary-fixed-dim relative">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer"></div>
</div>
<span className="font-mono-ui text-[10px] text-on-surface-variant/40 rotate-90 origin-center whitespace-nowrap mt-8">RELEVANCE LENS</span>
</div>

    </div>
  );
}
