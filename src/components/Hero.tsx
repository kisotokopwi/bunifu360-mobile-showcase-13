
import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-50 relative overflow-hidden">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between pt-24">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bunifu-darkGray mb-4 reveal">
            Transform Your <span className="text-bunifu-blue">Mobile Experience</span> with Bunifu360
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 reveal" style={{ transitionDelay: '200ms' }}>
            We create innovative mobile solutions that drive business growth and deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 reveal" style={{ transitionDelay: '400ms' }}>
            <button className="btn-primary">
              View Our Work
            </button>
            <button className="border-2 border-bunifu-blue text-bunifu-blue font-medium py-3 px-6 rounded-md transition-all duration-300 hover:bg-bunifu-blue hover:text-white">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative reveal" style={{ transitionDelay: '600ms' }}>
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-bunifu-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Mobile app development" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-bunifu-blue animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
