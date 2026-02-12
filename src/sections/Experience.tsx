import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Card } from '../components/ui/Card';

export function Experience() {
  const images = {
    bytedance: '/logo_bytedance.png',
    tal: '/logo_tal.png',
    yixin: '/logo_yixin.png',
  };

  const getShortName = (company: string) => {
    if (company.includes('字节跳动')) return 'ByteDance';
    if (company.includes('学而思')) return 'TAL';
    if (company.includes('壹心')) return 'Yixin';
    return company;
  };

  return (
    <section className="pt-4 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Timeline Visualization */}
        <div className="relative mb-20 h-[300px] w-full max-w-[1000px] mx-auto -mt-4">
          <div className="absolute inset-0 w-full h-full z-0">
            <svg 
              viewBox="0 0 1000 300" 
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full text-gray-200 fill-none stroke-current opacity-100"
              style={{ strokeWidth: 2, strokeLinecap: 'round' }}
            >
               {/* 
                 Subtle Dynamic Wave Shape (Slightly Right-leaning Peaks, Slightly Left-leaning Valleys):
                 Start (0, 150)
                 Peak 1: Shifted slightly right to ~27% (x=270), y=120
                 Valley: Shifted slightly left to ~48% (x=480), y=180
                 Peak 2: Shifted slightly right to ~77% (x=770), y=120
                 End (1000, 150)
               */}
               <path d="M0,150 C100,150 180,120 270,120 S380,180 480,180 S670,120 770,120 S900,150 1000,150" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          {/* Items positioned absolutely to match the wave peaks/valleys */}
          {/* Item 1: Yixin (Left, Up) - Shifted slightly right to ~27% */}
          <div className="absolute left-[27%] top-[23.3%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="flex flex-col items-center group"
              >
                <a href="#exp-yixin" className="flex flex-col items-center">
                  <div className="mb-3 bg-white p-3 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <img src={images.yixin} alt="Yixin" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium mb-1 tracking-wider bg-white/80 px-1 rounded">
                    {experiences[2].duration.replace('-', '–')}
                  </span>
                  <div className="w-8 h-1 bg-gray-200 rounded-full group-hover:bg-gray-800 transition-colors" />
                </a>
             </motion.div>
          </div>

          {/* Item 2: TAL (Center, Down) - Shifted slightly left to ~48% */}
          <div className="absolute left-[48%] top-[76.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center group"
              >
                <a href="#exp-tal" className="flex flex-col items-center">
                  {/* Order swapped: Line -> Time -> Image (Since it's below the wave) */}
                  <div className="w-8 h-1 bg-gray-200 rounded-full group-hover:bg-gray-800 transition-colors mb-2" />
                  <span className="text-[10px] text-gray-400 font-medium mb-2 tracking-wider bg-white/80 px-1 rounded">
                    {experiences[1].duration.replace('-', '–')}
                  </span>
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <img src={images.tal} alt="TAL" className="w-16 h-16 object-contain" />
                  </div>
                </a>
             </motion.div>
          </div>

          {/* Item 3: ByteDance (Right, Up) - Shifted slightly right to ~77% */}
          <div className="absolute left-[77%] top-[23.3%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center group"
              >
                <a href="#exp-bytedance" className="flex flex-col items-center">
                  <div className="mb-3 bg-white p-3 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <img src={images.bytedance} alt="ByteDance" className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium mb-1 tracking-wider bg-white/80 px-1 rounded">
                    {experiences[0].duration.replace('-', '–')}
                  </span>
                  <div className="w-8 h-1 bg-gray-200 rounded-full group-hover:bg-gray-800 transition-colors" />
                </a>
             </motion.div>
          </div>

        </div>


        {/* Detailed Cards */}
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              id={`exp-${exp.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="scroll-mt-24"
            >
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-[65%]">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{getShortName(exp.company)}</h3>
                      <p className="text-gray-500 font-medium text-lg mb-4">{exp.title}</p>
                    </div>

                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full md:w-[35%]">
                    {/* Placeholder for future image */}
                    <div className="aspect-[4/3] bg-gray-100 rounded-xl w-full"></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
