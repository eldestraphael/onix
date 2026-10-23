import React from 'react';
import { getAssetUrl } from '../utils/assets';

interface OnixLogoProps {
  variant?: 'red' | 'white' | 'dark';
  className?: string;
  imgClassName?: string;
  withTagline?: boolean;
}

export const OnixLogo: React.FC<OnixLogoProps> = ({
  variant = 'red',
  className = '',
  imgClassName = '',
  withTagline = false,
}) => {
  const isWhite = variant === 'white';
  const logoSrc = isWhite
    ? getAssetUrl('assets/aistudio/Onix_logo_white_01d33921.png')
    : getAssetUrl('assets/aistudio/Onix_logo_red_19067551.png');

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <img
        src={logoSrc}
        alt="ONIX Data Centres"
        className={`h-full w-auto object-contain block ${imgClassName}`}
        loading="eager"
        decoding="async"
      />
      {withTagline && (
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-400 mt-2 font-['Source_Sans_3',sans-serif]">
          Connecting Africa to the Globe
        </span>
      )}
    </div>
  );
};
