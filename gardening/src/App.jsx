import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState, useContext } from 'react';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/contacts';
import Services from './components/Services/services';
import About from './components/About/about';

// Create Dark Mode Context
const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  // FIXED: Remove localStorage completely
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;