import React from 'react';

export default function AutonomousAgentsPage() {
  return (
    <div className="antialiased min-h-screen flex font-body-md text-body-md overflow-hidden w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: theme('colors.background'); color: theme('colors.on-background'); }
        .glass-panel { background: rgba(247, 243, 235, 0.7); backdrop-filter: blur(24px); border: 1px solid rgba(197, 199, 194, 0.3); }
        .thread-line { width: 1px; background: theme('colors.outline-variant'); opacity: 0.3; }
        .agent-glow { box-shadow: 0 0 15px rgba(94, 87, 143, 0.15); }
    ` }} />
      
      
{/* SideNavBar (from JSON) */}
<nav className="hidden md:flex flex-col h-screen w-64 left-0 fixed py-8 px-4 bg-surface-container-low dark:bg-surface-container-high border-r border-outline-variant/30 text-primary dark:text-primary-fixed-dim z-40">
<div className="mb-12 px-4">
<h1 className="font-headline-md text-headline-md text-on-surface">Contextra</h1>
<p className="font-mono-ui text-mono-ui text-on-surface-variant opacity-70 mt-1">Intelligence Workspace</p>
</div>
<div className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 0" }}>analytics</span>
<span>Intelligence Canvas</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-primary-fixed-variant font-medium bg-primary-container scale-[0.98] transition-transform" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>hub</span>
<span>Knowledge Constellation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 0" }}>inventory_2</span>
<span>Source Hub</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 0" }}>auto_awesome</span>
<span>Synthesis Studio</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 0" }}>history</span>
<span>Memory Timeline</span>
</a>
</div>
<div className="mt-auto px-4">
<button className="w-full py-3 bg-tertiary text-on-tertiary rounded-lg font-body-md text-body-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add</span>
                New Synthesis
            </button>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 ml-0 md:ml-64 h-screen overflow-y-auto relative">
{/* TopNavBar (from JSON, adapted for desktop view context) */}
<header className="w-full top-0 sticky z-30 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
<div className="flex justify-between items-center px-margin-page py-4 w-full max-w-[1280px] mx-auto">
<div className="flex items-center gap-4">
{/* Search Bar */}
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-1 focus:ring-tertiary outline-none font-mono-ui text-mono-ui w-64" placeholder="Query Agents..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6 text-primary dark:text-primary-fixed-dim">
<button className="hover:text-on-surface transition-colors duration-300">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="hover:text-on-surface transition-colors duration-300">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
{/* Intelligence Canvas */}
<div className="max-w-[1280px] mx-auto px-margin-page py-12">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Autonomous Agents</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Live execution monitoring and workflow orchestration.</p>
</div>
<div className="flex gap-4">
<button className="px-4 py-2 border border-outline-variant rounded-full font-mono-ui text-mono-ui flex items-center gap-2 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span>
                        Filter View
                    </button>
<button className="px-4 py-2 bg-inverse-surface text-inverse-on-surface rounded-full font-mono-ui text-mono-ui flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm">rocket_launch</span>
                        Deploy Agent
                    </button>
</div>
</div>
{/* Bento Grid Layout for Agents */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-grid">
{/* Primary Active Agent Card (Spans 2 columns) */}
<div className="md:col-span-2 glass-panel rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -mr-12 -mt-12"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
<span className="font-label-caps text-label-caps text-tertiary">ACTIVE EXECUTION</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Alpha Researcher-X</h3>
</div>
<div className="px-3 py-1 bg-surface-container-highest rounded-full font-mono-ui text-mono-ui text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">timer</span>
                            02:14:05
                        </div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-lg">Synthesizing macro-economic trends in the renewable sector based on Q3 earnings reports and global policy shifts.</p>
{/* Reasoning Chain Visualization */}
<div className="bg-surface-container rounded-lg p-6 font-mono-ui text-mono-ui text-on-surface-variant relative">
<div className="absolute left-[38px] top-8 bottom-8 thread-line"></div>
<div className="flex gap-4 mb-4 relative z-10">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div>
<span className="text-on-surface font-medium">Data Ingestion Complete</span>
<div className="text-[11px] opacity-70 mt-1">Processed 142 PDFs, 38 URLs</div>
</div>
</div>
<div className="flex gap-4 mb-4 relative z-10">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 agent-glow">
<span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
</div>
<div>
<span className="text-on-surface font-medium">Cross-Referencing Anomalies</span>
<div className="text-[11px] opacity-70 mt-1">Analyzing variance in European vs Asian market projections...</div>
</div>
</div>
<div className="flex gap-4 relative z-10 opacity-50">
<div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[16px]">article</span>
</div>
<div>
<span>Generate Final Synthesis</span>
<div className="text-[11px] mt-1">Pending upstream resolution</div>
</div>
</div>
</div>
</div>
{/* Secondary Agent Card (Idle) */}
<div className="glass-panel rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">IDLE</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Beta Monitor</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Scheduled daily sweep of competitor PR releases.</p>
</div>
<div className="mt-8">
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden mb-2">
<div className="h-full bg-outline-variant w-full"></div>
</div>
<div className="flex justify-between font-mono-ui text-[11px] text-on-surface-variant">
<span>Last run: 4h ago</span>
<span>Next: 08:00 UTC</span>
</div>
</div>
</div>
{/* Tool Chaining Miniature */}
<div className="glass-panel rounded-xl p-6">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-tertiary">polyline</span>
<h3 className="font-body-md text-body-md font-medium text-on-surface">Active Toolchain</h3>
</div>
<div className="space-y-3 font-mono-ui text-mono-ui">
<div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-outline-variant/20">
<span className="material-symbols-outlined text-on-surface-variant">public</span>
<span className="text-on-surface">WebScraper_v2</span>
</div>
<div className="ml-4 pl-4 border-l border-outline-variant/30 flex items-center gap-3 p-3 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant">memory</span>
<span className="text-on-surface">Semantic_Parser</span>
</div>
<div className="ml-8 pl-4 border-l border-outline-variant/30 flex items-center gap-3 p-3 bg-tertiary-container rounded-lg agent-glow border border-tertiary/20">
<span className="material-symbols-outlined text-tertiary">database</span>
<span className="text-on-tertiary-container">Vector_Store_Write</span>
</div>
</div>
</div>
{/* System Metrics Card */}
<div className="md:col-span-2 glass-panel rounded-xl p-6 flex items-center gap-8">
<div className="flex-1">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">COMPUTE RESOURCES</h3>
<div className="flex items-end gap-2 mb-1">
<span className="font-headline-lg text-headline-lg text-on-surface leading-none">42.8</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant mb-1">TFLOPS</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Cluster utilization across 4 active nodes.</p>
</div>
<div className="flex-1 border-l border-outline-variant/30 pl-8">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">MEMORY CONTEXT</h3>
<div className="w-full bg-surface-container rounded-full h-2 mb-2">
<div className="bg-tertiary h-2 rounded-full" style={{ "width": "75%" }}></div>
</div>
<div className="flex justify-between font-mono-ui text-[11px] text-on-surface-variant">
<span>96k / 128k tokens</span>
<span>75% Capacity</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar (from JSON - visible on mobile) */}
<nav className="md:hidden fixed bottom-dock-padding left-1/2 -translate-x-1/2 z-50 flex items-center p-2 bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-[64px] border border-white/20 shadow-xl rounded-full">
<a className="text-on-surface-variant px-6 py-2 flex items-center gap-2 font-mono-ui text-mono-ui hover:bg-surface-container-highest/40 transition-all" href="#">
<span className="material-symbols-outlined">terminal</span>
<span className="hidden sm:inline">Terminal</span>
</a>
<a className="bg-tertiary-container text-on-tertiary-container rounded-full px-6 py-2 flex items-center gap-2 font-mono-ui text-mono-ui scale-95 transition-transform duration-200 shadow-sm" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>folder_open</span>
<span className="hidden sm:inline">Sources</span>
</a>
<a className="text-on-surface-variant px-6 py-2 flex items-center gap-2 font-mono-ui text-mono-ui hover:bg-surface-container-highest/40 transition-all" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="hidden sm:inline">Context</span>
</a>
<a className="text-on-surface-variant px-6 py-2 flex items-center gap-2 font-mono-ui text-mono-ui hover:bg-surface-container-highest/40 transition-all" href="#">
<span className="material-symbols-outlined">filter_list</span>
<span className="hidden sm:inline">Filtering</span>
</a>
</nav>

    </div>
  );
}
