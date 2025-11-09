import { useState, useEffect } from "react";
import { 
  Sprout, Flower2, Leaf, Star, Users, Briefcase, Droplet, Bug, 
  Palette, ArrowUp, X, Clock, CheckCircle, ArrowRight, Menu, 
  Phone, Mail, MapPin, Heart, Zap, Shield, Moon, Sun
} from "lucide-react";
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../App';

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [scrollY, setScrollY] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImage = "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 1,
      title: "Plant Maintenance",
      icon: <Sprout className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Expert care for all your plants",
      items: ["Trimming & pruning", "Health checks", "Disease prevention", "Re-potting"],
      color: "bg-[#FFEDF3]"
    },
    {
      id: 2,
      title: "Lawn Care",
      icon: <Leaf className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Lush, healthy lawns year-round",
      items: ["Mowing", "Fertilization", "Pest control", "Aeration"],
      color: "bg-[#ADEED9]/30"
    },
    {
      id: 3,
      title: "Soil & Fertilization",
      icon: <Flower2 className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Nutrient-rich soil solutions",
      items: ["Soil testing", "Fertilization", "Composting", "pH correction"],
      color: "bg-[#56DFCF]/20"
    },
    {
      id: 4,
      title: "Irrigation Management",
      icon: <Droplet className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Smart watering systems",
      items: ["Drip systems", "Sprinklers", "Monitoring", "Water conservation"],
      color: "bg-[#FFEDF3]"
    }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
      darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        * { font-family: 'Poppins', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        .glass-effect { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .gradient-text { background: linear-gradient(135deg, #0ABAB5 0%, #56DFCF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(10, 186, 181, 0.2); }

        .service-card { position: relative; overflow: hidden; transition: all 0.5s ease; }
        .service-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(10, 186, 181, 0.15), transparent); transition: left 0.6s ease; }
        .service-card:hover::before { left: 100%; }
        .service-card:hover { box-shadow: 0 30px 60px rgba(10, 186, 181, 0.15) !important; }
      `}</style>

      {/* NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        darkMode
          ? scrollY > 50 
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' 
            : 'bg-gray-900/80 backdrop-blur-md'
          : scrollY > 50 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-[#0ABAB5]/5' 
            : 'bg-white/50 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center group">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text transition-transform duration-300 group-hover:scale-105">
                🌿 The Garden Co.
              </h1>
            </Link>

            <nav className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative font-medium transition-all duration-300 group ${
                      darkMode
                        ? 'text-gray-300 hover:text-[#56DFCF]'
                        : 'text-gray-700 hover:text-[#0ABAB5]'
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              <div className="lg:hidden">
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
            <div className="lg:hidden pb-4">
              <div className={`backdrop-blur-xl rounded-2xl mb-4 overflow-hidden transition-colors duration-300 ${
                darkMode ? 'bg-gray-800/95' : 'bg-white/95'
              }`}>
                <div className="p-6 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                        darkMode
                          ? 'text-gray-300 hover:text-[#56DFCF] hover:bg-gray-700'
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

      {/* HERO SECTION */}
      <section className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br pt-20 transition-colors duration-300 ${
        darkMode
          ? 'from-gray-900 via-gray-800 to-gray-900'
          : 'from-[#0ABAB5] via-[#56DFCF] to-[#ADEED9]'
      }`}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('${heroImage}')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className={`absolute inset-0 transition-colors duration-300 ${
          darkMode
            ? 'bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/50'
            : 'bg-gradient-to-b from-transparent via-[#0ABAB5]/10 to-[#0ABAB5]/30'
        }`}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-6 py-2 glass-effect rounded-full text-gray-900 text-sm font-semibold tracking-wider opacity-0 animate-scale-in delay-100">
              ✨ Premium Garden Services
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight opacity-0 animate-fade-in-up delay-200">
              Transform Your <span className="italic text-white drop-shadow-lg">Green Spaces</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up delay-300">
              Professional and personalized garden maintenance for your indoor and outdoor green spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-400">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="group px-8 py-4 bg-white text-[#0ABAB5] rounded-full font-semibold text-base transition-all duration-300 hover:bg-[#FFEDF3] hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919016372258"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-900/30 backdrop-blur-sm text-gray-900 rounded-full font-semibold text-base hover:bg-white/50 hover:scale-105 transition-all duration-300 text-center"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 md:gap-12 opacity-0 animate-fade-in delay-600">
              {[
                { num: "15+", text: "Years Experience" },
                { num: "500+", text: "Happy Clients" },
                { num: "100%", text: "Satisfaction" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-gray-900">{stat.num}</div>
                  <div className="text-sm text-gray-700 mt-1">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-gray-900/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-900 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className={`py-32 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950'
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-4 transition-colors duration-300 ${
              darkMode
                ? 'bg-gray-800 text-[#56DFCF]'
                : 'bg-[#ADEED9]/30 text-[#0ABAB5]'
            }`}>
              What We Offer
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
              Our <span className="gradient-text italic">Services</span>
            </h2>
            <p className={`text-lg opacity-0 animate-fade-in-up delay-200 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A one-stop solution for all your garden needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card hover-lift ${
                  darkMode ? 'bg-gray-900 border-gray-800' : service.color
                } rounded-3xl p-8 border-2 transition-all duration-500 ${
                  darkMode ? 'hover:border-[#0ABAB5]/50' : 'hover:border-[#0ABAB5]/30'
                } group cursor-pointer`}
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 transition-colors ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2">
                  {service.title}
                </h3>
                
                <p className={`text-sm mb-4 font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{service.desc}</p>
                
                <ul className="space-y-2">
                  {service.items.slice(0, 2).map((item, idx) => (
                    <li key={idx} className={`text-sm flex items-start gap-2.5 group-hover:text-[#0ABAB5] transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                      <CheckCircle size={16} className="text-[#0ABAB5] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-r from-[#0ABAB5] via-[#56DFCF] to-[#ADEED9]'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Your Dream Garden?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Get a free consultation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="group px-8 py-4 bg-white text-[#0ABAB5] rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/contacts"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-base hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE MODAL */}
      {showQuoteModal && (
        <div className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in transition-colors ${
          darkMode ? 'bg-black/60' : 'bg-black/40'
        }`}>
          <div className={`rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl transition-colors ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-3xl font-bold">Get Your Free Quote</h3>
              <button
                onClick={() => setShowQuoteModal(false)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {!formSubmitted ? (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleQuoteSubmit(); }}>
                <div>
                  <label className={`block text-sm font-semibold mb-2 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] text-white'
                        : 'border-gray-200 focus:border-[#0ABAB5]'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] text-white'
                        : 'border-gray-200 focus:border-[#0ABAB5]'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 9016372258"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] text-white'
                        : 'border-gray-200 focus:border-[#0ABAB5]'
                    }`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  Send Quote Request
                </button>
              </form>
            ) : (
              <div className="text-center py-8 animate-fade-in-up">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                  darkMode ? 'bg-gray-800' : 'bg-[#ADEED9]/30'
                }`}>
                  <CheckCircle size={32} className="text-[#0ABAB5]" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                <p className={`transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>We'll get back to you soon with your free quote.</p>
              </div>
            )}
          </div>
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
    </div>
  );
}