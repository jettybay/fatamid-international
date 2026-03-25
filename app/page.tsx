'use client';

import { Leaf, Tractor, Users, TrendingUp, Smartphone, Shield, ArrowUp, Wheat, Beef, Shirt, Droplet, Factory, Flower2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Navbar from "@/components/Navbar";

export default function Home() {
const [showButton, setShowButton] = useState(false);

  const images = [
    '/images/cashewLand.jpg',
    '/images/maizeLand.avif',
    '/images/sesameLand.jpg'
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

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
            className="flex h-full w-[300%] transition-transform duration-[6000ms] ease-linear"
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
        <div className="relative container mx-auto px-6 pt-24 pb-4 md:py-32 text-center">
          <div className="mb-6 flex flex-col items-center">
            
            <h1 className="text-5xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              <span className="text-white">FATAMID</span>
            </h1>
            <h1 className="text-5xl md:text-4xl font-bold leading-tight drop-shadow-lg">
              <span className="text-green-600">International Ltd</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Bridging the supply gap, empowering farmers, and connecting buyers across Nigeria&apos;s agricultural landscape.
          </p>
        </div>

        {/* Tabs Section inside Hero */}
        <section className="relative py-1 bg-primary-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-2 text-primary-900">
              Categories
            </h2>
            <p className="text-xl text-center mb-6 text-yellow-100">
              Discover good quality of produces directly from farm gates across Nigeria.
            </p>

            <Tabs defaultValue="fruits-vegetables" className="w-full max-w-6xl mx-auto">
              <TabsList className="flex h-auto justify-start gap-2 md:grid md:grid-cols-7 w-full mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 overflow-x-auto md:overflow-visible no-scrollbar z-10">
                <TabsTrigger 
                  value="fruits-vegetables" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Flower2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Fruits & Vegetables</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="grains-cereals" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Wheat className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Grains & Cereals</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="legumes-nuts" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Legumes & Nuts</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="root-tuber-crops" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Factory className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Root & Tuber Crops</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="livestock-products" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Beef className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Livestock Products</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="fish-seafood" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Droplet className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Fish & Seafood</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="others" 
                  className="shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-md transition-all duration-200 hover:bg-white/10 data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <Shirt className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-center leading-tight whitespace-nowrap">Others</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="fruits-vegetables" className="mt-6 text-red-600">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Fruits & Vegetables</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Fresh tomatoes, onions, peppers, mint leaf, bananas, oranges, mangoes, and seasonal vegetables.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Tomatoes.jpg" alt="Tomatoes" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm text-red-600">Tomatoes</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Onions.jpg" alt="Onions" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Onions</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Peppers.jpg" alt="Peppers" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Peppers</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Mint leaf.jpg" alt="Mint leaf" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Mint leaf</h4>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
}