import React from 'react';
import Logo from './Logo';
import { useRouter } from '../App';

interface SidebarProps {
  activePage: 'canvas' | 'constellation' | 'sources' | 'synthesis' | 'timeline' | 'none';
}

export default function Sidebar({ activePage }: SidebarProps) {
  const { navigate } = useRouter();

  const menuItems = [
    { id: 'canvas', label: 'Intelligence Canvas', path: '/mission-control', icon: 'space_dashboard' },
    { id: 'constellation', label: 'Knowledge Constellation', path: '/knowledge', icon: 'hub' },
    { id: 'sources', label: 'Source Hub', path: '/ingestion', icon: 'folder_open' },
    { id: 'synthesis', label: 'Synthesis Studio', path: '/synthesis', icon: 'layers' },
    { id: 'timeline', label: 'Memory Timeline', path: '/activity', icon: 'history' },
  ];

  return (
    <aside className="hidden md:flex flex-col h-full py-margin-page px-6 bg-surface-container-low h-screen w-64 fixed left-0 top-0 z-30 border-r border-outline-variant/30">
      <div className="mb-12">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/mission-control')}>
          <Logo size="sm" animate={true} />
          <h1 className="font-headline-md text-headline-md text-on-surface">Contextra</h1>
        </div>
        <p className="font-label-caps text-label-caps opacity-60 mt-1 uppercase tracking-widest text-[10px]">Vellum Workspace</p>
      </div>
      <nav className="flex flex-col gap-2 flex-grow">
        {menuItems.map(item => {
          const isActive = item.id === activePage;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                isActive
                  ? 'text-primary border-r-2 border-primary font-bold bg-surface-variant/50'
                  : 'text-on-surface-variant/70 hover:bg-surface-variant/50 hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-caps text-label-caps">{item.label}</span>
            </button>
          );
        })}
      </nav>
      <button onClick={() => navigate('/onboarding')} className="mt-auto bg-primary text-on-primary py-4 px-6 rounded-xl font-label-caps text-label-caps tracking-widest hover:bg-on-surface transition-colors">
        New Synthesis
      </button>
    </aside>
  );
}
