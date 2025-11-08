import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Menu,
  X,
  ArrowUp,
  Moon,
  Sun,
  CheckCircle
} from "lucide-react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Phone",
      details: "+91 90163 72258",
      link: "tel:9016372258"
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email",
      details: "info@thegardenco.com",
      link: "mailto:info@thegardenco.com"
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Address",
      details: "Ahmedabad, Gujarat, India",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
      link: null
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
    }`}>
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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
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
                      location.pathname === item.path
                        ? darkMode ? 'text-[#56DFCF]' : 'text-[#0ABAB5]'
                        : darkMode ? 'text-gray-300 hover:text-[#56DFCF]' : 'text-gray-700 hover:text-[#0ABAB5]'
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
            <div className="lg:hidden">
              <div className={`backdrop-blur-xl shadow-2xl rounded-2xl mb-4 overflow-hidden transition-colors duration-300 ${
                darkMode ? 'bg-gray-800/95' : 'bg-white/95'
              }`}>
                <div className="p-6 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? darkMode 
                            ? 'text-[#56DFCF] bg-gradient-to-r from-gray-800 to-gray-700'
                            : 'text-[#0ABAB5] bg-gradient-to-r from-[#ADEED9]/30 to-[#56DFCF]/20'
                          : darkMode
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

      {/* Header Section */}
      <section className={`pt-32 pb-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-[#ADEED9]/30 via-[#56DFCF]/10 to-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6 transition-colors duration-300 ${
              darkMode
                ? 'bg-gray-800 text-[#56DFCF]'
                : 'bg-[#ADEED9]/40 text-[#0ABAB5]'
            }`}>
              Let's Connect
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="font-serif italic gradient-text">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] mx-auto mb-8" />
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We'd love to hear from you! Reach out to us for any inquiries about our garden services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-950' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in-up ${
                  darkMode
                    ? 'bg-gray-900 border-2 border-gray-800 hover:border-[#0ABAB5]/50'
                    : 'bg-gradient-to-br from-[#ADEED9]/20 to-[#56DFCF]/10 border-2 border-transparent hover:border-[#0ABAB5]/30'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 text-white rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF]`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className={`transition-colors duration-300 text-lg hover:text-[#0ABAB5] ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className={`text-lg transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`rounded-3xl shadow-2xl p-10 transition-colors duration-300 ${
              darkMode ? 'bg-gray-900 border-2 border-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] rounded-2xl flex items-center justify-center">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
              </div>
              
              {submitted ? (
                <div className="text-center py-16 animate-fade-in">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 transition-colors duration-300 ${
                    darkMode ? 'bg-gray-800' : 'bg-[#ADEED9]/30'
                  }`}>
                    <CheckCircle className="w-12 h-12 text-[#0ABAB5]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className={`text-lg transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full rounded-xl border-2 px-4 py-3.5 transition-all duration-300 outline-none ${
                          darkMode
                            ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50 text-white placeholder-gray-500'
                            : 'border-gray-200 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full rounded-xl border-2 px-4 py-3.5 transition-all duration-300 outline-none ${
                          darkMode
                            ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50 text-white placeholder-gray-500'
                            : 'border-gray-200 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full rounded-xl border-2 px-4 py-3.5 transition-all duration-300 outline-none ${
                          darkMode
                            ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50 text-white placeholder-gray-500'
                            : 'border-gray-200 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border-2 px-4 py-3.5 transition-all duration-300 outline-none ${
                          darkMode
                            ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50 text-white'
                            : 'border-gray-200 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request Quote</option>
                        <option value="service">Service Information</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us about your garden project or inquiry..."
                      className={`w-full rounded-xl border-2 px-4 py-3.5 transition-all duration-300 outline-none resize-none ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50 text-white placeholder-gray-500'
                          : 'border-gray-200 focus:border-[#0ABAB5] focus:ring-4 focus:ring-[#0ABAB5]/10 hover:border-[#0ABAB5]/50'
                      }`}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="group w-full rounded-xl bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] px-8 py-4 text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                  >
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </button>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className={`rounded-3xl shadow-2xl p-10 transition-colors duration-300 ${
                darkMode ? 'bg-gray-900 border-2 border-gray-800' : 'bg-white'
              }`}>
                <h3 className="text-2xl font-bold mb-8">Why Choose Us?</h3>
                <div className="space-y-6">
                  {[
                    { title: "Fast Response", desc: "We respond to all inquiries within 24 hours" },
                    { title: "Expert Team", desc: "15+ years of gardening experience" },
                    { title: "Free Consultation", desc: "Get a free quote and site evaluation" },
                    { title: "Quality Service", desc: "100% satisfaction guaranteed" }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-5 group hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up ${
                        darkMode
                          ? 'hover:bg-gray-800'
                          : 'hover:bg-[#ADEED9]/10'
                      } p-4 rounded-2xl`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF]`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                        <p className={`transition-colors duration-300 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-gradient-to-br from-[#0ABAB5] to-[#56DFCF] rounded-3xl shadow-2xl p-10 text-white animate-fade-in-up delay-400">
                <h3 className="text-2xl font-bold mb-4">Prefer to Chat?</h3>
                <p className="mb-8 opacity-90 text-lg">Get instant responses via WhatsApp</p>
                <a
                  href="https://wa.me/9016372258?text=Hello! I'm interested in your gardening services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#0ABAB5] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`text-white py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-900 via-[#0ABAB5]/90 to-[#56DFCF]/80'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                🌿 The Garden Co.
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
                    <a href="mailto:info@thegardenco.com" className="text-white hover:text-[#ADEED9] transition-colors">
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
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group animate-fade-in"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}