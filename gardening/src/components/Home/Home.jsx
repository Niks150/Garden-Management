import { useState, useEffect } from "react";
import { 
  Sprout, Flower2, Leaf, Star, Users, Briefcase, Droplet, Bug, 
  Palette, ArrowUp, X, Clock, CheckCircle, ArrowRight, Menu, 
  Phone, Mail, MapPin, Heart, Zap, Shield
} from "lucide-react";

// NAVBAR COMPONENT
function Navbar({ scrollY, isMenuOpen, setIsMenuOpen }) {
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'About Us', path: '#about' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrollY > 50 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-[#0ABAB5]/5' 
        : 'bg-white/50 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center group">
            <div className="transition-all duration-300 group-hover:scale-110">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] bg-clip-text text-transparent">
                🌿 The Garden Co.
              </h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="relative font-medium text-gray-700 hover:text-[#0ABAB5] transition-all duration-300 group text-sm md:text-base"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
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
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="block px-4 py-3 font-medium rounded-xl text-gray-700 hover:text-[#0ABAB5] hover:bg-[#ADEED9]/20 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animation: `fadeInUp 0.3s ease-out forwards`, animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// FOOTER COMPONENT
function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#0ABAB5]/90 to-[#56DFCF]/80 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[#ADEED9] bg-clip-text text-transparent">
              🌿 The Garden Co.
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming spaces into lush, thriving green sanctuaries since 2008.
            </p>
          </div>

          <div className="animate-fade-in-up delay-100">
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              {['Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ArrowRight size={14} className="text-[#56DFCF]" /> {item}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <div className="space-y-3">
              {['Plant Care', 'Lawn Maintenance', 'Irrigation', 'Landscaping'].map((item) => (
                <a key={item} href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  • {item}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up delay-300">
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+919016372258" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <Phone size={18} className="text-[#56DFCF]" /> +91 9016372258
              </a>
              <a href="mailto:contact@gardencorp.in" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <Mail size={18} className="text-[#56DFCF]" /> info@garden.in
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-[#56DFCF] mt-1 flex-shrink-0" /> 
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 The Garden Company. All rights reserved.</p>
            <div className="flex gap-6">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-[#56DFCF] transition-colors duration-300 text-sm font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// MAIN HOME COMPONENT
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Image URLs - Replace with your own images
  const heroImage = "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80";
  const aboutImage = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80";
  const service1 = "https://images.unsplash.com/photo-1535221228889-e49a49c95c01?w=800&q=80";
  const service2 = "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80";

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
      setShowQuoteModal(false);
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
    },
    {
      id: 5,
      title: "Garden Cleaning",
      icon: <Palette className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Keep your garden pristine",
      items: ["Leaf removal", "Weeding", "Debris cleanup", "Maintenance"],
      color: "bg-[#ADEED9]/30"
    },
    {
      id: 6,
      title: "Landscaping",
      icon: <Bug className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Design & transformation",
      items: ["Design planning", "Plant placement", "Hardscapes", "Water features"],
      color: "bg-[#56DFCF]/20"
    },
    {
      id: 7,
      title: "Commercial Services",
      icon: <Briefcase className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Professional enterprise solutions",
      items: ["Landscape care", "Irrigation systems", "Plant health", "Annual programs"],
      color: "bg-[#FFEDF3]"
    },
    {
      id: 8,
      title: "Specialized Services",
      icon: <Star className="h-6 w-6 text-[#0ABAB5]" />,
      desc: "Premium add-on services",
      items: ["Office plants", "Terrace gardens", "Kitchen gardens", "Seasonal decor"],
      color: "bg-[#ADEED9]/30"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * { font-family: 'Poppins', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(10, 186, 181, 0.3); } 50% { box-shadow: 0 0 40px rgba(10, 186, 181, 0.6); } }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        .glass-effect { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .gradient-text { background: linear-gradient(135deg, #0ABAB5 0%, #56DFCF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(10, 186, 181, 0.2); }

        .service-card { position: relative; overflow: hidden; transition: all 0.5s ease; }
        .service-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(10, 186, 181, 0.15), transparent); transition: left 0.6s ease; }
        .service-card:hover::before { left: 100%; }
        .service-card:hover { box-shadow: 0 30px 60px rgba(10, 186, 181, 0.15) !important; }

        .bg-pattern { background-image: repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0, rgba(255,255,255,.05) 10px, transparent 10px, transparent 20px); }
      `}</style>

      <Navbar scrollY={scrollY} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0ABAB5] via-[#56DFCF] to-[#ADEED9] pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('${heroImage}')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0ABAB5]/10 to-[#0ABAB5]/30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-6 py-2 glass-effect rounded-full text-gray-900 text-sm font-semibold tracking-wider opacity-0 animate-scale-in delay-100">
              ✨ Premium Garden Services
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight opacity-0 animate-fade-in-up delay-200">
              Transform Your <span className="italic text-white drop-shadow-lg">Green Spaces</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up delay-300">
              Professional and personalized garden maintenance for your indoor and outdoor green spaces — from homes to commercial properties.
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block px-6 py-2 bg-[#ADEED9]/30 rounded-full text-[#0ABAB5] text-sm font-semibold mb-4 animate-fade-in-up">
              What We Offer
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in-up delay-100">
              Our <span className="gradient-text italic">Services</span>
            </h2>
            <p className="text-lg text-gray-600 opacity-0 animate-fade-in-up delay-200">
              A one-stop solution for all your garden needs, you ask we provide!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card hover-lift ${service.color} rounded-3xl p-8 border-2 border-gray-200/50 hover:border-[#0ABAB5]/30 group cursor-pointer`}
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 font-medium">{service.desc}</p>
                
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2.5 group-hover:text-[#0ABAB5] transition-colors duration-300">
                      <CheckCircle size={16} className="text-[#0ABAB5] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div 
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('${aboutImage}')`,
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 animate-slide-in-left">
              <div className="inline-block px-6 py-2 bg-[#ADEED9]/30 rounded-full text-[#0ABAB5] text-sm font-semibold mb-6">
                About Us
              </div>
              
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Growing <span className="gradient-text italic">Beautiful Gardens</span> Since 2008
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At The Garden Company, we provide A-to-Z garden care services, dedicated to creating and maintaining beautiful, healthy, and sustainable green spaces. Our passionate team offers complete services for lawns, vertical walls, garden maintenance, plant health, and designer gardens.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We have custom packages for small home gardens to large commercial properties. With a focus on quality, reliability, and precision, we ensure your garden remains vibrant, thriving, and perfectly cared for all year round.
              </p>

              <button 
                onClick={() => setShowQuoteModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 opacity-0 animate-slide-in-right delay-300">
              {[
                { icon: <Users className="h-8 w-8" />, title: "Expert", subtitle: "Team" },
                { icon: <Zap className="h-8 w-8" />, title: "24/5", subtitle: "Support" },
                { icon: <Clock className="h-8 w-8" />, title: "Timely", subtitle: "Service" },
                { icon: <Shield className="h-8 w-8" />, title: "Quality", subtitle: "Service" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className={`group flex flex-col items-center gap-4 p-8 rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    idx % 2 === 0 
                      ? idx === 0 
                        ? 'bg-gradient-to-br from-[#ADEED9]/40 to-[#56DFCF]/20' 
                        : 'bg-gradient-to-br from-[#56DFCF]/30 to-[#ADEED9]/20'
                      : idx === 1
                        ? 'bg-gradient-to-br from-[#FFEDF3] to-[#FFEDF3]/50 mt-8'
                        : 'bg-gradient-to-br from-[#ADEED9]/40 to-[#56DFCF]/20 mt-8'
                  }`}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0ABAB5] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up">
            <div className="inline-block px-6 py-2 bg-[#ADEED9]/30 rounded-full text-[#0ABAB5] text-sm font-semibold mb-4">
              Get In Touch
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Transform Your <span className="gradient-text italic">Garden?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-100">
            {[
              { icon: <Phone className="h-6 w-6" />, title: "Call Us", text: "+91 9016372258", link: "tel:+919016372258" },
              { icon: <Mail className="h-6 w-6" />, title: "Email Us", text: "info@garden.co", link: "mailto:info@garden.co" },
              { icon: <MapPin className="h-6 w-6" />, title: "Visit Us", text: "Ahmedabad, Gujarat", link: "#" }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                className="group p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-[#0ABAB5] hover:shadow-2xl transition-all duration-300 text-center"
                style={{ animation: `fadeInUp 0.8s ease-out forwards`, animationDelay: `${idx * 0.1}s`, opacity: 0 }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#ADEED9]/30 to-[#56DFCF]/20 rounded-2xl flex items-center justify-center text-[#0ABAB5] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mb-4">
                  {contact.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 group-hover:text-[#0ABAB5] transition-colors duration-300">{contact.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 bg-gradient-to-br from-[#0ABAB5]/5 to-[#56DFCF]/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up">
            <div className="inline-block px-6 py-2 bg-[#ADEED9]/30 rounded-full text-[#0ABAB5] text-sm font-semibold mb-4">
              Testimonials
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our <span className="gradient-text italic">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Priya Patel", role: "Homeowner", text: "The Garden Company transformed my backyard into a paradise! Professional, timely, and absolutely stunning results.", stars: 5 },
              { name: "Rajesh Kumar", role: "Corporate Manager", text: "Their commercial services are impeccable. Our office garden looks fresh and vibrant every single day.", stars: 5 },
              { name: "Anjali Sharma", role: "Restaurant Owner", text: "Outstanding work! They designed and maintain our outdoor dining area beautifully. Highly recommended!", stars: 5 }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="group p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-[#0ABAB5] hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ animation: `fadeInUp 0.8s ease-out forwards`, animationDelay: `${idx * 0.1}s`, opacity: 0 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-[#0ABAB5]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0ABAB5] via-[#56DFCF] to-[#ADEED9]"></div>
        <div className="absolute inset-0 bg-pattern opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Your Dream Garden?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Get a free consultation today and let us help you transform your outdoor space into a thriving oasis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-base hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full animate-scale-in shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-3xl font-bold text-gray-900">Get Your Free Quote</h3>
              <button
                onClick={() => setShowQuoteModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {!formSubmitted ? (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleQuoteSubmit(); }}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 9016372258"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:outline-none transition-all duration-300">
                    <option>Select a service...</option>
                    <option>Plant Maintenance</option>
                    <option>Lawn Care</option>
                    <option>Landscaping</option>
                    <option>Commercial Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your garden..."
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0ABAB5] focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
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
                <div className="w-16 h-16 bg-[#ADEED9]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[#0ABAB5]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">We'll get back to you soon with your free quote.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-fade-in-up z-40 group animate-pulse-glow"
        >
          <ArrowUp size={24} className="group-hover:translate-y-1 transition-transform" />
        </button>
      )}

      <Footer />
    </div>
  );
}