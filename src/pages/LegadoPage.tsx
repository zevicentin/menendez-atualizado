import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Sprout, ArrowRight } from 'lucide-react';
import mataImg from '../assets/images/mata.jpeg';
import aprendizesImg from '../assets/images/aprendizes.jpeg';
import laboralImg from '../assets/images/laboral.jpeg';
import psicologaImg from '../assets/images/psicologa.jpeg';
import segurancaImg from '../assets/images/seguranca.jpeg';
import socialImg from '../assets/images/social.jpeg';

interface LegadoPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

const roleSections = [
  { heading: 'roleHeading2', body: ['roleP2'] },
  { heading: 'roleHeading3', body: ['roleP3'] },
  { heading: 'roleHeading4', body: ['roleP4'] },
  { heading: 'roleHeading5', body: ['roleP5', 'roleP6'] },
] as const;

export const LegadoPage: React.FC<LegadoPageProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = TRANSLATIONS[currentLang];
  const leg = t.legado;

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 font-sans">
      {/* 1. Hero Header */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#06120d] border-b border-[#184030] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 bg-[#112a20] text-[#d4b483] text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border border-[#1d4b38]">
            <span>{leg.badgeTitle}</span>
          </div>

          <h1 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f5efe6] uppercase tracking-wide leading-tight">
            {leg.heroTitle}
          </h1>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4b483] to-transparent mx-auto" />

          <p className="text-xs sm:text-sm md:text-base text-[#c5b8aa] leading-relaxed max-w-3xl mx-auto font-light">
            {leg.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Introdução */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-6">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#231b14] uppercase tracking-wider mb-6">
            {leg.roleHeading1}
          </h2>
          <div className="w-16 h-px bg-[#8e7552] mx-auto mb-8" />
          <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
            {leg.roleP1}
          </p>
        </div>
      </section>

      {/* 3. Responsabilidade Social */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="bg-[#091a13] border border-[#1b4332] rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-5 text-center">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5efe6] uppercase tracking-wide">
                {leg.mataTitle}
              </h2>
              <p className="font-editorial italic text-base sm:text-lg text-[#d4b483] leading-relaxed mt-3">
                {leg.mataSubtitle}
              </p>
            </div>

            <img
              src={mataImg}
              alt="Mata de São Gonçalo"
              className="w-full h-72 object-cover rounded-lg border border-[#1b4332] mb-5"
            />

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.mataP1}
              </p>
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.mataP2}
              </p>
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.mataP3}
              </p>
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.mataP4}
              </p>
            </div>
          </div>

          <div className="bg-[#091a13] border border-[#1b4332] rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#f5efe6] uppercase tracking-wide text-center mb-5">
              {leg.roleHeading}
            </h2>

            <img
              src={socialImg}
              alt="Responsabilidade Social"
              className="w-full h-72 object-cover rounded-lg border border-[#1b4332] mb-5"
            />

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.roleDesc1}
              </p>
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.roleDesc2}
              </p>
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.roleDesc3}
              </p>
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.roleDesc4}
              </p>
            </div>
          </div>

          {roleSections.map((section) => {
            const sectionImg = section.heading === 'roleHeading2'
              ? { src: aprendizesImg, alt: 'Programa Jovem Aprendiz' }
              : section.heading === 'roleHeading3'
              ? { src: laboralImg, alt: 'Ginástica laboral' }
              : section.heading === 'roleHeading4'
              ? { src: psicologaImg, alt: 'Acompanhamento psicológico' }
              : section.heading === 'roleHeading5'
              ? { src: segurancaImg, alt: 'Segurança do Trabalho' }
              : null;
            return (
              <div
                key={section.heading}
                className="bg-[#091a13] border border-[#1b4332] rounded-2xl p-6 sm:p-8 shadow-xl"
              >
                <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#f5efe6] uppercase tracking-wide text-center mb-5">
                  {leg[section.heading]}
                </h2>
                {sectionImg ? (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img
                        src={sectionImg.src}
                        alt={sectionImg.alt}
                        className="w-full aspect-square object-cover rounded-lg border border-[#1d4b38]"
                      />
                    </div>
                    <div className="space-y-4 flex-1">
                      {section.body.map((key) => (
                        <p
                          key={key}
                          className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light"
                        >
                          {leg[key]}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {section.body.map((key) => (
                      <p
                        key={key}
                        className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light"
                      >
                        {leg[key]}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Citação Central & Assinatura */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#091a13] to-[#06120d] border-2 border-[#d4b483]/50 rounded-2xl p-8 sm:p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-[#112a20] border border-[#d4b483] flex items-center justify-center mx-auto text-[#d4b483]">
            <Sprout className="w-6 h-6" />
          </div>

          <blockquote className="space-y-4">
            <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#f5efe6] leading-relaxed max-w-2xl mx-auto">
              “{leg.quoteMain}”
            </p>
          </blockquote>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4b483] to-transparent mx-auto" />

          <div className="space-y-1 text-center">
            <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#d4b483] uppercase tracking-widest">
              {leg.signatureName}
            </h4>
            <p className="text-xs sm:text-sm text-[#8a9e93] font-mono tracking-wider">
              {leg.signatureLocation}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quick Links to Explore More */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('historia')}
            className="p-5 rounded-xl bg-[#091a13] hover:bg-[#112a20] border border-[#1b4332] text-left transition-all duration-200 group"
          >
            <div className="flex items-center justify-between text-[#d4b483] text-xs font-bold uppercase tracking-wider mb-2">
              <span>{t.nav.historia}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-[#c5b8aa] font-light">
              {currentLang === 'pt' ? 'Conheça a linhagem secular dos Menendez e a chegada à Bahia.' : 'Discover our secular lineage and arrival in Bahia.'}
            </p>
          </button>

          <button
            onClick={() => onNavigate('processo')}
            className="p-5 rounded-xl bg-[#091a13] hover:bg-[#112a20] border border-[#1b4332] text-left transition-all duration-200 group"
          >
            <div className="flex items-center justify-between text-[#d4b483] text-xs font-bold uppercase tracking-wider mb-2">
              <span>{t.nav.processo}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-[#c5b8aa] font-light">
              {currentLang === 'pt' ? 'Da semente à cura das folhas: o rigor em cada detalhe.' : 'From seed to leaf curing: precision in every detail.'}
            </p>
          </button>

          <button
            onClick={() => onNavigate('produtos')}
            className="p-5 rounded-xl bg-[#091a13] hover:bg-[#112a20] border border-[#1b4332] text-left transition-all duration-200 group"
          >
            <div className="flex items-center justify-between text-[#d4b483] text-xs font-bold uppercase tracking-wider mb-2">
              <span>{t.nav.produtos}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-[#c5b8aa] font-light">
              {currentLang === 'pt' ? 'Aprecie a nossa seleção de charutos nobres feitos à mão.' : 'Explore our collection of handcrafted cigars.'}
            </p>
          </button>
        </div>
      </section>
    </div>
  );
};
