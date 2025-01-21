"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Teracores delivered exactly what we were looking for – a beautiful, mobile-friendly website that attracts more customers to our online store. The process was smooth, and their support post-launch has been outstanding.",
    image: "https://mighty.tools/mockmind-api/content/human/104.jpg",
    name: "Rajesh Upreti",
    title: "CEO, Leapfrog Tech",
  },
  {
    text: "Working with Teracores was a game-changer for our business. Their attention to detail and customer support are unmatched. We highly recommend them for any digital project!",
    image: "https://mighty.tools/mockmind-api/content/human/103.jpg",
    name: "Anisha Sharma",
    title: "CTO, DigitalFlow",
  },
  {
    text: "Exceptional service and creativity! Teracores turned our vision into reality, and their team exceeded all expectations. Truly outstanding work!",
    image: "https://mighty.tools/mockmind-api/content/human/102.jpg",
    name: "Michael Lee",
    title: "Founder, StartUpWorks",
  },
  {
    text: "Teracores delivered exactly what we were looking for – a beautiful, mobile-friendly website that attracts more customers to our online store. The process was smooth, and their support post-launch has been outstanding.",
    image: "https://mighty.tools/mockmind-api/content/human/104.jpg",
    name: "John Cena",
    title: "CEO, W W W",
  },
  {
    text: "Working with Teracores was a game-changer for our business. Their attention to detail and customer support are unmatched. We highly recommend them for any digital project!",
    image: "https://mighty.tools/mockmind-api/content/human/103.jpg",
    name: "Dhanu Chundali",
    title: "CTO, DigitalFlow",
  },
  {
    text: "Exceptional service and creativity! Teracores turned our vision into reality, and their team exceeded all expectations. Truly outstanding work!",
    image: "https://mighty.tools/mockmind-api/content/human/102.jpg",
    name: "Rajan Devkota",
    title: "Founder, StartUpWorks",
  },
];

const TestimonialCard: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 max-w-7xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="px-2"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="w-full flex justify-center">
            <div className="flex flex-col items-center pb-10">
              <div className="relative bg-[#242424] h-60 w-[90%] md:w-[380px] rounded-2xl flex justify-center items-center p-6">
                <p className="text-[#797979] text-center text-lg leading-relaxed">
                  {testimonial.text}
                </p>
                <div
                  className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"
                  style={{
                    width: "0",
                    height: "0",
                    borderLeft: "15px solid transparent",
                    borderRight: "15px solid transparent",
                    borderTop: "15px solid #242424",
                  }}
                />
              </div>
              <div className="flex py-5 px-8 gap-5 items-center">
                <div className="h-16 w-16 rounded-full border-4 border-[#2d2d2d] overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-white text-lg font-semibold">
                    {testimonial.name}
                  </h2>
                  <p className="text-[#797979] text-base">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialCard;
