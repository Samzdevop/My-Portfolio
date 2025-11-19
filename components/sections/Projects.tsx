import React, { useState } from 'react';
import { ExternalLink, Github, X, Maximize2, CheckCircle, ArrowUpRight } from 'lucide-react';
import { PROJECTS, DetailedProject } from '../../constants';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  return (
    <section id="projects" className="w-full py-32 px-6 bg-[#050505] relative">
       {/* Subtle grid background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
                <span className="text-purple-500 font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-4">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Works</span>
                </h2>
            </div>
            <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white transition-colors">
                <span className="text-sm font-bold uppercase tracking-widest">View Github</span>
                <ArrowUpRight size={18} />
            </div>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
                key={project.id} 
                className="group relative rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] flex flex-col"
            >
              
              {/* Image Area */}
              <div 
                className="h-72 w-full bg-[#111] relative overflow-hidden rounded-t-3xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                  {/* Abstract gradient placeholder for project image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <span className="text-9xl font-black text-white mix-blend-overlay select-none">{project.id}</span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <button className="px-6 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Details <Maximize2 size={16} />
                      </button>
                  </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors cursor-pointer"
                    >
                        {project.title}
                    </h3>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-2 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex space-x-4">
                    <a href={project.link} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors" title="View Code">
                        <Github size={18} />
                    </a>
                    <a href={project.link} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink size={18} />
                    </a>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                  >
                    Read More <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 p-4 md:p-0">
              <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
              
              <div className="relative bg-[#0f0f12] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up custom-scrollbar">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white transition-colors z-20 border border-white/10"
                  >
                      <X size={24} />
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">
                      {/* Sidebar / Header Image */}
                      <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black relative p-8 flex flex-col justify-between h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-white/10">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
                          
                          <div className="relative z-10">
                              <div className="inline-block px-3 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs font-bold mb-4 border border-purple-500/20">
                                  Featured Project
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{selectedProject.title}</h2>
                              <div className="flex flex-wrap gap-2">
                                  {selectedProject.tech.map(t => (
                                      <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-300">
                                          {t}
                                      </span>
                                  ))}
                              </div>
                          </div>

                          <div className="relative z-10 mt-8 lg:mt-0 space-y-3">
                              <a href={selectedProject.link} className="flex items-center justify-center w-full py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                  <ExternalLink size={18} className="mr-2" /> Live Preview
                              </a>
                              <a href={selectedProject.link} className="flex items-center justify-center w-full py-3 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-colors border border-white/10">
                                  <Github size={18} className="mr-2" /> Source Code
                              </a>
                          </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-3 p-8 md:p-10 space-y-8">
                          <div>
                              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                  <span className="w-1 h-6 bg-purple-500 rounded-full"></span> Project Overview
                              </h4>
                              <p className="text-gray-300 leading-relaxed text-lg">
                                  {selectedProject.fullDescription || selectedProject.description}
                              </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div>
                                  <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                                  <ul className="space-y-3">
                                      {(selectedProject.features || []).map((feature, idx) => (
                                          <li key={idx} className="flex items-start text-gray-400 text-sm">
                                              <CheckCircle size={16} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                              <span>{feature}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                              
                              <div>
                                  <h4 className="text-lg font-bold text-white mb-4">Tech Stack</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-2 rounded-lg bg-[#1a1a1a] text-gray-300 text-sm font-medium border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                  </div>
                              </div>
                          </div>

                          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-purple-500/10">
                              <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-2">Technical Challenge</h4>
                              <p className="text-gray-300 italic">
                                  "{selectedProject.challenges || "Implementing a scalable architecture that could handle high-concurrency requests while maintaining sub-100ms response times."}"
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </section>
  );
};