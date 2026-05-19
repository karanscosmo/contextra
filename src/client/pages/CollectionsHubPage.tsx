import React from 'react';

export default function CollectionsHubPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.glass-sheet {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(229, 226, 218, 0.8)
    }
.vellum-texture {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDZLjC3Kgk6SS082SsEvz8TblCfgXIVr0EekGPnaRsscINgwGiP35OzgCIbb9BIlfhS1afDd6lCc90tykwjWXxWAorZAqEmg360g4gRR-XlxCpqfiYOpdC7-9yyKv8oVTwJwQ0PdQ0jVNzNDxTzjbIFuOKsqWUv-AlgelHRqmOV30S7ulvnGUka118XVm0cwHOx3Qjp0I7n1wnrhvBTN5UU9vvpLwpUmhx0BXeV730pv7B_g53o_h8z5sUCREJkuaiTsXNbCF1V_1Y);
    background-repeat: repeat
    }
.source-dna-card {
    box-shadow: 0 2px 8px -2px rgba(94, 91, 124, 0.08);
    transition: all 0.3s ease
    }
.source-dna-card:hover {
    transform: translatey(-4px);
    box-shadow: 0 8px 24px -4px rgba(94, 91, 124, 0.12)
    }
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24
    }` }} />
      
      
{/* TopAppBar */}
<nav className="bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-2xl text-primary dark:text-primary-fixed-dim docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md tracking-tighter text-on-surface dark:text-on-surface-variant">Contextra</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-primary dark:text-primary-fixed-dim font-bold font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Intelligence Canvas</a>
<a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Knowledge Constellation</a>
<a className="text-on-surface-variant/60 dark:text-on-surface-variant/40 font-label-caps text-label-caps hover:text-primary transition-colors duration-300" href="#">Source Hub</a>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">flare</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications_none</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">account_circle</span>
</div>
</nav>
{/* SideNavBar (Hidden on Mobile) */}
<aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 z-30 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant/30 dark:border-outline/20 py-margin-page px-6 pt-24">
<div className="flex flex-col gap-2 mb-12">
<span className="font-headline-md text-headline-md text-on-surface">Contextra</span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/60">Vellum Workspace</span>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">space_dashboard</span>
<span className="font-label-caps text-label-caps">Intelligence Canvas</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 text-primary font-bold border-r-2 border-primary bg-surface-variant/30 rounded-lg" href="#">
<span className="material-symbols-outlined">hub</span>
<span className="font-label-caps text-label-caps">Knowledge Constellation</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">folder_open</span>
<span className="font-label-caps text-label-caps">Source Hub</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">layers</span>
<span className="font-label-caps text-label-caps">Synthesis Studio</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant/70 hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">history</span>
<span className="font-label-caps text-label-caps">Memory Timeline</span>
</a>
</nav>
<button className="mt-auto flex items-center justify-center gap-2 bg-secondary text-on-secondary py-3 rounded-xl font-label-caps text-label-caps hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
            New Synthesis
        </button>
</aside>
{/* Main Content Canvas */}
<main className="lg:ml-64 min-h-screen px-margin-page pb-32">
<div className="max-w-7xl mx-auto pt-12">
{/* Header Section */}
<header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Semantic Collections</h1>
<p className="text-body-lg text-on-surface-variant/70 max-w-2xl">A clean digital desk for your high-order synthesis. Organize research vectors into collaborative topic boards.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full text-on-surface-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">sort</span>
<span className="font-label-caps text-label-caps">Recent</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-on-surface text-surface rounded-full hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">create_new_folder</span>
<span className="font-label-caps text-label-caps">Create Collection</span>
</button>
</div>
</header>
{/* Collections Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter-grid">
{/* Collection Card 1: Neuromorphic Design */}
<div className="group flex flex-col glass-sheet vellum-texture p-6 rounded-2xl border border-outline-variant/30 hover:border-secondary/40 transition-all duration-500">
<div className="flex justify-between items-start mb-8">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-mono-ui text-[10px] uppercase tracking-widest text-on-surface-variant/50">Active Synthesis</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Neuromorphic Design</h3>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-secondary transition-colors cursor-pointer">more_vert</span>
</div>
{/* Pinned Nodes Preview */}
<div className="flex-1 space-y-4 mb-8">
<div className="source-dna-card bg-surface-container-lowest/80 p-3 rounded-xl border border-outline-variant/20 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">psychology</span>
</div>
<div className="overflow-hidden">
<p className="font-label-caps text-label-caps text-on-surface truncate">Synaptic Architecture v2</p>
<p className="font-mono-ui text-[10px] text-on-surface-variant/60">Research Paper • 14 Citations</p>
</div>
</div>
<div className="source-dna-card bg-surface-container-lowest/80 p-3 rounded-xl border border-outline-variant/20 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">science</span>
</div>
<div className="overflow-hidden">
<p className="font-label-caps text-label-caps text-on-surface truncate">Silicon Dendrite Efficiency</p>
<p className="font-mono-ui text-[10px] text-on-surface-variant/60">Lab Notes • 08.24.2024</p>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
<div className="flex -space-x-2">
<img alt="User 1" className="w-8 h-8 rounded-full border-2 border-surface-bright object-cover" data-alt="A professional headshot of a creative director in a minimalist studio. The lighting is soft and natural, emphasizing a clean and serene aesthetic. He has a thoughtful expression, wearing a high-quality charcoal linen shirt. The background is a soft, blurred off-white gallery wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHT5Ccld-Gs7lJh2iOvVQE4lB9N5rn24nlQ3CL2R-9JYHP3-GLCxWI-0iObj8qhfPrhPxFaNbZ16G6XYuBpcCxCptleYuRakgbIEtfhmgjEMH60abMwa6GsRK71vi7X2vrzcXt0hKx3ktnnTsMgt6US0RcWfkzxZ-AKaUlmkBcHL98g6LOREr47frt_MeqDBYwkA_5709yjG3RGeTdTDsgi5bK7lqUrivnv0whBoI1vTRti4t9o4c8hqqorqtHHUi8TlIw4l4_luo"/>
<img alt="User 2" className="w-8 h-8 rounded-full border-2 border-surface-bright object-cover" data-alt="A portrait of a female researcher with a minimalist and sophisticated style. She is looking directly at the camera with a confident yet calm gaze. She wears a structured cream-colored blazer. The environment is a brightly lit, modern office space with subtle glass partitions and soft focus greenery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkkVifXSy5tkS7JZKFpSGaLjVvwJAXXlFKjfqgESKRQNXKFq18oe7LukJYGb9U0jtcuHf080gXeNqMrH1YXZovoMFlAMDVlpH5Efl538-oD762HLibisxX-hLOserowyc0WCvgi7aRO-aEblWu4FTUbUoZ7HshV2mHld4H5n4C3Ff-2SwEs93_KHkAQD6Yh0f5T3GQvSWQMzRgDop5dT6OV2VBqriLfifaNLs3LjrjvMM6xm-hFrLMxSXoCAaodWkoe_s_WZdp1c0"/>
<div className="w-8 h-8 rounded-full border-2 border-surface-bright bg-surface-container-high flex items-center justify-center font-mono-ui text-[10px] text-on-surface-variant">+3</div>
</div>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/40">42 Intelligence Nodes</span>
</div>
</div>
{/* Collection Card 2: Future of Synthesis */}
<div className="group flex flex-col glass-sheet vellum-texture p-6 rounded-2xl border border-outline-variant/30 hover:border-tertiary/40 transition-all duration-500">
<div className="flex justify-between items-start mb-8">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-mono-ui text-[10px] uppercase tracking-widest text-on-surface-variant/50">Curated Workspace</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Future of Synthesis</h3>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-tertiary transition-colors cursor-pointer">more_vert</span>
</div>
{/* Visual Preview Area */}
<div className="flex-1 relative mb-8 rounded-xl overflow-hidden bg-surface-container shadow-inner min-h-[120px]">
<img alt="Concept Art" className="w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="A minimalist digital artwork representing abstract data flow and synthesis. Flowing silk-like gradients in soft lavender, smoky lilac, and ivory intertwine in a serene, weightless environment. The lighting is ethereal and diffused, creating a high-end editorial feel that mimics the expansion of thought. The overall mood is intellectually clear and calm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3cbQ_5t4QfgP3jTIX-qoKfcDEfD7c-tVPxtBWZM6X1rpnuqCEa6JslG8p3BjkaxBCUxlZaoMoeqG1ZlMOgVj7lWdrcKq9zoUS5UVU81RrtTX8qMSBA11Lm64MGLmZ9SZajwMbCqczLfa-3_kYcMVbuYJmazpD-nBSjKr9OAxNmN_AFVKXOoN7zHNCbnSpDu7GRkBqZ5QyftQnHS5mBt8Rz1BnxbmYyrsxCXCOHwT3w_qwHmLID3li1iwwTh5pDX3mcagR8lcqsAM"/>
<div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-surface-container via-transparent">
<p className="font-label-caps text-[10px] text-tertiary-fixed-dim bg-tertiary/80 px-2 py-0.5 rounded w-fit">Visual Constellation</p>
</div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[20px]">lock_open</span>
<span className="font-label-caps text-[11px] text-on-surface-variant/60 uppercase">Team Shared</span>
</div>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/40">112 Nodes</span>
</div>
</div>
{/* Collection Card 3: Collaborative AI */}
<div className="group flex flex-col glass-sheet vellum-texture p-6 rounded-2xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-500">
<div className="flex justify-between items-start mb-8">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="font-mono-ui text-[10px] uppercase tracking-widest text-on-surface-variant/50">Internal Repository</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Collaborative AI</h3>
</div>
<span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-primary transition-colors cursor-pointer">more_vert</span>
</div>
{/* Intelligence Node List */}
<div className="flex-1 space-y-2 mb-8">
<div className="flex items-center justify-between font-mono-ui text-mono-ui py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant/80">Theory of Mind Protocols</span>
<span className="text-primary-fixed-dim">98% Match</span>
</div>
<div className="flex items-center justify-between font-mono-ui text-mono-ui py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant/80">Recursive Learning Models</span>
<span className="text-primary-fixed-dim">84% Match</span>
</div>
<div className="flex items-center justify-between font-mono-ui text-mono-ui py-2 border-b border-outline-variant/10">
<span className="text-on-surface-variant/80">Ethical Frameworks v4.2</span>
<span className="text-primary-fixed-dim">100% Match</span>
</div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
<div className="flex -space-x-2">
<img alt="User 3" className="w-8 h-8 rounded-full border-2 border-surface-bright object-cover" data-alt="A portrait of a male data scientist with a modern and clean aesthetic. He is looking off-camera with a neutral expression. He wears a charcoal grey merino wool sweater. The lighting is cinematic and high-key, set against a background of a minimalist architectural interior with clean lines and soft shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1vNry4TmEwk4mneURVVVDiqy1vNuJjdYmDm8D5uv2xA6MZs0Fuofdid30IGfH6s9dGDvx8ZAzjhLDgeoOMhKk1uqUQ9U1SFeLtFpSzxjF7dKa6kL12bAnKaSZu9rcGzyKr2mThRA1S99tHgn5EDPdhTYDimejeaS1aMBevLqntTvFfE98oOLo3KQh250ggVyAbdiUyn0itcTJ_hAM4CEk4c1GE0n6iPPHideNvSgdiMZbStJ0G3brZXjr2MA21fw1pshvwoA_WWw"/>
</div>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/40">18 Sources Linked</span>
</div>
</div>
{/* Add New Collection Placeholder */}
<div className="flex flex-col items-center justify-center glass-sheet p-6 rounded-2xl border-2 border-dashed border-outline-variant/40 hover:border-secondary/40 hover:bg-surface-container-low transition-all cursor-pointer group min-h-[340px]">
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-110 group-hover:text-secondary transition-all">
<span className="material-symbols-outlined text-[32px]">add_box</span>
</div>
<span className="mt-4 font-label-caps text-label-caps text-on-surface-variant/60 uppercase tracking-widest">Add Semantic Board</span>
</div>
</div>
{/* Horizontal Section: Pinned Explorations */}
<section className="mt-20">
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline-md text-headline-md text-on-surface">Pinned Explorations</h2>
<a className="font-label-caps text-label-caps text-secondary flex items-center gap-1 hover:underline" href="#">
                        View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<div className="flex overflow-x-auto gap-gutter-grid pb-6 no-scrollbar">
{/* Pin Card 1 */}
<div className="min-w-[320px] bg-surface-container-low border border-outline-variant/20 rounded-xl p-5 hover:bg-white transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary" style={{ "fontVariationSettings": "'FILL' 1" }}>push_pin</span>
<span className="font-mono-ui text-[11px] text-on-surface-variant/40 uppercase tracking-tighter">Updated 2h ago</span>
</div>
<h4 className="font-label-caps text-body-md font-bold text-on-surface mb-2">HCI Research: Tactile AI Interfaces</h4>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/60">Synthesis Studio</span>
</div>
</div>
{/* Pin Card 2 */}
<div className="min-w-[320px] bg-surface-container-low border border-outline-variant/20 rounded-xl p-5 hover:bg-white transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary" style={{ "fontVariationSettings": "'FILL' 1" }}>push_pin</span>
<span className="font-mono-ui text-[11px] text-on-surface-variant/40 uppercase tracking-tighter">Updated 1d ago</span>
</div>
<h4 className="font-label-caps text-body-md font-bold text-on-surface mb-2">Scandinavian Minimalist Architectures</h4>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/60">Source Hub</span>
</div>
</div>
{/* Pin Card 3 */}
<div className="min-w-[320px] bg-surface-container-low border border-outline-variant/20 rounded-xl p-5 hover:bg-white transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary" style={{ "fontVariationSettings": "'FILL' 1" }}>push_pin</span>
<span className="font-mono-ui text-[11px] text-on-surface-variant/40 uppercase tracking-tighter">Updated 3d ago</span>
</div>
<h4 className="font-label-caps text-body-md font-bold text-on-surface mb-2">Large Language Model Optimization</h4>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/60">Synthesis Studio</span>
</div>
</div>
</div>
</section>
</div>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 dark:bg-surface-dim/40 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-full px-8 py-4 w-auto min-w-[420px]">
<div className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined">terminal</span>
<span className="font-mono-ui text-[10px] uppercase tracking-widest mt-1">Command</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined">inventory</span>
<span className="font-mono-ui text-[10px] uppercase tracking-widest mt-1">Sources</span>
</div>
<div className="flex flex-col items-center text-primary dark:text-primary-fixed bg-primary-container/30 rounded-full px-4 py-1 scale-105 duration-200">
<span className="material-symbols-outlined">visibility</span>
<span className="font-mono-ui text-[10px] uppercase tracking-widest mt-1">Context</span>
</div>
<div className="flex flex-col items-center text-on-secondary-container/60 dark:text-on-secondary-container/40 hover:bg-white/10 transition-all cursor-pointer">
<span className="material-symbols-outlined">filter_list</span>
<span className="font-mono-ui text-[10px] uppercase tracking-widest mt-1">Filter</span>
</div>
</nav>
{/* Footer */}
<footer className="bg-surface dark:bg-background border-t border-surface-variant w-full py-12 px-margin-page">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
<div className="flex flex-col gap-2">
<span className="font-headline-lg text-headline-lg">Contextra</span>
<p className="font-body-md text-on-surface-variant">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
</div>
<div className="flex gap-8">
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Philosophy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Security</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">API</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Privacy</a>
</div>
</div>
</footer>

    </div>
  );
}
