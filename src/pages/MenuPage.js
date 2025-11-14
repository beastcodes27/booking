import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuPage = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData, selectedMeal);
  };

  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
          onClick={() => handleSelectMeal('Meal 1')}
        >
          <img className="w-full h-56 object-cover" src="/images/meal1.jpg" alt="Meal 1" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Meal 1</h2>
            <p className="text-gray-400">A delicious description of Meal 1.</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
          onClick={() => handleSelectMeal('Meal 2')}
        >
          <img className="w-full h-56 object-cover" src="/images/meal2.jpg" alt="Meal 2" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Meal 2</h2>
            <p className="text-gray-400">A delicious description of Meal 2.</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
          onClick={() => handleSelectMeal('Meal 3')}
        >
          <img className="w-full h-56 object-cover" src="/images/meal3.jpg" alt="Meal 3" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Meal 3</h2>
            <p className="text-gray-400">A delicious description of Meal 3.</p>
          </div>
        </motion.div>
      </div>

      {selectedMeal && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-4">Book a Table for {selectedMeal}</h2>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-2 rounded bg-gray-800 text-white"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full p-2 rounded bg-gray-800 text-white"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="date" className="block text-gray-400 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-400 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="guests" className="block text-gray-400 mb-2">Number of Guests</label>
              <input
                type="number"
                name="guests"
                id="guests"
                min="1"
                className="w-full p-2 rounded bg-gray-800 text-white"
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
              Book Now
            </motion.button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MenuPage;