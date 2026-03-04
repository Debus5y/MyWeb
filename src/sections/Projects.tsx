import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';

export function Projects() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          项目经历
        </motion.h2>

        <div className="max-w-4xl mx-auto grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        Vibe Coding
                      </span>
                      <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        网站 Demo
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Buy or Not</h3>
                    <p className="text-gray-500 mt-1">「买不买」决策辅助产品</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://buyor-not.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      打开项目
                    </a>
                  </div>
                </div>

                <div className="text-gray-700 text-sm leading-relaxed">
                  <p className="font-medium text-gray-900 mb-2">项目说明</p>
                  <p>
                    「买不买」是一款用大模型快速生成明确购买结论的决策辅助产品。目标是：帮用户结束纠结，减少思考成本，给出明确方向。
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
