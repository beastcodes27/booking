import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = [
    { name: 'Baraka Kibiki', role: 'Head Chef', bio: '10 years of culinary experience', img: '/images/worker1.jpg' },
    { name: 'Galous Mgaya', role: 'Sous Chef', bio: 'Specializes in African fusion cuisine', img: '/images/worker2.jpg' },
    { name: 'Frank Andrew', role: 'Manager', bio: 'Ensures smooth operations and service', img: '/images/worker3.jpg' },
    { name: 'Elliah Hango', role: 'Pastry Chef', bio: 'Creates unique African-inspired desserts', img: '/images/worker4.jpg' },
  ];

  return (
    <div className="container mx-auto px-5 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
        <p className="text-lg text-gray-400 mt-2">Founded in 2024 by IMANI IBRAHIM (Beastcodes), we aim to bring authentic African flavors to Dar es Salaam.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400">To provide high-quality, flavorful African dishes that bring people together and celebrate local culture.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-400">To become the leading destination in Dar es Salaam for authentic African cuisine and unforgettable dining experiences.</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Quality</li>
          <li>Customer Service</li>
          <li>Cleanliness</li>
          <li>Creativity</li>
          <li>Community Engagement</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg text-center p-6"
            >
              <img className="w-24 h-24 rounded-full mx-auto mb-4" src={member.img} alt={member.name} />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
              <p className="text-sm mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
