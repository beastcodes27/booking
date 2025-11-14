import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthday: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.birthday) newErrors.birthday = 'Birthday is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Handle registration logic
      console.log('Registered');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img src="/images/logo.png" alt="GALAXY FOOD POINT Logo" className="w-32 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`w-full p-2 rounded bg-gray-900 text-white ${errors.name ? 'border border-red-500' : ''}`}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className={`w-full p-2 rounded bg-gray-900 text-white ${errors.phone ? 'border border-red-500' : ''}`}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="birthday">Birthday</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className={`w-full p-2 rounded bg-gray-900 text-white ${errors.birthday ? 'border border-red-500' : ''}`}
              onChange={handleChange}
            />
            {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={`w-full p-2 rounded bg-gray-900 text-white ${errors.email ? 'border border-red-500' : ''}`}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={`w-full p-2 rounded bg-gray-900 text-white ${errors.password ? 'border border-red-500' : ''}`}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;