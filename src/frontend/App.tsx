import React, { useState, useEffect, createContext, useContext, Suspense } from 'react';
import { auth } from './lib/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import Logo from './components/Logo';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded Page Imports
const AdminMarketplacePage = React.lazy(() => import('./pages/AdminMarketplacePage'));
const AutonomousAgentsPage = React.lazy(() => import('./pages/AutonomousAgentsPage'));
const CitationExplorerPage = React.lazy(() => import('./pages/CitationExplorerPage'));
const CollaborationStudioPage = React.lazy(() => import('./pages/CollaborationStudioPage'));
const CollectionsHubPage = React.lazy(() => import('./pages/CollectionsHubPage'));
const ExportSharePage = React.lazy(() => import('./pages/ExportSharePage'));
const GeneratedInsightsPage = React.lazy(() => import('./pages/GeneratedInsightsPage'));
const GlobalCopilotCollaborationPage = React.lazy(() => import('./pages/GlobalCopilotCollaborationPage'));
const IngestionHubPage = React.lazy(() => import('./pages/IngestionHubPage'));
const IntegrationsModelsPage = React.lazy(() => import('./pages/IntegrationsModelsPage'));
const IntelligenceActivityPage = React.lazy(() => import('./pages/IntelligenceActivityPage'));
const IntelligenceSetupPage = React.lazy(() => import('./pages/IntelligenceSetupPage'));
const KnowledgeConstellationPage = React.lazy(() => import('./pages/KnowledgeConstellationPage'));
const LandingPagePage = React.lazy(() => import('./pages/LandingPagePage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const MissionControlPage = React.lazy(() => import('./pages/MissionControlPage'));
const MobileConstellationPage = React.lazy(() => import('./pages/MobileConstellationPage'));
const MobileMissionControlPage = React.lazy(() => import('./pages/MobileMissionControlPage'));
const ResearchCanvasPage = React.lazy(() => import('./pages/ResearchCanvasPage'));
const ResearchPlaybackPage = React.lazy(() => import('./pages/ResearchPlaybackPage'));
const SearchUniversePage = React.lazy(() => import('./pages/SearchUniversePage'));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));
const SignupPage = React.lazy(() => import('./pages/SignupPage'));
const SourceDetailPage = React.lazy(() => import('./pages/SourceDetailPage'));
const SynthesisStudioPage = React.lazy(() => import('./pages/SynthesisStudioPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const NotificationsPage = React.lazy(() => import('./pages/NotificationsPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const DocsPage = React.lazy(() => import('./pages/DocsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const OnboardingPage = React.lazy(() => import('./pages/OnboardingPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const LoadingFallback = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-[#fcf9f1] text-on-surface font-mono-ui text-mono-ui">
    <div className="text-center space-y-6">
      <Logo size="xl" animate={true} className="mx-auto" />
      <p className="tracking-[0.2em] uppercase text-[10px] text-neutral-400 animate-pulse">Loading...</p>
    </div>
  </div>
);

type RouterContextType = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState(null, '', to);
    setPath(to);
  };

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '' || href?.startsWith('/') || href?.includes('code.html') || href?.includes('contextra_')) {
          e.preventDefault();
          const text = anchor.textContent?.trim().toLowerCase() || '';
          const htmlContent = anchor.innerHTML.toLowerCase();

          if (text.includes('intelligence canvas') || text.includes('mission control') || text.includes('dashboard') || htmlContent.includes('analytics') || text.includes('terminal')) {
            navigate('/mission-control');
          } else if (text.includes('knowledge constellation') || text.includes('knowledge') || htmlContent.includes('hub')) {
            navigate('/knowledge');
          } else if (text.includes('source hub') || text.includes('ingest') || text.includes('vault') || htmlContent.includes('inventory') || text.includes('sources') || htmlContent.includes('folder_open')) {
            navigate('/ingestion');
          } else if (text.includes('synthesis studio') || text.includes('synthesis') || htmlContent.includes('auto_awesome')) {
            navigate('/synthesis');
          } else if (text.includes('autonomous agents') || text.includes('agents') || htmlContent.includes('rocket_launch')) {
            navigate('/agents');
          } else if (text.includes('memory timeline') || text.includes('activity') || htmlContent.includes('history')) {
            navigate('/activity');
          } else if (text.includes('setup') || text.includes('intelligence setup')) {
            navigate('/setup');
          } else if (text.includes('settings') || text.includes('system') || htmlContent.includes('settings')) {
            navigate('/settings');
          } else if (text.includes('marketplace') || text.includes('admin')) {
            navigate('/admin');
          } else if (text.includes('login') || text.includes('sign in') || text.includes('begin synthesis')) {
            navigate('/login');
          } else if (text.includes('signup') || text.includes('register') || text.includes('create account') || text.includes('reserve access') || text.includes('initialize workspace')) {
            navigate('/signup');
          } else if (text.includes('export') || text.includes('share')) {
            navigate('/export');
          } else if (text.includes('citations') || text.includes('citation explorer')) {
            navigate('/citations');
          } else if (text.includes('collaboration') || text.includes('collaboration studio')) {
            navigate('/collaboration');
          } else if (text.includes('collections') || text.includes('collections hub')) {
            navigate('/collections');
          } else if (text.includes('insights') || text.includes('insights dashboard')) {
            navigate('/insights');
          } else if (text.includes('copilot') || text.includes('global copilot') || text.includes('context')) {
            navigate('/copilot');
          } else if (text.includes('models') || text.includes('integrations')) {
            navigate('/models');
          } else if (text.includes('mobile constellation')) {
            navigate('/mobile-constellation');
          } else if (text.includes('mobile mission control')) {
            navigate('/mobile-mission-control');
          } else if (text.includes('research canvas')) {
            navigate('/research-canvas');
          } else if (text.includes('research playback')) {
            navigate('/research-playback');
          } else if (text.includes('search universe') || text.includes('search')) {
            navigate('/search');
          } else if (text.includes('source detail')) {
            navigate('/source-detail');
          } else if (text.includes('about')) {
            navigate('/about');
          } else if (text.includes('pricing')) {
            navigate('/pricing');
          } else if (text.includes('docs') || text.includes('documentation')) {
            navigate('/docs');
          } else if (text.includes('contact')) {
            navigate('/contact');
          } else if (text.includes('onboarding')) {
            navigate('/onboarding');
          } else if (text.includes('profile')) {
            navigate('/profile');
          } else if (text.includes('notifications')) {
            navigate('/notifications');
          } else {
            if (href.includes('landing_page') || href.includes('landing')) {
              navigate('/landing');
            } else if (href.includes('login')) {
              navigate('/login');
            } else if (href.includes('signup')) {
              navigate('/signup');
            } else if (href.includes('mission_control')) {
              navigate('/mission-control');
            } else if (href.includes('autonomous_agents')) {
              navigate('/agents');
            } else if (href.includes('knowledge_constellation')) {
              navigate('/knowledge');
            } else if (href.includes('ingestion_hub')) {
              navigate('/ingestion');
            } else if (href.includes('synthesis_studio')) {
              navigate('/synthesis');
            } else if (href.includes('intelligence_activity')) {
              navigate('/activity');
            } else if (href.includes('intelligence_setup')) {
              navigate('/setup');
            } else if (href.includes('settings')) {
              navigate('/settings');
            } else if (href.includes('admin_marketplace')) {
              navigate('/admin');
            } else if (href.includes('citation_explorer')) {
              navigate('/citations');
            } else if (href.includes('collaboration_studio')) {
              navigate('/collaboration');
            } else if (href.includes('collections_hub')) {
              navigate('/collections');
            } else if (href.includes('export_share')) {
              navigate('/export');
            } else if (href.includes('generated_insights')) {
              navigate('/insights');
            } else if (href.includes('global_copilot_collaboration')) {
              navigate('/copilot');
            } else if (href.includes('integrations_models')) {
              navigate('/models');
            } else if (href.includes('mobile_constellation')) {
              navigate('/mobile-constellation');
            } else if (href.includes('mobile_mission_control')) {
              navigate('/mobile-mission-control');
            } else if (href.includes('research_canvas')) {
              navigate('/research-canvas');
            } else if (href.includes('research_playback')) {
              navigate('/research-playback');
            } else if (href.includes('search_universe')) {
              navigate('/search');
            } else if (href.includes('source_detail')) {
              navigate('/source-detail');
            }
          }
        }
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [navigate]);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const { path, navigate } = useRouter();

  useEffect(() => {
    let cancelled = false;

    const timer = setTimeout(() => {
      if (!cancelled) {
        console.warn('[CONTEXTRA] Auth safety timeout fired — forcing loading=false');
        setLoading(false);
      }
    }, 3000);

    let unsubscribe: (() => void) | null = null;

    try {
      if (auth && typeof auth.onAuthStateChanged === 'function') {
        console.log('[CONTEXTRA] AuthGuard: using auth.onAuthStateChanged');
        unsubscribe = auth.onAuthStateChanged((u: FirebaseUser | null) => {
          if (!cancelled) {
            console.log('[CONTEXTRA] AuthGuard: auth state changed:', u ? 'user' : 'no user');
            setUser(u);
            setLoading(false);
          }
        });
      } else {
        console.log('[CONTEXTRA] AuthGuard: using firebase onAuthStateChanged');
        unsubscribe = onAuthStateChanged(auth, (u) => {
          if (!cancelled) {
            console.log('[CONTEXTRA] AuthGuard: Firebase auth state changed:', u ? 'user' : 'no user');
            setUser(u);
            setLoading(false);
          }
        });
      }
    } catch (err) {
      console.error('[CONTEXTRA] AuthGuard: failed to subscribe:', err);
      if (!cancelled) {
        setInitError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      }
    }

    return () => {
      cancelled = true;
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
      clearTimeout(timer);
    };
  }, []);

  const publicRoutes = ['/', '/landing', '/login', '/signup', '/pricing', '/about', '/docs', '/contact'];

  useEffect(() => {
    if (!loading && !user && !publicRoutes.includes(path)) {
      console.log('[CONTEXTRA] AuthGuard: redirecting to /login (no user)');
      navigate('/login');
    }
  }, [user, loading, path, navigate]);

  if (initError) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#fcf9f1] text-on-surface font-mono-ui text-mono-ui p-8">
        <div className="text-center space-y-6 max-w-md">
          <span className="material-symbols-outlined text-5xl text-error">warning</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Initialization Error</h1>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Contextra encountered an error during startup. Please check your configuration and refresh.
          </p>
          <pre className="text-xs text-error bg-error-container/10 p-4 rounded-xl text-left overflow-auto max-h-24">
            {initError}
          </pre>
          <button
            onClick={() => window.location.reload()}
            className="bg-on-surface text-surface py-3 px-8 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-all"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#fcf9f1] dark:bg-[#121212] text-on-surface font-mono-ui text-mono-ui">
        <div className="text-center space-y-6">
          <Logo size="xl" animate={true} className="mx-auto" />
          <p className="tracking-[0.2em] uppercase text-[10px] text-neutral-400 dark:text-neutral-500 animate-pulse">Initializing Contextra OS...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

const AppContent = () => {
  const { path } = useRouter();

  switch (path) {
    case '/':
    case '/landing':
      return <LandingPagePage />;
    case '/login':
      return <LoginPage />;
    case '/signup':
      return <SignupPage />;
    case '/mission-control':
    case '/workspace':
    case '/dashboard':
      return <MissionControlPage />;
    case '/agents':
      return <AutonomousAgentsPage />;
    case '/citations':
      return <CitationExplorerPage />;
    case '/collaboration':
      return <CollaborationStudioPage />;
    case '/collections':
      return <CollectionsHubPage />;
    case '/export':
      return <ExportSharePage />;
    case '/insights':
      return <GeneratedInsightsPage />;
    case '/copilot':
    case '/chat':
      return <GlobalCopilotCollaborationPage />;
    case '/ingestion':
    case '/sources':
      return <IngestionHubPage />;
    case '/models':
      return <IntegrationsModelsPage />;
    case '/activity':
      return <IntelligenceActivityPage />;
    case '/setup':
      return <IntelligenceSetupPage />;
    case '/knowledge':
    case '/constellation':
      return <KnowledgeConstellationPage />;
    case '/mobile-constellation':
      return <MobileConstellationPage />;
    case '/mobile-mission-control':
      return <MobileMissionControlPage />;
    case '/research-canvas':
    case '/canvas':
      return <ResearchCanvasPage />;
    case '/research-playback':
      return <ResearchPlaybackPage />;
    case '/search':
    case '/semantic-search':
      return <SearchUniversePage />;
    case '/settings':
      return <SettingsPage />;
    case '/source-detail':
      return <SourceDetailPage />;
    case '/synthesis':
      return <SynthesisStudioPage />;
    case '/admin':
      return <AdminMarketplacePage />;
    case '/profile':
      return <ProfilePage />;
    case '/notifications':
      return <NotificationsPage />;
    case '/pricing':
      return <PricingPage />;
    case '/about':
      return <AboutPage />;
    case '/docs':
      return <DocsPage />;
    case '/contact':
      return <ContactPage />;
    case '/onboarding':
      return <OnboardingPage />;
    default:
      return <NotFoundPage />;
  }
};

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider>
        <AuthGuard>
          <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none w-full h-full bg-[#faf7ef]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-110 origin-center brightness-150 contrast-75 saturate-50 opacity-[0.28] blur-[2px] transition-all duration-1000"
            >
              <source src="/videomp_.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#fdf9f0]/60 via-[#fcf8ed]/40 to-[#faf6ea]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(252,249,241,0)_0%,rgba(250,246,234,0.55)_100%)]" />
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <AppContent />
          </Suspense>
        </AuthGuard>
      </RouterProvider>
    </ErrorBoundary>
  );
}
