import { useEffect } from 'react'; // Optional for animations

const Mission = ({ id }) => {
  // Optional: Fade-in on mount/scroll (expand with IntersectionObserver later)
  useEffect(() => {
    // Simple timeout for demo; replace with scroll observer
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('#mission .bg-white');
      cards.forEach((card, index) => {
        setTimeout(() => card.classList.add('opacity-100', 'translate-y-0'), index * 200);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={id} className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Mission & Vision</h2>
        <p className="text-gray-600 mb-12">Our commitment to sustainability and community impact</p>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 translate-y-4">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Mission</h3>
            <blockquote className="text-lg text-gray-700 italic border-l-4 border-green-500 pl-4">
              "To make recycling simple, safe, and impactful for every household and business."
            </blockquote>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 translate-y-4">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Vision</h3>
            <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
              "A cleaner, greener Bangladesh where waste becomes a resource for all."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;