import { useState, useEffect } from 'react';
import { Sparkles, Shield, Clock, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Sparkles,
      title: 'Interior Cleaning',
      description: 'Deep cleaning of seats, carpets, dashboard, and all interior surfaces.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Exterior Detailing',
      description: 'Professional wash, wax, and polish for a showroom shine.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Clock,
      title: 'Engine Wash',
      description: 'Thorough engine bay cleaning and degreasing service.',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  const testimonials = [
    {
      name: 'David Kamau',
      text: 'Exceptional service! My car looks brand new. The team is professional and pays attention to every detail.',
      rating: 5,
    },
    {
      name: 'Sarah Wanjiru',
      text: 'Best detailing service in Nairobi. They transformed my car completely. Highly recommended!',
      rating: 5,
    },
    {
      name: 'John Ochieng',
      text: 'Amazing work on my SUV. The ceramic coating is worth every shilling. Will definitely be back.',
      rating: 5,
    },
  ];

  const galleryPreview = [
    'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6873076/pexels-photo-6873076.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Car Detailing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Premium Car Detailing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              In Nairobi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional auto detailing that brings your vehicle back to showroom perfection
          </p>
          <button
            onClick={() => onNavigate('booking')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg shadow-blue-500/50"
          >
            Book Your Appointment
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Before & After Gallery
          </h2>
          <p className="text-gray-400 text-center mb-12">See the transformation</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
                onClick={() => onNavigate('gallery')}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('gallery')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl text-gray-300 text-center mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="text-blue-400 text-center font-semibold">
              - {testimonials[currentTestimonial].name}
            </p>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
