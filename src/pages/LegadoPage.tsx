import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Sprout, LandPlot, Users, Sparkles, Building2, BookOpenCheck, ArrowRight } from 'lucide-react';
import plantacaoImg from '../assets/images/foto-plantacao.jpg';
import sedeImg from '../assets/images/sede-da-menendez-amerino.jpg';
import mataFinaImg from '../assets/images/mata-fina.jpg';
import beneficiamentoImg from '../assets/images/beneficiamento.jpg';

interface LegadoPageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

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

          <div className="pt-2">
            <span className="inline-block text-[11px] font-mono tracking-widest text-[#8a9e93] uppercase bg-[#0a1f16] px-4 py-1.5 rounded-full border border-[#163829]">
              {leg.partnershipTag}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Institutional Partnership & Lead Manifesto */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#091a13] border border-[#1b4332] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl space-y-8 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#184030]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#d4b483] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#d4b483]" />
              <span>O Propósito da Iniciativa</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-[#f5efe6] leading-relaxed font-light">
              {leg.initiativeLead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#184030]">
            <div className="bg-[#06120d]/80 border border-[#184030] rounded-xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#112a20] border border-[#1d4b38] flex items-center justify-center text-[#d4b483]">
                <LandPlot className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold font-serif-luxury tracking-wider text-[#f5efe6] uppercase">
                {currentLang === 'pt' ? 'Resgate do Terroir' : currentLang === 'en' ? 'Terroir Revival' : 'Rescate del Terroir'}
              </h3>
              <p className="text-xs text-[#c5b8aa] font-light leading-relaxed">
                {currentLang === 'pt'
                  ? 'Retomada do cultivo de variedades históricas associadas à tradição secular de São Gonçalo.'
                  : currentLang === 'en'
                  ? 'Resuming cultivation of heritage varieties historically tied to São Gonçalo tradition.'
                  : 'Reanudación del cultivo de variedades históricas ligadas a la tradición secular de São Gonçalo.'}
              </p>
            </div>

            <div className="bg-[#06120d]/80 border border-[#184030] rounded-xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#112a20] border border-[#1d4b38] flex items-center justify-center text-[#d4b483]">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold font-serif-luxury tracking-wider text-[#f5efe6] uppercase">
                {currentLang === 'pt' ? 'Pequenos Produtores' : currentLang === 'en' ? 'Smallholder Growers' : 'Pequeños Productores'}
              </h3>
              <p className="text-xs text-[#c5b8aa] font-light leading-relaxed">
                {currentLang === 'pt'
                  ? 'Geração de renda sustentável, diversificação produtiva e novas oportunidades no campo.'
                  : currentLang === 'en'
                  ? 'Sustainable income generation, crop diversification, and fresh rural opportunities.'
                  : 'Generación de ingresos sostenibles, diversificación productiva y oportunidades en el campo.'}
              </p>
            </div>

            <div className="bg-[#06120d]/80 border border-[#184030] rounded-xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#112a20] border border-[#1d4b38] flex items-center justify-center text-[#d4b483]">
                <BookOpenCheck className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold font-serif-luxury tracking-wider text-[#f5efe6] uppercase">
                {currentLang === 'pt' ? 'Transferência Técnica' : currentLang === 'en' ? 'Technical Guidance' : 'Transferencia Técnica'}
              </h3>
              <p className="text-xs text-[#c5b8aa] font-light leading-relaxed">
                {currentLang === 'pt'
                  ? 'Compartilhamento de know-how acumulado em quase cinco décadas de manufatura artesanal.'
                  : currentLang === 'en'
                  ? 'Sharing know-how accumulated across nearly five decades of artisanal craftsmanship.'
                  : 'Compartir conocimientos acumulados en casi cinco décadas de manufactura artesanal.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Tradição em São Gonçalo & Solo */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#5c432d] uppercase font-bold">
                {currentLang === 'pt' ? 'História & Raízes' : currentLang === 'en' ? 'History & Roots' : 'Historia y Raíces'}
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231b14] uppercase tracking-wide">
                {leg.historyHeading}
              </h2>
              <div className="w-16 h-0.5 bg-[#8e7552]" />
            </div>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal">
              {leg.historyP1}
            </p>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal">
              {leg.historyP2}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#8e7552]/40 group">
              <img
                src={plantacaoImg}
                alt="Plantação de tabaco em São Gonçalo dos Campos"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06120d]/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-[#f5efe6] font-medium tracking-wide">
                  {currentLang === 'pt'
                    ? 'Campos férteis e clima privilegiado de São Gonçalo dos Campos, Bahia'
                    : currentLang === 'en'
                    ? 'Fertile soils and prime microclimate of São Gonçalo dos Campos, Bahia'
                    : 'Campos fértiles y microclima privilegiado de São Gonçalo dos Campos, Bahía'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Reconectando Passado e Presente */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#091a13] border border-[#1b4332] rounded-2xl p-8 sm:p-10 lg:p-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#d4b483] uppercase tracking-[0.2em]">
              {currentLang === 'pt' ? 'O Futuro no Campo' : currentLang === 'en' ? 'The Future in the Field' : 'El Futuro en el Campo'}
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5efe6] uppercase tracking-wide">
              {leg.reconnectHeading}
            </h2>
            <div className="w-16 h-0.5 bg-[#d4b483] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.reconnectP1}
              </p>
              <p className="text-sm sm:text-base text-[#c5b8aa] leading-relaxed font-light">
                {leg.reconnectP2}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#184030]">
              <img
                src={mataFinaImg}
                alt="Variedade de tabaco baiano"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. A Menendez Amerino: Quase 5 Décadas de História em São Gonçalo */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#8e7552]/40">
              <img
                src={sedeImg}
                alt="Sede histórica da Menendez Amerino em São Gonçalo dos Campos"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-[#091a13] border-t border-[#184030] text-xs text-[#c5b8aa] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#d4b483] shrink-0" />
                <span>
                  {currentLang === 'pt'
                    ? 'Sede da Menendez Amerino em São Gonçalo dos Campos desde 1977'
                    : currentLang === 'en'
                    ? 'Menendez Amerino headquarters in São Gonçalo dos Campos since 1977'
                    : 'Sede de Menendez Amerino en São Gonçalo dos Campos desde 1977'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#5c432d] uppercase font-bold">
                {currentLang === 'pt' ? 'Nossa Origem' : currentLang === 'en' ? 'Our Origin' : 'Nuestro Origen'}
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231b14] uppercase tracking-wide">
                {leg.commitmentHeading}
              </h2>
              <div className="w-16 h-0.5 bg-[#8e7552]" />
            </div>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal">
              {leg.commitmentP1}
            </p>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal">
              {leg.commitmentP2}
            </p>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal">
              {leg.commitmentP3}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Compartilhamento de Saber e Integração Territorial */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#5c432d] uppercase font-bold">
                {currentLang === 'pt' ? 'Responsabilidade & Futuro' : currentLang === 'en' ? 'Responsibility & Future' : 'Responsabilidad y Futuro'}
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231b14] uppercase tracking-wide">
                {leg.sharingHeading}
              </h2>
              <div className="w-16 h-0.5 bg-[#8e7552]" />
            </div>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal">
              {leg.sharingP1}
            </p>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal">
              {leg.sharingP2}
            </p>

            <p className="text-sm sm:text-base text-[#3d2b1a] leading-relaxed font-normal font-medium">
              {leg.sharingP3}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#8e7552]/40">
              <img
                src={beneficiamentoImg}
                alt="Beneficiamento do tabaco e cuidado artesanal"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-[#091a13] border-t border-[#184030] text-xs text-[#c5b8aa]">
                {currentLang === 'pt'
                  ? 'O saber artesanal e técnico acumulado retornando aos produtores locais'
                  : currentLang === 'en'
                  ? 'Accumulated technical and artisanal knowledge returning to local growers'
                  : 'El saber artesanal y técnico acumulado regresando a los productores locales'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Destaque Manifesto Central & Assinatura */}
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

      {/* 8. Quick Links to Explore More */}
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
