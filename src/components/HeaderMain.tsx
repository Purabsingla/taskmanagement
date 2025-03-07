"use client";

import type React from "react";
import { motion } from "framer-motion";
import Quotes from "../assests/Quotes";
import Dots from "../assests/Dots";

const Header: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mt-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-1/2 min-h-[80vh] flex justify-center items-start flex-col p-6 lg:p-28 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
            variants={itemVariants}
          >
            Welcome To My Application
          </motion.h1>

          <motion.p
            className="font-medium text-gray-700 dark:text-gray-300 text-lg"
            variants={itemVariants}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sint
            similique laborum harum numquam quisquam hic illo et distinctio
            libero officiis in ipsum quis nisi, beatae ipsa iste? Labore omnis
            nobis natus explicabo!
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              className="font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold 
              relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group 
              before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
              before:rounded-full before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 hover:text-gray-50 
              before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
              type="submit"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="relative z-10"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-8 h-8 justify-end bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full 
                  border border-gray-700 group-hover:border-none p-2 rotate-45"
                >
                  <path
                    className="fill-gray-800 group-hover:fill-gray-800"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  ></path>
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 min-h-[80vh] relative">
          {/* Dots - not animated as per request */}
          <div className="absolute top-[46%] left-[69%] -z-10">
            <Dots />
          </div>

          {/* Image with animation */}
          <motion.div
            className="absolute top-[3.8rem] left-0 lg:left-1/4"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://cdn.pixabay.com/photo/2020/04/21/14/19/contrast-5073265_1280.jpg"
              alt="office"
              className="h-[300px] md:h-[450px] lg:h-[600px] rounded-2xl w-full max-w-[426px] object-cover shadow-2xl"
            />
          </motion.div>

          {/* Quote card with animation */}
          <motion.div
            className="absolute top-[62%] left-4 lg:left-14"
            variants={quoteVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute z-40 -top-3 -left-5">
              <Quotes />
            </div>
            <div className="bg-[#0b093b] w-[18rem] md:w-[20rem] h-[10rem] z-30 rounded-2xl shadow-xl backdrop-blur-sm">
              <section className="relative">
                <p className="px-6 pt-8 text-white">
                  <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, soluta. Lorem ipsum dolor sit
                  </i>
                </p>
                <motion.span
                  className="flex justify-end pr-5 pt-4 text-yellow-400 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  ~ Purab Singla
                </motion.span>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
