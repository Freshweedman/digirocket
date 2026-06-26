// Analytics & Tracking Utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Analytics Events
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// WhatsApp Click Tracking
export const trackWhatsAppClick = (location: string) => {
  console.log('📞 WhatsApp click:', location);
  
  // Google Analytics
  trackEvent('click_whatsapp', {
    event_category: 'engagement',
    event_label: location,
    value: 1
  });
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: `WhatsApp - ${location}`
    });
  }
};

// Niche Preview View
export const trackNicheView = (niche: string) => {
  console.log('👀 Niche viewed:', niche);
  
  trackEvent('view_niche_preview', {
    event_category: 'engagement',
    event_label: niche,
    value: 1
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage
  });
};

// CTA Click Tracking
export const trackCTAClick = (ctaText: string, location: string) => {
  console.log('🎯 CTA click:', ctaText, 'at', location);
  
  trackEvent('click_cta', {
    event_category: 'conversion',
    event_label: `${ctaText} - ${location}`,
    value: 1
  });
  
  // Facebook Pixel - Lead event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: ctaText,
      content_category: location
    });
  }
};

// Section View Tracking
export const trackSectionView = (sectionName: string) => {
  trackEvent('view_section', {
    event_category: 'engagement',
    event_label: sectionName,
    non_interaction: true
  });
};

// Video Play (if needed)
export const trackVideoPlay = (videoName: string) => {
  trackEvent('play_video', {
    event_category: 'engagement',
    event_label: videoName,
    value: 1
  });
};

// Form Submission
export const trackFormSubmit = (formName: string) => {
  console.log('📝 Form submitted:', formName);
  
  trackEvent('submit_form', {
    event_category: 'conversion',
    event_label: formName,
    value: 1
  });
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', {
      content_name: formName
    });
  }
};

// Purchase/Conversion Tracking
export const trackPurchase = (value: number, currency: string = 'BRL') => {
  console.log('💰 Purchase tracked:', value, currency);
  
  trackEvent('purchase', {
    transaction_id: `TXN_${Date.now()}`,
    value: value,
    currency: currency,
    items: [{
      item_name: 'Site DigiRocket',
      price: value,
      quantity: 1
    }]
  });
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency
    });
  }
};

// Page View (manual)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Hook for scroll depth tracking
export const useScrollDepthTracking = () => {
  if (typeof window === 'undefined') return;

  let tracked25 = false;
  let tracked50 = false;
  let tracked75 = false;
  let tracked100 = false;

  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent >= 25 && !tracked25) {
      trackScrollDepth(25);
      tracked25 = true;
    }
    if (scrollPercent >= 50 && !tracked50) {
      trackScrollDepth(50);
      tracked50 = true;
    }
    if (scrollPercent >= 75 && !tracked75) {
      trackScrollDepth(75);
      tracked75 = true;
    }
    if (scrollPercent >= 90 && !tracked100) {
      trackScrollDepth(100);
      tracked100 = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};
