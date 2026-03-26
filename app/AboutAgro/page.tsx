"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutAgroPage() {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);
  const [showLocalPartnershipModal, setShowLocalPartnershipModal] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-[#fafaf5] to-emerald-50"
    >
      <Navbar />

      {/* Hero Section - Agro Theme */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1a472a] via-green-700 to-emerald-800 text-[#FFFDD0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-2xl"
          >
            The Commodities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed"
          >
            Exporting Nigeria&apos;s finest agricultural commodities to global markets through sustainable practices.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-95 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl md:order-1"
          >
            <Image
              src="/images/farmer.jpg"
              alt="Sustainable Agriculture"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:pr-8 md:order-2"
          >
            <h2 className="text-4xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-[#1a472a] via-green-700 to-emerald-800 bg-clip-text text-transparent drop-shadow-lg">
              Commodity Expertise
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Fatamid International Ltd specializing in premium Nigerian agricultural exports with strict quality control and sustainable sourcing.
              <br /><br />
              We are agro-commodities aggregator in Nigeria, specializing in the sourcing, aggregation, 
              processing,and export of high-quality agricultural products.
              The company maintains strong partnerships with farmers across key producing regions, including Oyo, Kogi, Kano, Katsina, Niger, 
              and other states, to ensure reliable supply of premium commodities such as cashew nuts, soybeans, sheanuts, locust beans, 
              sesame seeds, hibiscus, maize, and other cash crops, all through the season.
              <br/><br/>
              Through direct engagement with farming communities, Fatamid provides quality agri-inputs, off-take arrangements, 
              and enhancement techniques and sustainable practices including specialized guidance for women in agric produce collection 
              and primary processing to support improved productivity and livelihoods while meeting international quality standards.
            </p>
            
             <div className="md:pr-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-[#1a472a] via-green-700 to-emerald-800 bg-clip-text text-transparent drop-shadow-lg">
              Our Mission
            </h2>
           <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            To become Nigeria's premier agro-commodities aggregator and trusted global partner, delivering premium, sustainably sourced agricultural 
            products while empowering local farmers and bridging them to international markets.
            This version keeps it concise (one strong sentence), professional, and aligned with Fatamid International Ltd's focus on aggregation, export, quality, 
            farmer support, and sustainability without copying unrelated entities or industries. It positions the company aspiringly yet realistically for the agro sector.
            If you'd like variations (e.g., shorter, more emphasis on sustainability/farmers/exports, or adding "vision" too), just let me know!
           </p> 
           </div>




            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start p-4 bg-green-50/50 rounded-2xl border-l-4 border-[#FFFDD0]">
                <span className="text-[#FFFDD0] text-2xl mr-4 mt-1 bg-green-600 px-3 py-2 rounded-xl">🤝</span>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Local Partnerships</h4>
                  <button
                    onClick={() => setShowLocalPartnershipModal(true)}
                    className="text-gray-700 hover:text-green-700 underline cursor-pointer text-left focus:outline-none"
                    aria-label="Open local partnership details"
                  >
                    Building Robust Local Supply Chains
                  </button>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50/50 rounded-2xl border-l-4 border-[#FFFDD0]">
                <span className="text-[#FFFDD0] text-2xl mr-4 mt-1 bg-green-600 px-3 py-2 rounded-xl">🌍</span>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Global Partnerships</h4>
                  <button
                    onClick={() => setShowPartnershipModal(true)}
                    className="text-gray-700 hover:text-green-700 underline cursor-pointer text-left focus:outline-none"
                    aria-label="Open global partnership details"
                  >
                    Connecting Nigeria to Global Markets
                  </button>
                </div>
              </div>
            </div>

            <Link
              href="/Contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#1a472a] via-green-700 to-emerald-800 hover:from-green-700 hover:to-emerald-900 text-[#FFFDD0] rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 border border-[#FFFDD0]/30 hover:border-white/50"
            >
              Partner With Us
              <span>🌍</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-t from-emerald-50 to-[#fafaf5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-[#1a472a] to-green-800 bg-clip-text text-transparent"
          >
            Our Agricultural Capabilities
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl group-hover:scale-110 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-2xl text-white">👨‍🌾</div>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-[#1a472a]">Farmer Networks</h4>
              <p className="text-lg text-gray-700 max-w-md mx-auto">Direct partnerships with smallholder farmers</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-[#FFFDD0]">
                <div className="w-full h-full flex items-center justify-center text-2xl text-gray-800 font-bold">QC</div>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-[#1a472a]">Quality Control</h4>
              <p className="text-lg text-gray-700 max-w-md mx-auto">Moisture, purity, aflatoxin, material testing</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-400 to-emerald-500 shadow-xl group-hover:scale-110 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-2xl text-white">🚚</div>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-[#1a472a]">Logistics</h4>
              <p className="text-lg text-gray-700 max-w-md mx-auto">Haulage, transportation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Modal */}
      {showPartnershipModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowPartnershipModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none focus:outline-none"
              aria-label="Close partnership details"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Export Excellence</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fatamid International Ltd serves as the premier bridge between Nigeria&apos;s rich agricultural potential and the 
              global appetite for quality. We are actively seeking strategic alliances with reputable international exporters 
              and off-takers in <strong className="text-green-800">Vietnam, India, Europe, and the Americas, e.t.c</strong>.
              <br /><br />
              By combining our robust local sourcing network and rigorous quality control with your global distribution 
              expertise, we deliver premium Nigerian commodities that meet international standards. Partner with us 
              to unlock unparalleled opportunities in the global agro-allied sector.
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowPartnershipModal(false)}
                className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Local Partnership Modal */}
      {showLocalPartnershipModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowLocalPartnershipModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none focus:outline-none"
              aria-label="Close local partnership details"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Local Roots</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fatamid International Ltd is committed to strengthening Nigeria&apos;s agricultural sector by fostering 
              deep-rooted alliances with <strong className="text-green-800">local farmers and aggregators</strong>.
              <br /><br />
              We provide essential support including high-quality inputs, sustainable farming techniques, and guaranteed 
              off-take arrangements. Our goal is to empower local communities, improve livelihoods, and ensure a 
              transparent and efficient supply chain from farm gate to market. Partner with us to grow the future 
              of Nigerian agriculture.
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowLocalPartnershipModal(false)}
                className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
