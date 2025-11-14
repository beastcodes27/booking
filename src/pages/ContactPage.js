import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-lg text-gray-400 mt-2">We'd love to hear from you!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded bg-gray-900 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded bg-gray-900 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 rounded bg-gray-900 text-white"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Our Location</h2>
          {/* Placeholder for map */}
          <div className="bg-gray-900 h-64 rounded-lg"></div>
          <p className="text-gray-400 mt-4">123 Restaurant St, Dar es Salaam, Tanzania</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;