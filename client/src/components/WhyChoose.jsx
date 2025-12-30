import { useEffect } from 'react';

const WhyChoose = ({ id = 'why-choose' }) => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Compassionate Care',
      description: 'Our team treats every pet like family, providing personalized attention and love.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Certified Professionals',
      description: 'All caregivers are background-checked and trained in pet first aid and behavior.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Monitoring',
      description: 'Real-time updates via app, so you can check on your pet anytime, anywhere.'
    },
    // Add more if in original
  ];

  useEffect(() => {
    // Staggered animation for feature cards
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(`#${id} .feature-card`);
      cards.forEach((card, index) => {
        setTimeout(() => card.classList.add('opacity-100', 'scale-100'), index * 150);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <section id={id} className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PETman?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're more than a service – we're your partner in pet parenting, delivering peace of mind with every visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors duration-300 opacity-0 scale-95 hover-lift"
            >
              <div className="mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;