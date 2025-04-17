import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const navigate = useNavigate();
const [currentImage, setCurrentImage] = useState(0);
  const [role, setRole] = useState("participant");

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-10">
      <motion.div
        className="bg-[#1e293b] rounded-2xl shadow-2xl w-full max-w-md p-6 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h2
          className="text-2xl font-bold text-center mb-6 underline underline-offset-8 decoration-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Create Your Account
        </motion.h2>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setRole("participant")}
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer hover:bg-blue-700 duration-300 ${
              role === "participant"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Participant
          </button>
          <button
            onClick={() => setRole("coordinator")}
            className={`px-3 py-2 rounded-full text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-all duration-300 ${
              role === "coordinator"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Coordinator
          </button>
        </div>

        <motion.form
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Username */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-1 flex items-center gap-2">
              <FaUser /> Username
            </label>
            <input
              type="text"
              placeholder="Your username"
              className="px-4 py-2 text-sm rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-1 flex items-center gap-2">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 text-sm rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-1 flex items-center gap-2">
              <FaPhone /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="9876543210"
              className="px-4 py-2 text-sm rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-1 flex items-center gap-2">
              <FaLock /> Password
            </label>
            <input
              type="password"
              placeholder="••••••"
              className="px-4 py-2 text-sm rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-1 flex items-center gap-2">
              <FaLock /> Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••"
              className="px-4 py-2 text-sm rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button with Underline */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-3 text-sm rounded-xl transition-all font-semibold border-b-2 border-blue-400"
          >
            Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
          </motion.button>
        </motion.form>

        {/* Already Have an Account */}
        <div className="text-center mt-4 text-sm text-gray-400">
          <span>Already have an account? </span>
          <button className="text-blue-500 hover:underline" 
          onClick={() => navigate('/login')}>
            Log In
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;