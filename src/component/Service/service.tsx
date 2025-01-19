import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div className="bg-gradient-to-r from-[#1b1b1b] to-[#292929] min-h-screen flex justify-center items-center">
      {/* Container for Image and Text */}
      <div className="relative margin-top w-full md:w-2/3 height">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url(/banner2.jpg)" }}
        ></div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white rounded-lg">
          <div className="flex flex-col justify-center items-center mx-2 text-center  bg-gradient-to-r from-[#1b1b1b70] to-[#292929] border-2 border-[#797979] border-opacity-30 py-16 px-16 rounded-lg bg-opacity-85 space-y-4">
            {/* SVG Icon with Multiple Pulsing Layers */}
            <div className="mb-5 rounded-full duration-500 transition-all glow-service relative">
              {/* First Pulse Layer */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-[#797979] opacity-30"></div>
              {/* Second Pulse Layer */}
              <div className="absolute inset-0 animate-pulse1 rounded-full bg-[#797979] opacity-20 scale-110 delay-200"></div>
              {/* Third Pulse Layer */}
              <div className="absolute inset-0 animate-pulse2 rounded-full bg-[#797979] opacity-10 scale-125 delay-400"></div>
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="white"
                className="relative  z-10"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
              </svg>
            </div>
            {/* Title */}
            <h1 className="text-4xl max-w-md font-bold">
              <span className="glow"> Innovative Solutions for</span> Your
              Online Success
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
