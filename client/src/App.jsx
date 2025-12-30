import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Team from './components/Team';
import WhyChoose from './components/WhyChoose';
import Shop from './components/Shop';
import Contact from './components/Contact';
// Future routes (commented; add as needed)
import Auth from './components/Auth'; // For /auth (login/signup)
import Dashboard from './components/Dashboard'; // For /dashboard

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // For scroll-to-section on route change

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    // Auto-scroll to section on route change (e.g., /mission -> #mission)
    if (location.pathname !== '/') {
      const sectionId = location.pathname.slice(1); // e.g., 'mission'
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Header height
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isLoggedIn={isLoggedIn} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        onLogout={handleLogout}
      />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/traction" element={<Impact />} /> {/* Original 'traction' section */}
          <Route path="/team" element={<Team />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn} />} />
          {/* Nested routes under / for full-page sections; use <Outlet> in a layout if needed */}
          {/* Future: <Route path="/auth" element={<Auth onLogin={handleLogin} />} /> */}
          {/* Future: <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<Hero />} /> {/* Fallback to home */}
        </Routes>
      </main>
    </div>
  );
}

export default App;