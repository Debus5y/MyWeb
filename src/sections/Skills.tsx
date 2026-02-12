import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Card } from '../components/ui/Card';

export function Skills() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          技能特长
        </motion.h2>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{category.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
