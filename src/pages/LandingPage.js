import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
            >
              Welcome to Our Restaurant
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 leading-relaxed"
            >
              Experience the best food in town. We offer a wide variety of dishes to satisfy your cravings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <a href="#services" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Our Services</a>
              <a href="/menu" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Book a Table</a>
            </motion.div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="object-cover object-center rounded"
              alt="hero"
              src="https://via.placeholder.com/720x600"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://via.placeholder.com/721x401" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">Fine Dining</h1>
                  <p className="leading-relaxed mb-3">Experience our exquisite fine dining with a menu crafted by our head chef.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://via.placeholder.com/722x402" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">Casual Eats</h1>
                  <p className="leading-relaxed mb-3">Enjoy our casual and relaxed atmosphere for a quick bite or a family meal.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 md:w-1/3"
            >
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://via.placeholder.com/723x403" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">Private Events</h1>
                  <p className="leading-relaxed mb-3">Host your private events with us and create unforgettable memories.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;