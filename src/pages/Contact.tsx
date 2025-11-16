import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Us</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or to schedule your appointment
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-gray-400 mb-2">Give us a call</p>
              <a
                href="tel:+254712345678"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                +254 712 345 678
              </a>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-gray-400 mb-2">Send us an email</p>
              <a
                href="mailto:info@jnjautodetailing.co.ke"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                info@jnjautodetailing.co.ke
              </a>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-gray-400 mb-2">Chat with us</p>
              <a
                href="https://wa.me/254712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                +254 712 345 678
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

              {isSuccess && (
                <div className="bg-green-500/10 border border-green-500 rounded-lg p-4 mb-6">
                  <p className="text-green-500">
                    Thank you for your message! We'll get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.subject ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            <div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-400">Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-400">Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35846418604!2d36.70730744999999!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JnJ AutoDetailing Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
