import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Card } from '../components/ui/Card';

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
          </div>

          <div className="max-w-4xl mx-auto grid gap-6 mb-10 text-left">
            <Card className="p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bio</h3>
              <p className="text-gray-700 leading-relaxed">
                03年北京人，ENTJ-A，目前 base 深圳。
              </p>
            </Card>

            <Card className="p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-medium">香港中文大学 — 人工智能硕士</span>
                  <span className="text-sm text-gray-500">2025-2027</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-medium">北京理工大学 — 数据科学与大数据本科</span>
                  <span className="text-sm text-gray-500">2021-2025</span>
                </div>
              </div>
            </Card>

            <Card className="p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Philosophy</h3>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  关键词：长期主义、公共价值、理性理想主义。
                </p>
                <p>
                  热爱 AI 一切新技术，希望做出能为世界带来意义和感动的产品。
                </p>
              </div>
            </Card>
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
