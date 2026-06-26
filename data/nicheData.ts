import { LucideIcon, Utensils, Scissors, HeartPulse, Tablet, Dumbbell, Sun } from 'lucide-react';

export type TemplateType = 'delivery' | 'booking' | 'lead' | 'catalog' | 'vsl' | 'quiz';

export enum NicheType {
  BURGER = 'burger',
  BARBER = 'barber',
  ESTETICA = 'estetica',
  CELULAR = 'celular',
  ACADEMIA = 'academia',
  SOLAR = 'solar',
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
  subtitle?: string;
}

export interface AppConfig {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryColor: string;
  products: Product[];
  ctaText: string;
}

export interface NicheOption {
  id: NicheType;
  label: string;
  icon: LucideIcon;
  color: string;
  template: TemplateType;
  appConfig: AppConfig;
}

const p = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const nicheData: NicheOption[] = [
  // 1. HAMBURGUERIA - Delivery
  {
    id: NicheType.BURGER,
    label: 'Hamburgueria',
    icon: Utensils,
    color: 'bg-orange-600 text-white',
    template: 'delivery',
    appConfig: {
      heroImage: p(1639557),
      heroTitle: 'Monster Burger',
      heroSubtitle: 'Os melhores smash burgers da cidade',
      primaryColor: 'bg-orange-600',
      ctaText: 'Pedir Agora',
      products: [
        { id: 1, name: 'X-Bacon Supremo', price: 'R$ 32,90', image: p(1639557), badge: 'TOP' },
        { id: 2, name: 'Smash Duplo', price: 'R$ 28,90', image: p(1556698) },
        { id: 3, name: 'Combo Familia 4 pessoas', price: 'R$ 89,90', image: p(1633578), badge: 'PROMO' },
        { id: 4, name: 'X-Tudo Especial', price: 'R$ 35,90', image: p(1639565) },
        { id: 5, name: 'Burger Vegano', price: 'R$ 29,90', image: p(1639562) },
        { id: 6, name: 'Kids Burger', price: 'R$ 18,90', image: p(1639564) }
      ]
    }
  },

  // 2. BARBEARIA - Booking
  {
    id: NicheType.BARBER,
    label: 'Barbearia',
    icon: Scissors,
    color: 'bg-slate-800 text-white',
    template: 'booking',
    appConfig: {
      heroImage: p(1813272),
      heroTitle: 'Barber King',
      heroSubtitle: 'Estilo e tradicao masculina',
      primaryColor: 'bg-slate-900',
      ctaText: 'Agendar Corte',
      products: [
        { id: 1, name: 'Corte Degrade', price: 'R$ 45,00', image: p(1813272), subtitle: '45 minutos' },
        { id: 2, name: 'Barba Terapia', price: 'R$ 35,00', image: p(1621605), subtitle: '30 minutos' },
        { id: 3, name: 'Corte + Barba', price: 'R$ 70,00', image: p(1599351), subtitle: '1h 15min', badge: 'COMBO' },
        { id: 4, name: 'Corte Social', price: 'R$ 40,00', image: p(1570807), subtitle: '40 minutos' },
        { id: 5, name: 'Platinado', price: 'R$ 120,00', image: p(3998433), subtitle: '2 horas' },
        { id: 6, name: 'Sobrancelha', price: 'R$ 15,00', image: p(1813272), subtitle: '15 minutos' }
      ]
    }
  },

  // 3. CLÍNICA DE ESTÉTICA - Lead Capture (ULTRA PREMIUM)
  {
    id: NicheType.ESTETICA,
    label: 'Clinica de Estetica',
    icon: HeartPulse,
    color: 'bg-emerald-600 text-white',
    template: 'lead',
    appConfig: {
      heroImage: p(3985329),
      heroTitle: 'Lumina Estética Avançada',
      heroSubtitle: 'Realçando sua beleza natural com tecnologia médica de ponta',
      primaryColor: 'bg-emerald-600',
      ctaText: 'Agendar Avaliacao Gratuita',
      products: [
        { id: 1, name: 'Limpeza de Pele Profunda', price: 'R$ 180,00', image: p(3985329), subtitle: 'Resultado em 1 sessao' },
        { id: 2, name: 'Peeling Quimico', price: 'R$ 280,00', image: p(3985333), subtitle: 'Renovacao celular' },
        { id: 3, name: 'Drenagem Linfatica', price: 'R$ 150,00', image: p(3985322), subtitle: 'Reduz inchacos' },
        { id: 4, name: 'Massagem Relaxante', price: 'R$ 140,00', image: p(3757942), subtitle: '60 minutos' },
        { id: 5, name: 'Depilacao a Laser', price: 'R$ 200,00', image: p(5069380), subtitle: 'Sessao completa' },
        { id: 6, name: 'Botox', price: 'R$ 890,00', image: p(3985336), subtitle: 'Efeito imediato' }
      ]
    }
  },

  // 4. LOJA DE CELULARES - Catalog (ULTRA PREMIUM DARK)
  {
    id: NicheType.CELULAR,
    label: 'Loja de Celulares',
    icon: Tablet,
    color: 'bg-cyan-600 text-white',
    template: 'catalog',
    appConfig: {
      heroImage: p(699122),
      heroTitle: 'iTech Store',
      heroSubtitle: 'Premium Apple Reseller • Produtos originais com garantia',
      primaryColor: 'bg-cyan-600',
      ctaText: 'Ver Catalogo Completo',
      products: [
        { 
          id: 1, 
          name: 'iPhone 15 Pro Max', 
          price: 'R$ 8.499', 
          image: p(699122),
          badge: 'Original Apple',
          subtitle: '256GB Titanio Azul'
        },
        { 
          id: 2, 
          name: 'Galaxy S24 Ultra', 
          price: 'R$ 6.999', 
          image: p(607812),
          badge: 'Lacrado',
          subtitle: '256GB Grafite'
        },
        { 
          id: 3, 
          name: 'AirPods Pro 2', 
          price: 'R$ 1.899', 
          image: p(3780681),
          badge: 'Original',
          subtitle: 'USB-C com ANC'
        },
        { 
          id: 4, 
          name: 'iPhone 14 Pro', 
          price: 'R$ 6.499', 
          image: p(788946),
          subtitle: '128GB Roxo Profundo'
        },
        { 
          id: 5, 
          name: 'Apple Watch Ultra', 
          price: 'R$ 8.299', 
          image: p(393047),
          badge: 'Premium',
          subtitle: '49mm Titanio'
        },
        { 
          id: 6, 
          name: 'iPad Pro M2', 
          price: 'R$ 9.499', 
          image: p(1334597),
          subtitle: '12.9" 256GB'
        }
      ]
    }
  },

  // 5. IRON GYM - VSL
  {
    id: NicheType.ACADEMIA,
    label: 'Iron Gym',
    icon: Dumbbell,
    color: 'bg-blue-700 text-white',
    template: 'vsl',
    appConfig: {
      heroImage: p(1954524),
      heroTitle: 'Iron Gym',
      heroSubtitle: 'O melhor treino da sua vida comeca aqui',
      primaryColor: 'bg-blue-800',
      ctaText: 'Garantir Vaga',
      products: []
    }
  },

  // 6. ENERGIA SOLAR - Quiz
  {
    id: NicheType.SOLAR,
    label: 'Energia Solar',
    icon: Sun,
    color: 'bg-yellow-500 text-white',
    template: 'quiz',
    appConfig: {
      heroImage: p(9875441),
      heroTitle: 'EcoSolar',
      heroSubtitle: 'Economize ate 95% na conta de luz',
      primaryColor: 'bg-yellow-600',
      ctaText: 'Simular Economia',
      products: []
    }
  },
];
