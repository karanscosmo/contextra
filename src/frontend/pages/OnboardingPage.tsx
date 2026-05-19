import React, { useState } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

const steps = [
  {
    id: 1,
    emoji: '👋',
    title: "What are you working on?",
    subtitle: "Help us set up Contextra for the way you think.",
  },
  {
    id: 2,
    emoji: '🧠',
    title: "How should AI respond?",
    subtitle: "Choose how creative or precise you want AI insights to be.",
  },
  {
    id: 3,
    emoji: '🚀',
    title: "You're all set!",
    subtitle: "Your workspace is ready. Let's dive in.",
  },
];

export default function OnboardingPage() {
  const { navigate } = useRouter();
  const [step, setStep] = useState(1);
  const [lens, setLens] = useState('academic');
  const [modality, setModality] = useState('balanced');

  const currentStep = steps.find(s => s.id === step)!;

  const lensOptions = [
    {
      id: 'academic',
      icon: 'school',
      title: 'Academic Research',
      desc: 'Focused on citations, papers, and systematic study.',
    },
    {
      id: 'strategist',
      icon: 'trending_up',
      title: 'Business Strategy',
      desc: 'Market analysis, trends, and competitive intelligence.',
    },
    {
      id: 'creative',
      icon: 'palette',
      title: 'Creative Projects',
      desc: 'Ideas, mood boards, inspiration, and creative synthesis.',
    },
    {
      id: 'personal',
      icon: 'person',
      title: 'Personal Learning',
      desc: 'Books, podcasts, and courses — organized and connected.',
    },
  ];

  const modalityOptions = [
    {
      id: 'creative',
      title: 'Creative & Exploratory',
      desc: 'AI finds unexpected connections and suggests bold ideas.',
      icon: 'lightbulb',
    },
    {
      id: 'balanced',
      title: 'Balanced',
      desc: 'Mix of creative insights and grounded, cited analysis.',
      icon: 'balance',
    },
    {
      id: 'precise',
      title: 'Precise & Factual',
      desc: 'AI sticks strictly to what your uploaded sources say.',
      icon: 'verified',
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <Logo size="md" />
          <div>
            <div className="font-bold text-[18px] text-on-surface">Contextra</div>
            <div className="text-[12px] text-on-surface-variant">AI Research Platform</div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 mb-8">
          {steps.map(s => (
            <div
              key={s.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                s.id === step ? 'w-8 bg-secondary' : s.id < step ? 'w-4 bg-secondary/40' : 'w-4 bg-outline-variant/40'
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-outline-variant/20 shadow-2xl shadow-secondary/8 p-8 md:p-10">
          <div className="text-[32px] mb-3">{currentStep.emoji}</div>
          <h2 className="text-[24px] font-bold text-on-surface mb-2">{currentStep.title}</h2>
          <p className="text-[15px] text-on-surface-variant mb-8 leading-relaxed">{currentStep.subtitle}</p>

          {/* Step 1 — Research Type */}
          {step === 1 && (
            <div className="space-y-3">
              {lensOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setLens(option.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                    lens === option.id
                      ? 'bg-secondary/8 border-secondary/30 shadow-sm'
                      : 'bg-white border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container/40'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[22px] ${lens === option.id ? 'text-secondary' : 'text-on-surface-variant'}`}>
                    {option.icon}
                  </span>
                  <div>
                    <div className={`font-semibold text-[14px] ${lens === option.id ? 'text-secondary' : 'text-on-surface'}`}>
                      {option.title}
                    </div>
                    <div className="text-[12px] text-on-surface-variant/70">{option.desc}</div>
                  </div>
                  {lens === option.id && (
                    <span className="material-symbols-outlined text-secondary ml-auto text-[18px]">check_circle</span>
                  )}
                </button>
              ))}
              <button
                onClick={() => setStep(2)}
                className="mt-4 w-full bg-secondary text-white py-3.5 rounded-xl font-semibold text-[14px] hover:bg-secondary/90 transition-all shadow-md shadow-secondary/20"
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2 — AI Style */}
          {step === 2 && (
            <div className="space-y-3">
              {modalityOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setModality(option.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                    modality === option.id
                      ? 'bg-secondary/8 border-secondary/30 shadow-sm'
                      : 'bg-white border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container/40'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[22px] ${modality === option.id ? 'text-secondary' : 'text-on-surface-variant'}`}>
                    {option.icon}
                  </span>
                  <div>
                    <div className={`font-semibold text-[14px] ${modality === option.id ? 'text-secondary' : 'text-on-surface'}`}>
                      {option.title}
                    </div>
                    <div className="text-[12px] text-on-surface-variant/70">{option.desc}</div>
                  </div>
                  {modality === option.id && (
                    <span className="material-symbols-outlined text-secondary ml-auto text-[18px]">check_circle</span>
                  )}
                </button>
              ))}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3.5 border border-outline-variant/30 rounded-xl text-[14px] font-medium text-on-surface-variant hover:bg-surface-container/40 transition-all"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-secondary text-white py-3.5 rounded-xl font-semibold text-[14px] hover:bg-secondary/90 transition-all shadow-md shadow-secondary/20"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-surface-container/40 rounded-2xl p-5 border border-outline-variant/15 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-on-surface-variant">Research Type</span>
                  <span className="text-[13px] font-semibold text-secondary capitalize">{lens}</span>
                </div>
                <div className="h-px bg-outline-variant/20" />
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-on-surface-variant">AI Style</span>
                  <span className="text-[13px] font-semibold text-secondary capitalize">{modality}</span>
                </div>
                <div className="h-px bg-outline-variant/20" />
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-on-surface-variant">Workspace</span>
                  <span className="text-[13px] font-semibold text-green-600 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Ready
                  </span>
                </div>
              </div>
              <p className="text-[14px] text-on-surface-variant text-center">
                You can change these settings anytime in your preferences.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3.5 border border-outline-variant/30 rounded-xl text-[14px] font-medium text-on-surface-variant hover:bg-surface-container/40 transition-all"
                >
                  ← Back
                </button>
                <button
                  onClick={() => navigate('/mission-control')}
                  className="flex-1 bg-secondary text-white py-3.5 rounded-xl font-semibold text-[14px] hover:bg-secondary/90 transition-all shadow-md shadow-secondary/20"
                >
                  Open Workspace 🎉
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-[12px] text-on-surface-variant/60 mt-6">
          By continuing, you agree to our{' '}
          <button className="underline hover:text-on-surface transition-colors">Terms</button>
          {' '}and{' '}
          <button className="underline hover:text-on-surface transition-colors">Privacy Policy</button>
        </p>
      </div>
    </div>
  );
}
