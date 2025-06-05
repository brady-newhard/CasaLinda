// @ts-nocheck
// import React from "react";
import Navbar from "../components/Navbar";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// Use your actual gallery image filenames here
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

const Gallery = () => {
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
      <Navbar showGalleryLink />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat pt-32 pb-12 relative w-full" style={{ backgroundImage: "url('/images/Casa Linda - 76A.png')" }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 w-full px-2 lg:px-12 flex flex-col items-center">
          <h2 className="text-casa-orange text-3xl lg:text-4xl font-extrabold mb-8 text-center">Gallery</h2>
          {/* Desktop: grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
            {galleryImages.map((src, idx) => (
              <div key={src} className="rounded-lg overflow-hidden border-4 border-casa-yellow shadow-lg">
                <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
          {/* Book Now button below grid on all screen sizes */}
          <div className="flex justify-center mt-8">
            <a 
              href="https://www.airbnb.com/rooms/1397121088517170062?location=La%20Ventana%2C%20B.C.S.%2C%20Mexico&search_mode=regular_search&adults=1&check_in=2025-06-05&check_out=2025-06-10&children=0&infants=0&pets=0&source_impression_id=p3_1749141227_P3W4qTsBF554fnqo&previous_page_section_name=1001&federated_search_id=26d20163-675f-40f1-b9f9-57e2e883839b"
              className="inline-block px-8 py-3 bg-casa-green text-casa-yellow font-semibold rounded shadow hover:bg-casa-yellow hover:text-casa-green transition border-2 border-casa-yellow text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery; 