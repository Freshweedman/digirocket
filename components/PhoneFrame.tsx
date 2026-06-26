import React from 'react';
import { NicheOption } from '../data/nicheData';
import { DeliveryApp } from './apps/DeliveryApp';
import { BookingApp } from './apps/BookingApp';
import { VSLApp } from './apps/VSLApp';
import { LeadCaptureApp } from './apps/LeadCaptureApp';
import { SushiApp } from './apps/SushiApp';
import { DoceriaApp } from './apps/DoceriaApp';
import { FashionApp } from './apps/FashionApp';
import { PizzaApp } from './apps/PizzaApp';
import { CatalogApp } from './apps/CatalogApp';
import { QuizApp } from './apps/QuizApp';

interface PhoneFrameProps {
  niche: NicheOption;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ niche }) => {
  const renderApp = () => {
    if (niche.id === 'sushi') return <SushiApp config={niche.appConfig} />;
    if (niche.id === 'doceria' || niche.id === 'padaria') return <DoceriaApp config={niche.appConfig} />;
    if (niche.id === 'moda') return <FashionApp config={niche.appConfig} />;
    if (niche.id === 'pizza') return <PizzaApp config={niche.appConfig} />;

    switch (niche.template) {
      case 'delivery': return <DeliveryApp config={niche.appConfig} />;
      case 'booking': return <BookingApp config={niche.appConfig} />;
      case 'vsl': return <VSLApp config={niche.appConfig} />;
      case 'lead': return <LeadCaptureApp config={niche.appConfig} />;
      case 'catalog': return <CatalogApp config={niche.appConfig} />;
      case 'quiz': return <QuizApp config={niche.appConfig} />;
      default: return <DeliveryApp config={niche.appConfig} />;
    }
  };

  return (
    <div
      className="relative bg-gray-900 border-[5px] border-gray-900 rounded-[2.2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[20px] w-[72px] bg-black rounded-full z-30 flex justify-between items-center px-2.5">
        <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-[#0f0f0f] rounded-full opacity-40"></div>
      </div>

      {/* Screen — fills the frame, no overflow */}
      <div className="absolute inset-0 bg-white rounded-[1.8rem] overflow-hidden">
        {/* Status Bar */}
        <div className="absolute top-0 w-full h-8 px-4 flex justify-between items-end pb-1 text-[9px] font-bold z-20 text-white mix-blend-difference">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="h-2 w-2 rounded-full bg-current opacity-70"></div>
            <div className="h-2 w-3.5 rounded-[2px] border border-current opacity-70 relative">
              <div className="absolute inset-0.5 bg-current rounded-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Scrollable App — starts below status bar */}
        <div className="absolute inset-0 top-0 overflow-y-auto no-scrollbar scroll-smooth">
          <div className="pt-0">
            {renderApp()}
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full z-30"></div>
    </div>
  );
};
