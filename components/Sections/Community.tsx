import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const Community: React.FC = () => {
  // Memoize random values to ensure stability across renders
  const particles = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
        id: i,
        orbitDuration: 12 + Math.random() * 8,
        delay: Math.random() * -20,
        scale: 0.5 + Math.random() * 0.8
    }));
  }, []);

  return (
    <div className="py-24 bg-gradient-to-b from-white to-purple-50 flex items-center justify-center overflow-hidden min-h-[80vh]">
      <div className="max-w-4xl w-full px-6 text-center relative z-10">
        
        {/* Halo Effect Container - Size reduced by ~20% */}
        <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] mx-auto mb-10 flex items-center justify-center">
            
            {/* 1. Deep Outer Glow (Ambient) - Pulse - Reduced opacity */}
            <motion.div 
                className="absolute inset-[-20%] bg-blue-400/10 rounded-full blur-[60px]" 
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* 2. Main Soft Ring (The Donut) - Static Base - Reduced opacity */}
            <div className="absolute inset-8 md:inset-12 border-[30px] md:border-[50px] border-blue-100/30 rounded-full blur-[30px] mix-blend-screen" />
            
            {/* 3. Rotating Color Overlay 1 (Primary Gradient) - Reduced opacity 80->55 */}
            <motion.div 
                className="absolute inset-0 rounded-full opacity-55 blur-3xl mix-blend-screen"
                style={{
                    background: 'conic-gradient(from 0deg, #A855F7 0%, #3B82F6 30%, transparent 60%, #E879F9 85%, #A855F7 100%)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

             {/* 4. Rotating Color Overlay 2 (Secondary Counter-Rotation) - Reduced opacity 70->50 */}
             <motion.div 
                className="absolute inset-4 rounded-full opacity-50 blur-2xl mix-blend-screen"
                style={{
                    background: 'conic-gradient(from 180deg, #60A5FA 0%, transparent 40%, #C084FC 70%, #60A5FA 100%)'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            
             {/* 5. Bright Highlights Ring (Shimmer) - Reduced opacity 40->25 */}
             <motion.div 
                className="absolute inset-0 rounded-full opacity-25 blur-xl mix-blend-overlay"
                style={{
                    background: 'conic-gradient(from 90deg, white 0%, transparent 15%, white 25%, transparent 100%)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* 6. Orbiting Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={`orbit-${particle.id}`}
                    className="absolute inset-0"
                    animate={{ rotate: [0, 360] }}
                    transition={{ 
                        duration: particle.orbitDuration, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: particle.delay 
                    }}
                >
                    <motion.div
                        className="absolute top-[12%] left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                        style={{ 
                            scale: particle.scale,
                            opacity: 0.8 
                        }}
                        animate={{ 
                            opacity: [0.5, 0.9, 0.5],
                            scale: [particle.scale, particle.scale * 1.3, particle.scale]
                        }}
                        transition={{
                            duration: 1.5 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            ))}

             {/* 7. Inner Core White Glow - Reduced opacity */}
             <div className="absolute inset-[30%] bg-white/30 rounded-full blur-[30px] mix-blend-overlay" />
             
             {/* 8. Thin Definition Ring - Reduced opacity */}
             <div className="absolute inset-[25%] border border-white/30 rounded-full opacity-50" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What's our <span className="text-blue-600">global community</span><br />
          doing on EllipX?
        </h2>
        
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            From exploring emerging blockchain projects to sharing real-time market insights, our community is always at the forefront.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-900/10">
            SIGN UP TODAY
          </button>
          <button className="bg-white text-black border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            FOLLOW US ON X
          </button>
        </div>
      </div>
    </div>
  );
};