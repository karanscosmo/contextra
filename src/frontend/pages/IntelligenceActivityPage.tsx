import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function IntelligenceActivityPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.glass-edge {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2)
    }
.grain-overlay {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuB_igngjuViCFnoNPo3rre10htbOhUyH_0fomMS13ItPO68PNSs_IaI4qjLrIQIIyvkRRA6HDzIq2RS_fc1AQgJNzsnyGKrSbLNi9nykSoEy4LRr_LSoDfzGUFlcQqxCUQBQfzNLnb5Cc3TiYUkDwFldw7rnqfFsAlkTHPfVe5YdNVXMFmp1lRbSnGIDmE05NOaKTS7ffMzTJ99EASmKqOxHXmdHJ_N2TgKIXsKW7NKbWjwaUZMqakG-gLTyIRwNAQajK0DxCyautw);
    opacity: 0.03;
    pointer-events: none
    }
.text-glow {
    text-shadow: 0 0 15px rgba(94, 87, 143, 0.2)
    }` }} />
      
      <Header />
      <Sidebar activePage="timeline" />
{/* Main Content Area */}
<main className="md:pl-64 min-h-screen">
{/* SECTION 1: Active Thinking Process View */}
<div className="max-w-7xl mx-auto px-margin-page py-20">
<div className="mb-16 text-center max-w-2xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container rounded-full text-on-tertiary-container font-mono-ui text-mono-ui mb-6">
<span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
                    ACTIVE SYNTHESIS IN PROGRESS
                </div>
<h2 className="font-display-hero text-[48px] leading-tight text-on-background mb-4">Cultivating Insight</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant opacity-80">The system is distilling your primary research into a semantic constellation of truth.</p>
</div>
{/* Bento Grid of Processing States */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-grid items-start">
{/* State 1: Vectorizing */}
<div className="group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 hover:border-tertiary/30 transition-all duration-500 min-h-[420px] flex flex-col">
<div className="absolute inset-0 grain-overlay"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center mb-6 shadow-sm">
<span className="material-symbols-outlined text-tertiary text-[28px]">data_array</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Vectorizing Intelligence</h3>
<p className="font-mono-ui text-mono-ui text-on-surface-variant/60 mb-8 uppercase tracking-widest">Embedding Neural Weights</p>
<div className="space-y-4 opacity-60">
<div className="h-[1px] w-full bg-gradient-to-r from-tertiary/40 to-transparent"></div>
<div className="h-[1px] w-3/4 bg-gradient-to-r from-tertiary/20 to-transparent"></div>
<div className="h-[1px] w-1/2 bg-gradient-to-r from-tertiary/40 to-transparent"></div>
</div>
</div>
<div className="mt-auto relative z-10 flex flex-col gap-2">
<span className="font-mono-ui text-[11px] text-tertiary/70">892 DIMENSIONAL AXES CALCULATED</span>
<div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-[72%] rounded-full"></div>
</div>
</div>
</div>
{/* State 2: Mapping (Prominent Center) */}
<div className="group relative overflow-hidden bg-surface-container-highest rounded-3xl p-8 border border-outline-variant/30 transition-all duration-500 min-h-[500px] md:-mt-8 flex flex-col shadow-2xl shadow-tertiary/5">
<div className="absolute inset-0 grain-overlay"></div>
<div className="relative z-10 text-center">
<div className="w-20 h-20 mx-auto rounded-full bg-white/40 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 glass-edge">
<span className="material-symbols-outlined text-tertiary text-[40px]" data-weight="fill">hub</span>
</div>
<h3 className="font-headline-lg text-headline-lg mb-4">Mapping Relationships</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto mb-10">Constructing a high-fidelity semantic graph across disparate source nodes.</p>
</div>
<div className="relative flex-grow flex items-center justify-center">
{/* Simulated Constellation Visualization */}
<div className="relative w-48 h-48 border border-outline-variant/30 rounded-full flex items-center justify-center">
<div className="absolute w-2 h-2 bg-tertiary rounded-full top-0 left-1/2 -translate-x-1/2"></div>
<div className="absolute w-2 h-2 bg-tertiary/40 rounded-full bottom-4 right-4"></div>
<div className="absolute w-2 h-2 bg-tertiary/60 rounded-full bottom-4 left-4"></div>
<div className="absolute inset-4 border border-dashed border-outline-variant/20 rounded-full"></div>
</div>
</div>
<div className="mt-auto relative z-10 flex flex-col gap-4 text-center">
<span className="font-mono-ui text-mono-ui text-tertiary tracking-[0.2em] font-bold">STITCHING...</span>
</div>
</div>
{/* State 3: Detecting Contradictions */}
<div className="group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 hover:border-error/30 transition-all duration-500 min-h-[420px] flex flex-col">
<div className="absolute inset-0 grain-overlay"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center mb-6 shadow-sm">
<span className="material-symbols-outlined text-error text-[28px]">troubleshoot</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Detecting Contradictions</h3>
<p className="font-mono-ui text-mono-ui text-on-surface-variant/60 mb-8 uppercase tracking-widest">Truth Convergence Protocol</p>
</div>
<div className="relative flex-grow flex items-center justify-center opacity-40">
<div className="w-full h-32 bg-gradient-to-b from-error/10 via-transparent to-error/10 flex items-center justify-center">
<span className="font-mono-ui text-mono-ui text-error/40">ANALYZING LOGICAL VECTORS</span>
</div>
</div>
<div className="mt-auto relative z-10 flex flex-col gap-2">
<span className="font-mono-ui text-[11px] text-error/70">4 POTENTIAL ANOMALIES IDENTIFIED</span>
<div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error w-[40%] rounded-full opacity-60"></div>
</div>
</div>
</div>
</div>
</div>
<div className="h-32"></div>
{/* SECTION 2: Empty State - No Sources Found */}
<div className="max-w-7xl mx-auto px-margin-page pb-40">
<div className="relative w-full h-[600px] bg-white/40 border border-outline-variant/20 rounded-[48px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 grain-overlay"></div>
{/* Ambient Visual Background */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[800px] h-[800px] bg-gradient-to-br from-tertiary-fixed-dim/20 to-transparent rounded-full blur-[120px]"></div>
<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary-fixed-dim/30 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 text-center max-w-lg px-6">
<div className="mb-8 opacity-40">
<span className="material-symbols-outlined text-[80px] text-outline/30 font-light">auto_stories</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-background mb-4">A Blank Vellum Awaits</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-12 leading-relaxed">Your Intelligence Canvas is currently quiet. Begin your synthesis by introducing the foundational texts, data, or documents that will define your discovery.</p>
<div className="flex flex-col items-center gap-4">
<button className="px-12 py-5 bg-surface text-on-background border border-outline-variant/50 rounded-full font-label-caps text-label-caps tracking-widest hover:bg-white hover:shadow-2xl hover:shadow-tertiary/10 hover:-translate-y-1 transition-all duration-300 glass-edge flex items-center gap-3">
<span className="material-symbols-outlined">upload_file</span>
                            UPLOAD PRIMARY SOURCES
                        </button>
<p className="font-mono-ui text-[10px] text-on-surface-variant/40 tracking-[0.3em]">PDF, EPUB, TXT, OR NOTION</p>
</div>
</div>
</div>
</div>
{/* Semantic Relevance Meter (Sidebar context element) */}
<aside className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
<span className="font-label-caps text-[10px] text-on-surface-variant/40 rotate-90 mb-8 tracking-widest uppercase">Semantic Density</span>
<div className="w-1.5 h-64 bg-surface-container-high rounded-full overflow-hidden flex flex-col justify-end p-0.5">
<div className="w-full bg-gradient-to-t from-tertiary to-secondary-container rounded-full" style={{ "height": "65%" }}></div>
</div>
<span className="material-symbols-outlined text-tertiary text-sm mt-4">fingerprint</span>
</aside>
</main>
{/* BottomNavBar */}
<footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-secondary/10 rounded-full px-8 py-4 w-auto min-w-[420px] font-mono-ui text-mono-ui">
<div className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1 scale-105 duration-200">
<span className="material-symbols-outlined" data-weight="fill">terminal</span>
<span className="mt-1">Command</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined">inventory</span>
<span className="mt-1">Sources</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined">visibility</span>
<span className="mt-1">Context</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined">filter_list</span>
<span className="mt-1">Filter</span>
</div>
</footer>
{/* Global Footer */}
<section className="bg-surface w-full py-12 px-margin-page border-t border-surface-variant mt-20 md:pl-[320px]">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto opacity-80 hover:opacity-100 transition-opacity">
<div className="mb-8 md:mb-0">
<div className="font-headline-lg text-headline-lg text-on-surface mb-2">Contextra</div>
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-8 font-body-md text-body-md">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Philosophy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">API</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
</div>
</div>
</section>

    </div>
  );
}
