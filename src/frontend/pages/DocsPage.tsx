import React, { useState, useEffect } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

export default function DocsPage() {
  const { navigate } = useRouter();
  const [activeSection, setActiveSection] = useState('getting-started');

  useEffect(() => {
    document.title = 'Contextra - Documentation';
  }, []);

  const docSections = [
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'semantic-routing', label: 'Semantic AI Routing' },
    { id: 'agent-orchestration', label: 'Agent Orchestration' },
    { id: 'api-reference', label: 'API Reference' },
  ];

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen w-full relative pb-32">
      {/* TopAppBar */}
      <nav className="bg-surface/60 backdrop-blur-2xl text-primary font-headline-md docked top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full border-b border-outline-variant/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/landing')}>
          <Logo size="xs" />
          <div className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</div>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-label-caps">
          <a onClick={() => navigate('/about')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">About</a>
          <a onClick={() => navigate('/pricing')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">Pricing</a>
          <a onClick={() => navigate('/docs')} className="text-primary font-bold hover:text-primary transition-colors cursor-pointer">Docs</a>
          <a onClick={() => navigate('/contact')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/login')} className="px-4 py-2 text-xs font-label-caps border border-outline-variant/30 hover:border-primary rounded-full transition-colors">
            Sign In
          </button>
          <button onClick={() => navigate('/signup')} className="px-4 py-2 text-xs font-label-caps bg-primary text-on-primary rounded-full hover:bg-on-surface transition-colors">
            Reserve Access
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-margin-page py-16 flex gap-12">
        {/* Doc Sidebar */}
        <aside className="w-64 shrink-0 hidden md:block space-y-6">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant/50 tracking-wider">DOCUMENTATION</h3>
          <nav className="space-y-1">
            {docSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-label-caps transition-all ${activeSection === sec.id ? 'bg-surface-variant text-primary font-bold' : 'text-on-surface-variant/70 hover:bg-surface-variant/30'}`}
              >
                {sec.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Doc Body */}
        <main className="flex-grow max-w-3xl space-y-12">
          {activeSection === 'getting-started' && (
            <section className="space-y-6">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Getting Started</h1>
              <p className="font-body-lg text-on-surface-variant/80 leading-relaxed">
                Welcome to Contextra, the Semantic Intelligence Operating System. Contextra organizes files, knowledge graphs, and research notes into a spatial interface.
              </p>
              <h2 className="font-headline-md text-headline-md text-on-surface pt-4">Workspace Initiation</h2>
              <p className="font-body-md text-on-surface-variant/80 leading-relaxed">
                To begin, establish an account and initialize a workspace. From there, ingest your primary documents (PDFs, URLs, or markdown notes) using the Ingestion Hub.
              </p>
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
                <h4 className="font-mono-ui text-mono-ui text-secondary uppercase mb-2">CLI Initialization</h4>
                <pre className="font-mono-ui text-xs text-on-surface-variant bg-surface p-4 rounded-xl overflow-x-auto">
                  npm install -g @contextra/sdk<br/>
                  contextra init --token &lt;YOUR_API_TOKEN&gt;
                </pre>
              </div>
            </section>
          )}

          {activeSection === 'semantic-routing' && (
            <section className="space-y-6">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Semantic AI Routing</h1>
              <p className="font-body-lg text-on-surface-variant/80 leading-relaxed">
                Contextra automatically routes reasoning queries across leading language models (Gemini, Claude, GPT) to optimize latency, cost, and factual grounding accuracy.
              </p>
              <h2 className="font-headline-md text-headline-md text-on-surface pt-4">Configuring Thresholds</h2>
              <p className="font-body-md text-on-surface-variant/80 leading-relaxed">
                Adjust the Relevance Threshold parameter in your settings dashboard to filter out low-confidence connections and reduce noise.
              </p>
            </section>
          )}

          {activeSection === 'agent-orchestration' && (
            <section className="space-y-6">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Agent Orchestration</h1>
              <p className="font-body-lg text-on-surface-variant/80 leading-relaxed">
                Deploy autonomous agents that continuously trace, catalog, and query relevant literature databases on the web based on your canvas goals.
              </p>
              <h2 className="font-headline-md text-headline-md text-on-surface pt-4">Agent Spawning Schema</h2>
              <pre className="font-mono-ui text-xs text-on-surface-variant bg-surface-container-low border border-outline-variant/30 p-6 rounded-2xl overflow-x-auto">
{`const res = await fetch('/api/agents/spawn', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    goal: 'Analyze Scandinavian lighting architecture trends',
    workspaceId: 'default_workspace'
  })
});`}
              </pre>
            </section>
          )}

          {activeSection === 'api-reference' && (
            <section className="space-y-6">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">API Reference</h1>
              <p className="font-body-lg text-on-surface-variant/80 leading-relaxed">
                Complete REST endpoints for programmatically query and updating the workspace index.
              </p>
              <div className="space-y-4">
                <div className="p-6 border border-surface-variant bg-surface-container-low rounded-2xl">
                  <span className="bg-secondary/15 text-secondary px-2.5 py-1 rounded text-[10px] font-mono-ui font-bold">POST /api/semantic/graph/query</span>
                  <p className="font-body-md text-sm text-on-surface-variant mt-3">Retrieve all nodes and edges corresponding to the workspace model.</p>
                </div>
                <div className="p-6 border border-surface-variant bg-surface-container-low rounded-2xl">
                  <span className="bg-primary/10 text-primary px-2.5 py-1 rounded text-[10px] font-mono-ui font-bold">POST /api/documents/ingest</span>
                  <p className="font-body-md text-sm text-on-surface-variant mt-3">Submit URL metadata and extract key semantic entities using Gemini.</p>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
