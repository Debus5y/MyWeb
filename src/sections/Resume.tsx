import React from 'react';
import { Card } from '../components/ui/Card';

export function Resume() {
  const resumePdfUrl = '/resume.pdf';
  const [isPdfAvailable, setIsPdfAvailable] = React.useState(true);

  React.useEffect(() => {
    const controller = new AbortController();

    fetch(resumePdfUrl, { method: 'HEAD', signal: controller.signal })
      .then((res) => {
        setIsPdfAvailable(res.ok);
      })
      .catch(() => {
        setIsPdfAvailable(false);
      });

    return () => controller.abort();
  }, [resumePdfUrl]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">简历</h2>
        <Card className="p-8">
          {isPdfAvailable ? (
            <div className="space-y-4">
              <div className="w-full h-[70vh] overflow-hidden rounded-md border border-gray-100 shadow-sm bg-white">
                <iframe title="简历预览" src={resumePdfUrl} className="w-full h-full" />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors underline underline-offset-4"
                >
                  打开 PDF
                </a>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a
                  href={resumePdfUrl}
                  download
                  className="text-gray-700 hover:text-gray-900 transition-colors underline underline-offset-4"
                >
                  下载 PDF
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 space-y-2">
              <p className="font-medium text-gray-700">简历 PDF 未找到</p>
              <p>
                请将你的简历文件放到 <span className="font-mono">public/resume.pdf</span>，刷新页面即可预览。
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
