import React, { useState } from 'react';
import Logo from '../components/Logo';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { useRouter } from '../App';

export default function LoginPage() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password to continue.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/mission-control');
    } catch (err: any) {
      console.error(err);
      const msg = err?.code === 'auth/user-not-found' ? 'No account found with that email.'
        : err?.code === 'auth/wrong-password' ? 'Incorrect password. Please try again.'
        : err?.code === 'auth/invalid-email' ? 'Please enter a valid email address.'
        : err?.code === 'auth/too-many-requests' ? 'Too many attempts. Please wait a moment and try again.'
        : 'Sign in failed. Please check your email and password.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = async () => {
    setLoading(true);
    setError('');
    try {
      // Use local mock user session bypass
      const { setMockUser } = await import('../lib/firebase');
      setMockUser({
        uid: 'demo-investor-uid',
        email: 'demo@contextra.io',
        displayName: 'Demo Investor',
        isAnonymous: true,
        emailVerified: true
      });
      navigate('/onboarding');
    } catch (err: any) {
      console.error(err);
      setError('Failed to initiate demo synthesis: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-on-surface selection:bg-secondary-container selection:text-on-secondary-container overflow-hidden w-full min-h-screen">
      {/* Page Custom Style Block */}
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24
    }
.vellum-texture {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCxjnyIeXEdb_PZNtVScQlP3ufHVpha9yZA3nrty8SrCGF3QaON9bsNfjWmTmeon_RfjIV6_7jmvs5tZCVOCkys7oSCDyv_x5L4YhiKAqBOW3r8flDgaYs2PPvKchsWytL8F7SqS0-qcSZ_AkhwylK3Zq5GAZKmRylQXjzv0fkSwKOjStFZTWhE8w_75tZCMY8EMps6g1uZ8CKYxcFqEhbaxcjfS97adfeH3m4uiATUwqtkz2PSpGQ2dgaJLbrAY09twvtB9z5Jda8);
    background-blend-mode: soft-light
    }
.glass-panel {
    backdrop-filter: blur(24px);
    background: rgba(252, 249, 241, 0.6);
    border: 1px solid rgba(229, 226, 218, 0.5)
    }
.canvas-grain {
    position: relative
    }
.canvas-grain::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDO6Dp1qlAhPDgDu0k5MeT95tASpuZCVuUvL31XCR7Dw3pr7HU8-tY2-jvg1RFY6krhJTC1A9Yse3oMwcwtr1mGdvTcpA2DBJ-Lwk-xNilwO6z1q5tGQza6GzYJfGF7bQGrP4VoQCfPAVQvF3r7uxeXCRq6C5Pg5m51nUWb04fU02qfW8o7KE3K6p9hDXd57NZpPaSCFESthwfkRUo5w6x-5jSfHJCqRIB66QFGNoxO_yx4C9Glx1ZBNTzdB3X1yt71OlkgpanOhu8);
    opacity: 0.03;
    pointer-events: none
    }` }} />
      
      <main className="flex h-screen w-full flex-col md:flex-row">
        {/* Left Side: Ambient Visuals */}
        <section className="relative hidden md:flex md:w-3/5 lg:w-2/3 h-full overflow-hidden bg-surface-dim">
          <div className="absolute inset-0 z-0">
            <img alt="Semantic intelligence visual" className="w-full h-full object-cover filter brightness-95 contrast-75 saturate-50 blur-sm" data-alt="A cinematic, ambient visualization of floating intelligence particles. Abstract, soft-focus shapes in tones of dusty lavender, smoky lilac, and linen beige drift through a dreamlike space. The lighting is ethereal and diffuse, suggesting a deep, boundless digital knowledge base. The overall aesthetic is serene, sophisticated, and reminiscent of high-end editorial digital art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSRsQg0AJy6k_J9ek2BhPR3EZAt382q5W0yy0moIlWDTiSf-giog4fxLxm4LAharDGofIfvffGZOOIqit5POAVSEfeyg1mOuZEfXZrLt9F6p_S_nLX82_B16G-CETAn46pQug7Cotj6Sketa3LyKNtRkweeCa0n5wRR_c0PQKU5Cl3DMDE25VSyomw3kVypsDl409OyDrqhOJPGfhY5BJGJGt6krqHrzbRStamLZSmfzxzuKby3GLSR9ExboRVHplQzv2lBS057hA"/>
          </div>
          {/* Overlay Gradients for Depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim/80 via-transparent to-tertiary-container/20"></div>
          <div className="absolute inset-0 canvas-grain"></div>
          {/* Floating Content */}
          <div className="relative z-10 p-16 flex flex-col justify-end h-full">
            <div className="max-w-xl">
              <span className="font-mono-ui text-mono-ui text-tertiary/80 uppercase tracking-widest block mb-4">AI Research Platform</span>
              <h1 className="font-display-hero text-display-hero text-on-surface mb-6">Research smarter, not harder.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-md">
                Upload your sources, connect the dots with AI, and turn scattered research into clear, actionable insights.
              </p>
            </div>
          </div>
          {/* Decorative Nodes (Semantic Relevance Meter Style) */}
          <div className="absolute top-margin-page right-margin-page flex flex-col gap-4 opacity-40">
            <div className="w-1 h-32 bg-gradient-to-b from-linen-beige to-soft-indigo rounded-full bg-secondary/30"></div>
            <div className="w-1 h-16 bg-primary/20 rounded-full"></div>
          </div>
        </section>

        {/* Right Side: Login Form */}
        <section className="flex flex-col w-full md:w-2/5 lg:w-1/3 h-full bg-surface-bright vellum-texture relative z-20 border-l border-outline-variant/30">
          <div className="flex flex-col h-full px-8 md:px-12 lg:px-16 pt-16 md:pt-24 pb-margin-page overflow-y-auto">
            {/* Brand Mark (Top Row) */}
            <div className="mb-8 cursor-pointer" onClick={() => navigate('/landing')}>
              <div className="flex items-center gap-3">
                <Logo size="md" animate={true} />
                <span className="font-headline-md text-headline-md tracking-tighter text-on-surface font-extrabold uppercase">Contextra</span>
              </div>
            </div>
            {/* Form Header */}
            <div className="mb-6">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome back</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Sign in to your Contextra workspace.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-error-container/20 border border-error/30 text-error font-mono-ui text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">error</span>
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6 flex-grow">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="email">Email address</label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary transition-all placeholder:text-on-surface-variant/30 outline-none"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="researcher@contextra.io"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="password">Password</label>
                  <a className="font-label-caps text-[11px] text-secondary hover:text-secondary/80 transition-colors cursor-pointer" href="#" onClick={(e) => { e.preventDefault(); setError('Check your email — we\'ll send a reset link shortly.'); }}>Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary transition-all placeholder:text-on-surface-variant/30 outline-none"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-on-surface-variant"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <button
                className="w-full bg-primary hover:bg-on-surface text-surface py-4 px-6 rounded-lg font-headline-md text-[16px] transition-all duration-300 shadow-xl shadow-primary/10 flex items-center justify-center gap-3 group mt-4 disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing in...</span>
                ) : (
                  <span className="flex items-center gap-2">Sign in <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
                )}
              </button>
            </form>

            {/* Quick Demo Access */}
            <div className="mt-4 pt-2">
              <button
                onClick={handleQuickDemo}
                disabled={loading}
                className="w-full bg-secondary/8 border border-secondary/20 text-secondary hover:bg-secondary/15 py-3 rounded-lg font-semibold text-[13px] transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                Try Demo — no signup needed
              </button>
            </div>

            {/* Sign Up Redirect */}
            <div className="text-center mt-6 text-[13px] text-on-surface-variant">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-secondary hover:underline cursor-pointer font-semibold"
              >
                Sign up free
              </button>
            </div>

            {/* Footer Links */}
            <footer className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4 py-4 px-6 bg-surface-container-highest rounded-xl border border-outline-variant/20">
                <div className="p-2 bg-surface rounded-full">
                  <span className="material-symbols-outlined text-secondary" style={{ "fontVariationSettings": "'FILL' 1" }}>security</span>
                </div>
                <p className="font-mono-ui text-[11px] text-on-secondary-fixed-variant leading-tight">
                  End-to-end encrypted synthesis active. All memory threads are locally sharded.
                </p>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant/50 font-label-caps text-[10px]">
                <p>© 2024 CONTEXTRA SYSTEMS</p>
                <div className="flex gap-4">
                  <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/about')}>PHILOSOPHY</a>
                  <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/docs')}>DOCS</a>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
      {/* Background Decoration */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="fixed bottom-0 left-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px] -z-10 translate-y-1/2"></div>
    </div>
  );
}
