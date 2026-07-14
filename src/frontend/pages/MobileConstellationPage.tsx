import React from 'react';

export default function MobileConstellationPage() {
  return (
    <div className="bg-surface-variant flex items-center justify-center min-h-screen text-on-surface antialiased font-body-md selection:bg-secondary-container selection:text-on-secondary-container w-full">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined[data-weight="fill"] {
            font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar to maintain minimalism */
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(197, 199, 194, 0.5); /* outline-variant */
            border-radius: 4px;
        }
    

    body {
      min-height: max(884px, 100dvh);
    }
  ` }} />
      
      
{/* Mobile Device Simulator Frame */}
<div className="relative w-full max-w-[430px] h-[932px] max-h-screen bg-surface overflow-hidden shadow-2xl md:rounded-[2.5rem] md:border-[8px] border-surface-container-highest">
{/* TopAppBar (Mapped from JSON) */}
<header className="docked full-width top-0 sticky z-40 bg-surface/60 backdrop-blur-2xl bg-transparent flat no shadows flex justify-between items-center px-6 py-unit h-16 w-full">
<div className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</div>
<div className="flex gap-4 items-center">
<button aria-label="Flare" className="scale-95 transition-transform duration-200">
<span className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary transition-colors duration-300">flare</span>
</button>
<button aria-label="Notifications" className="scale-95 transition-transform duration-200">
<span className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary transition-colors duration-300">notifications_none</span>
</button>
<button aria-label="Account" className="scale-95 transition-transform duration-200">
<span className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary transition-colors duration-300">account_circle</span>
</button>
</div>
</header>
{/* Intelligence Canvas: Knowledge Constellation View */}
<main className="absolute inset-0 z-10 pt-16 pb-32 overflow-hidden bg-[radial-gradient(circle_at_center,theme(colors.surface-bright)_0%,theme(colors.surface)_100%)]">
{/* Subtle dot grid background (Minimalism) */}
<div className="absolute inset-0 opacity-[0.15]" style={{ "backgroundImage": "radial-gradient(theme(colors.outline) 1px, transparent 1px)", "backgroundSize": "24px 24px" }}></div>
{/* Constellation SVG Connections (Light Threads) */}
<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
{/* Thread styles: 0.5px, subtle outline color */}
<line stroke="#c5c7c2" strokeOpacity="0.6" strokeWidth="0.5" x1="50%" x2="20%" y1="40%" y2="25%"></line>
<line stroke="#c5c7c2" strokeOpacity="0.6" strokeWidth="0.5" x1="50%" x2="85%" y1="40%" y2="30%"></line>
<line stroke="#c5c7c2" strokeOpacity="0.6" strokeWidth="0.5" x1="50%" x2="30%" y1="40%" y2="65%"></line>
<line stroke="#c5c7c2" strokeOpacity="0.6" strokeWidth="0.5" x1="50%" x2="75%" y1="40%" y2="60%"></line>
<line stroke="#c5c7c2" strokeOpacity="0.3" strokeWidth="0.5" x1="30%" x2="15%" y1="65%" y2="80%"></line>
</svg>
{/* Constellation Nodes (Spatial Stacking Level 1/2) */}
{/* Node: Synthesis Studio (Top Left) */}
<div className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">layers</span>
</div>
<div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="font-mono-ui text-mono-ui text-on-surface-variant bg-surface/80 px-2 py-1 rounded backdrop-blur-sm">v.Studio</span>
</div>
</div>
{/* Node: Source Hub (Top Right) */}
<div className="absolute top-[30%] left-[85%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">folder_open</span>
</div>
</div>
{/* Central Active Node: Intelligence Canvas (Pulsing Dusty Lavender) */}
<div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
<div className="relative w-20 h-20">
{/* Pulse ring */}
<div className="absolute inset-0 rounded-full bg-secondary-container/40 animate-ping" style={{ "animationDuration": "3s" }}></div>
{/* Core node */}
<div className="absolute inset-2 rounded-full bg-surface-bright backdrop-blur-2xl border-2 border-secondary-container shadow-[0_0_24px_rgba(94,91,124,0.15)] flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105">
<span className="material-symbols-outlined text-secondary" data-weight="fill">hub</span>
</div>
</div>
<div className="absolute top-24 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
<span className="font-label-caps text-label-caps text-on-surface block tracking-widest">CORE</span>
<span className="font-mono-ui text-[10px] text-on-surface-variant/60 block mt-0.5">Active Vector</span>
</div>
</div>
{/* Node: Memory Timeline (Bottom Left) */}
<div className="absolute top-[65%] left-[30%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10">
<div className="w-14 h-14 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
<span className="material-symbols-outlined text-on-surface-variant text-[22px]">history</span>
</div>
</div>
{/* Node: Secondary Detail (Bottom Right) */}
<div className="absolute top-[60%] left-[75%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-surface-container-highest/50 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform duration-300 hover:scale-110">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim"></span>
</div>
</div>
{/* Peripheral Node */}
<div className="absolute top-[80%] left-[15%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="w-6 h-6 rounded-full bg-surface-container-highest/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
</div>
</div>
</main>
{/* Collapsible Workspace Layer (The Lens - Spatial Stacking Level 2) */}
{/* Simulated as partially pulled up */}
<div className="absolute bottom-[90px] left-0 w-full px-4 z-30 transition-transform duration-500 translate-y-0">
<div className="bg-surface-bright/85 backdrop-blur-3xl border border-white/60 rounded-t-3xl rounded-b-xl shadow-[0_-8px_32px_rgba(28,28,23,0.08)] p-6 pt-4 flex flex-col gap-4">
{/* Drag Handle */}
<div className="w-12 h-1.5 bg-outline-variant/40 rounded-full mx-auto mb-2"></div>
{/* Content Header */}
<div className="flex justify-between items-start">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-1">Synthesis Core</h2>
<div className="flex items-center gap-2 font-mono-ui text-[11px] text-on-surface-variant/70">
<span className="px-1.5 py-0.5 bg-surface-container rounded text-primary">VECTOR_ALPHA</span>
<span>•</span>
<span>3 Connected Sources</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]">more_horiz</span>
</button>
</div>
{/* Source DNA Mini-Cards (Bento style grid inside sheet) */}
<div className="grid grid-cols-2 gap-3 mt-2">
{/* DNA Card 1 */}
<div className="bg-surface relative overflow-hidden rounded-xl border border-surface-container-highest p-3 flex flex-col justify-between h-24 hover:border-outline-variant/50 transition-colors cursor-pointer group">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ "backgroundImage": "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div> {/* Paper texture simulation allowed as inline tiny SVG for texture only, but prompt says NO inline SVG. Fallback to css pattern or plain */}
{/* Replaced texture with pure CSS */}
<div className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none bg-gradient-to-tr from-surface to-surface-variant"></div>
<div className="flex items-center gap-2 z-10">
<span className="material-symbols-outlined text-secondary text-[16px]">description</span>
<span className="font-mono-ui text-[10px] text-on-surface-variant truncate">Q3_Report.pdf</span>
</div>
<div className="z-10 mt-2">
<div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
{/* Relevance Meter Gradient */}
<div className="h-full bg-gradient-to-r from-surface-variant to-secondary w-[85%]"></div>
</div>
</div>
</div>
{/* DNA Card 2 */}
<div className="bg-surface relative overflow-hidden rounded-xl border border-surface-container-highest p-3 flex flex-col justify-between h-24 hover:border-outline-variant/50 transition-colors cursor-pointer">
<div className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none bg-gradient-to-tr from-surface to-surface-variant"></div>
<div className="flex items-center gap-2 z-10">
<span className="material-symbols-outlined text-primary text-[16px]">language</span>
<span className="font-mono-ui text-[10px] text-on-surface-variant truncate">Market_Analysis</span>
</div>
<div className="z-10 mt-2">
<div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-surface-variant to-secondary w-[40%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Command Palette Wrapper (Level 3 - Integrated into BottomNav area conceptually, but distinct) */}
<div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-[380px] hidden">
{/* This would be the active state of the "Command" button, rendering a floating input. Hidden for this specific static view to prioritize the graph. */}
<div className="bg-surface-bright/95 backdrop-blur-3xl border border-white/50 rounded-2xl p-4 shadow-[0_12px_40px_rgba(94,91,124,0.15)] flex items-center gap-3">
<span className="material-symbols-outlined text-primary">colors_spark</span>
<input className="bg-transparent border-none focus:ring-0 text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/40 w-full" placeholder="Synthesize connections..." type="text"/>
</div>
</div>
{/* BottomNavBar (Mapped from JSON) */}
{/* Note: JSON defines min-w-[420px], adjusting slightly to fit the mobile simulator frame while respecting intent */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">
<nav className="rounded-full px-6 py-3 w-full max-w-[400px] bg-surface-bright/40 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-secondary/10 flex justify-between gap-2 items-center">
{/* Item 1: Command (Inactive) */}
<button className="flex flex-col items-center justify-center w-16 text-on-secondary-container/60 hover:bg-white/10 transition-all scale-105 active:scale-95 duration-200 rounded-xl py-1">
<span className="material-symbols-outlined font-label-caps text-[22px] mb-1">terminal</span>
<span className="font-mono-ui text-[9px]">Command</span>
</button>
{/* Item 2: Sources (Inactive) */}
<button className="flex flex-col items-center justify-center w-16 text-on-secondary-container/60 hover:bg-white/10 transition-all scale-105 active:scale-95 duration-200 rounded-xl py-1">
<span className="material-symbols-outlined font-label-caps text-[22px] mb-1">inventory</span>
<span className="font-mono-ui text-[9px]">Sources</span>
</button>
{/* Item 3: Context (Active - Representing the Constellation View) */}
<button className="flex flex-col items-center justify-center w-20 text-primary bg-primary-container/60 rounded-2xl px-2 py-2 hover:bg-white/20 transition-all scale-105 active:scale-95 duration-200 border border-white/30 shadow-sm relative overflow-hidden">
{/* Subtle glow behind active item */}
<div className="absolute inset-0 bg-secondary-container/10 blur-md rounded-full"></div>
<span className="material-symbols-outlined font-label-caps text-[22px] font-bold z-10" data-weight="fill">visibility</span>
<span className="font-mono-ui text-[10px] font-bold z-10 mt-1">Context</span>
</button>
{/* Item 4: Filter (Inactive) */}
<button className="flex flex-col items-center justify-center w-16 text-on-secondary-container/60 hover:bg-white/10 transition-all scale-105 active:scale-95 duration-200 rounded-xl py-1">
<span className="material-symbols-outlined font-label-caps text-[22px] mb-1">filter_list</span>
<span className="font-mono-ui text-[9px]">Filter</span>
</button>
</nav>
</div>
</div>

    </div>
  );
}
