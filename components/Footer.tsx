"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white/90 py-1 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col items-center text-center gap-0">
        {/* Logo */}
        <Link href="/" className="group block overflow-hidden w-32 relative h-8">
          <motion.div
            initial={{ x: 128 }}
            animate={{ x: -40 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="absolute inset-y-0 flex items-center"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-sm">
              <Image
                src="/images/Fatamid.jpeg"
                alt="Fatamid International"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </Link>
        <p className="text-[10px] md:text-xs opacity-70">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
