import React, { useState } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

interface AlertItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  category: 'agent' | 'system' | 'sync';
  read: boolean;
}

export default function NotificationsPage() {
  const { navigate } = useRouter();
  const [alerts, setAlerts] = useState<AlertItem[]>([
    {
      id: '1',
      title: 'Semantic Alignment Complete',
      desc: 'Autonomous Agent Alpha successfully linked 42 documents regarding Scandinavian design principles to your current workspace canvas.',
      time: '12m ago',
      category: 'agent',
      read: false,
    },
    {
      id: '2',
      title: 'Database Synchronization',
      desc: 'Global workspace node index sync completed without conflicts. 1242 nodes loaded.',
      time: '1h ago',
      category: 'sync',
      read: false,
    },
    {
      id: '3',
      title: 'Storage Optimization Recommended',
      desc: 'Workspace storage is at 84% capacity. Consider archiving older paused threads to optimize canvas latency.',
      time: '3h ago',
      category: 'system',
      read: true,
    },
  ]);

  const markAllRead = () => {
    setAlerts(alerts.map(a => ({ ...a, read: true })));
  };

  const removeAlert = (id: string) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex w-full">
      {/* Side Navigation Bar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-lowest h-screen w-64 fixed left-0 top-0 z-30 flex flex-col py-margin-page px-6 border-r border-outline-variant/30">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-1 cursor-pointer" onClick={() => navigate('/mission-control')}>
            <Logo size="sm" />
            <span className="font-headline-md text-headline-md text-on-surface">Contextra</span>
          </div>
          <p className="font-mono-ui text-mono-ui opacity-50 uppercase tracking-widest text-[10px]">Vellum Workspace</p>
        </div>
        <nav className="flex-grow space-y-2">
          <button onClick={() => navigate('/mission-control')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
            <span className="material-symbols-outlined">space_dashboard</span>
            Intelligence Canvas
          </button>
          <button onClick={() => navigate('/knowledge')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
            <span className="material-symbols-outlined">hub</span>
            Knowledge Constellation
          </button>
          <button onClick={() => navigate('/ingestion')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
            <span className="material-symbols-outlined">folder_open</span>
            Source Hub
          </button>
          <button onClick={() => navigate('/profile')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
            <span className="material-symbols-outlined">account_circle</span>
            Researcher Profile
          </button>
          <button onClick={() => navigate('/settings')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
            <span className="material-symbols-outlined">settings</span>
            Workspace Settings
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-64 overflow-y-auto relative pb-32">
        <header className="bg-surface/60 backdrop-blur-2xl text-primary docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full border-b border-outline-variant/10">
          <div className="font-headline-md text-headline-md tracking-tighter text-on-surface">Intelligence Feed</div>
          <div className="flex items-center gap-4">
            <button onClick={markAllRead} className="px-4 py-2 border border-outline-variant/30 hover:border-primary text-xs font-label-caps rounded-full transition-all">
              Mark All as Read
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-margin-page py-16 space-y-8">
          <section className="space-y-2">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Notifications</h1>
            <p className="font-body-lg text-on-surface-variant/80">Real-time alerts from your autonomous cognitive agents and system processes.</p>
          </section>

          <div className="space-y-4">
            {alerts.length === 0 ? (
              <div className="p-12 text-center border border-dashed border-outline-variant/40 rounded-3xl bg-surface-container-low/20">
                <span className="material-symbols-outlined text-neutral-300 text-5xl mb-4">notifications_off</span>
                <p className="font-body-md text-on-surface-variant/60">No pending alerts in your intelligence stream.</p>
              </div>
            ) : (
              alerts.map(alert => (
                <div
                  key={alert.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${alert.read ? 'bg-surface-container-low/30 border-surface-variant/50 opacity-60' : 'bg-surface-container border-secondary/20 shadow-md shadow-secondary/5'}`}
                >
                  <div className="mt-1">
                    {alert.category === 'agent' && (
                      <span className="material-symbols-outlined text-secondary">psychology</span>
                    )}
                    {alert.category === 'system' && (
                      <span className="material-symbols-outlined text-error">warning</span>
                    )}
                    {alert.category === 'sync' && (
                      <span className="material-symbols-outlined text-primary">sync</span>
                    )}
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-headline-md text-body-lg font-semibold text-on-surface flex items-center gap-2">
                        {alert.title}
                        {!alert.read && <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />}
                      </h4>
                      <span className="font-mono-ui text-[10px] text-on-surface-variant/50">{alert.time}</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{alert.desc}</p>
                  </div>
                  <button onClick={() => removeAlert(alert.id)} className="text-on-surface-variant/40 hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
