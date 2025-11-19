import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

  return (
    <section id="contact" className="w-full py-32 px-6 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <div>
                <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white">
                    Let's Build <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Something Great</span>
                </h2>
                
                <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                    I'm currently available for freelance projects and open to full-time opportunities. If you have an idea, I have the code.
                </p>

                <div className="space-y-8 mb-12">
                    <a href="mailto:hello@alex.dev" className="flex items-center space-x-6 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-colors -mx-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Email Me</p>
                            <p className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">hello@alex.dev</p>
                        </div>
                    </a>
                    
                    <div className="flex items-center space-x-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors -mx-4">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Call Me</p>
                            <p className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">+1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                        <Github size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>

            <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px] animate-fade-in">
                        <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                            <Send size={36} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Message Sent!</h3>
                        <p className="text-gray-400 max-w-xs mb-8">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                        <button onClick={() => setSubmitted(false)} className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold flex items-center gap-2 transition-colors">
                            Send another <ArrowRight size={16} />
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({...formState, name: e.target.value})}
                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-black transition-all placeholder-gray-700"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-black transition-all placeholder-gray-700"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                            <textarea 
                                id="message"
                                required
                                rows={5}
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-black transition-all placeholder-gray-700 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 mt-4"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <Send size={18} />}
                        </button>
                    </form>
                )}
            </div>

        </div>
      </div>
    </section>
  );
};