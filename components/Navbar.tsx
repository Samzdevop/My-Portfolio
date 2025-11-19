import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          DEV.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest hover:underline decoration-blue-500 underline-offset-4">
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-8 border-l border-gray-700 pl-8">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-gray-800 p-6 flex flex-col space-y-4 backdrop-blur-lg">
           {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-200 hover:text-blue-400">
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4">
             <a href="#" className="text-gray-400 hover:text-blue-400"><Github size={24} /></a>
             <a href="#" className="text-gray-400 hover:text-blue-400"><Linkedin size={24} /></a>
             <a href="#" className="text-gray-400 hover:text-blue-400"><Mail size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};