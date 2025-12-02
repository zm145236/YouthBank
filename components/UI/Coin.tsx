
import React from 'react';
import { CoinData } from '../../types';

interface CoinProps {
  data: CoinData;
  className?: string;
  style?: React.CSSProperties;
}

export const Coin: React.FC<CoinProps> = ({ data, className, style }) => {
  
  // Side gradients based on rimColor type
  const getSideGradient = () => {
    if (data.rimColor === 'jade') {
      return 'linear-gradient(to bottom, #065f46, #34d399, #064e3b)';
    }
    if (data.rimColor === 'silver') {
       return 'linear-gradient(to bottom, #475569, #94a3b8, #475569)';
    }
    // Default Gold
    return 'linear-gradient(to bottom, #B45309, #FCD34D, #78350F)';
  };

  const sideGradient = getSideGradient();

  return (
    <div className={`relative w-40 h-40 md:w-60 md:h-60 group ${className}`} style={{ ...style, transformStyle: 'preserve-3d' }}>
      
      {/* 3D Thickness (The side of the coin) */}
      {[...Array(8)].map((_, i) => (
         <div 
           key={i}
           className="absolute inset-0 rounded-full"
           style={{ 
             background: sideGradient,
             transform: `translateZ(-${i * 1.5}px)`,
             width: '100%',
             height: '100%'
           }} 
         />
      ))}

      {/* Main Coin Face Container */}
      <div 
        className="absolute inset-0 rounded-full shadow-2xl isolate"
        style={{ 
          transform: 'translateZ(1px)', 
          background: data.innerColor // Solid background to prevent see-through sides
        }}
      >
        {/* Render the Full Coin Image */}
        <div className="w-full h-full rounded-full relative overflow-hidden">
            <img 
              src={data.imageUrl} 
              alt={data.name} 
              className="w-full h-full object-cover"
            />
            
            {/* Glossy Shine Overlay for 3D realism */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none rounded-full mix-blend-overlay" />
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-b from-white/20 to-transparent rotate-45 pointer-events-none mix-blend-soft-light" />
        </div>
      </div>
    </div>
  );
};
