import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Aperture, Disc } from 'lucide-react';

export const Wallet: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="py-32 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-6xl font-bold mb-4">Crypto Card</h2>
        <p className="text-gray-500 text-lg">Spend your crypto anywhere with the EllipX Card.</p>
      </div>

      <div 
        className="relative perspective-1000 p-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="w-[340px] h-[220px] md:w-[600px] md:h-[380px] bg-[#0a0a0a] rounded-[32px] shadow-2xl relative overflow-hidden border border-gray-800 flex flex-col"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Top Bar (Black Area) */}
            <div className="h-20 md:h-24 px-8 flex items-center justify-between relative z-20">
                <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-2xl md:text-3xl tracking-tight">EllipX</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <span className="text-white font-medium text-lg hidden md:block">Esther Howard</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                        <Aperture className="text-white w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Holographic Inner Card Section */}
            <div className="flex-1 mx-2 mb-2 rounded-[24px] relative overflow-hidden">
                {/* 1. Base Vivid Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-purple-500 to-yellow-300" />
                
                {/* 2. Wave/Mesh Texture Pattern */}
                <div 
                    className="absolute inset-0 opacity-40 mix-blend-overlay" 
                    style={{
                        backgroundImage: `
                            repeating-radial-gradient(circle at 0 0, transparent 0, #000 3px),
                            repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 4px)
                        `,
                        backgroundSize: '100% 100%, 10px 10px'
                    }}
                />
                
                {/* 3. Iridescent Sheen Animation */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ mixBlendMode: 'soft-light' }}
                />

                 {/* 4. Content Overlay */}
                 <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                        {/* Mastercard-ish Circles */}
                        <div className="flex -space-x-3 opacity-90">
                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-200/80 backdrop-blur-sm" />
                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-200/80 backdrop-blur-sm" />
                        </div>
                        
                        {/* Card Number */}
                        <div className="font-mono text-white/90 text-lg md:text-2xl tracking-[0.15em] text-shadow-sm">
                            1234 5678 9000 0000
                        </div>
                    </div>
                 </div>
            </div>
          
          {/* Glossy Overlay for the whole card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[32px]" />
        </motion.div>
        
        {/* Floating Backdrop Elements (Adjusted for horizontal card) */}
        <motion.div 
            className="absolute top-0 right-0 md:-right-8 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 border border-gray-100 z-30"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
             <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase">Payment Sent</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
             </div>
             <p className="font-bold text-xl text-gray-900">$1,250.00</p>
             <p className="text-xs text-gray-500 mt-1">To: Apple Store Inc.</p>
        </motion.div>
        
         <motion.div 
            className="absolute -bottom-8 left-4 md:-left-12 w-40 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-gray-800 z-30"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
             <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                     <Disc className="w-4 h-4 text-purple-400" />
                 </div>
                 <div>
                    <p className="text-xs text-gray-400">Cashback</p>
                    <p className="text-sm font-bold text-white">3% Earned</p>
                 </div>
             </div>
        </motion.div>
      </div>
    </div>
  );
};