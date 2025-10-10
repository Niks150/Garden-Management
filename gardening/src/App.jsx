"use client";
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  Star, 
  ChevronRight,
  Quote,
  Sprout,
  Trees,
  Flower2,
  Leaf,
  ArrowUp
} from "lucide-react";

export default function EnhancedGardenWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal and form state
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Handler for quote form submission
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Optionally, reset after a delay
    setTimeout(() => {
      setFormSubmitted(false);
      setShowQuoteModal(false);
    }, 2000);
  };

  // Handler for feedback form submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    // Optionally, reset after a delay
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setShowFeedbackModal(false);
    }, 2000);
  };

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

  const services = [
    {
      id: "lawn",
      title: "Lawn Care & Maintenance",
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      description: "Professional lawn maintenance including mowing, edging, and fertilization to keep your grass healthy and vibrant."
    },
    {
      id: "planting",
      title: "Plant Maintenance",
      icon: <Sprout className="h-8 w-8 text-emerald-600" />,
      description: "Expert planting services for flowers, shrubs, trees, and seasonal plants to enhance your garden's beauty."
    },
    {
      id: "soil",
      title: "Soil & Fertilization Services",
      icon: <Flower2 className="h-8 w-8 text-emerald-600" />,
      description: "Comprehensive soil testing, amendments, and fertilization programs to ensure optimal plant health."
    },
    {
      id: "irrigation",
      title: "Irrigation Management",
      icon: <Trees className="h-8 w-8 text-emerald-600" />,
      description: "Professional irrigation system installation, maintenance, and water management solutions."
    },
    {
      id: "garden-cleaning",
      title: "Garden Cleaning & Upkeep",
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      description: "Regular garden upkeep including weeding, pruning, and seasonal cleanups to maintain your garden's health."
    },
    {
      id: "vertical-wall",
      title: "Vertical Wall Maintenance",
      icon: <Trees className="h-8 w-8 text-emerald-600" />,
      description: "Specialized care for living walls and vertical gardens, ensuring lush and healthy growth."
    },
    {
      id: "supplies",
      title: "Plants & Garden Supplies",
      icon: <Sprout className="h-8 w-8 text-emerald-600" />,
      description: "Quality plants, tools, and supplies for all your gardening needs."
    },
    {
      id: "specialized",
      title: "Specialized Services",
      icon: <Star className="h-8 w-8 text-emerald-600" />,
      description: "Custom landscaping, design consultation, and unique garden solutions tailored to your needs."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The Garden Company transformed my backyard into a beautiful retreat. Their attention to detail and expertise exceeded my expectations!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      content: "We've used The Garden Company for our commercial properties for over 3 years. Reliable, professional, and always exceptional results.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Homeowner",
      content: "The seasonal maintenance package keeps my garden looking perfect year-round. Highly recommend their services!",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen relative">
      {/* Enhanced Header with Blur Effect */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo with Animation */}
            <div className="flex items-center group">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-lime-600 bg-clip-text text-transparent">
                  The Garden Company
                </h1>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="relative text-gray-700 font-medium transition-all duration-300 hover:text-emerald-600 group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-6 py-2 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group">
                <span className="relative z-10">Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-emerald-100 rounded-b-2xl animate-in slide-in-from-top-2 duration-300">
                <div className="p-6 space-y-3">
                  {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                    <a 
                      key={item}
                      href={`#${item.toLowerCase()}`} 
                      className="block px-4 py-3 text-gray-700 font-medium hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <div className="pt-3 border-t border-emerald-100">
                    <button 
                      onClick={() => {
                        setShowQuoteModal(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Free Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

       {/* Enhanced Hero Section with Parallax Effect */}
<section id="home" className="relative min-h-screen flex items-center overflow-hidden">
  {/* Animated Background */}
  <div 
    className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50"
    style={{
      transform: `translateY(${scrollY * 0.5}px)`
    }}
  ></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
      <div className="flex flex-col justify-center space-y-8 animate-in slide-in-from-left-8 duration-1000">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
          Transform Your Indoor and
          <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
            Outdoor Spaces
          </span>
          with Expert Garden Care
        </h1>
        <p className="text-xl text-gray-600 max-w-lg">
          Professional and personalized garden maintenance and landscaping services to create and maintain beautiful spaces that thrive year-round.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {/* Primary CTA - Get Free Quote */}
          <button 
            onClick={() => setShowQuoteModal(true)}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-95">
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Get Free Quote</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-700 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </button>

          {/* Secondary CTA - View Services */}
          <button 
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-white border-2 border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95">
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="group-hover:text-emerald-600 transition-colors duration-200">View Services</span>
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/9157482008?text=Hello%21%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20gardening%20services.%20Could%20you%20please%20share%20details%20about%20the%20packages%20you%20offer%2C%20along%20with%20pricing%20and%20availability%3F%20I%20look%20forward%20to%20bringing%20more%20beauty%20and%20greenery%20to%20my%20space%20with%20your%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-95">
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Chat on WhatsApp</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center animate-in slide-in-from-right-8 duration-1000 delay-300">
        <div className="relative group">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/529cbae5-5e96-4e2f-a5d2-871b38c40481.png" 
            alt="Beautiful well-maintained garden with lush green plants and colorful flowers in a residential setting" 
            className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:shadow-emerald-500/20"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A one-stop solution for all your garden needs, you ask we provide!</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 animate-in slide-in-from-bottom-8 duration-1000"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-green-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="inline-flex items-center justify-center text-emerald-600 hover:text-emerald-700 font-medium transition-all duration-300 group-hover:scale-110">
                    Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="animate-in slide-in-from-left-8 duration-1000">
              <div className="relative group">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a828416e-b852-403f-85a4-41c436ab9735.png" 
                  alt="Team of professional gardeners working together on a landscape project with tools and plants" 
                  className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center animate-in slide-in-from-right-8 duration-1000 delay-300">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">About The Garden Company</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mb-6"></div>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                We are a team of experts with over 15 years of experience, transforming outdoor spaces across the community. 
                Our team of certified horticulturists and landscape professionals is dedicated to creating and maintaining 
                beautiful, sustainable gardens that enhance your property's value and your quality of life.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, text: "Expert Team" },
                  { icon: Shield, text: "Fully Insured" },
                  { icon: Clock, text: "Timely Service" },
                  { icon: Star, text: "5-Star Rated" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center group hover:bg-white/50 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <item.icon className="h-6 w-6 text-emerald-600 mr-3 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-600 group-hover:text-emerald-700 font-medium transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">See the beautiful transformations we've created for our clients</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff5f946f-8a80-4648-83d3-8bf0f993d189.png",
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/33b367ca-30f5-4c51-a9f4-5bb9602c7c61.png",
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5898733-cc97-439c-95f5-6b305c25d185.png",
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6abc0f02-cfa2-4358-836b-3a6965687bb5.png",
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d469b411-80f5-4aa2-9f94-281b80d1700d.png",
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c95feb4-551d-4697-9e9a-43ab9d7a92f9.png"
            ].map((src, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg animate-in slide-in-from-bottom-8 duration-1000"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <img 
                  src={src}
                  alt={`Garden transformation ${index + 1}`}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-semibold text-lg mb-2">Garden Transformation</h3>
                  <p className="text-sm opacity-90">Professional landscaping and maintenance</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Hear from our satisfied customers about their experience with The Garden Company</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 animate-in slide-in-from-bottom-8 duration-1000"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500 scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-emerald-600 mb-4 transition-transform duration-500 group-hover:scale-110" />
                <blockquote className="mb-6 text-gray-600 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="animate-in slide-in-from-left-8 duration-1000">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Get In Touch</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your outdoor space? Contact us for a free consultation and quote.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: Phone, text: "(555) 123-4567" },
                  { icon: Mail, text: "info@thegardencompany.com" },
                  { icon: MapPin, text: "123 Garden Way, Greenville, CA 90210" },
                  { icon: Clock, text: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group hover:bg-emerald-50 p-3 rounded-lg transition-all duration-300">
                    <item.icon className="h-6 w-6 text-emerald-600 mr-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-600 group-hover:text-emerald-700 transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="relative group">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81365444-ff58-40b1-8549-98424314fe30.png" 
                  alt="Contact our garden maintenance team for professional landscaping and garden care services" 
                  className="rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="animate-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request a Free Quote</h3>
                <form className="space-y-6">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email Address", type: "email", placeholder: "your.email@example.com" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 123-4567" }
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                    >
                      <option value="">Select a service</option>
                      <option value="lawn">Lawn Care & Maintenance</option>
                      <option value="planting">Plant Maintenance</option>
                      <option value="soil">Soil & Fertilization Services</option>
                      <option value="irrigation">Irrigation Management</option>
                      <option value="cleaning">Garden Cleaning & Upkeep</option>
                      <option value="vertical">Vertical Wall Maintenance</option>
                      <option value="supplies">Plants & Garden Supplies</option>
                      <option value="specialized">Specialized Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-400"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    <span className="relative z-10">Get Free Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-green-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2 animate-in slide-in-from-left-8 duration-1000">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">
                The Garden Company
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Professional garden maintenance and landscaping services creating beautiful outdoor spaces since 2008.
              </p>
              <div className="flex space-x-4">
                {[Phone, Mail, MapPin].map((Icon, index) => (
                  <div 
                    key={index}
                    className="group h-10 w-10 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50 cursor-pointer"
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-200">
              <h4 className="font-semibold mb-4 text-emerald-400">Services</h4>
              <ul className="space-y-2">
                {["Lawn Care & Maintenance", "Plant Maintenance", "Soil & Fertilization", "Irrigation Management", "Garden Cleaning"].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-300">
              <h4 className="font-semibold mb-4 text-emerald-400">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Gallery", "Testimonials", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-emerald-800/50 pt-8 sm:flex-row">
            <p className="text-sm text-gray-300">
              © 2024 The Garden Company. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <a href="#" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/25 animate-in slide-in-from-bottom-4"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Feedback Button */}
      <button
        onClick={() => setShowFeedbackModal(true)}
        className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm font-medium"
      >
        💬 Feedback
      </button>

      {/* Free Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Quick Quote Request</h3>
              <button
                onClick={() => setShowQuoteModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quote Request Sent!</h4>
                <p className="text-gray-600">We'll contact you within 2 hours with your personalized quote.</p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
                <select
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="">Select Service *</option>
                  <option value="lawn">Lawn Care & Maintenance</option>
                  <option value="planting">Plant Maintenance</option>
                  <option value="soil">Soil & Fertilization Services</option>
                  <option value="irrigation">Irrigation Management</option>
                  <option value="cleaning">Garden Cleaning & Upkeep</option>
                  <option value="vertical">Vertical Wall Maintenance</option>
                  <option value="supplies">Plants & Garden Supplies</option>
                  <option value="specialized">Specialized Services</option>
                </select>
                <textarea
                  placeholder="Brief description of your project..."
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                ></textarea>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2 text-white font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get My Free Quote
                </button>
                <p className="text-xs text-gray-500 text-center">
                  * We'll respond within 2 hours during business hours
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Share Your Feedback</h3>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {feedbackSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">Your feedback helps us improve our services. We appreciate you taking the time!</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How was your experience?</label>
                  <div className="flex justify-center space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="text-2xl hover:scale-110 transition-transform duration-200 focus:outline-none"
                        onClick={(e) => {
                          e.preventDefault();
                          const stars = document.querySelectorAll('.rating-star');
                          stars.forEach((star, index) => {
                            star.textContent = index < rating ? '⭐' : '☆';
                          });
                        }}
                      >
                        <span className="rating-star">☆</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                
                <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Feedback Category</option>
                  <option value="website">Website Experience</option>
                  <option value="service">Service Quality</option>
                  <option value="support">Customer Support</option>
                  <option value="pricing">Pricing</option>
                  <option value="other">Other</option>
                </select>
                
                <textarea
                  placeholder="Tell us about your experience, suggestions, or any issues you encountered..."
                  rows={4}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white font-semibold hover:scale-105 transition-all duration-300"
                >
                  Submit Feedback
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  Your feedback is valuable and helps us serve you better
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #059669, #16a34a);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #047857, #15803d);
        }
      `}</style>
    </main>
  );
}