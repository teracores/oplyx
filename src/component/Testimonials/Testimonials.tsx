import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-[url('/bg_img1.png')] bg-black h-[750px] w-full bg-repeat-x bg-contain flex flex-col items-center pt-24">
      <span className="text-white font-extralight tracking-wider">
        TESTIMONIAL
      </span>
      <h1 className="text-white text-[30px] font-semibold">
        Client Feedback & Reviews
      </h1>
      <TestimonialCard />
    </section>
  );
};

export default Testimonials;
