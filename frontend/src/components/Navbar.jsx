import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Rooms & Rates", href: "#" },
  { name: "Activities", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-2 md:px-12 py-1 bg-transparent">
        {/* Logo */}
        <div className="flex items-center select-none">
          <img
            src="/images/casalinda-logo1.png"
            alt="Casa Linda Logo"
            className="h-36 w-auto object-contain drop-shadow"
          />
        </div>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-base font-medium hover:text-blue-100 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="ml-4 px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-700 transition font-semibold shadow"
          >
            Book Now
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center z-40"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-7 h-1 bg-white rounded mb-1"></span>
          <span className="block w-7 h-1 bg-white rounded mb-1"></span>
          <span className="block w-7 h-1 bg-white rounded"></span>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 flex pointer-events-none ${menuOpen ? '' : ''}`}>
        {/* Slide-in menu */}
        <div
          className={`relative w-4/5 max-w-xs h-full bg-cover bg-center shadow-xl transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} pointer-events-auto`}
          style={{ backgroundImage: "url('/images/Casa Linda - 63A.JPG')" }}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {/* Logo in menu */}
          <div className="flex items-center px-6 pt-10 pb-6">
            <img
              src="/images/casalinda-logo3.png"
              alt="Casa Linda Logo"
              className="h-12 w-auto object-contain drop-shadow"
            />
          </div>
          {/* Nav links */}
          <div className="flex flex-col space-y-6 px-8 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-xl font-semibold hover:text-blue-200 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-700 transition font-semibold shadow text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
        {/* Overlay to close menu */}
        {menuOpen && (
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Navbar; 