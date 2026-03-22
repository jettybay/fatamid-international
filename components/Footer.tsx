"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white/90 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                <Image
                  src="/images/Fatamid.jpeg"
                  alt="Fatamid International"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Fatamid International</h3>
                <p className="text-sm opacity-80">Agro & Software Excellence</p>
              </div>
            </Link>
            <p className="text-sm opacity-75 leading-relaxed max-w-sm">
              Connecting Nigerian farmers to global markets through innovative agritech and software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white/70 transition text-sm block">Home</Link></li>
              <li><Link href="/Software" className="hover:text-white/70 transition text-sm block">Software</Link></li>
              <li><Link href="/Agro-allied" className="hover:text-white/70 transition text-sm block">Agro-allied</Link></li>
              <li><Link href="/Contact" className="hover:text-white/70 transition text-sm block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-emerald-300 text-sm">⚡ Agro Commodities</span></li>
              <li><span className="text-emerald-300 text-sm">🤖 Software Development</span></li>
              <li><span className="text-emerald-300 text-sm">🧠 AI & Robotics</span></li>
              <li><span className="text-emerald-300 text-sm">☁️ Cloud Solutions</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Info</h4>
            <p className="text-sm mb-4 opacity-90">No 1, Omorinde Street, Parafa<br/>Ikorodu, Lagos State</p>
            <p className="text-sm mb-4 opacity-90">+234 803 551 0234</p>
            <p className="text-sm mb-6 opacity-90">fatamidint@gmail.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-75 text-center md:text-left">
            © 2024 Fatamid International Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white/70 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

