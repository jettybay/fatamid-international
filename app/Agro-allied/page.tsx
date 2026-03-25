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
// // import Footer from "@/components/Footer";
// import FloatingChatButton from "@/components/ui/floating-chat-button";

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
         

          <div className="mb-6 flex flex-col items-center">

            <img 
              src="/images/Fatamid.jpeg" 
              alt="Monarch FarmTech Logo" 
              className="w-22 h-22 md:w-22 md:h-22 rounded-full shadow-lg border-4 border-white/30 mb-4"
            />
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            
            
          </div>
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
                  {/* <div className="text-center mt-6">
                    <Link href="/categories/fruits-vegetables">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Fruits & Vegetables
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="grains-cereals" className="mt-6 text-red-600">
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
                  {/* <div className="text-center mt-6">
                    <Link href="/categories/grains-cereals">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Grains & Cereals
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="legumes-nuts" className="mt-6 text-red-600">
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
                  {/* <div className="text-center mt-6">
                    <Link href="/categories/legumes-nuts">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Legumes & Nuts
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="root-tuber-crops" className="mt-6 text-red-600">
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
                  {/* <div className="text-center mt-6">
                    <Link href="/categories/root-tuber-crops">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Root & Tuber Crops
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="livestock-products" className="mt-6 text-red-600">
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
                  {/* <div className="text-center mt-6">
                    <Link href="/categories/livestock-products">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Livestock Products
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="fish-seafood" className="mt-6 text-red-600">
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
                  {/* <div className="text-center mt-6">
                    <Link href="/categories/fish-seafood">
                      <Button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                        View More Fish & Seafood
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </TabsContent>
              

              <TabsContent value="others" className="mt-6 text-red-600">
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
