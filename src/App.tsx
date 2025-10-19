import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ServiceDetail } from './pages/ServiceDetail';
import { Anchor, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Agence Glody</h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1">
              <Link to="/" className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all font-medium">Accueil</Link>
              <Link to="/services" className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all font-medium">Services</Link>
              <Link to="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all font-medium">À Propos</Link>
              <Link to="/contact" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg hover:scale-105 transition-all font-medium">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden border-t border-gray-200 bg-white">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                <Link
                  to="/"
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  to="/services"
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/10 transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  À Propos
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-center hover:shadow-lg transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-12 md:mt-20">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Anchor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Agence Glody</h3>
                </div>
                <p className="text-slate-400 text-sm">Votre partenaire de confiance pour un dédouanement rapide et conforme.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-primary">Navigation</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors">Accueil</Link></li>
                  <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Services</Link></li>
                  <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors">À Propos</Link></li>
                  <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-secondary">Services</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>Dédouanement Import/Export</li>
                  <li>Conseil en Réglementation</li>
                  <li>Logistique & Transport</li>
                  <li>Transit International</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-accent">Contact</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+33 1 23 45 67 89</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-4 h-4 text-secondary" />
                    <span>contact@agence-glody.fr</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-accent mt-1" />
                    <span>123 Rue du Commerce<br />75001 Paris, France</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-6 text-center">
              <p className="text-slate-400 text-sm">&copy; 2025 Agence en Douane Glody. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
