'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-green-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="relative group">
          <img 
            src="/images/Fatamid.jpeg"  
            alt="Fatamid Logo" 
            className={`
              w-12 h-12 md:w-14 md:h-14 
              rounded-full shadow-md border-2 border-green-100 object-cover
              transition-all duration-1000 ease-out
              scale-100 opacity-100 rotate-0
              group-hover:rotate-[360deg] cursor-pointer
            `}
          />
        </Link>

        <div className="flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`
                  relative py-2 text-sm font-semibold transition-all duration-300
                  ${isActive ? 'text-green-700' : 'text-gray-500 hover:text-green-600'}
                  group
                `}
              >
                {item.label}
                {/* Active/Hover Indicator Line */}
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
