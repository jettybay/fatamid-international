"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Software", href: "/Software" },
  { label: "Agro-allied", href: "/Agro-allied" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isSoftwarePath = pathname.startsWith("/Software") || pathname === "/AboutSft";
  const primaryColor = isSoftwarePath ? "#4169E1" : "#1a472a";
  const textColor = isSoftwarePath ? "text-blue-600" : "text-[#FFFDD0] hover:text-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 shadow-sm group-hover:shadow-md transition-all duration-300 ${isSoftwarePath ? 'border-blue-500 bg-blue-50' : 'border-green-500 bg-green-50'}`}>
            <Image
              src="/images/Fatamid.jpeg"
              alt="Fatamid International Ltd"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40px, 48px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative font-medium text-sm transition-all duration-200 font-semibold ${
                      isActive 
                        ? `text-[${primaryColor}] shadow-md px-2 py-1 rounded-lg font-bold ${isSoftwarePath ? 'bg-blue-50/80 backdrop-blur-sm' : 'bg-green-700/20 backdrop-blur-sm'}` 
                        : `text-gray-700 hover:text-[${primaryColor}]`
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[${primaryColor}]`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-3 rounded-xl transition-all ${isSoftwarePath ? 'text-blue-600 hover:bg-blue-50 hover:shadow-md border border-blue-100 hover:border-blue-200' : 'text-green-700 hover:bg-green-50 hover:shadow-md border border-green-100 hover:border-green-200'}`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className={`flex flex-col p-6 space-y-2 backdrop-blur-sm ${isSoftwarePath ? 'bg-blue-50/80 border-t-2 border-blue-200' : 'bg-green-50/80 border-t-2 border-green-200'}`}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 px-6 rounded-2xl text-lg font-semibold transition-all shadow-sm ${
                      isActive
                        ? isSoftwarePath 
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl" 
                          : "bg-gradient-to-r from-green-500 to-green-600 text-[#FFFDD0] shadow-lg shadow-green-200 hover:shadow-xl"
                        : `${isSoftwarePath ? 'text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:shadow-md' : 'text-green-700 hover:bg-green-100 hover:text-green-800 hover:shadow-md'}`
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}