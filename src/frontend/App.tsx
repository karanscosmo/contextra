import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth, db } from './lib/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import Logo from './components/Logo';

// Page Imports
import AdminMarketplacePage from './pages/AdminMarketplacePage';
import AutonomousAgentsPage from './pages/AutonomousAgentsPage';
import CitationExplorerPage from './pages/CitationExplorerPage';
import CollaborationStudioPage from './pages/CollaborationStudioPage';
import CollectionsHubPage from './pages/CollectionsHubPage';
import ExportSharePage from './pages/ExportSharePage';
import GeneratedInsightsPage from './pages/GeneratedInsightsPage';
import GlobalCopilotCollaborationPage from './pages/GlobalCopilotCollaborationPage';
import IngestionHubPage from './pages/IngestionHubPage';
import IntegrationsModelsPage from './pages/IntegrationsModelsPage';
import IntelligenceActivityPage from './pages/IntelligenceActivityPage';
import IntelligenceSetupPage from './pages/IntelligenceSetupPage';
import KnowledgeConstellationPage from './pages/KnowledgeConstellationPage';
import LandingPagePage from './pages/LandingPagePage';
import LoginPage from './pages/LoginPage';
import MissionControlPage from './pages/MissionControlPage';
import MobileConstellationPage from './pages/MobileConstellationPage';
import MobileMissionControlPage from './pages/MobileMissionControlPage';
import ResearchCanvasPage from './pages/ResearchCanvasPage';
import ResearchPlaybackPage from './pages/ResearchPlaybackPage';
import SearchUniversePage from './pages/SearchUniversePage';
import SettingsPage from './pages/SettingsPage';
import SignupPage from './pages/SignupPage';
import SourceDetailPage from './pages/SourceDetailPage';
import SynthesisStudioPage from './pages/SynthesisStudioPage';

// New Pages
import ProfilePage from './pages/ProfilePage';
import NotificationsPage from './pages/NotificationsPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import DocsPage from './pages/DocsPage';
import ContactPage from './pages/ContactPage';
import OnboardingPage from './pages/OnboardingPage';
import NotFoundPage from './pages/NotFoundPage';

// Simple Router Context for SPA Navigation
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

  // Intercept all static anchor tags and redirect them through router
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

          // Standard Navigation Keywords mapping
          if (text.includes('intelligence canvas') || text.includes('mission control') || text.includes('dashboard') || htmlContent.includes('analytics') || text === 'terminal') {
            navigate('/mission-control');
          } else if (text.includes('knowledge constellation') || text.includes('knowledge') || htmlContent.includes('hub')) {
            navigate('/knowledge');
          } else if (text.includes('source hub') || text.includes('ingest') || text.includes('vault') || htmlContent.includes('inventory') || text === 'sources') {
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
          } else if (text.includes('copilot') || text.includes('global copilot') || text === 'context') {
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
            // Try matching folder paths
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

// Route Protective Guard
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { path, navigate } = useRouter();

  useEffect(() => {
    // 1. Register the safety timeout fallback first to guarantee it runs
    const timer = setTimeout(() => {
      console.warn("AuthGuard safety fallback timeout triggered.");
      setLoading(false);
    }, 3000);

    let unsubscribe: any = () => {};

    // 2. Try subscribing to auth changes safely
    try {
      if (auth && typeof auth.onAuthStateChanged === 'function') {
        unsubscribe = auth.onAuthStateChanged((u: any) => {
          setUser(u);
          setLoading(false);
        });
      } else {
        unsubscribe = onAuthStateChanged(auth, (u) => {
          setUser(u);
          setLoading(false);
        });
      }
    } catch (err) {
      console.error("AuthGuard failed to subscribe to Firebase Auth:", err);
      // Immediately clear loading screen if subscription fails
      setLoading(false);
    }

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
      clearTimeout(timer);
    };
  }, []);

  const publicRoutes = ['/', '/landing', '/login', '/signup', '/pricing', '/about', '/docs', '/contact'];

  useEffect(() => {
    if (!loading && !user && !publicRoutes.includes(path)) {
      navigate('/login');
    }
  }, [user, loading, path, navigate]);

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

// Main Routing Router Switcher
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
    <RouterProvider>
      <AuthGuard>
        {/* Global Video Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none w-full h-full bg-[#fcf9f1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-125 origin-center brightness-110 contrast-90 saturate-75 opacity-[0.16] blur-[5px] transition-all duration-1000"
          >
            <source src="/videomp_.mp4" type="video/mp4" />
          </video>
          {/* Overlays for readable text and premium styling */}
          <div className="absolute inset-0 bg-[#fcf9f1]/70 dark:bg-[#121212]/80 mix-blend-normal" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#fcf9f1_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,#121212_90%)]" />
        </div>
        <AppContent />
      </AuthGuard>
    </RouterProvider>
  );
}
