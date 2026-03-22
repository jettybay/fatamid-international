import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function AgroAlliedPage() {
  return (
    <div className="min-h-screen bg-[#fafaf5]">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-br from-[#1a472a] to-[#2d5a3f] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Agro-Allied Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Connecting premium agricultural produce with global markets through sustainable and reliable supply chains.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/farmer.png"
              alt="Agro Allied Services"
              fill
              className="object-cover object-top"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#1a472a] mb-6">
              Our Capabilities
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Export of high-quality commodities (Cashew, Sesame, Ginger)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Sustainable sourcing & farmer partnerships
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Strict quality control & standardization
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Efficient logistics & global supply chain management
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Agricultural value chain development
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/Contact"
                className="inline-block px-10 py-4 bg-[#1a472a] text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
