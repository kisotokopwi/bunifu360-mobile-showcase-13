
import React, { useEffect } from 'react';
import { Smartphone, Code, Layers, Database, Gauge, Headphones } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-bunifu-blue mb-4" />,
      title: "Mobile App Development",
      description: "Custom iOS and Android applications built with the latest technologies to provide exceptional user experiences."
    },
    {
      icon: <Code className="w-12 h-12 text-bunifu-blue mb-4" />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter solutions that work seamlessly across platforms."
    },
    {
      icon: <Layers className="w-12 h-12 text-bunifu-blue mb-4" />,
      title: "UI/UX Design",
      description: "User-centered design processes that ensure intuitive, engaging, and accessible mobile interfaces."
    },
    {
      icon: <Database className="w-12 h-12 text-bunifu-blue mb-4" />,
      title: "Backend Integration",
      description: "Robust API development and seamless integration with existing systems and third-party services."
    },
    {
      icon: <Gauge className="w-12 h-12 text-bunifu-blue mb-4" />,
      title: "Performance Optimization",
      description: "Enhance existing applications with speed improvements, reduced battery consumption, and overall better performance."
    },
    {
      icon: <Headphones className="w-12 h-12 text-bunifu-blue mb-4" />,
      title: "Maintenance & Support",
      description: "Ongoing technical support, regular updates, and proactive maintenance to keep your app running smoothly."
    }
  ];

  return (
    <section id="services" className="section-padding bg-bunifu-lightGray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title-center reveal">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
            We offer comprehensive mobile solutions tailored to your business needs, 
            from concept to launch and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white reveal" 
              style={{ transitionDelay: `${(index) * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold text-bunifu-darkGray mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal" style={{ transitionDelay: '800ms' }}>
          <button className="btn-primary">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
