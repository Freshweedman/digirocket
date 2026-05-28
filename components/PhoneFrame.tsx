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

interface PhoneFrameProps {
  niche: NicheOption;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ niche }) => {
  const renderApp = () => {
    // Specialized layouts per niche
    if (niche.id === 'sushi') return <SushiApp config={niche.appConfig} />;
    if (niche.id === 'doceria' || niche.id === 'padaria') return <DoceriaApp config={niche.appConfig} />;
    if (niche.id === 'moda') return <FashionApp config={niche.appConfig} />;
    if (niche.id === 'pizza') return <PizzaApp config={niche.appConfig} />;

    switch (niche.template) {
      case 'delivery': return <DeliveryApp config={niche.appConfig} />;
      case 'booking': return <BookingApp config={niche.appConfig} />;
      case 'vsl': return <VSLApp config={niche.appConfig} />;
      case 'lead': return <LeadCaptureApp config={niche.appConfig} />;
      default: return <DeliveryApp config={niche.appConfig} />;
    }
  };

  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[6px] rounded-[2.5rem] h-[580px] w-[285px] shadow-2xl overflow-hidden ring-1 ring-white/10">
      {/* Dynamic Island / Notch (iPhone 16 Style) */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-[24px] w-[80px] bg-black rounded-full z-20 flex justify-center items-center shadow-sm">
        <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full mr-1"></div>
        <div className="w-1.5 h-1.5 bg-[#0f0f0f] rounded-full ml-12 opacity-50"></div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full bg-white overflow-hidden rounded-[2.2rem] relative">
        {/* Status Bar Mock */}
        <div className="absolute top-0 w-full h-10 px-5 flex justify-between items-center text-[10px] font-bold z-10 text-white mix-blend-difference pt-2">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-current opacity-80"></div>
            <div className="h-2.5 w-4 rounded-full border border-current opacity-80 relative">
              <div className="absolute inset-0.5 bg-current rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scrollable App Area */}
        <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
          {renderApp()}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-900 rounded-full z-20 opacity-50"></div>
    </div>
  );
};