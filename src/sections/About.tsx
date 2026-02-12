import React from 'react';
import { motion } from 'framer-motion';
import { keywords } from '../data/skills';
import { Mail, Phone } from 'lucide-react';

export function About() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">
            <a
              href="mailto:qijialiangBIT@163.com"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Mail size={18} />
              <span>qijialiangBIT@163.com</span>
            </a>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>(+86) 18810503096</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
