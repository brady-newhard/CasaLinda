// @ts-nocheck
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat pt-32 pb-16" style={{ backgroundImage: "url('/images/gallery/Casa Linda - 73A.JPG')" }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-casa-orange text-4xl font-bold mb-8 text-center">About Casa Linda</h1>
            
            <div className="bg-gray-100/30 p-8 rounded-lg shadow-lg">
              <p className="text-casa-yellow text-lg leading-relaxed mb-6">
                Casa Linda offers the perfect blend of comfort and charm in the heart of La Ventana. This cozy three-bedroom retreat features queen-sized beds, spacious closets, and three full bathrooms — plus a convenient half bath for guests.
              </p>
              <p className="text-casa-yellow text-lg leading-relaxed mb-6">
                Whether you're preparing a fresh Baja breakfast in the fully-equipped kitchen or unwinding with fast WiFi and hot showers after a day of adventure, you'll feel right at home.
              </p>
              <p className="text-casa-yellow text-lg leading-relaxed">
                With panoramic views and a peaceful setting, it's the ideal stay for families or friends seeking relaxation, connection, and a memorable escape.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-100/30 p-6 rounded-lg shadow-lg">
                <h2 className="text-casa-orange text-2xl font-bold mb-4">Accommodations</h2>
                <ul className="text-casa-yellow space-y-2">
                  <li>• Three cozy bedrooms with queen-sized beds</li>
                  <li>• Spacious closets for all your belongings</li>
                  <li>• Three full bathrooms</li>
                  <li>• Additional half bath for guests</li>
                </ul>
              </div>

              <div className="bg-gray-100/30 p-6 rounded-lg shadow-lg">
                <h2 className="text-casa-orange text-2xl font-bold mb-4">Amenities</h2>
                <ul className="text-casa-yellow space-y-2">
                  <li>• Fully-equipped kitchen</li>
                  <li>• High-speed WiFi</li>
                  <li>• Hot showers</li>
                  <li>• Panoramic views</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About; 