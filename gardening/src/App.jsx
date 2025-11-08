import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={
          <div className="min-h-screen pt-32 px-4 bg-gradient-to-br from-[#ADEED9]/20 to-white">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-[#0ABAB5] to-[#56DFCF] bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-gray-600 text-xl mt-4">Coming Soon...</p>
            </div>
          </div>
        } />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;