import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For future redirects

const Hero = ({ onLogin, id }) => {
  const [showAccountCard, setShowAccountCard] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // For success/error msgs
  const navigate = useNavigate();

  useEffect(() => {
    // Fade-in animation on mount (replaces original setTimeout)
    const timer = setTimeout(() => setShowAccountCard(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' })); // Clear error
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage('');

    const endpoint = activeTab === 'login' ? '/auth/login' : '/auth/signup';
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await response.json();
      if (activeTab === 'login' && data.token) {
        onLogin(data.token); // Callback to App for state update
        setMessage('Login successful! Welcome back.');
        // Optional: navigate('/dashboard'); // Uncomment for Router redirect
      } else if (activeTab === 'signup') {
        setMessage('Signup successful! Please log in.');
        setActiveTab('login'); // Switch to login after signup
      }
    } catch (error) {
      setMessage(error.message);
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSchedulePickup = async (e) => {
    e.preventDefault();
    // Original has a simple alert; expand with form/modal later
    if (!formData.email) {
      setMessage('Please log in to schedule a pickup.');
      setShowAccountCard(true);
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/schedule-pickup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        body: JSON.stringify({ email: formData.email, date: new Date().toISOString().split('T')[0] }), // Example payload
      });
      if (response.ok) {
        setMessage('Pickup scheduled! We\'ll contact you soon.');
      } else {
        throw new Error('Failed to schedule');
      }
    } catch (error) {
      setMessage('Error scheduling pickup. Please try again.');
    }
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setFormData({ email: '', password: '' });
    setMessage('');
  };

  return (
    <section id={id} className="relative min-h-screen bg-gradient-green text-white overflow-hidden">
      {/* Background elements from original (e.g., particles if added) */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center min-h-screen py-20">
        {/* Main Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            PETman: Your Pet's Guardian Angel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-2xl mx-auto">
            We provide compassionate pet care services, ensuring your furry friends are safe, happy, and loved while you're away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowAccountCard(true)} 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover-lift transition"
            >
              Get Started
            </button>
            <button 
              onClick={handleSchedulePickup}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition"
            >
              Schedule Pickup
            </button>
          </div>
        </div>

        {/* Account Card - Animated Overlay */}
        <div className={`account-card fixed inset-0 flex items-center justify-center z-50 bg-black/50 ${showAccountCard ? 'enter' : ''}`}>
          <div className={`bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl relative ${showAccountCard ? 'enter' : ''}`}>
            <button 
              onClick={() => setShowAccountCard(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome to PETman</h2>
            
            {/* Tab Switcher */}
            <div className="flex border-b mb-6">
              <button 
                onClick={() => toggleTab('login')} 
                className={`flex-1 py-2 font-bold ${activeTab === 'login' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => toggleTab('signup')} 
                className={`flex-1 py-2 font-bold ${activeTab === 'signup' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={`form-anim ${showAccountCard ? 'show' : 'hide'}`}>
              {message && (
                <div className={`p-3 rounded mb-4 ${message.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {message}
                </div>
              )}
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-green-600`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-green-600`}
                  required
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-green text-white py-3 rounded-lg font-bold text-lg disabled:opacity-50"
              >
                {loading ? <i className="fas fa-spinner fa-spin mr-2"></i> : null}
                {activeTab === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
              {errors.general && <p className="text-red-500 text-sm mt-2 text-center">{errors.general}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;