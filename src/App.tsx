import React, { useState } from 'react';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Resume } from './sections/Resume';
import { HomeView } from './sections/HomeView';
import { Footer } from './components/Footer';
import { cn } from './utils/cn';

type Tab = 'about' | 'experience' | 'education' | 'skills' | 'projects' | 'resume';
type View = 'home' | 'content';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('experience');
  const [currentView, setCurrentView] = useState<View>('home');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'about', label: '关于我' },
    { id: 'experience', label: '经历' },
    { id: 'education', label: '教育' },
    { id: 'skills', label: '技能' },
    { id: 'projects', label: '项目' },
    { id: 'resume', label: '简历' },
  ];

  const handleNavigate = (tab: string) => {
    setActiveTab(tab as Tab);
    setCurrentView('content');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  if (currentView === 'home') {
    return <HomeView onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <Hero onAvatarClick={handleBackToHome} />

      <main className="container mx-auto px-4 md:px-6 pb-20">
        <nav className="flex justify-center mb-12">
          <div className="flex items-center gap-8 border-b border-transparent overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-2 text-sm font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap",
                  activeTab === tab.id
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-400 hover:text-gray-600 border-b-2 border-transparent"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="min-h-[400px]">
          {activeTab === 'about' && <About />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'education' && <Education />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'resume' && <Resume />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
