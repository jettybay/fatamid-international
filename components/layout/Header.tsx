import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 flex-1 max-w-sm">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 flex-1"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <User size={16} className="text-purple-700" />
            </div>
            <span className="hidden sm:inline text-sm font-medium text-gray-700">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
