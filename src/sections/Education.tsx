import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { Card } from '../components/ui/Card';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          教育背景
        </motion.h2>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <GraduationCap size={24} className="text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{edu.duration}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.school}</h3>
                <p className="text-gray-700 font-medium mb-2">{edu.degree} · {edu.major}</p>
                
                {edu.gpa && (
                  <p className="text-sm text-gray-500 mb-4">
                    专业成绩: <span className="font-medium text-gray-900">{edu.gpa}</span>
                  </p>
                )}

                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2 font-medium">核心课程</p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">
                          {course.split(' (')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
