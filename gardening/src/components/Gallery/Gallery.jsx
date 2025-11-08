import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Grid, List, X, Menu, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Gallery() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  // Replace with your own images later
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
      title: "Modern Landscape Design",
      description: "Contemporary garden with native plants and sustainable features",
      category: "Landscaping"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      title: "Lush Green Lawn",
      description: "Professionally maintained lawn with vibrant grass",
      category: "Lawn Care"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      title: "Colorful Flower Garden",
      description: "Beautiful seasonal flowers and perennial arrangements",
      category: "Planting"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
      title: "Vertical Garden Wall",
      description: "Living wall installation with tropical plants",
      category: "Vertical Walls"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
      title: "Garden Pathway",
      description: "Stone pathway surrounded by lush greenery",
      category: "Landscaping"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80",
      title: "Water Feature Garden",
      description: "Peaceful garden with integrated water elements",
      category: "Specialized"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', -apple-system, sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0ABAB5 0%, #56DFCF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-[#0ABAB5]/5' 
          : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center group">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text transition-transform duration-300 group-hover:scale-105">
                The Garden Company
              </h1>
            </Link>

            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative font-medium transition-all duration-300 group ${
                      location.pathname === item.path
                        ? 'text-[#0ABAB5]'
                        : 'text-gray-700 hover:text-[#0ABAB5]'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-[#0ABAB5] hover:bg-[#ADEED9]/20 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl mb-4 overflow-hidden">
                <div className="p-6 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-[#0ABAB5] bg-gradient-to-r from-[#ADEED9]/30 to-[#56DFCF]/20'
                          : 'text-gray-700 hover:text-[#0ABAB5] hover:bg-[#ADEED9]/20'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#ADEED9]/30 via-[#56DFCF]/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-[#ADEED9]/40 rounded-full text-[#0ABAB5] text-sm font-semibold mb-6">
              Our Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="font-serif italic gradient-text">Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of beautiful gardens and landscapes we've created for our clients
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center gap-3 mt-12">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              <Grid className="h-5 w-5" />
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              <List className="h-5 w-5" />
              List View
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-4 py-1.5 bg-[#0ABAB5] rounded-full text-xs font-bold mb-3">
                        {image.category}
                      </span>
                      <h3 className="font-bold text-2xl mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-8">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden h-80 md:h-auto">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#ADEED9]/40 to-[#56DFCF]/30 text-[#0ABAB5] rounded-full text-sm font-bold mb-6 w-fit">
                        {image.category}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0ABAB5] transition-colors">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {image.description}
                      </p>
                      <button className="text-[#0ABAB5] font-bold text-lg hover:text-[#56DFCF] flex items-center gap-3 group-hover:gap-4 transition-all">
                        View Details
                        <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:rotate-90 z-10"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
            />
            <div className="p-10">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#ADEED9]/40 to-[#56DFCF]/30 text-[#0ABAB5] rounded-full text-sm font-bold mb-5">
                {selectedImage.category}
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-5">{selectedImage.title}</h3>
              <p className="text-gray-600 text-xl leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-[#0ABAB5]/90 to-[#56DFCF]/80 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                The Garden Company
              </h3>
              <p className="mb-6 text-gray-200 leading-relaxed max-w-md">
                Professional garden maintenance and landscaping services creating beautiful outdoor spaces since 2008.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      → {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-300">Phone</div>
                    <a href="tel:9016372258" className="text-white hover:text-[#ADEED9] transition-colors">
                      +91 90163 72258
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-300">Email</div>
                    <a href="mailto:info@thegardencompany.com" className="text-white hover:text-[#ADEED9] transition-colors">
                      info@thegardenco.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-gray-200">
              © 2024 The Garden Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}