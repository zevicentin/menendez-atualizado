import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Users } from 'lucide-react';
import estruturaImg from '../assets/images/estrutura.jpg';
import donaflorCharutosImg from '../assets/images/donaflorCharutos.jpg';
import marcenariaImg from '../assets/images/marcenaria.jpg';
import mercadoImg from '../assets/images/mercado.jpg';

interface SobrePageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

export const SobrePage: React.FC<SobrePageProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = TRANSLATIONS[currentLang];
  const s = t.sobre;

  return (
    <div className="space-y-20 pb-20 font-sans">
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06120d] border-b border-[#184030] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#112a20] text-[#d4b483] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full border border-[#1d4b38]">
            <Users className="w-3.5 h-3.5" />
            <span>{s.badgeTitle}</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f5efe6] uppercase tracking-tight">
            {s.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed max-w-2xl mx-auto">
            {s.heroSubtitle}
          </p>
        </div>
      </section>

      {/* A Menendez Amerino */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-4">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#231b14] uppercase tracking-wider">
            {s.brandHeading}
          </h2>
          <div className="w-16 h-px bg-[#8e7552] mx-auto" />
          <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
            {s.brandText1}
          </p>
          <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
            {s.brandText2}
          </p>
        </div>
      </section>

      {/* Estrutura Aprimorada */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-8 sm:p-10 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#f5efe6] uppercase tracking-tight">
{s.structureTitle}
            </h2>
            <div className="h-px w-16 bg-[#d4b483] mx-auto" />
          </div>

          <div className="space-y-6">
            <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed font-light">
              {s.structureIntro}
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={estruturaImg}
                  alt={s.estruturaImgAlt}
                  className="w-full h-44 md:h-full object-cover rounded-lg border border-[#1d4b38]"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed font-light flex-1">
                {s.structureText1}
              </p>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={donaflorCharutosImg}
                  alt={s.donaflorImgAlt}
                  className="w-full h-44 md:h-full object-cover rounded-lg border border-[#1d4b38]"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed font-light flex-1">
                {s.brandText3}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={marcenariaImg}
                  alt={s.marcenariaImgAlt}
                  className="w-full h-44 md:h-full object-cover rounded-lg border border-[#1d4b38]"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed font-light flex-1">
                {s.expansionText1}
              </p>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={mercadoImg}
                  alt={s.mercadoImgAlt}
                  className="w-full h-44 md:h-full object-cover rounded-lg border border-[#1d4b38]"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed font-light flex-1">
                {s.expansionText2}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed font-light">
              {s.structureText2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};