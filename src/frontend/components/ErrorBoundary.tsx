import { Component, ErrorInfo, ReactNode } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[CONTEXTRA] Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#fcf9f1] text-on-surface font-mono-ui text-mono-ui p-8">
          <div className="text-center space-y-6 max-w-lg">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Something went wrong</h1>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Contextra encountered an unexpected error. Please try refreshing the page.
            </p>
            <pre className="text-xs text-error bg-error-container/10 p-4 rounded-xl text-left overflow-auto max-h-32">
              {this.state.error?.message || 'Unknown error'}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="bg-on-surface text-surface py-3 px-8 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-all"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }
    return (this as any).props.children;
  }
}
