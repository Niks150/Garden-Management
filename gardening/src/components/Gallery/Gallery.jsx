import { useState, useEffect } from "react";
import { 
  Grid, List, X, Menu, Phone, Mail, MapPin, ArrowUp, Moon, Sun,
  ChevronLeft, ChevronRight, Heart
} from "lucide-react";

export default function EnhancedGallery() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [likedImages, setLikedImages] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      const saved = window.localStorage?.getItem('galleryLikes');
      if (saved) setLikedImages(JSON.parse(saved));
    } catch (e) {
      // Storage not available, use memory only
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLike = (id) => {
    const newLikes = {
      ...likedImages,
      [id]: !likedImages[id]
    };
    setLikedImages(newLikes);
    try {
      window.localStorage?.setItem('galleryLikes', JSON.stringify(newLikes));
    } catch (e) {
      // Storage not available
    }
  };

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80",
      title: "Modern Landscape Design",
      description: "Contemporary garden with native plants and sustainable features. This stunning landscape features carefully curated native plant species that thrive in local climate conditions.",
      category: "Landscaping",
      date: "2024-01-15",
      location: "Ahmedabad"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
      title: "Lush Green Lawn",
      description: "Professionally maintained lawn with vibrant grass. Our expert care ensures your lawn stays healthy, green, and beautiful throughout the year with precision maintenance.",
      category: "Lawn Care",
      date: "2024-01-18",
      location: "Ahmedabad"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
      title: "Colorful Flower Garden",
      description: "Beautiful seasonal flowers and perennial arrangements. Each bloom is carefully selected to create a harmonious palette that changes with the seasons.",
      category: "Planting",
      date: "2024-01-20",
      location: "Ahmedabad"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80",
      title: "Vertical Garden Wall",
      description: "Living wall installation with tropical plants. This innovative design brings nature to vertical spaces, creating stunning green walls perfect for modern homes.",
      category: "Vertical Walls",
      date: "2024-01-22",
      location: "Ahmedabad"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&q=80",
      title: "Garden Pathway",
      description: "Stone pathway surrounded by lush greenery. A carefully designed walkway that guides you through the garden while maintaining the natural aesthetic.",
      category: "Landscaping",
      date: "2024-01-25",
      location: "Ahmedabad"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=1200&q=80",
      title: "Water Feature Garden",
      description: "Peaceful garden with integrated water elements. The gentle sound and visual appeal of water features create a serene sanctuary for relaxation and meditation.",
      category: "Specialized",
      date: "2024-01-28",
      location: "Ahmedabad"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
      title: "Urban Rooftop Garden",
      description: "Rooftop paradise with stunning city views. Transform unused rooftop space into a thriving garden escape with modern design and sustainable practices.",
      category: "Landscaping",
      date: "2024-02-01",
      location: "Ahmedabad"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&q=80",
      title: "Indoor Plant Collection",
      description: "Curated indoor garden for modern living spaces. Our carefully selected houseplants purify air and add natural beauty to your interior design.",
      category: "Planting",
      date: "2024-02-03",
      location: "Ahmedabad"
    }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex - 1 + galleryImages.length) % galleryImages.length]);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex + 1) % galleryImages.length]);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=Poppins:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        
        * {
          font-family: 'Poppins', -apple-system, sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .font-elegant {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0ABAB5 0%, #56DFCF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>

      {/* NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        darkMode
          ? scrollY > 50 
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' 
            : 'bg-gray-900/80 backdrop-blur-md'
          : scrollY > 50 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-[#0ABAB5]/5' 
            : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="/" className="flex items-center group">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text transition-transform duration-300 group-hover:scale-105">
                🌿 The Garden Co.
              </h1>
            </a>

            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className={`relative font-medium transition-all duration-300 group ${
                      darkMode
                        ? 'text-gray-300 hover:text-[#56DFCF]'
                        : 'text-gray-700 hover:text-[#0ABAB5]'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] transition-all duration-300 w-0 group-hover:w-full`}></span>
                  </a>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? 'text-gray-300 hover:text-[#56DFCF] hover:bg-gray-800'
                      : 'text-gray-700 hover:text-[#0ABAB5] hover:bg-[#ADEED9]/20'
                  }`}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className={`backdrop-blur-xl rounded-2xl mb-4 overflow-hidden transition-colors duration-300 ${
                darkMode ? 'bg-gray-800/95' : 'bg-white/95'
              }`}>
                <div className="p-6 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className={`block px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                        darkMode
                          ? 'text-gray-300 hover:text-[#56DFCF] hover:bg-gray-700'
                          : 'text-gray-700 hover:text-[#0ABAB5] hover:bg-[#ADEED9]/20'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HEADER SECTION */}
      <section className={`pt-32 pb-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-[#ADEED9]/30 via-[#56DFCF]/10 to-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 transition-colors duration-300 ${
              darkMode
                ? 'bg-gray-800 text-[#56DFCF]'
                : 'bg-[#ADEED9]/40 text-[#0ABAB5]'
            }`}>
              ✨ Our Masterpieces
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="font-elegant italic gradient-text">Gallery</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] mx-auto mb-8" />
            
            <p className={`text-xl transition-colors duration-300 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore our collection of beautifully crafted gardens and stunning landscape designs
            </p>
          </div>

          {/* VIEW TOGGLE */}
          <div className="flex justify-center gap-3 mt-12">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white shadow-lg scale-105"
                  : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700"
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
                  : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              <List className="h-5 w-5" />
              List View
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY CONTENT */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-950' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* GRID VIEW */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, idx) => (
                <div
                  key={image.id}
                  onClick={() => {
                    setSelectedImage(image);
                    setCurrentImageIndex(idx);
                  }}
                  className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-4 py-1.5 bg-[#0ABAB5] rounded-full text-xs font-bold mb-3">
                        {image.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description.substring(0, 60)}...</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(image.id);
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all duration-300 group-hover:scale-110"
                  >
                    <Heart
                      size={20}
                      className={`transition-all duration-300 ${
                        likedImages[image.id]
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* LIST VIEW */}
          {viewMode === "list" && (
            <div className="space-y-8">
              {galleryImages.map((image, idx) => (
                <div
                  key={image.id}
                  onClick={() => {
                    setSelectedImage(image);
                    setCurrentImageIndex(idx);
                  }}
                  className={`group ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                  } rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden h-80 md:h-auto">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(image.id);
                        }}
                        className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all"
                      >
                        <Heart
                          size={20}
                          className={`transition-all ${
                            likedImages[image.id]
                              ? 'fill-red-500 text-red-500'
                              : 'text-white'
                          }`}
                        />
                      </button>
                    </div>
                    
                    <div className="p-10 flex flex-col justify-center">
                      <span className={`inline-block px-5 py-2 rounded-full text-sm font-bold mb-6 w-fit transition-colors duration-300 ${
                        darkMode
                          ? 'bg-gray-800 text-[#56DFCF]'
                          : 'bg-gradient-to-r from-[#ADEED9]/40 to-[#56DFCF]/30 text-[#0ABAB5]'
                      }`}>
                        {image.category}
                      </span>
                      
                      <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-[#0ABAB5] transition-colors">
                        {image.title}
                      </h3>
                      
                      <p className={`text-lg leading-relaxed mb-4 transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {image.description}
                      </p>

                      <div className={`flex items-center gap-4 mb-6 text-sm transition-colors duration-300 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        <span>📅 {image.date}</span>
                        <span>📍 {image.location}</span>
                      </div>
                      
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

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in transition-colors duration-300 ${
            darkMode ? 'bg-black/90' : 'bg-black/90'
          }`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:rotate-90 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className={`max-w-6xl w-full ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            } rounded-3xl overflow-hidden shadow-2xl animate-fade-in`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
            />
            <div className="p-10">
              <span className={`inline-block px-5 py-2 rounded-full text-sm font-bold mb-5 transition-colors duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-[#56DFCF]'
                  : 'bg-gradient-to-r from-[#ADEED9]/40 to-[#56DFCF]/30 text-[#0ABAB5]'
              }`}>
                {selectedImage.category}
              </span>
              
              <h3 className="font-serif text-4xl font-bold mb-5">{selectedImage.title}</h3>
              <p className={`text-xl leading-relaxed mb-6 transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {selectedImage.description}
              </p>

              <div className={`flex items-center gap-6 text-sm transition-colors duration-300 ${
                darkMode ? 'text-gray-500' : 'text-gray-600'
              }`}>
                <span>📅 {selectedImage.date}</span>
                <span>📍 {selectedImage.location}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleNextImage}
            className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group animate-fade-in"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}

      {/* FOOTER */}
      <footer className={`transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-900 via-[#0ABAB5]/90 to-[#56DFCF]/80'
      } text-white py-20`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text font-serif">
                🌿 The Garden Co.
              </h3>
              <p className="text-gray-200 leading-relaxed max-w-md">
                Professional garden maintenance and landscaping services creating beautiful outdoor spaces since 2008.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      → {item.name}
                    </a>
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
                      +91 9016372258
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-300">Email</div>
                    <a href="mailto:info@thegardenco.com" className="text-white hover:text-[#ADEED9] transition-colors">
                      info@thegardenco.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Location</h4>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-200">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-gray-300">
              © 2024 The Garden Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}