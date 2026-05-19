import React from 'react';

export default function SignupPage() {
  return (
    <div className="bg-background text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container h-screen w-screen overflow-hidden flex flex-col md:flex-row w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    ` }} />
      
      
{/* Left Pane: Ambient Imagery & Brand */}
<div className="relative hidden md:flex flex-col justify-between w-2/5 h-full p-margin-page bg-surface-container-high overflow-hidden border-r border-outline-variant/30">
{/* Background Image with data-alt prompt */}
<img alt="Ambient Intelligence" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="A highly detailed, abstract 3D render representing ambient intelligence and semantic particles. The scene is bathed in soft, high-key lighting characteristic of a warm ivory and dusty lavender light-mode aesthetic. Delicate, frosted glass-like geometric shapes float weightlessly in a serene, spacious environment. The composition feels like premium, tactile stationery brought to life, conveying intellectual clarity, minimalism, and sophisticated technological calm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUigZNJUNWHdlBlWaQAbmIIDkN8U1ZeVtuBCFMd8SLTxN5WFdvSO2cKgewNAPBdjEdrP77O9MvnjE_4tLlD5sEZ0AbX-E557wuL8J0NmKTmCQLXMO-GqxRM5OKGy4CSIxBu25OXpzxbCoK263aNPG8RIgKWWo0OWmCZR_rBUulG4ZoAZWilmwkZ0wvOsmXaXcofGP-4GgbbsSGLsjMX9k9l5VnlMEilCnkrqDXdISiL4rTc6WQ634QVWhhnxG0LOBNEUjg_vuIOds"/>
{/* Gradient Overlay for contrast */}
<div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-surface/90 backdrop-blur-[2px]"></div>
<div className="relative z-10">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tighter">Contextra</h1>
<p className="font-mono-ui text-mono-ui text-on-surface-variant mt-2 opacity-70">Intelligence Workspace v1.4</p>
</div>
<div className="relative z-10 max-w-sm">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Design your synthesis environment.</h2>
<p className="font-body-md text-body-md text-on-surface-variant">A tactile space for high-order thought. Configure your intelligence baseline to begin shaping the narrative.</p>
</div>
</div>
{/* Right Pane: Onboarding Form */}
<div className="w-full md:w-3/5 h-full bg-background overflow-y-auto">
<div className="min-h-full flex flex-col justify-center px-6 py-12 md:px-margin-page lg:px-32">
<div className="max-w-xl w-full mx-auto space-y-16">
{/* Mobile Header */}
<div className="md:hidden mb-12">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tighter">Contextra</h1>
</div>
<div className="space-y-4">
<p className="font-mono-ui text-mono-ui text-secondary">Step 01 / Initiation</p>
<h2 className="font-display-hero text-headline-lg-mobile md:text-headline-lg text-on-surface">Establish Profile</h2>
</div>
<form className="space-y-12">
{/* Credentials Section */}
<div className="space-y-6">
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="email">Work Email</label>
<input className="w-full bg-surface-container-low border border-outline-variant/30 rounded font-body-md text-body-md text-on-surface placeholder:text-outline px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors" id="email" name="email" placeholder="name@institution.edu" type="email"/>
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="name">Full Name</label>
<input className="w-full bg-surface-container-low border border-outline-variant/30 rounded font-body-md text-body-md text-on-surface placeholder:text-outline px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors" id="name" name="name" placeholder="E.g. Dr. Aris Thorne" type="text"/>
</div>
</div>
<hr className="border-t border-outline-variant/20"/>
{/* Role Selection (Bento-ish Grid) */}
<div className="space-y-6">
<label className="block font-label-caps text-label-caps text-on-surface-variant">Primary Lens</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
{/* Option 1: Academic */}
<label className="relative flex flex-col p-5 border border-outline-variant/30 rounded bg-surface hover:bg-surface-container-high cursor-pointer transition-colors group">
<input className="peer sr-only" name="role" type="radio" value="academic"/>
<div className="absolute inset-0 border border-transparent rounded peer-checked:border-secondary peer-checked:bg-secondary-container/20 transition-colors"></div>
<span className="material-symbols-outlined text-secondary mb-4 z-10">school</span>
<span className="font-headline-md text-body-lg text-on-surface z-10 mb-1">Academic</span>
<span className="font-body-md text-mono-ui text-on-surface-variant z-10">Rigorous citation &amp; deep literature review.</span>
</label>
{/* Option 2: Strategist (Active State Example) */}
<label className="relative flex flex-col p-5 border border-outline-variant/30 rounded bg-surface hover:bg-surface-container-high cursor-pointer transition-colors group">
<input checked="" className="peer sr-only" name="role" type="radio" value="strategist"/>
<div className="absolute inset-0 border border-secondary rounded bg-secondary-container/20 transition-colors"></div>
<span className="material-symbols-outlined text-secondary mb-4 z-10">timeline</span>
<span className="font-headline-md text-body-lg text-on-surface z-10 mb-1">Strategist</span>
<span className="font-body-md text-mono-ui text-on-surface-variant z-10">Pattern recognition &amp; market synthesis.</span>
</label>
{/* Option 3: Designer */}
<label className="relative flex flex-col p-5 border border-outline-variant/30 rounded bg-surface hover:bg-surface-container-high cursor-pointer transition-colors group">
<input className="peer sr-only" name="role" type="radio" value="designer"/>
<div className="absolute inset-0 border border-transparent rounded peer-checked:border-secondary peer-checked:bg-secondary-container/20 transition-colors"></div>
<span className="material-symbols-outlined text-secondary mb-4 z-10">design_services</span>
<span className="font-headline-md text-body-lg text-on-surface z-10 mb-1">Designer</span>
<span className="font-body-md text-mono-ui text-on-surface-variant z-10">Lateral thinking &amp; conceptual mapping.</span>
</label>
</div>
</div>
<hr className="border-t border-outline-variant/20"/>
{/* AI Preference Setup */}
<div className="space-y-6">
<div className="flex justify-between items-end">
<label className="block font-label-caps text-label-caps text-on-surface-variant">Synthesis Modality</label>
<span className="font-mono-ui text-mono-ui text-secondary">Configurable later</span>
</div>
<div className="flex bg-surface-container-low border border-outline-variant/30 p-1 rounded-full">
{/* Fluid Toggle */}
<label className="flex-1 text-center py-3 rounded-full cursor-pointer transition-colors hover:bg-surface-container-high">
<input className="sr-only peer" name="ai_mode" type="radio" value="fluid"/>
<span className="font-body-md text-body-md text-on-surface-variant peer-checked:text-on-secondary-container peer-checked:font-semibold">Fluid Association</span>
</label>
{/* Strict Toggle (Active) */}
<label className="flex-1 text-center py-3 bg-surface border border-outline-variant/40 shadow-sm rounded-full cursor-pointer transition-colors">
<input checked="" className="sr-only peer" name="ai_mode" type="radio" value="strict"/>
<span className="font-body-md text-body-md text-on-surface font-semibold">Strict Citational</span>
</label>
</div>
<p className="font-mono-ui text-mono-ui text-on-surface-variant">Prioritizes literal transcription and strict factual adherence over creative interpolation.</p>
</div>
{/* Actions */}
<div className="pt-8">
<button className="w-full flex justify-between items-center bg-on-surface text-surface py-4 px-6 rounded hover:bg-inverse-surface transition-colors" type="button">
<span className="font-label-caps text-label-caps tracking-widest">Initialize Workspace</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</form>
<div className="text-center pb-12">
<p className="font-mono-ui text-mono-ui text-on-surface-variant">
                        By proceeding, you agree to the <a className="text-secondary hover:underline" href="#">Philosophy</a> &amp; <a className="text-secondary hover:underline" href="#">Privacy Protocols</a>.
                    </p>
</div>
</div>
</div>
</div>

    </div>
  );
}
