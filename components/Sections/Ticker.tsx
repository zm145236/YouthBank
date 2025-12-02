import React from 'react';
import { motion } from 'framer-motion';
import { TICKER_DATA } from '../../constants';

export const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-white border-t border-gray-100 py-3 overflow-hidden flex relative z-10">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA].map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-8 border-r border-gray-100">
            <span className="font-bold text-xs text-gray-500">{item.pair}</span>
            <span className="font-mono text-sm font-medium">{item.price}</span>
            <span className={`text-xs font-medium ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};