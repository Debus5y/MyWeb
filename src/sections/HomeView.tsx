import React from 'react';
import { motion } from 'framer-motion';

type HomeViewProps = {
  onNavigate: (tab: string) => void;
};

export function HomeView({ onNavigate }: HomeViewProps) {
  const menuItems = [
    { id: 'about', label: '关于我', icon: '/icons/about.png', enLabel: 'PROFESSIONAL EXPERIENCE' },
    { id: 'experience', label: '经历', icon: '/icons/experience.png', enLabel: 'STRATEGIC COMPETITION' },
    { id: 'education', label: '教育', icon: '/icons/education.png', enLabel: 'BASE SOLUTION' },
    { id: 'skills', label: '技能', icon: '/icons/skills.png', enLabel: 'AI EXPLORATION' },
    { id: 'projects', label: '项目', icon: '/icons/projects.png', enLabel: 'VISUAL CREATIVE' },
    { id: 'resume', label: '简历', icon: '/icons/resume.png', enLabel: 'INSIGHTS & MEDIA' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <div className="mb-6">
          <img 
            src="/avatar.png" 
            alt="Avatar" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover grayscale object-[42.5%_center]"
          />
        </div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
            UPDATE DATE: 2026.2.2
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-40 gap-y-32 max-w-7xl mx-auto px-4 mb-20">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            onClick={() => onNavigate(item.id)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="mb-8 transform transition-transform duration-300 group-hover:scale-110">
              {/* Placeholder for Icon */}
              <div className="w-48 h-48 bg-gray-50 rounded-lg flex items-center justify-center mb-2 mix-blend-multiply">
                 <img 
                   src={item.icon} 
                   alt={item.label} 
                   className={`w-44 h-44 object-contain grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${
                     ['about', 'education'].includes(item.id) ? 'opacity-80' : 'opacity-30'
                   }`}
                   onError={(e) => {
                     // Fallback if image not found to avoid broken image icon
                     (e.target as HTMLImageElement).style.display = 'none';
                     (e.target as HTMLImageElement).parentElement!.classList.add('after:content-["?"]', 'after:text-gray-400');
                 }}/>
              </div>
            </div>
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase font-medium text-center group-hover:text-gray-800 transition-colors">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="fixed bottom-8 left-0 right-0 text-center">
          <p className="uppercase tracking-[0.2em] font-light text-[#cfd6dc] text-[10px] scale-90">
            © 2026 JIALIANG QI. ALL RIGHTS RESERVED.
          </p>
      </div>
    </div>
  );
}
