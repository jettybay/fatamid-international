
"use client";

import React, { useMemo, useState } from "react";

import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";



const colorVars = {
  "--aepgo-green": "#2E7D32",
  "--aepgo-light-green": "#66BB6A",
  "--aepgo-blue": "#1565C0",
  "--aepgo-dark-blue": "#0D47A1",
  "--aepgo-orange": "#FB8C00",
  "--aepgo-purple": "#7E57C2",
  "--aepgo-red": "#E53935",
} as React.CSSProperties;



function ZoomImageModal({
  open,
  onOpenChange,
  src,
  alt,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      aria-hidden={!open}
      className="fixed inset-0 z-[100]"
      initial={false}
      animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      transition={{ duration: 0.18 }}
    >
      <button
        type="button"
        aria-label="Close modal"
        onClick={() => onOpenChange(false)}
        className="absolute inset-0 bg-black/60"
      />

      <motion.div
        className="relative mx-auto flex h-full w-full items-center justify-center p-4"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: open ? 1 : 0.96, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[20px] bg-white shadow-2xl">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition hover:bg-white"
          >
            <X size={18} />
          </button>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AepgosingPage() {
  const [zoomOpen, setZoomOpen] = useState(false);





  const metrics = useMemo(
    () => [
      { label: "Yield Increase", value: "30%" },
      { label: "Income Increase", value: "40%" },
      { label: "Cost Reduction", value: "25%" },
      { label: "Women Participation", value: "65%" },
      { label: "Farmers Reached", value: "10,000+" },
      { label: "CO₂ Reduced", value: "2,500 t" },
    ],
    []
  );



  React.useEffect(() => {
    if (!zoomOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomOpen]);

  return (
    <div
      style={colorVars}
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mt-12 mb-4 flex flex-wrap items-center justify-center gap-3">
        <img
          src="/aepgo logo.png"
          className="h-full w-50 object-cover transition-transform duration-300 hover:scale-[1.02]"
          alt="AEPGo"
          loading="eager"
        />

        <div className="text-center text-xs text-black/100 bg-white/80 border border-gray-100 rounded-full px-4 py-2 shadow-sm relative">
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_transparent_60%)]" />
          <span className="relative font-bold">Powered by Fatamid International Ltd</span>
        </div>
      </div>
        
        {/* Hero */}
        <motion.section
          className="relative h-[500px] rounded-[28px] overflow-hidden bg-gradient-to-br from-purple-950 via-purple-700 to-fuchsia-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,180,255,0.35),_transparent_38%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_40%)]" />
          <div className="absolute left-[-18%] top-[-10%] h-72 w-72 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white px-4">

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">  
              AgroEnergy Pay-as-you-Go (AEPGo)
            </h1>
              
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gold-90 mt-5">
                Theory of Change
              </h2>

              <p className="mt-4 max-w-4xl text-xl sm:text-2xl text-white/95">
                AEPGo, an AI-enabled AgriFinTech platform that integrates precision agriculture, 
                embedded finance, renewable energy, mechanization, and market access for underserved smallholder
                 farmers across Africa.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/15 border border-white/20 px-5 py-3 backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-aepgo-light-green shadow-lg" />
                <span className="text-sm sm:text-base text-white/95 font-semibold">
                  Executive-grade, investor-ready impact narrative
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Click to view the Image Illustrations */}
        <div className="mt-10 text-center">
          <div className="mx-auto w-full max-w-4xl px-4">
            <button
              type="button"
              onClick={() => setZoomOpen(true)}
              aria-label="Open AEPGo illustration"
              className="block w-full"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-gray-100 bg-white/80 shadow-sm transition hover:-translate-y-1">
                <img
                  src="/aepgo.png"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  alt="AEPGo"
                  loading="eager"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Click to check the UI */}
        <div className="mt-10 text-center px-4">
         
            <a
              href="https://aepgo-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-90 font-bold hover ml-2 bottom-4 left-4 rounded-full bg-black/90 px-4 py-2 text-sm font-semibold shadow-sm"
            >Click me to view the demo.
            </a>
           
        </div>

        {/* Zoom modal */}
        <ZoomImageModal
          open={zoomOpen}
          onOpenChange={setZoomOpen}
          src="/aepgo.png"
          alt="AEPGo"
        />



        {/* Assumptions + KPI dashboard */}
        <div className="mt-10 grid lg:grid-cols-3 gap-8 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900">Assumptions</h2>
              <p className="mt-2 text-sm text-gray-600">
                Green success indicators supporting implementation.
              </p>

              <div className="mt-6 rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <div className="text-sm font-semibold text-gray-900">
                    Strong farmer demand
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <div className="text-sm font-semibold text-gray-900">
                    Affordable access
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <div className="text-sm font-semibold text-gray-900">
                    Market demand remains strong
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <div className="text-sm font-semibold text-gray-900">
                    Buyers remain engaged
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900">KPI Dashboard</h2>
            <p className="mt-2 text-sm text-gray-600">
              Target indicators for grant reporting, investor updates, and public impact.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {metrics.map((m) => (
                <Card
                  key={m.label}
                  className="rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-sm"
                >
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {m.label}
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-gray-900">
                    {m.value}
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Bottom mobile order hint */}
       
      </div>
      <Footer />
    </div>
  );
}
