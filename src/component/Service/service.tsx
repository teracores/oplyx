"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./service.css";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-black bg-opacity-45 scale-95 p-6 border-2 border-[#797979] border-opacity-50 hover:scale-100 duration-300 transition-all block rounded-lg max-w-full h-full">
      <div className="flex gap-4 border-b-2 pb-5 border-[#797979] border-opacity-35">
        <div>
          <Image
            src={imageSrc}
            className="h-20 w-20"
            alt={title}
            height={24}
            width={24}
          />
        </div>
        <div className="block">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-[#797979] font-light text-sm text-justify">
            {description}
          </p>
        </div>
      </div>
      <p className="text-[#797979] font-light text-sm text-justify mt-5 pb-5 px-2">
        {description}
      </p>
    </div>
  );
};

const Service = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="block bg-no-repeat bg-center bg-contain max-h-full bg-hero-pattern">
      <div className="min-h-screen flex justify-center items-center">
        {/* Container for Image and Text */}
        <div className="relative margin-top w-full md:w-2/3 height">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url(/banner2.jpg)" }}
          ></div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white rounded-lg">
            <div className="flex flex-col justify-center items-center mx-2 text-center bg-gradient-to-r from-[#1b1b1b70] to-[#292929] border-2 border-[#797979] border-opacity-30 py-16 px-16 rounded-lg bg-opacity-85 space-y-4">
              {/* SVG Icon with Multiple Pulsing Layers */}
              <button
                className="mb-5 rounded-full duration-500 transition-all glow-service relative focus:outline-none"
                onClick={handlePlayVideo}
              >
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

        {/* Modal for Video */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YQHsXMglC9A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeVideo}
                className="absolute -top-16 -right-2 text-white hover:text-black bg-transparent border-2 border-[#797979] border-opacity-20 p-2 rounded-lg"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex md:-mt-96 justify-center">
        <div className="text-white w-auto p-4 -mt-16 block max-w-6xl justify-center">
          {/* Grid Container for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              imageSrc="/web.svg"
              title="Web Design & Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCard
              imageSrc="/setting.svg"
              title="Web App Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCard
              imageSrc="/logo.svg"
              title="Software Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <ServiceCard
              imageSrc="/window.svg"
              title="CMS Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCard
              imageSrc="/vercel.svg"
              title="Internet Of Things"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <ServiceCard
              imageSrc="/next.svg"
              title="App Development"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center -z-10 relative">
        <div className="dot-glow"></div>
      </div>
    </div>
  );
};

export default Service;
