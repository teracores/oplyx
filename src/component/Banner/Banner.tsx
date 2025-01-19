import React from "react";

export const Banner = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white bg-cover min-h-96 "
        style={{ backgroundImage: "url(/banner.jpg)" }}
      >
        <div className="md:max-w-md min-h-96 md:min-h-28 text-4xl static md:relative top-16 left-52 bg-black bg-opacity-30 p-6 rounded-lg backdrop-blur-md">
          <h3 className="mb-2">See How We Can Help Your Business Grow.</h3>
          <p className="text-base text-[#d8d8d8]">
            Maecenas tempor ligula phasellus per hac nisi. Facilisi curae nunc
            hendrerit vestibulum lobortis commodo lacus sagittis feugiat. Est
            sollicitudin convallis diam.
          </p>
          {/* Call-to-Action */}
          <div className="mt-6">
            <a
              href="#services"
              className="inline-block text-xs text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 rounded-full"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="md:flex block mx-auto max-w-4xl my-28 gap-10 py-24  p-4">
        {/* Left Column */}
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

        {/* Right Column */}
        <div className="flex flex-col pt-5 max-w-xs md:flex-row gap-6">
          {/* Traffic Increase Card */}
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
      </div>
    </div>
  );
};
