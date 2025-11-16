import { Sparkles, Car, Droplets, Shield, Wrench, Lightbulb, Clock, DollarSign } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Sparkles,
      title: 'Interior Detailing',
      description: 'Complete interior restoration and deep cleaning',
      includes: [
        'Vacuum all carpets and upholstery',
        'Deep clean and condition leather seats',
        'Dashboard and console cleaning',
        'Window cleaning (interior)',
        'Door panel and trim detailing',
        'Air vent cleaning',
      ],
      duration: '2-3 hours',
      price: 'From KES 3,500',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Car,
      title: 'Exterior Detailing',
      description: 'Professional exterior treatment for a showroom shine',
      includes: [
        'Hand wash with premium products',
        'Clay bar treatment',
        'Paint polish and correction',
        'Wax application for protection',
        'Wheel and tire cleaning',
        'Chrome and trim polishing',
      ],
      duration: '2-4 hours',
      price: 'From KES 4,000',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Droplets,
      title: 'Full Body Wash',
      description: 'Thorough wash and dry for regular maintenance',
      includes: [
        'Pre-wash foam treatment',
        'Hand wash with pH-neutral soap',
        'Wheel and tire cleaning',
        'Window cleaning (exterior)',
        'Microfiber drying',
        'Tire shine application',
      ],
      duration: '45-60 minutes',
      price: 'From KES 1,500',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Ceramic Coating',
      description: 'Long-lasting protection with hydrophobic properties',
      includes: [
        'Paint decontamination',
        'Paint correction and polishing',
        'Multi-layer ceramic coating application',
        'Curing process',
        '2-5 year protection',
        'Enhanced gloss and depth',
      ],
      duration: '1-2 days',
      price: 'From KES 25,000',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Wrench,
      title: 'Engine Cleaning',
      description: 'Safe and effective engine bay detailing',
      includes: [
        'Engine degreasing',
        'Pressure washing',
        'Protective dressing application',
        'Component detailing',
        'Plastic and rubber restoration',
        'Final inspection',
      ],
      duration: '1-2 hours',
      price: 'From KES 2,500',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Headlight Restoration',
      description: 'Restore clarity and brightness to oxidized headlights',
      includes: [
        'Wet sanding process',
        'Multi-stage polishing',
        'UV protection coating',
        'Improved visibility',
        'Enhanced appearance',
        'Long-lasting results',
      ],
      duration: '1 hour',
      price: 'From KES 2,000',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional car detailing services tailored to your vehicle's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">WHAT'S INCLUDED:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-blue-400 font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Ready to give your car the care it deserves?</p>
            <button
              onClick={() => onNavigate('booking')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg shadow-blue-500/50"
            >
              Book Your Service Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              We can create a personalized detailing package based on your specific needs and budget
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
