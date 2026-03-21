import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto overflow-x-hidden overscroll-none relative bg-[#4169E1] font-sans">
      {/* Welcome Box - Moved to Top */}
      <div className="absolute z-50 top-4 left-1/2 -translate-x-1/2 md:top-8 w-[80%] max-w-[280px] md:w-auto">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4169E1] via-purple-500 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl px-6 md:px-8 py-6 md:py-8 text-center transition-all duration-300 transform group-hover:scale-[1.02]">
            <h2 className="font-bold leading-tight">
              <span className="block text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">Welcome to</span>
              <span className="block text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#0A2540] via-[#4169E1] to-[#0A2540] font-extrabold">
                Fatamid International Ltd
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row min-h-screen w-full">
        {/* LEFT SIDE - SOFTWARE */}
        <div className="flex-1 bg-[#4169E1] relative flex flex-col items-center pt-28 md:justify-center md:pt-0 p-6 md:p-8 text-white md:min-h-screen">
          <div className="text-3xl md:text-5xl font-semibold mb-2 md:mb-16 tracking-tight">Software</div>
          
          {/* Software Clipart */}
          <div className="relative mb-4 md:mb-12 w-32 h-40 md:w-64 md:h-80">
            <Image
              src="/images/MuslimaDevs.png"
              alt="Software"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Learn More Button */}
          <a
            href="/software"
            className="px-8 py-2 md:py-3 bg-white text-[#4169E1] rounded-full font-bold text-base md:text-lg tracking-wide hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
          >
            Learn More
          </a>
        </div>

        {/* Logo - Moved to Center */}
        <div className="absolute z-40 left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2">
          <style>{`
            @keyframes zoomIn {
              0% { transform: scale(0) rotate(-15deg); opacity: 0; }
              80% { transform: scale(1.1); }
              100% { transform: scale(1) rotate(0deg); opacity: 1; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .logo-entrance {
              animation: zoomIn 10s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, float 5s ease-in-out infinite 3s;
            }
          `}</style>
          <div className="logo-entrance relative w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl border-4 border-white">
            <Image
              src="/images/Fatamid.jpeg"
              alt="Fatamid Logo"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE - AGRO-ALLIED */}
        <div className="flex-1 bg-[#FFFDD0] relative flex flex-col items-center justify-center p-6 md:p-8 text-[#0A2540] md:min-h-screen">
          <div className="text-3xl md:text-5xl font-semibold mb-6 md:mb-16 tracking-tight">Agro-allied</div>
          
          {/* Agro Clipart */}
          <div className="relative mb-6 md:mb-12 w-32 h-40 md:w-64 md:h-80">
            <Image
              src="/images/farmer.png"
              alt="Agro-allied"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Learn More Button */}
          <a
            href="/agro-allied"
            className="px-8 py-2 md:py-3 bg-white text-[#cccaa6] rounded-full font-bold text-base md:text-lg tracking-wide hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}