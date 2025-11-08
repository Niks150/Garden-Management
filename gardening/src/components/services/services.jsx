import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { 
  Sprout, Flower2, Leaf, Star, Users, Briefcase, Droplet, Bug, 
  Palette, ArrowUp, X, Clock, CheckCircle, ArrowRight, Menu, 
  Moon, Sun, ChevronDown, ChevronUp
} from "lucide-react";

export default function Services() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

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
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  const allServices = [
    {
      id: 1,
      title: "Plant Maintenance",
      icon: <Sprout className="h-8 w-8" />,
      desc: "Expert care for all your plants",
      fullDesc: "Comprehensive plant care services including regular maintenance, pruning, health monitoring, and disease prevention for indoor and outdoor plants.",
      items: ["Trimming & pruning", "Health checks", "Disease prevention", "Re-potting", "Fertilization", "Pest control"],
      color: "bg-[#FFEDF3]",
      borderColor: "border-pink-200",
      price: "₹2,999+"
    },
    {
      id: 2,
      title: "Lawn Care",
      icon: <Leaf className="h-8 w-8" />,
      desc: "Lush, healthy lawns year-round",
      fullDesc: "Professional lawn maintenance to keep your grass vibrant, healthy, and well-maintained throughout all seasons.",
      items: ["Mowing", "Fertilization", "Pest control", "Aeration", "Weed control", "Seasonal care"],
      color: "bg-[#ADEED9]/30",
      borderColor: "border-teal-200",
      price: "₹3,499+"
    },
    {
      id: 3,
      title: "Soil & Fertilization",
      icon: <Flower2 className="h-8 w-8" />,
      desc: "Nutrient-rich soil solutions",
      fullDesc: "Specialized soil management and fertilization programs tailored to your garden's specific needs.",
      items: ["Soil testing", "Fertilization", "Composting", "pH correction", "Nutrient management", "Soil conditioning"],
      color: "bg-[#56DFCF]/20",
      borderColor: "border-cyan-200",
      price: "₹1,999+"
    },
    {
      id: 4,
      title: "Irrigation Management",
      icon: <Droplet className="h-8 w-8" />,
      desc: "Smart watering systems",
      fullDesc: "Efficient irrigation systems designed to maximize water conservation while keeping your plants perfectly hydrated.",
      items: ["Drip systems", "Sprinklers", "Monitoring", "Water conservation", "System installation", "Maintenance"],
      color: "bg-[#FFEDF3]",
      borderColor: "border-pink-200",
      price: "₹4,999+"
    },
    {
      id: 5,
      title: "Garden Cleaning",
      icon: <Palette className="h-8 w-8" />,
      desc: "Keep your garden pristine",
      fullDesc: "Regular cleaning and maintenance services to keep your garden looking fresh, organized, and beautiful.",
      items: ["Leaf removal", "Weeding", "Debris cleanup", "Pressure washing", "Path cleaning", "Seasonal cleanup"],
      color: "bg-[#ADEED9]/30",
      borderColor: "border-teal-200",
      price: "₹1,499+"
    },
    {
      id: 6,
      title: "Landscaping",
      icon: <Bug className="h-8 w-8" />,
      desc: "Design & transformation",
      fullDesc: "Creative landscaping design and installation to transform your outdoor space into a stunning garden.",
      items: ["Design planning", "Plant placement", "Hardscapes", "Water features", "Pathways", "Garden structures"],
      color: "bg-[#56DFCF]/20",
      borderColor: "border-cyan-200",
      price: "₹8,999+"
    },
    {
      id: 7,
      title: "Commercial Services",
      icon: <Briefcase className="h-8 w-8" />,
      desc: "Professional enterprise solutions",
      fullDesc: "Large-scale garden and landscaping services for commercial properties, offices, and institutions.",
      items: ["Landscape care", "Irrigation systems", "Plant health", "Annual programs", "Bulk maintenance", "Custom designs"],
      color: "bg-[#FFEDF3]",
      borderColor: "border-pink-200",
      price: "Custom Quote"
    },
    {
      id: 8,
      title: "Specialized Services",
      icon: <Star className="h-8 w-8" />,
      desc: "Premium add-on services",
      fullDesc: "Unique and specialized gardening services for unique garden needs and preferences.",
      items: ["Office plants", "Terrace gardens", "Kitchen gardens", "Seasonal decor", "Vertical walls", "Water gardens"],
      color: "bg-[#ADEED9]/30",
      borderColor: "border-teal-200",
      price: "₹3,999+"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How often should I get my garden maintained?",
      answer: "We recommend weekly or bi-weekly maintenance for optimal results, though this depends on your garden's size and needs. We offer flexible scheduling options."
    },
    {
      id: 2,
      question: "Do you offer seasonal services?",
      answer: "Yes! We provide specialized seasonal care including spring pruning, monsoon protection, and winter preparation for your plants and lawn."
    },
    {
      id: 3,
      question: "What areas do you service?",
      answer: "We currently service Ahmedabad and surrounding areas. Contact us for specific location details and availability."
    },
    {
      id: 4,
      question: "Can you design a custom garden?",
      answer: "Absolutely! Our expert team can design and implement custom gardens tailored to your preferences, budget, and space."
    },
    {
      id: 5,
      question: "Do you use organic fertilizers?",
      answer: "Yes, we prioritize organic and eco-friendly solutions whenever possible. We can discuss your preferences during consultation."
    },
    {
      id: 6,
      question: "What is your response time for emergencies?",
      answer: "We provide 24/5 support with emergency response within 24 hours for critical plant health issues."
    }
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
        
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        .gradient-text { background: linear-gradient(135deg, #0ABAB5 0%, #56DFCF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .service-card { position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(10, 186, 181, 0.15), transparent); transition: left 0.6s ease; }
        .service-card:hover::before { left: 100%; }
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
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
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
              Complete Solutions
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text italic">Services</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] mx-auto mb-8" />
            
            <p className={`text-xl transition-colors duration-300 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive garden solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-950' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, idx) => (
              <div
                key={service.id}
                className={`service-card group ${
                  darkMode ? 'bg-gray-900 border-gray-800' : service.color
                } rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in-up`}
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-[#0ABAB5] mb-6 transition-all duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } group-hover:scale-110 group-hover:rotate-12`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`text-sm mb-6 transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{service.desc}</p>
                
                <div className={`text-lg font-bold gradient-text mb-6`}>
                  {service.price}
                </div>
                
                <ul className="space-y-2">
                  {service.items.slice(0, 3).map((item, i) => (
                    <li key={i} className={`text-sm flex items-start gap-2.5 group-hover:text-[#0ABAB5] transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                      <CheckCircle size={14} className="text-[#0ABAB5] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">
            Service <span className="gradient-text italic">Details</span>
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {allServices.map((service, idx) => (
              <div
                key={service.id}
                className={`rounded-3xl p-8 transition-all duration-300 animate-fade-in-up ${
                  darkMode
                    ? 'bg-gray-900 border-2 border-gray-800 hover:border-[#0ABAB5]/50'
                    : 'bg-white border-2 border-gray-200 hover:border-[#0ABAB5]/30'
                }`}
                style={{ 
                  animationDelay: `${idx * 0.05}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[#0ABAB5] flex-shrink-0 ${
                    darkMode ? 'bg-gray-800' : 'bg-[#ADEED9]/30'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {service.fullDesc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.items.map((item, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            darkMode
                              ? 'bg-gray-800 text-[#56DFCF]'
                              : 'bg-[#ADEED9]/30 text-[#0ABAB5]'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-950' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">
            Frequently Asked <span className="gradient-text italic">Questions</span>
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={faq.id}
                className={`rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up ${
                  darkMode
                    ? 'bg-gray-900 border-2 border-gray-800'
                    : 'bg-gray-50 border-2 border-gray-200'
                }`}
                style={{ 
                  animationDelay: `${idx * 0.05}s`,
                  opacity: 0
                }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-opacity-50 transition-all duration-300"
                >
                  <h3 className="font-bold text-lg text-left">{faq.question}</h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="flex-shrink-0 text-[#0ABAB5]" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 text-[#0ABAB5]" />
                  )}
                </button>

                {expandedFAQ === faq.id && (
                  <div className={`px-6 pb-6 border-t-2 transition-colors duration-300 ${
                    darkMode ? 'border-gray-800' : 'border-gray-200'
                  }`}>
                    <p className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-r from-[#0ABAB5] via-[#56DFCF] to-[#ADEED9]'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation from our expert team today
          </p>
          <Link
            to="/contacts"
            className="inline-block px-8 py-4 bg-white text-[#0ABAB5] rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

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