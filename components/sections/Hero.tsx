import React, { useState } from 'react';
import { ArrowDown, Smartphone, Monitor, Database, Globe, Cpu, Server, Layout, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  const [orbitDirection, setOrbitDirection] = useState<'normal' | 'reverse'>('normal');

  const toggleDirection = () => {
    setOrbitDirection(prev => prev === 'normal' ? 'reverse' : 'normal');
  };

  // Tech stack icons to orbit
  const orbitIcons = [
    { icon: <Monitor size={20} />, color: "text-blue-400" },
    { icon: <Server size={20} />, color: "text-green-400" },
    { icon: <Smartphone size={20} />, color: "text-purple-400" },
    { icon: <Database size={20} />, color: "text-yellow-400" },
    { icon: <Cpu size={20} />, color: "text-red-400" },
    { icon: <Code size={20} />, color: "text-cyan-400" },
    { icon: <Globe size={20} />, color: "text-indigo-400" },
    { icon: <Layout size={20} />, color: "text-pink-400" },
  ];

  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Interactive Orbit System */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center order-2 lg:order-1 animate-fade-in">
           
           {/* Central Profile Image */}
           <div 
              onClick={toggleDirection}
              className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 cursor-pointer hover:scale-105 transition-transform duration-500 shadow-[0_0_50px_rgba(59,130,246,0.4)] group"
            >
               <div className="w-full h-full rounded-full overflow-hidden bg-black border-4 border-black relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=500" 
                    alt="Developer Profile" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
               </div>
               <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-mono text-blue-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to reverse orbit
               </div>
           </div>

           {/* Orbit Ring Container */}
           <div 
              className={`absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] border border-white/5 rounded-full ${orbitDirection === 'normal' ? 'animate-spin-slow' : 'animate-spin-reverse-slow'} transition-all duration-1000`}
           >
              {/* Orbiting Icons */}
              {orbitIcons.map((item, index) => (
                <div
                  key={index}
                  className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 md:w-14 md:h-14"
                  style={{
                    // This creates the circular positioning
                    transform: `rotate(${index * 45}deg) translateY(-170px) rotate(-${index * 45}deg)`
                  }}
                >
                   {/* Desktop offset override logic via generic CSS calc would be ideal, but hardcoded values for responsive demo work best */}
                    {/* Counter-rotate the icon so it stays upright while the parent spins */}
                    <div 
                      className={`w-full h-full rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] ${item.color} hover:scale-125 transition-transform duration-300 ${orbitDirection === 'normal' ? 'animate-spin-reverse-slow' : 'animate-spin-slow'}`}
                    >
                        {item.icon}
                    </div>
                </div>
              ))}
           </div>
           
           {/* Decorative Outer Rings */}
           <div className="absolute w-[120%] h-[120%] border border-dashed border-white/5 rounded-full animate-spin-reverse-slow opacity-30 pointer-events-none" style={{ animationDuration: '40s' }}></div>
           <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 z-10">
            <div className="flex space-x-3 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-bold tracking-wider uppercase">
                    Full Stack Developer
                </span>
                <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs md:text-sm font-bold tracking-wider uppercase">
                    Mobile Expert
                </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[1] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <span className="text-white">FULL STACK</span> <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-glow">
                    VISIONARY
                </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Crafting immersive digital experiences where <span className="text-white font-semibold">design meets engineering</span>. 
                I build scalable web and mobile applications that redefine user interaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <a href="#projects" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all transform hover:scale-105 overflow-hidden">
                    <span className="relative z-10 group-hover:text-blue-600 transition-colors">View My Work</span>
                    <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10"></div>
                </a>
                <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm">
                    Contact Me
                </a>
            </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};