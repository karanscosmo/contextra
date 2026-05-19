import React, { useState } from 'react';
import { useRouter } from '../App';
import Logo from '../components/Logo';

export default function OnboardingPage() {
  const { navigate } = useRouter();
  const [step, setStep] = useState(1);
  const [lens, setLens] = useState('academic');
  const [modality, setModality] = useState('strict');

  const handleFinish = () => {
    alert('Onboarding setup complete. Ready to enter Contextra OS.');
    navigate('/mission-control');
  };

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-xl w-full p-8 md:p-12 rounded-3xl border border-surface-variant bg-surface-container-low/30 backdrop-blur-xl shadow-2xl space-y-8">
        {/* Brand Row */}
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="font-headline-md text-headline-md tracking-tighter text-on-surface">Contextra</span>
          </div>
          <span className="font-mono-ui text-[11px] text-on-surface-variant bg-surface-container px-2 py-1 rounded">
            Step {step} of 3
          </span>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Choose your primary lens.</h2>
            <p className="font-body-md text-on-surface-variant/80">
              Select how Contextra should structure research outputs and surface associative connections.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label
                onClick={() => setLens('academic')}
                className={`p-6 border rounded-2xl cursor-pointer transition-all flex flex-col gap-2 ${lens === 'academic' ? 'bg-secondary-container/10 border-secondary' : 'bg-surface hover:bg-surface-container-high border-outline-variant/30'}`}
              >
                <span className="material-symbols-outlined text-secondary">school</span>
                <span className="font-headline-md text-body-lg font-bold">Academic</span>
                <span className="font-body-md text-xs text-on-surface-variant/70 leading-relaxed">Prioritize citation verification and systematic literature references.</span>
              </label>
              <label
                onClick={() => setLens('strategist')}
                className={`p-6 border rounded-2xl cursor-pointer transition-all flex flex-col gap-2 ${lens === 'strategist' ? 'bg-secondary-container/10 border-secondary' : 'bg-surface hover:bg-surface-container-high border-outline-variant/30'}`}
              >
                <span className="material-symbols-outlined text-secondary">timeline</span>
                <span className="font-headline-md text-body-lg font-bold">Strategist</span>
                <span className="font-body-md text-xs text-on-surface-variant/70 leading-relaxed">Prioritize pattern recognition, market mapping, and cluster visualization.</span>
              </label>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-primary hover:bg-on-surface text-surface py-4 rounded-xl font-label-caps text-xs tracking-wider transition-all mt-4"
            >
              Continue Configuration
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Synthesis Modality</h2>
            <p className="font-body-md text-on-surface-variant/80">
              Configure strict factual alignment vs. creative cognitive interpolation vectors.
            </p>
            <div className="flex bg-surface-container border border-outline-variant/30 p-1 rounded-full w-full">
              <button
                onClick={() => setModality('fluid')}
                className={`flex-1 py-3 text-xs font-label-caps rounded-full transition-all ${modality === 'fluid' ? 'bg-white text-on-surface shadow-sm font-semibold' : 'text-on-surface-variant'}`}
              >
                Fluid Association
              </button>
              <button
                onClick={() => setModality('strict')}
                className={`flex-1 py-3 text-xs font-label-caps rounded-full transition-all ${modality === 'strict' ? 'bg-white text-on-surface shadow-sm font-semibold' : 'text-on-surface-variant'}`}
              >
                Strict Citational
              </button>
            </div>
            <p className="font-mono-ui text-xs text-on-surface-variant/70 leading-relaxed">
              {modality === 'strict'
                ? 'Strict Citational mode forces active agents to only verify and catalog facts directly found in ingested PDFs and transcripts.'
                : 'Fluid Association mode allows the AI to link conceptual patterns across broad domains and suggest novel research theories.'}
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-4 border border-outline-variant/30 rounded-xl font-label-caps text-xs text-on-surface hover:bg-surface-variant transition-all"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-primary hover:bg-on-surface text-surface py-4 rounded-xl font-label-caps text-xs tracking-wider transition-all"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Establish Canvas Base</h2>
            <p className="font-body-md text-on-surface-variant/80">
              Confirm your workspace nodes are ready. Contextra is now ready to build your personal knowledge constellation.
            </p>
            <div className="p-6 border border-dashed border-outline-variant/30 rounded-2xl space-y-4">
              <div className="flex justify-between text-xs font-mono-ui">
                <span className="opacity-60">LENS</span>
                <span className="font-bold text-secondary uppercase">{lens}</span>
              </div>
              <div className="flex justify-between text-xs font-mono-ui">
                <span className="opacity-60">MODALITY</span>
                <span className="font-bold text-secondary uppercase">{modality}</span>
              </div>
              <div className="flex justify-between text-xs font-mono-ui">
                <span className="opacity-60">MEMORIES</span>
                <span className="font-bold text-secondary uppercase">INITIATING VECTOR STORE</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-4 border border-outline-variant/30 rounded-xl font-label-caps text-xs text-on-surface hover:bg-surface-variant transition-all"
              >
                Back
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 bg-secondary text-white py-4 rounded-xl font-label-caps text-xs tracking-wider hover:bg-on-surface transition-all shadow-lg shadow-secondary/15"
              >
                Enter Workspace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
