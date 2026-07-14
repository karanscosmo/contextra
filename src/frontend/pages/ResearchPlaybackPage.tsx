import React, { useEffect } from 'react';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function ResearchPlaybackPage() {
  useEffect(() => {
    document.title = 'Contextra - Research Playback';
  }, []);

  useStyleBlock(`.glass-edge {
    border: 0.5px solid rgba(255, 255, 255, 0.2)
    }
.grain-overlay {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuATYrT9l7xuyREmCk4D7iYfGGapglfXwWKp4EW8deDt1-4W0tgSBz11defPhwc-J4BJSvsxPORbedH0Z1W3AC0HW8TVLGsfHTykIUDgGg_OYkNRpk1W0gVZbiwkEL--mPoPXa90qGa-SEph53txN2D_aYBYRW-Gz2B7U_pKMDoZ8zcUEcgOKk6jPCj1uF2MxYvkyaGlJMkWNe4IYhFVH9Vxb-6urrGlaUQg7QdIPGOQfs2Y5ZWXwu9chK2iJkjfSENTOseSQ5odhQg);
    opacity: 0.03;
    pointer-events: none
    }
.node-glow {
    filter: blur(8px);
    background: #c8bffe;
    opacity: 0.4
    }`);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen overflow-x-hidden selection:bg-tertiary-fixed selection:text-on-tertiary-fixed w-full">
      
      
{/* TopAppBar */}
<header className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md tracking-tighter text-on-surface dark:text-on-surface-variant">Contextra</span>
</div>
<nav className="hidden md:flex gap-gutter-grid items-center">
<a className="text-on-surface-variant/60 font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Intelligence Canvas</a>
<a className="text-on-surface-variant/60 font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Knowledge Constellation</a>
<a className="text-primary font-bold font-label-caps text-label-caps transition-colors duration-300" href="#">Memory Timeline</a>
</nav>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-300" data-icon="flare">flare</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-300" data-icon="notifications_none">notifications_none</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-300" data-icon="account_circle">account_circle</span>
</div>
</header>
{/* SideNavBar (Suppressed for focused Playback mode, but logic exists for top-level navigation) */}
{/* Main Intelligence Canvas: Research Playback Mode */}
<main className="relative z-10 max-w-7xl mx-auto px-margin-page pt-24 pb-48">
{/* Hero Section */}
<section className="mb-32 text-center">
<span className="font-label-caps text-label-caps text-tertiary mb-4 block tracking-widest">RESEARCH PLAYBACK</span>
<h1 className="font-display-hero text-display-hero text-on-surface mb-8">The Evolution of <br/><span className="italic text-tertiary">Quantum Ethics</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70">
                A cinematic reconstruction of your synthesis journey from the first source upload to the final cognitive breakthrough.
            </p>
</section>
{/* The Timeline Canvas */}
<div className="relative">
{/* Vertical Timeline Line */}
<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[0.5px] bg-outline-variant/30 hidden md:block"></div>
{/* Timeline Entry 01: The Spark */}
<div className="relative flex flex-col md:flex-row items-center mb-48 gap-gutter-grid">
<div className="flex-1 text-right pr-12 hidden md:block">
<div className="font-mono-ui text-mono-ui text-tertiary mb-2">OCT 12, 09:42 AM</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Initial Seed</h3>
<p className="text-on-surface-variant/80 mt-2">You uploaded the first foundational paper on Non-Euclidean Ethics.</p>
</div>
<div className="relative z-20 w-4 h-4 rounded-full bg-tertiary ring-8 ring-tertiary-fixed/30 ring-offset-4 ring-offset-surface"></div>
<div className="flex-1 pl-12">
{/* Source DNA Card */}
<div className="relative bg-surface-container-low border border-outline-variant/30 p-6 rounded-xl shadow-sm overflow-hidden group hover:shadow-xl transition-shadow duration-500 max-w-md">
<div className="grain-overlay absolute inset-0"></div>
<div className="flex gap-4 items-start mb-4">
<span className="material-symbols-outlined text-tertiary" data-icon="description">description</span>
<div>
<span className="font-mono-ui text-[10px] text-on-surface-variant uppercase tracking-tighter">SOURCE ID: #0921-A</span>
<h4 className="font-label-caps text-label-caps text-on-surface mt-1 uppercase">Ethics in Dimensional Planes</h4>
</div>
</div>
<img className="w-full h-32 object-cover rounded-lg mb-4 filter grayscale hover:grayscale-0 transition-all duration-700" data-alt="A clean, minimalist Scandinavian-inspired digital art piece showing layered translucent paper textures in a warm ivory and soft lavender palette. The lighting is soft and ambient, creating a serene and intellectual mood suitable for high-end research software." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzKke0MGihhp_p7uSO1SeG20fsFlsrgVCi9zNtwQvjWGesHDNl3VmkUx_UJkK5ljZV9GaMoKTOHIGudG-usDNcQZt8o5yP2crmrLrPTbUmYzme-v1X6ow3ZrgWGOVL_6HXBKzUHdUuMbQ8RB3Y9OD4dHeDf2KfA9dSh_vuYf7k6sZZR4VWtGOvXKizHS2Mxuqwvof9Dj4lkef_Dx7CiI4qg4w7Ofa5VqcXAMkLiQUBNtpcq7CRqfebO6xzKNnYtg5RL4mTjMzSZMY"/>
<div className="flex justify-between items-center">
<span className="font-mono-ui text-mono-ui text-tertiary">32 Semantic Tags</span>
<span className="material-symbols-outlined text-on-surface-variant/40" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
</div>
{/* Timeline Entry 02: Synthesis Pulse */}
<div className="relative flex flex-col md:flex-row items-center mb-48 gap-gutter-grid">
<div className="flex-1 order-2 md:order-1 pr-12">
{/* Knowledge Constellation Fragment */}
<div className="relative h-64 w-full bg-surface-container-highest/20 rounded-3xl border border-outline-variant/20 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 overflow-hidden">
{/* Abstract Light Threads */}
<div className="absolute top-1/4 left-1/4 w-32 h-px bg-tertiary/20 -rotate-45"></div>
<div className="absolute top-1/2 left-1/3 w-48 h-px bg-tertiary/40 rotate-12"></div>
<div className="absolute bottom-1/4 right-1/4 w-24 h-px bg-tertiary/20 rotate-45"></div>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-tertiary" data-icon="hub">hub</span>
</div>
<div className="node-glow absolute w-16 h-16 rounded-full -z-10"></div>
<span className="font-label-caps text-label-caps text-tertiary tracking-widest">RELATIONSHIP DISCOVERED</span>
</div>
</div>
</div>
<div className="relative z-20 w-4 h-4 rounded-full bg-tertiary ring-8 ring-tertiary-fixed/30 ring-offset-4 ring-offset-surface"></div>
<div className="flex-1 order-1 md:order-2 pl-12 mb-8 md:mb-0">
<div className="font-mono-ui text-mono-ui text-tertiary mb-2">OCT 14, 02:15 PM</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Semantic Bridge</h3>
<p className="text-on-surface-variant/80 mt-2">The AI linked "Quantum Superposition" to "Moral Ambiguity," forming a critical vector in your synthesis.</p>
</div>
</div>
{/* Timeline Entry 03: The Deep Insight */}
<div className="relative flex flex-col md:flex-row items-center mb-48 gap-gutter-grid">
<div className="flex-1 text-right pr-12 hidden md:block">
<div className="font-mono-ui text-mono-ui text-tertiary mb-2">OCT 15, 11:30 PM</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Synthesis Climax</h3>
<p className="text-on-surface-variant/80 mt-2">Final context lens applied. The hypothesis on Recursive Accountability is born.</p>
</div>
<div className="relative z-20 w-4 h-4 rounded-full bg-tertiary ring-8 ring-tertiary-fixed/30 ring-offset-4 ring-offset-surface"></div>
<div className="flex-1 pl-12">
<div className="relative bg-surface-bright border-2 border-tertiary/10 p-10 rounded-[2rem] shadow-2xl glass-edge">
<span className="material-symbols-outlined text-tertiary text-4xl mb-6" data-icon="auto_awesome">auto_awesome</span>
<blockquote className="font-headline-md text-headline-md text-on-surface italic leading-snug mb-6">
                            "Accountability is not a fixed state but a wave function that collapses only when observed by historical consensus."
                        </blockquote>
<div className="flex items-center gap-3">
<div className="w-1 h-8 bg-tertiary rounded-full"></div>
<span className="font-mono-ui text-mono-ui text-on-surface-variant">Core Synthesis Insight #4</span>
</div>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar: Playback Controls */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 dark:bg-surface-dim/40 backdrop-blur-3xl rounded-full px-8 py-4 w-auto min-w-[420px] border border-white/20 shadow-2xl shadow-secondary/10">
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full group">
<span className="material-symbols-outlined" data-icon="skip_previous">skip_previous</span>
<span className="font-mono-ui text-mono-ui">Prev</span>
</button>
<button className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-8 py-2 scale-105 active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="play_arrow" data-weight="fill">play_arrow</span>
<span className="font-mono-ui text-mono-ui">Playback</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full">
<span className="material-symbols-outlined" data-icon="skip_next">skip_next</span>
<span className="font-mono-ui text-mono-ui">Next</span>
</button>
<div className="h-6 w-px bg-outline-variant/30 mx-2"></div>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1 rounded-full">
<span className="material-symbols-outlined" data-icon="speed">speed</span>
<span className="font-mono-ui text-mono-ui">1.5x</span>
</button>
</nav>
{/* Footer */}
<footer className="bg-surface dark:bg-background border-t border-surface-variant w-full py-12 px-margin-page relative z-10">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div className="mb-8 md:mb-0">
<span className="font-headline-lg text-headline-lg text-on-surface opacity-30">Contextra</span>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 opacity-80">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-gutter-grid">
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">Philosophy</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">Security</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">API</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>
{/* Background Decoration */}
<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-tertiary/5 blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]"></div>
</div>

    </div>
  );
}
