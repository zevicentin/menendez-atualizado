import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: string;
  accentColor?: string;
}

/**
 * Menendez Amerino Official Brand Identity Logo
 * Reproduces the authentic heraldic lion rampant holding the tobacco blossom stalk,
 * flanked by the noble display serif typography "MENENDEZ AMERINO".
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  textColor = '#d4b483', // warm light brown / gold ochre
  accentColor = '#c59b4c',
}) => {
  // SVG of the Heraldic Lion Rampant holding tobacco blossom
  const LionRampant = ({ className: iconClass = 'w-6 h-6' }: { className?: string }) => (
    <svg
      viewBox="0 0 100 120"
      fill={accentColor}
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Heraldic Lion Rampant holding a tobacco leaf blossom */}
      <path
        d="M 68 8 C 64 6 59 10 57 14 C 54 13 51 14 49 17 C 46 20 48 24 51 26 C 50 28 47 31 46 34 L 44 32 C 41 29 36 29 34 32 C 32 35 34 39 37 41 L 43 45 C 41 48 39 52 38 56 C 35 55 32 56 30 58 C 27 61 29 65 33 66 C 35 66 37 65 38 63 C 38 67 37 72 36 76 C 33 74 30 75 28 77 C 26 80 27 84 31 85 C 33 85 35 84 36 82 C 37 87 38 92 40 97 C 38 98 34 100 32 103 C 30 106 32 110 36 111 C 41 112 45 108 45 104 C 44 99 43 93 43 88 C 47 88 51 86 54 83 C 55 86 57 90 58 95 C 57 97 54 99 53 102 C 51 106 53 111 58 111 C 63 112 66 107 65 102 C 63 96 61 90 60 84 C 64 80 67 74 68 67 C 69 59 67 52 64 45 L 67 45 C 71 45 74 41 73 37 C 72 33 68 31 64 33 C 65 29 64 24 62 20 C 64 17 68 14 68 8 Z M 58 20 C 58 17 60 14 63 13 C 66 14 67 17 65 20 C 63 22 60 22 58 20 Z M 28 42 C 27 38 29 35 32 36 C 35 37 36 41 33 43 C 30 44 28 44 28 42 Z M 25 68 C 23 64 25 60 29 60 C 31 63 32 67 29 69 C 27 70 25 70 25 68 Z"
      />
      {/* Blossom finial */}
      <circle cx="63" cy="16" r="6" fill={accentColor} />
      <path d="M 59 12 L 67 8 L 65 16 Z" fill={accentColor} />
      <path d="M 67 14 L 72 18 L 65 20 Z" fill={accentColor} />
      {/* Stalk */}
      <rect x="62" y="22" width="2.5" height="28" rx="1" fill={accentColor} />
    </svg>
  );

  if (variant === 'icon') {
    const iconSizes = {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-14 h-14',
    };
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <LionRampant className={iconSizes[size]} />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#275242] bg-[#0e221b]/90 backdrop-blur ${className}`}
      >
        <LionRampant className="w-4 h-4" />
        <span
          className="font-serif-luxury font-bold tracking-[0.25em] text-[10px] uppercase"
          style={{ color: textColor }}
        >
          Menendez Amerino • Bahia
        </span>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        <LionRampant className="w-10 h-12" />
        <div className="space-y-0.5">
          <div
            className="font-serif-luxury font-bold tracking-[0.28em] text-lg sm:text-xl uppercase"
            style={{ color: textColor }}
          >
            MENENDEZ AMERINO
          </div>
          <div className="text-[9px] uppercase tracking-[0.3em] text-[#93a79d] font-sans">
            Tabacos Nobres do Recôncavo
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal layout matching brand identity precisely
  const textSizes = {
    sm: 'text-xs tracking-[0.2em]',
    md: 'text-xs sm:text-sm tracking-[0.24em]',
    lg: 'text-sm sm:text-base tracking-[0.26em]',
    xl: 'text-base sm:text-lg tracking-[0.28em]',
  };

  const lionSizes = {
    sm: 'w-3.5 h-4.5',
    md: 'w-4 h-5 sm:w-4.5 sm:h-5.5',
    lg: 'w-5 h-6 sm:w-6 sm:h-7',
    xl: 'w-7 h-8 sm:w-8 sm:h-9',
  };

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
      <span
        className={`font-serif-luxury font-bold uppercase transition-colors ${textSizes[size]}`}
        style={{ color: textColor }}
      >
        MENENDEZ
      </span>
      <div className="shrink-0 flex items-center justify-center">
        <LionRampant className={lionSizes[size]} />
      </div>
      <span
        className={`font-serif-luxury font-bold uppercase transition-colors ${textSizes[size]}`}
        style={{ color: textColor }}
      >
        AMERINO
      </span>
    </div>
  );
};
