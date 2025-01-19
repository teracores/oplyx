"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Form from "@/component/Form";
import "./about.css";

// Custom hook for intersection observer
const useIntersection = (callback: () => void) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, callback]);

  return { setElement };
};

const About = () => {
  const [stats, setStats] = useState<{
    projects: number;
    clients: number;
    reviews: number;
  }>({
    projects: 0,
    clients: 0,
    reviews: 0,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const ANIMATION_CONFIG = {
    targets: { projects: 100, clients: 40, reviews: 4.7 },
    duration: 600, // in ms
    frameInterval: 10, // in ms
  };

  const steps = ANIMATION_CONFIG.duration / ANIMATION_CONFIG.frameInterval;

  const animateNumbers = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const increments = {
      projects: ANIMATION_CONFIG.targets.projects / steps,
      clients: ANIMATION_CONFIG.targets.clients / steps,
      reviews: ANIMATION_CONFIG.targets.reviews / steps,
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      setStats((prev) => ({
        projects: Math.min(
          prev.projects + increments.projects,
          ANIMATION_CONFIG.targets.projects
        ),
        clients: Math.min(
          prev.clients + increments.clients,
          ANIMATION_CONFIG.targets.clients
        ),
        reviews: Math.min(
          prev.reviews + increments.reviews,
          ANIMATION_CONFIG.targets.reviews
        ),
      }));

      currentStep++;
      if (currentStep >= steps) clearInterval(interval);
    }, ANIMATION_CONFIG.frameInterval);
  };

  const { setElement } = useIntersection(animateNumbers);

  return (
    <div className="bg-gradient-to-r from-[#1b1b1b] to-[#292929] justify-center md:flex block p-6 border-b-2 border-opacity-20 border-[#797979]">
      {/* Content Section */}
      <div className="grid-cols-2 mt-20 md:mr-10 gap-6">
        <div className="md:flex gap-4 mx-auto">
          {[
            {
              title: "Design & Development",
              text: "Focusing on user experience and interface design to ensure intuitive navigation and engagement.",
              img: "./web.svg",
            },
            {
              title: "Maintenance & Support",
              text: "Keeping your website up-to-date, fast loading times, smooth performance, and security patches.",
              img: "./setting.svg",
            },
          ].map((item, index) => (
            <div key={index} className="justify-start block mt-10 md:mt-0">
              <Image
                alt={item.title}
                src={item.img}
                width={60}
                height={60}
                className="h-auto mb-4"
              />
              <div className="block max-w-sm ">
                <h3 className="font-medium text-white text-3xl mb-4">
                  {item.title}
                </h3>
                <p className="text-[#797979]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image
            className="h-auto rounded-lg border-[#353535] mt-10 border-2"
            width={750}
            height={500}
            alt="Image"
            src="/about.jpg"
          />
          <ul className="md:relative md:inline-block mt-4 bottom-40 right-8 bg-black bg-opacity-90 border-2 border-opacity-55 border-[#4e4e4e] text-[#797979] p-4 rounded-2xl text-left">
            {[
              "Custom Solutions",
              "Cutting-Edge Design",
              "SEO Optimization",
              "Responsive Design",
              "Innovative Technology",
              "Security and Reliability",
            ].map((text, index) => (
              <li
                key={index}
                className="my-1 flex border-b-2 border-opacity-20 gap-6 border-[#797979] text-center"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#797979"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                      fillRule="evenodd"
                    />
                    <path
                      d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="z-40 max-w-lg block my-4 md:my-0">
        <Form />
        <div className="text-white mt-10 block">
          <p className="text-lg text-[#797979] my-2">Who are we</p>
          <h3 className="text-4xl font-medium">
            Empowering <br />
            <span className="font-bold glow">Digital Transformation</span>
          </h3>
          <p className="my-2 text-[#797979]">
            At TeraCores, we blend creativity and technology to deliver
            impactful web solutions. Our focus is on empowering businesses with
            user-centric designs and innovative digital experiences that drive
            results.
          </p>
        </div>

        {/* Statistics Section */}
        <div
          ref={setElement}
          className="flex my-5 max-w-lg justify-between border-t-2 py-4 border-opacity-30 gap-2 border-[#797979] border-b-2"
        >
          {[
            {
              label: "Projects Done",
              value: stats.projects.toFixed(0),
              suffix: "+",
            },
            {
              label: "Happy Clients",
              value: stats.clients.toFixed(0),
              suffix: "+",
            },
            {
              label: "Client Reviews",
              value: stats.reviews.toFixed(1),
              suffix: "",
            },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-white text-center text-3xl md:text-5xl glow font-bold">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-[#797979] text-center text-xs md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-6">
          <a
            href="#services"
            className="inline-block text-xs text-white border-2 border-white hover:bg-white hover:border-white hover:text-black transition-all duration-300 px-6 py-3 rounded-full"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
