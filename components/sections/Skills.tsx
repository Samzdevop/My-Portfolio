import React from 'react';
import { SKILLS } from '../../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full py-32 px-6 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                A master of modern tools, combining robust backend engineering with pixel-perfect frontend capabilities.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
                key={skill.name} 
                className="group relative bg-gradient-to-br from-[#0f0f12] to-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">{skill.name}</h3>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{skill.category}</span>
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                        skill.category === 'Frontend' ? 'border-blue-500/20 bg-blue-500/10 text-blue-400' :
                        skill.category === 'Backend' ? 'border-green-500/20 bg-green-500/10 text-green-400' :
                        skill.category === 'Mobile' ? 'border-purple-500/20 bg-purple-500/10 text-purple-400' :
                        'border-orange-500/20 bg-orange-500/10 text-orange-400'
                    }`}>
                        <span className="font-bold text-sm">{skill.level}</span>
                    </div>
                  </div>

                  <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                        className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${
                            skill.category === 'Frontend' ? 'from-blue-600 to-cyan-400' :
                            skill.category === 'Backend' ? 'from-green-600 to-emerald-400' :
                            skill.category === 'Mobile' ? 'from-purple-600 to-pink-400' :
                            'from-orange-600 to-yellow-400'
                        }`}
                        style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="mt-2 text-right text-xs text-gray-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      MASTERY: {skill.level}%
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};