import React from 'react';
import 'flowbite';
import './Home.css';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/OIP.uzZnVIyE09TbsOkDLlA1RQHaCZ?w=281&h=113&c=7&r=0&o=5&dpr=1.5&pid=1.7')`,
      }}
    >
      {/* Transparent Navbar */}
      <nav className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-md fixed w-full z-20 top-0 left-0 border-b border-white/10 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
              Flowbite
            </span>
          </a>

          {/* Buttons and Hamburger */}
          <div className="flex items-center md:order-2 space-x-3">
            <div className="flex space-x-3">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Login
              </button>
              <button type="button" className="text-blue-700 bg-white hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                Sign Up
              </button>
            </div>

            {/* Hamburger menu */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-white/10 dark:bg-gray-800/10 md:space-x-8 md:flex-row md:mt-0 md:bg-transparent dark:md:bg-transparent">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:md:text-blue-500" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Page Hero Content */}
      <div className="pt-36 pl-10 text-left">
        <div className="backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 rounded-lg w-fit p-6 m-6 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-snug dark:text-white">
            Welcome to,
            <br />
            <span className="typewriter-text mt-3 block">
              THE ONLINE TRAINING MANAGEMENT SYSTEM
            </span>
          </h1>
          <p className="text-xl text-black mt-3 dark:text-white">
            Interactive Online Training Management System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
