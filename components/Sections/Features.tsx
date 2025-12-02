
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Coin } from '../UI/Coin';
import { COINS } from '../../constants';
import { CoinData } from '../../types';

// Sub-component to handle individual coin animations safely using hooks
interface FeatureCoinProps {
  coin: CoinData;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const FeatureCoin: React.FC<FeatureCoinProps> = ({ coin, index, scrollYProgress }) => {
  // Logic: As scroll progresses, coins spread out vertically
  const yOffset = useTransform(scrollYProgress, 
    [0, 0.3, 0.6, 1], 
    [index * -40, (index - 1.5) * 150, (index - 1.5) * 200, 0]
  );
  
  const scale = useTransform(scrollYProgress,
    [0, 0.5, 1],
    [1 - index * 0.05, 1.2, 0.8]
  );

  const opacity = useTransform(scrollYProgress,
     [0, 0.1 + (index * 0.2), 0.3 + (index * 0.2), 1],
     [1, 1, 0.3, 0] // Fade out as they go up/down excessively
  );

  return (
    <motion.div
       className="absolute"
       style={{ 
         y: yOffset, 
         scale, 
         opacity, 
         rotateX: 40,
         zIndex: COINS.length - index // Ensure top coins (index 0) render on top
       }}
    >
      <Coin data={coin} />
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  return (
    <div ref={containerRef} className="relative h-[300vh] bg-white">
      
      {/* Sticky Center Visual */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Gradients that shift */}
            <motion.div 
                style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
                className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-[80px]"
            />

            {/* The stack of coins that separates/morphs */}
            {COINS.map((coin, index) => (
               <FeatureCoin 
                 key={coin.id} 
                 coin={coin} 
                 index={index} 
                 scrollYProgress={scrollYProgress} 
               />
            ))}
        </div>
      </div>

      {/* Scrolling Text Content */}
      <div className="absolute top-0 left-0 w-full">
        {/* Section 1 */}
        <div className="h-screen w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center pointer-events-none">
          <div className="pointer-events-auto p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm">
            <span className="text-sm font-semibold text-blue-600 mb-2 block">+ Built for traders</span>
            <h2 className="text-4xl font-bold mb-4">Platform built by traders, for traders.</h2>
            <p className="text-gray-600">
              Regardless of your skill level, EllipX is made for you. We built our exchange with traders in mind, incorporating detailed charting systems.
            </p>
          </div>
          <div /> 
        </div>

        {/* Section 2 */}
        <div className="h-screen w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center pointer-events-none">
          <div /> 
          <div className="pointer-events-auto p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm text-right md:text-left">
            <span className="text-sm font-semibold text-purple-600 mb-2 block">+ Transparency & Security</span>
            <h2 className="text-4xl font-bold mb-4">Trust matters in crypto.</h2>
            <p className="text-gray-600">
              That's why EllipX ensures every asset is secure and accounted for with top-tier protocols. Multi-Party Computation (MPC) ensures your funds are safeguarded.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="h-screen w-full max-w-7xl mx-auto px-6 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm mt-96">
             <h2 className="text-4xl font-bold mb-4">Deep Liquidity</h2>
             <p className="text-gray-600 max-w-lg mx-auto">
               Trade with confidence knowing you are getting the best prices across the market with our aggregated liquidity pools.
             </p>
          </div>
        </div>
      </div>

    </div>
  );
};
