import React from 'react';

export default function CollaborationStudioPage() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24
    }
.glass-effect {
    backdrop-filter: blur(24px);
    background: rgba(252, 249, 241, 0.6)
    }
.grain-overlay {
    position: relative
    }
.grain-overlay::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6NGYaggL5OOzzp0XQagA7pedTOinkUXlMeb3xOu2vBoxi-ThG27L_8JH_1WSiv_yfx2b2M4CDSE65fS371oXTE2ywUMIwS0bqqKulE630DH3lpm-j3GnBWXy2CY7BvwQRpCj8bYoYVyg8aDFnAdyoAW6wbDsA84FkqcptqW2PHdJTtu5cn5d9qHzw6rR1IqunFbI7b-PHqNUda2yJKvvQ6_tLAf7TwFOyzLXCIMjP9n1RTqhwjNd6gZ7ZFUC5olFa21-LelSVAE);
    opacity: 0.03;
    pointer-events: none;
    z-index: 10
    }` }} />
      
      
{/* Top Navigation Bar */}
<header className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl flex justify-between items-center px-margin-page py-unit h-16 w-full docked full-width top-0 sticky z-40">
<div className="flex items-center gap-4">
<h1 className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</h1>
<div className="hidden md:flex gap-6 ml-8">
<a className="text-primary font-bold font-label-caps text-label-caps" href="#">Intelligence Canvas</a>
<a className="text-on-surface-variant/60 hover:text-primary transition-colors duration-300 font-label-caps text-label-caps" href="#">Knowledge Constellation</a>
</div>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform" data-icon="flare">flare</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-95 transition-transform" data-icon="notifications_none">notifications_none</span>
<div className="h-8 w-8 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="h-full w-full object-cover" data-alt="A professional portrait of a tech-savvy female executive in a soft-lit modern studio setting. The lighting is warm and ethereal, highlighting her focused yet calm expression. The background is a clean, minimalist off-white with subtle architectural shadows, maintaining the Scandinavian luxury aesthetic of the brand. The color palette is composed of soft creams and muted greys." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXoASsxODk7UJtRCKyaYgNiwBHk1eTyrEhrq0lMorQRTspASu3C9-0POlOiCY0GQH_hi91H77J5R_RznodBx_WnqG0W6Jd6ajh_hvfnUnZOrScpKIZRMYQQbKG9rOgydc9G0F7pBmVHS4YvE2vv-mN2TldxGW9jfreD04aNKvNT01yYvC12dZNS7hbKu-a-sD3xzFx6btvvBp4jCnebZzdzGIiz2hkmr5ihdssZ4kJZs4vSw4X9Dn2o1L-cyINRAgFVWxTSLjwQcI"/>
</div>
</div>
</header>
{/* Side Navigation Bar (Hidden on Mobile) */}
<aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 z-30 bg-surface-container-low py-margin-page px-6 border-r border-outline-variant/30">
<div className="mb-12">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-white text-sm" data-icon="hub" style={{ "fontVariationSettings": "'FILL' 1" }}>hub</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tighter">Contextra</h2>
</div>
<p className="font-mono-ui text-mono-ui text-on-surface-variant/60">Vellum Workspace</p>
</div>
<nav className="flex-1 space-y-2">
<div className="flex items-center gap-3 px-3 py-2 text-primary border-r-2 border-primary font-bold font-label-caps text-label-caps bg-surface-variant/30">
<span className="material-symbols-outlined" data-icon="space_dashboard">space_dashboard</span> Intelligence Canvas
            </div>
<div className="flex items-center gap-3 px-3 py-2 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all font-label-caps text-label-caps">
<span className="material-symbols-outlined" data-icon="hub">hub</span> Knowledge Constellation
            </div>
<div className="flex items-center gap-3 px-3 py-2 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all font-label-caps text-label-caps">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span> Source Hub
            </div>
<div className="flex items-center gap-3 px-3 py-2 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all font-label-caps text-label-caps">
<span className="material-symbols-outlined" data-icon="layers">layers</span> Synthesis Studio
            </div>
<div className="flex items-center gap-3 px-3 py-2 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all font-label-caps text-label-caps">
<span className="material-symbols-outlined" data-icon="history">history</span> Memory Timeline
            </div>
</nav>
<button className="mt-auto bg-primary text-on-primary py-3 rounded-xl font-label-caps text-label-caps hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span> New Synthesis
        </button>
</aside>
{/* Main Canvas Area */}
<main className="lg:ml-64 min-h-screen relative p-canvas-safe-area grain-overlay">
{/* Canvas Header */}
<div className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="font-mono-ui text-mono-ui text-secondary px-2 py-0.5 bg-secondary-container rounded-full">PROJECT: OMEGA SYNTHESIS</span>
<span className="text-outline-variant">•</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/60">Live Sessions: 4</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Collaborative Intelligence Matrix</h2>
</div>
<div className="flex -space-x-3 items-center">
<div className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden ring-2 ring-primary/10">
<img className="w-full h-full object-cover" data-alt="A portrait of a minimalist architect, male, mid-30s, wearing glasses. The lighting is crisp and cool, casting soft shadows against a warm beige background. The atmosphere is intellectual and serene, matching the Scandinavian aesthetic. High-quality photography with shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN_Dax8DnND9dCuGnXJdwdme9-wSGSmXdzRRAs9nAZn1_td1iuG2_R7cNkrr_yTc7mUEjkJebIEHNBHHlGzaxRycHgNo-qAA-BdHKbQbHongktfyzLd6YU0uhFsAmAzxTJqNZ7udp2M7Qd_C4NTBIWeMCltZRopiIKj7kNFxSCkZRjb6hLEmLJ0puqcCBI97-WCE3os2lU_wemgyamfXYHUHRKYrycpuJEYlnGh3V84GoxFmkI1ZbiaZ5vephJOlKAEPn3b2UUFkE"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden ring-2 ring-secondary/10">
<img className="w-full h-full object-cover" data-alt="A portrait of a creative designer, female, early 20s, with a warm smile. The lighting is bright and natural, using a soft-focus background that hints at a high-end atelier. Muted earthy tones dominate the color palette, emphasizing a premium and thoughtful visual language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_AYmi3bYl85WQUJDlH3mSNbeI0A_mBNg76GogB3j-lrKTI5b1SPVIqWYL06BRrQHEcHP9rTbbBE0ne0JlyDqhamEZt3mzV5DIXTi0Te7HhgNcfq67UfqXkXI7-9cN9aqdbeU15Ugz4AlsUSj9qd-Y8BhQuLGeQoxlj1hN5Uhcw7L_VmrlFfjM6T7R0Ae5OgibxZT5xLK3IguFxYzsp9BDAT-lbP771Lub1huR_39nTQ35DgS8rchaKHFqjVNiFSjiDiskINaPSzA"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden ring-2 ring-tertiary/10">
<img className="w-full h-full object-cover" data-alt="A close-up portrait of a thoughtful scientist, male, late 40s, looking away from the camera. The lighting is dramatic yet soft, emphasizing texture and intellectual depth. The background is a hazy Smoky Lilac, reinforcing the brand's sophisticated glassmorphism and color hierarchy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6LWERWTK8MX1DGwWhiZsGDuBk0YOlxuiwZtnIR27aSbivcRGx3HiQ8x9-YRucxw0pAT5Tmv0iPswXMuWX8_1jrZZ02Nv-y-97E5u5q3GbNToEETvPOyqVqGD8zU5hNcZkj7XpyHwbw9zOLqPEpSwHUfaVT6Onr0kcDoLBUF3H7Tsw6ojNiRkmwftZXo3OPMma7DyV1NOmwbKbMQS1TXxu0U8mEYfRCT6QyF2zNUYgVBn_SEiESb2lDy2mY9XtwHv3Yyb5k_CmxAs"/>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-on-surface-variant font-mono-ui text-xs">
                    +2
                </div>
<button className="ml-6 flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full font-label-caps text-label-caps text-primary hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="person_add">person_add</span> Invite
                </button>
</div>
</div>
{/* The Synthesis Grid (Bento Style) */}
<div className="max-w-7xl mx-auto grid grid-cols-12 gap-gutter-grid">
{/* Main Document Canvas */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-10 min-h-[800px] relative overflow-hidden shadow-sm">
{/* Cursor 1: Elena */}
<div className="absolute top-1/4 left-1/3 z-20 pointer-events-none flex flex-col items-start gap-1">
<div className="w-4 h-4 text-secondary">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24"><path d="M7 2l12 11.2-5.8.8 3.3 6.4-2.5 1.2-3.3-6.4-3.7 4.8z"></path></svg>
</div>
<span className="px-2 py-0.5 bg-secondary text-white font-mono-ui text-[10px] rounded-sm">Elena Chen</span>
</div>
{/* Cursor 2: Marcus */}
<div className="absolute bottom-1/3 right-1/4 z-20 pointer-events-none flex flex-col items-start gap-1">
<div className="w-4 h-4 text-tertiary">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24"><path d="M7 2l12 11.2-5.8.8 3.3 6.4-2.5 1.2-3.3-6.4-3.7 4.8z"></path></svg>
</div>
<span className="px-2 py-0.5 bg-tertiary text-white font-mono-ui text-[10px] rounded-sm">Marcus Aris</span>
</div>
{/* Annotation 1: Floating Note */}
<div className="absolute top-1/2 right-12 w-64 p-4 glass-effect border border-white/40 rounded-xl shadow-xl z-10 rotate-1">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-secondary-fixed-dim text-[10px] flex items-center justify-center font-bold">EC</div>
<span className="font-label-caps text-[10px] text-on-surface-variant">ELENA CHEN • 2m ago</span>
</div>
<p className="font-body-md text-sm text-on-surface leading-relaxed">The cross-pollination between the Scandinavian functionalist nodes and the Japanese editorial layout seems to be the key differentiator here.</p>
<div className="mt-3 flex gap-2">
<span className="px-2 py-1 bg-surface-variant/40 rounded-md font-mono-ui text-[10px]">#synthesis</span>
<span className="px-2 py-1 bg-surface-variant/40 rounded-md font-mono-ui text-[10px]">#structural-integrity</span>
</div>
</div>
{/* Document Content */}
<article className="prose prose-stone max-w-none">
<h3 className="font-headline-md text-headline-md mb-6">Phase 1: Abstract Conceptualization</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                        The framework of "Digital Tactility" operates on the premise that high-order thinking requires a spatial environment that mimics the friction and focus of physical research. By utilizing a fixed-editorial grid, we are not just organizing data; we are curating intellectual space.
                    </p>
<div className="grid grid-cols-2 gap-6 my-10">
<div className="p-6 bg-surface-container border border-outline-variant/20 rounded-xl">
<h4 className="font-label-caps text-label-caps text-primary mb-2">VECTOR A: SPATIAL STACKING</h4>
<p className="font-body-md text-sm text-on-surface-variant">Defining hierarchy through Z-axis depth and backdrop blurs rather than harsh shadows.</p>
</div>
<div className="p-6 bg-secondary-container/20 border border-secondary/10 rounded-xl">
<h4 className="font-label-caps text-label-caps text-secondary mb-2">VECTOR B: KNOWLEDGE CONSTELLATIONS</h4>
<p className="font-body-md text-sm text-on-surface-variant">Interconnected semantic nodes pulsing with AI-driven relevance cues.</p>
</div>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                        When a user interacts with the "Context Lens," the interface should not merely overlay information. It should contract the primary canvas—a subtle 2% scale-down—creating a physical sensation of focusing deeper into the matter.
                    </p>
<div className="h-64 rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="An abstract, high-resolution digital rendering of flowing, translucent architectural ribbons in shades of white, cream, and soft lavender. The lighting is diffuse and ethereal, mimicking the glow of a high-end Japanese paper lantern. The composition is asymmetrical and elegant, representing fluid intellectual connections in a modern, professional workspace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjukTKiQiul1ydVOdE0cBy0a2sPdITKPqVJHtIdcZwcq_VDL-Yx7Id7xeqoH3WkRrg9K7-YkKxyPoUpdrGmzI1niTYI6k3DxFKou2bzyD5CDDu8IAvb7dWIh1kgvDmtCJ69HNMi73Toyq-3JxArdXPHxd6lkrmBHTJ2B4IJzcNPzARDcxyEpVpcM-xuNXJPrrz7wqWtFHMniGt2KksDpl9cLBk2hSBs08wJow2sxd61R3ohxjmTI2Imt-lpKWxeC-qa4-SSJZGxuI"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 flex items-center gap-2">
<span className="material-symbols-outlined text-white" data-icon="link">link</span>
<span className="font-mono-ui text-mono-ui text-white">Source ID: DNA-8829-OMEGA</span>
</div>
</div>
</article>
</div>
{/* Sidebar: Context & Insights */}
<div className="col-span-12 lg:col-span-4 space-y-gutter-grid">
{/* Collaborative Insights Card */}
<section className="bg-surface-container-high/40 p-6 rounded-2xl border border-outline-variant/30 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-label-caps text-label-caps text-on-surface">TEAM FEED</h3>
<span className="material-symbols-outlined text-primary text-lg" data-icon="stream">stream</span>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed flex-shrink-0 flex items-center justify-center font-bold text-[10px]">MA</div>
<div>
<p className="text-xs text-on-surface-variant/60 font-mono-ui mb-1">Marcus Aris • Just now</p>
<p className="text-sm text-on-surface leading-tight">Adjusted the opacity of the grain-overlay on the main canvas. Feels more "physical" now.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-secondary-fixed flex-shrink-0 flex items-center justify-center font-bold text-[10px]">EC</div>
<div>
<p className="text-xs text-on-surface-variant/60 font-mono-ui mb-1">Elena Chen • 14m ago</p>
<p className="text-sm text-on-surface leading-tight">Can we link Vector B to the synthesis we did last week on Memory Timelines?</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex-shrink-0 flex items-center justify-center font-bold text-[10px]">AI</div>
<div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
<p className="text-xs text-primary font-mono-ui mb-1">Contextra AI • Processing</p>
<p className="text-sm text-on-surface italic">"Cross-linking relevant sources from the Knowledge Constellation. 4 new nodes identified."</p>
</div>
</div>
</div>
</section>
{/* Source DNA Mini Cards */}
<section>
<div className="flex items-center justify-between mb-4">
<h3 className="font-label-caps text-label-caps text-on-surface">LINKED SOURCES</h3>
<span className="text-xs font-mono-ui text-on-surface-variant/60">6 Citations</span>
</div>
<div className="space-y-3">
<div className="flex items-center p-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:shadow-md transition-shadow group cursor-pointer">
<div className="w-10 h-14 bg-surface-variant/40 rounded flex items-center justify-center group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-outline group-hover:text-secondary" data-icon="description">description</span>
</div>
<div className="ml-4 flex-1">
<h4 className="font-body-md text-sm font-semibold text-on-surface">Spatial Cognitive Mapping</h4>
<p className="font-mono-ui text-[10px] text-on-surface-variant/60 uppercase">Journal of Synthesis • 2023</p>
</div>
<span className="material-symbols-outlined text-primary/40" data-icon="chevron_right">chevron_right</span>
</div>
<div className="flex items-center p-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:shadow-md transition-shadow group cursor-pointer">
<div className="w-10 h-14 bg-surface-variant/40 rounded flex items-center justify-center group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-outline group-hover:text-secondary" data-icon="article">article</span>
</div>
<div className="ml-4 flex-1">
<h4 className="font-body-md text-sm font-semibold text-on-surface">The Vellum Standard</h4>
<p className="font-mono-ui text-[10px] text-on-surface-variant/60 uppercase">Digital Typography Quarterly</p>
</div>
<span className="material-symbols-outlined text-primary/40" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</section>
{/* Relevance Meter */}
<section className="bg-surface-container-highest/30 p-6 rounded-2xl">
<h3 className="font-label-caps text-label-caps text-on-surface mb-4">SYNERGY QUOTIENT</h3>
<div className="flex items-end gap-2 h-32 mb-4">
<div className="flex-1 bg-surface-container rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-surface-container rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-secondary-container rounded-t-sm h-[85%]"></div>
<div className="flex-1 bg-secondary rounded-t-sm h-[95%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-primary-fixed-dim rounded-t-sm h-[50%]"></div>
</div>
<p className="font-mono-ui text-[10px] text-on-surface-variant/60">Team collaboration efficiency is up 12% today.</p>
</section>
</div>
</div>
</main>
{/* Floating Command Dock */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-full px-8 py-4 w-auto min-w-[480px]">
<div className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1 cursor-pointer transition-all scale-105">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
<span className="font-mono-ui text-[10px]">Command</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="inventory">inventory</span>
<span className="font-mono-ui text-[10px]">Sources</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
<span className="font-mono-ui text-[10px]">Context</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
<span className="font-mono-ui text-[10px]">Filter</span>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
<button className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
</nav>
{/* Workspace Invite Modal Overlay */}
<div className="fixed inset-0 z-[60] bg-inverse-surface/40 backdrop-blur-md flex items-center justify-center p-margin-page">
<div className="bg-surface-bright w-full max-w-xl rounded-[32px] overflow-hidden shadow-2xl relative grain-overlay border border-white/10">
{/* Modal Header / Hero */}
<div className="h-48 relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A clean, cinematic interior of a high-end, Scandinavian-designed workspace. A long, heavy wooden table sits under soft pendant lighting, surrounded by minimalist chairs. The walls are a warm, textured off-white. The atmosphere is one of focused professional serenity and elite collaboration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIgiPX8bc12pHUypS448v3ObdiHJAG-mfKltUYNl9uo-rK9-JRv3umzZrVkB9wPcZY_qxFJ-qrJPjgJI7cueb8sIQ2cFEF7Y6UfKlPgnTjKzplB6ANbY4V3ZgB7i0ZnW-PXw4wJqf4l5LUlQds7dhie4Si8DBfYCF8oWx6Dv_zPn1Hvh8b_6PvFFb5bDI3GDZUJeg0u7dGwZLP1QA3c6y_ViUsLwpdPBCzBVKgIvB0V78plRmF0XuSuqs3tFbkpZTvLXa4_TxITL0"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-bright"></div>
<button className="absolute top-6 right-6 h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:bg-white/40 transition-colors">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<div className="px-12 pb-12 pt-4">
<div className="text-center mb-8">
<div className="inline-block px-3 py-1 bg-secondary-container text-secondary font-mono-ui text-[10px] rounded-full mb-4">INVITATION</div>
<h2 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-2 tracking-tight">Expand the Intelligence</h2>
<p className="font-body-md text-on-surface-variant/80">Invite your key contributors to the OMEGA SYNTHESIS workspace. Intelligence is collective.</p>
</div>
<div className="space-y-4 mb-8">
<div className="relative">
<label className="absolute -top-2.5 left-4 px-2 bg-surface-bright font-label-caps text-[10px] text-primary">RECIPIENT EMAIL</label>
<input className="w-full bg-transparent border border-outline-variant rounded-xl px-4 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-body-md" placeholder="collaborator@company.ai" type="email"/>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="shield">shield</span>
<div>
<p className="font-label-caps text-[11px] text-on-surface font-bold">WORKSPACE ACCESS</p>
<p className="text-[12px] text-on-surface-variant/60">Full edit &amp; synthesis rights</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-caps text-label-caps font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        Send Premium Invite <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
</button>
<button className="w-full bg-transparent text-primary py-3 rounded-xl font-label-caps text-[11px] hover:bg-surface-variant/30 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="link">link</span> Copy Workspace Link
                    </button>
</div>
</div>
{/* Bottom Texture Line */}
<div className="h-1 w-full bg-gradient-to-r from-secondary-container via-primary-fixed to-tertiary-container"></div>
</div>
</div>
{/* Mobile Footer Navigation (Visible only on mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-xl flex justify-around items-center border-t border-outline-variant/20 z-50">
<span className="material-symbols-outlined text-primary" data-icon="home" style={{ "fontVariationSettings": "'FILL' 1" }}>home</span>
<span className="material-symbols-outlined text-on-surface-variant/60" data-icon="search">search</span>
<span className="material-symbols-outlined text-on-surface-variant/60" data-icon="add_circle">add_circle</span>
<span className="material-symbols-outlined text-on-surface-variant/60" data-icon="chat">chat</span>
<span className="material-symbols-outlined text-on-surface-variant/60" data-icon="person">person</span>
</nav>
{/* Global Footer */}
<footer className="w-full py-12 px-margin-page bg-surface border-t border-surface-variant mt-24">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-80 hover:opacity-100 transition-opacity">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 md:mb-0">Contextra</h2>
<div className="flex flex-col items-center md:items-end gap-4">
<div className="flex gap-8">
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Philosophy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Security</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">API</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Privacy</a>
</div>
<p className="font-body-md text-body-md text-on-surface-variant/60">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
</div>
</footer>

    </div>
  );
}
