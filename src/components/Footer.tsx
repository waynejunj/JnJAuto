import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">JnJ</span>
              </div>
              <div className="ml-3">
                <h3 className="text-white font-bold">JnJ AutoDetailing</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Premium car detailing services in Nairobi. We bring your vehicle back to showroom condition.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'gallery'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Interior Detailing</li>
              <li>Exterior Detailing</li>
              <li>Ceramic Coating</li>
              <li>Engine Cleaning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                +254 712 345 678
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                info@jnjautodetailing.co.ke
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                Nairobi, Kenya
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 JnJ AutoDetailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
