import { Award, Users, Target, CheckCircle } from 'lucide-react';

export default function About() {
  const reasons = [
    'Over 5 years of professional experience',
    'Trained and certified detailing specialists',
    'Premium quality products and equipment',
    'Attention to every detail',
    'Flexible scheduling and mobile services',
    'Satisfaction guaranteed',
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '2000+', label: 'Cars Detailed' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '500+', label: 'Happy Clients' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> JnJ AutoDetailing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your trusted partner for premium car care in Nairobi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Founded in Nairobi, JnJ AutoDetailing was born from a passion for automotive excellence
                  and a commitment to delivering unparalleled car care services. What started as a small
                  operation has grown into one of the most trusted names in premium car detailing across Kenya.
                </p>
                <p>
                  We understand that your vehicle is more than just transportation—it's an investment, a status
                  symbol, and often a prized possession. That's why we treat every car that comes through our
                  doors with the utmost care and attention to detail.
                </p>
                <p>
                  Our team of certified professionals uses only the highest quality products and cutting-edge
                  techniques to restore and protect your vehicle's appearance. From everyday maintenance to
                  premium ceramic coatings, we offer comprehensive solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6873076/pexels-photo-6873076.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Detailing Process"
                className="rounded-xl w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car Care"
                className="rounded-xl w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To provide exceptional car detailing services that exceed expectations and deliver
                lasting value to our clients.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-400">
                Excellence, integrity, and customer satisfaction drive everything we do.
                Quality is never compromised.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
              <p className="text-gray-400">
                Certified professionals with years of experience and a genuine passion for
                automotive care and detailing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose JnJ AutoDetailing?
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
