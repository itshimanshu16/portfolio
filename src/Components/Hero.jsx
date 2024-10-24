import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-scroll';  

const Hero = () => {
  return (
    <div
         
    >
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
        className="home h-[11vh] w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-5 saturate-100 backdrop-contrast-100 shadow-lg shadow-cyan-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 pt-3 items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="/" className="text-3xl font-bold text-[#00B2E8]">
                WELCOME
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-white text-xl font-semibold hover:text-gray-300 hover:scale-110 transition cursor-pointer"
              >
                HOME
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-white text-xl font-semibold hover:text-gray-300 hover:scale-110 transition cursor-pointer"
              >
                ABOUT
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-white text-xl font-semibold hover:text-gray-300 hover:scale-110 transition cursor-pointer"
              >
                PROJECTS
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white text-xl font-semibold hover:text-gray-300 hover:scale-110 transition cursor-pointer"
              >
                CONTACT
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className="text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Toggle menu"
              >
                <motion.svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </motion.svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <section className="flex flex-col sm:flex-row h-[89vh] w-full">
  {/* Left Section */}
  <div className="w-full sm:w-[40%] h-[40%] sm:h-[85%] flex items-center justify-center">
    <div className="w-full h-full m-auto text-left flex content-center justify-center relative">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="w-[70vw] h-[70vw]  shadow-[5px_5px_40px_12px_gray] sm:w-[23vw] sm:h-[23vw] bg-white  m-auto border rounded-full"
          
      
      >
        <img className='w-[70vw] h-[70vw] sm:w-[23vw] sm:h-[23vw] m-auto border rounded-full' src="assets/222.jpg" />
        </motion.div>


      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
        className="w-[50%] hidden   absolute left-28 h-[40%] object-fill max-w-full"
        src="../src/assets/img/bulb.svg"
        alt="bulb"
      />
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full sm:w-[60%] h-[60%] sm:h-[85%] flex items-center justify-center sm:justify-end">
    <div className="text-white text-4xl font-bold py-6 text-center sm:text-right">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-5xl lg:pr-10 sm:text-7xl lg:text-8xl text-gray-300 font-semibold pr-0 sm:pr-7"
      >
        I AM <span className="text-[#00B2E8]"> HIMANSHU!! </span>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-base sm:text-xl lg:text-2xl px-6 sm:pl-28 sm:pr-6 text-gray-400 font-semibold mt-4 sm:mt-0"
      >
        I'M A FULL STACK WEB DEVELOPER WITH A PASSION FOR BUILDING
        <p>DYNAMIC AND RESPONSIVE WEB APPLICATIONS. CHECK OUT MY WORK</p>
        AND LET'S CONNECT!
      </motion.div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero; 