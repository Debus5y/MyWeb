import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-2">戚嘉亮</h3>
            <p className="text-gray-500 text-sm">长期主义 · 公共价值 · 理性理想主义</p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:qijialiangBIT@163.com" className="hover:text-gray-900 transition-colors">
                qijialiangBIT@163.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(+86) 18810503096</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>深圳市罗湖区市山花园C座</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          <p className="uppercase tracking-[0.2em] font-light text-[#cfd6dc] text-[10px] scale-90">
            © 2026 JIALIANG QI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
