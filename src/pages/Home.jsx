import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
import Card from '../components/Card';
import Footer from '../components/Footer';
import './Home.css';

const images = [
  'https://th.bing.com/th/id/OIP.suNkmeyipLJ0QV0jF_Bf8wHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  'https://th.bing.com/th/id/OIP.9JAJ4WLbTJkUgxIUpvGeigAAAA?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  'https://th.bing.com/th/id/OIP.Rhyl91w4zv4BqjyKrt7UMQHaDt?w=346&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7',
];

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-800 text-white transition-colors duration-300">
      
      {/* Navbar */}
      <nav className="bg-black fixed w-full z-50 top-0 left-0 border-b border-gray-800">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
        IRDT
      </span>
    </a>
    
    <div className="flex items-center md:order-2 space-x-3">
      <button
        type="button"
        onClick={() => navigate('/login')}
        className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => navigate('/signup')}
        className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2"
      >
        Sign Up
      </button>
    </div>
    
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:p-0">
        <li><a href="#" className="text-white">Home</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
      {/* Hero Section */}
      <section className="pt-20 relative">
        <div className="h-[500px] w-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Slideshow"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
          <div className="absolute z-20 top-1/2 left-10 transform -translate-y-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow">
              Welcome to <br />
              <span className="typewriter-text text-blue-400">THE ONLINE TRAINING MANAGEMENT SYSTEM</span>
            </h1>
            <p className="text-lg max-w-xl drop-shadow">
              A modern platform to manage, track, and scale training efficiently.
            </p>
            

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 relative inline-block">
          Our Facility
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2 rounded" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
