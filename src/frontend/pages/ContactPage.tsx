import React, { useState, useEffect } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

export default function ContactPage() {
  const { navigate } = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Contextra - Contact';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

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
          <a onClick={() => navigate('/docs')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">Docs</a>
          <a onClick={() => navigate('/contact')} className="text-primary font-bold hover:text-primary transition-colors cursor-pointer">Contact</a>
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

      <main className="max-w-4xl mx-auto px-margin-page py-24 space-y-16">
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <div className="inline-block py-1 px-3 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-caps text-[10px] text-secondary tracking-widest uppercase">
            Get in Touch
          </div>
          <h1 className="font-display-hero text-headline-lg md:text-[56px] leading-tight text-on-surface">
            Initiate Contact
          </h1>
          <p className="font-body-lg text-on-surface-variant/80">
            Have questions about enterprise deployment, API access, or the Vellum Workspace? Connect with our synthesis team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid items-start">
          {/* Contact Details */}
          <div className="md:col-span-4 space-y-8">
            <div className="space-y-2">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant/50">OFFICE</h3>
              <p className="font-body-md text-sm text-on-surface leading-relaxed">
                Contextra Labs LLC<br />
                Sveavägen 44<br />
                111 34 Stockholm, Sweden
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant/50">ELECTRONIC</h3>
              <p className="font-body-md text-sm text-on-surface font-mono-ui">
                synthesis@contextra.io
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-8 p-8 rounded-3xl border border-surface-variant bg-surface-container-low/30 space-y-6">
            {sent && (
              <div className="p-4 rounded-xl bg-secondary-container/20 border border-secondary/30 text-secondary font-mono-ui text-xs flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px]">done_all</span>
                Message successfully routed. We will reach out shortly.
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all placeholder:text-on-surface-variant/30"
                  placeholder="E.g. Dr. Aris Thorne"
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all placeholder:text-on-surface-variant/30"
                  placeholder="researcher@contextra.io"
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="contact-message">Inquiry</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all placeholder:text-on-surface-variant/30"
                  placeholder="Describe your research constraints or enterprise needs..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-primary hover:bg-on-surface text-surface py-3 px-8 rounded-full font-label-caps text-label-caps shadow-lg shadow-primary/10 transition-all flex items-center justify-center gap-2 w-full md:w-auto"
            >
              {submitting ? 'Routing Message...' : 'Send Inquiry'}
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
