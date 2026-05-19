import React from 'react';

export default function GlobalCopilotCollaborationPage() {
  return (
    <div className="font-body-md text-body-md overflow-hidden relative w-screen h-screen w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Base styles enforcing the "Digital Tactility" theme */
        body {
            background-color: theme('colors.background');
            color: theme('colors.on-background');
        }
        
        /* Glassmorphism utilities */
        .glass-panel {
            background: rgba(252, 249, 241, 0.85); /* surface-bright with opacity */
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(197, 199, 194, 0.3); /* outline-variant */
        }
        
        .glass-command {
            background: rgba(247, 243, 235, 0.95); /* surface-container-low */
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
            box-shadow: 0 12px 48px rgba(94, 87, 143, 0.1); /* tertiary shadow for light emitting effect */
            border: 1px solid rgba(229, 226, 218, 0.6); /* surface-variant */
        }

        /* Material Icon fill utility */
        .icon-fill {
            font-variation-settings: 'FILL' 1;
        }
    ` }} />
      
      
{/* Background Environment (Synthesis Studio Screen 16) */}
{/* Using the placeholder as requested for the background canvas */}
<div className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale-[0.2]" style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpOM5nIqqZqImg0RRAMgh1_-i0m35RML4kO3qSurb4fJ39q_0hmVmJUTEWwJNl2d9uvZ0-d-HHv46QmHBUM9rv-4NBm2d75l04LzTnOCgP1gco_yfe_n4797OV2tGwiOUyHIg2xi2hnwiH-8BODAPFUIpU9_DllJ6yXbj9to5teepUXtT5u9jGpe5HE9tVG5ny88MulEa4vtKdrrRqBM2FRQ-tkRMXKQanVne6j1DxOZkSIAjNkmtwt0pK8w5Fqqx9ceu5xHjSgpM')" }}></div>
{/* Main Application Shell Container */}
<div className="relative z-10 flex w-full h-full">
{/* 
            Shared Component: SideNavBar 
            Applying exact execution styles from JSON.
            Active Tab: Synthesis Studio
        */}
<nav className="bg-surface-container-low dark:bg-surface-container-high h-screen w-64 left-0 fixed border-r border-outline-variant/30 flex flex-col h-full py-8 px-4 z-40">
{/* Header/Brand */}
<div className="mb-12 px-2">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-primary text-[28px]">token</span>
<h1 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">Contextra</h1>
</div>
<p className="font-mono-ui text-mono-ui text-on-surface-variant uppercase tracking-wider text-[10px]">Intelligence Workspace</p>
</div>
{/* Navigation Links */}
<ul className="flex-1 flex flex-col gap-2">
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">analytics</span>
<span className="font-body-md text-body-md">Intelligence Canvas</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">hub</span>
<span className="font-body-md text-body-md">Knowledge Constellation</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">inventory_2</span>
<span className="font-body-md text-body-md">Source Hub</span>
</a>
</li>
{/* ACTIVE ITEM: Synthesis Studio */}
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-primary-fixed-variant font-medium bg-primary-container shadow-sm" href="#">
<span className="material-symbols-outlined text-[20px] icon-fill text-primary">auto_awesome</span>
<span className="font-body-md text-body-md font-semibold">Synthesis Studio</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-[20px]">history</span>
<span className="font-body-md text-body-md">Memory Timeline</span>
</a>
</li>
</ul>
{/* CTA / Bottom Section */}
<div className="mt-auto pt-6 border-t border-outline-variant/30 px-2 flex flex-col gap-4">
<button className="w-full flex justify-center items-center gap-2 bg-primary text-on-primary font-body-md text-body-md py-2.5 rounded-lg hover:bg-surface-tint transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                    New Synthesis
                </button>
<div className="flex items-center gap-3 mt-2">
<img alt="User Avatar" className="w-8 h-8 rounded-full border border-outline-variant/50 object-cover" data-alt="A close-up studio portrait of a professional woman with a soft, warm light-mode aesthetic. She has a serene expression, wearing a minimalist pale grey top against a clean, off-white background. The lighting is sophisticated and bright, highlighting sharp details and conveying a premium, calm corporate identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8liAtxK30qSu6D8ylyM4HkbFgSNuB0e-StKDOmtwXtYjTKwat37GsLQffOqQM7r6ZDbt_tWJB2629ssFJ3xOW5X2EpFn81ba34fsXp7s4RYkD5zkH3O3604KQWj_yjmcM6J8y7MniHzMQavV1zHXGL-00LVUSyeOUpQFxttoyraDdSVKLAoySSsIhwuREXS33oePUG0QFHHJaOYAmEc-ITXn6ivDRFeEsgZNBv5ItscTKVJ2nBaab07KGXR9AKSUMiGHlx2VRwvg"/>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface leading-tight">Sarah Chen</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant text-[11px] leading-tight">Lead Researcher</span>
</div>
</div>
</div>
</nav>
{/* Main Canvas Area (Offset by SideNav) */}
<main className="ml-64 flex-1 relative h-screen p-gutter-grid flex justify-center items-center">
{/* Collaborative Workspace Overlay */}
{/* Mimics a glassmorphic "board" or "document" floating in the studio */}
<div className="w-full max-w-5xl h-[85%] glass-panel rounded-2xl p-10 relative overflow-hidden flex flex-col shadow-sm">
{/* Workspace Header & Presence Indicators */}
<div className="flex justify-between items-start mb-8 pb-4 border-b border-outline-variant/20">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Project: Horizon Context</h2>
<p className="font-mono-ui text-mono-ui text-on-surface-variant flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                            Live Collaboration Active
                        </p>
</div>
{/* Presence Stack */}
<div className="flex -space-x-3 items-center">
<img alt="Team Member" className="w-10 h-10 rounded-full border-2 border-surface-bright object-cover z-30" data-alt="A bright, high-key portrait of a young man with short hair and glasses, wearing a light-colored minimalist shirt. The background is pure soft white, emphasizing a clean, modern, and professional aesthetic suitable for an enterprise avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLyCP0mb2WfKnd5rpmCi6L8OMZiWTvacK6gM_QbuTLVE5C_Winc-MFzIiB-zQH7ypMPNL3Lenaxpzau6p0ZYcyt_m4nRZb201Zwshk3f3tD48uVOc0XW45xjNux8-zeBbkUrXfIMcufOTlmJDTpxFpd6LDPe4RW9fEwA3TdFKFc1sJDFbPPIIladeE64m4oipJz0L0pE7t6dTSqUQ0-Et9yEPQ_Kd4PcGFWw7V_rmDuiCIHFTiLCaYGNfzBAcNM5N9Sdx2dkU5jw"/>
<img alt="Team Member" className="w-10 h-10 rounded-full border-2 border-surface-bright object-cover z-20" data-alt="A professional headshot of a woman smiling subtly, illuminated by soft, diffused white light. She is dressed in smart-casual attire against a seamless warm ivory background, conveying an approachable yet sophisticated corporate identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB533dIEbfGAWEnmYFxFPwww5XKoBQGZ20XdRcAWaiXjayxCo_oJJfXjWSYlA2nWEZF3YTjqk_Hu1xCnGSqTFSV7s5E3qeAEGZxIlfW27PfXnZO9kvDHuc0Q4LK2Igpz9IAhr-zMQDHU5g68snhEbAFycFNZcWaBmiF9lJTQJNHtuZ9LRcWLJhm9r2Q_iNo5EISgxPDa-4P7nRNOLWWAJ1Bockw-5_8FZfylJg7wXTVnxqNGQ8A0FJGSZfLQGtsx_ImXgdgoJmgWbM"/>
<div className="w-10 h-10 rounded-full border-2 border-surface-bright bg-surface-container-highest flex items-center justify-center font-label-caps text-label-caps text-on-surface-variant z-10">
                            +2
                        </div>
</div>
</div>
{/* Canvas Content Area with Live Cursors */}
<div className="flex-1 relative border border-dashed border-outline-variant/30 rounded-xl bg-surface-container-lowest/50 p-8">
{/* Faux Content: A Knowledge Node being edited */}
<div className="w-2/3 mx-auto mt-12 bg-surface rounded-lg p-6 shadow-sm border border-outline-variant/20 relative">
<div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-tertiary-fixed-dim/30 border border-tertiary flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Behavioral Micro-Trends in Q3</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Initial synthesis suggests a pivot towards ambient interfaces. Users are exhibiting a higher tolerance for asynchronous... <span className="border-r-2 border-secondary animate-pulse inline-block h-5 w-1"></span>
</p>
</div>
{/* Live Cursor 1 (David) */}
<div className="absolute top-[40%] left-[35%] flex flex-col items-start z-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<span className="material-symbols-outlined text-secondary text-[24px] -ml-1 -mt-1 drop-shadow-md" style={{ "transform": "rotate(-15deg)" }}>arrow_selector_tool</span>
<div className="bg-secondary text-on-secondary font-mono-ui text-[10px] px-2 py-0.5 rounded shadow-sm whitespace-nowrap mt-1">
                            David L.
                        </div>
</div>
{/* Live Cursor 2 (Elena) */}
<div className="absolute top-[65%] right-[25%] flex flex-col items-start z-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<span className="material-symbols-outlined text-tertiary text-[24px] -ml-1 -mt-1 drop-shadow-md" style={{ "transform": "rotate(-15deg)" }}>arrow_selector_tool</span>
<div className="bg-tertiary text-on-tertiary font-mono-ui text-[10px] px-2 py-0.5 rounded shadow-sm whitespace-nowrap mt-1">
                            Elena M.
                        </div>
</div>
</div>
{/* Activity Feed (Bottom Left of Workspace) */}
<div className="absolute bottom-10 left-10 w-[320px] bg-surface/90 backdrop-blur-md border border-outline-variant/30 rounded-xl p-4 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">history</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Recent Activity</span>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-caps text-[10px] mt-0.5">DL</div>
<div>
<p className="font-body-md text-[13px] text-on-surface"><span className="font-semibold">David L.</span> added a new Source DNA link.</p>
<p className="font-mono-ui text-[10px] text-on-surface-variant mt-0.5">2 mins ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-caps text-[10px] mt-0.5">EM</div>
<div>
<p className="font-body-md text-[13px] text-on-surface"><span className="font-semibold">Elena M.</span> refactored the Q3 insights node.</p>
<p className="font-mono-ui text-[10px] text-on-surface-variant mt-0.5">5 mins ago</p>
</div>
</div>
</div>
</div>
</main>
{/* 
            Global Copilot / Ask Contextra Panel (Right) 
            Command Layer (Level 3) Styling
        */}
<aside className="fixed right-gutter-grid top-gutter-grid bottom-gutter-grid w-[420px] z-50 glass-command rounded-2xl flex flex-col overflow-hidden">
{/* Panel Header */}
<div className="px-6 py-5 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low/40">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-[18px]">robot_2</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">Ask Contextra</h2>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md text-on-surface-variant hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined text-[20px]">push_pin</span>
</button>
<button className="p-1.5 rounded-md text-on-surface-variant hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
</div>
{/* Chat / Interaction Area */}
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 scrollbar-hide">
{/* User Message */}
<div className="flex flex-col items-end gap-2">
<div className="bg-surface border border-outline-variant/30 rounded-2xl rounded-tr-sm p-4 max-w-[85%] shadow-sm">
<p className="font-body-md text-[15px] text-on-surface">Can you cross-reference the behavioral micro-trends David just noted with our internal user interview data from last month?</p>
</div>
<span className="font-mono-ui text-[11px] text-on-surface-variant mr-1">You • Just now</span>
</div>
{/* Contextra AI Streaming Response */}
<div className="flex flex-col items-start gap-2 w-full">
<div className="flex items-center gap-2 mb-1 ml-1">
<span className="material-symbols-outlined text-[16px] text-tertiary">robot_2</span>
<span className="font-label-caps text-label-caps text-tertiary">Contextra Synthesizing</span>
</div>
<div className="bg-tertiary-container/30 border border-tertiary/20 rounded-2xl rounded-tl-sm p-5 w-[95%] shadow-sm relative">
<p className="font-body-md text-[15px] text-on-surface leading-relaxed">
                            Analyzing David's input against the <span className="font-mono-ui text-[13px] bg-surface-variant/50 px-1 rounded">UX_Interviews_Aug.pdf</span> dataset. 
                            <br/><br/>
                            There is a strong correlation. In last month's interviews, <strong>64% of participants</strong> expressed fatigue with high-friction synchronous tools, aligning directly with the "pivot towards ambient interfaces" noted in the canvas. 
                            <br/><br/>
                            Specifically, the sentiment around...<span className="inline-block w-1.5 h-4 ml-1 bg-tertiary align-middle opacity-70"></span>
</p>
{/* Inline Citations (Source DNA Card Miniature Style) */}
<div className="mt-5 pt-4 border-t border-outline-variant/20">
<p className="font-label-caps text-[10px] text-on-surface-variant mb-2">Referenced Sources</p>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 p-2 rounded-lg bg-surface border border-outline-variant/30 hover:border-tertiary/40 transition-colors cursor-pointer">
<div className="w-6 h-6 rounded bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">picture_as_pdf</span>
</div>
<div className="flex-1 overflow-hidden">
<p className="font-mono-ui text-[12px] text-on-surface truncate">UX_Interviews_Aug.pdf</p>
</div>
<span className="font-mono-ui text-[10px] text-tertiary">98% Match</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Input Area (Command Layer Base) */}
<div className="p-4 bg-surface-container-lowest/80 border-t border-outline-variant/20 backdrop-blur-md">
<div className="relative flex items-end gap-2">
<div className="relative flex-1 bg-surface border border-outline-variant rounded-xl shadow-inner focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<textarea className="w-full bg-transparent border-none focus:ring-0 resize-none py-3 pl-4 pr-10 font-body-md text-[15px] text-on-surface placeholder:text-on-surface-variant/50 max-h-[120px]" placeholder="Ask Contextra to analyze..." rows="1"></textarea>
{/* Voice Input Option inside text area */}
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-primary hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined text-[20px]">mic</span>
</button>
</div>
{/* Send/Submit action */}
<button className="h-[46px] w-[46px] flex-shrink-0 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm hover:bg-surface-tint transition-colors">
<span className="material-symbols-outlined text-[20px] icon-fill">arrow_upward</span>
</button>
</div>
<div className="mt-2 flex justify-between items-center px-1">
<span className="font-mono-ui text-[10px] text-on-surface-variant">⌘ + K to open command palette</span>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-surface border border-outline-variant/30 font-mono-ui text-[9px] text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors">Summarize</span>
<span className="px-2 py-0.5 rounded bg-surface border border-outline-variant/30 font-mono-ui text-[9px] text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors">Extract Insights</span>
</div>
</div>
</div>
</aside>
</div>

    </div>
  );
}
