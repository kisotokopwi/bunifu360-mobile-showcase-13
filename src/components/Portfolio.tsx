
import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
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

  const projects = [
    {
      id: 1,
      title: "HealthTrack Pro",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive health tracking application with analytics dashboard and personalized insights."
    },
    {
      id: 2,
      title: "EcoMart",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Sustainable shopping platform with carbon footprint tracking and eco-friendly product verification."
    },
    {
      id: 3,
      title: "SmartFinance",
      category: "finance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Personal finance management app with budget planning, expense tracking, and investment insights."
    },
    {
      id: 4,
      title: "TravelCompanion",
      category: "travel",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "All-in-one travel assistant with itinerary planning, local recommendations, and language translation."
    },
    {
      id: 5,
      title: "FitQuest",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Gamified fitness application that turns workouts into interactive quests and challenges."
    },
    {
      id: 6,
      title: "StyleSwap",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Fashion marketplace platform enabling users to buy, sell, and swap clothing items sustainably."
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title-center reveal">Our Portfolio</h2>
          <p className="text-gray-600 max-w-3xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
            Explore our featured mobile applications that showcase our expertise in creating
            innovative, user-friendly, and high-performing solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal" style={{ transitionDelay: '300ms' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition-all duration-300 capitalize ${
                activeFilter === category
                  ? 'bg-bunifu-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 reveal" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bunifu-blue bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <a 
                    href="#" 
                    className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <ExternalLink size={32} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-bunifu-blue bg-blue-50 rounded-full mb-2 capitalize">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-bunifu-darkGray mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
