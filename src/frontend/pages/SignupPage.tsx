import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import { auth, db } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from '../App';
import { useStyleBlock } from '../lib/useStyleBlock';

export default function SignupPage() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('strategist');
  const [aiMode, setAiMode] = useState('strict');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Contextra - Create Account';
  }, []);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError('Please provide all credentials to establish a profile.');
      return;
    }
    setLoading(true);
    setError('');
    let userCredential: any;
    try {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional profile parameters in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        role,
        aiMode,
        createdAt: new Date().toISOString(),
      });

      navigate('/onboarding');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error('Signup failed:', err);
      // If Auth succeeded but Firestore failed, clean up the Auth user
      try {
        if (userCredential?.user) {
          await userCredential.user.delete();
        }
      } catch (cleanupErr) {
        console.error('Failed to clean up Auth user after Firestore error:', cleanupErr);
      }
      setError(errorMessage || 'Failed to establish profile.');
    } finally {
      setLoading(false);
    }
  };

  useStyleBlock(`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    `);

  return (
    <div className="bg-background text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container h-screen w-full overflow-hidden flex flex-col md:flex-row min-h-screen">
      
      {/* Left Pane: Ambient Imagery & Brand */}
      <div className="relative hidden md:flex flex-col justify-between w-2/5 h-full p-margin-page bg-surface-container-high overflow-hidden border-r border-outline-variant/30">
        {/* Background Image with data-alt prompt */}
        <img alt="Ambient Intelligence" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="A highly detailed, abstract 3D render representing ambient intelligence and semantic particles. The scene is bathed in soft, high-key lighting characteristic of a warm ivory and dusty lavender light-mode aesthetic. Delicate, frosted glass-like geometric shapes float weightlessly in a serene, spacious environment. The composition feels like premium, tactile stationery brought to life, conveying intellectual clarity, minimalism, and sophisticated technological calm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUigZNJUNWHdlBlWaQAbmIIDkN8U1ZeVtuBCFMd8SLTxN5WFdvSO2cKgewNAPBdjEdrP77O9MvnjE_4tLlD5sEZ0AbX-E557wuL8J0NmKTmCQLXMO-GqxRM5OKGy4CSIxBu25OXpzxbCoK263aNPG8RIgKWWo0OWmCZR_rBUulG4ZoAZWilmwkZ0wvOsmXaXcofGP-4GgbbsSGLsjMX9k9l5VnlMEilCnkrqDXdISiL4rTc6WQ634QVWhhnxG0LOBNEUjg_vuIOds"/>
        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-surface/90 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/landing')}>
            <Logo size="sm" animate={true} />
            <h1 className="font-headline-md text-headline-md text-on-surface tracking-tighter">Contextra</h1>
          </div>
          <p className="font-mono-ui text-mono-ui text-on-surface-variant mt-2 opacity-70">Intelligence Workspace v1.4</p>
        </div>
        <div className="relative z-10 max-w-sm">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Design your synthesis environment.</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">A tactile space for high-order thought. Configure your intelligence baseline to begin shaping the narrative.</p>
        </div>
      </div>

      {/* Right Pane: Onboarding Form */}
      <div className="w-full md:w-3/5 h-full bg-background overflow-y-auto">
        <div className="min-h-full flex flex-col justify-center px-6 py-12 md:px-margin-page lg:px-24">
          <div className="max-w-xl w-full mx-auto space-y-12">
            {/* Mobile Header */}
            <div className="md:hidden mb-8">
              <div className="flex items-center gap-3" onClick={() => navigate('/landing')}>
                <Logo size="sm" animate={true} />
                <h1 className="font-headline-md text-headline-md text-on-surface tracking-tighter">Contextra</h1>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-mono-ui text-mono-ui text-secondary">Step 01 / Initiation</p>
              <h2 className="font-display-hero text-headline-lg-mobile md:text-headline-lg text-on-surface">Establish Profile</h2>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-error-container/20 border border-error/30 text-error font-mono-ui text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">error</span>
                {error}
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-8">
              {/* Credentials Section */}
              <div className="space-y-4">
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="name">Full Name</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded font-body-md text-body-md text-on-surface placeholder:text-outline px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Dr. Aris Thorne"
                    required
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="email">Work Email</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded font-body-md text-body-md text-on-surface placeholder:text-outline px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@institution.edu"
                    required
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="password">Secure Token (Password)</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded font-body-md text-body-md text-on-surface placeholder:text-outline px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    required
                  />
                </div>
              </div>

              <hr className="border-t border-outline-variant/20"/>

              {/* Role Selection (Bento-ish Grid) */}
              <div className="space-y-4">
                <label className="block font-label-caps text-label-caps text-on-surface-variant">Primary Lens</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Academic */}
                  <div
                    onClick={() => setRole('academic')}
                    className={`relative flex flex-col p-5 border rounded bg-surface cursor-pointer transition-all ${role === 'academic' ? 'border-secondary bg-secondary-container/15' : 'border-outline-variant/30 hover:bg-surface-container-high'}`}
                  >
                    <span className="material-symbols-outlined text-secondary mb-4">school</span>
                    <span className="font-headline-md text-body-lg text-on-surface mb-1">Academic</span>
                    <span className="font-body-md text-[10px] text-on-surface-variant/80">Rigorous citations &amp; literature checks.</span>
                  </div>
                  {/* Strategist */}
                  <div
                    onClick={() => setRole('strategist')}
                    className={`relative flex flex-col p-5 border rounded bg-surface cursor-pointer transition-all ${role === 'strategist' ? 'border-secondary bg-secondary-container/15' : 'border-outline-variant/30 hover:bg-surface-container-high'}`}
                  >
                    <span className="material-symbols-outlined text-secondary mb-4">timeline</span>
                    <span className="font-headline-md text-body-lg text-on-surface mb-1">Strategist</span>
                    <span className="font-body-md text-[10px] text-on-surface-variant/80">Pattern mapping &amp; market alignment.</span>
                  </div>
                  {/* Designer */}
                  <div
                    onClick={() => setRole('designer')}
                    className={`relative flex flex-col p-5 border rounded bg-surface cursor-pointer transition-all ${role === 'designer' ? 'border-secondary bg-secondary-container/15' : 'border-outline-variant/30 hover:bg-surface-container-high'}`}
                  >
                    <span className="material-symbols-outlined text-secondary mb-4">design_services</span>
                    <span className="font-headline-md text-body-lg text-on-surface mb-1">Designer</span>
                    <span className="font-body-md text-[10px] text-on-surface-variant/80">Concept visualization &amp; creative logic.</span>
                  </div>
                </div>
              </div>

              <hr className="border-t border-outline-variant/20"/>

              {/* AI Preference Setup */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="block font-label-caps text-label-caps text-on-surface-variant">Synthesis Modality</label>
                  <span className="font-mono-ui text-mono-ui text-secondary">Configurable later</span>
                </div>
                <div className="flex bg-surface-container border border-outline-variant/30 p-1 rounded-full w-full">
                  <button
                    type="button"
                    onClick={() => setAiMode('fluid')}
                    className={`flex-1 text-center py-2.5 rounded-full cursor-pointer transition-all text-xs font-label-caps ${aiMode === 'fluid' ? 'bg-white text-on-surface shadow-sm font-semibold' : 'text-on-surface-variant'}`}
                  >
                    Fluid Association
                  </button>
                  <button
                    type="button"
                    onClick={() => setAiMode('strict')}
                    className={`flex-1 text-center py-2.5 rounded-full cursor-pointer transition-all text-xs font-label-caps ${aiMode === 'strict' ? 'bg-white text-on-surface shadow-sm font-semibold' : 'text-on-surface-variant'}`}
                  >
                    Strict Citational
                  </button>
                </div>
                <p className="font-mono-ui text-[11px] text-on-surface-variant/70 leading-relaxed">
                  {aiMode === 'strict'
                    ? 'Prioritizes factual precision and source verification.'
                    : 'Enables suggestions, associations, and creative cross-references.'}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-between items-center bg-on-surface text-surface py-4 px-6 rounded hover:bg-inverse-surface transition-colors disabled:opacity-50"
                >
                  <span className="font-label-caps text-label-caps tracking-widest">{loading ? 'Creating Matrix...' : 'Initialize Workspace'}</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>

            <div className="text-center mt-4 text-xs font-mono-ui text-on-surface-variant/60">
              Already have credentials?{' '}
              <a
                onClick={() => navigate('/login')}
                className="text-secondary hover:underline cursor-pointer font-bold"
              >
                Sign In
              </a>
            </div>

            <div className="text-center pb-8 border-t border-outline-variant/20 pt-4">
              <p className="font-mono-ui text-[10px] text-on-surface-variant/50">
                By proceeding, you agree to the <a className="text-secondary hover:underline cursor-pointer" onClick={() => navigate('/about')}>Philosophy</a> &amp; <a className="text-secondary hover:underline cursor-pointer" onClick={() => navigate('/about')}>Privacy Protocols</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
