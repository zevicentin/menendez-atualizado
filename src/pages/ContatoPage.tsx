import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import {
  Send,
  CheckCircle2,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface ContatoPageProps {
  currentLang: Language;
}

export const ContatoPage: React.FC<ContatoPageProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const c = t.contato;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className="space-y-16 pb-24 font-sans">
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#06120d] border-b border-[#184030] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#112a20] text-[#d4b483] text-[10px] font-bold uppercase tracking-[0.25em] rounded-full border border-[#1d4b38]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'pt'
                ? 'Atendimento Exclusivo'
                : currentLang === 'en'
                ? 'Bespoke Concierge'
                : 'Atención Personalizada'}
            </span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f5efe6] uppercase tracking-tight">
            {c.heroTitle}
          </h1>
          <p className="text-xs sm:text-sm text-[#c5b8aa] leading-relaxed max-w-2xl mx-auto">
            {c.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form + Direct Information Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Interactive Concierge Form */}
          <div className="lg:col-span-7 bg-[#091a13] border border-[#1b4332] rounded-xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif-luxury text-2xl font-bold text-[#f5efe6] uppercase">
                {c.formTitle}
              </h2>
              <p className="text-xs text-[#c5b8aa]">
                {currentLang === 'pt'
                  ? 'Preencha os dados abaixo e retornaremos com total discrição e agilidade.'
                  : currentLang === 'en'
                  ? 'Complete the details below for prompt and confidential concierge correspondence.'
                  : 'Complete el formulario para recibir atención personalizada y confidencial.'}
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 bg-[#112a20] border border-[#275c45] rounded-lg text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#6ee7a8] mx-auto" />
                <h3 className="font-serif-luxury text-lg font-bold text-[#f4ede4] uppercase">
                  {currentLang === 'pt'
                    ? 'Mensagem Enviada com Sucesso'
                    : currentLang === 'en'
                    ? 'Message Transmitted with Distinction'
                    : 'Mensaje Enviado con Éxito'}
                </h3>
                <p className="text-xs text-[#97e5b5] leading-relaxed max-w-md mx-auto">
                  {c.successMsg}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-[#183d2e] text-[#d4b483] text-xs rounded font-bold uppercase tracking-wider hover:bg-[#204e3b] transition-colors"
                >
                  {currentLang === 'pt' ? 'Enviar Nova Mensagem' : currentLang === 'en' ? 'Send Another Message' : 'Enviar Otro Mensaje'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5b8aa]">
                      {c.nameLabel} *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo Silveira"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#112a20] border border-[#1d4b38] text-[#f5efe6] placeholder-[#7d968a] rounded focus:outline-none focus:border-[#d4b483]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5b8aa]">
                      {c.emailLabel} *
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@empresa.com.br"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#112a20] border border-[#1d4b38] text-[#f5efe6] placeholder-[#7d968a] rounded focus:outline-none focus:border-[#d4b483]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5b8aa]">
                      {c.phoneLabel}
                    </label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+55 (11) 99999-9999"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#112a20] border border-[#1d4b38] text-[#f5efe6] placeholder-[#7d968a] rounded focus:outline-none focus:border-[#d4b483]"
                    />
                  </div>

                  {/* Subject Category */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5b8aa]">
                      {c.subjectLabel} *
                    </label>
                    <select
                      id="contact-subject-select"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#112a20] border border-[#1d4b38] text-[#e5d9cc] rounded focus:outline-none focus:border-[#d4b483]"
                    >
                      <option value="" className="bg-[#091a13]">
                        {currentLang === 'pt' ? 'Selecione uma categoria...' : currentLang === 'en' ? 'Select an inquiry category...' : 'Seleccione una categoría...'}
                      </option>
                      {c.subjectOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-[#091a13]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5b8aa]">
                    {c.messageLabel} *
                  </label>
                  <textarea
                    id="contact-message-input"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={c.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#112a20] border border-[#1d4b38] text-[#f5efe6] placeholder-[#7d968a] rounded focus:outline-none focus:border-[#d4b483] resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[11px] text-[#7d968a]">
                    <ShieldCheck className="w-4 h-4 text-[#d4b483] shrink-0" />
                    <span>
                      {currentLang === 'pt'
                        ? 'Privacidade e dados protegidos sob a LGPD.'
                        : currentLang === 'en'
                        ? 'Strict confidentiality and data protection.'
                        : 'Privacidad y datos protegidos bajo normativa legal.'}
                    </span>
                  </div>
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#d4b483] hover:bg-[#e2cca8] text-[#06120d] font-serif-luxury font-bold text-xs uppercase tracking-[0.25em] rounded shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? c.sending : c.sendButton}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Headquarters Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Communication Channels Card */}
            <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-lg font-bold text-[#f5efe6] uppercase border-b border-[#143324] pb-3">
                  {c.directChannelsTitle}
                </h3>
              </div>

              <div className="space-y-4 pt-1 text-xs">
                {/* Email Direct */}
                <div className="p-4 bg-[#112a20] border border-[#1d4b38] rounded-lg space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#d4b483]">
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>{currentLang === 'pt' ? 'E-mail Corporativo & Concierge' : currentLang === 'en' ? 'Corporate & Concierge Email' : 'Correo Corporativo y Conserjería'}</span>
                  </div>
                  <a
                    href={`mailto:${c.headquartersEmail}`}
                    className="text-[#f5efe6] hover:text-[#d4b483] pl-6 block font-mono text-xs transition-colors"
                  >
                    {c.headquartersEmail}
                  </a>
                </div>

                {/* Telephone / WhatsApp Direct */}
                <div className="p-4 bg-[#112a20] border border-[#1d4b38] rounded-lg space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#d4b483]">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{currentLang === 'pt' ? 'Central Telefônica / Atendimento' : currentLang === 'en' ? 'Phone Center & Inquiries' : 'Central Telefónica y Atención'}</span>
                  </div>
                  <a
                    href={`tel:${c.headquartersPhone.replace(/\s+/g, '')}`}
                    className="text-[#f5efe6] hover:text-[#d4b483] pl-6 block font-mono text-xs transition-colors"
                  >
                    {c.headquartersPhone}
                  </a>
                </div>

                {/* Working Hours */}
                <div className="p-4 bg-[#112a20] border border-[#1d4b38] rounded-lg space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#d4b483]">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{currentLang === 'pt' ? 'Horário de Atendimento' : currentLang === 'en' ? 'Operating Hours' : 'Horario de Atención'}</span>
                  </div>
                  <p className="text-[#c5b8aa] pl-6">
                    {c.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Headquarters & Historic Ateliers */}
            <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 border-b border-[#143324] pb-3">
                <Building className="w-4 h-4 text-[#d4b483]" />
                <h3 className="font-serif-luxury text-lg font-bold text-[#f5efe6] uppercase">
                  {c.headquartersTitle}
                </h3>
              </div>

              <div className="p-4 bg-[#112a20] border border-[#1d4b38] rounded-lg space-y-2 text-xs">
                <div className="flex items-start gap-2.5 text-[#c5b8aa]">
                  <MapPin className="w-4 h-4 text-[#d4b483] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#f5efe6] block mb-0.5">
                      Menendez Amerino Charutos S.A.
                    </span>
                    <span>{c.headquartersAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Highlight */}
            <div className="bg-[#091a13] border border-[#1b4332] rounded-xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-lg font-bold text-[#f5efe6] uppercase">
                  {c.socialTitle}
                </h3>
                <p className="text-xs text-[#c5b8aa]">
                  {c.socialDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Instagram */}
                <a
                  id="contact-instagram-action"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-[#112a20] hover:bg-[#183d2e] border border-[#1d4b38] hover:border-[#d4b483] text-[#e5d9cc] hover:text-[#d4b483] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-[#091a13] border border-[#1b4332] rounded-full text-[#d4b483]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs block text-[#f5efe6]">Instagram</span>
                      <span className="text-[10px] text-[#c5b8aa]">@menendezamerino</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4b483] font-semibold group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* LinkedIn */}
                <a
                  id="contact-linkedin-action"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-[#112a20] hover:bg-[#183d2e] border border-[#1d4b38] hover:border-[#d4b483] text-[#e5d9cc] hover:text-[#d4b483] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-[#091a13] border border-[#1b4332] rounded-full text-[#d4b483]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs block text-[#f5efe6]">LinkedIn</span>
                      <span className="text-[10px] text-[#c5b8aa]">Menendez Amerino</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4b483] font-semibold group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
