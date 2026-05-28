import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Rocket, CheckCircle2, LayoutDashboard } from 'lucide-react';
import { FloatingCTA } from './components/FloatingCTA';

const Hero = React.lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const Comparison = React.lazy(() => import('./components/Comparison').then(m => ({ default: m.Comparison })));
const HowItWorks = React.lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const Results = React.lazy(() => import('./components/Results').then(m => ({ default: m.Results })));
const NicheDemo = React.lazy(() => import('./components/NicheDemo').then(m => ({ default: m.NicheDemo })));
const Pricing = React.lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const ExtraServices = React.lazy(() => import('./components/ExtraServices').then(m => ({ default: m.ExtraServices })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = React.lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Guarantee = React.lazy(() => import('./components/Guarantee').then(m => ({ default: m.Guarantee })));

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [scrollWidth, setScrollWidth] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Slightly reduced preloader time

    let scrollTimeout: number;
    const handleScroll = () => {
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

    // Optimized Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px' // Start revealing slightly before they enter the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target); // Stop observing once visible to save resources
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const hiddenElements = document.querySelectorAll('.reveal-hidden:not(.reveal-visible)');
      hiddenElements.forEach((el) => observer.observe(el));
    };

    observeElements();
    const interval = setInterval(observeElements, 1500);

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div className="selection:bg-brand-green selection:text-brand-dark">
      {/* Scroll Indicator */}
      <div id="scroll-indicator" style={{ width: `${scrollWidth}%` }}></div>

      {/* Preloader Overlay */}
      <div
        id="preloader"
        className={`fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center transition-all duration-700 pointer-events-none ${loading ? 'opacity-100' : 'opacity-0 scale-105'}`}
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-green/20 blur-3xl animate-pulse-glow"></div>
            <Rocket size={80} className="text-brand-green fill-brand-green mb-8 relative z-10 animate-float" />
          </div>
          <h1 className="font-display font-black text-5xl text-white tracking-widest uppercase mb-4">DigiRocket</h1>
          <div className="preloader-line w-[200px] h-[3px] bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-brand-green animate-shimmer w-1/3 shadow-[0_0_15px_#a3e635]"></div>
          </div>
        </div>
      </div>

      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden transition-all duration-1000 ${loading ? 'blur-sm' : 'blur-0'}`}>
        <Header />
        <main className="flex-grow">
          <React.Suspense fallback={<div className="h-screen bg-brand-dark" />}>
            {/* 1. HERO (DARK) */}
            <Hero />
            <FloatingCTA />

            {/* 2. COMPARISON (WHITE) */}
            <Comparison />

            {/* 3. HOW IT WORKS (DARK) */}
            <HowItWorks />

            {/* 4. RESULTS (WHITE) */}
            <Results />

            {/* 5. NICHE DEMO (DARK) */}
            <NicheDemo />

            {/* 6. PRICING (WHITE) */}
            <Pricing />

            {/* 7. EXTRA SERVICES (DARK) */}
            <ExtraServices />

            {/* 8. TESTIMONIALS (WHITE) */}
            <Testimonials />

            {/* 9. FAQ (DARK) */}
            <FAQ />

            {/* 10. GUARANTEE (WHITE) */}
            <Guarantee />

            {/* CALL TO ACTION FINAL (DARK) */}
            <section className="py-24 md:py-40 px-4 bg-brand-dark text-center relative overflow-hidden border-t border-white/5">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-green/5 blur-[120px] rounded-full"></div>
              </div>

              <div className="max-w-4xl mx-auto relative z-10 space-y-12 reveal-hidden">
                <h2 className="font-sans text-4xl md:text-7xl font-black text-white tracking-tight leading-none">
                  Sua Máquina de Vendas <br />
                  <span className="text-brand-green drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]">Começa Aqui.</span>
                </h2>
                <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                  Não deixe sua empresa no passado. O mercado não espera, e o seu site é a porta de entrada para o seu novo patamar de lucro.
                </p>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
                  {['Entrega em 48h', 'Foco em Conversão', 'Sem Mensalidade', 'Suporte VIP'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 group hover:border-brand-green/40 transition-all">
                      <CheckCircle2 size={18} className="text-brand-green" />
                      <span className="text-xs md:text-sm font-black uppercase tracking-widest text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </React.Suspense>
        </main>
        <Footer />
      </div >
    </div >
  );
};

export default App;