
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar fixed w-full z-50 px-4 py-3 md:py-4 ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-bunifu-darkGray">
            Bunifu<span className="text-bunifu-blue">360</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-bunifu-darkGray hover:text-bunifu-blue transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-bunifu-darkGray hover:text-bunifu-blue transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-bunifu-darkGray hover:text-bunifu-blue transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-bunifu-darkGray hover:text-bunifu-blue transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-bunifu-darkGray hover:text-bunifu-blue transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-bunifu-darkGray">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-bunifu-darkGray py-2 hover:text-bunifu-blue transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-bunifu-darkGray py-2 hover:text-bunifu-blue transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-bunifu-darkGray py-2 hover:text-bunifu-blue transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-bunifu-darkGray py-2 hover:text-bunifu-blue transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-bunifu-darkGray py-2 hover:text-bunifu-blue transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary w-full text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
