import React from 'react';
import { Card } from '../components/ui/Card';

export function Resume() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">简历</h2>
        <Card className="p-8 text-center text-gray-500">
          <p>简历内容待添加...</p>
        </Card>
      </div>
    </section>
  );
}
