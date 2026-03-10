import { Link, useLocation } from "react-router";
import { Package, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism effect */}
      <div className="backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">M.S Logistics</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/track"
                className={`transition-colors ${
                  isActive("/track")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Track Shipment
              </Link>
              <Link
                to="/book"
                className={`transition-colors ${
                  isActive("/book")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Book Now
              </Link>
              <Link
                to="/portal"
                className={`transition-colors ${
                  isActive("/portal")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Customer Portal
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/95 border-b border-gray-200/50 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/track"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/track")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Track Shipment
            </Link>
            <Link
              to="/book"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/book")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Book Now
            </Link>
            <Link
              to="/portal"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive("/portal")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Customer Portal
            </Link>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
