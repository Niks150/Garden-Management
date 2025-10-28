import { useState, useEffect } from "react";
import { 
  Sprout,
  Flower2,
  Leaf,
  Star,
  ChevronRight,
  Users,
  Shield,
  Clock,
  X,
  Award,
  Heart,
  Menu,
  Briefcase,
  Droplet,
  Bug,
  Palette,
  ArrowUp
} from "lucide-react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const heroImage = "https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=1920";
  const aboutImage = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a828416e-b852-403f-85a4-41c436ab9735.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowQuoteModal(false);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: "plant",
      title: "Plant Maintenance",
      icon: <Sprout className="h-8 w-8 text-white" />,
      description: "Trimming, pruning and shaping plants, health monitoring, disease prevention",
      details: ["Trimming & pruning", "Health monitoring", "Indoor plant care", "Fertilizer scheduling"],
      color: "from-emerald-700 via-emerald-600 to-green-600"
    },
    {
      id: "lawn",
      title: "Lawn Care & Maintenance",
      icon: <Leaf className="h-8 w-8 text-white" />,
      description: "Regular mowing, edging, fertilization and soil improvement",
      details: ["Mowing & edging", "Soil improvement", "Disease control", "Lawn aeration"],
      color: "from-green-700 via-green-600 to-emerald-600"
    },
    {
      id: "soil",
      title: "Soil & Fertilization",
      icon: <Flower2 className="h-8 w-8 text-white" />,
      description: "Soil testing, organic and chemical fertilization, nutrient customization",
      details: ["Soil testing", "Chemical fertilization", "Nutrient plans", "pH testing"],
      color: "from-teal-700 via-emerald-700 to-green-700"
    },
    {
      id: "irrigation",
      title: "Irrigation Management",
      icon: <Droplet className="h-8 w-8 text-white" />,
      description: "Drip irrigation installation, maintenance, and water conservation",
      details: ["Watering schedules", "Drip installation", "Water conservation", "Automated systems"],
      color: "from-cyan-700 via-teal-700 to-emerald-700"
    },
    {
      id: "garden-upkeep",
      title: "Garden Upkeep & Styling",
      icon: <Palette className="h-8 w-8 text-white" />,
      description: "Seasonal cleanup, mulching, dead plant removal and decor arrangement",
      details: ["Garden cleanup", "Mulching", "Plant removal", "Decor arrangement"],
      color: "from-lime-700 via-green-700 to-emerald-700"
    },
    {
      id: "pest",
      title: "Pest & Disease Management",
      icon: <Bug className="h-8 w-8 text-white" />,
      description: "Garden redesign, planning, and specialized landscaping services",
      details: ["Garden redesign", "Plant placement", "Landscape design", "Installation"],
      color: "from-amber-700 via-green-700 to-emerald-700"
    },
    {
      id: "commercial",
      title: "Commercial & Corporate Care",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      description: "Expert landscaping and corporate property maintenance programs",
      details: ["Corporate landscaping", "Bulk watering", "Landscape care", "Soil maintenance"],
      color: "from-emerald-800 via-emerald-700 to-green-700"
    },
    {
      id: "specialized",
      title: "Specialized Services",
      icon: <Star className="h-8 w-8 text-white" />,
      description: "Indoor/outdoor plants care, balloon gardens and community maintenance",
      details: ["Plant care", "Balloon gardens", "Community maintenance", "Garden sourcing"],
      color: "from-teal-700 via-emerald-700 to-green-700"
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "2000+", label: "Happy Clients" },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Years Experience" },
    { icon: <Star className="h-6 w-6" />, value: "5000+", label: "Projects Done" },
    { icon: <Heart className="h-6 w-6" />, value: "100%", label: "Satisfaction" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-emerald-50/30 to-green-50/40">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Playfair+Display:ital@0;1&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }
        
        .curvy-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          letter-spacing: -0.02em;
        }
        
        .glass-nav {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(5, 150, 105, 0.1);
          box-shadow: 0 4px 24px rgba(11, 77, 44, 0.08);
        }
        
        .glass-nav-scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border-bottom: 1px solid rgba(5, 150, 105, 0.15);
          box-shadow: 0 8px 32px rgba(11, 77, 44, 0.12);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          border: 1px solid rgba(5, 150, 105, 0.15);
        }
        
        .glass-modal {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border: 1px solid rgba(5, 150, 105, 0.2);
        }
      `}</style>

      {/* NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrollY > 50 ? 'glass-nav-scrolled' : 'glass-nav'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:shadow-xl group-hover:shadow-emerald-600/40 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 bg-clip-text text-transparent">
                  The Garden Company
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {['Home', 'Gallery', 'About Us', 'Contacts'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-emerald-800 hover:text-emerald-600 font-semibold text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="hidden sm:inline-block px-6 py-2.5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-emerald-600/30 hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                <Menu className="h-6 w-6 text-emerald-800" />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 glass-card rounded-b-2xl mt-2">
              <div className="space-y-2 pt-4 px-4">
                {['Home', 'Gallery', 'About Us', 'Contacts'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block px-5 py-3 text-emerald-800 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-emerald-600 hover:text-white rounded-xl transition-all font-semibold text-sm"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setShowQuoteModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-xl font-semibold text-sm"
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
            transform: `scale(1.1) translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.6)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-green-900/50 to-emerald-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 border-2 border-white flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xs">{i}K</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                ))}
                <span className="text-emerald-200 text-sm font-semibold ml-2">From 2000+ ratings</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Transform Your Indoor and Outdoor Spaces
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-300 bg-clip-text text-transparent">
                with Expert Garden Care!
              </span>
            </h1>
            
            <p className="text-base text-emerald-50/90 mb-6 leading-relaxed font-medium max-w-xl">
              Professional and personalized garden maintenance for your indoor and outdoor green spaces — from homes to commercial properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </button>

              <a
                href="https://wa.me/9016372258"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-card text-emerald-900 rounded-xl font-bold text-base hover:shadow-xl transition-all duration-300 text-center border-2 border-emerald-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* SERVICES SECTION */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-emerald-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 glass-card text-emerald-800 rounded-full font-bold text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 bg-clip-text text-transparent mb-4">
              A One-Stop Solution for All Your Garden Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Professional and personalized garden maintenance services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group glass-card rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-5 shadow-xl`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium">
                  {service.description}
                </p>

                <ul className="text-xs text-gray-500 space-y-2 mb-5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 items-center">
                      <span className="text-emerald-600 font-bold text-base">•</span>
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-emerald-700 font-bold text-sm hover:text-emerald-600 transition-colors">
                  Learn More 
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - MATCHING SCREENSHOT */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/60 to-green-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 glass-card text-emerald-800 rounded-full font-bold text-sm mb-4">
              About Us
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image with rounded border */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-3xl border-4 border-emerald-600 overflow-hidden shadow-2xl bg-white">
                  <img 
                    src="https://images.pexels.com/photos/158636/background-beautiful-beauty-bloom-158636.jpeg"
                    alt="Our expert garden team at work" 
                    className="w-full h-full object-cover rounded-2xl"
                    style={{
                      aspectRatio: '3/2'
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                </div>

                {/* Floating badge - positioned at bottom right */}
                <div className="absolute -bottom-6 -right-6 glass-card rounded-full p-4 shadow-2xl border-2 border-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-white fill-white" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="curvy-text text-5xl sm:text-6xl font-bold text-emerald-800 mb-8 leading-tight">
                About The Garden Company
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium italic text-justify">
                We are a team of experts with over 15 years of experience, transforming outdoor spaces across the community. Our team of certified horticulturists and landscape professionals is dedicated to creating and maintaining beautiful, sustainable gardens that enhance your property's value and your quality of life.
              </p>
              
              {/* Features Grid - 2x2 layout */}
              
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-emerald-950/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="glass-modal rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent">
                Get Free Quote
              </h3>
              <button 
                onClick={() => setShowQuoteModal(false)} 
                className="p-2 hover:bg-emerald-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-emerald-800" />
              </button>
            </div>
            
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-emerald-800 mb-2">Success!</h4>
                <p className="text-gray-600 font-medium">We'll contact you within 2 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  className="w-full rounded-xl glass-card text-emerald-900 placeholder-gray-500 px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-emerald-600 transition-all" 
                />
                
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  className="w-full rounded-xl glass-card text-emerald-900 placeholder-gray-500 px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-emerald-600 transition-all" 
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  className="w-full rounded-xl glass-card text-emerald-900 placeholder-gray-500 px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-emerald-600 transition-all" 
                />
                
                <select className="w-full rounded-xl glass-card text-emerald-900 px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-emerald-600 transition-all">
                  <option value="">Select Service *</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  className="w-full rounded-xl glass-card text-emerald-900 placeholder-gray-500 px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-emerald-600 transition-all" 
                />
                
                <button 
                  onClick={handleQuoteSubmit} 
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 px-5 py-4 text-white font-bold text-base hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105"
                >
                  Submit Request
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-700 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-30"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </main>
  );
}