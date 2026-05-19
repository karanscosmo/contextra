import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function KnowledgeConstellationPage() {
  return (
    <div className="bg-white/60 backdrop-blur-sm text-on-surface font-body-md overflow-hidden selection:bg-secondary-container w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24
    }
.vellum-texture {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuBYybHTO-hV8O6DjrfNWiqpsciUB806zWieY58vy1dwLmdNPVi6u4E4CUH9y8C6O3b_Yu-bP3vQbdcrVfDXYdQ_1F62XLfGY_In2LSTbGOhddkuJyGbMWIsBo816tEXkW630wK9sJYnPztO7HvI8zhwf_dBFjoRNaJdjOBrtt5ju6Ah708mCjY3OK9PiybngBXO62jtZxVqRFNKeJawUZ3rQJCkPRuG6RCjCkcGU20ZipD9GYvv12bZE5a43R_XwS2g7G3pC_BO4bg);
    background-repeat: repeat
    }
.constellation-gradient {
    background: radial-gradient(circle at center, rgba(229, 222, 255, 0.15) 0%, rgba(252, 249, 241, 0) 70%)
    }
.glass-edge {
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4)
    }

        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
        }
    ` }} />
      
      <Header />
      <Sidebar activePage="constellation" />
{/* Intelligence Canvas */}
<main className="ml-64 flex-grow relative vellum-texture constellation-gradient overflow-hidden">
{/* Constellation Background Elements */}
<div className="absolute inset-0 z-0 opacity-40">
<svg className="absolute top-0 left-0" height="100%" width="100%">
<defs>
<radialgradient cx="50%" cy="50%" id="dotGradient" r="50%">
<stop offset="0%" stop-color="#5e578f" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#5e578f" stop-opacity="0"></stop>
</radialgradient>
</defs>
<line stroke="#5e578f" strokeDasharray="4 4" strokeWidth="0.5" x1="20%" x2="45%" y1="30%" y2="50%"></line>
<line stroke="#5e578f" strokeDasharray="4 4" strokeWidth="0.5" x1="45%" x2="70%" y1="50%" y2="25%"></line>
<line stroke="#5e578f" strokeDasharray="4 4" strokeWidth="0.5" x1="45%" x2="60%" y1="50%" y2="75%"></line>
<line stroke="#5e578f" strokeDasharray="4 4" strokeWidth="0.5" x1="70%" x2="85%" y1="25%" y2="40%"></line>
<circle cx="20%" cy="30%" fill="#5e578f" r="2"></circle>
<circle cx="70%" cy="25%" fill="#5e578f" r="2"></circle>
<circle cx="60%" cy="75%" fill="#5e578f" r="2"></circle>
</svg>
</div>
{/* Header Content */}
<div className="max-w-[1280px] mx-auto px-margin-page pt-16 relative z-10">
<div className="flex flex-col gap-2 mb-12">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Knowledge Constellation</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant/60 max-w-2xl">Exploring the semantic resonance between discrete intelligence vectors. Nodes represent synthesized insights; threads represent logical derivations.</p>
</div>
{/* Bento Grid of Knowledge Nodes */}
<div className="grid grid-cols-12 gap-gutter-grid relative">
{/* Central Node */}
<div className="col-span-12 lg:col-span-6 bg-surface-container-highest/40 backdrop-blur-xl border border-outline-variant/30 rounded-[2rem] p-8 glass-edge group hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-tertiary/5">
<div className="flex items-start justify-between mb-6">
<span className="font-mono-ui text-mono-ui bg-secondary-container px-3 py-1 rounded-full text-on-secondary-container">CORE_VECTOR_01</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></div>
<div className="w-1.5 h-1.5 rounded-full bg-tertiary/40"></div>
</div>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Neural Architecture of Abstract Reasoning</h3>
<p className="text-on-surface-variant font-body-md leading-relaxed mb-6">Synthesis reveals a structural parallel between large language model attention mechanisms and mammalian prefrontal cortex activation patterns during novel task solving.</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden bg-primary-fixed">
<img alt="" data-alt="A macro portrait of a person with calm, focused expression, softly lit with cool studio lighting, against a minimalist ivory background, echoing high-end editorial photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOP28l2XVSfYpkSPeQRzj9AtqtpfJQJ06YfZg8M2YBjdAnrD4qF_dTJr5UB-cGac8bSdaMyLulR0uRcwWU_V40rf0cIbXQu_07VtXNcfUoCpwNcO47Dt9J8P8TPft9CLg_nPm6t3ba65Z87phzxHCicvQM9GrCXcisUkKvbFUobsj11Ay16X50SPqbEEL_uzdfYNEmz_6PgkQ66NQVvTdY0J7zRb3p_TRxhPjmTC3ecgj5vdLdFbqViLmRgpwLcsJDnxPw7eigtLg"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden bg-primary-fixed">
<img alt="" data-alt="A profile view of a researcher in a modern, glass-walled laboratory setting, bathed in soft, diffused natural light with a sophisticated and serene mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC76lbVWk60OTnpoVzrijM6G2QmwloRe1DH20uWqD2k58O1orJHxEaaSD0Cdm95GBYQikMynpC7Za8vHJb_cwE_0U1QAlhOqYRxo5Lq6rNnre2A_x4xhNoKyQC_UXVSAFA62w_3ztmTWzaDauGU7367vVrONDNM2HBWW2pCAKtja8S9rM00AE5uQaQ0h2YqzEHkN_dwM4SCp4iamJuWTkNRtEi7pXbqSyiZ8oIekNS97eRa2uzZy2ER9ZbsL6G1NtO32IZsSlFMwAo"/>
</div>
</div>
<span className="font-mono-ui text-mono-ui text-on-surface-variant/40">4 sources synthesized</span>
</div>
</div>
{/* Side Card 1: Source DNA */}
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-surface-bright/80 backdrop-blur-md border border-outline-variant/20 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="h-24 w-full bg-surface-container-high rounded-lg mb-4 overflow-hidden relative">
<img alt="" className="w-full h-full object-cover mix-blend-multiply opacity-60" data-alt="Abstract flow of digital purple and blue gradients, resembling silk in motion, creating a sense of fluid intelligence and serene technical sophistication." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhiG7emwe8clPlDz10hyXLP3mOQ7d1BmjOk7iK4KsSZKUwKFc_4BEoijOYlg-8tecSpl16j2r-XNBz2bs2GAOZ8nr9Z71aWWQPfTYQSzoC3v-hYpkFY-llbFvxOgnEGyMh7_gGyz6CF_jBcBxPLxOexDxU9czqF9JuyM_TOL0lxGiBJPj--Sv1sLRW_wkeyZkFY-Xpx5ytmH-doUwuXJTplslBTwo8Dqph5RyIpQzH1KsRBYi0exv5nt2dO517OQYfVMeRDrzY6Jk"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-bright to-transparent"></div>
</div>
<span className="font-mono-ui text-[11px] text-tertiary-fixed-dim bg-on-tertiary-fixed px-2 py-0.5 rounded-sm uppercase tracking-tighter">Source_DNA</span>
<h4 className="font-headline-md text-[18px] leading-tight mt-3 mb-2">Cognitive Load &amp; Synthesis</h4>
<p className="font-body-md text-[14px] text-on-surface-variant/80">Analysis of information density across 12 whitepapers.</p>
<div className="mt-4 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
<span className="material-symbols-outlined text-secondary" data-icon="visibility">visibility</span>
<span className="font-label-caps text-label-caps text-on-surface-variant/50">92% Match</span>
</div>
</div>
{/* Side Card 2: Knowledge Node */}
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white/40 backdrop-blur-md border border-outline-variant/20 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="auto_awesome">auto_awesome</span>
</div>
<h4 className="font-headline-md text-[18px] leading-tight mb-2">Emergent Patterns</h4>
<p className="font-body-md text-[14px] text-on-surface-variant/80">Identifying non-linear correlations in behavioral datasets from Q3 2023.</p>
<div className="mt-4 h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary w-3/4 rounded-full"></div>
</div>
<p className="font-mono-ui text-[10px] mt-2 text-on-surface-variant/40">LATENT_RELEVANCE: 0.78</p>
</div>
{/* Large Bottom Cluster */}
<div className="col-span-12 grid grid-cols-4 gap-gutter-grid mt-4">
<div className="col-span-4 lg:col-span-3 bg-surface-container/30 border border-outline-variant/10 rounded-[1.5rem] p-6 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-shrink-0 relative w-48 h-48">
<div className="absolute inset-0 rounded-full border border-dashed border-tertiary/30 animate-spin-slow"></div>
<div className="absolute inset-4 rounded-full border border-secondary/20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-headline-md text-headline-md text-on-surface">84%</span>
</div>
</div>
<div>
<h3 className="font-headline-md text-headline-md mb-2">Synthesis Saturation</h3>
<p className="font-body-md text-on-surface-variant leading-relaxed">Your current constellation has reached a high level of semantic density. Contextra recommends branching into 'Cross-Domain Application' to avoid informational redundancy.</p>
<div className="flex gap-4 mt-6">
<button className="px-6 py-2 rounded-full bg-on-surface text-surface font-label-caps text-label-caps hover:bg-on-surface/90 transition-colors">Expand Galaxy</button>
<button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-colors">Export Map</button>
</div>
</div>
</div>
<div className="hidden lg:flex col-span-1 bg-surface-container-high/40 rounded-[1.5rem] p-6 flex-col justify-between items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="filter_vintage">filter_vintage</span>
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Ecosystem Health</p>
<span className="font-mono-ui text-mono-ui text-primary text-xl">OPTIMAL</span>
</div>
</div>
</div>
</div>
</main>
{/* Command Layer / Floating Source Dock */}
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-full px-8 py-4 w-auto min-w-[420px] transition-all hover:scale-105 active:scale-95 duration-200">
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
<span className="font-mono-ui text-mono-ui">Command</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1">
<span className="material-symbols-outlined" data-icon="inventory">inventory</span>
<span className="font-mono-ui text-mono-ui">Sources</span>
</button>
<button className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1">
<span className="material-symbols-outlined" data-icon="visibility" style={{ "fontVariationSettings": "'FILL' 1" }}>visibility</span>
<span className="font-mono-ui text-mono-ui">Context</span>
</button>
<button className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all px-4 py-1">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
<span className="font-mono-ui text-mono-ui">Filter</span>
</button>
</div>

{/* Background Decoration */}
<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-20">
<div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-secondary-fixed rounded-full blur-[120px]"></div>
<div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-tertiary-fixed rounded-full blur-[100px]"></div>
</div>


    </div>
  );
}
