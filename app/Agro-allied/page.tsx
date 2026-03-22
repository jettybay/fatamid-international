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
// import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/ui/floating-chat-button";

export default function AgroAlliedPage() {
  const [showButton, setShowButton] = useState(false);

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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden"
        style={{
          backgroundColor: '#1a5d1a',
          backgroundImage: 'url("/images/Farmer4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '780px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-700/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 pt-24 pb-4 md:py-32 text-center">
          <Badge className="mb-6 bg-accent text-green-900 italic">
            Empowering Nigerian Farmers
          </Badge>

          <div className="mb-6 flex flex-col items-center">

            <img 
              src="/images/Logo.jpg" 
              alt="Monarch FarmTech Logo" 
              className="w-22 h-22 md:w-22 md:h-22 rounded-full shadow-lg border-4 border-white/30 mb-4"
            />
            <h1 className="text-5xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              <span className="text-white">The Monarch</span>
            </h1>

            <h1 className="text-5xl md:text-4xl font-bold leading-tight drop-shadow-lg">
              <span className="text-green-600">FarmTech</span>
            </h1>
            
          </div>

          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 drop-shadow-md">
            Connect directly with buyers, reduce middlemen, and grow your income with Nigeria&apos;s leading agritech marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            
            <Link href="/auth/signup">
              <Button size="lg" className="bg-black border-1 border-white text-white hover:bg-transparent hover:text-white-900 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
               Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Tabs Section inside Hero */}
        <section className="relative py-1 bg-primary-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-2 text-primary-900">
              Browse by Category
            </h2>
            <p className="text-xl text-center mb-6">
              Discover fresh produce and products directly from Nigerian farmers
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

              <TabsContent value="fruits-vegetables" className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Fruits & Vegetables</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Fresh tomatoes, onions, peppers, mint leaf, bananas, oranges, mangoes, and seasonal vegetables.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Tomatoes.jpg" alt="Tomatoes" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Tomatoes</h4>
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
                  <div className="text-center mt-6">
                    <Link href="/categories/fruits-vegetables">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Fruits & Vegetables
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="grains-cereals" className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Grains & Cereals</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Rice, maize, wheat, millet, sorghum, barley, oats, and other cereal crops.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/rice.jpg" alt="Rice" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Rice</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Maize.jpg" alt="Maize" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Maize</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/wheat.jpg" alt="Wheat" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Wheat</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/millets.png" alt="Millet" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Millet</h4>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center mt-6">
                    <Link href="/categories/grains-cereals">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Grains & Cereals
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="legumes-nuts" className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Legumes & Nuts</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Beans, lentils, almonds, groundnuts, cashew nuts, almonds, and protein-rich legumes.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Beans.jpg" alt="Beans" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Beans</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Groundnuts.png" alt="Groundnuts" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Groundnuts</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Cashews.webp" alt="Cashew Nuts" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Cashew Nuts</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/almonds.jpg" alt="almonds" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Almonds</h4>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center mt-6">
                    <Link href="/categories/legumes-nuts">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Legumes & Nuts
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="root-tuber-crops" className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Root & Tuber Crops</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Cassava, yams, sweet potatoes, potatoes, carrots, beets, and underground crops.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/potatoes.jpg" alt="Potatoes" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Potatoes</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/cassava.png" alt="Cassava" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Cassava</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/Yam.jpg" alt="Yams" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Yams</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/carrots.jpg" alt="carrots" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Carrots</h4>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center mt-6">
                    <Link href="/categories/root-tuber-crops">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Root & Tuber Crops
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="livestock-products" className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Livestock Products</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Eggs, chicken, beef, goat meat, and animal by-products.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/beef.jpg" alt="Beef" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Beef</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/eggs.avif" alt="Eggs" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Eggs</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/chicken.png" alt="Local Chicken" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Local Chicken</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/goat-meat.jpg" alt="Goat Meat" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Goat Meat</h4>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center mt-6">
                    <Link href="/categories/livestock-products">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Livestock Products
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="fish-seafood" className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Fish & Seafood</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Fresh fish, dried fish, shrimp, crabs, shellfish, and other aquatic products.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/fish.jpg" alt="Fresh Fish" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Fresh Fish</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/dried-fish.jpg" alt="Dried Fish" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Dried Fish</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/shrimps.jpeg" alt="Shrimp" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Shrimp</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/crabs.jpg" alt="Crabs" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Crabs</h4>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center mt-6">
                    <Link href="/categories/fish-seafood">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Fish & Seafood
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="others" className="mt-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Others</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Spices, herbs, honey, mushrooms, flowers, medicinal plants, and specialty agricultural products.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/spices.jpg" alt="Spices" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Spices</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/honey.webp" alt="Honey" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Honey</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/herbs.jpeg" alt="Herbs" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Herbs</h4>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img src="/images/mushrooms.jpg" alt="Mushrooms" className="w-full h-32 object-cover" />
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">Mushrooms</h4>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="text-center mt-6">
                    <Link href="/categories/others">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Others
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-900">Powerful Features for Real Impact</h2>
          <p className="text-xl text-center text-gray-700 mb-12">Built for Nigerian farmers and buyers</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary-200 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <Tractor className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Direct Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  List your produce and connect instantly with buyers across Nigeria.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-primary-200 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Real-Time Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get live market prices and weather alerts to make smart decisions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-primary-200 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Escrow protection and instant payouts via Paystack.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Sign Up Free</h3>
              <p className="text-gray-600">Create your farmer or buyer profile in minutes.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. List or Browse</h3>
              <p className="text-gray-600">Post produce or search for fresh crops.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Connect & Chat</h3>
              <p className="text-gray-600">Negotiate directly with secure in-app messaging.</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">4. Sell & Grow</h3>
              <p className="text-gray-600">Complete sales and boost your income.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">What Farmers Say</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="pt-10 text-center">
                    <p className="text-lg italic mb-6">"Monarch FarmTech doubled my income by connecting me directly to Lagos buyers!"</p>
                    <Avatar className="mx-auto mb-4">
                      <AvatarImage src="/images/farmer1.jpg" />
                      <AvatarFallback>AF</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Aminu Farah, Rice Farmer - Kaduna</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="pt-10 text-center">
                    <p className="text-lg italic mb-6">"The real-time price alerts helped me sell my maize at the best possible time. My profits have increased by 40%."</p>
                    <Avatar className="mx-auto mb-4">
                      <AvatarImage src="/images/farmer2.jpg" />
                      <AvatarFallback>CO</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Chidinma Okoro, Maize Farmer - Oyo</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="pt-10 text-center">
                    <p className="text-lg italic mb-6">"Finding reliable buyers used to be my biggest challenge. Now, I have a steady stream of orders through the app."</p>
                    <Avatar className="mx-auto mb-4">
                      <AvatarImage src="/images/farmer3.jpg" />
                      <AvatarFallback>BU</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold">Bello Usman, Cassava Farmer - Benue</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-900">Need Help?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-primary-200 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get instant help from our support team</CardDescription>
                <Button className="mt-4 w-full bg-primary-600 hover:bg-primary-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-primary-200 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Send us an email and we'll respond within 24 hours</CardDescription>
                <Button variant="outline" className="mt-4 w-full border-primary-600 text-primary-600 hover:bg-primary-50">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-primary-200 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Call us for immediate assistance</CardDescription>
                <Button variant="outline" className="mt-4 w-full border-primary-600 text-primary-600 hover:bg-primary-50">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">Need immediate help? We're here for you!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">hello@monarchfarmtech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">+234 812 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    

     
     {/* <Footer /> */}
      <FloatingChatButton />
    </>
  );
}

