import React, { useEffect } from 'react';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function ExportSharePage() {
  useEffect(() => {
    document.title = 'Contextra - Export & Share';
  }, []);

  useStyleBlock(`
        /* Base Paper Texture Overlay for subtle tactility */
        .paper-texture {
            position: relative;
        }
        .paper-texture::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 10;
        }
    `);

  return (
    <div className="bg-background text-on-surface antialiased flex h-screen overflow-hidden selection:bg-secondary-container selection:text-on-secondary-container w-full min-h-screen">
      
      
{/* Shared Component: SideNavBar */}
<nav className="h-screen w-64 fixed left-0 top-0 z-30 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant/30 dark:border-outline/20 flat no shadows flex flex-col h-full py-margin-page px-6 hidden md:flex paper-texture">
{/* Header */}
<div className="mb-12">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tighter">Contextra</h1>
<p className="font-mono-ui text-mono-ui text-secondary dark:text-secondary-fixed mt-1">Vellum Workspace</p>
</div>
{/* Navigation Links */}
<ul className="flex flex-col gap-2 flex-1">
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant/70 dark:text-on-surface-variant/50 hover:bg-surface-variant/50 dark:hover:bg-surface-container-high ease-in-out duration-300 transform font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="space_dashboard">space_dashboard</span>
                    Intelligence Canvas
                </a>
</li>
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant/70 dark:text-on-surface-variant/50 hover:bg-surface-variant/50 dark:hover:bg-surface-container-high ease-in-out duration-300 transform font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="hub">hub</span>
                    Knowledge Constellation
                </a>
</li>
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant/70 dark:text-on-surface-variant/50 hover:bg-surface-variant/50 dark:hover:bg-surface-container-high ease-in-out duration-300 transform font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="folder_open">folder_open</span>
                    Source Hub
                </a>
</li>
<li>
{/* ACTIVE STATE: Synthesis Studio relates best to Export/Share */}
<a className="flex items-center gap-4 px-4 py-3 bg-surface-variant/30 text-primary dark:text-primary-fixed border-r-2 border-primary font-bold ease-in-out duration-300 transform font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="layers" style={{ "fontVariationSettings": "'FILL' 1" }}>layers</span>
                    Synthesis Studio
                </a>
</li>
<li>
<a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant/70 dark:text-on-surface-variant/50 hover:bg-surface-variant/50 dark:hover:bg-surface-container-high ease-in-out duration-300 transform font-label-caps text-label-caps" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="history">history</span>
                    Memory Timeline
                </a>
</li>
</ul>
{/* CTA */}
<div className="mt-auto pt-6 border-t border-outline-variant/30">
<button className="w-full flex justify-center items-center gap-2 bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Synthesis
            </button>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 md:ml-64 relative overflow-y-auto overflow-x-hidden flex flex-col h-full bg-background paper-texture">
{/* Shared Component: TopAppBar */}
<header className="docked full-width top-0 sticky z-40 bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl bg-transparent flat no shadows flex justify-between items-center px-margin-page py-unit h-16 w-full border-b-0">
<div className="flex items-center gap-4">
{/* Branding suppressed slightly to focus on action, or kept minimal */}
<span className="font-headline-md text-headline-md tracking-tighter text-on-surface dark:text-on-surface-variant md:hidden">Contextra</span>
</div>
<div className="flex items-center gap-6">
<button className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-300 scale-95 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="flare">flare</span>
</button>
<button className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-300 scale-95 transition-transform duration-200 relative">
<span className="material-symbols-outlined" data-icon="notifications_none">notifications_none</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
</button>
<button className="text-on-surface-variant/60 dark:text-on-surface-variant/40 hover:text-primary transition-colors duration-300 scale-95 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
{/* The Intelligence Canvas (Content) */}
<div className="flex-1 w-full max-w-[1280px] mx-auto px-margin-page py-12 flex flex-col gap-12">
{/* Page Header */}
<section className="max-w-3xl">
<h2 className="font-display-hero text-display-hero text-on-surface mb-4">Export &amp; Share</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant/80">Distill your synthesized intelligence into refined formats. Ensure traceability and clarity for external stakeholders.</p>
</section>
{/* Bento Grid Layout */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid auto-rows-min">
{/* HERO CARD: Insight Package Preview (Spans 8) */}
<div className="md:col-span-8 bg-surface/80 backdrop-blur-xl border border-outline-variant/40 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
<span className="material-symbols-outlined text-[160px]" style={{ "fontVariationSettings": "'FILL' 1" }}>package</span>
</div>
<div className="flex justify-between items-start z-10">
<div>
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Downloadable Insight Package</h3>
<p className="font-body-md text-body-md text-on-surface-variant/70 max-w-md">A comprehensive archive containing your core narrative, raw data artifacts, and cited sources. Perfect for deep archival.</p>
</div>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-mono-ui text-mono-ui uppercase tracking-wider text-[10px]">Primary</span>
</div>
{/* Visual Preview Area */}
<div className="flex-1 bg-white/50 border border-outline-variant/20 rounded-xl p-6 mt-4 flex gap-4 overflow-x-auto items-center">
{/* File representation 1 */}
<div className="flex flex-col items-center justify-center gap-3 min-w-[120px] p-4 bg-surface rounded-lg border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-[32px] text-error" style={{ "fontVariationSettings": "'FILL' 1" }}>picture_as_pdf</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant text-center">Synthesis<br/>Report.pdf</span>
</div>
{/* File representation 2 */}
<div className="flex flex-col items-center justify-center gap-3 min-w-[120px] p-4 bg-surface rounded-lg border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-[32px] text-secondary" style={{ "fontVariationSettings": "'FILL' 1" }}>code</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant text-center">Source_Nodes<br/>.json</span>
</div>
{/* File representation 3 */}
<div className="flex flex-col items-center justify-center gap-3 min-w-[120px] p-4 bg-surface rounded-lg border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined text-[32px] text-tertiary" style={{ "fontVariationSettings": "'FILL' 1" }}>dataset</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant text-center">Vector_Map<br/>.csv</span>
</div>
</div>
<div className="flex justify-end z-10 mt-4">
<button className="flex items-center gap-2 bg-on-surface text-surface px-6 py-3 rounded-lg font-label-caps text-label-caps hover:bg-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Generate Package
                        </button>
</div>
</div>
{/* SIDE COLUMN: Quick Exports (Spans 4) */}
<div className="md:col-span-4 flex flex-col gap-gutter-grid">
{/* Export PDF */}
<div className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 flex flex-col justify-between hover:bg-surface-container transition-colors cursor-pointer group">
<div>
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-[28px] text-on-surface-variant group-hover:text-primary transition-colors">description</span>
<span className="material-symbols-outlined text-[20px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-1">Export Research PDF</h4>
<p className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Clean, editorial layout with embedded citations.</p>
</div>
</div>
{/* AI Report Export */}
<div className="flex-1 bg-tertiary-container/30 border border-tertiary-fixed-dim/40 rounded-2xl p-6 flex flex-col justify-between hover:bg-tertiary-container/50 transition-colors cursor-pointer group">
<div>
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-[28px] text-tertiary group-hover:scale-110 transition-transform">auto_awesome</span>
<span className="font-mono-ui text-mono-ui text-tertiary text-[10px] uppercase border border-tertiary/20 px-2 py-0.5 rounded-full">Auto-Draft</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-1">AI-generated Report</h4>
<p className="font-body-md text-body-md text-on-surface-variant/70 text-sm">Let Contextra compile findings into an executive summary.</p>
</div>
</div>
</div>
{/* BOTTOM ROW LEFT: Presentation Mode (Spans 6) */}
<div className="md:col-span-6 bg-inverse-surface text-inverse-on-surface rounded-2xl overflow-hidden relative group cursor-pointer min-h-[280px]">
{/* Abstract Background Graphic */}
<div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent mix-blend-overlay"></div>
<div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-64 h-64 border border-white/10 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-[32px]">slideshow</span>
<span className="material-symbols-outlined text-[24px] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">open_in_new</span>
</div>
<div>
<h4 className="font-headline-lg text-headline-lg mb-2">Presentation Mode</h4>
<p className="font-body-md text-body-md text-inverse-on-surface/70 max-w-sm">Transform the canvas into a distraction-free, sequential narrative flow for live reviews.</p>
</div>
</div>
</div>
{/* BOTTOM ROW RIGHT: Public Link (Spans 6) */}
<div className="md:col-span-6 bg-surface-container-highest border border-outline-variant/40 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-[28px] text-secondary">public</span>
<h4 className="font-headline-md text-headline-md text-on-surface">Public Intelligence Link</h4>
</div>
<p className="font-body-md text-body-md text-on-surface-variant/80 mb-6">Create a read-only, traceable web portal for this synthesis. Viewers can explore citations without needing an account.</p>
</div>
{/* Link Control area */}
<div className="bg-surface rounded-lg border border-outline-variant/30 p-2 flex items-center gap-2">
<div className="flex-1 px-3 font-mono-ui text-mono-ui text-on-surface-variant/60 truncate">
                            ctx.ra/intel/v9k2-alpha-synthesis
                        </div>
<button className="bg-surface-variant hover:bg-surface-container-high text-on-surface px-4 py-2 rounded font-label-caps text-label-caps transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
                            Copy
                        </button>
</div>
<div className="mt-4 flex items-center gap-2 font-mono-ui text-mono-ui text-[11px] text-on-surface-variant/60">
<span className="material-symbols-outlined text-[14px]">lock</span>
                        Access currently restricted to domain
                    </div>
</div>
</section>
{/* Spacing at bottom for scrolling past dock/bento */}
<div className="h-24"></div>
</div>
</main>

    </div>
  );
}
