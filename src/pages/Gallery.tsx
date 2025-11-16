import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Exterior Detailing',
      category: 'Before & After',
    },
    {
      url: 'https://images.pexels.com/photos/6873076/pexels-photo-6873076.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Interior Cleaning',
      category: 'Interior',
    },
    {
      url: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Premium Wash',
      category: 'Exterior',
    },
    {
      url: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Paint Correction',
      category: 'Before & After',
    },
    {
      url: 'https://images.pexels.com/photos/6872164/pexels-photo-6872164.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Wheel Detailing',
      category: 'Exterior',
    },
    {
      url: 'https://images.pexels.com/photos/6873180/pexels-photo-6873180.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Interior Detail',
      category: 'Interior',
    },
    {
      url: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Ceramic Coating',
      category: 'Before & After',
    },
    {
      url: 'https://images.pexels.com/photos/13065642/pexels-photo-13065642.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Full Detail',
      category: 'Exterior',
    },
    {
      url: 'https://images.pexels.com/photos/6872185/pexels-photo-6872185.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Engine Bay',
      category: 'Engine',
    },
    {
      url: 'https://images.pexels.com/photos/6872351/pexels-photo-6872351.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Polish & Wax',
      category: 'Exterior',
    },
    {
      url: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Headlight Restoration',
      category: 'Before & After',
    },
    {
      url: 'https://images.pexels.com/photos/6872077/pexels-photo-6872077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Leather Treatment',
      category: 'Interior',
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Gallery</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the incredible transformations we've delivered for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 rounded-full p-3 transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 rounded-full p-3 transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-6xl max-h-[90vh] mx-4">
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-full mb-2">
                {galleryImages[selectedImage].category}
              </span>
              <h3 className="text-white text-xl font-semibold">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
