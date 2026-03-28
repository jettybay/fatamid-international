'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
}

const galleryImages: GalleryItem[] = [
  { id: 1, src: '/images/Cashew1.jpeg', title: 'Premium Cashew Nuts', description: 'High-quality, sun-dried cashew nuts sourced from local farms, ready for processing and export.' },
  { id: 2, src: '/images/Cashew2.jpeg', title: 'Fresh Cashew Harvest', description: 'Freshly harvested cashew nuts showing the natural texture and quality of our produce.' },
  { id: 3, src: '/images/Hisbiscusleaves.jpeg', title: 'Dried Hibiscus Leaves', description: 'Deep red, flavorful dried hibiscus leaves, perfect for teas, extracts, and culinary use.' },
  { id: 4, src: '/images/Sesame.jpg', title: 'Natural Sesame Seeds', description: 'Clean, high-oil content sesame seeds meticulously processed for international standards.' },
  { id: 5, src: '/images/SesameInSack.jpeg', title: 'Packaged Sesame', description: 'Sesame seeds professionally cleaned and packed in high-grade sacks for secure transit.' },
  { id: 6, src: '/images/SoyaInSack.jpeg', title: 'Bulk Soya Beans', description: 'Nutrient-rich soya beans stored in bulk sacks, maintained in temperature-controlled environments.' },
  { id: 7, src: '/images/StuckedSesame.jpeg', title: 'Stacked Sesame Inventory', description: 'Our organized inventory system ensures quick turnaround and logistical efficiency.' },
  { id: 8, src: '/images/loadedTruck.jpeg', title: 'Logistics & Distribution', description: 'Fully loaded trucks prepared for nationwide distribution and port delivery for global export.' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.9,
    rotate: -2 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  },
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Gallery</h1>
          <p className="mt-4 text-xl text-gray-600">Explore our high-quality agricultural produce and logistics operations.</p>
        </header>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              className="relative cursor-pointer group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  priority={item.id === 1}
                />
               
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-3/5 h-[300px] md:h-[500px]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:w-2/5 flex flex-col justify-center bg-white">
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Product Quality Guaranteed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}