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

  // Clean high-contrast container that works on both light and dark backgrounds
  const containerClasses = [
    "relative inline-flex items-center justify-center overflow-hidden rounded-xl",
    "bg-white border border-outline-variant/30 shadow-sm",
    "transition-all duration-300 ease-out hover:scale-105 hover:shadow-md",
    animate ? "animate-orbital-float" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div 
      className={containerClasses}
      style={{ width: sizePx, height: sizePx }}
    >
      {/* Real logo image */}
      <img 
        src="/logo/logo.jpg" 
        alt="Contextra" 
        className="w-full h-full object-cover rounded-xl"
        loading="eager"
      />
    </div>
  );
}
