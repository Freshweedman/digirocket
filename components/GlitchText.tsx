import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  enable?: boolean;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '',
  enable = true 
}) => {
  if (!enable) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {text}
    </span>
  );
};

export default GlitchText;
