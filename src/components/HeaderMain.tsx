import React from "react";
import Quotes from "../assests/Quotes";
import Dots from "../assests/Dots";
const Header: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center">
        {/* Left Section */}
        <div className="w-1/2 h-[100vh] flex justify-center items-start flex-col p-28 gap-5">
          <h1 className="text-6xl font-extrabold">Welcome To My Application</h1>
          <p className="font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sint
            similique laborum harum numquam quisquam hic illo et distinctio
            libero officiis in ipsum quis nisi, beatae ipsa iste? Labore omnis
            nobis natus explicabo!
          </p>
          <button
            className="font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold 
              relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group 
              before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
              before:rounded-full before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 hover:text-gray-50 
              before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
            type="submit"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full 
    border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-[100vh] relative">
          <div className="absolute top-[62%] left-14">
            <div className="absolute z-40 -top-3 -left-5">
              <Quotes />
            </div>
            <div className="bg-[#0b093b] absolute w-[20rem] h-[10rem] z-30 rounded-2xl">
              <section>
                <p className="px-4 pt-6 text-white">
                  <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, soluta. Lorem ipsum dolor sit
                  </i>
                </p>
                <span className="flex justify-end pr-3 pt-3 text-yellow-400">
                  ~ Purab Singla
                </span>
              </section>
            </div>
          </div>
          <div className="absolute top-[3.8rem] left-1/4">
            <img
              src="https://cdn.pixabay.com/photo/2020/04/21/14/19/contrast-5073265_1280.jpg"
              alt="office"
              className="h-[600px] rounded-2xl w-[426px]"
            />
          </div>
          <div className="absolute top-[46%] left-[69%] -z-10">
            <Dots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
