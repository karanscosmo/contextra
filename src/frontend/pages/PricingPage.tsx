import React, { useState } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

export default function PricingPage() {
  const { navigate } = useRouter();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const plans = [
    {
      name: 'Vellum Lite',
      desc: 'Personal intelligence synthesis and baseline knowledge maps.',
      monthlyPrice: 19,
      yearlyPrice: 15,
      features: [
        '1 Active Workspace Thread',
        'Up to 2,500 Ingested Citations',
        'Single AI Routing Model (Gemini)',
        'Local Graph Visualization',
      ],
      cta: 'Begin Baseline',
      popular: false,
    },
    {
      name: 'Vellum Workspace',
      desc: 'Deep associative synthesis and real-time semantic graphs.',
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        'Unlimited Workspace Threads',
        'Unlimited Ingested Citations',
        'Multi-Model Smart AI Routing',
        '3 Autonomous Research Agents',
        'Shared Workspace Collaboration',
        'Dedicated Vector Memory Store',
      ],
      cta: 'Reserve Access',
      popular: true,
    },
    {
      name: 'Contextra Enterprise',
      desc: 'Dedicated spatial intelligence operating systems for organizations.',
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        'Everything in Workspace Plan',
        'Isolated Tenant Cloud Deployments',
        'Custom Fine-Tuned AI Adapters',
        'Unlimited Autonomous Agents',
        'SAML SSO & Audit Logs',
        '99.9% Uptime SLA Guarantee',
      ],
      cta: 'Initiate Consultation',
      popular: false,
    },
  ];

  const handleSelectPlan = (planName: string) => {
    alert(`Initiating subscription workflow for ${planName} (${billingCycle} billing).`);
    navigate('/signup');
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
          <a onClick={() => navigate('/pricing')} className="text-primary font-bold hover:text-primary transition-colors cursor-pointer">Pricing</a>
          <a onClick={() => navigate('/docs')} className="text-on-surface-variant/80 hover:text-primary transition-colors cursor-pointer">Docs</a>
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

      <main className="max-w-7xl mx-auto px-margin-page py-24 text-center space-y-16">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-block py-1 px-3 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-caps text-[10px] text-secondary tracking-widest uppercase">
            Pricing Protocols
          </div>
          <h1 className="font-display-hero text-headline-lg md:text-[56px] leading-tight text-on-surface">
            Choose your synthesis tier.
          </h1>
          <p className="font-body-lg text-on-surface-variant/80">
            A premium, transparent spatial pricing structure built for thinkers, strategists, and researchers.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center pt-6">
            <div className="flex bg-surface-container border border-outline-variant/30 p-1 rounded-full w-64 shadow-inner">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 py-2 text-xs font-label-caps rounded-full transition-all ${billingCycle === 'monthly' ? 'bg-white text-on-surface shadow-sm font-semibold' : 'text-on-surface-variant'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`flex-1 py-2 text-xs font-label-caps rounded-full transition-all flex items-center justify-center gap-1.5 ${billingCycle === 'yearly' ? 'bg-white text-on-surface shadow-sm font-semibold' : 'text-on-surface-variant'}`}
              >
                Yearly
                <span className="bg-secondary/15 text-secondary px-1.5 py-0.5 rounded text-[8px] font-bold">-20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-grid items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between text-left relative ${plan.popular ? 'bg-white border-secondary/40 shadow-xl shadow-secondary/5 ring-1 ring-secondary/20' : 'bg-surface-container-low/50 border-outline-variant/30 hover:border-outline-variant/80'}`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white font-label-caps text-[9px] px-3 py-1 rounded-full tracking-widest uppercase">
                  RECOMMENDED LENS
                </span>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{plan.name}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant min-h-[40px] leading-relaxed">{plan.desc}</p>
                </div>

                <div className="py-4 border-y border-outline-variant/20 flex items-baseline gap-2">
                  <span className="font-display-hero text-[40px] text-on-surface">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="font-mono-ui text-xs text-on-surface-variant/60">/ month</span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-4 px-6 rounded-xl font-label-caps text-xs tracking-wider transition-all duration-300 ${plan.popular ? 'bg-secondary text-white hover:bg-on-surface shadow-lg shadow-secondary/15' : 'bg-surface-container-highest hover:bg-surface-variant text-on-surface'}`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
