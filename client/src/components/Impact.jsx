import { useEffect } from 'react';

const Impact = ({ id }) => {
  // Optional: Animate metrics on view (e.g., count-up, but static for now)
  useEffect(() => {
    // Add entrance animation similar to Mission
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('#traction .hover-lift');
      cards.forEach((card, index) => {
        setTimeout(() => card.classList.add('opacity-100', 'translate-y-0'), index * 150);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={id} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact So Far</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From small beginnings to meaningful change – here's how we're making a difference in recycling across communities.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Recycled Materials */}
          <div className="text-center p-6 bg-green-50 hover-lift rounded-2xl border-2 border-gray-200 opacity-0 translate-y-4">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Recycled Materials</h3>
            <p className="text-2xl font-bold text-green-600">50+ Kgs</p>
          </div>

          {/* Households Served */}
          <div className="text-center p-6 bg-green-50 hover-lift rounded-2xl border-2 border-gray-200 opacity-0 translate-y-4">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Households Served</h3>
            <p className="text-2xl font-bold text-blue-600">15+ active users</p>
          </div>

          {/* Institutional Partnerships */}
          <div className="text-center p-6 bg-green-50 hover-lift rounded-2xl border-2 border-gray-200 opacity-0 translate-y-4">
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Institutional Partnerships</h3>
            <p className="text-2xl font-bold text-purple-600">Uttara University</p>
            <p className="text-sm text-gray-600 mt-1">Reaching 12,000+ students and staff</p>
          </div>

          {/* Events Covered */}
          <div className="text-center p-6 bg-green-50 hover-lift rounded-2xl border-2 border-gray-200 opacity-0 translate-y-4">
            <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Events Covered</h3>
            <p className="text-2xl font-bold text-indigo-600">3+ community & corporate</p>
            <p className="text-sm text-gray-600 mt-1">recycling drives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;