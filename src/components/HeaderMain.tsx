import React from "react";
import { motion } from "framer-motion";
import Quotes from "../assests/Quotes";
import Dots from "../assests/Dots";

const Header: React.FC = () => {
  return (
    <div className="mt-12 overflow-hidden">
      <div className="flex items-center justify-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2 h-[100vh] flex justify-center items-start flex-col p-28 gap-7"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-7xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
          >
            Welcome To My Application
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-medium text-lg text-gray-600 leading-relaxed"
          >
            Transform your workflow with our intuitive Kanban board system.
            Efficiently manage tasks, track progress, and collaborate with your
            team in real-time. Organize your projects into customizable boards,
            lists, and cards to maintain clear visibility of your team's
            workflow.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold 
              relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group 
              before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
              before:rounded-full before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 hover:text-gray-50 
              before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
            type="submit"
          >
            Get Started
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full 
                border border-gray-700 group-hover:border-none p-2 rotate-45"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </motion.svg>
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2 h-[100vh] relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ zIndex: 50 }}
            className="absolute top-[62%] left-14"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute z-50 -top-3 -left-5"
            >
              <Quotes />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#0b093b] to-[#1a1744] absolute w-[20rem] h-[10rem] z-40 rounded-2xl shadow-xl"
            >
              <section>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="px-4 pt-6 text-white"
                >
                  <i>
                    "Best Kanban tool I've ever used! Boosted our team's
                    productivity by 50% in just two weeks."
                  </i>
                </motion.p>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="flex justify-end pr-3 pt-3 text-yellow-400"
                >
                  ~ Alex, Tech Lead
                </motion.span>
              </section>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-[3.8rem] left-1/4"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="office"
              className="h-[600px] rounded-2xl w-[426px] object-cover shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute top-[46%] left-[69%] -z-10"
          >
            <Dots />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
