import React, { useState, useMemo } from 'react';
import { Language, CigarProduct } from '../types';
import { DONA_FLOR_CIGARS, CigarProductDetail } from '../data/donaFlorCigars';
import { ZoomIn, X, Search, ChevronDown, ChevronUp, Package, ShieldCheck, Star } from 'lucide-react';

const BITOLA_FILTERS = Array.from(new Set(DONA_FLOR_CIGARS.map((c) => c.specs.bitola.value.pt)));

const formatRatingSource = (source?: string) => {
  if (!source) return '';
  const s = source.toLowerCase().trim();
  if (s.includes('aficionado') || s.includes('afficionado')) return 'Cigar Aficionado';
  if (s.includes('journal')) return 'Cigar Journal';
  return source;
};

interface ProdutosPageProps {
  currentLang: Language;
  onOpenCigar?: (cigar: CigarProduct) => void;
}

export const ProdutosPage: React.FC<ProdutosPageProps> = ({ currentLang }) => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [ratingOpen, setRatingOpen] = useState<CigarProductDetail | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<'all' | 'Dona Flor' | 'Alonso Menendez'>('all');
  const [selectedFortaleza, setSelectedFortaleza] = useState<'all' | 'Suave' | 'Médio' | 'Forte'>('all');
  const [selectedBitola, setSelectedBitola] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
        setRatingOpen(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleSpecs = (id: string) => {
    setExpandedSpecs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProducts = useMemo(() => {
    return DONA_FLOR_CIGARS.filter((product) => {
      // 1. Brand filter
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }

      // 2. Bitola filter
      if (selectedBitola !== 'all' && product.specs.bitola.value.pt !== selectedBitola) {
        return false;
      }

      // 3. Fortaleza filter
      if (selectedFortaleza !== 'all') {
        const fort = product.specs.fortaleza.value.pt.toLowerCase();
        if (selectedFortaleza === 'Suave' && !fort.includes('suave')) return false;
        if (selectedFortaleza === 'Médio' && !fort.includes('médio') && !fort.includes('medio')) return false;
        if (selectedFortaleza === 'Forte' && !fort.includes('forte')) return false;
      }

      // 4. Search query
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const name = product.name.toLowerCase();
        const bitola = product.specs.bitola.value.pt.toLowerCase();
        const capa = product.specs.capa.value.pt.toLowerCase();
        const desc = (product.sensoryDescription[currentLang] || product.sensoryDescription.pt).toLowerCase();
        return name.includes(query) || bitola.includes(query) || capa.includes(query) || desc.includes(query);
      }

      return true;
    });
  }, [selectedBrand, selectedBitola, selectedFortaleza, searchTerm, currentLang]);

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans bg-[#C4AD8A]">
      {/* Header section with title and luxury filter bar */}
      <div className="max-w-7xl mx-auto mb-12 text-center space-y-4">
        <span className="inline-flex items-center px-3.5 py-1.5 bg-[#0e271c] border border-[#1b4332] text-[#d4b483] text-xs uppercase tracking-[0.2em] font-medium rounded-full shadow-sm">
          {currentLang === 'pt'
            ? 'Catálogo de Charutos'
            : currentLang === 'en'
            ? 'Noble Cigar Catalogue'
            : 'Catálogo Noble de Puros'}
        </span>

        <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#231b14] font-normal tracking-wide">
          {currentLang === 'pt'
            ? 'Portfólio de Charutos'
            : currentLang === 'en'
            ? 'Exclusive Cigar Portfolio'
            : 'Portafolio de Puros Exclusivos'}
        </h1>

        <p className="text-sm sm:text-base text-[#3d2b1a] max-w-3xl mx-auto font-light leading-relaxed">
          {currentLang === 'pt'
            ? 'Conheça cada bitola manufaturada com tabacos nobres do Recôncavo Baiano, suas notas sensoriais e especificações técnicas.'
            : currentLang === 'en'
            ? 'Discover each handmade vitola crafted with noble tobaccos from the Recôncavo Baiano, complete with sensory notes and technical specifications.'
            : 'Conozca cada vitola elaborada a mano con tabacos nobles del Recôncavo Baiano, sus notas sensoriales y especificaciones técnicas.'}
        </p>

        {/* Filter Toolbar */}
        <div className="pt-4 max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 bg-[#091a13] border border-[#1b4332] p-4 sm:p-5 rounded-2xl shadow-xl">
            {/* Brand Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                {
                  id: 'all',
                  label:
                    currentLang === 'pt'
                      ? `Todos (${DONA_FLOR_CIGARS.length})`
                      : currentLang === 'en'
                      ? `All (${DONA_FLOR_CIGARS.length})`
                      : `Todos (${DONA_FLOR_CIGARS.length})`,
                },
                {
                  id: 'Dona Flor',
                  label: `Dona Flor (${DONA_FLOR_CIGARS.filter((c) => c.brand === 'Dona Flor').length})`,
                },
                {
                  id: 'Alonso Menendez',
                  label: `Alonso Menendez (${DONA_FLOR_CIGARS.filter((c) => c.brand === 'Alonso Menendez').length})`,
                },
              ].map((brandTab) => (
                <button
                  key={brandTab.id}
                  type="button"
                  onClick={() => setSelectedBrand(brandTab.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                    selectedBrand === brandTab.id
                      ? 'bg-[#c59858] text-[#06120d] font-bold shadow-md shadow-[#c59858]/20 scale-105'
                      : 'bg-[#0d2218] text-[#c5b8aa] hover:bg-[#133022] hover:text-[#ebd8c1]'
                  }`}
                >
                  {brandTab.label}
                </button>
              ))}
            </div>

            {/* Bitola Filter */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
              <span className="text-xs text-[#7d968a] mr-1 font-medium">
                {currentLang === 'pt' ? 'Bitola:' : currentLang === 'en' ? 'Vitola:' : 'Vitola:'}
              </span>
              {[
                { id: 'all', label: currentLang === 'pt' ? 'Todas' : currentLang === 'en' ? 'All' : 'Todas' },
                ...BITOLA_FILTERS.map((bitola) => ({
                  id: bitola,
                  label:
                    DONA_FLOR_CIGARS.find((c) => c.specs.bitola.value.pt === bitola)?.specs.bitola.value[currentLang] ||
                    bitola,
                })),
              ].map((bitolaTab) => (
                <button
                  key={bitolaTab.id}
                  type="button"
                  onClick={() => setSelectedBitola(bitolaTab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectedBitola === bitolaTab.id
                      ? 'bg-[#184030] text-[#d4b483] border border-[#c59858] shadow-sm'
                      : 'bg-[#091811] text-[#8ea598] hover:bg-[#10291d] border border-transparent'
                  }`}
                >
                  {bitolaTab.label}
                </button>
              ))}
            </div>

            {/* Search and Fortaleza Controls */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-1">
              {/* Search Input */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-[#7d968a] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={
                    currentLang === 'pt'
                      ? 'Buscar charuto, bitola, capa...'
                      : currentLang === 'en'
                      ? 'Search cigar, vitola, wrapper...'
                      : 'Buscar puro, vitola, capa...'
                  }
                  className="w-full bg-[#050f0a] border border-[#1d4332] rounded-xl pl-10 pr-8 py-2.5 text-xs sm:text-sm text-[#ebd8c1] placeholder-[#5a7366] focus:outline-none focus:border-[#c59858] transition-colors"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7d968a] hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Fortaleza Buttons */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center">
                <span className="text-xs text-[#7d968a] mr-1 hidden md:inline font-medium">
                  {currentLang === 'pt' ? 'Fortaleza:' : currentLang === 'en' ? 'Strength:' : 'Fortaleza:'}
                </span>
                {[
                  { id: 'all', label: currentLang === 'pt' ? 'Todas' : currentLang === 'en' ? 'All' : 'Todas' },
                  { id: 'Suave', label: currentLang === 'pt' ? 'Suave' : currentLang === 'en' ? 'Mild' : 'Suave' },
                  { id: 'Médio', label: currentLang === 'pt' ? 'Médio' : currentLang === 'en' ? 'Medium' : 'Medio' },
                  { id: 'Forte', label: currentLang === 'pt' ? 'Forte' : currentLang === 'en' ? 'Full' : 'Fuerte' },
                ].map((fort) => (
                  <button
                    key={fort.id}
                    type="button"
                    onClick={() => setSelectedFortaleza(fort.id as any)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      selectedFortaleza === fort.id
                        ? 'bg-[#184030] text-[#d4b483] border border-[#c59858] shadow-sm'
                        : 'bg-[#091811] text-[#8ea598] hover:bg-[#10291d] border border-transparent'
                    }`}
                  >
                    {fort.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 3-Column Responsive Grid Container */}
      <div className="max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="bg-[#0b1a13] border border-[#1b3d2d] rounded-2xl p-12 text-center space-y-4 max-w-xl mx-auto">
            <p className="text-[#ebd8c1] font-serif-luxury text-xl">
              {currentLang === 'pt'
                ? 'Nenhum charuto encontrado para os filtros selecionados.'
                : currentLang === 'en'
                ? 'No cigars found matching your filters.'
                : 'No se encontraron puros con los filtros seleccionados.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedBrand('all');
                setSelectedBitola('all');
                setSelectedFortaleza('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#184030] text-[#d4b483] border border-[#c59858] text-xs font-medium rounded-lg hover:bg-[#20523e] transition-all cursor-pointer"
            >
              {currentLang === 'pt' ? 'Limpar filtros' : currentLang === 'en' ? 'Clear filters' : 'Limpiar filtros'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProducts.map((product: CigarProductDetail) => {
              const s = product.specs;
              const isSpecsOpen = !!expandedSpecs[product.id];

              return (
                <article
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="bg-[#0b1a13] border border-[#1b3d2d] rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:border-[#c59858]/60 hover:shadow-2xl hover:shadow-[#040e09] flex flex-col justify-between group"
                >
                  {/* Subtle ambient light glow on card top */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#164230]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#c59858]/10 transition-colors" />

                  {/* Card Top: Brand Chip & Rating Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {/* Brand Label Chip */}
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-[#091f15] text-[#c59858] border border-[#1d4332]">
                        {product.brand}
                      </span>

                      {/* Rating Button — opens evaluation modal */}
                      {product.rating && (
                        <button
                          id={`rating-button-${product.id}`}
                          type="button"
                          onClick={() => setRatingOpen(product)}
                          className="inline-flex items-center gap-1.5 border border-[#caa568] px-2.5 py-1 bg-[#071911] rounded-lg shadow-sm shrink-0 hover:bg-[#122e20] hover:border-[#ddc68a] transition-colors cursor-pointer"
                          title={
                            currentLang === 'pt'
                              ? `Avaliação ${product.rating.score} por ${formatRatingSource(product.rating.source)} - Clique para ver detalhes`
                              : currentLang === 'en'
                              ? `Rating ${product.rating.score} by ${formatRatingSource(product.rating.source)} - Click for details`
                              : `Valoración ${product.rating.score} por ${formatRatingSource(product.rating.source)} - Clic para ver detalles`
                          }
                        >
                          <Star className="w-3.5 h-3.5 text-[#caa568] fill-[#caa568] shrink-0" />
                          <span className="text-[10px] sm:text-[11px] font-bold tracking-wide text-[#caa568] whitespace-nowrap">
                            {product.rating.score} • {formatRatingSource(product.rating.source)}
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Brand Emblem / Logo Centered */}
                    <div className="flex justify-center mb-3">
                      <img
                        src={product.brandLogo}
                        alt={product.brand}
                        className="w-28 sm:w-32 max-h-16 object-contain drop-shadow transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Product Name Title */}
                    <div className="text-center space-y-2 mb-4">
                      <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#ebd8c1] font-medium tracking-wide leading-snug min-h-[56px] flex items-center justify-center">
                        {product.name}
                      </h2>
                      <div className="w-16 h-[2px] bg-[#c59858] rounded-full mx-auto" />
                    </div>

                    {/* Horizontal Cigar Showcase Image (Clickable for Lightbox Zoom) */}
                    <div className="my-3 flex justify-center items-center relative">
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxImage({
                            src: product.cigarImage,
                            title: product.name,
                            subtitle: `${s.bitola.value[currentLang] || s.bitola.value.pt} — ${s.medida.value}`,
                          })
                        }
                        className="w-full h-32 sm:h-36 flex justify-center items-center relative cursor-zoom-in group/cigar focus:outline-none"
                        title={
                          currentLang === 'pt'
                            ? 'Clique para ampliar o charuto'
                            : currentLang === 'en'
                            ? 'Click to enlarge cigar photo'
                            : 'Haga clic para ampliar la foto del puro'
                        }
                      >
                        <img
                          src={product.cigarImage}
                          alt={`${product.name} Cigar`}
                          className="w-full max-h-28 sm:max-h-32 object-contain drop-shadow-xl transition-transform duration-300 group-hover/cigar:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Zoom Badge on Hover */}
                        <span className="absolute bottom-1 right-2 inline-flex items-center gap-1 px-2 py-0.5 bg-[#06120d]/85 text-[#d4b483] text-[10px] font-medium rounded-full border border-[#1d4b38] opacity-0 group-hover/cigar:opacity-100 transition-opacity duration-200 pointer-events-none shadow">
                          <ZoomIn className="w-3 h-3" />
                          <span>{currentLang === 'pt' ? 'Ampliar' : currentLang === 'en' ? 'Enlarge' : 'Ampliar'}</span>
                        </span>
                      </button>
                    </div>

                    {/* Sensory Tasting Description */}
                    <div className="mb-4">
                      <p className="text-xs sm:text-sm text-[#e5ded4] leading-relaxed font-normal bg-[#07150e]/60 p-3 rounded-xl border border-[#143324]/80 line-clamp-3">
                        {product.sensoryDescription[currentLang] || product.sensoryDescription.pt}
                      </p>
                    </div>

                    </div>

                  {/* Card Bottom: Technical Specs Toggle & Box Showcase */}
                  <div className="border-t border-[#173828] pt-4 mt-2">
                    {/* Collapsible Detailed Specs */}
                    {isSpecsOpen && (
                      <div className="space-y-2 mb-4 text-xs text-[#ede6dc] bg-[#071710] p-3 rounded-xl border border-[#1d4332] animate-in fade-in duration-200">
                        <div>
                          <span className="font-bold text-[#caa568]">
                            {s.bitola.label[currentLang] || s.bitola.label.pt}:
                          </span>{' '}
                          <span>{s.bitola.value[currentLang] || s.bitola.value.pt}</span>
                        </div>

                        <div>
                          <span className="font-bold text-[#caa568]">
                            {s.medida.label[currentLang] || s.medida.label.pt}:
                          </span>{' '}
                          <span>{s.medida.value}</span>
                        </div>

                        <div>
                          <span className="font-bold text-[#caa568]">
                            {s.fortaleza.label[currentLang] || s.fortaleza.label.pt}:
                          </span>{' '}
                          <span>{s.fortaleza.value[currentLang] || s.fortaleza.value.pt}</span>
                        </div>

                        <div>
                          <span className="font-bold text-[#caa568]">
                            {s.capa.label[currentLang] || s.capa.label.pt}:
                          </span>{' '}
                          <span>{s.capa.value[currentLang] || s.capa.value.pt}</span>
                        </div>

                        <div>
                          <span className="font-bold text-[#caa568]">
                            {s.capote.label[currentLang] || s.capote.label.pt}:
                          </span>{' '}
                          <span>{s.capote.value[currentLang] || s.capote.value.pt}</span>
                        </div>

                        <div>
                          <span className="font-bold text-[#caa568]">
                            {s.miolo.label[currentLang] || s.miolo.label.pt}:
                          </span>{' '}
                          <span>{s.miolo.value[currentLang] || s.miolo.value.pt}</span>
                        </div>

                        <div className="border-t border-[#1d4332] my-2" />

                        <div>
                          <span className="font-bold text-[#f5efe6]">
                            {s.peso.label[currentLang] || s.peso.label.pt}:
                          </span>{' '}
                          <span>{s.peso.value}</span>
                        </div>

                        <div>
                          <span className="font-bold text-[#f5efe6]">
                            {s.embalagem.label[currentLang] || s.embalagem.label.pt}:
                          </span>{' '}
                          <span>{s.embalagem.value[currentLang] || s.embalagem.value.pt}</span>
                        </div>

                        <div>
                          <span className="font-bold text-[#f5efe6]">
                            {s.quantidade.label[currentLang] || s.quantidade.label.pt}:
                          </span>{' '}
                          <span>{s.quantidade.value[currentLang] || s.quantidade.value.pt}</span>
                        </div>
                      </div>
                    )}

                    {/* Actions Row: Toggle Specs & Box Image Lightbox Button */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => toggleSpecs(product.id)}
                        className="inline-flex items-center gap-1.5 text-xs text-[#d4b483] hover:text-[#ebd8c1] font-medium py-1.5 px-2.5 rounded-lg hover:bg-[#122e20] transition-colors cursor-pointer"
                      >
                        <span>
                          {isSpecsOpen
                            ? currentLang === 'pt'
                              ? 'Ocultar Detalhes'
                              : currentLang === 'en'
                              ? 'Hide Specs'
                              : 'Ocultar'
                            : currentLang === 'pt'
                            ? 'Ficha Técnica'
                            : currentLang === 'en'
                            ? 'View Specs'
                            : 'Ficha Técnica'}
                        </span>
                        {isSpecsOpen ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Box Image Thumbnail Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxImage({
                            src: product.boxImage,
                            title: `${product.name} — ${s.embalagem.value[currentLang] || s.embalagem.value.pt}`,
                            subtitle: s.quantidade.value[currentLang] || s.quantidade.value.pt,
                          })
                        }
                        className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#0d261b] hover:bg-[#163d2c] border border-[#1b4332] text-[#e5ded4] hover:text-[#d4b483] text-xs font-medium transition-all shadow-sm group/box cursor-pointer"
                        title={
                          currentLang === 'pt'
                            ? 'Clique para ampliar a caixa'
                            : currentLang === 'en'
                            ? 'Click to enlarge cigar box'
                            : 'Haga clic para ampliar la caja'
                        }
                      >
                        <Package className="w-3.5 h-3.5 text-[#c59858]" />
                        <span>{currentLang === 'pt' ? 'Ver Caixa' : currentLang === 'en' ? 'View Box' : 'Ver Caja'}</span>
                        <ZoomIn className="w-3 h-3 text-[#7d968a] group-hover/box:text-[#c59858]" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {lightboxImage && (
        <div
          id="product-image-lightbox"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#040b07]/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          {/* Top Bar with Title & Close Button */}
          <div
            className="w-full max-w-6xl flex items-center justify-between z-10 py-2 border-b border-[#1b4332]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#f5efe6] tracking-wide">
                {lightboxImage.title}
              </h3>
              {lightboxImage.subtitle && (
                <p className="text-xs sm:text-sm text-[#d4b483] font-medium">
                  {lightboxImage.subtitle}
                </p>
              )}
            </div>

            <button
              id="lightbox-close-button"
              type="button"
              onClick={() => setLightboxImage(null)}
              className="p-2.5 rounded-full bg-[#112a20] border border-[#1d4b38] text-[#e5ded4] hover:text-[#d4b483] hover:bg-[#183d2e] transition-all cursor-pointer"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Container */}
          <div
            className="flex-1 w-full max-w-6xl flex items-center justify-center p-4 sm:p-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[75vh] w-auto max-w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-300 select-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Hint */}
          <div className="text-[11px] text-[#7d968a] uppercase tracking-widest text-center pb-2">
            {currentLang === 'pt'
              ? 'Pressione Esc ou clique em qualquer lugar para fechar'
              : currentLang === 'en'
              ? 'Press Esc or click anywhere to close'
              : 'Presione Esc o haga clic en cualquier lugar para cerrar'}
          </div>
        </div>
      )}

      {/* Rating Details Modal */}
      {ratingOpen && ratingOpen.rating && (
        <div
          id="product-rating-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#040b07]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setRatingOpen(null)}
        >
          <div
            className="w-full max-w-md max-h-[85vh] overflow-y-auto bg-[#0a1a12] border border-[#1d4332] rounded-2xl shadow-2xl p-6 sm:p-8 relative animate-in zoom-in-95 duration-300 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="rating-close-button"
              type="button"
              onClick={() => setRatingOpen(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#112a20] border border-[#1d4b38] text-[#e5ded4] hover:text-[#d4b483] hover:bg-[#183d2e] transition-all cursor-pointer"
              aria-label="Close rating details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0e271c] border border-[#1b4332] text-[#d4b483] text-[10px] uppercase tracking-[0.2em] font-medium rounded-full">
                <Star className="w-3 h-3 text-[#c59858]" />
                {currentLang === 'pt'
                  ? 'Avaliação'
                  : currentLang === 'en'
                  ? 'Rating'
                  : 'Valoración'}
              </span>
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#ebd8c1] font-medium tracking-wide mb-1">
              {ratingOpen.name}
            </h3>

            <p className="text-xs uppercase tracking-[0.2em] text-[#caa568] mb-6">
              {formatRatingSource(ratingOpen.rating.source)}
            </p>

            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-serif-luxury text-[#d4b483] leading-none">
                  {ratingOpen.rating.score}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#7d968a] mt-1">
                  {currentLang === 'pt'
                    ? 'Nota'
                    : currentLang === 'en'
                    ? 'Score'
                    : 'Puntuación'}
                </div>
              </div>
              <div className="flex gap-1 pt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < ratingOpen.rating!.stars ? 'text-[#caa568] fill-[#caa568]' : 'text-[#3d5a48]'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-[#1d4332] pt-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c59858] mb-2">
                {currentLang === 'pt'
                  ? 'Notas Sensoriais'
                  : currentLang === 'en'
                  ? 'Sensory Notes'
                  : 'Notas Sensoriales'}
              </p>
              <p className="text-sm text-[#e5ded4] leading-relaxed italic">
                &ldquo;{ratingOpen.sensoryDescription[currentLang] || ratingOpen.sensoryDescription.pt}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
