import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Logo } from './Logo';
import { Instagram, Linkedin, Youtube, Facebook, BookOpen, ShieldAlert, Sparkles, Cookie, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenCookieSettings,
}) => {
  const t = TRANSLATIONS[currentLang];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050f0a] border-t border-[#184030] text-[#c5b8aa] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Manifesto */}
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-1">
              <Logo size="md" textColor="#d4b483" accentColor="#c59b4c" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8a9e93] mt-1 font-sans">
                Manufatura de Tabacos Nobres • Bahia
              </span>
            </div>

            <p className="text-xs text-[#c5b8aa] leading-relaxed">
              {t.footer.about}
            </p>

            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#d4b483] font-bold mb-2.5">
                {t.footer.socialTitle}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  id="footer-instagram-link"
                  href="https://www.instagram.com/donaflorcigar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#112a20] hover:bg-[#183d2e] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-all hover:scale-105"
                  aria-label="Instagram Dona Flor Cigar"
                  title="Instagram: @donaflorcigar"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  id="footer-facebook-link"
                  href="https://www.facebook.com/DonaFlorCigar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#112a20] hover:bg-[#183d2e] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-all hover:scale-105"
                  aria-label="Facebook Dona Flor Cigar"
                  title="Facebook: Dona Flor Cigar"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  id="footer-youtube-link"
                  href="https://www.youtube.com/@donaflorcigar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#112a20] hover:bg-[#183d2e] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-all hover:scale-105"
                  aria-label="YouTube Dona Flor Cigar"
                  title="YouTube: @donaflorcigar"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  id="footer-linkedin-link"
                  href="https://br.linkedin.com/company/menendez-amerino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#112a20] hover:bg-[#183d2e] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-all hover:scale-105"
                  aria-label="LinkedIn Menendez Amerino"
                  title="LinkedIn: Menendez Amerino"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="footer-blog-link"
                  href="https://tapmoving.com/blogdonaflor/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#112a20] hover:bg-[#183d2e] text-[#d4b483] border border-[#1d4b38] hover:border-[#d4b483] transition-all hover:scale-105"
                  aria-label="Blog Dona Flor"
                  title="Blog Dona Flor"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-xs font-bold tracking-[0.2em] text-[#f5efe6] uppercase border-b border-[#143324] pb-2">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#d4b483] transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('historia')}
                  className="hover:text-[#d4b483] transition-colors"
                >
                  {t.nav.historia}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sobre')}
                  className="hover:text-[#d4b483] transition-colors"
                >
                  {t.nav.sobre}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('legado')}
                  className="hover:text-[#d4b483] transition-colors"
                >
                  {t.nav.legado}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('processo')}
                  className="hover:text-[#d4b483] transition-colors"
                >
                  {t.nav.processo}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('produtos')}
                  className="hover:text-[#d4b483] transition-colors"
                >
                  {t.nav.produtos}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contato')}
                  className="hover:text-[#d4b483] transition-colors"
                >
                  {t.nav.contato}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & LGPD Compliance */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-xs font-bold tracking-[0.2em] text-[#f5efe6] uppercase border-b border-[#143324] pb-2">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-[#c5b8aa] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4b483]" />
                {t.footer.privacy}
              </li>
              <li className="text-[#c5b8aa] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4b483]" />
                {t.footer.compliance}
              </li>
              <li className="text-[#c5b8aa] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4b483]" />
                {t.footer.terms}
              </li>
              <li className="pt-2">
                <button
                  id="footer-open-cookie-settings-btn"
                  onClick={onOpenCookieSettings}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#112a20] hover:bg-[#183d2e] text-[#d4b483] text-xs border border-[#1d4b38] hover:border-[#d4b483] transition-colors"
                >
                  <Cookie className="w-3.5 h-3.5" />
                  <span>{t.footer.cookieSettings}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Boutique Lounges Quick Info */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-xs font-bold tracking-[0.2em] text-[#f5efe6] uppercase border-b border-[#143324] pb-2">
              {currentLang === 'pt' ? 'Contato' : currentLang === 'en' ? 'Contact' : 'Contacto'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#c5b8aa]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4b483] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#f5efe6] block">Fábrica</span>
                  <span>Rua do Corredor D, 714 - Centro - São Gonçalo dos Campos - BA</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4b483] shrink-0 mt-0.5" />
                <span>+55 75 3246.1181</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4b483] shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@donaflorcigars.com"
                  className="hover:text-[#d4b483] transition-colors"
                >
                  contact@donaflorcigars.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Health Disclaimer Banner */}
        <div className="p-4 rounded bg-[#0b1d15] border border-[#184030] flex items-start gap-3 text-xs text-[#c5b8aa]">
          <ShieldAlert className="w-5 h-5 text-[#d4b483] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.footer.legalHealthNotice}
          </p>
        </div>

        {/* Bottom Copyright & Craft */}
        <div className="pt-6 border-t border-[#122e22] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d968a]">
          <div>{t.footer.copyright}</div>
          <div className="font-serif-luxury tracking-widest text-[#d4b483] uppercase text-[10px]">
            {t.footer.madeWithCraft}
          </div>
        </div>
      </div>
    </footer>
  );
};
