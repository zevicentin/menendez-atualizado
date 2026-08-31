import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Layers } from 'lucide-react';
import preparacaoSolo from '../assets/images/preparacao-solo.jpg';
import germinacao from '../assets/images/germinacao.jpg';
import secagem from '../assets/images/secagem.jpg';
import processamento from '../assets/images/processamento.jpg';
import construcao from '../assets/images/construcao.jpg';

interface ProcessoPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

export const ProcessoPage: React.FC<ProcessoPageProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = TRANSLATIONS[currentLang];
  const p = t.processo;

  return (
    <div className="space-y-20 pb-20 font-sans">
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06120d] border-b border-[#184030] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#112a20] text-[#d4b483] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full border border-[#1d4b38]">
            <Layers className="w-3.5 h-3.5" />
            <span>{p.badgeTitle}</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f5efe6] uppercase tracking-tight">
            {p.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed max-w-2xl mx-auto">
            {p.heroSubtitle}
          </p>
        </div>
      </section>

      <div className="space-y-16">
        {/* Escolha da área e preparação do solo */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231b14] uppercase tracking-wider">
{p.s1Title}
            </h2>
            <div className="w-16 h-px bg-[#8e7552] mx-auto" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={preparacaoSolo}
              alt={p.s1ImgAlt}
              className="w-full md:w-1/3 h-44 md:h-auto md:self-stretch object-cover rounded-lg border border-[#8e7552]"
            />
            <div className="flex-1 space-y-6">
              <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
                {p.s1Text1}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
                {p.s1Text2}
              </p>
            </div>
          </div>
        </section>

        {/* Semeadura e Germinação */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5efe6] uppercase tracking-wider">
{p.s2Title}
              </h2>
              <div className="w-16 h-px bg-[#d4b483] mx-auto" />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-6">
                <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                  {p.s2Text1}
                </p>
                <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                  {p.s2Text2}
                </p>
              </div>
              <img
                src={germinacao}
                alt={p.s2ImgAlt}
                className="w-full md:w-1/3 h-44 md:h-auto md:self-stretch object-cover rounded-lg border border-[#1d4b38]"
              />
            </div>
          </div>
        </section>

        {/* Plantio, Adubação e Replantio */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231b14] uppercase tracking-wider">
{p.s3Title}
            </h2>
            <div className="w-16 h-px bg-[#8e7552] mx-auto" />
          </div>
          <div className="space-y-6">
            <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
              {p.s3Text1}
            </p>
            <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
              {p.s3Text2}
            </p>
          </div>
        </section>

        {/* Cuidados e Manutenção */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5efe6] uppercase tracking-wider">
{p.s4Title}
              </h2>
              <div className="w-16 h-px bg-[#d4b483] mx-auto" />
            </div>
            <div className="space-y-6">
              <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                {p.s4Text1}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                {p.s4Text2}
              </p>
            </div>
          </div>
        </section>

        {/* Colheita e Secagem */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231b14] uppercase tracking-wider">
{p.s5Title}
            </h2>
            <div className="w-16 h-px bg-[#8e7552] mx-auto" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
<img
            src={secagem}
            alt={p.s5ImgAlt}
            className="w-full md:w-1/3 h-44 md:h-auto md:self-stretch object-cover rounded-lg border border-[#8e7552]"
          />
            <div className="flex-1 space-y-6">
              <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
                {p.s5Text1}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
                {p.s5Text2}
              </p>
            </div>
          </div>
        </section>

        {/* Beneficiamento e Fermentação */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5efe6] uppercase tracking-wider">
{p.s6Title}
              </h2>
              <div className="w-16 h-px bg-[#d4b483] mx-auto" />
            </div>
            <img
              src={processamento}
              alt={p.s6ImgAlt}
              className="w-full h-56 sm:h-72 object-cover rounded-lg border border-[#1d4b38]"
            />
            <div className="space-y-6">
              <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                <span className="font-bold">{p.s6Label1}</span> {p.s6Text1}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                <span className="font-bold">{p.s6Label2}</span> {p.s6Text2}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                <span className="font-bold">{p.s6Label3}</span> {p.s6Text3}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                <span className="font-bold">{p.s6Label4}</span> {p.s6Text4}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#c5b8aa] leading-relaxed">
                <span className="font-bold">{p.s6Label5}</span> {p.s6Text5}
              </p>
            </div>
          </div>
        </section>

        {/* Construção de Charutos */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231b14] uppercase tracking-wider">
{p.s7Title}
            </h2>
            <div className="w-16 h-px bg-[#8e7552] mx-auto" />
          </div>
          <img
            src={construcao}
            alt={p.s7ImgAlt}
            className="w-full h-56 sm:h-72 object-cover rounded-lg border border-[#8e7552]"
          />
          <div className="space-y-6">
            <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
              <span className="font-bold">{p.s7Label1}</span> {p.s7Text1}
            </p>
            <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
              <span className="font-bold">{p.s7Label2}</span> {p.s7Text2}
            </p>
            <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
              <span className="font-bold">{p.s7Label3}</span> {p.s7Text3}
            </p>
            <p className="font-sans text-sm sm:text-base text-[#3d2b1a] leading-relaxed">
              <span className="font-bold">{p.s7Label4}</span> {p.s7Text4}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};