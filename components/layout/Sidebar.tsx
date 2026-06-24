import React from 'react';
import Link from 'next/link';
import { Menu, X, Home, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-100 p-6 transition-transform duration-300 lg:translate-x-0 lg:static z-40`}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-700">AEPGo</h1>
          <p className="text-xs text-gray-500 mt-1">Pay-as-you-go Solar</p>
        </div>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 transition"
          >
            <Home size={20} className="text-purple-600" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            href="/equipment"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 transition"
          >
            <Menu size={20} className="text-purple-600" />
            <span className="font-medium">Equipment</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 transition"
          >
            <Settings size={20} className="text-purple-600" />
            <span className="font-medium">Settings</span>
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-700 hover:bg-red-50 transition">
            <LogOut size={20} className="text-red-500" />
            <span className="font-medium text-red-600">Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
