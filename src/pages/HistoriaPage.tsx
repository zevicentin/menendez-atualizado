import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import sedeMenendezImg from '../assets/images/sede-da-menendez-amerino.jpg';
import arturoToranoImg from '../assets/images/arturo-torano.jpg';
import felixMenendezImg from '../assets/images/felix-menendez-1979.jpg';
import alonsoMenendezImg from '../assets/images/historia-alonso-menendez-marca.jpg';
import donaFlorMarcaImg from '../assets/images/historia-dona-flor-marca.jpg';
import portfolioImg from '../assets/images/portfolio-premium-da-menendez-amerino.jpg';
import joseHenriqueImg from '../assets/images/jose-henrique-nunes-barreto.jpg';
import donaFlorGran93Img from '../assets/images/Dona-Flor-Gran-93.jpg';
import donaFlorMundoImg from '../assets/images/dona-flor-ganha-o-mundo.jpg';

interface HistoriaPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

export const HistoriaPage: React.FC<HistoriaPageProps> = ({
  currentLang,
  onNavigate,
}) => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);
  const t = TRANSLATIONS[currentLang];
  const h = t.historia;

  const milestoneImages = [
    sedeMenendezImg,
    arturoToranoImg,
    felixMenendezImg,
    alonsoMenendezImg,
    donaFlorMarcaImg,
    portfolioImg,
    joseHenriqueImg,
    donaFlorGran93Img,
    donaFlorMundoImg,
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06120d] border-b border-[#184030] text-center font-sans">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3.5 py-1 bg-[#112a20] text-[#d4b483] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full border border-[#1d4b38]">
            <span>{h.heroBadge}</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f5efe6] uppercase tracking-tight">
            {h.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed max-w-2xl mx-auto">
            {h.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Interactive Centennial Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4b483] font-bold">
            {h.milestonesEyebrow}
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#f5efe6] uppercase">
            {h.milestonesTitle}
          </h2>
        </div>

        {/* Milestone Buttons Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-[#184030] pb-6">
          {h.milestones.map((m, idx) => (
            <button
              key={m.year}
              id={`timeline-btn-${m.year}`}
              onClick={() => setSelectedMilestone(idx)}
              className={`px-5 py-2.5 rounded text-xs font-serif-luxury font-bold tracking-[0.2em] transition-all ${
                selectedMilestone === idx
                  ? 'bg-[#d4b483] text-[#06120d] shadow-lg scale-105'
                  : 'bg-[#091a13] text-[#c5b8aa] hover:bg-[#112a20] hover:text-[#f5efe6] border border-[#1b4332]'
              }`}
            >
              <span>{m.year}</span>
            </button>
          ))}
        </div>

        {/* Active Milestone Card */}
        <div className="max-w-4xl mx-auto bg-[#091a13] border border-[#1b4332] rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 animate-in fade-in duration-300">
          <div className="md:col-span-5 h-64 md:h-auto relative">
            <img
              src={milestoneImages[selectedMilestone]}
              alt={h.milestones[selectedMilestone].title}
              className="w-full h-full object-cover opacity-85"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="text-[10px] font-sans font-bold text-[#d4b483] uppercase tracking-[0.25em] bg-[#091a13]/90 px-3 py-1 rounded border border-[#1b4332] backdrop-blur">
                {h.milestones[selectedMilestone].caption}
              </span>
            </div>
          </div>
          <div className="md:col-span-7 p-8 space-y-4 flex flex-col justify-center">
            <div className="inline-block text-3xl font-serif-luxury font-bold text-[#d4b483]">
              {h.milestones[selectedMilestone].year}
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#f5efe6] uppercase">
              {h.milestones[selectedMilestone].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed whitespace-pre-line">
              {h.milestones[selectedMilestone].desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
