import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Logo } from './Logo';
import { Globe, Menu, X, Instagram, Linkedin, Youtube, Facebook, BookOpen, ShieldCheck } from 'lucide-react';

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
    { id: 'legado', label: t.nav.legado },
    { id: 'processo', label: t.nav.processo },
    { id: 'produtos', label: t.nav.produtos },
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
      <div className="bg-[#091c14] border-b border-[#184030] px-4 py-1 text-xs text-[#c5b8aa] flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-[#d4b483]" />
          <span className="font-medium tracking-wider text-[10px] text-[#b8ab9a]">
            {currentLang === 'pt'
              ? 'Conteúdo para maiores de 18 anos'
              : currentLang === 'en'
              ? 'Content for adults 21+'
              : 'Contenido para mayores de 21 años'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            id="header-instagram-link"
            href="https://www.instagram.com/donaflorcigar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5b8aa] hover:text-[#d4b483] transition-colors flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded hover:bg-[#112a20]"
            title="Instagram Dona Flor Cigar"
            aria-label="Instagram Dona Flor Cigar"
          >
            <Instagram className="w-3 h-3" />
            <span className="hidden lg:inline font-sans">Instagram</span>
          </a>
          <span className="text-[#1e4a38] text-[10px]">•</span>
          <a
            id="header-facebook-link"
            href="https://www.facebook.com/DonaFlorCigar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5b8aa] hover:text-[#d4b483] transition-colors flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded hover:bg-[#112a20]"
            title="Facebook Dona Flor Cigar"
            aria-label="Facebook Dona Flor Cigar"
          >
            <Facebook className="w-3 h-3" />
            <span className="hidden lg:inline font-sans">Facebook</span>
          </a>
          <span className="text-[#1e4a38] text-[10px]">•</span>
          <a
            id="header-youtube-link"
            href="https://www.youtube.com/@donaflorcigar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5b8aa] hover:text-[#d4b483] transition-colors flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded hover:bg-[#112a20]"
            title="YouTube Dona Flor Cigar"
            aria-label="YouTube Dona Flor Cigar"
          >
            <Youtube className="w-3 h-3" />
            <span className="hidden lg:inline font-sans">YouTube</span>
          </a>
          <span className="text-[#1e4a38] text-[10px]">•</span>
          <a
            id="header-linkedin-link"
            href="https://br.linkedin.com/company/menendez-amerino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5b8aa] hover:text-[#d4b483] transition-colors flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded hover:bg-[#112a20]"
            title="LinkedIn Menendez Amerino"
            aria-label="LinkedIn Menendez Amerino"
          >
            <Linkedin className="w-3 h-3" />
            <span className="hidden lg:inline font-sans">LinkedIn</span>
          </a>
          <span className="text-[#1e4a38] text-[10px]">•</span>
          <a
            id="header-blog-link"
            href="https://tapmoving.com/blogdonaflor/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5b8aa] hover:text-[#d4b483] transition-colors flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded hover:bg-[#112a20]"
            title="Blog Dona Flor"
            aria-label="Blog Dona Flor"
          >
            <BookOpen className="w-3 h-3" />
            <span className="hidden lg:inline font-sans">Blog</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none transition-transform hover:scale-[1.01] shrink-0 mr-4 lg:mr-8 xl:mr-12"
        >
          <Logo size="md" textColor="#d4b483" accentColor="#c59b4c" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-1.5 text-[11px] font-medium tracking-[0.15em] uppercase font-sans transition-all duration-200 rounded-sm relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#f5efe6] font-bold'
                    : 'text-[#c5b8aa] hover:text-[#d4b483] hover:bg-[#112a20]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#d4b483] to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Language Selector & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-4">
          {/* Immersive Pill Language Selector */}
          <div className="flex items-center gap-1.5 bg-[#112a20] px-2.5 py-1 rounded-full border border-[#1d4b38]">
            {(['pt', 'en', 'es'] as Language[]).map((lang) => (
              <button
                key={lang}
                id={`pill-lang-select-${lang}`}
                onClick={() => onLanguageChange(lang)}
                className={`text-[9px] uppercase font-sans tracking-wider transition-colors px-1 py-0.5 rounded ${
                  currentLang === lang
                    ? 'text-[#d4b483] font-bold bg-[#184030]'
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
            className="lg:hidden p-1.5 text-[#c5b8aa] hover:text-[#f5efe6] hover:bg-[#112a20] rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#071710] border-b border-[#184030] px-4 py-5 animate-in slide-in-from-top-2 duration-200 space-y-4">
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

          <div className="pt-3 border-t border-[#184030] flex items-center justify-center gap-2.5">
            <a
              id="mobile-nav-instagram"
              href="https://www.instagram.com/donaflorcigar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#112a20] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="mobile-nav-facebook"
              href="https://www.facebook.com/DonaFlorCigar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#112a20] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-colors"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              id="mobile-nav-youtube"
              href="https://www.youtube.com/@donaflorcigar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#112a20] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-colors"
              aria-label="YouTube"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              id="mobile-nav-linkedin"
              href="https://br.linkedin.com/company/menendez-amerino"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#112a20] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="mobile-nav-blog"
              href="https://tapmoving.com/blogdonaflor/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#112a20] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-colors"
              aria-label="Blog Dona Flor"
              title="Blog Dona Flor"
            >
              <BookOpen className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
