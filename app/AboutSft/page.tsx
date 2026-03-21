import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#1a472a] to-[#2d5a3f] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Fatamid International
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Building bridges between African excellence and global markets through
            software innovation and agricultural excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image on left */}
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Fatamid.jpeg"
              alt="Fatamid Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Text on right */}
          <div>
            <h2 className="text-4xl font-bold text-[#1a472a] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Fatamid International Ltd is a dynamic company bridging African agricultural 
              potential with global markets while delivering cutting-edge software solutions. 
              With expertise in commodity exports and modern technology, we create sustainable 
              value chains and digital transformation for businesses.
            </p>
            <ul className="space-y-4 text-lg text-gray-700 mb-10">
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1">✓</span>
                Founded with passion for agriculture and technology
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1">✓</span>
                Exporting premium Nigerian commodities worldwide
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1">✓</span>
                Building scalable software for modern businesses
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3 flex-shrink-0 mt-1">✓</span>
                Committed to sustainable development and partnerships
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/Contact"
                className="inline-block px-10 py-4 bg-[#1a472a] text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
