"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [

    {
        title: "Integrity First",
        desc: "We operate with honesty, transparency, and strong ethical standards. Trust is the foundation of every relationship we build.",
        image: "https://thumbs.dreamstime.com/b/integrity-hitting-full-scale-showing-very-high-level-overload-too-much-maximum-value-extremely-off-charts-428077077.jpg",
        alt: "Integrity meter hitting maximum scale",
  },

  {
    title: "Empowering Local Farmers",
    desc: "We believe the backbone of agriculture is the smallholder farmer. We connect them to the market needs, so as to turn local harvests into success stories, ensuring prosperity for rural communities.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop",
    alt: "Support for local farmers",
  },
  {
    title: "Strategic Partnerships",
    desc: "We build long-term relationships with farmers, suppliers, processor, and offtakers, creating value through collaboration and mutual growth.",
    image: "/images/partnership.jpg",
    alt: "International team collaborating and working together on a project",
  },
  {
    title: "Global Supply Integrity",
    desc: "Bridging continents with transparency and efficiency. We manage a robust supply chain that guarantees quality from the farm gate to the international consumer, built on a foundation of absolute trust and reliability.",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800&auto=format&fit=crop",
    alt: "Global cargo ship hauling agricultural products across the ocean",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-green-50">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-emerald-700"
        >
          Our Core Values
        </motion.h2>
      </div>

      {/* Values List */}
      <div className="max-w-5xl mx-auto space-y-16">
        {values.map((value, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-10 items-stretch"
            >
              {/* Text on Left (Even) / Right (Odd) */}
              <div className={`space-y-4 ${isEven ? "md:order-1" : "md:order-2"}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-emerald-600 flex items-center justify-center text-white text-2xl">
                    ✦
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
                    {value.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {value.desc}
                </p>
              </div>

              {/* Image */}
              <div className={`relative h-[250px] md:h-auto rounded-2xl overflow-hidden shadow-lg ${isEven ? "md:order-2" : "md:order-1"}`}>
                <Image
                  src={value.image}
                  alt={value.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
        );
      })}
      </div>
    </section>
  );
}