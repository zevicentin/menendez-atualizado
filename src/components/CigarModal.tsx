import React from 'react';
import { CigarProduct, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { X, Clock, Award, Flame, Wine, Compass, Sparkles } from 'lucide-react';

interface CigarModalProps {
  cigar: CigarProduct | null;
  currentLang: Language;
  onClose: () => void;
  onOpenContactForOrder?: () => void;
}

export const CigarModal: React.FC<CigarModalProps> = ({
  cigar,
  currentLang,
  onClose,
  onOpenContactForOrder,
}) => {
  if (!cigar) return null;

  const t = TRANSLATIONS[currentLang];

  const strengthLabels = t.produtos.strengths;

  const aromaBars = [
    { label: t.produtos.aromaWood, value: cigar.aromas.wood, color: '#c59b27' },
    { label: t.produtos.aromaLeather, value: cigar.aromas.leather, color: '#a07855' },
    { label: t.produtos.aromaCocoa, value: cigar.aromas.cocoa, color: '#8d5b36' },
    { label: t.produtos.aromaSpice, value: cigar.aromas.spice, color: '#d97736' },
    { label: t.produtos.aromaSweet, value: cigar.aromas.sweetness, color: '#e5b567' },
    { label: t.produtos.aromaEarth, value: cigar.aromas.earth, color: '#6d5341' },
  ];

  return (
    <div
      id="cigar-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
    >
      <div className="relative w-full max-w-4xl bg-[#091a13] border border-[#1b4332] rounded-lg shadow-2xl overflow-hidden text-[#e5d9cc] my-8 animate-in fade-in zoom-in-95 duration-200 font-sans">
        {/* Close Button */}
        <button
          id="close-cigar-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#c5b8aa] hover:text-[#f5efe6] bg-[#112a20]/90 hover:bg-[#183d2e] border border-[#1d4b38] rounded-full backdrop-blur transition-colors"
          aria-label={t.produtos.closeModal}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image & Badge Banner */}
          <div className="md:col-span-5 relative bg-[#050f0a] flex flex-col items-center justify-between p-6 border-b md:border-b-0 md:border-r border-[#1b4332]">
            <div className="w-full flex justify-between items-center mb-4">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#112a20] text-[#d4b483] border border-[#1d4b38] rounded">
                {cigar.vitola}
              </span>
              <span className="text-xs text-[#c5b8aa] font-mono">
                {cigar.ringGauge} RG × {cigar.lengthMm}mm
              </span>
            </div>

            <div className="relative my-4 group overflow-hidden rounded shadow-2xl border border-[#1b4332]">
              <img
                src={cigar.image}
                alt={cigar.name}
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050f0a] via-transparent to-transparent opacity-70" />
            </div>

            {cigar.badge && (
              <div className="w-full text-center py-2 px-3 bg-[#112a20] border border-[#1d4b38] rounded text-[#d4b483] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#d4b483]" />
                <span>{cigar.badge[currentLang]}</span>
              </div>
            )}

            <div className="w-full mt-4 pt-4 border-t border-[#122e22] flex justify-between items-center text-xs text-[#c5b8aa]">
              <span>{t.produtos.agingLabel}</span>
              <span className="font-bold text-[#e5d9cc]">{cigar.agingYears} {currentLang === 'pt' ? 'Anos' : currentLang === 'en' ? 'Years' : 'Años'}</span>
            </div>
          </div>

          {/* Right Column: Specs, Flavor Notes, Pairings */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#d4b483] font-semibold mb-1">
                {t.produtos.collections[cigar.collection]}
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5efe6] uppercase">
                {cigar.name}
              </h3>
              <p className="text-xs text-[#c5b8aa] mt-2 leading-relaxed font-editorial italic text-base">
                {cigar.description[currentLang]}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#112a20] border border-[#1d4b38] rounded text-xs">
              <div>
                <span className="text-[#8a9e93] block text-[10px] uppercase tracking-wider">{t.produtos.strengthLabel}</span>
                <span className="font-bold text-[#d4b483] capitalize">{strengthLabels[cigar.strength]}</span>
              </div>
              <div>
                <span className="text-[#8a9e93] block text-[10px] uppercase tracking-wider">{t.produtos.burningTimeLabel}</span>
                <span className="font-bold text-[#e5d9cc] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#d4b483]" />
                  {cigar.burningTimeMin}
                </span>
              </div>
              <div>
                <span className="text-[#8a9e93] block text-[10px] uppercase tracking-wider">{t.produtos.ringGaugeLabel}</span>
                <span className="font-bold text-[#e5d9cc]">{cigar.ringGauge} ({cigar.lengthInches})</span>
              </div>
            </div>

            {/* Leaf Anatomy */}
            <div className="space-y-2 text-xs">
              <h4 className="font-serif-luxury text-xs font-bold uppercase tracking-[0.2em] text-[#d4b483] border-b border-[#143324] pb-1">
                {t.produtos.specifications}
              </h4>
              <div className="grid grid-cols-1 gap-1.5 pt-1 text-[#c5b8aa]">
                <div className="flex justify-between py-1 border-b border-[#122e22]">
                  <span className="text-[#8a9e93]">{t.produtos.wrapperLabel}</span>
                  <span className="font-medium text-right text-[#f5efe6]">{cigar.wrapper[currentLang]}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#122e22]">
                  <span className="text-[#8a9e93]">{t.produtos.binderLabel}</span>
                  <span className="font-medium text-right text-[#f5efe6]">{cigar.binder[currentLang]}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#8a9e93]">{t.produtos.fillerLabel}</span>
                  <span className="font-medium text-right text-[#f5efe6]">{cigar.filler[currentLang]}</span>
                </div>
              </div>
            </div>

            {/* Tasting Notes Tags */}
            <div className="space-y-2">
              <h4 className="font-serif-luxury text-xs font-bold uppercase tracking-[0.2em] text-[#d4b483]">
                {t.produtos.tastingNotesTitle}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cigar.tastingNotes[currentLang].map((note, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-[#112a20] text-[#e5d9cc] border border-[#1d4b38] rounded-full"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Aroma Intensity Bars */}
            <div className="space-y-2">
              <h4 className="font-serif-luxury text-xs font-bold uppercase tracking-[0.2em] text-[#d4b483]">
                {t.produtos.aromaWheelTitle}
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {aromaBars.map((bar, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[11px] text-[#c5b8aa]">
                      <span>{bar.label}</span>
                      <span className="font-mono text-[#d4b483]">{bar.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#112a20] rounded-full overflow-hidden border border-[#1d4b38]">
                      <div
                        className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-[#d4b483] to-[#c59b4c]"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pairings */}
            <div className="p-3 bg-[#112a20] border border-[#1d4b38] rounded-md space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#d4b483] uppercase tracking-wider">
                <Wine className="w-3.5 h-3.5" />
                <span>{t.produtos.pairingsTitle}</span>
              </div>
              <ul className="text-xs text-[#c5b8aa] space-y-1 list-disc list-inside">
                {cigar.pairings[currentLang].map((pairing, i) => (
                  <li key={i}>{pairing}</li>
                ))}
              </ul>
            </div>

            {/* Inquire / Concierge Action */}
            {onOpenContactForOrder && (
              <div className="pt-2">
                <button
                  id="modal-inquire-btn"
                  onClick={() => {
                    onClose();
                    onOpenContactForOrder();
                  }}
                  className="w-full py-3.5 px-4 bg-[#d4b483] hover:bg-[#e2cca8] text-[#06120d] font-sans font-bold text-xs uppercase tracking-[0.25em] rounded shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {currentLang === 'pt'
                      ? 'Consultar Disponibilidade com o Concierge'
                      : currentLang === 'en'
                      ? 'Inquire Availability with Concierge'
                      : 'Consultar Disponibilidad con Conserjería'}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
