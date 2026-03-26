import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutAgroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafaf5] to-emerald-50">
      <Navbar />

      {/* Hero Section - Agro Theme */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1a472a] via-green-700 to-emerald-800 text-[#FFFDD0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
            About the Agro-Allied
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
            Exporting Nigeria&apos;s finest agricultural commodities to global markets through sustainable practices.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative h-95 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl md:order-1">
            <Image
              src="/images/farmer.jpg"
              alt="Sustainable Agriculture"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="md:pr-8 md:order-2">
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
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-green-50/50 rounded-2xl border-l-4 border-[#FFFDD0]">
                  <span className="text-[#FFFDD0] text-2xl mr-4 mt-1 bg-green-600 px-3 py-2 rounded-xl">🌰</span>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Cashew Nuts</h4>
                    <p className="text-gray-700">Premium raw cashew nuts, W320 grade</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50/50 rounded-2xl border-l-4 border-[#FFFDD0]">
                  <span className="text-[#FFFDD0] text-2xl mr-4 mt-1 bg-green-600 px-3 py-2 rounded-xl">🌾</span>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Sesame Seeds</h4>
                    <p className="text-gray-700">White sesame, humidity controlled</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-green-50/50 rounded-2xl border-l-4 border-[#FFFDD0]">
                  <span className="text-[#FFFDD0] text-2xl mr-4 mt-1 bg-green-600 px-3 py-2 rounded-xl">🌿</span>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Ginger</h4>
                    <p className="text-gray-700">Dried split ginger, high purity</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50/50 rounded-2xl border-l-4 border-[#FFFDD0]">
                  <span className="text-[#FFFDD0] text-2xl mr-4 mt-1 bg-green-600 px-3 py-2 rounded-xl">📦</span>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Global Exports</h4>
                    <p className="text-gray-700">Vietnam, India, Europe, Americas</p>
                  </div>
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
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-t from-emerald-50 to-[#fafaf5]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-[#1a472a] to-green-800 bg-clip-text text-transparent">
            Our Agricultural Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl group-hover:scale-110 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-2xl text-white">👨‍🌾</div>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-[#1a472a]">Farmer Networks</h4>
              <p className="text-lg text-gray-700 max-w-md mx-auto">Direct partnerships with smallholder farmers</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-[#FFFDD0]">
                <div className="w-full h-full flex items-center justify-center text-2xl text-gray-800 font-bold">QC</div>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-[#1a472a]">Quality Control</h4>
              <p className="text-lg text-gray-700 max-w-md mx-auto">Moisture, purity, aflatoxin, material testing</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-400 to-emerald-500 shadow-xl group-hover:scale-110 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-2xl text-white">🚚</div>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-gray-900 group-hover:text-[#1a472a]">Logistics</h4>
              <p className="text-lg text-gray-700 max-w-md mx-auto">Haulage, transportation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
