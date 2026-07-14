import React, { useEffect } from 'react';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function SettingsPage() {
  useEffect(() => {
    document.title = 'Contextra - Settings';
  }, []);

  useStyleBlock(`.glass-panel {
    background: rgba(252, 249, 241, 0.4);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px)
    }
.grain-overlay {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuAepqQJQV05wZopPO-EEGgpBEX8x-eTM8Cyy2RQ_058e0FQ389OFvpWlXqTPZ1C2BxTddG1JOiOsfBG5R8lxaMw2i0lu8JN6uBCfR3rYGvVWJA_IZUFlJNSnGtLtq_WF0QwnOJpfbFUsYcneh__Uyva_TcCtQwG_YHqgwr0iXbx1oXe0hmosDMnxwDDgIfcc8JIfc-0Hx-DI-zU46pB1NrO087XfDfxP3khjMC0l7YCeXqzmWY_Mqljq7QWeLUnVAqa7sHfVVrMDE4);
    opacity: 0.03;
    pointer-events: none
    }
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #5e578f;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid #fff
    }`);

  return (
    <div className="bg-white/60 backdrop-blur-sm text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container overflow-hidden h-screen flex w-full min-h-screen">
      
      
{/* Side Navigation Bar */}
<aside className="bg-surface-container-low dark:bg-surface-container-lowest h-screen w-64 fixed left-0 top-0 z-30 flex flex-col h-full py-margin-page px-6 border-r border-outline-variant/30 dark:border-outline/20">
<div className="mb-12">
<div className="flex items-center gap-3 mb-1">
<span className="font-headline-md text-headline-md text-on-surface">Contextra</span>
</div>
<p className="font-mono-ui text-mono-ui opacity-50 uppercase tracking-widest text-[10px]">Vellum Workspace</p>
</div>
<nav className="flex-grow space-y-2">
<button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
<span className="material-symbols-outlined" data-icon="brush">brush</span>
        Workspace Personalization
      </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-primary border-r-2 border-primary font-bold font-label-caps text-label-caps bg-surface-variant/50 transition-all rounded-lg">
<span className="material-symbols-outlined" data-icon="tune">tune</span>
        AI Behavior Tuning
      </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
<span className="material-symbols-outlined" data-icon="memory">memory</span>
        Memory Settings
      </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
<span className="material-symbols-outlined" data-icon="hub">hub</span>
        Integrations
      </button>
</nav>
<div className="mt-auto">
<button className="w-full bg-surface-container-highest px-4 py-3 text-on-surface font-label-caps text-label-caps rounded-lg hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
        New Synthesis
      </button>
</div>
</aside>
{/* Main Intelligence Canvas */}
<main className="flex-grow ml-64 overflow-y-auto relative">
<div className="grain-overlay fixed inset-0"></div>
{/* Top Bar */}
<header className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl text-primary dark:text-primary-fixed-dim docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full">
<div className="font-headline-md text-headline-md tracking-tighter text-on-surface dark:text-on-surface-variant">Settings</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-300" data-icon="flare">flare</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-300" data-icon="notifications_none">notifications_none</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User Profile" data-alt="A professional portrait of a tech executive in a minimalist studio setting. The lighting is soft and directional, casting subtle shadows that highlight the contours of the face against a warm neutral background. The aesthetic is clean and high-end, matching the sophisticated glassmorphism and vellum texture of a premium digital workspace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ368hVzEplb1VAvPChbAlpPD9GFAbPC7vqQq84CDDfXbwDZZ_HhQxsalE0m4VHrcxPf72450_sWooUzZmo4q-5wYa9C3YGoDrsLWRQpRB_qNtBD5GzcAokCoEZiT0mlV8FcmX_5SniYfhxWvYaZDEm3XZci7o83MYZBtzGeNx1igb9-brRFGK1oVZClfDwC-obdEIBCgitvCrpKPkTd8YmGno8czbWShffHQzpC4Wxxn6M_Aj3_SnJME3nfT-gj7UWIIS0fvbv1o"/>
</div>
</div>
</header>
<div className="max-w-4xl mx-auto px-margin-page py-16 space-y-12 relative z-10">
<section className="space-y-4">
<h1 className="font-headline-lg text-headline-lg text-on-surface">AI Behavior Tuning</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-2xl">
          Calibrate the core cognitive engines of Contextra. Adjust how the intelligence processes information, interprets intent, and surfaces creative insights.
        </p>
</section>
{/* Bento-style Controls Grid */}
<div className="grid grid-cols-12 gap-gutter-grid">
{/* Creativity vs Precision Card */}
<div className="col-span-12 lg:col-span-8 p-8 rounded-3xl border border-surface-variant glass-panel shadow-sm relative overflow-hidden group">
<div className="relative z-10 space-y-8">
<div className="flex justify-between items-start">
<div className="space-y-1">
<span className="font-label-caps text-label-caps text-tertiary">Cognitive Mode</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Creativity vs. Precision</h3>
</div>
<span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 transition-opacity" data-icon="psychology">psychology</span>
</div>
<div className="space-y-10 py-4">
<div className="relative pt-6">
<div className="flex justify-between text-mono-ui font-mono-ui opacity-50 mb-4 px-1">
<span>STRICT PRECISION</span>
<span>FLUID CREATIVITY</span>
</div>
<input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-tertiary" max="100" min="0" type="range" value="65"/>
<div className="mt-4 text-on-surface-variant/70 font-body-md italic leading-relaxed">
                  "Contextra will prioritize finding obscure semantic connections and generating novel synthesis models while maintaining a baseline of factual grounding."
                </div>
</div>
</div>
</div>
{/* Background Abstract Element */}
<div className="absolute -right-16 -bottom-16 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl"></div>
</div>
{/* Synthesis Depth Card */}
<div className="col-span-12 lg:col-span-4 p-8 rounded-3xl border border-surface-variant bg-surface-container-low/50 flex flex-col justify-between">
<div className="space-y-4">
<span className="material-symbols-outlined text-primary" data-icon="layers">layers</span>
<h3 className="font-label-caps text-label-caps text-on-surface">Synthesis Depth</h3>
<p className="font-body-md text-on-surface-variant/80 leading-snug">Determine the number of iterative passes for deep research.</p>
</div>
<div className="mt-8 flex items-end justify-between">
<div className="space-y-1">
<span className="font-mono-ui text-[24px] text-tertiary">4</span>
<span className="font-mono-ui text-mono-ui block opacity-40">PASSES</span>
</div>
<div className="flex gap-1 h-12 items-end">
<div className="w-1.5 h-4 bg-tertiary-fixed-dim rounded-full"></div>
<div className="w-1.5 h-6 bg-tertiary-fixed-dim rounded-full"></div>
<div className="w-1.5 h-10 bg-tertiary-fixed-dim rounded-full"></div>
<div className="w-1.5 h-8 bg-tertiary rounded-full"></div>
<div className="w-1.5 h-4 bg-surface-container-highest rounded-full"></div>
</div>
</div>
</div>
{/* Semantic Meter & Detailed Options */}
<div className="col-span-12 lg:col-span-5 p-8 rounded-3xl border border-surface-variant glass-panel space-y-6">
<h3 className="font-label-caps text-label-caps text-on-surface">Relevance Threshold</h3>
<div className="flex items-center gap-6 h-48">
<div className="w-4 h-full bg-surface-container-highest rounded-full relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-[72%] bg-gradient-to-t from-secondary to-tertiary-fixed-dim rounded-full"></div>
</div>
<div className="flex-grow space-y-4">
<div className="pb-2 border-b border-surface-variant">
<span className="font-mono-ui text-mono-ui opacity-40 block">CURRENT THRESHOLD</span>
<span className="font-headline-md text-headline-md text-on-surface">0.72 SR</span>
</div>
<p className="font-body-md text-on-surface-variant/70 text-sm">Insights below this relevance score will be suppressed from the primary canvas to minimize cognitive load.</p>
</div>
</div>
</div>
{/* Logic Toggle Bento */}
<div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-gutter-grid">
<div className="p-8 rounded-3xl border border-surface-variant bg-surface-container-low/30 space-y-4">
<div className="flex justify-between items-center">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="visibility_lock">visibility_lock</span>
<div className="w-10 h-5 bg-tertiary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<h4 className="font-label-caps text-label-caps">Bias Shield</h4>
<p className="font-body-md text-sm text-on-surface-variant/70">Actively counter-verify hallucination vectors.</p>
</div>
<div className="p-8 rounded-3xl border border-surface-variant bg-surface-container-low/30 space-y-4">
<div className="flex justify-between items-center">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="temp_preferences_custom">temp_preferences_custom</span>
<div className="w-10 h-5 bg-surface-container-highest rounded-full relative">
<div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<h4 className="font-label-caps text-label-caps">Analytic Sarcasm</h4>
<p className="font-body-md text-sm text-on-surface-variant/70">Allow the AI to use provocative reasoning styles.</p>
</div>
<div className="col-span-2 p-8 rounded-3xl border border-surface-variant bg-tertiary-container/50 flex items-center justify-between">
<div className="space-y-1">
<h4 className="font-headline-md text-headline-md text-on-tertiary-container">Knowledge Constellation Map</h4>
<p className="font-body-md text-on-tertiary-fixed-variant">Visualize vector connections during active reasoning.</p>
</div>
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm cursor-pointer hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-tertiary" data-icon="hub">hub</span>
</div>
</div>
</div>
</div>
{/* Footer Action */}
<div className="flex justify-end gap-gutter-grid pt-8">
<button className="px-8 py-3 text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors">Reset to Default</button>
<button className="px-10 py-3 bg-secondary text-white rounded-full font-label-caps text-label-caps shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all">Apply Parameters</button>
</div>
</div>
{/* Footer */}
<footer className="bg-surface dark:bg-background w-full py-12 px-margin-page border-t border-surface-variant">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div className="space-y-2">
<div className="font-headline-lg text-headline-lg text-on-surface">Contextra</div>
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-8 mt-8 md:mt-0">
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Philosophy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Security</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">API</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Privacy</a>
</div>
</div>
</footer>
</main>
{/* Bottom Navigation (Floating) */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-secondary/10 rounded-full px-8 py-4 w-auto min-w-[420px]">
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
<span className="font-mono-ui text-mono-ui">Command</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full">
<span className="material-symbols-outlined" data-icon="inventory">inventory</span>
<span className="font-mono-ui text-mono-ui">Sources</span>
</button>
<button className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-mono-ui text-mono-ui">Context</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
<span className="font-mono-ui text-mono-ui">Filter</span>
</button>
</nav>

    </div>
  );
}
