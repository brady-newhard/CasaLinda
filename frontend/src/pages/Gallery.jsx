// @ts-nocheck
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

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
    <section id="gallery" className="w-full py-12 px-2 md:px-12 bg-casa-yellow flex flex-col items-center min-h-screen">
      <h2 className="text-casa-orange text-3xl md:text-4xl font-bold mb-8 text-center">Gallery</h2>
      {/* Mobile: keen-slider carousel */}
      <div className="block md:hidden w-full max-w-lg mx-auto">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {galleryImages.map((src, idx) => (
            <div className="keen-slider__slide flex justify-center items-center" key={src}>
              <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover rounded-lg border-4 border-casa-yellow shadow-lg" />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-3 gap-6 w-full max-w-5xl">
        {galleryImages.map((src, idx) => (
          <div key={src} className="rounded-lg overflow-hidden border-4 border-casa-yellow shadow-lg">
            <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery; 