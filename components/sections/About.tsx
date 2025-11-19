import React from 'react';
import { Terminal, Coffee, Book, Award, Code, Cpu } from 'lucide-react';
import { BIO_TEXT, ABOUT_STATS } from '../../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-32 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 mb-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span>About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Future</span>
            </h2>
            
            <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed mb-10">
              <p>{BIO_TEXT}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {ABOUT_STATS.map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-[#0f0f12] border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
                        <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-3xl flex flex-col items-start gap-4 transform hover:-translate-y-2 transition-transform border-t-4 border-t-blue-500">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Terminal size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Clean Architecture</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">I prioritize maintainable, scalable code structures that stand the test of time and traffic.</p>
                </div>
            </div>

            <div className="glass-card p-8 rounded-3xl flex flex-col items-start gap-4 transform hover:-translate-y-2 transition-transform border-t-4 border-t-purple-500 sm:translate-y-8">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Cpu size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Performance First</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Optimizing every byte and frame. From 60fps animations to sub-second load times.</p>
                </div>
            </div>

            <div className="glass-card p-8 rounded-3xl flex flex-col items-start gap-4 transform hover:-translate-y-2 transition-transform border-t-4 border-t-pink-500">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
                    <Code size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Modern Stack</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Leveraging the latest ecosystem tools: React 19, RSC, Tailwind, and Native modules.</p>
                </div>
            </div>

             <div className="glass-card p-8 rounded-3xl flex flex-col items-start gap-4 transform hover:-translate-y-2 transition-transform border-t-4 border-t-green-500 sm:translate-y-8">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                    <Award size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Best Practices</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Commitment to accessibility, SEO, and security standards in every project.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};