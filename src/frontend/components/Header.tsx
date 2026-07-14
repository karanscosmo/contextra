import React from 'react';
import Logo from './Logo';
import { useRouter } from '../App';

interface HeaderProps {
  title?: string;
  activeTab?: 'control' | 'analytics' | 'library' | 'none';
}

export default function Header({ title = 'Contextra', activeTab = 'none' }: HeaderProps) {
  const { navigate } = useRouter();

  return (
    <header className="bg-surface/60 backdrop-blur-2xl text-primary font-headline-md top-0 sticky z-40 flex justify-between items-center px-4 md:px-margin-page md:pl-[320px] py-unit h-16 w-full border-b border-outline-variant/10">
      <div className="flex md:hidden items-center gap-2 cursor-pointer" onClick={() => navigate('/mission-control')}>
        <Logo size="xs" animate={true} />
        <div className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</div>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8 items-center text-sm font-label-caps">
          <a 
            onClick={() => navigate('/mission-control')} 
            className={`cursor-pointer transition-colors hover:text-primary ${
              activeTab === 'control' ? 'text-primary font-bold' : 'text-on-surface-variant/60'
            }`}
          >
            Mission Control
          </a>
          <a 
            onClick={() => navigate('/insights')} 
            className={`cursor-pointer transition-colors hover:text-primary ${
              activeTab === 'analytics' ? 'text-primary font-bold' : 'text-on-surface-variant/60'
            }`}
          >
            Analytics
          </a>
          <a 
            onClick={() => navigate('/collections')} 
            className={`cursor-pointer transition-colors hover:text-primary ${
              activeTab === 'library' ? 'text-primary font-bold' : 'text-on-surface-variant/60'
            }`}
          >
            Library
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined scale-95 transition-all duration-200 cursor-pointer hover:text-primary" onClick={() => navigate('/settings')}>flare</span>
          <span className="material-symbols-outlined scale-95 transition-all duration-200 cursor-pointer hover:text-primary" onClick={() => navigate('/notifications')}>notifications_none</span>
          <span className="material-symbols-outlined scale-95 transition-all duration-200 cursor-pointer hover:text-primary" onClick={() => navigate('/profile')}>account_circle</span>
        </div>
      </div>
    </header>
  );
}
