import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Logo } from './Logo';
import { Globe, Menu, X, Instagram, Linkedin, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'historia', label: t.nav.historia },
    { id: 'sobre', label: t.nav.sobre },
    { id: 'processo', label: t.nav.processo },
    { id: 'produtos', label: t.nav.produtos },
    { id: 'contato', label: t.nav.contato },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português (BR)', flag: '🇧🇷' },
    { code: 'en', label: 'English (US/UK)', flag: '🇺🇸' },
    { code: 'es', label: 'Español (ES)', flag: '🇪🇸' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#06120d]/95 backdrop-blur-md border-b border-[#184030]">
      {/* Top micro-bar with legal age tag & social links */}
      <div className="bg-[#091c14] border-b border-[#184030] px-4 py-1.5 text-xs text-[#c5b8aa] flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4b483]" />
          <span className="font-medium tracking-wider text-[11px]">
            {currentLang === 'pt'
              ? 'Conteúdo para maiores de 18 anos'
              : currentLang === 'en'
              ? 'Content for adults 21+'
              : 'Contenido para mayores de 21 años'}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[#8a9e93] text-[10px] tracking-widest uppercase font-mono">{t.brand.badge}</span>
          <div className="flex items-center gap-3">
            <a
              id="header-instagram-link"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5b8aa] hover:text-[#d4b483] transition-colors flex items-center gap-1 text-[11px]"
              title="Instagram Oficial"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-sans">Instagram</span>
            </a>
            <span className="text-[#1e4a38]">•</span>
            <a
              id="header-linkedin-link"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5b8aa] hover:text-[#d4b483] transition-colors flex items-center gap-1 text-[11px]"
              title="LinkedIn Oficial"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-sans">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none transition-transform hover:scale-[1.02]"
        >
          <Logo size="md" textColor="#d4b483" accentColor="#c59b4c" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs font-medium tracking-[0.2em] uppercase font-sans transition-all duration-200 rounded-sm relative ${
                  isActive
                    ? 'text-[#f5efe6] font-bold'
                    : 'text-[#c5b8aa] hover:text-[#d4b483] hover:bg-[#112a20]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#d4b483] to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Language Selector & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Immersive Pill Language Selector */}
          <div className="flex items-center gap-2 bg-[#112a20] px-3 py-1.5 rounded-full border border-[#1d4b38]">
            {(['pt', 'en', 'es'] as Language[]).map((lang) => (
              <button
                key={lang}
                id={`pill-lang-select-${lang}`}
                onClick={() => onLanguageChange(lang)}
                className={`text-[10px] uppercase font-sans tracking-wider transition-colors px-1 ${
                  currentLang === lang
                    ? 'text-[#d4b483] font-bold'
                    : 'text-[#7d968a] hover:text-[#c5b8aa]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#c5b8aa] hover:text-[#f5efe6] hover:bg-[#112a20] rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#071710] border-b border-[#184030] px-4 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded text-xs font-sans font-medium tracking-[0.2em] uppercase transition-colors ${
                    isActive
                      ? 'bg-[#112a20] text-[#d4b483] font-bold border-l-2 border-[#d4b483]'
                      : 'text-[#c5b8aa] hover:bg-[#112a20] hover:text-[#f5efe6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
