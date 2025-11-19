import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [orbitDirection, setOrbitDirection] = useState<'normal' | 'reverse'>('normal');

  const toggleDirection = () => {
    setOrbitDirection(prev => prev === 'normal' ? 'reverse' : 'normal');
  };

  // Custom SVG Icons for the requested stack
  const orbitIcons = [
    { 
      name: "HTML", 
      color: "text-orange-500", 
      bg: "bg-orange-500/10 border-orange-500/20",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2 2h20l-2 16-8 3-8-3L2 2z" />
          <path d="M12 18v-11" />
          <path d="M12 18l-4.5-1.5" />
          <path d="M12 7h5.5" />
        </svg>
      )
    },
    { 
      name: "Node.js", 
      color: "text-green-500", 
      bg: "bg-green-500/10 border-green-500/20",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 2l9 4.5v9l-9 4.5-9-4.5v-9z" />
          <path d="M12 12v9" />
          <path d="M12 12l9-4.5" />
          <path d="M12 12l-9-4.5" />
        </svg>
      )
    },
    { 
      name: "Express", 
      color: "text-gray-200", 
      bg: "bg-white/5 border-white/10",
      icon: (
        <div className="font-bold text-[10px] tracking-tighter border border-current px-1 rounded">EX</div>
      )
    },
    { 
      name: "React", 
      color: "text-cyan-400", 
      bg: "bg-cyan-500/10 border-cyan-500/20",
      icon: (
        <svg viewBox="-10.5 -9.45 21 18.9" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full scale-125">
          <circle cx="0" cy="0" r="2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5" />
            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    { 
      name: "React Native", 
      color: "text-purple-400", 
      bg: "bg-purple-500/10 border-purple-500/20",
      icon: (
        <div className="relative w-full h-full flex items-center justify-center">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 w-full h-full opacity-50">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
             </svg>
             <svg viewBox="-10.5 -9.45 21 18.9" fill="none" stroke="currentColor" strokeWidth="1" className="w-4 h-4 animate-spin-slow" style={{animationDuration: '10s'}}>
                <circle cx="0" cy="0" r="2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5" />
                    <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                    <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                </g>
            </svg>
        </div>
      )
    },
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
               
               {/* Click instruction tooltip */}
               <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-mono text-blue-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-full bg-black/80 border border-blue-500/30">
                  Click to reverse orbit
               </div>
           </div>

           {/* Orbit Ring Container */}
           <div 
              className={`absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] border border-white/5 rounded-full ${orbitDirection === 'normal' ? 'animate-spin-slow' : 'animate-spin-reverse-slow'} transition-all duration-1000`}
           >
              {/* Orbiting Icons */}
              {orbitIcons.map((item, index) => {
                // Calculate position
                const totalItems = orbitIcons.length;
                const angle = (index * 360) / totalItems;
                const radius = 170; // Distance from center (px) - adjust for responsiveness if needed in CSS

                return (
                    <div
                    key={index}
                    className="absolute top-1/2 left-1/2 -ml-7 -mt-7 w-14 h-14"
                    style={{
                        // Use rotation to place items on the circle
                        transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`
                    }}
                    >
                        {/* Icon Container - Counter rotates to stay upright */}
                        <div 
                            className={`w-full h-full rounded-full backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] border ${item.bg} ${item.color} hover:scale-125 transition-transform duration-300 ${orbitDirection === 'normal' ? 'animate-spin-reverse-slow' : 'animate-spin-slow'} group relative`}
                        >
                            <div className="w-8 h-8 flex items-center justify-center">
                                {item.icon}
                            </div>
                            
                            {/* Tooltip name */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-50">
                                {item.name}
                            </div>
                        </div>
                    </div>
                );
              })}
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