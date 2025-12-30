import { useEffect } from 'react';

const Team = ({ id }) => {
  const teamMembers = [
    {
      name: 'Anik Mistry',
      role: 'Founder & CEO',
      bio: 'Passionate about pet welfare and sustainable solutions. Leading PETman to new heights.',
      image: '/assets/anik.jpg' // Add placeholder or actual path from public/assets/
    },
    {
      name: 'Jane Doe',
      role: 'Head of Operations',
      bio: 'Expert in logistics and care coordination. Ensures every pet gets the best service.',
      image: '/assets/jane.jpg'
    },
    {
      name: 'John Smith',
      role: 'Veterinary Advisor',
      bio: 'Certified vet with 10+ years experience. Guides our health and wellness programs.',
      image: '/assets/john.jpg'
    },
    // Add more from original HTML if present
  ];

  useEffect(() => {
    // Staggered animation for team cards
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(`#${id} .team-card`);
      cards.forEach((card, index) => {
        setTimeout(() => card.classList.add('opacity-100', 'translate-y-0'), index * 200);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <section id={id} className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Dedicated Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate professionals behind PETman, committed to your pet's happiness and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 opacity-0 translate-y-4 hover-lift"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = '/assets/placeholder-pet-team.jpg'; }} // Fallback
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;