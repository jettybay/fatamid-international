"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isHome = pathname === '/'
  const isSoftwareFlow = pathname.startsWith('/Software') || pathname === '/AboutSft'
  const isAgroFlow = pathname.startsWith('/Agro-allied') || pathname === '/AboutAgro'

  const isSoftwarePath = isSoftwareFlow
  const primaryColor = isSoftwarePath ? '#4169E1' : '#1a472a'
  const textColor = isSoftwarePath ? 'text-blue-600' : 'text-[#FFFDD0] hover:text-white'

  const aboutHref = isSoftwareFlow ? '/AboutSft' : '/AboutAgro'

  const navItems = isHome || (!isSoftwareFlow && !isAgroFlow)
    ? [
        { label: 'Home', href: '/' },
        { label: 'Software', href: '/Software' },
        { label: 'Agro-allied', href: '/Agro-allied' },
        { label: 'About', href: aboutHref },
        { label: 'Contact', href: '/Contact' },
      ]
    : isSoftwareFlow
      ? [
          { label: 'Home', href: '/' },
          { label: 'Software', href: '/Software' },
          { label: 'About', href: '/AboutSft' },
          { label: 'Contact', href: '/Contact' },
        ]
      : [
          { label: 'Home', href: '/' },
          { label: 'Agro-allied', href: '/Agro-allied' },
          { label: 'About', href: '/AboutAgro' },
          { label: 'Contact', href: '/Contact' },
        ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 shadow-sm group-hover:shadow-md transition-all duration-300 ${
              isSoftwarePath ? 'border-blue-500 bg-blue-50' : 'border-green-500 bg-green-50'
            }`}>
              <Image
                src="/images/Fatamid.jpeg"
                alt="Fatamid International Ltd"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            {/* Optional: add text logo if you want */}
            {/* <span className="font-bold text-lg hidden sm:block">Fatamid</span> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium text-sm transition-all duration-200 font-semibold ${
                    isActive
                      ? `text-[${primaryColor}] shadow-md px-2 py-1 rounded-lg font-bold ${
                          isSoftwarePath ? 'bg-blue-50/80 backdrop-blur-sm' : 'bg-green-700/20 backdrop-blur-sm'
                        }`
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
              )
            })}
          </div>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-200 ${
              isSoftwarePath
                ? 'text-blue-600 hover:bg-blue-50 hover:shadow active:bg-blue-100'
                : 'text-green-700 hover:bg-green-50 hover:shadow active:bg-green-100'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop / Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar Panel - slides from right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 180,
              }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
                      isSoftwarePath ? 'border-blue-500' : 'border-green-500'
                    }`}>
                      <Image
                        src="/images/Fatamid.jpeg"
                        alt="Fatamid International Ltd"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-semibold text-lg">
                      {isSoftwarePath ? 'Software' : isAgroFlow ? 'Agro-allied' : 'Fatamid'}
                    </span>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? isSoftwarePath
                              ? "bg-blue-50 text-blue-700 font-semibold shadow-sm"
                              : "bg-green-50 text-green-800 font-semibold shadow-sm"
                            : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>

                {/* Optional footer in sidebar */}
                <div className="p-5 border-t border-gray-100 text-center text-sm text-gray-500">
                  Fatamid International Ltd © {new Date().getFullYear()}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}