import React, { useEffect } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

export default function NotFoundPage() {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Contextra - Page Not Found';
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex items-center justify-center py-20 px-6 text-center">
      <div className="max-w-md w-full space-y-8">
        <Logo size="lg" animate={true} className="mx-auto" />
        <div className="space-y-4">
          <h1 className="font-display-hero text-headline-lg font-bold text-on-surface">404</h1>
          <p className="font-mono-ui text-xs text-secondary uppercase tracking-widest">Dimension Conflict / Path Not Found</p>
          <p className="font-body-md text-on-surface-variant/80 max-w-sm mx-auto leading-relaxed">
            The workspace segment you are trying to access does not exist or has been sharded into a different vector dimension.
          </p>
        </div>
        <div className="pt-4">
          <button
            onClick={() => navigate('/mission-control')}
            className="px-8 py-4 bg-primary text-on-primary rounded-full font-label-caps text-xs hover:bg-on-surface transition-all shadow-lg shadow-primary/10 flex items-center gap-2 mx-auto"
          >
            Return to Canvas
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
