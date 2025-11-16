import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Pricing', page: 'pricing' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">JnJ</span>
            </div>
            <div className="ml-3">
              <h1 className="text-white font-bold text-xl">JnJ AutoDetailing</h1>
              <p className="text-blue-400 text-xs">Premium Car Care</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
