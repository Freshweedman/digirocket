import { LucideIcon, Utensils, Scissors, Shirt, Pill, Pizza, Fish, IceCream, PawPrint, Dumbbell, Briefcase, Home, Stethoscope, Wrench, Croissant, Flower2, HeartPulse, Car, Coffee, Calculator, GraduationCap, Sun, Shield, Palette, Zap, Gem, ShoppingBag, Tablet, Camera, Building, User, PenTool, Brush, Wind, Sparkles, Droplets, UtensilsCrossed, Monitor } from 'lucide-react';

export type TemplateType = 'delivery' | 'booking' | 'vsl' | 'lead';

export enum NicheType {
    BURGER = 'burger',
    PIZZA = 'pizza',
    SUSHI = 'sushi',
    ACAI = 'acai',
    PADARIA = 'padaria',
    DOCERIA = 'doceria',
    HORTIFRUTI = 'hortifruti',
    BEBIDAS = 'bebidas',
    PASTEL = 'pastel',
    BARBER = 'barber',
    SALAO = 'salao',
    ESTETICA = 'estetica',
    CLINICA = 'clinica',
    OFICINA = 'oficina',
    PET = 'pet',
    TATTOO = 'tattoo',
    PSICOLOGO = 'psicologo',
    PERSONAL = 'personal',
    MASSAGEM = 'massagem',
    ADVOGADO = 'advogado',
    ACADEMIA = 'academia',
    MENTORIA = 'mentoria',
    CURSO = 'curso',
    IMOVEIS = 'imoveis',
    SOLAR = 'solar',
    SEGUROS = 'seguros',
    MODA = 'moda',
    DENTISTA = 'dentista',
    ESMALTERIA = 'esmalteria',
    NUTRI = 'nutri',
    CONTABIL = 'contabil',
    CELULAR = 'celular',
    FOTO = 'foto',
    ARCON = 'arcon',
    ARQUITETO = 'arquiteto'
}

export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
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

export const nicheData: NicheOption[] = [
    {
        id: NicheType.BURGER,
        label: 'Hamburgueria',
        icon: Utensils,
        color: 'bg-orange-600 text-white',
        template: 'delivery',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Monster Burger',
            heroSubtitle: 'O melhor burger artesanal da cidade',
            primaryColor: 'bg-orange-600',
            ctaText: 'Pedir Agora',
            products: [
                { id: 1, name: 'X-Bacon Supremo', price: 'R$ 32,90', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Smash Duplo', price: 'R$ 28,90', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
                { id: 3, name: 'Batata Rústica', price: 'R$ 18,90', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.DENTISTA,
        label: 'Odontologia',
        icon: Stethoscope,
        color: 'bg-teal-600 text-white',
        template: 'booking',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Odonto Excellence',
            heroSubtitle: 'Seu sorriso transformado com tecnologia e exclusividade.',
            primaryColor: 'bg-teal-600',
            ctaText: 'Agendar Consulta',
            products: [
                { id: 1, name: 'Clareamento Laser', price: 'Consultar', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Lentes de Contato', price: 'Consultar', image: 'https://images.unsplash.com/photo-1600170311833-c2cf3780749f?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.SUSHI,
        label: 'Sushi Bar',
        icon: Fish,
        color: 'bg-rose-900 text-white',
        template: 'delivery',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Kyoto Sushi Bar',
            heroSubtitle: 'A arte da culinária japonesa',
            primaryColor: 'bg-rose-700',
            ctaText: 'Ver Cardápio',
            products: [
                { id: 1, name: 'Combo Especial', price: 'R$ 89,90', image: 'https://images.unsplash.com/photo-1617196019294-dc44dfacb43d?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Temaki Salmão', price: 'R$ 24,90', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd43fb?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.BARBER,
        label: 'Barbearia',
        icon: Scissors,
        color: 'bg-slate-800 text-white',
        template: 'booking',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Barber King',
            heroSubtitle: 'Estilo e tradição para homens',
            primaryColor: 'bg-slate-900',
            ctaText: 'Agendar Corte',
            products: [
                { id: 1, name: 'Corte Cabelo', price: 'R$ 45,00', image: 'https://images.unsplash.com/photo-1599351431202-6e0005079746?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Barba Completa', price: 'R$ 35,00', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.ESMALTERIA,
        label: 'Esmalteria & Nails',
        icon: Gem,
        color: 'bg-pink-600 text-white',
        template: 'booking',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1632345031435-07ca6834a362?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Glamour Nails',
            heroSubtitle: 'Suas unhas com design de luxo.',
            primaryColor: 'bg-pink-600',
            ctaText: 'Marcar Horário',
            products: [
                { id: 1, name: 'Alongamento em Gel', price: 'R$ 150', image: 'https://images.unsplash.com/photo-1604654894610-df4909950613?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Manicure Express', price: 'R$ 40', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.ESTETICA,
        label: 'Clínica de Estética',
        icon: HeartPulse,
        color: 'bg-teal-500 text-white',
        template: 'booking',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Clínica Bem-Estar',
            heroSubtitle: 'Cuidados faciais e corporais',
            primaryColor: 'bg-teal-600',
            ctaText: 'Agendar',
            products: [
                { id: 1, name: 'Limpeza de Pele', price: 'R$ 120,00', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Massagem Relaxante', price: 'R$ 90,00', image: 'https://images.unsplash.com/photo-1519823551278-64ac927ac4dd?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.CELULAR,
        label: 'Loja de Celulares',
        icon: Tablet,
        color: 'bg-blue-600 text-white',
        template: 'delivery',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1556656793-062ff9878258?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Tech Store',
            heroSubtitle: 'Iphones e acessórios com garantia.',
            primaryColor: 'bg-blue-600',
            ctaText: 'Ver Catálogo',
            products: [
                { id: 1, name: 'iPhone 15 Pro', price: 'R$ 6.999', image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Apple Watch', price: 'R$ 2.499', image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.OFICINA,
        label: 'Auto Center',
        icon: Wrench,
        color: 'bg-blue-900 text-white',
        template: 'booking',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Auto Center Top',
            heroSubtitle: 'Manutenção de confiança',
            primaryColor: 'bg-blue-950',
            ctaText: 'Agendar Serviço',
            products: [
                { id: 1, name: 'Revisão Completa', price: 'R$ 290,00', image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Troca de Óleo', price: 'R$ 120,00', image: 'https://images.unsplash.com/photo-1486262715619-01b80258e0c5?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.NUTRI,
        label: 'Nutricionista',
        icon: HeartPulse,
        color: 'bg-green-600 text-white',
        template: 'lead',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Dra. Luiza Nutri',
            heroSubtitle: 'Emagrecimento com saúde e prazer.',
            primaryColor: 'bg-green-600',
            ctaText: 'Iniciar Dieta',
            products: []
        }
    },
    {
        id: NicheType.PET,
        label: 'Pet Shop',
        icon: PawPrint,
        color: 'bg-amber-500 text-white',
        template: 'booking',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Amigo Fiel Pet',
            heroSubtitle: 'Banho e tosa com carinho',
            primaryColor: 'bg-amber-600',
            ctaText: 'Agendar Banho',
            products: [
                { id: 1, name: 'Banho e Tosa', price: 'R$ 50,00', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Vacinação', price: 'R$ 80,00', image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.ADVOGADO,
        label: 'Advocacia',
        icon: Briefcase,
        color: 'bg-slate-900 text-white',
        template: 'vsl',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Dr. Santos',
            heroSubtitle: 'Especialista em Direito Digital',
            primaryColor: 'bg-slate-900',
            ctaText: 'Agendar Consultoria',
            products: []
        }
    },
    {
        id: NicheType.ACADEMIA,
        label: 'Academia',
        icon: Dumbbell,
        color: 'bg-blue-700 text-white',
        template: 'vsl',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Iron Gym',
            heroSubtitle: 'O melhor treino da sua vida',
            primaryColor: 'bg-blue-800',
            ctaText: 'Garantir Vaga',
            products: []
        }
    },
    {
        id: NicheType.CONTABIL,
        label: 'Contabilidade',
        icon: Calculator,
        color: 'bg-slate-800 text-white',
        template: 'lead',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Expert Contábil',
            heroSubtitle: 'Sua empresa com gestão segura e lucrativa.',
            primaryColor: 'bg-slate-800',
            ctaText: 'Abrir Empresa',
            products: []
        }
    },
    {
        id: NicheType.ARQUITETO,
        label: 'Arquitetura',
        icon: Building,
        color: 'bg-zinc-800 text-white',
        template: 'lead',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1503387762-592eea58f4e?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Studio Arq',
            heroSubtitle: 'Projetos que traduzem sua essência.',
            primaryColor: 'bg-zinc-900',
            ctaText: 'Ver Portfólio',
            products: []
        }
    },
    {
        id: NicheType.IMOVEIS,
        label: 'Imobiliária',
        icon: Home,
        color: 'bg-cyan-600 text-white',
        template: 'lead',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Imobiliária Prime',
            heroSubtitle: 'Encontre o imóvel dos sonhos',
            primaryColor: 'bg-cyan-700',
            ctaText: 'Ver Catálogo',
            products: []
        }
    },
    {
        id: NicheType.FOTO,
        label: 'Fotógrafa',
        icon: Camera,
        color: 'bg-orange-500 text-white',
        template: 'booking',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Memórias Eternas',
            heroSubtitle: 'Capturando momentos inesquecíveis.',
            primaryColor: 'bg-orange-600',
            ctaText: 'Agendar Ensaio',
            products: []
        }
    },
    {
        id: NicheType.SOLAR,
        label: 'Energia Solar',
        icon: Sun,
        color: 'bg-yellow-500 text-white',
        template: 'lead',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'EcoSolar',
            heroSubtitle: 'Economia garantida na conta de luz',
            primaryColor: 'bg-yellow-600',
            ctaText: 'Simular Agora',
            products: []
        }
    },
    {
        id: NicheType.PIZZA,
        label: 'Pizzaria',
        icon: Pizza,
        color: 'bg-orange-600 text-white',
        template: 'delivery',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Bella Napoli',
            heroSubtitle: 'A verdadeira pizza italiana',
            primaryColor: 'bg-red-700',
            ctaText: 'Pedir Pizza',
            products: [
                { id: 1, name: 'Margherita', price: 'R$ 45,90', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Pepperoni', price: 'R$ 52,90', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80' },
                { id: 3, name: 'Quatro Queijos', price: 'R$ 55,90', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.MODA,
        label: 'Moda & Estilo',
        icon: ShoppingBag,
        color: 'bg-zinc-900 text-white',
        template: 'delivery',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Lumina Fashion',
            heroSubtitle: 'Tendências que iluminam você',
            primaryColor: 'bg-zinc-900',
            ctaText: 'Ver Coleção',
            products: [
                { id: 1, name: 'Vestido Verão', price: 'R$ 129,90', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80' },
                { id: 2, name: 'Blusa Casual', price: 'R$ 79,90', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80' },
                { id: 3, name: 'Jaqueta Jeans', price: 'R$ 189,90', image: 'https://images.unsplash.com/photo-1523297928132-c5145ec81d17?auto=format&fit=crop&w=400&q=80' },
                { id: 4, name: 'Saia Midi', price: 'R$ 99,90', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=400&q=80' },
            ]
        }
    },
    {
        id: NicheType.ARCON,
        label: 'Climatização',
        icon: Wind,
        color: 'bg-sky-600 text-white',
        template: 'lead',
        appConfig: {
            heroImage: 'https://images.unsplash.com/photo-1574818310705-d85cf6350325?auto=format&fit=crop&w=800&q=80',
            heroTitle: 'Ar Profissional',
            heroSubtitle: 'Instalação e manutenção corretiva.',
            primaryColor: 'bg-sky-600',
            ctaText: 'Pedir Orçamento',
            products: []
        }
    }
];
