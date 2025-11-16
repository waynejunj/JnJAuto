import { useState, FormEvent } from 'react';
import { Calendar, Clock, Car, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    carModel: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'Interior Detailing',
    'Exterior Detailing',
    'Full Body Wash',
    'Ceramic Coating',
    'Engine Cleaning',
    'Headlight Restoration',
    'Bronze Package',
    'Silver Package',
    'Gold Package',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.carModel.trim()) {
      newErrors.carModel = 'Car model is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Preferred time is required';
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

    try {
      const { error } = await supabase.from('bookings').insert([
        {
          full_name: formData.fullName,
          phone: formData.phone,
          car_model: formData.carModel,
          service: formData.service,
          preferred_date: formData.date,
          preferred_time: formData.time,
          notes: formData.notes,
        },
      ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        carModel: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setErrors({ submit: 'Failed to submit booking. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-950 pt-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for choosing JnJ AutoDetailing. We've received your booking request and
              will contact you shortly to confirm your appointment.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Book Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Appointment</span>
            </h1>
            <p className="text-xl text-gray-400">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.fullName ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="+254 712 345 678"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <Car className="w-4 h-4 inline mr-2" />
                  Car Model *
                </label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                    errors.carModel ? 'border-red-500' : 'border-gray-700'
                  } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="e.g., Toyota Camry 2020"
                />
                {errors.carModel && (
                  <p className="text-red-500 text-sm mt-1">{errors.carModel}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Service Selected *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                    errors.service ? 'border-red-500' : 'border-gray-700'
                  } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.date ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                      errors.time ? 'border-red-500' : 'border-gray-700'
                    } text-white focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Any special requests or information we should know..."
                />
              </div>

              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500 rounded-lg p-4">
                  <p className="text-red-500 text-sm">{errors.submit}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
