import donaFlorLogo from '../assets/images/dona_flor_logo.png';
import alonsoMenendezLogo from '../assets/images/logo-Alonso-Menendez-branco.png';

// Dona Flor Cigar Images
import cigarDfCorona from '../assets/images/dona_flor_corona_cigar.png';
import cigarDfPetitCorona from '../assets/images/dona_flor_petit_corona.png';
import cigarDfRobusto from '../assets/images/dona_flor_robusto.png';
import cigarDfCorpoEAlma from '../assets/images/dona-flor-corpo-e-alma.png';
import cigarDfPuroMataFina from '../assets/images/dona-flor-puro-mata-fina.png';
import cigarDfSelecao from '../assets/images/dona-flor-selecao.png';
import cigarDfReservaEspecial from '../assets/images/dona-flor-reserva-especial.png';
import cigarDfRothschild from '../assets/images/dona_flor_rothschild.png';
import cigarDfPiramide from '../assets/images/dona-flor-piramide.png';
import cigarDfGraduado from '../assets/images/graduado2.png';
import cigarDfGran93 from '../assets/images/dona-flor-gran-93.png';
import cigarDfRuby from '../assets/images/dona-flor-ruby.png';
import cigarDfBlack from '../assets/images/dona-flor-black.png';
import cigarDfBlend from '../assets/images/dona-flor-brazilian-blend.png';

// Alonso Menendez Cigar Images
import alonsoMenendezRobustoImg from '../assets/images/alonso_menendez_robusto.png';
import alonsoMenendezCoronaImg from '../assets/images/alonso_menendez_corona.png';
import alonsoDelPatronRobustoImg from '../assets/images/alonso_menendez_del_patron_robusto.png';
import alonsoDelPatronGranCoronaImg from '../assets/images/alonso_menendez_del_patron_gran_corona.png';
import alonsoDelPatronDuoGorditoImg from '../assets/images/alonso_menendez_del_patron_duo_gordito.png';

// Dedicated Box Images
import boxDfCorona from '../assets/images/caixa-dona-flor-corona.png';
import boxDfPetitCorona from '../assets/images/caixa-dona-flor-petit-corona.png';
import boxDfRobusto from '../assets/images/caixa-dona-flor-robusto.png';
import boxDfPuroMataFina from '../assets/images/caixa-dona-flor-puro-mata-fina-20.png';
import boxDfSelecao from '../assets/images/caixa-dona-flor-selecao.png';
import boxDfReservaEspecial from '../assets/images/caixa-dona-flor-reserva-especial.png';
import boxDfRothschild from '../assets/images/caixa-dona-flor-rothschild.png';
import boxDfPiramide from '../assets/images/caixa-dona-flor-piramide.png';
import boxDfGraduado from '../assets/images/caixa-dona-flor-gran-corona.png';
import boxDfGran93 from '../assets/images/caixa-dona-flor-gran-93.png';
import boxDfRuby from '../assets/images/caixa-dona-flor-ruby-10.png';
import boxDfBlack from '../assets/images/caixa-dona-flor-black-20.png';
import boxDfCorpoEAlma from '../assets/images/caixa-dona-flor-corpo-e-alma.png';
import boxDfBrazilianBlend from '../assets/images/caixa-dona-flor-brazilian-blend.png';

import boxAmRobusto from '../assets/images/caixa-alonso-menendez-robusto.png';
import boxAmCorona from '../assets/images/caixa-alonso-menendez-corona.png';
import boxAmDelPatronRobusto from '../assets/images/caixa-alonso-menendez-del-patron-robusto.png';
import boxAmDelPatronGranCorona from '../assets/images/caixa-alonso-menendez-del-patron-gran-corona.png';
import boxAmDelPatronDuo from '../assets/images/caixa-alonso-menendez-del-patron-duo.png';

export interface CigarProductDetail {
  id: string;
  name: string;
  brand: string;
  brandLogo: string;
  rating?: {
    score: string | number;
    source: string;
    stars: number;
  };
  cigarImage: string;
  boxImage: string;
  sensoryDescription: {
    pt: string;
    en: string;
    es: string;
  };
  specs: {
    bitola: { label: { pt: string; en: string; es: string }; value: { pt: string; en: string; es: string } };
    medida: { label: { pt: string; en: string; es: string }; value: string };
    fortaleza: { label: { pt: string; en: string; es: string }; value: { pt: string; en: string; es: string } };
    capa: { label: { pt: string; en: string; es: string }; value: { pt: string; en: string; es: string } };
    capote: { label: { pt: string; en: string; es: string }; value: { pt: string; en: string; es: string } };
    miolo: { label: { pt: string; en: string; es: string }; value: { pt: string; en: string; es: string } };
    peso: { label: { pt: string; en: string; es: string }; value: string };
    embalagem: { label: { pt: string; en: string; es: string }; value: { pt: string; en: string; es: string } };
    quantidade: { label: { pt: string; en: string; es: string }; value: { pt: string; en: string; es: string } };
  };
}

export const DONA_FLOR_CIGARS: CigarProductDetail[] = [
  // 1. Dona Flor Corona
  {
    id: 'dona-flor-corona',
    name: 'Dona Flor Corona',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    rating: {
      score: 89,
      source: 'cigar aficionado',
      stars: 5,
    },
    cigarImage: cigarDfCorona,
    boxImage: boxDfCorona,
    sensoryDescription: {
      pt: 'Capa castanha e queima uniforme, com notas tostadas, terra e couro. Final cremoso e amadeirado com leve amargor.',
      en: 'Chestnut wrapper and uniform burn, with toasted notes, earth, and leather. Creamy and woody finish with a gentle bitterness.',
      es: 'Capa castaña y combustión uniforme, con notas tostadas, tierra y cuero. Final cremoso y amaderado con ligero amargor.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Corona', en: 'Corona', es: 'Corona' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5 1/2" x 46',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra, Connecticut ou Mata Fina',
          en: 'Cubra, Connecticut or Mata Fina',
          es: 'Cubra, Connecticut o Mata Fina',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '13 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 2. Dona Flor Petit Corona
  {
    id: 'dona-flor-petit-corona',
    name: 'Dona Flor Petit Corona',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    rating: {
      score: 88,
      source: 'cigar aficionado',
      stars: 5,
    },
    cigarImage: cigarDfPetitCorona,
    boxImage: boxDfPetitCorona,
    sensoryDescription: {
      pt: 'Formato curto e equilibrado, ideal para fumos rápidos mantendo o caráter clássico da Dona Flor.',
      en: 'Short and balanced format, ideal for quick smokes while maintaining Dona Flor’s classic character.',
      es: 'Formato corto y equilibrado, ideal para fumadas rápidas manteniendo el carácter clásico de Dona Flor.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Petit Corona', en: 'Petit Corona', es: 'Petit Corona' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '4 2/5" x 38',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra, Mata Fina ou Connecticut',
          en: 'Cubra, Mata Fina or Connecticut',
          es: 'Cubra, Mata Fina o Connecticut',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Fina e Mata Norte',
          en: 'Mata Fina and Mata Norte',
          es: 'Mata Fina y Mata Norte',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '8 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 3. Dona Flor Robusto
  {
    id: 'dona-flor-robusto',
    name: 'Dona Flor Robusto',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    rating: {
      score: 89,
      source: 'cigar aficionado',
      stars: 5,
    },
    cigarImage: cigarDfRobusto,
    boxImage: boxDfRobusto,
    sensoryDescription: {
      pt: 'Fumo tostado com sabores ricos de torrada, grãos de café e madeira. Corpo médio a encorpado.',
      en: 'Toasty smoke with rich flavors of toast, coffee beans, and wood. Medium to full body.',
      es: 'Fumada tostada con ricos sabores a tostadas, granos de café y madera. Cuerpo medio a pleno.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Robusto', en: 'Robusto', es: 'Robusto' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra ou Mata Fina',
          en: 'Cubra or Mata Fina',
          es: 'Cubra o Mata Fina',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '15 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 4. Dona Flor Puro Mata Fina Robusto
  {
    id: 'dona-flor-puro-mata-fina-robusto',
    name: 'Dona Flor Puro Mata Fina Robusto',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    rating: {
      score: 90,
      source: 'cigar journal',
      stars: 5,
    },
    cigarImage: cigarDfPuroMataFina,
    boxImage: boxDfPuroMataFina,
    sensoryDescription: {
      pt: 'Puro Mata Fina de excelente construção, perfil suave a médio com especiarias, terra, canela e pimenta.',
      en: 'Pure Mata Fina with excellent construction, mild-to-medium profile with spices, earth, cinnamon, and pepper.',
      es: 'Puro Mata Fina de excelente construcción, perfil suave a medio con especias, tierra, canela y pimienta.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Robusto', en: 'Robusto', es: 'Robusto' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Suave', en: 'Mild', es: 'Suave' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '15 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 5. Dona Flor Seleção Robusto
  {
    id: 'dona-flor-selecao-robusto',
    name: 'Dona Flor Seleção Robusto',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    rating: {
      score: 92,
      source: 'cigar aficionado',
      stars: 5,
    },
    cigarImage: cigarDfSelecao,
    boxImage: boxDfSelecao,
    sensoryDescription: {
      pt: 'Aroma delicioso a frio, fluxo perfeito; sabores achocolatados, notas amadeiradas e tostadas. Equilibrado e saboroso.',
      en: 'Delicious cold draw aroma, perfect airflow; chocolatey flavors, woody and toasty notes. Balanced and savory.',
      es: 'Delicioso aroma en frío, tiro perfecto; sabores achocolatados, notas amaderadas y tostadas. Equilibrado y sabroso.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Robusto', en: 'Robusto', es: 'Robusto' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio Mais', en: 'Medium Plus', es: 'Medio Más' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '15 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira de luxo',
          en: 'Luxury wooden box',
          es: 'Caja de madera de lujo',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 6. Dona Flor Reserva Especial Robusto
  {
    id: 'dona-flor-reserva-especial-robusto',
    name: 'Dona Flor Reserva Especial Robusto',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    cigarImage: cigarDfReservaEspecial,
    boxImage: boxDfReservaEspecial,
    sensoryDescription: {
      pt: 'Tabacos envelhecidos conferindo complexidade única, notas de especiarias finas e final longo e persistente.',
      en: 'Aged tobaccos lending unique complexity, fine spice notes, and a long, lingering finish.',
      es: 'Tabacos añejados que aportan una complejidad única, notas de especias finas y un final largo y persistente.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Robusto', en: 'Robusto', es: 'Robusto' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina Especial', en: 'Special Mata Fina', es: 'Mata Fina Especial' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina Envelhecidos',
          en: 'Aged Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina Añejados',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '15 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira nobre',
          en: 'Noble wooden box',
          es: 'Caja de madera noble',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '10 charutos',
          en: '10 cigars',
          es: '10 puros',
        },
      },
    },
  },

  // 7. Dona Flor Rothschild
  {
    id: 'dona-flor-rothschild',
    name: 'Dona Flor Rothschild',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    cigarImage: cigarDfRothschild,
    boxImage: boxDfRothschild,
    sensoryDescription: {
      pt: 'Ideal para fumos curtos: ótima construção, aroma agradável e sabor equilibrado, perfeito para iniciantes.',
      en: 'Ideal for short smokes: great construction, pleasant aroma, and balanced flavor, perfect for beginners.',
      es: 'Ideal para fumadas cortas: excelente construcción, aroma agradable y sabor equilibrado, perfecto para principiantes.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Rothschild', en: 'Rothschild', es: 'Rothschild' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '4" x 50',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra, Mata Fina ou Connecticut',
          en: 'Cubra, Mata Fina or Connecticut',
          es: 'Cubra, Mata Fina o Connecticut',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '11 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 8. Dona Flor Pirâmide
  {
    id: 'dona-flor-piramide',
    name: 'Dona Flor Pirâmide',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    rating: {
      score: 87,
      source: 'cigar aficionado',
      stars: 5,
    },
    cigarImage: cigarDfPiramide,
    boxImage: boxDfPiramide,
    sensoryDescription: {
      pt: 'Aspecto rústico, qualidade tostada e notas secas, com toque de espresso no paladar. Corpo médio.',
      en: 'Rustic appearance, toasty quality, and dry notes, with a touch of espresso on the palate. Medium body.',
      es: 'Aspecto rústico, calidad tostada y notas secas, con toque de espresso en el paladar. Cuerpo medio.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Pirâmide', en: 'Pyramid', es: 'Pirámide' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '6 1/2" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra, Connecticut ou Mata Fina',
          en: 'Cubra, Connecticut or Mata Fina',
          es: 'Cubra, Connecticut o Mata Fina',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '17 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira de luxo',
          en: 'Luxury wooden box',
          es: 'Caja de madera de lujo',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '20 charutos',
          en: '20 cigars',
          es: '20 puros',
        },
      },
    },
  },

  // 9. Dona Flor Graduado Gran Corona
  {
    id: 'dona-flor-graduado-gran-corona',
    name: 'Dona Flor Graduado Gran Corona',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    cigarImage: cigarDfGraduado,
    boxImage: boxDfGraduado,
    sensoryDescription: {
      pt: 'Bitola imponente para fumos longos e contemplativos. Fumo fresco, aromas de cedro e notas de especiarias suaves.',
      en: 'Imposing vitola for long and contemplative smokes. Fresh smoke, cedar aromas, and gentle spice notes.',
      es: 'Vitola imponente para fumadas largas y contemplativas. Humo fresco, aromas de cedro y notas de especias suaves.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Gran Corona', en: 'Gran Corona', es: 'Gran Corona' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '6" x 60',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra, Mata Fina ou Connecticut',
          en: 'Cubra, Mata Fina or Connecticut',
          es: 'Cubra, Mata Fina o Connecticut',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '22 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '20 charutos',
          en: '20 cigars',
          es: '20 puros',
        },
      },
    },
  },

  // 10. Dona Flor Gran 93 Gran Corona
  {
    id: 'dona-flor-gran-93-gran-corona',
    name: 'Dona Flor Gran 93 Gran Corona',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    rating: {
      score: 93,
      source: 'cigar journal',
      stars: 5,
    },
    cigarImage: cigarDfGran93,
    boxImage: boxDfGran93,
    sensoryDescription: {
      pt: 'Edição comemorativa nota 93: perfil exuberante com cacau nobre, café expresso, toques de canela e madeira tostada.',
      en: 'Commemorative 93-rated edition: exuberant profile with noble cocoa, espresso, touches of cinnamon, and toasted wood.',
      es: 'Edición conmemorativa nota 93: perfil exuberante con cacao noble, café expreso, toques de canela y madera tostada.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Gran Corona', en: 'Gran Corona', es: 'Gran Corona' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '6" x 60',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina Especial', en: 'Special Mata Fina', es: 'Mata Fina Especial' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina Reserva',
          en: 'Mata Norte and Mata Fina Reserve',
          es: 'Mata Norte y Mata Fina Reserva',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '22 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira de luxo comemorativa',
          en: 'Commemorative luxury wooden box',
          es: 'Caja de madera de lujo conmemorativa',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '10 charutos',
          en: '10 cigars',
          es: '10 puros',
        },
      },
    },
  },

  // 11. Dona Flor Ruby Toro
  {
    id: 'dona-flor-ruby-toro',
    name: 'Dona Flor Ruby Toro',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    cigarImage: cigarDfRuby,
    boxImage: boxDfRuby,
    sensoryDescription: {
      pt: 'Charuto expressivo e moderno na linha Ruby: notas de frutas secas, couro, café torrado e especiarias refinadas.',
      en: 'Expressive and modern cigar in the Ruby line: notes of dried fruits, leather, roasted coffee, and refined spices.',
      es: 'Puro expresivo y moderno de la línea Ruby: notas de frutos secos, cuero, café tostado y especias refinadas.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Toro', en: 'Toro', es: 'Toro' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '6" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio Mais', en: 'Medium Plus', es: 'Medio Más' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina Ruby', en: 'Ruby Mata Fina', es: 'Mata Fina Ruby' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina Selecionadas',
          en: 'Selected Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina Seleccionadas',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '18 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira de luxo / Display',
          en: 'Luxury wooden box / Display',
          es: 'Caja de madera de lujo / Display',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '10 charutos',
          en: '10 cigars',
          es: '10 puros',
        },
      },
    },
  },

  // 12. Dona Flor Black Gordito
  {
    id: 'dona-flor-black-gordito',
    name: 'Dona Flor Black Gordito',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    cigarImage: cigarDfBlack,
    boxImage: boxDfBlack,
    sensoryDescription: {
      pt: 'Perfil maduro e encorpado: notas pronunciadas de chocolate amargo, café torrado, madeira e pimenta suave.',
      en: 'Mature, full-bodied profile: pronounced notes of dark chocolate, roasted coffee, wood, and mild pepper.',
      es: 'Perfil maduro y corpulento: notas pronunciadas de chocolate amargo, café tostado, madera y pimienta suave.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Gordito', en: 'Gordito', es: 'Gordito' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '4 1/2" x 60',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Forte', en: 'Full', es: 'Fuerte' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina Maduro', en: 'Maduro Mata Fina', es: 'Mata Fina Maduro' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina Maduro',
          en: 'Mata Norte and Maduro Mata Fina',
          es: 'Mata Norte y Mata Fina Maduro',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '19 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira de luxo / Display',
          en: 'Luxury wooden box / Display',
          es: 'Caja de madera de lujo / Display',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '20 charutos',
          en: '20 cigars',
          es: '20 puros',
        },
      },
    },
  },

  // 13. Dona Flor Brazilian Blend Cigarillos
  {
    id: 'dona-flor-brazilian-blend-cigarillos',
    name: 'Dona Flor Brazilian Blend Cigarillos',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    cigarImage: cigarDfBlend,
    boxImage: boxDfBrazilianBlend,
    sensoryDescription: {
      pt: 'Cigarrilhas aromáticas e leves com 100% tabacos brasileiros, perfeitas para momentos cotidianos e pausas dinâmicas.',
      en: 'Aromatic and light cigarillos made with 100% Brazilian tobaccos, perfect for daily moments and quick breaks.',
      es: 'Cigarritos aromáticos y ligeros con 100% tabacos brasileños, perfectos para momentos cotidianos y pausas rápidas.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Cigarillo', en: 'Cigarillo', es: 'Cigarrito' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '9 cm x 24,7',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Suave', en: 'Mild', es: 'Suave' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: {
          pt: 'Mata Fina homogeneizada',
          en: 'Homogenized Mata Fina',
          es: 'Mata Fina homogeneizada',
        },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Fina e Virginia',
          en: 'Mata Fina and Virginia',
          es: 'Mata Fina y Virginia',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '1,5 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Display',
          en: 'Display Box',
          es: 'Display',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '10 carteiras de 10 cigarrilhas (100 unidades)',
          en: '10 packs of 10 cigarillos (100 units)',
          es: '10 cajetillas de 10 cigarritos (100 unidades)',
        },
      },
    },
  },

  // 14. Alonso Menendez Robusto
  {
    id: 'alonso-menendez-robusto',
    name: 'Alonso Menendez Robusto',
    brand: 'Alonso Menendez',
    brandLogo: alonsoMenendezLogo,
    rating: {
      score: 91,
      source: 'cigar journal',
      stars: 5,
    },
    cigarImage: alonsoMenendezRobustoImg,
    boxImage: boxAmRobusto,
    sensoryDescription: {
      pt: 'Aspecto rústico com capa escura e tiragem uniforme, entregando chocolate ao leite, creme e café.',
      en: 'Rustic look with dark wrapper and uniform draw, delivering milk chocolate, cream, and coffee.',
      es: 'Aspecto rústico con capa oscura y tiro uniforme, ofreciendo chocolate con leche, crema y café.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Robusto', en: 'Robusto', es: 'Robusto' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra, Mata Fina ou Connecticut',
          en: 'Cubra, Mata Fina or Connecticut',
          es: 'Cubra, Mata Fina o Connecticut',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '15 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 15. Alonso Menendez Corona
  {
    id: 'alonso-menendez-corona',
    name: 'Alonso Menendez Corona',
    brand: 'Alonso Menendez',
    brandLogo: alonsoMenendezLogo,
    rating: {
      score: 91,
      source: 'cigar journal',
      stars: 5,
    },
    cigarImage: alonsoMenendezCoronaImg,
    boxImage: boxAmCorona,
    sensoryDescription: {
      pt: 'Charuto rústico com madeira tostada como nota predominante, acompanhada de toques terrosos.',
      en: 'Rustic cigar with toasted wood as the dominant note, accompanied by earthy undertones.',
      es: 'Puro rústico con madera tostada como nota predominante, acompañada de toques terrosos.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Corona', en: 'Corona', es: 'Corona' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5 1/2" x 46',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: {
          pt: 'Cubra, Connecticut ou Mata Fina',
          en: 'Cubra, Connecticut or Mata Fina',
          es: 'Cubra, Connecticut or Mata Fina',
        },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '13 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '25 charutos',
          en: '25 cigars',
          es: '25 puros',
        },
      },
    },
  },

  // 16. Alonso Menendez Del Patrón Robusto
  {
    id: 'alonso-menendez-del-patron-robusto',
    name: 'Alonso Menendez Del Patrón Robusto',
    brand: 'Alonso Menendez',
    brandLogo: alonsoMenendezLogo,
    rating: {
      score: 89,
      source: 'cigar journal',
      stars: 5,
    },
    cigarImage: alonsoDelPatronRobustoImg,
    boxImage: boxAmDelPatronRobusto,
    sensoryDescription: {
      pt: 'Começa forte com cedro, terra, uvas passas e caramelo, seguido de cítricos, frutas secas, cogumelos e café.',
      en: 'Starts bold with cedar, earth, raisins, and caramel, followed by citrus, dried fruits, mushrooms, and coffee.',
      es: 'Comienza potente con cedro, tierra, pasas y caramelo, seguido de cítricos, frutos secos, setas y café.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Robusto', en: 'Robusto', es: 'Robusto' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Forte', en: 'Full', es: 'Fuerte' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Cubra', en: 'Cubra', es: 'Cubra' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '15 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira',
          en: 'Wooden box',
          es: 'Caja de madera',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '20 charutos',
          en: '20 cigars',
          es: '20 puros',
        },
      },
    },
  },

  // 17. Alonso Menendez Del Patrón Gran Corona
  {
    id: 'alonso-menendez-del-patron-gran-corona',
    name: 'Alonso Menendez Del Patrón Gran Corona',
    brand: 'Alonso Menendez',
    brandLogo: alonsoMenendezLogo,
    cigarImage: alonsoDelPatronGranCoronaImg,
    boxImage: boxAmDelPatronGranCorona,
    sensoryDescription: {
      pt: 'Aroma refinado e envolvente, com nuances de madeira e couro; mantém a consistência do início ao fim, perfeito com espresso.',
      en: 'Refined and captivating aroma with nuances of wood and leather; consistent from start to finish, perfect with espresso.',
      es: 'Aroma refinado y envolvente con matices de madera y cuero; mantiene la consistencia de principio a fin, ideal con espresso.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Gran Corona', en: 'Gran Corona', es: 'Gran Corona' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '6" x 60',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Forte', en: 'Full', es: 'Fuerte' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Cubra', en: 'Cubra', es: 'Cubra' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Cubra', en: 'Cubra', es: 'Cubra' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '24 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de madeira de luxo',
          en: 'Luxury wooden box',
          es: 'Caja de madera de lujo',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '10 charutos',
          en: '10 cigars',
          es: '10 puros',
        },
      },
    },
  },

  // 18. Alonso Menendez Del Patrón DUO Gordito
  {
    id: 'alonso-menendez-del-patron-duo-gordito',
    name: 'Alonso Menendez Del Patrón DUO Gordito',
    brand: 'Alonso Menendez',
    brandLogo: alonsoMenendezLogo,
    cigarImage: alonsoDelPatronDuoGorditoImg,
    boxImage: boxAmDelPatronDuo,
    sensoryDescription: {
      pt: 'Para quem busca um charuto encorpado e potente, com equilíbrio e sofisticação. Evolução sensorial marcante entre os terços.',
      en: 'For those seeking a full-bodied and powerful cigar with balance and sophistication. Distinct sensory evolution across thirds.',
      es: 'Para quienes buscan un puro con cuerpo y potencia, con equilibrio y sofisticación. Marcada evolución sensorial entre los tercios.',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Gordito', en: 'Gordito', es: 'Gordito' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '4 1/2" x 60',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Forte', en: 'Full', es: 'Fuerte' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Cubra Viso', en: 'Cubra Viso', es: 'Cubra Viso' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: { pt: 'Cubra Viso seca', en: 'Dry Cubra Viso', es: 'Cubra Viso seca' },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Brasil/Bahia e Cubra Ligero safra 2016',
          en: 'Brazil/Bahia and Cubra Ligero 2016 vintage',
          es: 'Brasil/Bahía y Cubra Ligero cosecha 2016',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '18 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa de luxo',
          en: 'Luxury box',
          es: 'Caja de lujo',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '10 charutos',
          en: '10 cigars',
          es: '10 puros',
        },
      },
    },
  },

  // 19. Dona Flor Corpo e Alma Robusto
  {
    id: 'dona-flor-corpo-e-alma-robusto',
    name: 'Dona Flor Corpo e Alma Robusto',
    brand: 'Dona Flor',
    brandLogo: donaFlorLogo,
    cigarImage: cigarDfCorpoEAlma,
    boxImage: boxDfCorpoEAlma,
    sensoryDescription: {
      pt: 'Seleção mista com três blends robusto: Seleção (forte, 92), Robusto (médio, 89) e Puro Mata Fina (suave, 90).',
      en: 'Special sampler with three distinct Robusto blends: Seleção (full, 92), Robusto (medium, 89), and Puro Mata Fina (mild, 90).',
      es: 'Selección mixta con tres ligas robusto: Seleção (fuerte, 92), Robusto (medio, 89) y Puro Mata Fina (suave, 90).',
    },
    specs: {
      bitola: {
        label: { pt: 'Bitola', en: 'Vitola', es: 'Vitola' },
        value: { pt: 'Sortido', en: 'Assorted Sampler', es: 'Surtido' },
      },
      medida: {
        label: { pt: 'Medida', en: 'Size', es: 'Medida' },
        value: '5" x 52',
      },
      fortaleza: {
        label: { pt: 'Fortaleza', en: 'Strength', es: 'Fortaleza' },
        value: { pt: 'Médio', en: 'Medium', es: 'Medio' },
      },
      capa: {
        label: { pt: 'Capa', en: 'Wrapper', es: 'Capa' },
        value: { pt: 'Mata Fina', en: 'Mata Fina', es: 'Mata Fina' },
      },
      capote: {
        label: { pt: 'Capote', en: 'Binder', es: 'Capote' },
        value: {
          pt: 'Mata Fina / Mata Norte',
          en: 'Mata Fina / Mata Norte',
          es: 'Mata Fina / Mata Norte',
        },
      },
      miolo: {
        label: { pt: 'Miolo / Tripa', en: 'Filler', es: 'Tripa' },
        value: {
          pt: 'Mata Norte e Mata Fina',
          en: 'Mata Norte and Mata Fina',
          es: 'Mata Norte y Mata Fina',
        },
      },
      peso: {
        label: { pt: 'Peso do charuto', en: 'Cigar Weight', es: 'Peso del puro' },
        value: '15 g',
      },
      embalagem: {
        label: { pt: 'Embalagem', en: 'Packaging', es: 'Empaque' },
        value: {
          pt: 'Caixa sortida 5x3',
          en: 'Assorted box 5x3',
          es: 'Caja surtida 5x3',
        },
      },
      quantidade: {
        label: { pt: 'Quantidade', en: 'Quantity', es: 'Cantidad' },
        value: {
          pt: '15 charutos: Seleção, Robusto e Puro Mata Fina',
          en: '15 cigars: Seleção, Robusto, and Puro Mata Fina',
          es: '15 puros: Seleção, Robusto y Puro Mata Fina',
        },
      },
    },
  },
];
