import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-28 pb-16 bg-gradient-to-br from-[#0A2540] to-[#1e3a5f] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Solutions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Innovative, reliable, and scalable software products and services
            tailored for modern businesses.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/MuslimaDevs.png"
              alt="Software Development"
              fill
              className="object-contain bg-white" 
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
              What We Offer
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Custom web & mobile application development
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Enterprise software solutions & system integration
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Cloud-native architecture & DevOps services
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                AI/ML powered tools & automation
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✓</span>
                Maintenance, support & long-term partnership
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/Contact"
                className="inline-block px-10 py-4 bg-[#0A2540] text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
