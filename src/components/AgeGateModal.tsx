import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Logo } from './Logo';
import { ShieldAlert, AlertTriangle, CheckCircle, Globe, ExternalLink, RefreshCw } from 'lucide-react';

interface AgeGateModalProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onConfirmAge: (remember: boolean) => void;
}

export const AgeGateModal: React.FC<AgeGateModalProps> = ({
  currentLang,
  onLanguageChange,
  onConfirmAge,
}) => {
  const [rememberMe, setRememberMe] = useState(true);
  const [exitNotice, setExitNotice] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const requiredAge = currentLang === 'pt' ? 18 : 21;

  const handleExit = () => {
    setExitNotice(true);
    // After 2.5s redirect out if possible
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 2500);
  };

  return (
    <div
      id="age-verification-gate"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-[#091a13] border border-[#1b4332] rounded-lg shadow-2xl p-6 sm:p-8 text-[#e5d9cc] my-8">
        {/* Subtle decorative gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4b483] to-transparent rounded-t" />

        {/* Header with language switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#143324]">
          <Logo size="sm" textColor="#d4b483" accentColor="#c59b4c" />

          {/* Quick language toggle */}
          <div className="flex items-center gap-1 bg-[#112a20] p-1 rounded-full border border-[#1d4b38]">
            <Globe className="w-3.5 h-3.5 text-[#d4b483] ml-1.5 mr-0.5" />
            {(['pt', 'en', 'es'] as Language[]).map((lang) => (
              <button
                key={lang}
                id={`age-gate-lang-${lang}`}
                onClick={() => onLanguageChange(lang)}
                className={`px-2.5 py-0.5 text-[10px] font-sans font-bold rounded-full uppercase tracking-wider transition-colors ${
                  currentLang === lang
                    ? 'bg-[#d4b483] text-[#06120d]'
                    : 'text-[#8a9e93] hover:text-[#e5d9cc]'
                }`}
              >
                {lang === 'pt' ? 'PT (18+)' : `${lang.toUpperCase()} (21+)`}
              </button>
            ))}
          </div>
        </div>

        {exitNotice ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
            <AlertTriangle className="w-12 h-12 text-[#d4b483] mx-auto" />
            <h3 className="font-serif-luxury text-xl font-bold text-[#f5efe6] uppercase">
              {currentLang === 'pt'
                ? 'Acesso Restrito a Maiores de 18 Anos'
                : currentLang === 'en'
                ? 'Access Restricted to Adults 21+'
                : 'Acceso Restringido a Mayores de 21 Años'}
            </h3>
            <p className="text-xs text-[#c5b8aa] max-w-md mx-auto font-sans">
              {t.ageGate.exitRedirectMsg}
            </p>
            <div className="pt-2">
              <a
                href="https://www.google.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs bg-[#112a20] text-[#d4b483] border border-[#1d4b38] rounded hover:border-[#d4b483] font-sans font-bold uppercase tracking-wider"
              >
                <span>Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="pt-6 space-y-6">
            {/* Age Badge Highlight */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-[#112a20] border border-[#1d4b38] text-[#d4b483] shadow-inner mb-1">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-[#112a20] border border-[#1d4b38] rounded-full text-[#d4b483] font-sans font-bold text-[10px] tracking-[0.25em] uppercase mb-2">
                  {currentLang === 'pt' ? 'Mínimo 18 Anos (Brasil)' : `Minimum ${requiredAge}+ Years (International)`}
                </div>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5efe6] tracking-tight uppercase">
                  {t.ageGate.title}
                </h2>
              </div>
              <p className="text-xs font-medium text-[#d4b483] tracking-widest uppercase font-sans">
                {t.ageGate.subtitle}
              </p>
            </div>

            {/* Legal Notice Description */}
            <div className="bg-[#112a20] border border-[#1d4b38] rounded p-4 text-xs text-[#c5b8aa] leading-relaxed space-y-2 font-sans">
              <p>{t.ageGate.lawNotice}</p>
              <div className="pt-2 border-t border-[#143324] flex items-start gap-2 text-[#d4c5b9]">
                <AlertTriangle className="w-4 h-4 text-[#d4b483] shrink-0 mt-0.5" />
                <span className="font-medium">{t.ageGate.healthWarning}</span>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[#c5b8aa] hover:text-[#d4b483] select-none transition-colors font-sans">
              <input
                id="remember-age-checkbox"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-[#1d4b38] bg-[#112a20] text-[#d4b483] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#d4b483]"
              />
              <span>{t.ageGate.rememberChoice}</span>
            </label>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                id="confirm-legal-age-btn"
                onClick={() => onConfirmAge(rememberMe)}
                className="w-full py-4 px-6 rounded bg-[#d4b483] hover:bg-[#e2cca8] text-[#06120d] font-sans font-bold text-xs tracking-[0.3em] uppercase shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{t.ageGate.confirmButton}</span>
              </button>

              <button
                id="exit-underage-btn"
                onClick={handleExit}
                className="w-full py-2.5 px-4 text-xs font-medium text-[#7d968a] hover:text-[#c5b8aa] font-sans transition-colors"
              >
                {t.ageGate.exitButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
