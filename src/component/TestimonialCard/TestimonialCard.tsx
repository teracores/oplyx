"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCard = () => {
  const testimonials = [
    {
      text: "Teracores delivered exactly what we were looking for – a beautiful, mobile-friendly website that attracts more customers to our online store. The process was smooth, and their support post-launch has been outstanding. We couldn't be happier with the results!",
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
      text: "Teracores delivered exactly what we were looking for – a beautiful, mobile-friendly website that attracts more customers to our online store. The process was smooth, and their support post-launch has been outstanding. We couldn't be happier with the results!",
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
  ];

  return (
    <main className="w-full py-16 px-3 max-w-[1300px] mx-auto">
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
          <SwiperSlide key={index} className="w-full flex">
            <section className="flex flex-col items-center pb-10">
              <div className="relative">
                <div className="bg-[#242424] h-[240px] w-[403px] rounded-2xl flex justify-center items-center relative">
                  <span className="text-[#797979] text-center text-[17px] px-5">
                    {testimonial.text}
                  </span>
                </div>
                <div
                  className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"
                  style={{
                    width: "0",
                    height: "0",
                    borderLeft: "15px solid transparent",
                    borderRight: "15px solid transparent",
                    borderTop: "15px solid #242424",
                  }}
                ></div>
              </div>
              <span className="flex py-5 px-8 gap-7 items-center">
                <div className="h-[70px] w-[70px] bg-[#2D2D2D] rounded-full border-4 border-[#2d2d2d] overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div>
                  <h1 className="text-white text-[16px]">{testimonial.name}</h1>
                  <p className="text-[#797979] text-[14px]">
                    {testimonial.title}
                  </p>
                </div>
              </span>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default TestimonialCard;
