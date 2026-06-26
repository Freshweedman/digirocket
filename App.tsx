import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Rocket, CheckCircle2 } from 'lucide-react';
import { FloatingCTA } from './components/FloatingCTA';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Comparison } from './components/Comparison';
import { Team } from './components/Team';
import { HowItWorks } from './components/HowItWorks';
import { Capabilities } from './components/Capabilities';
import { Results } from './components/Results';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Guarantee } from './components/Guarantee';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { Cities } from './components/Cities';
import { Chatbot } from './components/Chatbot';
import { SeoPageView } from './components/SeoPage';
import { MarqueeSection } from './components/MarqueeSection';
import { GlitchText } from './components/GlitchText';
// Lazy load SEO pages para reduzir bundle inicial
const loadAllSeoPages = () => {
  return Promise.all([
    import('./data/seoPages'),
    import('./data/nichePages'),
    import('./data/cityPages'),
    import('./data/servicePagesGenerator')
  ]).then(([seoPages, niche, city, service]) => [
    ...seoPages.allPages,
    ...niche.nichePages,
    ...city.cityPages,
    ...city.cityPages2,
    ...service.servicePages,
    ...service.serviceCityPages
  ]);
};

// Cache para páginas SEO já carregadas
let cachedSeoPages: any[] | null = null;

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [scrollWidth, setScrollWidth] = React.useState(0);
  const [pathname, setPathname] = React.useState(() => window.location.pathname.replace(/^\//, ''));
  const [seoPage, setSeoPage] = React.useState<any>(null);

  // Real URL routing — listen for navigation
  React.useEffect(() => {
    const onNav = () => setPathname(window.location.pathname.replace(/^\//, ''));
    window.addEventListener('popstate', onNav);
    return () => window.removeEventListener('popstate', onNav);
  }, []);

  // Lazy load SEO page quando pathname mudar
  React.useEffect(() => {
    if (!pathname) {
      setSeoPage(null);
      return;
    }

    const loadPage = async () => {
      if (!cachedSeoPages) {
        cachedSeoPages = await loadAllSeoPages();
      }
      const page = cachedSeoPages.find(p => p.slug === pathname);
      setSeoPage(page || null);
    };

    loadPage();
  }, [pathname]);

  const goHome = () => {
    window.history.pushState({}, '', '/');
    setPathname('');
    window.scrollTo(0, 0);
  };

  const navigateTo = (slug: string) => {
    window.history.pushState({}, '', `/${slug}`);
    setPathname(slug);
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Reduzido de 600ms para 800ms (tempo ideal para 3D animation)

    // Throttle scroll handler - só atualiza a cada 100ms
    let scrollTimeout: number;
    let lastScrollTime = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < 100) return; // throttle 100ms
      lastScrollTime = now;

      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollWidth(scrolled);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Optimized Intersection Observer - uma única verificação
    const observerOptions = {
      threshold: 0.01,
      rootMargin: '200px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observa elementos apenas uma vez, após 100ms
    const observeTimeout = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.reveal-hidden:not(.reveal-visible)');
      hiddenElements.forEach((el) => observer.observe(el));
    }, 100);

    // Throttle mousemove - só atualiza a cada 50ms
    let mouseMoveTimeout: number;
    let lastMouseTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseTime < 50) return; // throttle 50ms
      lastMouseTime = now;

      if (mouseMoveTimeout) cancelAnimationFrame(mouseMoveTimeout);
      mouseMoveTimeout = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(observeTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
      if (mouseMoveTimeout) cancelAnimationFrame(mouseMoveTimeout);
      observer.disconnect();
    };
  }, [loading]);

  // Render SEO page if route matches — AFTER all hooks
  if (seoPage) {
    return (
      <>
        <SeoPageView page={seoPage} onBack={() => { window.location.hash = ''; setCurrentPage(null); }} />
        <Chatbot />
      </>
    );
  }

  // SEO page render (uses pathname routing, no hooks involved)
  if (seoPage) {
    return (
      <>
        <SeoPageView page={seoPage} onBack={goHome} />
        <Chatbot />
      </>
    );
  }

  return (
    <>
    <div className="selection:bg-brand-green selection:text-brand-dark">
      {/* Scroll Indicator */}
      <div id="scroll-indicator" style={{ width: `${scrollWidth}%` }}></div>

      {/* Premium 3D Preloader */}
      <div
        id="preloader"
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{
          background: 'linear-gradient(135deg, #0a0e1a 0%, #020617 50%, #0a0e1a 100%)',
        }}
      >
        <div className="relative">
          {/* Ambient Glow */}
          <div className="absolute inset-0 -m-32">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/30 blur-[100px] rounded-full animate-pulse-glow" />
          </div>

          {/* 3D Logo Container */}
          <div className="relative logo-3d-container" style={{ perspective: '1000px' }}>
            <div 
              className="logo-3d-inner"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'rotate3d 3s ease-in-out infinite',
              }}
            >
              {/* Logo Rocket Icon */}
              <div className="relative">
                <Rocket 
                  size={80} 
                  strokeWidth={1.5}
                  className="text-brand-green drop-shadow-[0_0_30px_rgba(163,230,53,0.6)]" 
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(163, 230, 53, 0.4))',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Minimal Loading Indicator */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-green animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 rounded-full bg-brand-green animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-brand-green animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes rotate3d {
            0%, 100% {
              transform: rotateY(0deg) rotateX(0deg);
            }
            25% {
              transform: rotateY(180deg) rotateX(10deg);
            }
            50% {
              transform: rotateY(180deg) rotateX(-10deg);
            }
            75% {
              transform: rotateY(360deg) rotateX(10deg);
            }
          }

          @keyframes pulse-glow {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.1);
            }
          }

          .animate-pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
        `}</style>
      </div>

      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden transition-all duration-1000 ${loading ? 'blur-sm' : 'blur-0'}`}>
        <Header />
        <main className="flex-grow">
          {/* 1. HERO (DARK) */}
          <Hero />
          <FloatingCTA />

          {/* 2. SIMULADOR INTERATIVO (DARK) - LOGO NO TOPO */}
          <InteractiveSimulator />

          {/* 3. TRUSTED BY (DARK) - LOGOS MODERNOS */}
          <TrustedBy />

          {/* 4. COMPARISON (WHITE) */}
          <Comparison />

          {/* 5. TEAM (WHITE) */}
          <Team />

          {/* 6. HOW IT WORKS (DARK) */}
          <HowItWorks />

          {/* 7. CAPABILITIES (DARK) */}
          <Capabilities />

          {/* 8. RESULTS (WHITE) */}
          <Results />

          {/* 9. PRICING (WHITE) */}
          <Pricing />

          {/* 10. TESTIMONIALS (WHITE) */}
          <Testimonials />

          {/* 11. FAQ (DARK) */}
          <FAQ />

          {/* 12. GUARANTEE (WHITE) */}
          <Guarantee />

          {/* 13. CITIES — Local SEO (WHITE) */}
          <Cities />

          {/* CALL TO ACTION FINAL (DARK) */}
          <section className="py-24 md:py-40 px-4 bg-brand-dark text-center relative overflow-hidden border-t border-white/5">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-green/5 blur-[120px] rounded-full"></div>
              </div>

              <div className="max-w-4xl mx-auto relative z-10 space-y-12 reveal-hidden">
                <h2 className="font-sans text-4xl md:text-7xl font-black text-white tracking-tight leading-none">
                  Só 2 vagas essa semana. <br />
                  <span className="text-brand-green drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]">Garante a sua agora.</span>
                </h2>
                <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                  Atendemos 4 clientes por semana. Seu cliente tá pesquisando no Google agora — não deixa ele achar o concorrente.
                </p>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
                  {['48h no ar', 'A partir de R$497', 'Hospedagem grátis', '7 dias de garantia'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 group hover:border-brand-green/40 transition-all">
                      <CheckCircle2 size={18} className="text-brand-green" />
                      <span className="text-xs md:text-sm font-black uppercase tracking-widest text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex justify-center">
                  <a
                    href="https://wa.me/5551984689725?text=Oi%2C+vi+o+site+de+voc%C3%AAs+e+quero+um+site+pra+meu+neg%C3%B3cio.+Podem+me+ajudar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green hover:bg-white text-slate-950 px-12 py-6 rounded-3xl font-black text-sm md:text-base uppercase tracking-[0.2em] transition-all shadow-[0_0_60px_rgba(163,230,53,0.4)] inline-flex items-center gap-3"
                  >
                    Falar agora
                  </a>
                </div>
              </div>
            </section>
        </main>
        <Footer />
      </div >
    </div >
    <Chatbot />
    </>
  );
};

export default App;