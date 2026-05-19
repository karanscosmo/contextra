import React from 'react';

export default function IntegrationsModelsPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col md:flex-row w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `
        body {
            background-color: theme('colors.background');
            color: theme('colors.on-background');
        }
    ` }} />
      
      
{/* SideNavBar (Web) */}
<nav className="hidden md:flex flex-col h-screen w-64 left-0 fixed bg-surface-container-low border-r border-outline-variant/30 py-8 px-4 z-40">
<div className="mb-8 px-2">
<h1 className="font-headline-md text-headline-md text-on-surface">Contextra</h1>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Intelligence Workspace</p>
</div>
<button className="w-full bg-primary text-on-primary font-body-md text-body-md py-3 rounded-lg mb-8 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors duration-200">
<span className="material-symbols-outlined text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>add</span>
            New Synthesis
        </button>
<div className="flex-1 flex flex-col gap-2">
<a className="text-on-surface-variant hover:text-on-surface font-body-md text-body-md py-3 px-3 rounded-lg flex items-center gap-3 hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">analytics</span>
                Intelligence Canvas
            </a>
<a className="text-on-surface-variant hover:text-on-surface font-body-md text-body-md py-3 px-3 rounded-lg flex items-center gap-3 hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">hub</span>
                Knowledge Constellation
            </a>
<a className="text-on-primary-fixed-variant font-medium bg-primary-container rounded-lg font-body-md text-body-md py-3 px-3 flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>inventory_2</span>
                Source Hub
            </a>
<a className="text-on-surface-variant hover:text-on-surface font-body-md text-body-md py-3 px-3 rounded-lg flex items-center gap-3 hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                Synthesis Studio
            </a>
<a className="text-on-surface-variant hover:text-on-surface font-body-md text-body-md py-3 px-3 rounded-lg flex items-center gap-3 hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">history</span>
                Memory Timeline
            </a>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/30 flex items-center gap-3 px-2 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant group-hover:border-primary transition-colors">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZXYIlt0mzoLG3HbgaDXhfXj4k7iecu7Z2AQt0KF5itFAhpXlT89vbooi40XoSqTy_RQG-qT2EisdjbxVbXSM2jyaFduMqcw_hMNZhMLeCK1uxt_qDePdVwPuZT6-8i0Pj9glXYCg6b9rJiopiXlfG8-qpKGlCwn1aXLDI4omRiY-GZ_QxR87PQoyIoC0qYQAD3vMa-u5fAekSWS-VSViFlF7PSV7r6a0573B1ocMWAwcIAbtutpyXXmChOuLKC62rpajD-8QEdpA"/>
</div>
<div className="flex-1">
<p className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Account</p>
<p className="font-mono-ui text-mono-ui text-on-surface-variant text-xs">Settings &amp; Billing</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">more_vert</span>
</div>
</nav>
{/* TopNavBar (Mobile) */}
<header className="md:hidden w-full top-0 sticky bg-background/80 backdrop-blur-xl bg-background z-40">
<div className="flex justify-between items-center px-6 py-4 w-full">
<span className="material-symbols-outlined text-on-surface text-[24px]">menu</span>
<span className="font-headline-md text-headline-md font-light tracking-tight text-on-surface">Contextra</span>
<div className="flex items-center gap-4 text-primary">
<span className="material-symbols-outlined text-[24px]">notifications</span>
<span className="material-symbols-outlined text-[24px]">account_circle</span>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-64 px-4 md:px-margin-page py-8 md:py-16 max-w-[1280px] mx-auto w-full pb-32">
{/* Header Section */}
<header className="mb-16">
<h1 className="font-display-hero text-display-hero text-on-surface mb-4">Integration Hub</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Connect external nervous systems to Contextra. Streamline your knowledge intake from specialized platforms and select the cognitive engine powering your synthesis.</p>
</header>
{/* AI Model Selector (Glassmorphism / Command Layer aesthetic) */}
<section className="mb-20">
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">psychology</span>
                    Cognitive Engine
                </h2>
<span className="font-mono-ui text-mono-ui text-on-surface-variant bg-surface-variant px-3 py-1 rounded-full">Active: GPT-4 Omni</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* GPT-4 Card */}
<div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group cursor-pointer hover:border-tertiary/50 transition-colors">
<div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="absolute top-6 right-6">
<span className="material-symbols-outlined text-tertiary" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">GPT-4 Omni</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">OpenAI's flagship model. Optimized for complex reasoning and multi-step synthesis.</p>
<div className="space-y-4">
<div>
<div className="flex justify-between font-mono-ui text-mono-ui text-on-surface-variant mb-1">
<span>Reasoning</span>
<span>98%</span>
</div>
<div className="h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-[98%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-mono-ui text-mono-ui text-on-surface-variant mb-1">
<span>Speed</span>
<span>85%</span>
</div>
<div className="h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary/60 w-[85%]"></div>
</div>
</div>
</div>
</div>
{/* Claude 3 Card */}
<div className="bg-surface-bright border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group cursor-pointer hover:border-tertiary/50 transition-colors">
<div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="absolute top-6 right-6">
<span className="material-symbols-outlined text-outline-variant">circle</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Claude 3 Opus</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Anthropic's most capable model. Superior context window and nuanced editorial tone.</p>
<div className="space-y-4">
<div>
<div className="flex justify-between font-mono-ui text-mono-ui text-on-surface-variant mb-1">
<span>Reasoning</span>
<span>95%</span>
</div>
<div className="h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-on-surface-variant w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-mono-ui text-mono-ui text-on-surface-variant mb-1">
<span>Context</span>
<span>99%</span>
</div>
<div className="h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-on-surface-variant/60 w-[99%]"></div>
</div>
</div>
</div>
</div>
{/* Gemini Card */}
<div className="bg-surface-bright border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group cursor-pointer hover:border-tertiary/50 transition-colors">
<div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="absolute top-6 right-6">
<span className="material-symbols-outlined text-outline-variant">circle</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Gemini 1.5 Pro</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Google's multimodal powerhouse. Exceptional performance on native document formats.</p>
<div className="space-y-4">
<div>
<div className="flex justify-between font-mono-ui text-mono-ui text-on-surface-variant mb-1">
<span>Multimodal</span>
<span>97%</span>
</div>
<div className="h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-on-surface-variant w-[97%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-mono-ui text-mono-ui text-on-surface-variant mb-1">
<span>Speed</span>
<span>92%</span>
</div>
<div className="h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-on-surface-variant/60 w-[92%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* External Integrations (Bento Grid) */}
<section>
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface">cable</span>
                    Data Streams
                </h2>
<div className="flex gap-2">
<button className="px-4 py-2 bg-surface-variant text-on-surface font-mono-ui text-mono-ui rounded-full hover:bg-outline-variant/50 transition-colors">All</button>
<button className="px-4 py-2 text-on-surface-variant font-mono-ui text-mono-ui rounded-full hover:bg-surface-variant transition-colors">Active</button>
<button className="px-4 py-2 text-on-surface-variant font-mono-ui text-mono-ui rounded-full hover:bg-surface-variant transition-colors">Available</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
{/* Active Integration: Notion (Large Card) */}
<div className="md:col-span-8 bg-surface-container-high rounded-xl p-8 relative overflow-hidden flex flex-col justify-between group border border-outline-variant/30">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-variant/20 pointer-events-none"></div>
<div className="flex justify-between items-start relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-outline-variant/20">
{/* Placeholder for Notion Logo, using an icon for now */}
<span className="material-symbols-outlined text-on-surface text-[28px]">description</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Notion Workspace</h3>
<p className="font-mono-ui text-mono-ui text-primary flex items-center gap-2 mt-1">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    Syncing active (Last sync: 2m ago)
                                </p>
</div>
</div>
<button className="p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div className="relative z-10 flex items-end justify-between">
<div className="flex gap-4">
<div className="bg-surface p-3 rounded-lg border border-outline-variant/30">
<p className="font-mono-ui text-mono-ui text-on-surface-variant text-xs uppercase mb-1">Indexed Blocks</p>
<p className="font-headline-md text-headline-md text-on-surface">14,208</p>
</div>
<div className="bg-surface p-3 rounded-lg border border-outline-variant/30">
<p className="font-mono-ui text-mono-ui text-on-surface-variant text-xs uppercase mb-1">Databases</p>
<p className="font-headline-md text-headline-md text-on-surface">12</p>
</div>
</div>
<button className="bg-surface text-on-surface border border-outline-variant/50 px-6 py-2 rounded-lg font-body-md text-body-md hover:bg-surface-variant transition-colors flex items-center gap-2">
                            Configure
                            <span className="material-symbols-outlined text-[18px]">settings</span>
</button>
</div>
</div>
{/* Active Integration: GitHub (Medium Card) */}
<div className="md:col-span-4 bg-surface-bright rounded-xl p-6 relative overflow-hidden flex flex-col justify-between border border-outline-variant/30">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-on-surface text-surface rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">code</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-medium">GitHub</h3>
</div>
<span className="bg-primary-container text-primary font-mono-ui text-[11px] px-2 py-1 rounded">Connected</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Monitoring 3 repositories for documentation synthesis.</p>
<div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden mb-2">
<div className="bg-primary h-full w-[45%]"></div>
</div>
<p className="font-mono-ui text-mono-ui text-on-surface-variant text-xs text-right">Indexing v2.0-beta branch</p>
</div>
</div>
{/* Available Integration: Zotero (Small Card) */}
<div className="md:col-span-4 bg-surface-bright rounded-xl p-6 border border-outline-variant/20 flex flex-col justify-between group hover:border-outline-variant/60 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-error-container text-on-error-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">library_books</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-medium">Zotero</h3>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex-1">Sync academic libraries and PDF annotations directly into your research context.</p>
<button className="w-full mt-4 bg-surface-container border border-outline-variant/30 text-on-surface font-body-md py-2 rounded-lg hover:bg-surface-variant transition-colors flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add_link</span>
                        Connect
                    </button>
</div>
{/* Available Integration: arXiv (Small Card) */}
<div className="md:col-span-4 bg-surface-bright rounded-xl p-6 border border-outline-variant/20 flex flex-col justify-between group hover:border-outline-variant/60 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high text-on-surface rounded-lg flex items-center justify-center border border-outline-variant/30">
<span className="material-symbols-outlined text-[24px]">article</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-medium">arXiv API</h3>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex-1">Automated daily ingest of pre-prints based on custom keyword subscriptions.</p>
<button className="w-full mt-4 bg-surface-container border border-outline-variant/30 text-on-surface font-body-md py-2 rounded-lg hover:bg-surface-variant transition-colors flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add_link</span>
                        Connect
                    </button>
</div>
{/* Available Integration: Slack (Small Card) */}
<div className="md:col-span-4 bg-surface-bright rounded-xl p-6 border border-outline-variant/20 flex flex-col justify-between group hover:border-outline-variant/60 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#E0E2FD] text-[#4A154B] rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">forum</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-medium">Slack</h3>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex-1">Extract tribal knowledge from specific channels to build organizational context.</p>
<button className="w-full mt-4 bg-surface-container border border-outline-variant/30 text-on-surface font-body-md py-2 rounded-lg hover:bg-surface-variant transition-colors flex justify-center items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add_link</span>
                        Connect
                    </button>
</div>
</div>
</section>
</main>
{/* BottomNavBar (Mobile) */}
<nav className="md:hidden fixed bottom-dock-padding left-1/2 -translate-x-1/2 z-50 flex items-center p-2 bg-surface/60 backdrop-blur-[64px] docked rounded-full bottom-canvas-safe-area mx-auto max-w-fit border border-white/20 shadow-xl">
<a className="text-on-surface-variant px-6 py-2 flex items-center gap-2 hover:bg-surface-container-highest/40 transition-all" href="#">
<span className="material-symbols-outlined">terminal</span>
<span className="font-mono-ui text-mono-ui hidden sm:inline">Terminal</span>
</a>
<a className="bg-tertiary-container text-on-tertiary-container rounded-full px-6 py-2 flex items-center gap-2 Active: scale-95 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>folder_open</span>
<span className="font-mono-ui text-mono-ui hidden sm:inline">Sources</span>
</a>
<a className="text-on-surface-variant px-6 py-2 flex items-center gap-2 hover:bg-surface-container-highest/40 transition-all" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-mono-ui text-mono-ui hidden sm:inline">Context</span>
</a>
<a className="text-on-surface-variant px-6 py-2 flex items-center gap-2 hover:bg-surface-container-highest/40 transition-all" href="#">
<span className="material-symbols-outlined">filter_list</span>
<span className="font-mono-ui text-mono-ui hidden sm:inline">Filtering</span>
</a>
</nav>

    </div>
  );
}
