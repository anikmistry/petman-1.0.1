import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, mobileMenuOpen, setMobileMenuOpen, onLogout }) => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (e, href, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      // Internal scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    } else {
      // Router nav (future routes)
      // window.location.href = href; // Or use useNavigate
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, '#home', 'home')}>
            <img src="/assets/petmanlogo.png" alt="PETman Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-green-600">PETman</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-green-600 transition font-bold ${activeSection === 'home' ? 'text-green-600' : ''}`}
              onClick={(e) => handleNavClick(e, '#home', 'home')}
            >
              Home
            </Link>
            <Link 
              to="/mission" 
              className={`text-gray-700 hover:text-green-600 transition font-bold ${activeSection === 'mission' ? 'text-green-600' : ''}`}
              onClick={(e) => handleNavClick(e, '#mission', 'mission')}
            >
              Mission
            </Link>
            <Link 
              to="/traction" 
              className={`text-gray-700 hover:text-green-600 transition font-bold ${activeSection === 'traction' ? 'text-green-600' : ''}`}
              onClick={(e) => handleNavClick(e, '#traction', 'traction')}
            >
              Traction
            </Link>
            <Link 
              to="/team" 
              className={`text-gray-700 hover:text-green-600 transition font-bold ${activeSection === 'team' ? 'text-green-600' : ''}`}
              onClick={(e) => handleNavClick(e, '#team', 'team')}
            >
              Our Team
            </Link>
            <Link 
              to="/shop" 
              className={`text-gray-700 hover:text-green-600 transition font-bold ${activeSection === 'shop' ? 'text-green-600' : ''}`}
              onClick={(e) => handleNavClick(e, '#shop', 'shop')}
            >
              Shop
            </Link>
            {isLoggedIn && (
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-green-600 transition font-bold"
                onClick={onLogout} // Update to real nav later
              >
                Dashboard
              </Link>
            )}
          </nav>
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden p-2 rounded-lg border border-gray-300"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} h-6 w-6 text-gray-700`}></i>
          </button>
        </div>
      </div>
      {/* Mobile Menu - same updates with Link */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-gray-50">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link to="/" className="text-gray-700 py-2 font-bold" onClick={(e) => handleNavClick(e, '#home', 'home')}>Home</Link>
            <Link to="/mission" className="text-gray-700 py-2 font-bold" onClick={(e) => handleNavClick(e, '#mission', 'mission')}>Mission</Link>
            <Link to="/traction" className="text-gray-700 py-2 font-bold" onClick={(e) => handleNavClick(e, '#traction', 'traction')}>Traction</Link>
            <Link to="/team" className="text-gray-700 py-2 font-bold" onClick={(e) => handleNavClick(e, '#team', 'team')}>Our Team</Link>
            <Link to="/shop" className="text-gray-700 py-2 font-bold" onClick={(e) => handleNavClick(e, '#shop', 'shop')}>Shop</Link>
            {isLoggedIn && <Link to="/dashboard" className="text-gray-700 py-2 font-bold" onClick={onLogout}>Dashboard</Link>}
            <Link to="/contact" className="mt-2 bg-gradient-green text-white px-6 py-2 rounded-lg text-center" onClick={(e) => handleNavClick(e, '#contact', 'contact')}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;