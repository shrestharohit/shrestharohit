import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center justify-center"
          >
            <span className="text-2xl font-asteria tracking-wide text-slate-700">Rohitstha_</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-slate-700 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-slate-700 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-slate-700 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
