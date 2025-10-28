import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/contacts';

function Layout({ children }) {
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

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-lime-600 bg-clip-text text-transparent">
                  The Garden Company
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative font-medium transition-all duration-300 group ${
                      location.pathname === item.path
                        ? 'text-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-emerald-100 rounded-b-2xl">
                <div className="p-6 space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-green-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50'
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

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-green-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">
                The Garden Company
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Professional garden maintenance and landscaping services creating beautiful outdoor spaces since 2008.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Services</h4>
              <ul className="space-y-2">
                {["Lawn Care", "Plant Maintenance", "Soil & Fertilization", "Irrigation", "Garden Cleaning"].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                      {service}
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
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/25"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<div className="min-h-screen pt-32 px-4"><div className="container mx-auto text-center"><h1 className="text-4xl font-bold text-gray-900">About Us Page</h1><p className="text-gray-600 mt-4">Coming Soon...</p></div></div>} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;