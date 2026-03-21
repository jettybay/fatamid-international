import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutSftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section - Software Theme */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#4169E1] via-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            About Our Software Division
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Pioneering digital transformation through cutting-edge software solutions, robotics, and AI innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/MuslimaDevs.png"
              alt="Software & Robotics Innovation"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Software Excellence
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our software division delivers enterprise-grade solutions powered by modern technologies and innovative thinking.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#4169E1] text-2xl mr-4 mt-1">⚡</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Custom Development</h4>
                    <p className="text-gray-600">Web, mobile, desktop applications tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4169E1] text-2xl mr-4 mt-1">🤖</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Robotics & Automation</h4>
                    <p className="text-gray-600">AI-powered robots and process automation systems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#4169E1] text-2xl mr-4 mt-1">🧠</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">AI/ML Solutions</h4>
                    <p className="text-gray-600">Machine learning models and intelligent systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4169E1] text-2xl mr-4 mt-1">☁️</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Cloud Architecture</h4>
                    <p className="text-gray-600">Scalable cloud-native applications</p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/Contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4169E1] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Technology We Master
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl hover:shadow-xl transition-all bg-white">
              <div className="text-3xl mb-3 text-[#4169E1]">⚛️</div>
              <h4 className="font-bold text-lg mb-2">React/Next.js</h4>
              <p className="text-sm text-gray-600">Modern web apps</p>
            </div>
            <div className="p-6 rounded-2xl hover:shadow-xl transition-all bg-white">
              <div className="text-3xl mb-3 text-[#4169E1]">🐍</div>
              <h4 className="font-bold text-lg mb-2">Python/Node</h4>
              <p className="text-sm text-gray-600">Backend & AI</p>
            </div>
            <div className="p-6 rounded-2xl hover:shadow-xl transition-all bg-white">
              <div className="text-3xl mb-3 text-[#4169E1]">🤖</div>
              <h4 className="font-bold text-lg mb-2">ROS/Python</h4>
              <p className="text-sm text-gray-600">Robotics</p>
            </div>
            <div className="p-6 rounded-2xl hover:shadow-xl transition-all bg-white">
              <div className="text-3xl mb-3 text-[#4169E1]">☁️</div>
              <h4 className="font-bold text-lg mb-2">AWS/Azure</h4>
              <p className="text-sm text-gray-600">Cloud infra</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
