// @ts-nocheck
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    arrivalDate: '',
    departureDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:brady.russell@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AArrival Date: ${formData.arrivalDate}%0D%0ADeparture Date: ${formData.departureDate}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat pt-32 pb-16" style={{ backgroundImage: "url('/images/gallery/Casa Linda - 73A.JPG')" }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-casa-orange text-4xl font-bold mb-4 text-center">Get In Touch</h1>
            <p className="text-casa-yellow text-lg mb-8 text-center">
              We'd love to hear from you — whether you're ready to book or just have a few questions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-gray-100/30 p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-casa-yellow font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-casa-green"
                    />
                  </div>
                  <div>
                    <label className="block text-casa-yellow font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-casa-green"
                    />
                  </div>
                  <div>
                    <label className="block text-casa-yellow font-semibold mb-2">Arrival Date</label>
                    <input
                      type="date"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-casa-green"
                    />
                  </div>
                  <div>
                    <label className="block text-casa-yellow font-semibold mb-2">Departure Date</label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-casa-green"
                    />
                  </div>
                  <div>
                    <label className="block text-casa-yellow font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-casa-green"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-casa-green text-casa-yellow py-3 px-6 rounded font-semibold hover:bg-casa-yellow hover:text-casa-green transition border-2 border-casa-yellow"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-gray-100/30 p-6 rounded-lg shadow-lg">
                  <h2 className="text-casa-orange text-2xl font-bold mb-4">Direct Contact</h2>
                  <div className="space-y-4">
                    <p className="text-casa-yellow">
                      <span className="font-semibold">Fernanda Ochoa:</span>{' '}
                      <a href="tel:+526121703829" className="hover:text-casa-orange transition">
                        +52 612 170 3829
                      </a>
                    </p>
                    <p className="text-casa-yellow">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:brady.russell@gmail.com" className="hover:text-casa-orange transition">
                        brady.russell@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-gray-100/30 p-6 rounded-lg shadow-lg">
                  <h2 className="text-casa-orange text-2xl font-bold mb-4">Location</h2>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps?q=24.039933,-109.987740&z=15&output=embed"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact; 