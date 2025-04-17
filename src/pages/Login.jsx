import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isCoordinator, setIsCoordinator] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const handleToggle = () => {
    setIsCoordinator(!isCoordinator);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
     <motion.div
  className="bg-[#1e293b] rounded-2xl shadow-2xl w-full max-w-md p-6 text-white"

        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 className="text-2xl font-bold text-center mb-6 underline underline-offset-8 decoration-blue-500"

          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Login to Your Account
        </motion.h2>

        {/* Role Toggle */}
        <div className="flex justify-center mb-10 space-x-6">
          <button
            onClick={() => setIsCoordinator(false)}
            className={`px-8 py-3 rounded-full text-lg font-semibold cursor-pointer hover:text-blue-300 ${
              !isCoordinator ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            } transition-all`}
          >
            Participant
          </button>
          <button
            onClick={() => setIsCoordinator(true)}
            className={`px-8 py-3 rounded-full text-lg font-semibold cursor-pointer hover:text-blue-300 ${
              isCoordinator ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            } transition-all`}
          >
            Coordinator
          </button>
        </div>

        {/* Form Animation Section */}
        <motion.div
          className="w-full max-w-2xl mx-auto"
          key={isCoordinator ? "coordinator" : "participant"}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Email/Username */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1 flex items-center gap-2 text-lg">
                <FaEnvelope /> Username or Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your username or email"
                className="px-5 py-3 text-lg rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-1 flex items-center gap-2 text-lg">
                <FaLock /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="px-5 py-3 text-lg rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:text-blue-300  py-3 text-lg  underline underline-offset-8 rounded-xl transition-all font-semibold"
            >
              Login
            </motion.button>

            {/* Create Account */}
            <div className="text-center text-gray-300 text-lg mt-6">
              Don’t have an account?{" "}
              <button className="text-blue-400 underline underline-offset-4 cursor-pointer hover:text-blue-300" 
              onClick={() => navigate('/signup')}>
                Create your account
              </button>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
