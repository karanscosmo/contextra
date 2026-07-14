import { useEffect } from 'react';

export function useStyleBlock(css: string, id?: string) {
  useEffect(() => {
    const style = document.createElement('style');
    if (id) style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, [css, id]);
}
