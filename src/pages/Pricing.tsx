import { Check } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const packages = [
    {
      name: 'Bronze',
      price: '5,500',
      description: 'Essential care for your vehicle',
      features: [
        'Full Body Wash',
        'Wheel & Tire Cleaning',
        'Window Cleaning (Exterior)',
        'Tire Shine',
        'Vacuum Interior',
        'Dashboard Wipe',
      ],
      gradient: 'from-orange-400 to-orange-600',
      popular: false,
    },
    {
      name: 'Silver',
      price: '9,500',
      description: 'Complete detailing package',
      features: [
        'Everything in Bronze',
        'Interior Deep Clean',
        'Leather Conditioning',
        'Paint Wax Application',
        'Chrome Polishing',
        'Air Vent Cleaning',
        'Door Jamb Cleaning',
      ],
      gradient: 'from-gray-300 to-gray-500',
      popular: true,
    },
    {
      name: 'Gold',
      price: '15,000',
      description: 'Premium protection and care',
      features: [
        'Everything in Silver',
        'Clay Bar Treatment',
        'Paint Polish',
        'Engine Bay Cleaning',
        'Headlight Restoration',
        'Scratch Removal',
        'Premium Sealant',
        '3-Month Protection',
      ],
      gradient: 'from-yellow-400 to-yellow-600',
      popular: false,
    },
  ];

  const individualServices = [
    { service: 'Full Body Wash', price: '1,500' },
    { service: 'Interior Detailing', price: '3,500' },
    { service: 'Exterior Detailing', price: '4,000' },
    { service: 'Engine Cleaning', price: '2,500' },
    { service: 'Headlight Restoration', price: '2,000' },
    { service: 'Ceramic Coating (Small Car)', price: '25,000' },
    { service: 'Ceramic Coating (Medium Car)', price: '30,000' },
    { service: 'Ceramic Coating (Large Car/SUV)', price: '35,000' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparent pricing for premium car detailing services
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Detailing Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                    pkg.popular ? 'border-blue-500 scale-105' : 'border-gray-800'
                  } hover:border-blue-500 transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <span className="text-2xl font-bold text-white">{pkg.name[0]}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">KES {pkg.price}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate('booking')}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Individual Services
            </h2>
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-6 text-gray-400 font-semibold">Service</th>
                    <th className="text-right py-4 px-6 text-gray-400 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {individualServices.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-300">{item.service}</td>
                      <td className="py-4 px-6 text-right text-blue-400 font-semibold">
                        KES {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book your appointment today and experience the JnJ difference
            </p>
            <button
              onClick={() => onNavigate('booking')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
