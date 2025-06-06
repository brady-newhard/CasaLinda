// @ts-nocheck
// import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Footer from "../components/Footer";

const galleryImages = [
  "/images/gallery/Casa Linda - 1A.JPG",
  "/images/gallery/Casa Linda - 3A.JPG",
  "/images/gallery/Casa Linda - 4A.JPG",
  "/images/gallery/Casa Linda - 12A.JPG",
  "/images/gallery/Casa Linda - 13A.JPG",
  "/images/gallery/Casa Linda - 14A.JPG",
  "/images/gallery/Casa Linda - 18A.JPG",
  "/images/gallery/Casa Linda - 19A.JPG",
  "/images/gallery/Casa Linda - 20A.JPG",
  "/images/gallery/Casa Linda - 21A.JPG",
  "/images/gallery/Casa Linda - 23A.JPG",
  "/images/gallery/Casa Linda - 24A.JPG",
  "/images/gallery/Casa Linda - 27A.JPG",
  "/images/gallery/Casa Linda - 28A.JPG",
  "/images/gallery/Casa Linda - 29A.JPG",
  "/images/gallery/Casa Linda - 30A.JPG",
  "/images/gallery/Casa Linda - 31A.JPG",
  "/images/gallery/Casa Linda - 32A.JPG",
  "/images/gallery/Casa Linda - 33A.JPG",
  "/images/gallery/Casa Linda - 35A.JPG",
  "/images/gallery/Casa Linda - 36A.JPG",
  "/images/gallery/Casa Linda - 37A.JPG",
  "/images/gallery/Casa Linda - 38A.JPG",
  "/images/gallery/Casa Linda - 39A.JPG",
  "/images/gallery/Casa Linda - 40A.JPG",
  "/images/gallery/Casa Linda - 44A.JPG",
  "/images/gallery/Casa Linda - 46A.JPG",
  "/images/gallery/Casa Linda - 48A.JPG",
  "/images/gallery/Casa Linda - 50A.JPG",
  "/images/gallery/Casa Linda - 51A.JPG",
  "/images/gallery/Casa Linda - 55A.JPG",
  "/images/gallery/Casa Linda - 57A.JPG",
  "/images/gallery/Casa Linda - 58A.JPG",
  "/images/gallery/Casa Linda - 59A.JPG",
  "/images/gallery/Casa Linda - 60A.JPG",
  "/images/gallery/Casa Linda - 61A.JPG",
  "/images/gallery/Casa Linda - 64A.JPG",
  "/images/gallery/Casa Linda - 65A.JPG",
  "/images/gallery/Casa Linda - 66A.JPG",
  "/images/gallery/Casa Linda - 68A.JPG",
  "/images/gallery/Casa Linda - 69A.JPG",
  "/images/gallery/Casa Linda - 70A.JPG",
  "/images/gallery/Casa Linda - 71A.JPG",
  "/images/gallery/Casa Linda - 72A.JPG",
  "/images/gallery/Casa Linda - 73A.JPG",
  "/images/gallery/Casa Linda - 74A.JPG",
  "/images/gallery/Casa Linda - 75A.JPG",
];

const Landing = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 8 },
    breakpoints: {
      "(min-width: 768px)": {
        enabled: false, // disables slider on desktop
      },
    },
  });

  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col bg-cover bg-center font-[Cinzel]" style={{ backgroundImage: "url('/images/Casa Linda - 60A.JPG')", fontFamily: "'Cinzel', serif" }}>
        {/* Overlay for darkening the image for text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        {/* Navbar */}
        <Navbar />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center lg:items-start justify-end text-left pb-1 lg:pb-8 px-2 lg:px-12 pt-32 lg:pt-0">
          <h1 className="text-casa-orange text-2xl lg:text-3xl font-extrabold drop-shadow-lg mb-4">Tranquil Escape in La Ventana</h1>
          <p className="text-casa-yellow text-sm lg:text-md font-light drop-shadow mb-8 max-w-2xl">Perched above the Sea of Cortez, Casa Linda offers a peaceful escape with panoramic ocean views and Baja's famous breeze. Whether you're here to relax, explore, or ride the wind, this home brings comfort, style, and soul.</p>
          <div className="hidden lg:flex lg:justify-start w-full">
            <Link to="/gallery" className="inline-block px-8 py-3 bg-casa-green text-casa-yellow font-semibold rounded shadow hover:bg-casa-yellow hover:text-casa-green transition border-2 border-casa-yellow text-center">Gallery</Link>
          </div>
        </div>
      </div>
      {/* Mobile: keen-slider carousel below hero */}
      <div className="block lg:hidden w-full max-w-lg mx-auto mt-0 bg-casa-green p-4 ">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {galleryImages.map((src, idx) => (
            <div className="keen-slider__slide flex justify-center items-center" key={src}>
              <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" className="w-full h-64 object-cover rounded-lg border-4 border-casa-yellow shadow-lg" />
            </div>
          ))}
        </div>
        {/* Book Now button below carousel */}
        <div className="flex justify-center mt-4">
          <a 
            href="https://www.airbnb.com/rooms/1397121088517170062?location=La%20Ventana%2C%20B.C.S.%2C%20Mexico&search_mode=regular_search&adults=1&check_in=2025-06-05&check_out=2025-06-10&children=0&infants=0&pets=0&source_impression_id=p3_1749141227_P3W4qTsBF554fnqo&previous_page_section_name=1001&federated_search_id=26d20163-675f-40f1-b9f9-57e2e883839b"
            className="inline-block px-8 py-3 bg-casa-yellow text-casa-green font-semibold rounded shadow hover:bg-casa-green hover:text-casa-yellow transition border-2 border-casa-green text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing; 