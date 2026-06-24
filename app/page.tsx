'use client';

import { Leaf, Wheat } from "lucide-react";
import { useState, useEffect, } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPage from "./Gallary/page";


export default function Home() {
const [showButton, setShowButton] = useState(false);

  const images = [
    '/images/cashewLand.png',
    '/images/maizeLand.avif',
    '/images/SoyaLand.jpg'
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
      const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-white"
    >
      <Navbar />

      <main className="flex-grow">
      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden"
        style={{
          minHeight: '780px'
        }}
      >
        {/* Sliding background with cashewLand.jpg, maizeLand.avif, sesameLand.jpg */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="flex h-full w-[300%] transition-transform duration-[1000ms] ease-in-out"
            style={{ transform: `translateX(calc(-${currentBgIndex} * 33.333%))` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 h-full"
                style={{
                  backgroundColor: '#1a5d1a',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-700/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 pt-24 pb-2 md:pt-32 md:pb-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex flex-col items-center"
          >
        <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tight filter drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)]">
          <span className="bg-gradient-to-b from-white via-emerald-200 to-emerald-500 bg-clip-text text-transparent">
            FATAMID
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
            International Ltd
          </span>
        </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-90 drop-shadow-md"
          >
            Bridging the supply gap, empowering farmers, and connecting buyers across Nigeria&apos;s agricultural landscape.
          </motion.p>
        </div>

        {/* Tabs Section inside Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pt-4 pb-20 bg-primary-50"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-2 text-primary-900">
              Categories
            </h2>
            <p className="text-xl text-center mb-6 text-yellow-100">
              Discover good quality of produces directly from farm gates across Nigeria.
            </p>

            <Tabs defaultValue="legumes-nuts" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-2 h-auto w-full gap-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 z-10">
                <TabsTrigger 
                  value="legumes-nuts" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Nuts & Leafs</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="grains-cereals" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Wheat className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Grains & Cereals</span>
                </TabsTrigger>
              </TabsList>

            <TabsContent value="grains-cereals" className="w-full mt-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Card 1 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/Maize.jpg" alt="Maize" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Maize</CardTitle>
                    <CardDescription className="text-sm text-gray-600">High-quality maize directly from Nigerian farms.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our maize is sourced from trusted farmers across Nigeria, ensuring freshness and quality for your needs.</p>
                    {/* <Button variant="outline" size="sm" className="w-full text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white">View Details</Button> */}
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/soyabean.jpg" alt="Soya grain" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Soya grain</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Premium soya grains for industrial and nutritional applications.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our soya grains are cultivated by experienced farmers, ensuring top-notch quality for oil production and high-protein feed.</p>
                    {/* <Button variant="outline" size="sm" className="w-full text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white">View Details</Button> */}
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/Sesame.png" alt="Sesame seed" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Sesame seed</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Clean and high-oil content sesame seeds for global markets.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our sesame seeds are grown with care, providing you with nutritious and high-quality produce for your export and local needs of
                      which is a white sesame, humidity controlled.
                    </p>
                    {/* <Button variant="outline" size="sm" className="w-full text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white">View Details</Button> */}
                  </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/CassiaTora.png" alt="Cassia Tora Seeds" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Cassia Tora Seeds</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Clean and well-dried Cassia Tora seeds for global industrial and medicinal use.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Also known as Sicklepod, our Cassia Tora seeds are harvested at peak maturity and processed to maintain high purity and quality standards.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="legumes-nuts" className="w-full mt-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Card 1 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/Cashews.jpeg" alt="Cashew nuts" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Cashew nuts</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Premium raw cashew nuts from Nigeria&apos;s top producing regions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our cashew nuts are carefully harvested and sorted to ensure high out-turn quality (KOR) for global export markets
                      of W320 grade.</p>
                    {/* <Button variant="outline" size="sm" className="w-full text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white">View Details</Button> */}
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/Hisbiscusleaves.jpeg" alt="Hibiscus leaves" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Hibiscus leaves</CardTitle>
                    <CardDescription className="text-sm text-gray-600">High-quality dried hibiscus flowers for teas and industrial use.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Sourced from the arid regions of Northern Nigeria, our hibiscus is carefully sun-dried to preserve its deep red color and tart flavor profile.</p>
                    {/* <Button variant="outline" size="sm" className="w-full text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white">View Details</Button> */}
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/Sheanut.jpg" alt="Shea nuts" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Shea nuts</CardTitle>
                    <CardDescription className="text-sm text-gray-600">High-grade organic shea nuts for premium butter production.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our shea nuts are wild-harvested and sun-dried to maintain high oil content and purity, perfect for the cosmetic and food industries.</p>
                    {/* <Button variant="outline" size="sm" className="w-full text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white">View Details</Button> */}
                  </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img src="/images/Stoneflowers.png" alt="Stoneflower" className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Stone flower</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Aromatic dried stoneflower (Kalpasi) collected from natural habitats.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our stoneflower is carefully hand-picked and dried, known for its unique earthy fragrance and used extensively in premium spice blends and traditional remedies.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
          </div>
        </motion.section>
      </section>

      <Link
        href="/components/ui/AEPGo"
        aria-label="AEPGo"
        className="fixed bottom-4 right-4 z-50 grid place-items-center h-14 w-14 rounded-full bg-black/90 text-gold-90 shadow-lg hover:bg-primary-800 transition-colors duration-300"
      >
        <span className="inline-block will-change-transform animate-[spin_2s_linear_infinite]">
          AEPGo
        </span>
      </Link>

      <GalleryPage />
      </main>
      <Footer />
    </motion.div>
  );
}