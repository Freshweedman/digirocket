import React from 'react';

interface MarqueeProps {
  items?: string[];
  speed?: number;
  reverse?: boolean;
}

export const MarqueeSection: React.FC<MarqueeProps> = ({ 
  items = [
    'SITES QUE VENDEM',
    'DELIVERY OTIMIZADO', 
    'PRESENÇA DIGITAL',
    'GOOGLE 1ª PÁGINA',
    'CONVERSÃO REAL',
    'WHATSAPP DIRETO',
    'SEM MENSALIDADE',
    '48H NO AR'
  ],
  speed = 30,
  reverse = false
}) => {
  // Duplicar items para efeito infinito suave
  const duplicatedItems = [...items, ...items];

  return (
    <div className="marquee-container my-16 md:my-24">
      <div 
        className={`marquee ${reverse ? 'marquee-reverse' : ''}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
