import { useState, useEffect } from "react";
import { 
  Sprout,
  Flower2,
  Leaf,
  Star,
  ChevronRight,
  Users,
  Award,
  Heart,
  Menu,
  Briefcase,
  Droplet,
  Bug,
  Palette,
  ArrowUp,
  X,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const heroImage = "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1920";
  const aboutImage = "https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1920";

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
      id: 1,
      title: "Plant Maintenance",
      icon: <Sprout className="h-6 w-6 text-emerald-700" />,
      items: [
        "Trimming, pruning, and shaping plants",
        "Health checks and disease prevention",
        "Indoor plant care",
        "Re-potting and soil replacement",
        "Fertilizer and nutrient scheduling",
        "Plant staking and support installation",
        "Pest and weed fungus treatment (eco-friendly options)",
        "Growth monitoring and record keeping"
      ],
      color: "bg-emerald-50"
    },
    {
      id: 2,
      title: "Lawn Care & Maintenance",
      icon: <Leaf className="h-6 w-6 text-emerald-700" />,
      items: [
        "Regular mowing and edging",
        "Fertilization and soil improvement",
        "Pest and weed control",
        "Lawn aeration",
        "Top dressing and leveling",
        "Grass re-seeding and lawn rejuvenation",
        "Irrigation adjustment for lawns",
        "Disease and fungus management",
        "Seasonal lawn restoration (summer/winter prep)",
        "Organic lawn treatment options"
      ],
      color: "bg-green-50"
    },
    {
      id: 3,
      title: "Soil & Fertilization Services",
      icon: <Flower2 className="h-6 w-6 text-emerald-700" />,
      items: [
        "Soil testing and improvement",
        "Organic and chemical fertilization",
        "Composting and mulching",
        "pH correction and soil balancing",
        "Application of natural soil boosters",
        "Vermicomposting setup and maintenance",
        "Customized nutrient plans for different plant types",
        "Topsoil renewal and enrichment",
        "Preventive soil disease management",
        "Green waste composting solutions"
      ],
      color: "bg-teal-50"
    },
    {
      id: 4,
      title: "Irrigation Management",
      icon: <Droplet className="h-6 w-6 text-emerald-700" />,
      items: [
        "Watering schedules for optimal growth",
        "Drip irrigation installation and maintenance",
        "Moisture monitoring and water conservation tips",
        "Sprinkler system installation",
        "Automated irrigation setup and programming",
        "Leak detection and water flow checks",
        "Irrigation layout planning for new gardens"
      ],
      color: "bg-cyan-50"
    },
    {
      id: 5,
      title: "Garden Cleaning & Upkeep",
      icon: <Palette className="h-6 w-6 text-emerald-700" />,
      items: [
        "Removal of fallen leaves, weeds, and debris",
        "Seasonal garden cleanup",
        "Maintaining flower bed and shrubs",
        "Composting of green waste",
        "Pressure washing of garden paths and hardscapes",
        "Dead plant removal and disposal",
        "Cleaning garden furniture and ornaments",
        "Regular inspection for snakes or other pests (if applicable)",
        "Cobweb removal and outdoor lighting cleanup"
      ],
      color: "bg-lime-50"
    },
    {
      id: 6,
      title: "Landscaping Assistance",
      subtitle: "(Optional for Future Expansion)",
      icon: <Bug className="h-6 w-6 text-emerald-700" />,
      items: [
        "Garden design planning",
        "Plant selection and placement advice",
        "Hardscape support (paths, borders, planters)",
        "Landscape lighting installation and planning",
        "Artificial turf installation",
        "Water features (fountains, ponds, mini waterfalls)",
        "Rock garden and zen garden setup",
        "Vertical garden design and maintenance",
        "Outdoor seating or patio garden ideas",
        "Landscape maintenance"
      ],
      color: "bg-amber-50"
    },
    {
      id: 7,
      title: "Commercial & Industrial Services",
      icon: <Briefcase className="h-6 w-6 text-emerald-700" />,
      items: [
        "Landscape Care – Expert upkeep of lawns, trees, and plants for a clean, green look",
        "Irrigation Systems – Efficient watering for healthy, thriving landscapes",
        "Plant Health Care – Regular fertilization and pest control for strong growth",
        "Outdoor Cleaning – Neat pathways and well-maintained surroundings",
        "Indoor Plants/care – Fresh, vibrant plants for offices and interiors",
        "Annual Maintenance Programs – Customized contracts for reliable, worry-free garden upkeep"
      ],
      color: "bg-emerald-50"
    },
    {
      id: 8,
      title: "Specialized Services",
      subtitle: "(Optional / Premium Add-ons)",
      icon: <Star className="h-6 w-6 text-emerald-700" />,
      items: [
        "Indoor office plants care",
        "Balcony and terrace gardens",
        "Community garden maintenance (societies/colonies)",
        "Nursery plant sourcing and delivery",
        "Organic kitchen garden setup and upkeep",
        "Seasonal decoration (Christmas, Diwali, etc.) using plants"
      ],
      color: "bg-teal-50"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
          animation: fadeIn 1s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        
        .text-base { font-size: 16px; }
        .text-sm { font-size: 14px; }
        .text-xs { font-size: 12px; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('${heroImage}')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-emerald-100 text-sm font-medium tracking-wide opacity-0 animate-fade-in delay-100">
              Premium Garden Services
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-medium text-white mb-6 leading-tight italic opacity-0 animate-fade-in-up delay-200">
              Transform Your Indoor and Outdoor Spaces
            </h1>
            
            <p className="text-base text-emerald-100/90 mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-300">
              Professional and personalized garden maintenance for your indoor and outdoor green spaces — from homes to commercial properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-400">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="group px-8 py-3 bg-white text-emerald-900 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-emerald-50 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/9016372258"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-12 text-emerald-200/60 text-xs tracking-widest opacity-0 animate-fade-in delay-500">
              (Scroll down)
            </div>
          </div>
        </div>
      </section>

      {/* TRANSITION SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-4 tracking-widest">(01 Services)</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-6 italic">
              Our Services
            </h2>
            <p className="text-base text-gray-600 italic">
              A one-stop solution for all your garden needs, you ask we provide!
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`group ${service.color} rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300`}
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {service.id}. {service.title}
                </h3>
                
                {service.subtitle && (
                  <p className="text-xs text-gray-500 mb-3 italic">{service.subtitle}</p>
                )}
                
                <ul className="space-y-1.5">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="w-1 h-1 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION WITH IMAGE */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div 
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${aboutImage}')`,
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-xl">
            <p className="text-sm text-gray-500 mb-4 tracking-widest">(02 About)</p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-6 italic">
              About Us
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              At The Garden Company, we provide A-to-Z garden care services, dedicated to creating and maintaining beautiful, healthy, and sustainable green spaces. Our passionate team offers complete services for— lawns, vertical walls, garden maintenance, plant health, and designer gardens too. We also have custom packages for small home gardens to large commercial properties. With a focus on quality, reliability, and precision, we ensure your garden remains vibrant, thriving, and perfectly cared for all year round.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                <Users className="h-5 w-5 text-emerald-700" />
                <span className="text-xs text-gray-700 font-medium">Expert Team</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                <Clock className="h-5 w-5 text-emerald-700" />
                <span className="text-xs text-gray-700 font-medium">24/5 Support</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                <Clock className="h-5 w-5 text-emerald-700" />
                <span className="text-xs text-gray-700 font-medium">Timely Service</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                <Star className="h-5 w-5 text-emerald-700" />
                <span className="text-xs text-gray-700 font-medium">Quality Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-2xl text-gray-900 italic">
                Request a Free Quote
              </h3>
              <button 
                onClick={() => setShowQuoteModal(false)} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-900" />
              </button>
            </div>
            
            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Success!</h4>
                <p className="text-sm text-gray-600">We'll contact you within 2 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none" 
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none" 
                />
                
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none" 
                />
                
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none">
                  <option value="">Service interested in</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all outline-none" 
                />
                
                <button 
                  onClick={handleQuoteSubmit} 
                  className="w-full rounded-full bg-emerald-900 px-8 py-3 text-white font-semibold text-sm hover:bg-emerald-800 transition-colors"
                >
                  Get Free Quote
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-900 text-white rounded-full shadow-lg hover:bg-emerald-800 transition-colors flex items-center justify-center z-30"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </main>
  );
}