import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  animate?: boolean;
}

export default function Logo({ className = '', size = 'md', animate = false }: LogoProps) {
  let sizePx = 32;
  if (typeof size === 'number') {
    sizePx = size;
  } else {
    switch (size) {
      case 'xs': sizePx = 18; break;
      case 'sm': sizePx = 24; break;
      case 'md': sizePx = 32; break;
      case 'lg': sizePx = 48; break;
      case 'xl': sizePx = 64; break;
    }
  }

  // Animation CSS styles: float, glow, orbital shimmer
  const containerClasses = [
    "relative inline-flex items-center justify-center overflow-hidden rounded-lg",
    "border border-white/10 dark:border-white/5 bg-neutral-900/40 backdrop-blur-md shadow-lg",
    "transition-all duration-500 ease-out hover:scale-105 hover:border-primary/40",
    "hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
    animate ? "animate-orbital-float" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div 
      className={containerClasses}
      style={{ width: sizePx, height: sizePx }}
    >
      {/* Orbital shimmer sheen layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/15 pointer-events-none mix-blend-overlay"></div>
      
      {/* Real logo image with adaptive filters for graphite dark mode and light mode */}
      <img 
        src="/logo/logo.jpg" 
        alt="Contextra" 
        className="w-full h-full object-cover dark:opacity-90 dark:brightness-105 dark:contrast-100 mix-blend-screen dark:mix-blend-normal"
        loading="eager"
      />
      
      {/* Soft overlay gradient border */}
      <div className="absolute inset-0 rounded-lg border border-indigo-500/10 pointer-events-none"></div>
    </div>
  );
}
