// import React, { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  // { name: "Rooms & Rates", href: "#" },
  { name: "Activities", href: "#" },
  { name: "Contact", href: "/contact" },
  
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-2 lg:px-12 py-1 bg-transparent/1">
        {/* Logo */}
        <div className="flex items-center select-none">
          <Link to="/">
            <img
              src="/images/casalinda-logo1.png"
              alt="Casa Linda Logo"
              className="h-36 w-auto object-contain drop-shadow"
            />
          </Link>
        </div>
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-casa-yellow text-base font-medium hover:text-casa-orange transition"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.airbnb.com/rooms/1397121088517170062?location=La%20Ventana%2C%20B.C.S.%2C%20Mexico&search_mode=regular_search&adults=1&check_in=2025-06-05&check_out=2025-06-10&children=0&infants=0&pets=0&source_impression_id=p3_1749141227_P3W4qTsBF554fnqo&previous_page_section_name=1001&federated_search_id=26d20163-675f-40f1-b9f9-57e2e883839b"
            className="ml-4 px-5 py-2 border-2 border-casa-yellow bg-casa-green text-casa-yellow rounded hover:bg-casa-yellow hover:text-casa-green transition font-semibold shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center z-40 pr-4 mt-0 mb-7"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-7 h-1 bg-casa-yellow rounded mb-1"></span>
          <span className="block w-7 h-1 bg-casa-yellow rounded mb-1"></span>
          <span className="block w-7 h-1 bg-casa-yellow rounded"></span>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 flex pointer-events-none ${menuOpen ? '' : ''}`}>
        {/* Slide-in menu */}
        <div
          className={`relative w-4/5 max-w-xs h-full bg-cover bg-center shadow-xl transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} pointer-events-auto`}
          style={{ backgroundImage: "url('/images/Casa Linda - 25A.JPG')" }}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-casa-yellow text-3xl font-bold z-50"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {/* Nav links */}
          <div className="flex flex-col space-y-6 px-8 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-casa-yellow text-xl font-semibold hover:text-casa-orange transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.airbnb.com/rooms/1397121088517170062?location=La%20Ventana%2C%20B.C.S.%2C%20Mexico&search_mode=regular_search&adults=1&check_in=2025-06-05&check_out=2025-06-10&children=0&infants=0&pets=0&source_impression_id=p3_1749141227_P3W4qTsBF554fnqo&previous_page_section_name=1001&federated_search_id=26d20163-675f-40f1-b9f9-57e2e883839b"
              className="mt-4 px-5 py-2 border-2 border-casa-yellow bg-casa-green text-casa-yellow rounded hover:bg-casa-yellow hover:text-casa-green transition font-semibold shadow text-center"
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