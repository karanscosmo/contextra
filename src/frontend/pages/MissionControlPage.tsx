import React, { useState, useEffect } from 'react';
import { useRouter } from '../App';
import { auth } from '../lib/firebase';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Logo';

export default function MissionControlPage() {
  const { navigate } = useRouter();
  const [stats, setStats] = useState({ nodes: 1242, edges: 4892, entropy: 0.42 });
  const [userName, setUserName] = useState('Researcher');

  useEffect(() => {
    // Fetch stats from backend API
    fetch('/api/graph/stats')
      .then(res => res.json())
      .then(data => {
        if (data && data.nodes) {
          setStats({
            nodes: data.nodes,
            edges: data.edges,
            entropy: data.entropy
          });
        }
      })
      .catch(err => console.warn('Backend API offline or unavailable, using mock stats:', err));

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || user.email?.split('@')[0] || 'Researcher');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="bg-surface text-on-surface w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `body {
    background-color: #fcf9f1;
    -webkit-font-smoothing: antialiased
    }
.paper-grain {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuD-7Ke6mqFK5ueNkE3lQShvfEj82kiUwAVyNHrAHTZMMAIsduvXgIGlcNaX14OYs1mSsa9vQPtyMS4YmPAZe0nrluhOWMtGJcFXBt9wu7iQ9tWjx-GQJqR71DvMdPI-e3s07LIENiSOlvE0tVip7hzzPqNaI1eJdqBGcVEvluW8cushmRlhBKcVZi8eJ1woY47aBs7CMFZ5QrTZNdlEITevzryOZSygU0PcaFCZd_8cLl3qO7OuwRk2RNwNGxOFn8ZwRBFcRBcVWKc);
    background-repeat: repeat
    }
.glass-edge {
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)
    }` }} />
      
      <Header activeTab="control" />
      <Sidebar activePage="canvas" />

      {/* Main Canvas */}
      <main className="md:pl-64 min-h-screen pb-40">
        <div className="max-w-[1280px] mx-auto px-margin-page pt-12">
          {/* Hero Section */}
          <section className="mb-16">
            <p className="font-label-caps text-label-caps text-secondary mb-2">INTELLIGENCE OPERATING SYSTEM</p>
            <h2 className="font-display-hero text-display-hero text-on-surface mb-4">Welcome back, {userName}</h2>
            <div className="h-px w-24 bg-outline-variant mb-8"></div>
          </section>

          {/* Graph stats banner */}
          <div className="grid grid-cols-3 gap-6 mb-12 bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-surface-variant/40 max-w-3xl">
            <div>
              <p className="font-mono-ui text-[10px] text-on-surface-variant/60 uppercase">Indexed Nodes</p>
              <h4 className="font-headline-md text-headline-md text-secondary font-bold">{stats.nodes}</h4>
            </div>
            <div>
              <p className="font-mono-ui text-[10px] text-on-surface-variant/60 uppercase">Semantic Edges</p>
              <h4 className="font-headline-md text-headline-md text-secondary font-bold">{stats.edges}</h4>
            </div>
            <div>
              <p className="font-mono-ui text-[10px] text-on-surface-variant/60 uppercase">Entropy Index</p>
              <h4 className="font-headline-md text-headline-md text-secondary font-bold">{stats.entropy}</h4>
            </div>
          </div>

          {/* Intelligence Canvas Grid */}
          <div className="grid grid-cols-12 gap-gutter-grid">
            {/* Continue Workspace */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-gutter-grid">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant/60">CONTINUE WORKSPACE</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-grid">
                {/* Card 1 */}
                <div onClick={() => navigate('/research-canvas')} className="group relative bg-white border border-surface-variant p-8 rounded-2xl paper-grain hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">north_east</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-mono-ui text-mono-ui uppercase">Active Thread</span>
                  </div>
                  <h4 className="font-headline-md text-body-lg font-bold text-on-surface mb-4">Neural Architecture in Scandinavian Design</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">Synthesizing the relationship between organic forms and neuro-aesthetic responses.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img alt="Researcher" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA6QdmylAcIO_AxdmTLwDTCnsmt8xZd8BRqNrSmPxA48mSfBI_ItP-XRvSyqrGTA7SaEivOS3_6eVgh9dIjsW_4wAW33ArJgdMaEZlJwsPfhAt7pO246HVhFD61liSQZp2sOcwpLyhiJ5cD-XKBUD0iqBG8uhAP5QKkG-vJtgST2mHKCet4aC9jRnFReQneQtBzza287ZPq_eUeXB7sOFZVt9B50FX5kxDf92dOyqIhvyCsUJjZ56tGSQxEDJ24695PXrAncM7hEs"/>
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center border-2 border-white text-[10px] font-bold">AI</div>
                    </div>
                    <span className="font-mono-ui text-mono-ui text-on-surface-variant/40">12 Sources Linked</span>
                  </div>
                </div>
                {/* Card 2 */}
                <div onClick={() => navigate('/research-canvas')} className="group relative bg-surface-container-high border border-surface-variant p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-outline"></span>
                    <span className="font-mono-ui text-mono-ui uppercase">Paused</span>
                  </div>
                  <h4 className="font-headline-md text-body-lg font-bold text-on-surface mb-4">The Quiet Luxury of Typography</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">Exploring the tactile history of serif fonts in luxury editorial branding.</p>
                  <div className="flex items-center justify-between">
                    <div className="font-mono-ui text-mono-ui bg-white/50 px-3 py-1 rounded-full">Archive: Design Theory</div>
                    <span className="font-mono-ui text-mono-ui text-on-surface-variant/40">24 Oct</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligence Recommendations */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-gutter-grid">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant/60">INTELLIGENCE VECTORS</h3>
              <div className="bg-tertiary-container/30 border border-secondary-container/20 p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-tertiary mb-4">auto_awesome</span>
                  <h4 className="font-headline-md text-headline-md text-on-tertiary-container mb-4">Semantic Bridge Detected</h4>
                  <p className="font-body-md text-xs text-on-tertiary-container/80 mb-6">Your recent search on \'Mindfulness\' overlaps 82% with your \'Acoustic Ecology\' workspace.</p>
                  <button onClick={() => navigate('/synthesis')} className="w-full bg-white text-tertiary py-3 rounded-xl font-label-caps text-xs border border-tertiary-container hover:shadow-lg transition-all">Review Synthesis</button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl"></div>
              </div>
              <div className="bg-surface-container p-6 rounded-2xl border border-surface-variant">
                <h5 className="font-label-caps text-label-caps mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Emerging Clusters
                </h5>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between cursor-pointer hover:text-primary" onClick={() => navigate('/search')}>
                    <span className="font-body-md text-sm">Bio-Digital Materialism</span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">NEW</span>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer hover:text-primary" onClick={() => navigate('/search')}>
                    <span className="font-body-md text-sm">Ethical Synthesis</span>
                    <span className="text-on-surface-variant/40 text-[10px] font-mono-ui">14 citations</span>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer hover:text-primary" onClick={() => navigate('/search')}>
                    <span className="font-body-md text-sm">Kinetic Typography</span>
                    <span className="text-on-surface-variant/40 text-[10px] font-mono-ui">Updating...</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recent Discoveries */}
            <div className="col-span-12 mt-12">
              <div className="flex justify-between items-end mb-8">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant/60">RECENT DISCOVERIES</h3>
                <a className="font-label-caps text-label-caps text-primary hover:underline transition-all cursor-pointer" onClick={() => navigate('/collections')}>View Archive</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-grid">
                {/* Source DNA Card 1 */}
                <div onClick={() => navigate('/source-detail')} className="group bg-white p-6 rounded-xl border border-surface-variant paper-grain hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <img alt="Discovery" className="w-full h-32 object-cover rounded mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYPexhLEZ9AqFWLwloLsCnp6-FkkxpKMNKQsEFZ0dFUq647_6rHgHipqBMALQodMQhAxoWPynyYnYO2RIybk5AX06Ghoin_gdFtGZMqG5lQBCwzqigUmqZxnnDR9tSt-FNMIoohZKlmXdYCwyWenO4chpEVWo7fc5keWFwBc4iTu9Ltih4h_r-QKFZ-LwTNwa653BmWyoy3DBz2gtdWSVyypv8InZ2wHOI8oD-_QHW-ffhAceVZ7kwovGCuxSVg-SqxqKZdb48IYI"/>
                  <p className="font-mono-ui text-[10px] text-on-surface-variant/40 mb-2 uppercase tracking-tighter">SOURCE #4812 • PDF</p>
                  <h5 className="font-body-md font-semibold text-on-surface leading-tight mb-4 text-sm">Formalism and Function in Modern Concrete</h5>
                  <div className="flex gap-1">
                    <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-secondary"></div>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] font-mono-ui text-secondary">85% Relevance</p>
                </div>
                {/* Source DNA Card 2 */}
                <div onClick={() => navigate('/source-detail')} className="group bg-white p-6 rounded-xl border border-surface-variant paper-grain hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <img alt="Discovery" className="w-full h-32 object-cover rounded mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgA7TQbbKXcNAewnWNMHS8HN0xdY_ABL8xe2cm4dl2Gaa66Gye09OmEFe8hCokLQuTiWbktJJMb5gE77PIzLYmDvRf_1MQ-ct9M_bL1MZ-_XxGLX7ogw-fBhM53riGq4dvyNZO3Vv_SGKbQMBvfnBa5kt3zdGscEDQmMfoqDkV-kOeQvgDRyRheNovWkbwy-MGAlHGkwvunJCuz_RXR1TM6aeiSTJH00FWjk9s8z6bnsOHY022S1_-CmH_ojJpnZIPdEimjoOst7E"/>
                  <p className="font-mono-ui text-[10px] text-on-surface-variant/40 mb-2 uppercase tracking-tighter">SOURCE #4813 • WEB</p>
                  <h5 className="font-body-md font-semibold text-on-surface leading-tight mb-4 text-sm">Japanese Print Precision and Digital UI</h5>
                  <div className="flex gap-1">
                    <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-secondary"></div>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] font-mono-ui text-secondary">92% Relevance</p>
                </div>
                {/* Source DNA Card 3 */}
                <div onClick={() => navigate('/source-detail')} className="group bg-white p-6 rounded-xl border border-surface-variant paper-grain hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <div className="w-full h-32 bg-surface-container-high rounded mb-4 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant/20 text-4xl">article</span>
                  </div>
                  <p className="font-mono-ui text-[10px] text-on-surface-variant/40 mb-2 uppercase tracking-tighter">SOURCE #4814 • TXT</p>
                  <h5 className="font-body-md font-semibold text-on-surface leading-tight mb-4 text-sm">Transcription: Dialogue on Ethics</h5>
                  <div className="flex gap-1">
                    <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                      <div className="w-[64%] h-full bg-secondary"></div>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] font-mono-ui text-secondary">64% Relevance</p>
                </div>
                {/* Source DNA Card 4 */}
                <div onClick={() => navigate('/source-detail')} className="group bg-white p-6 rounded-xl border border-surface-variant paper-grain hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <img alt="Discovery" className="w-full h-32 object-cover rounded mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtsb02RB2L-GyH-l6OouEEOaywXlLgo-WgzgCNz2aPp3R7kHesiXU4zM-m22APT2NQHS8y4AsmXT0QokMmbnHtME8X1IfczUp6YBS_T0zB07Xr79QNfk6s6q1vZIxQNNYKQGvmC2h0TvAo7YBPqGGrtQwO0FIS_AhtLuw0Fr0enD9RRIa0DeDtGmtd-xG3PENEBks2ME3UUcxB1k2h41ciSCqrqYvVmWcCpXOWoDIP2qb2eRCqZYGSjmQ-BXAkaL9nVRAnpASMR-w"/>
                  <p className="font-mono-ui text-[10px] text-on-surface-variant/40 mb-2 uppercase tracking-tighter">SOURCE #4815 • DATA</p>
                  <h5 className="font-body-md font-semibold text-on-surface leading-tight mb-4 text-sm">Market Trends in Contextual AI</h5>
                  <div className="flex gap-1">
                    <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                      <div className="w-[48%] h-full bg-secondary"></div>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] font-mono-ui text-secondary">48% Relevance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Bottom Command Bar */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-between gap-gutter-grid items-center bg-surface-bright/40 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-full px-8 py-4 w-auto min-w-[420px] glass-edge">
        <div onClick={() => navigate('/copilot')} className="flex flex-col items-center text-primary bg-primary-container/30 rounded-full px-4 py-1 scale-105 active:scale-95 duration-200 cursor-pointer">
          <span className="material-symbols-outlined">terminal</span>
          <span className="font-mono-ui text-mono-ui">Command</span>
        </div>
        <div onClick={() => navigate('/ingestion')} className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer px-4 py-1 rounded-full">
          <span className="material-symbols-outlined">inventory</span>
          <span className="font-mono-ui text-mono-ui">Sources</span>
        </div>
        <div onClick={() => navigate('/knowledge')} className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer px-4 py-1 rounded-full">
          <span className="material-symbols-outlined">visibility</span>
          <span className="font-mono-ui text-mono-ui">Context</span>
        </div>
        <div onClick={() => navigate('/settings')} className="flex flex-col items-center text-on-secondary-container/60 hover:bg-white/10 transition-all cursor-pointer px-4 py-1 rounded-full">
          <span className="material-symbols-outlined">filter_list</span>
          <span className="font-mono-ui text-mono-ui">Filter</span>
        </div>
      </nav>

      {/* Footer */}
      <footer className="md:pl-64 bg-surface border-t border-surface-variant w-full py-12 px-margin-page">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto opacity-80 hover:opacity-100 transition-opacity">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <Logo size="sm" />
              <div className="font-headline-lg text-headline-lg text-primary leading-none">Contextra</div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">© 2024 Contextra Intelligence Systems. Designed for Synthesis.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/about')}>Philosophy</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/docs')}>Docs</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/pricing')}>Pricing</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/contact')}>Contact</a>
          </div>
        </div>
      </footer>

      {/* Knowledge Constellation Decorator */}
      <div className="fixed top-1/4 right-0 pointer-events-none opacity-20">
        <svg height="400" viewBox="0 0 400 400" width="400">
          <circle cx="200" cy="200" fill="#5e578f" r="1"></circle>
          <line stroke="#5e578f" strokeWidth="0.5" x1="200" x2="350" y1="200" y2="100"></line>
          <line stroke="#5e578f" strokeWidth="0.5" x1="200" x2="100" y1="200" y2="300"></line>
          <line stroke="#5e578f" strokeWidth="0.5" x1="200" x2="250" y1="200" y2="350"></line>
          <circle className="animate-pulse" cx="350" cy="100" fill="#5e578f" r="3"></circle>
          <circle cx="100" cy="300" fill="#5e578f" r="2"></circle>
          <circle cx="250" cy="350" fill="#5e578f" r="4"></circle>
        </svg>
      </div>
    </div>
  );
}
