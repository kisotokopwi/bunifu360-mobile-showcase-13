
import React, { useEffect } from 'react';
import { Award, Users, Clock, Rocket } from 'lucide-react';

const About: React.FC = () => {
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

  const stats = [
    { 
      icon: <Award className="w-10 h-10 text-bunifu-blue" />, 
      value: "5+", 
      label: "Years Experience" 
    },
    { 
      icon: <Users className="w-10 h-10 text-bunifu-blue" />, 
      value: "20+", 
      label: "Team Members" 
    },
    { 
      icon: <Clock className="w-10 h-10 text-bunifu-blue" />, 
      value: "100+", 
      label: "Projects Completed" 
    },
    { 
      icon: <Rocket className="w-10 h-10 text-bunifu-blue" />, 
      value: "50+", 
      label: "Happy Clients" 
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-xl reveal"
              />
              <div className="absolute -bottom-6 -right-6 bg-bunifu-blue p-6 rounded-lg shadow-lg reveal" style={{ transitionDelay: '300ms' }}>
                <p className="text-white font-bold text-xl">Since 2018</p>
                <p className="text-blue-100">Creating Mobile Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-title reveal">About Bunifu360</h2>
            <p className="text-gray-600 mb-6 reveal" style={{ transitionDelay: '200ms' }}>
              At Bunifu360, we specialize in creating cutting-edge mobile solutions that help businesses thrive in the digital age. With a passion for innovation and user-centric design, we transform ideas into high-performing mobile applications.
            </p>
            <p className="text-gray-600 mb-6 reveal" style={{ transitionDelay: '400ms' }}>
              Our team of experienced developers, designers, and strategists work collaboratively to deliver mobile solutions that exceed expectations and drive tangible results for our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg reveal" style={{ transitionDelay: `${(index + 3) * 200}ms` }}>
                  {stat.icon}
                  <h3 className="text-3xl font-bold text-bunifu-darkGray mt-2">{stat.value}</h3>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
