import React from 'react';
import { Language, PageId, CigarProduct } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Sparkles, ArrowRight } from 'lucide-react';
import heroBgImage from '../assets/images/hero_artisan_rolling_1787340515758.jpg';
import donaFlorLogo from '../assets/images/Dona-Flor-Logo.png';
import alonsoMenendezLogo from '../assets/images/logo-Alonso-Menendez-branco.png';
import mataFinaImg from '../assets/images/mata-fina.jpg';
import mataNorteImg from '../assets/images/mata-norte.jpg';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenCigar: (cigar: CigarProduct) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="pb-24 relative">

      {/* ── 1. HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#06120d]">
        {/* Atmospheric Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06120d] via-[#06120d]/70 to-[#06120d]/85" />
        <div className="absolute inset-0 pointer-events-none opacity-40 immersive-ambient-glow" />

        {/* Left Heritage Marker */}
        <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10 select-none">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#d4b483] to-transparent" />
          <div className="vertical-rl rotate-180 text-[10px] tracking-[0.4em] uppercase text-[#7d968a] font-sans font-medium">
            {t.home.heritageMarker}
          </div>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#d4b483] to-transparent" />
        </div>

        {/* Right Craft Marker */}
        <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10 select-none">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#d4b483] to-transparent" />
          <div className="vertical-rl text-[10px] tracking-[0.4em] uppercase text-[#7d968a] font-sans font-medium">
            {t.home.craftMarker}
          </div>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#d4b483] to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center space-y-7 py-16 z-10 px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112a20]/90 border border-[#1d4b38] text-[#d4b483] text-[10px] font-semibold uppercase tracking-[0.3em] font-sans shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.brand.badge}</span>
          </div>

          <div className="text-[#d4b483] italic font-editorial text-xl sm:text-2xl tracking-widest">
            {t.home.heroEyebrow}
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5efe6] leading-none uppercase drop-shadow-md">
            {t.home.heroTitle}
          </h1>

          <p className="font-sans text-xs sm:text-sm lg:text-base text-[#c5b8aa] max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            {t.home.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              id="hero-explore-catalog-btn"
              onClick={() => { onNavigate('produtos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-10 py-4 bg-[#d4b483] text-[#06120d] font-sans font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#e2cca8] shadow-2xl transition-all flex items-center justify-center gap-3"
            >
              <span>{t.home.exploreCatalog}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-discover-process-btn"
              onClick={() => { onNavigate('processo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 bg-[#112a20]/90 hover:bg-[#183d2e] text-[#e5d9cc] hover:text-[#d4b483] font-sans font-bold text-xs uppercase tracking-[0.3em] border border-[#1d4b38] hover:border-[#d4b483] transition-all flex items-center justify-center gap-2"
            >
              <span>{t.home.discoverProcess}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. CHARUTOS PREMIUM BRASILEIROS ────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#231b14] uppercase tracking-wider mb-6">
            {t.home.premiumTitle}
          </h2>
          <div className="w-16 h-px bg-[#8e7552] mx-auto mb-8" />
          <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed mb-6">
            {t.home.premiumText1}
          </p>
          <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
            {t.home.premiumText2}
          </p>
        </div>
      </section>

      {/* ── 3. NOSSAS MARCAS ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#231b14] uppercase tracking-wider">
            {t.home.brandsTitle}
          </h2>
          <div className="w-16 h-px bg-[#8e7552] mx-auto mt-5" />
        </div>

        <div className="space-y-8">

          {/* Bloco Dona Flor */}
          <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:border-[#d4b483]/40 transition-colors duration-300">
            <div className="flex-shrink-0 flex items-center justify-center w-40 sm:w-48">
              <img
                src={donaFlorLogo}
                alt="Logo Dona Flor"
                className="w-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="font-sans text-sm text-[#c5b8aa] leading-relaxed">
                {t.home.donaFlorText1a}<em className="text-[#e5d9cc]">{t.home.donaFlorText1b}</em>{t.home.donaFlorText1c}
              </p>
              <p className="font-sans text-sm text-[#c5b8aa] leading-relaxed">
                {t.home.donaFlorText2}
              </p>
            </div>
          </div>

          {/* Bloco Alonso Menendez */}
          <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:border-[#d4b483]/40 transition-colors duration-300">
            <div className="flex-shrink-0 flex items-center justify-center w-40 sm:w-48">
              <img
                src={alonsoMenendezLogo}
                alt="Logo Alonso Menendez"
                className="w-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="font-sans text-sm text-[#c5b8aa] leading-relaxed">
                {t.home.alonsoText1}
              </p>
              <p className="font-sans text-sm text-[#c5b8aa] leading-relaxed">
                {t.home.alonsoText2}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. TABACO BAIANO DE ORIGEM ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#231b14] uppercase tracking-wider">
            {t.home.terroirTitle}
          </h2>
          <div className="w-16 h-px bg-[#8e7552] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mata Fina */}
          <div className="bg-[#091a13] border border-[#1b4332] rounded-xl overflow-hidden hover:border-[#d4b483]/40 transition-colors duration-300 group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={mataFinaImg}
                alt={t.home.mataFinaImgAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091a13] via-[#091a13]/20 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4b483] font-sans font-bold">{t.home.varietyLabel}</span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#f5efe6]">Mata Fina</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="font-sans text-sm text-[#c5b8aa] leading-relaxed mb-4">
                {t.home.mataFinaText}
              </p>
              <div className="pt-4 border-t border-[#143324]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#7d968a] font-sans font-semibold block mb-2">
                  {t.home.mataFinaLocationsLabel}
                </span>
                <p className="font-sans text-xs text-[#a09585] leading-relaxed">
                  {t.home.mataFinaLocations}
                </p>
              </div>
            </div>
          </div>

          {/* Mata Norte */}
          <div className="bg-[#091a13] border border-[#1b4332] rounded-xl overflow-hidden hover:border-[#d4b483]/40 transition-colors duration-300 group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={mataNorteImg}
                alt={t.home.mataNorteImgAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091a13] via-[#091a13]/20 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4b483] font-sans font-bold">{t.home.varietyLabel}</span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#f5efe6]">Mata Norte</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="font-sans text-sm text-[#c5b8aa] leading-relaxed mb-4">
                {t.home.mataNorteText}
              </p>
              <div className="pt-4 border-t border-[#143324]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#7d968a] font-sans font-semibold block mb-2">
                  {t.home.mataNorteLocationsLabel}
                </span>
                <p className="font-sans text-xs text-[#a09585] leading-relaxed">
                  {t.home.mataNorteLocations}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
