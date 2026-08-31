export type Language = 'pt' | 'en' | 'es';

export type PageId = 'home' | 'historia' | 'sobre' | 'processo' | 'produtos' | 'contato';

export type CigarStrength = 'suave' | 'medio' | 'medio-forte' | 'forte';

export type CigarVitola = 'Robusto' | 'Churchill' | 'Toro' | 'Corona' | 'Belicoso' | 'Lancero' | 'Gordo';

export type CigarCollection = 'imperial' | 'reserva' | 'limitada' | 'terroir';

export interface AromaNotes {
  wood: number;    // 0-100
  leather: number; // 0-100
  cocoa: number;   // 0-100
  spice: number;   // 0-100
  sweetness: number; // 0-100
  earth: number;   // 0-100
}

export interface CigarProduct {
  id: string;
  name: string;
  collection: CigarCollection;
  vitola: CigarVitola;
  lengthMm: number;
  lengthInches: string;
  ringGauge: number;
  strength: CigarStrength;
  wrapper: {
    pt: string;
    en: string;
    es: string;
  };
  binder: {
    pt: string;
    en: string;
    es: string;
  };
  filler: {
    pt: string;
    en: string;
    es: string;
  };
  agingYears: number;
  burningTimeMin: string;
  priceEstimate: string;
  image: string;
  badge?: {
    pt: string;
    en: string;
    es: string;
  };
  tastingNotes: {
    pt: string[];
    en: string[];
    es: string[];
  };
  pairings: {
    pt: string[];
    en: string[];
    es: string[];
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
  aromas: AromaNotes;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  hasConsented: boolean;
}
