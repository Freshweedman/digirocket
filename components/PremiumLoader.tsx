import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

interface PremiumLoaderProps {
  isLoading: boolean;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0a0e1a 0%, #020617 50%, #0a0e1a 100%)',
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(163, 230, 53, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 230, 53, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Ambient Glow */}
        <div className="absolute inset-0 -m-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-green/20 blur-[120px] rounded-full animate-pulse-glow" />
        </div>

        {/* 3D Logo Container */}
        <div className="relative" style={{ perspective: '1200px' }}>
          <div
            className="relative"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'rotate3d 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }}
          >
            {/* Shadow Layer */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                filter: 'blur(30px)',
                transform: 'translateZ(-50px) scale(1.2)',
                opacity: 0.5,
              }}
            >
              <Rocket size={80} className="text-brand-green" strokeWidth={1.5} />
            </div>

            {/* Main Logo */}
            <div className="relative flex items-center justify-center">
              <Rocket
                size={80}
                strokeWidth={1.5}
                className="text-brand-green drop-shadow-[0_0_40px_rgba(163,230,53,0.8)]"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(163, 230, 53, 0.5))',
                }}
              />
            </div>

            {/* Glow Ring */}
            <div
              className="absolute inset-0 -m-8 rounded-full border-2 border-brand-green/20"
              style={{
                animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            />
          </div>
        </div>

        {/* Progress Bar (Optional - Minimal) */}
        <div className="mt-16 w-48 mx-auto">
          <div className="h-0.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-brand-green/50 via-brand-green to-brand-green/50 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(163,230,53,0.5)]"
              style={{
                width: `${progress}%`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s linear infinite',
              }}
            />
          </div>
        </div>

        {/* Minimal Loading Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-brand-green"
            style={{
              animation: 'bounce-dot 1.4s ease-in-out infinite',
              animationDelay: '0s',
              boxShadow: '0 0 10px rgba(163, 230, 53, 0.5)',
            }}
          />
          <div
            className="w-2 h-2 rounded-full bg-brand-green"
            style={{
              animation: 'bounce-dot 1.4s ease-in-out infinite',
              animationDelay: '0.2s',
              boxShadow: '0 0 10px rgba(163, 230, 53, 0.5)',
            }}
          />
          <div
            className="w-2 h-2 rounded-full bg-brand-green"
            style={{
              animation: 'bounce-dot 1.4s ease-in-out infinite',
              animationDelay: '0.4s',
              boxShadow: '0 0 10px rgba(163, 230, 53, 0.5)',
            }}
          />
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes rotate3d {
          0%, 100% {
            transform: rotateY(0deg) rotateX(0deg) translateZ(0px);
          }
          25% {
            transform: rotateY(180deg) rotateX(15deg) translateZ(20px);
          }
          50% {
            transform: rotateY(180deg) rotateX(-15deg) translateZ(0px);
          }
          75% {
            transform: rotateY(360deg) rotateX(15deg) translateZ(20px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.05;
            transform: scale(1.2);
          }
        }

        @keyframes bounce-dot {
          0%, 80%, 100% {
            transform: scale(0.8) translateY(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2) translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumLoader;
