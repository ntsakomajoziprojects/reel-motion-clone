
import React, { useState } from 'react';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavigationProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Navigation: React.FC<NavigationProps> = ({ onSearch, searchQuery }) => {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-red-600 text-2xl font-bold">NETFLIX</div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">TV Shows</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Movies</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">New & Popular</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">My List</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center bg-black/80 border border-white/20 rounded px-3 py-1">
                  <Search className="w-4 h-4 text-white mr-2" />
                  <input
                    type="text"
                    placeholder="Titles, people, genres"
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    onBlur={() => setShowSearch(false)}
                    autoFocus
                    className="bg-transparent text-white placeholder-gray-400 outline-none w-48"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Notifications */}
            <button className="p-2 text-white hover:text-gray-300 transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
              >
                <img
                  src={user?.avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded"
                />
                <ChevronDown className="w-4 h-4" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800">
                      <User className="w-4 h-4 mr-2" />
                      Manage Profiles
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">Account</a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">Help Center</a>
                    <div className="border-t border-gray-700 my-1"></div>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
