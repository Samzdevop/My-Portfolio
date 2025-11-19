import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { Navbar } from './components/Navbar';
import { Scene } from './components/3d/Scene';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { AIChatBot } from './components/AIChatBot';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrolled(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-dark text-white selection:bg-blue-500/30 selection:text-white">
      {/* 3D Background Layer */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <Scene scrollProgress={scrolled} />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Loading Indicator for 3D Assets */}
      <Loader containerStyles={{ background: '#050505' }} innerStyles={{ background: '#3b82f6', height: '4px' }} barStyles={{ height: '4px' }} dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} />

      {/* HTML Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col items-center w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="w-full py-8 text-center text-gray-500 text-sm bg-black border-t border-white/10">
          <p>© {new Date().getFullYear()} Full Stack Developer. Built with React, Three.js & Gemini.</p>
        </footer>
      </div>

      {/* AI Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AIChatBot />
      </div>
    </div>
  );
};

export default App;