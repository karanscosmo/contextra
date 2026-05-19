import React, { useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from '../App';
import Logo from '../components/Logo';

export default function ProfilePage() {
  const { navigate } = useRouter();
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('strategist');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (u) => {
      if (u) {
        setUser(u);
        setEmail(u.email || '');
        // Fetch user data from firestore if exists
        try {
          const userDoc = await getDoc(doc(db, 'users', u.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setName(data.name || '');
            setRole(data.role || 'strategist');
          } else {
            setName(u.displayName || '');
          }
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setMessage('');
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        name,
        role,
        updatedAt: new Date().toISOString(),
      });
      setMessage('Profile updated successfully.');
      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      console.error(err);
      setMessage('Failed to update: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface text-on-surface">
        <div className="text-center space-y-4">
          <Logo size="lg" animate={true} className="mx-auto" />
          <p className="font-mono-ui text-mono-ui text-neutral-500 uppercase tracking-widest text-xs">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container overflow-hidden min-h-screen flex w-full">
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
          <button onClick={() => navigate('/profile')} className="w-full flex items-center gap-3 px-4 py-3 text-primary border-r-2 border-primary font-bold font-label-caps text-label-caps bg-surface-variant/50 transition-all rounded-lg">
            <span className="material-symbols-outlined">account_circle</span>
            Researcher Profile
          </button>
          <button onClick={() => navigate('/settings')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 font-label-caps text-label-caps hover:bg-surface-variant/50 transition-all rounded-lg">
            <span className="material-symbols-outlined">settings</span>
            Workspace Settings
          </button>
        </nav>
        <div className="mt-auto">
          <button onClick={handleLogout} className="w-full bg-error-container/30 text-error px-4 py-3 text-label-caps font-label-caps rounded-lg hover:bg-error-container transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-64 overflow-y-auto relative pb-32">
        <header className="bg-surface/60 backdrop-blur-2xl text-primary docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-page py-unit h-16 w-full border-b border-outline-variant/10">
          <div className="font-headline-md text-headline-md tracking-tighter text-on-surface">Researcher Profile</div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" onClick={() => navigate('/notifications')}>notifications</span>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer" onClick={() => navigate('/profile')}>
              <div className="w-full h-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs uppercase">
                {name ? name.substring(0, 2) : 'RX'}
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-margin-page py-16 space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-secondary-container/30 border border-secondary/20 flex items-center justify-center shadow-xl">
                <span className="material-symbols-outlined text-secondary text-4xl">account_circle</span>
              </div>
              <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface">{name || 'Researcher'}</h1>
                <p className="font-body-lg text-on-surface-variant/80">{email}</p>
              </div>
            </div>
          </section>

          {message && (
            <div className={`p-4 rounded-xl border text-sm font-mono-ui flex items-center gap-3 ${message.includes('successfully') ? 'bg-secondary-container/20 border-secondary/30 text-secondary' : 'bg-error-container/20 border-error/30 text-error'}`}>
              <span className="material-symbols-outlined text-[18px]">info</span>
              {message}
            </div>
          )}

          <div className="grid grid-cols-12 gap-gutter-grid">
            {/* Identity Profile Config Form */}
            <form onSubmit={handleSave} className="col-span-12 lg:col-span-8 p-8 rounded-3xl border border-surface-variant bg-surface-container-low/30 space-y-6">
              <h3 className="font-headline-md text-headline-md text-on-surface">Identity Matrix</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Display Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">System Lens / Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all appearance-none"
                  >
                    <option value="academic">Academic Researcher</option>
                    <option value="strategist">Strategic Planner</option>
                    <option value="designer">Creative Designer</option>
                    <option value="engineer">Systems Engineer</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-primary hover:bg-on-surface text-surface py-3 px-8 rounded-full font-label-caps text-label-caps shadow-lg shadow-primary/10 transition-all flex items-center gap-2"
                >
                  {saving ? 'Syncing...' : 'Update Identity'}
                  <span className="material-symbols-outlined text-[18px]">sync</span>
                </button>
              </div>
            </form>

            {/* Profile Statistics Card */}
            <div className="col-span-12 lg:col-span-4 p-8 rounded-3xl border border-surface-variant bg-surface-container-low/80 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">insights</span>
                <h3 className="font-label-caps text-label-caps text-on-surface mb-2">Cognitive Load</h3>
                <p className="font-body-md text-on-surface-variant/80 text-xs">Synthesis history across current workspace.</p>
              </div>
              <div className="mt-8 space-y-4">
                <div>
                  <div className="flex justify-between font-mono-ui text-[11px] mb-1">
                    <span>INDEXED NODES</span>
                    <span>14,289</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-secondary" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-mono-ui text-[11px] mb-1">
                    <span>ACTIVE AGENTS</span>
                    <span>3 / 5</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-tertiary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
