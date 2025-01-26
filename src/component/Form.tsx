"use client";
import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "@/config/config";
import Loader from "@/Icon/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
      companyName,
    };
    try {
      setLoading(true);
      await axios({
        method: "POST",
        url: `${baseURL}form/`,
        data,
      });
      setLoading(false);
      toast.success("Form submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setCompanyName("");
      setMessage("");
    } catch (error) {
      console.log("Error submitting form:", error);
      setLoading(false);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="z-40 block animate-appear">
      <ToastContainer />
      <div className="bg-gradient-to-r  from-[#1b1b1b] to-[#292929] border-2 border-[#353535] text-white p-10 rounded-2xl  md:-mt-20   shadow-lg shadow-black max-h-fit">
        <div className="text-4xl font-normal max-w-sm mx-0 mb-2 ">
          Free Consultation
        </div>
        <form className="mx-auto" onSubmit={handleSubmit}>
          <div className="block md:flex gap-10 justify-center">
            {/* Name Input */}
            <div className="mb-5 mt-3 ">
              <label htmlFor="email" className="block mb-2  text-sm font-thin">
                Your Name
              </label>
              <input
                type="text"
                id="email"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="Jhon Doe"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>

            <div className="mb-5 mt-3">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Company Name
              </label>
              <input
                type="text"
                id="Company"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="Tera Cores"
                required
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="block md:flex gap-10 justify-center">
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Work Email
              </label>
              <input
                type="email"
                id="password"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Phone Number */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Phone Number
              </label>
              <input
                type="Number"
                id="Number"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="+977 980000000"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-5 ">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
              placeholder="Leave a Message..."
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="text-white  px-4 py-2.5 rounded-2xl border-2 hover:bg-white hover:text-black text-center flex justify-center items-center"
          >
            {loading ? <Loader /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
