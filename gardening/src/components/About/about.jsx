import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowUp, X, Menu, Moon, Sun, Heart, Award, Users, Zap,
  Leaf, Target, Lightbulb, Star
} from "lucide-react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const team = [
    {
      name: "Rahul Patel",
      role: "Founder & Head Gardener",
      experience: "18 years",
      image: "👨‍🌾",
      specialty: "Landscape Design"
    },
    {
      name: "Priya Sharma",
      role: "Senior Horticulturist",
      experience: "14 years",
      image: "👩‍🌾",
      specialty: "Plant Health"
    },
    {
      name: "Arjun Verma",
      role: "Garden Specialist",
      experience: "12 years",
      image: "👨‍💼",
      specialty: "Maintenance"
    },
    {
      name: "Anjali Desai",
      role: "Irrigation Expert",
      experience: "10 years",
      image: "👩‍💼",
      specialty: "Water Systems"
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "We prioritize eco-friendly practices and sustainable gardening solutions for a greener future."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Our passion for plants and gardens drives us to deliver exceptional service every time."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain highest standards of quality in all our garden services and maintenance."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "We believe in building strong relationships with our clients and the community."
    }
  ];

  const achievements = [
    { year: 2008, title: "Company Founded", desc: "Started with passion for gardening" },
    { year: 2012, title: "500+ Happy Clients", desc: "Expanded services across Ahmedabad" },
    { year: 2016, title: "Commercial Division", desc: "Started serving corporate offices" },
    { year: 2020, title: "Industry Recognition", desc: "Awarded Best Garden Service Provider" },
    { year: 2023, title: "1000+ Projects", desc: "Completed over 1000 successful projects" },
    { year: 2024, title: "Award Winner", desc: "Top-rated service in customer satisfaction" }
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
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        .gradient-text { background: linear-gradient(135deg, #0ABAB5 0%, #56DFCF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
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

      {/* HEADER SECTION */}
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
              Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="font-serif italic gradient-text">Us</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] mx-auto mb-8" />
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Learn about our journey in creating beautiful gardens since 2008
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-950' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-slide-in-left">
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Our <span className="gradient-text italic">Journey</span>
                </h2>
                <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Founded in 2008, The Garden Company started with a simple mission: to transform outdoor spaces into beautiful, thriving gardens. What began as a small operation has grown into one of Ahmedabad's most trusted garden service providers.
                </p>
                <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Our team of passionate gardeners and horticulturists bring years of expertise to every project. We've learned that every garden is unique, and we take pride in crafting customized solutions that bring our clients' green dreams to life.
                </p>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Today, we serve over 1000 happy clients and continue to expand our services with innovation and dedication to sustainability.
                </p>
              </div>
              <div className={`rounded-3xl p-12 text-center opacity-0 animate-slide-in-right delay-200 transition-colors ${
                darkMode
                  ? 'bg-gray-900 border-2 border-gray-800'
                  : 'bg-gradient-to-br from-[#ADEED9]/30 to-[#56DFCF]/20'
              }`}>
                <div className="text-6xl mb-6">🌿</div>
                <div className="text-5xl font-bold gradient-text mb-4">16+</div>
                <p className={`text-lg font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 opacity-0 animate-fade-in-up">
            Our <span className="gradient-text italic">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl group opacity-0 animate-fade-in-up ${
                  darkMode
                    ? 'bg-gray-900 border-2 border-gray-800 hover:border-[#0ABAB5]/50'
                    : 'bg-white border-2 border-gray-200 hover:border-[#0ABAB5]/30'
                }`}
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-[#0ABAB5] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-[#ADEED9]/30'
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-950' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 opacity-0 animate-fade-in-up">
            Meet Our <span className="gradient-text italic">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl group opacity-0 animate-fade-in-up ${
                  darkMode
                    ? 'bg-gray-900 border-2 border-gray-800'
                    : 'bg-white border-2 border-gray-200'
                }`}
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div className="text-6xl text-center py-8 bg-gradient-to-r from-[#ADEED9]/30 to-[#56DFCF]/20 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                    darkMode ? 'text-[#56DFCF]' : 'text-[#0ABAB5]'
                  }`}>{member.role}</p>
                  <p className={`text-sm mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{member.experience} experience</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    darkMode
                      ? 'bg-gray-800 text-[#56DFCF]'
                      : 'bg-[#ADEED9]/30 text-[#0ABAB5]'
                  }`}>
                    {member.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 opacity-0 animate-fade-in-up">
            Our <span className="gradient-text italic">Achievements</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0ABAB5] to-[#56DFCF]"></div>
              
              <div className="space-y-8">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className={`${idx % 2 === 0 ? 'lg:text-right lg:pr-1/2' : 'lg:pl-1/2'} opacity-0 animate-fade-in-up`}
                    style={{
                      animationDelay: `${idx * 0.1}s`
                    }}
                  >
                    <div className={`mx-auto lg:mx-0 rounded-3xl p-8 max-w-md transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                      darkMode
                        ? 'bg-gray-900 border-2 border-gray-800'
                        : 'bg-white border-2 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl font-bold gradient-text">{achievement.year}</div>
                        <Star className="h-6 w-6 text-[#0ABAB5]" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className={`transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 className="font-serif text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
            Join Our Growing Family
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
            Experience the difference that passionate, expert gardeners can make
          </p>
          <Link
            to="/contacts"
            className="inline-block px-8 py-4 bg-white text-[#0ABAB5] rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 opacity-0 animate-fade-in-up delay-200"
          >
            Get Started Today
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