import React from 'react';
import { motion } from 'framer-motion';

type HeroProps = {
  onAvatarClick?: () => void;
};

export function Hero({ onAvatarClick }: HeroProps) {
  return (
    <section className="pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">
            UPDATE DATE: 2026.2.2
          </p>

          <div className="mb-2">
            <img 
              src="/avatar.png" 
              alt="戚嘉亮" 
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg object-[42.5%_center] ${onAvatarClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
              onClick={onAvatarClick}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
