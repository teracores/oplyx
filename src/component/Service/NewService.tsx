"use client";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

const NewService = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="block bg-no-repeat bg-center bg-contain">
      <span className="md:flex block mx-auto max-w-4xl my-28 gap-10">
        <div className="block">
          <h2 className="text-white text-4xl font-bold max-w-sm mb-2">
            Innovative Design for Modern Businesses.
          </h2>
          <p className="text-[#797979] max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis
            cupiditate est aperiam vitae dolore architecto, modi debitis sunt
            optio quae reiciendis omnis sit voluptatum! Distinctio inventore
            ducimus quia sit.
          </p>
          <div className="mt-6">
            <a
              href="#services"
              className="inline-block text-xs text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 rounded-full"
            >
              Discover More
            </a>
          </div>
        </div>

        <div className="flex flex-col pt-5 max-w-xs md:flex-row gap-6">
          <div className="bg-gradient-to-r from-[#1b1b1b] to-[#292929] border-2 border-[#797979] p-5 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-5xl text-white font-bold">+60%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#ffffff"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                />
              </svg>
            </div>
            <div className="text-[#797979] border-b-2 pb-5 border-opacity-25 border-[#797979]">
              Traffic Increase
            </div>
            <p className="pt-5  text-[#797979]">
              By optimizing your website for search engines and enhancing user
              experience.
            </p>
          </div>

          {/* Revenue Increase Card */}
          <div className="bg-transparent border-2 border-[#797979] p-5 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-5xl text-white font-bold">+30%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#ffffff"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                />
              </svg>
            </div>
            <div className="text-[#797979] border-b-2 pb-5 border-opacity-25 border-[#797979]">
              Revenue Increase
            </div>
            <p className="pt-5 text-[#797979]">
              Rise in revenue as more visitors convert into paying customers.
            </p>
          </div>
        </div>
      </span>

      <div>
        <div className="z-0 relative bg-cover bg-center rounded-xl h-[400px]  w-full bg-[url('/banner2.jpg')] max-w-[1300px] mx-auto"></div>
        <div className="z-100 opacity-100 sm:mt-[-365px] mt-[-330px] inset-0 flex flex-col justify-center items-center text-white rounded-lg">
          <div className="z-50 flex flex-col justify-center items-center mx-2 text-center bg-gradient-to-r from-[#1b1b1b70] to-[#292929] border-2 border-[#797979] border-opacity-30 sm:py-16 py-5 sm:px-16  rounded-lg bg-opacity-85 space-y-4">
            <button
              className="mb-5 rounded-full duration-500 transition-all glow-service relative focus:outline-none"
              onClick={handlePlayVideo}
            >
              <div className="absolute inset-0 animate-pulse rounded-full bg-[#797979] opacity-30"></div>
              <div className="absolute inset-0 animate-pulse1 rounded-full bg-[#797979] opacity-20 scale-110 delay-200"></div>
              <div className="absolute inset-0 animate-pulse2 rounded-full bg-[#797979] opacity-10 scale-125 delay-400"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="white"
                className="relative z-10"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
              </svg>
            </button>
            {/* Title */}
            <h1 className="text-4xl max-w-md font-bold">
              <span className="glow"> Innovative Solutions </span>
              <br />
              <span className="text-[#797979]">for Your Online Success</span>
            </h1>
          </div>
        </div>
      </div>

      <ServiceCard />
    </section>
  );
};

export default NewService;
