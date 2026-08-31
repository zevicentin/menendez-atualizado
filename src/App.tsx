import React, { useState, useEffect } from 'react';
import { Language, PageId, CigarProduct, CookiePreferences } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AgeGateModal } from './components/AgeGateModal';
import { CookieBanner } from './components/CookieBanner';
import { CigarModal } from './components/CigarModal';
import { HomePage } from './pages/HomePage';
import { HistoriaPage } from './pages/HistoriaPage';
import { SobrePage } from './pages/SobrePage';
import { ProcessoPage } from './pages/ProcessoPage';
import { ProdutosPage } from './pages/ProdutosPage';
import { ContatoPage } from './pages/ContatoPage';

export default function App() {
  // 1. Language state
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('menendezamerino_lang') || localStorage.getItem('donaurelio_lang');
      if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
    } catch (e) {
      // ignore
    }
    return 'pt';
  });

  // 2. Active page state
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // 3. Age verification state
  const [hasAgeVerified, setHasAgeVerified] = useState<boolean>(() => {
    try {
      return localStorage.getItem('menendezamerino_age_verified') === 'true' || localStorage.getItem('donaurelio_age_verified') === 'true';
    } catch (e) {
      return false;
    }
  });

  // 4. LGPD Cookie Preferences state
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(() => {
    try {
      const saved = localStorage.getItem('menendezamerino_cookies') || localStorage.getItem('donaurelio_cookies');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // ignore
    }
    return {
      necessary: true,
      analytics: true,
      marketing: true,
      hasConsented: false,
    };
  });

  // 5. Modals state
  const [selectedCigar, setSelectedCigar] = useState<CigarProduct | null>(null);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  // Sync language with document metadata
  useEffect(() => {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang === 'es' ? 'es-ES' : 'en-US';
    try {
      localStorage.setItem('menendezamerino_lang', currentLang);
    } catch (e) {
      // ignore
    }
  }, [currentLang]);

  // Handle Age Confirmation
  const handleConfirmAge = (remember: boolean) => {
    setHasAgeVerified(true);
    if (remember) {
      try {
        localStorage.setItem('menendezamerino_age_verified', 'true');
      } catch (e) {
        // ignore
      }
    }
  };

  // Handle Cookie Preferences Save
  const handleSaveCookiePreferences = (prefs: CookiePreferences) => {
    setCookiePreferences(prefs);
    setIsCookieModalOpen(false);
    try {
      localStorage.setItem('menendezamerino_cookies', JSON.stringify(prefs));
    } catch (e) {
      // ignore
    }
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#C4AD8A] text-[#231b14] relative selection:bg-[#3d2c1e] selection:text-[#f8f5ee]">
      {/* Immersive Ambient Deep Green Glow Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-40 immersive-ambient-glow z-0" />

      {/* 1. Age Verification Gate Modal (18+ for PT, 21+ for EN/ES) */}
      {!hasAgeVerified && (
        <AgeGateModal
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
          onConfirmAge={handleConfirmAge}
        />
      )}

      {/* 2. Global Header Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 3. Page Content Body */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onOpenCigar={setSelectedCigar}
          />
        )}
        {currentPage === 'historia' && (
          <HistoriaPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'sobre' && (
          <SobrePage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'processo' && (
          <ProcessoPage
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'produtos' && (
          <ProdutosPage
            currentLang={currentLang}
            onOpenCigar={setSelectedCigar}
          />
        )}
        {currentPage === 'contato' && (
          <ContatoPage
            currentLang={currentLang}
          />
        )}
      </main>

      {/* 4. Global Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenCookieSettings={() => setIsCookieModalOpen(true)}
      />

      {/* 5. LGPD Cookie Consent Banner & Preferences Modal */}
      <CookieBanner
        currentLang={currentLang}
        preferences={cookiePreferences}
        onSavePreferences={handleSaveCookiePreferences}
        isOpenModalDirectly={isCookieModalOpen}
        onCloseModalDirectly={() => setIsCookieModalOpen(false)}
      />

      {/* 6. Product Detail Inspection Modal */}
      <CigarModal
        cigar={selectedCigar}
        currentLang={currentLang}
        onClose={() => setSelectedCigar(null)}
        onOpenContactForOrder={() => {
          setSelectedCigar(null);
          handleNavigate('contato');
        }}
      />
    </div>
  );
}
