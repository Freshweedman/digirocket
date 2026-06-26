import React, { useRef, useState, useEffect } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  enableSpotlight?: boolean;
  enableLift?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  enableTilt = true,
  enableSpotlight = true,
  enableLift = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !enableTilt) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateXValue = ((y - centerY) / centerY) * -10;
      const rotateYValue = ((x - centerX) / centerX) * 10;
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
      
      // Para efeito spotlight
      const mouseXPercent = (x / rect.width) * 100;
      const mouseYPercent = (y / rect.height) * 100;
      setMouseX(mouseXPercent);
      setMouseY(mouseYPercent);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      setMouseX(50);
      setMouseY(50);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableTilt]);

  const cardClasses = [
    enableTilt ? 'card-3d' : '',
    enableSpotlight ? 'spotlight-container' : '',
    enableLift ? 'hover-lift' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={cardRef}
      className={cardClasses}
      style={{
        '--rotate-x': rotateY,
        '--rotate-y': rotateX,
        '--mouse-x': `${mouseX}%`,
        '--mouse-y': `${mouseY}%`
      } as React.CSSProperties}
    >
      <div className="card-3d-inner">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
