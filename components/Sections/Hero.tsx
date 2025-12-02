import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Coin } from '../UI/Coin';
import { COINS } from '../../constants';
import { Ticker } from './Ticker';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between pt-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Live Market
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Keep ahead<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                of the curve
              </span><br />
              with EllipX
            </h1>
          </motion.div>

          <motion.p 
            className="text-gray-500 max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The world's most secure and transparent way to buy, sell and manage your crypto assets with confidence.
          </motion.p>

          <motion.button
            className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            START TRADING
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right Content - 3D Stack */}
        <div className="w-full md:w-1/2 h-[500px] relative flex items-center justify-center mt-12 md:mt-0 perspective-1000">
           {COINS.map((coin, index) => (
             <motion.div
               key={coin.id}
               className="absolute"
               initial={{ 
                 y: 1200, 
                 opacity: 0, 
                 rotateX: 770, // 720 + 50
                 rotateY: 720, 
                 scale: 0.2 
               }}
               animate={{ 
                 y: index * -60, 
                 opacity: 1,
                 rotateX: 50, 
                 rotateY: 0,
                 rotateZ: -10 + index * 5,
                 scale: 1 - (index * 0.05)
               }}
               transition={{ 
                 delay: 0.2 + (index * 0.6), // Slower stagger for distinct "one by one" feel
                 duration: 3.5, // Slow settling duration
                 ease: [0.1, 0.9, 0.2, 1.0], // Custom bezier: Fast jet start, slow smooth finish
               }}
               style={{ zIndex: COINS.length - index, transformStyle: 'preserve-3d' }}
             >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut",
                    delay: 3.7 + (index * 0.6) // Wait for entrance to finish before floating
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Coin data={coin} />
                </motion.div>
             </motion.div>
           ))}
        </div>
      </div>

      <Ticker />
    </div>
  );
};