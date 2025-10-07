'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Ritam Animation Component - represents harmony and cosmic order
const RitamAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-80 h-80 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Outer orbit */}
        <motion.div
          className="w-80 h-80 border-2 border-indigo-200 rounded-full relative"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          <motion.div 
            className="w-6 h-6 bg-amber-600 rounded-full absolute top-0 left-1/2 -ml-3 shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="w-4 h-4 bg-indigo-600 rounded-full absolute bottom-0 right-0 -mr-2 -mb-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Middle orbit */}
        <motion.div
          className="w-48 h-48 border-2 border-indigo-100 rounded-full absolute top-1/2 left-1/2 -mt-24 -ml-24"
          animate={{ rotate: -360 }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <motion.div 
            className="w-4 h-4 bg-indigo-900 rounded-full absolute bottom-0 left-1/2 -ml-2"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Inner orbit */}
        <motion.div
          className="w-16 h-16 border border-amber-300 rounded-full absolute top-1/2 left-1/2 -mt-8 -ml-8"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          <motion.div 
            className="w-3 h-3 bg-amber-500 rounded-full absolute top-0 left-1/2 -ml-1.5"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Center dot representing the core */}
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-amber-600 rounded-full absolute top-1/2 left-1/2 -mt-4 -ml-4 shadow-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default RitamAnimation;
