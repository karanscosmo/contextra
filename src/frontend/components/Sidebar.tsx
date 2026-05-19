import React from 'react';
import Logo from './Logo';
import { useRouter } from '../App';

interface SidebarProps {
  activePage: 'canvas' | 'constellation' | 'sources' | 'synthesis' | 'timeline' | 'none';
}

export default function Sidebar({ activePage }: SidebarProps) {
  const { navigate } = useRouter();

  const menuItems = [
    {
      id: 'canvas',
      label: 'Workspace',
      description: 'Your research hub',
      path: '/mission-control',
      icon: 'space_dashboard',
    },
    {
      id: 'constellation',
      label: 'Knowledge Map',
      description: 'Visualize connections',
      path: '/knowledge',
      icon: 'hub',
    },
    {
      id: 'sources',
      label: 'Upload & Files',
      description: 'Manage your sources',
      path: '/ingestion',
      icon: 'folder_open',
    },
    {
      id: 'synthesis',
      label: 'AI Insights',
      description: 'Generated summaries',
      path: '/synthesis',
      icon: 'auto_awesome',
    },
    {
      id: 'timeline',
      label: 'Activity',
      description: 'Recent actions',
      path: '/activity',
      icon: 'history',
    },
  ];

  return (
    <aside className="hidden md:flex flex-col h-full py-8 px-5 bg-white/80 backdrop-blur-xl h-screen w-64 fixed left-0 top-0 z-30 border-r border-outline-variant/20 shadow-sm">
      {/* Brand */}
      <div className="mb-10">
        <div
          className="flex items-center gap-3 cursor-pointer group mb-1"
          onClick={() => navigate('/mission-control')}
        >
          <Logo size="sm" animate={false} />
          <div>
            <h1 className="font-headline-md text-headline-md text-on-surface leading-none">Contextra</h1>
            <p className="font-label-caps text-[10px] text-secondary/70 uppercase tracking-widest mt-0.5">AI Research Platform</p>
          </div>
        </div>
      </div>

      {/* Nav label */}
      <p className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant/50 px-4 mb-3">Navigation</p>

      {/* Menu Items */}
      <nav className="flex flex-col gap-1 flex-grow">
        {menuItems.map(item => {
          const isActive = item.id === activePage;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              title={item.description}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                isActive
                  ? 'bg-secondary/10 text-secondary border border-secondary/20 shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container/60 hover:text-on-surface'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-colors ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant/60 group-hover:text-secondary'
                }`}
              >
                {item.icon}
              </span>
              <div>
                <span className={`block font-label-caps text-[12px] font-semibold tracking-wide ${isActive ? 'text-secondary' : ''}`}>
                  {item.label}
                </span>
                <span className="block text-[10px] text-on-surface-variant/50 font-body-md leading-tight">
                  {item.description}
                </span>
              </div>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-secondary" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="h-px bg-outline-variant/20 my-4" />

      {/* CTA */}
      <button
        onClick={() => navigate('/research-canvas')}
        className="w-full bg-secondary text-white py-3.5 px-6 rounded-xl font-label-caps text-[12px] tracking-wide hover:bg-secondary/90 transition-all shadow-md shadow-secondary/20 flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-[18px]">add</span>
        Start Research
      </button>

      {/* Settings shortcut */}
      <button
        onClick={() => navigate('/settings')}
        className="mt-3 w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-on-surface-variant/60 hover:text-on-surface hover:bg-surface-container/40 transition-all text-[12px] font-label-caps"
      >
        <span className="material-symbols-outlined text-[18px]">settings</span>
        Settings
      </button>
    </aside>
  );
}
