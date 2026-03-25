'use client';

import { Leaf, Tractor, Users, TrendingUp, Smartphone, Shield, ArrowUp, Wheat } from "lucide-react";
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
    }, 3500);
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

            <Tabs defaultValue="grains-cereals" className="w-full max-w-6xl mx-auto">
              <TabsList className="flex h-auto justify-start gap-2 md:grid md:grid-cols-2 w-full mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 overflow-x-auto md:overflow-visible no-scrollbar z-10">
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
              </TabsList>
            </Tabs>
          </div>
          <section className="relative">
            <TabsContent value="grains-cereals" className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Maize</CardTitle>
                    <CardDescription className="text-sm text-gray-600">High-quality maize directly from Nigerian farms.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our maize is sourced from trusted farmers across Nigeria, ensuring freshness and quality for your needs.</p>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Sorghum</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Premium sorghum for diverse applications.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our sorghum is cultivated by experienced farmers, ensuring top-notch quality for your culinary and industrial needs.</p>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-900">Millet</CardTitle>
                    <CardDescription className="text-sm text-gray-600">Nutritious millet for health-conscious consumers.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">Our millet is grown with care by dedicated farmers, providing you with a nutritious and versatile grain for your meals.</p>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              </div>
          </section>
        </section>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
}