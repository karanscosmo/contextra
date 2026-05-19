import React from 'react';

export default function IngestionHubPage() {
  return (
    <div className="bg-surface text-on-surface w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `body {
    background-color: #fcf9f1;
    font-family: "Plus Jakarta Sans", sans-serif;
    -webkit-font-smoothing: antialiased
    }
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24
    }
.glass-sheet {
    background: rgba(252, 249, 241, 0.4);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(229, 226, 218, 0.6)
    }
.paper-texture {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuAW0SyEpPMlSwqaOdEN4-28REWAQtO0V9ns50BbTJdObyMIoeEvrpudiWwnRp6cKfUN7NHNmA3sk5gOWfCbvzhJOZ5v9XGllmRiqpznoOUAUvsH1Mll3FL5ZnlKkxc6GhTdXez-TfYH68rVObO6PjHQZoKOCD7LXbW2kRSQO_OtUDYJk3fQwSpHLrodCv9YcxSMyvhvGsx8V-ysQXg3wB_C5WXYuAfRItHuSdAmbyFaKbq5V3IcNrIsb5aEsh3zQxLOpyzP7ya26Vc);
    background-repeat: repeat
    }
.semantic-progress-bg {
    background: #e5e2da
    }
.semantic-progress-fill {
    background: linear-gradient(90deg, #e5deff 0%, #5e578f 100%)
    }` }} />
      
      
{/* Top Navigation Shell */}
<nav className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl flex justify-between items-center px-margin-page py-unit h-16 w-full docked full-width top-0 sticky z-40">
<div className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</div>
<div className="hidden md:flex gap-8 items-center">
<span className="text-on-surface-variant/60 font-label-caps text-label-caps hover:text-primary transition-colors duration-300 cursor-pointer">Intelligence Canvas</span>
<span className="text-on-surface-variant/60 font-label-caps text-label-caps hover:text-primary transition-colors duration-300 cursor-pointer">Knowledge Constellation</span>
<span className="text-primary font-bold font-label-caps text-label-caps cursor-pointer">Source Hub</span>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform">flare</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform">notifications_none</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform">account_circle</span>
</div>
</nav>
{/* Sidebar Shell (Hidden on Mobile) */}
<aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 z-30 bg-surface-container-low py-margin-page px-6 border-r border-outline-variant/30">
<div className="mb-12">
<h1 className="font-headline-md text-headline-md text-on-surface">Contextra</h1>
<p className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant/50">Vellum Workspace</p>
</div>
<div className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">space_dashboard</span>
<span className="font-label-caps text-label-caps">Intelligence Canvas</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">hub</span>
<span className="font-label-caps text-label-caps">Knowledge Constellation</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-primary border-r-2 border-primary font-bold bg-surface-variant/30 rounded-lg" href="#">
<span className="material-symbols-outlined">folder_open</span>
<span className="font-label-caps text-label-caps">Source Hub</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">layers</span>
<span className="font-label-caps text-label-caps">Synthesis Studio</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">history</span>
<span className="font-label-caps text-label-caps">Memory Timeline</span>
</a>
</div>
<button className="mt-auto bg-on-surface text-surface py-4 px-6 rounded-xl font-label-caps text-label-caps flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">add</span>
            New Synthesis
        </button>
</aside>
{/* Main Content Canvas */}
<main className="lg:pl-64 min-h-screen pt-8 pb-32">
<div className="max-w-7xl mx-auto px-margin-page">
{/* Header Section */}
<header className="mb-12">
<span className="font-mono-ui text-mono-ui text-secondary mb-2 block uppercase tracking-tighter">Environment 01 // Ingestion</span>
<h2 className="font-display-hero text-display-hero text-on-surface">Ingestion Hub</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant/70 max-w-2xl">Connect your intellectual streams. Contextra distills raw information into semantic DNA for high-order synthesis.</p>
</header>
{/* Drag & Drop Zone */}
<section className="mb-16">
<div className="relative w-full aspect-[21/9] rounded-[32px] border-2 border-dashed border-outline-variant/50 bg-surface-container-low flex flex-col items-center justify-center cursor-pointer group hover:border-primary transition-colors overflow-hidden">
<div className="absolute inset-0 paper-texture opacity-10 pointer-events-none"></div>
<div className="z-10 flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center shadow-xl shadow-secondary/5 mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-[40px] text-secondary">upload_file</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Drop knowledge here</h3>
<p className="font-body-md text-body-md text-on-surface-variant/60">PDF, Markdown, or Web Links</p>
</div>
{/* Decorative Background element */}
<div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-20 -mb-20"></div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-grid">
{/* Integration Grid (Level 2: Lens/Glassmorphism) */}
<div className="lg:col-span-1 glass-sheet rounded-3xl p-8 flex flex-col h-full border border-outline-variant/20">
<div className="flex items-center justify-between mb-8">
<h4 className="font-label-caps text-label-caps text-on-surface">Connections</h4>
<span className="material-symbols-outlined text-secondary">link</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-surface-container-highest rounded-2xl flex flex-col items-center justify-center hover:bg-secondary-container transition-colors cursor-pointer text-center group">
<img className="w-8 h-8 mb-3 opacity-80 group-hover:opacity-100" data-alt="Official Google Drive logo with its characteristic colorful triangle shape, rendered in a clean, isolated format for a professional software integration interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvhiHDtPflzw9ZPWaz_BEAYjUnJzSZp44KRJnplNA5DmgBQSxTnmHHFtgkgOA-xJ2CHtSUiTPM6CJXALCgQv9tgAo4N50XXAWjZB8z_E1xAJkSVO1rYagxwMO89IPz5KLisqJLfbi5thAMZlBUmqZl4gkeLR-aoGV3LZ9jsb0ty04r6KTwPXDnQERWae2GTQkk7UBZ4sNXmvZwUHMve0ZGwiFNMsBsDsRiA7riQA2NKoRzIQHUK5n3cPkU8STQ6NkGO2eE_9sYd2U"/>
<span className="font-mono-ui text-mono-ui text-on-surface-variant">Drive</span>
</div>
<div className="p-6 bg-surface-container-highest rounded-2xl flex flex-col items-center justify-center hover:bg-secondary-container transition-colors cursor-pointer text-center group">
<span className="material-symbols-outlined text-3xl mb-3 text-on-surface-variant">notes</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant">Notion</span>
</div>
<div className="p-6 bg-surface-container-highest rounded-2xl flex flex-col items-center justify-center hover:bg-secondary-container transition-colors cursor-pointer text-center group">
<span className="material-symbols-outlined text-3xl mb-3 text-on-surface-variant">forum</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant">Slack</span>
</div>
<div className="p-6 bg-surface-container-highest rounded-2xl flex flex-col items-center justify-center border border-dashed border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer text-center">
<span className="material-symbols-outlined text-3xl mb-3 text-outline">add_circle</span>
<span className="font-mono-ui text-mono-ui text-outline">Add New</span>
</div>
</div>
</div>
{/* Progress Cards (Level 1: Sheet/Paper DNA) */}
<div className="lg:col-span-2 space-y-4">
<h4 className="font-label-caps text-label-caps text-on-surface-variant/60 ml-2">Active Distillations</h4>
{/* PDF Parsing Card */}
<div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl paper-texture relative overflow-hidden group">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-error-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-error">picture_as_pdf</span>
</div>
<div>
<h5 className="font-body-md font-semibold text-on-surface">Anthropocene_Thesis_v4.pdf</h5>
<p className="font-mono-ui text-[11px] text-on-surface-variant/50">PDF Parsing &amp; Citation Mapping</p>
</div>
</div>
<span className="font-mono-ui text-mono-ui text-tertiary">84%</span>
</div>
<div className="w-full h-1.5 semantic-progress-bg rounded-full overflow-hidden">
<div className="h-full semantic-progress-fill w-[84%]"></div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-label-caps text-[10px] text-on-surface-variant/40 italic">Extracting semantic vectors...</span>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-secondary-fixed border-2 border-surface-container-lowest"></div>
<div className="w-6 h-6 rounded-full bg-tertiary-fixed border-2 border-surface-container-lowest"></div>
</div>
</div>
</div>
{/* YouTube Card */}
<div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl paper-texture relative overflow-hidden">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-secondary-container/30 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">play_circle</span>
</div>
<div>
<h5 className="font-body-md font-semibold text-on-surface">Neuro-Architecture: Design for Focus</h5>
<p className="font-mono-ui text-[11px] text-on-surface-variant/50">Transcript Extraction &amp; Summarization</p>
</div>
</div>
<span className="font-mono-ui text-mono-ui text-tertiary">42%</span>
</div>
<div className="w-full h-1.5 semantic-progress-bg rounded-full overflow-hidden">
<div className="h-full semantic-progress-fill w-[42%]"></div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-label-caps text-[10px] text-on-surface-variant/40 italic">Syncing timestamps with visual cues...</span>
</div>
</div>
{/* Website Scraping Card */}
<div className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl paper-texture relative overflow-hidden">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">language</span>
</div>
<div>
<h5 className="font-body-md font-semibold text-on-surface">https://plato.stanford.edu/entries/cognitive-science/</h5>
<p className="font-mono-ui text-[11px] text-on-surface-variant/50">Deep Scrape &amp; Reference Crawling</p>
</div>
</div>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/40">Queueing</span>
</div>
<div className="w-full h-1.5 semantic-progress-bg rounded-full overflow-hidden">
<div className="h-full bg-outline-variant w-0"></div>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="font-label-caps text-[10px] text-on-surface-variant/40 italic">Awaiting semantic slot...</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Bottom Floating Dock */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl rounded-full px-8 py-4 w-auto min-w-[420px] border border-white/20 shadow-2xl shadow-secondary/10">
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full group">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">terminal</span>
<span className="font-mono-ui text-mono-ui">Command</span>
</button>
<button className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1 scale-105 active:scale-95 duration-200">
<span className="material-symbols-outlined">inventory</span>
<span className="font-mono-ui text-mono-ui">Sources</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full group">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">visibility</span>
<span className="font-mono-ui text-mono-ui">Context</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full group">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">filter_list</span>
<span className="font-mono-ui text-mono-ui">Filter</span>
</button>
</nav>
{/* Footer */}
<footer className="w-full py-12 px-margin-page bg-surface border-t border-surface-variant mt-24">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div className="mb-8 md:mb-0">
<span className="font-headline-lg text-headline-lg text-on-surface">Contextra</span>
<p className="font-body-md text-body-md text-on-surface-variant/60 mt-2">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-8">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Philosophy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">API</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </div>
  );
}
