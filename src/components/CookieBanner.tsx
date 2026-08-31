import React, { useState } from 'react';
import { Language, CookiePreferences } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { ShieldCheck, Cookie, Settings2, X, Check, Lock } from 'lucide-react';

interface CookieBannerProps {
  currentLang: Language;
  preferences: CookiePreferences;
  onSavePreferences: (prefs: CookiePreferences) => void;
  isOpenModalDirectly?: boolean;
  onCloseModalDirectly?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  currentLang,
  preferences,
  onSavePreferences,
  isOpenModalDirectly = false,
  onCloseModalDirectly,
}) => {
  const [showModal, setShowModal] = useState(isOpenModalDirectly);
  const [analytics, setAnalytics] = useState(preferences.analytics);
  const [marketing, setMarketing] = useState(preferences.marketing);

  const t = TRANSLATIONS[currentLang];

  // If already consented and modal not directly requested, don't show floating bar
  const showBanner = !preferences.hasConsented && !showModal;

  const handleAcceptAll = () => {
    onSavePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      hasConsented: true,
    });
    if (onCloseModalDirectly) onCloseModalDirectly();
  };

  const handleRejectNonEssential = () => {
    onSavePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      hasConsented: true,
    });
    if (onCloseModalDirectly) onCloseModalDirectly();
  };

  const handleSaveCustom = () => {
    onSavePreferences({
      necessary: true,
      analytics,
      marketing,
      hasConsented: true,
    });
    setShowModal(false);
    if (onCloseModalDirectly) onCloseModalDirectly();
  };

  return (
    <>
      {/* Floating Bottom LGPD Notice */}
      {showBanner && (
        <div
          id="lgpd-cookie-banner"
          className="fixed bottom-0 inset-x-0 z-40 p-4 sm:p-6 bg-[#06140e]/98 border-t border-[#184030] shadow-2xl backdrop-blur-lg animate-in slide-in-from-bottom duration-300 font-sans"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-4xl">
              <div className="p-2.5 bg-[#112a20] border border-[#1d4b38] rounded-full text-[#d4b483] shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif-luxury text-sm font-bold text-[#f5efe6] tracking-[0.2em] uppercase">
                    {t.cookies.title}
                  </h4>
                  <span className="px-2 py-0.5 bg-[#112a20] text-[#d4b483] text-[9px] uppercase font-bold tracking-widest rounded border border-[#1d4b38]">
                    LGPD
                  </span>
                </div>
                <p className="text-xs text-[#c5b8aa] leading-relaxed">
                  {t.cookies.description}
                </p>
              </div>
            </div>

            {/* Banner Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
              <button
                id="cookie-customize-btn"
                onClick={() => setShowModal(true)}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#c5b8aa] hover:text-[#f5efe6] bg-[#112a20] hover:bg-[#183d2e] border border-[#1d4b38] rounded transition-colors flex items-center gap-1.5 font-sans"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>{t.cookies.managePreferences}</span>
              </button>

              <button
                id="cookie-reject-btn"
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#c5b8aa] hover:text-[#f5efe6] bg-[#112a20] hover:bg-[#183d2e] border border-[#1d4b38] rounded transition-colors font-sans"
              >
                {t.cookies.rejectNonEssential}
              </button>

              <button
                id="cookie-accept-all-btn"
                onClick={handleAcceptAll}
                className="px-6 py-2.5 text-xs font-bold text-[#06120d] bg-[#d4b483] hover:bg-[#e2cca8] rounded uppercase tracking-[0.25em] transition-all shadow-md flex items-center gap-1.5 font-sans"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{t.cookies.acceptAll}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LGPD Granular Preferences Modal */}
      {(showModal || isOpenModalDirectly) && (
        <div
          id="cookie-preferences-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto font-sans"
          role="dialog"
        >
          <div className="relative w-full max-w-2xl bg-[#091a13] border border-[#1b4332] rounded-lg shadow-2xl p-6 sm:p-8 text-[#e5d9cc] my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#143324]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#d4b483]" />
                <h3 className="font-serif-luxury text-lg font-bold text-[#f5efe6] uppercase tracking-[0.2em]">
                  {t.cookies.modalTitle}
                </h3>
              </div>
              <button
                id="close-cookie-modal-btn"
                onClick={() => {
                  setShowModal(false);
                  if (onCloseModalDirectly) onCloseModalDirectly();
                }}
                className="p-1.5 text-[#c5b8aa] hover:text-[#f5efe6] hover:bg-[#112a20] rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#c5b8aa] pt-3 pb-5 leading-relaxed">
              {t.cookies.modalDesc}
            </p>

            <div className="space-y-4">
              {/* Essential */}
              <div className="p-4 bg-[#112a20] border border-[#1d4b38] rounded flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-[#f5efe6]">
                      {t.cookies.essentialTitle}
                    </span>
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold bg-[#183d2e] text-[#d4b483] border border-[#275c45] rounded">
                      {t.cookies.alwaysActive}
                    </span>
                  </div>
                  <p className="text-xs text-[#c5b8aa] leading-relaxed">
                    {t.cookies.essentialDesc}
                  </p>
                </div>
                <div className="shrink-0 pt-1 text-[#7d968a]">
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 bg-[#112a20] border border-[#1d4b38] rounded flex items-start justify-between gap-4">
                <div className="space-y-1 pr-2">
                  <span className="font-semibold text-xs text-[#f5efe6]">
                    {t.cookies.analyticsTitle}
                  </span>
                  <p className="text-xs text-[#c5b8aa] leading-relaxed">
                    {t.cookies.analyticsDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    id="cookie-toggle-analytics"
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#183d2e] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#e5d9cc] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4b483]"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="p-4 bg-[#112a20] border border-[#1d4b38] rounded flex items-start justify-between gap-4">
                <div className="space-y-1 pr-2">
                  <span className="font-semibold text-xs text-[#f5efe6]">
                    {t.cookies.marketingTitle}
                  </span>
                  <p className="text-xs text-[#c5b8aa] leading-relaxed">
                    {t.cookies.marketingDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    id="cookie-toggle-marketing"
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#183d2e] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#e5d9cc] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4b483]"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-[#143324]">
              <button
                id="cookie-modal-accept-all"
                onClick={handleAcceptAll}
                className="text-xs text-[#d4b483] hover:underline uppercase tracking-wider font-bold"
              >
                {t.cookies.acceptAll}
              </button>

              <div className="flex items-center gap-3">
                <button
                  id="cookie-modal-cancel-btn"
                  onClick={() => {
                    setShowModal(false);
                    if (onCloseModalDirectly) onCloseModalDirectly();
                  }}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#c5b8aa] hover:text-[#f5efe6] bg-[#112a20] rounded"
                >
                  {currentLang === 'pt' ? 'Cancelar' : currentLang === 'en' ? 'Cancel' : 'Cancelar'}
                </button>
                <button
                  id="cookie-modal-save-btn"
                  onClick={handleSaveCustom}
                  className="px-6 py-2.5 text-xs font-bold text-[#06120d] bg-[#d4b483] hover:bg-[#e2cca8] rounded uppercase tracking-[0.2em] transition-all"
                >
                  {t.cookies.savePreferences}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
