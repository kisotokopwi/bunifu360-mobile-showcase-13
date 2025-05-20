
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Working with Bunifu360 was a game-changer for our business. Their team delivered a mobile application that exceeded our expectations in both functionality and design. The user engagement has increased by 40% since launch.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Founder, HealthLink",
      content: "Bunifu360 transformed our healthcare application vision into reality. Their expertise in mobile development and understanding of healthcare regulations made the process smooth. Our app has received excellent feedback from both patients and doctors.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Rebecca Torres",
      position: "Marketing Director, EcoShop",
      content: "The team at Bunifu360 went above and beyond to create an e-commerce app that perfectly aligns with our brand values. Their attention to detail and responsive communication made the entire development process a pleasure.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-bunifu-lightGray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title-center reveal">Client Testimonials</h2>
          <p className="text-gray-600 max-w-3xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
            Don't just take our word for it. Here's what our clients have to say about working with Bunifu360.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden reveal" style={{ transitionDelay: '300ms' }}>
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-bunifu-darkGray">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic">"{testimonial.content}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-bunifu-blue hover:bg-bunifu-blue hover:text-white transition-colors duration-300 reveal"
            aria-label="Previous testimonial"
            style={{ transitionDelay: '400ms' }}
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-bunifu-blue hover:bg-bunifu-blue hover:text-white transition-colors duration-300 reveal"
            aria-label="Next testimonial"
            style={{ transitionDelay: '400ms' }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2 reveal" style={{ transitionDelay: '500ms' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-bunifu-blue scale-125' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
