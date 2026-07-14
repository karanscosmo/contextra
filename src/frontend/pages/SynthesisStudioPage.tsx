import React, { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function SynthesisStudioPage() {
  useEffect(() => {
    document.title = 'Contextra - Synthesis Studio';
  }, []);

  useStyleBlock(`.glass-sheet {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(229, 226, 218, 0.6)
    }
.grainy-bg {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuAOD_LR11W9VScgcTAUCwdy_7Bon6xeqqmes9SZ8TVh1uTYIMGjEd8Y3QiUknTBgsvB9r3Bv1GYmzrzlsCgue7tYNJIOnFxcJ6aCk887joYttuMZyaXrEoGG4Z4-zq96_dnLJskUS01lpkveSGUvfZUozXDhr1nstuZofaE3CvjiIxDDYZIawuzLjdNfU1xFB6NnF--u2VXXnBhYvFQcVyq6-hut56skmDn8D4GupMZjNE5WmqNUeOqt3jNVLphCcCEl8AZB5CDCLg);
    opacity: 0.03;
    pointer-events: none;
    position: absolute;
    inset: 0;
    z-index: 1
    }
.connection-line {
    background: linear-gradient(90deg, transparent, rgba(94, 87, 143, 0.2), transparent);
    height: 1px;
    width: 100%
    }
.active-tab-indicator {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translatey(-50%);
    width: 2px;
    height: 24px;
    background-color: #5e5f5c
    }`);

  return (
    <div className="bg-white/60 backdrop-blur-sm font-body-md text-on-surface selection:bg-secondary-container w-full min-h-screen">
      
      
      <Header />
      <Sidebar activePage="synthesis" />
{/* Main Canvas Content */}
<main className="md:pl-64 min-h-screen relative overflow-hidden">
<div className="grainy-bg"></div>
{/* Studio Header */}
<header className="px-canvas-safe-area pt-12 pb-6 max-w-7xl mx-auto">
<div className="flex justify-between items-end">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Synthesis Studio</h1>
<p className="font-body-md text-body-md text-on-surface-variant/80 max-w-xl mt-2">
                        Cross-document analysis: Comparing <span className="font-mono-ui italic">Urban_Dynamics_v4.pdf</span> with <span className="font-mono-ui italic">Socioeconomic_Trends_2024.docx</span>.
                    </p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-caps text-label-caps">Processing Synthesis</span>
</div>
</div>
</div>
</header>
{/* The Studio Grid (Spatial Layout) */}
<div className="px-canvas-safe-area max-w-[1600px] mx-auto grid grid-cols-12 gap-gutter-grid h-[calc(100vh-280px)] mt-4">
{/* Source A: PDF */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
<div className="flex items-center justify-between px-2">
<span className="font-mono-ui text-mono-ui text-on-surface-variant">SOURCE A: URBAN DYNAMICS</span>
<span className="material-symbols-outlined text-sm" data-icon="open_in_full">open_in_full</span>
</div>
<div className="flex-grow glass-sheet rounded-xl p-8 overflow-y-auto relative shadow-sm hover:shadow-md transition-shadow">
<div className="absolute top-0 left-0 w-1 h-full bg-surface-container-highest"></div>
<div className="space-y-6">
<div className="relative">
<span className="font-label-caps text-[10px] text-primary/40 block mb-1">SECTION 1.2</span>
<p className="text-on-surface leading-relaxed">The shift towards micro-mobility in urban centers has resulted in a 14% decrease in private vehicle dependency within the first fiscal quarter. This trend is most prevalent in mid-sized metropolitan areas with high student populations.</p>
<div className="absolute -right-4 top-1/2 w-4 h-[1px] bg-secondary/30"></div>
</div>
<div className="p-4 bg-primary-container/50 border border-outline-variant/30 rounded-lg">
<p className="text-on-surface italic text-sm">"Infrastructural debt remains the primary bottleneck for sustained transit growth."</p>
</div>
<div className="relative">
<span className="font-label-caps text-[10px] text-primary/40 block mb-1">SECTION 2.4</span>
<p className="text-on-surface leading-relaxed">Recent data suggests that zoning deregulation is the catalyst for commercial-to-residential conversions, specifically in derelict industrial districts.</p>
<div className="absolute -right-4 top-1/2 w-4 h-[1px] bg-tertiary/30"></div>
</div>
</div>
</div>
</div>
{/* Central Synthesis Column */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
<div className="flex items-center justify-center px-2">
<span className="font-label-caps text-label-caps text-primary">INTELLIGENCE SYNTHESIS</span>
</div>
<div className="flex-grow flex flex-col gap-4">
{/* Contradictions (Muted Plum) */}
<div className="p-6 rounded-xl border border-error/10 bg-[#f9f5f6] flex flex-col gap-3 relative overflow-hidden">
<div className="flex items-center gap-2 text-[#7d5260]">
<span className="material-symbols-outlined text-sm" data-icon="error_outline">error_outline</span>
<span className="font-label-caps text-label-caps">Contradiction Detected</span>
</div>
<p className="text-sm font-body-md text-on-surface-variant">Source A claims a 14% decrease in vehicle dependency, while Source B reports a steady rise in congestion indices for the same period.</p>
<div className="h-1 w-full bg-[#7d5260]/10 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-[#7d5260]"></div>
</div>
<div className="absolute -left-1 top-0 bottom-0 w-1 bg-[#7d5260]/40"></div>
</div>
{/* Similarities (Soft Indigo) */}
<div className="p-6 rounded-xl border border-secondary/10 bg-secondary-container/20 flex flex-col gap-3 relative overflow-hidden">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-sm" data-icon="join_inner">join_inner</span>
<span className="font-label-caps text-label-caps">Alignment: Zoning Impact</span>
</div>
<p className="text-sm font-body-md text-on-surface-variant">Both documents identify zoning deregulation as the primary driver for adaptive reuse of industrial spaces, corroborating the 2024 urban renewal hypothesis.</p>
<div className="absolute -left-1 top-0 bottom-0 w-1 bg-secondary/40"></div>
</div>
{/* Emergent Insights (Dusty Lavender) */}
<div className="p-6 rounded-xl border border-tertiary/10 bg-tertiary-container/30 flex flex-grow flex-col gap-3 relative overflow-hidden">
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
<span className="font-label-caps text-label-caps">Emergent Insight</span>
</div>
<p className="text-sm font-body-md text-on-surface-variant">The intersection of micro-mobility (Source A) and digital nomad migration (Source B) suggests a new 'Elastic City' model where transit is purely on-demand and hub-less.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white/60 border border-tertiary/20 rounded text-[10px] font-mono-ui text-tertiary">#Urban_Elasticity</span>
<span className="px-2 py-1 bg-white/60 border border-tertiary/20 rounded text-[10px] font-mono-ui text-tertiary">#Predictive_Planning</span>
</div>
<div className="absolute -left-1 top-0 bottom-0 w-1 bg-tertiary/40"></div>
</div>
</div>
</div>
{/* Source B: Research Paper */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
<div className="flex items-center justify-between px-2">
<span className="font-mono-ui text-mono-ui text-on-surface-variant">SOURCE B: SOCIOECONOMIC TRENDS</span>
<span className="material-symbols-outlined text-sm" data-icon="open_in_full">open_in_full</span>
</div>
<div className="flex-grow glass-sheet rounded-xl p-8 overflow-y-auto relative shadow-sm hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 w-1 h-full bg-surface-container-highest"></div>
<div className="space-y-6">
<div className="relative">
<div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-secondary/30"></div>
<span className="font-label-caps text-[10px] text-primary/40 block mb-1">PAGE 4, PARA 2</span>
<p className="text-on-surface leading-relaxed">Economic viability of 15-minute city clusters depends heavily on the legislative easing of high-density residential constraints previously labeled as industrial-only zones.</p>
</div>
<div className="relative">
<div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-error/30"></div>
<span className="font-label-caps text-[10px] text-primary/40 block mb-1">PAGE 7, DATA TABLE</span>
<div className="bg-surface-container rounded p-4 my-2 border border-outline-variant/20">
<p className="font-mono-ui text-[11px] text-on-surface-variant">Vehicle Congestion Index (Q1): +2.4% YoY</p>
<p className="font-mono-ui text-[11px] text-on-surface-variant">Transit Subsidy ROI: -0.8%</p>
</div>
</div>
<div className="relative">
<div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-tertiary/30"></div>
<span className="font-label-caps text-[10px] text-primary/40 block mb-1">CONCLUSION</span>
<p className="text-on-surface leading-relaxed">The future of urban dwelling is inextricably linked to the 'Digital Nomad' exodus from Tier 1 cities to decentralized coworking hubs in the perimeter.</p>
</div>
</div>
</div>
</div>
</div>
{/* Floating Action Button (Only Home/Studio relevance) */}
<div className="fixed bottom-32 right-12 z-40">
<button className="w-14 h-14 bg-on-surface text-surface rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
</div>
</main>
{/* Bottom Navigation Dock */}
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl rounded-full px-8 py-4 w-auto min-w-[420px] border border-white/20 shadow-2xl">
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full cursor-pointer">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
<span className="font-mono-ui text-mono-ui">Command</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full cursor-pointer">
<span className="material-symbols-outlined" data-icon="inventory">inventory</span>
<span className="font-mono-ui text-mono-ui">Sources</span>
</div>
<div className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1 cursor-pointer">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-mono-ui text-mono-ui">Context</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full cursor-pointer">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
<span className="font-mono-ui text-mono-ui">Filter</span>
</div>
</div>
{/* Footer */}
<footer className="bg-surface w-full py-12 px-margin-page border-t border-surface-variant mt-24">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="font-headline-lg text-headline-lg text-on-surface">Contextra</span>
<p className="font-body-md text-body-md text-on-surface-variant opacity-80 mt-2">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-12">
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps text-primary">Platform</span>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Philosophy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Security</a>
</div>
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps text-primary">Resources</span>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">API</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Privacy</a>
</div>
</div>
</div>
</footer>

    </div>
  );
}
