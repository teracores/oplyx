import React from "react";

const Form = () => {
  return (
    <div className="z-40 block animate-appear">
      <div className="bg-gradient-to-r  from-[#1b1b1b] to-[#292929] border-2 border-[#353535] text-white p-10 rounded-2xl  md:-mt-20   shadow-lg shadow-black max-h-fit">
        <div className="text-4xl font-normal max-w-sm mx-0 mb-2 ">
          Free Consultation
        </div>
        <form className="  mx-auto">
          <div className="block md:flex gap-10 justify-center">
            {/* Name Input */}
            <div className="mb-5 mt-3 ">
              <label htmlFor="email" className="block mb-2  text-sm font-thin">
                Your Name
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="Jhon Doe"
                required
              />
            </div>

            {/*Comapny Name */}
            <div className="mb-5 mt-3">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Company Name
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="Tera Cores"
                required
              />
            </div>
          </div>
          <div className="block md:flex gap-10 justify-center">
            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Work Email
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="name@example.com"
                required
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
                type="password"
                id="password"
                className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
                placeholder="+977 980000000"
                required
              />
            </div>
          </div>
          <div className="mb-5 ">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Phone Number
            </label>
            <textarea
              id="message"
              className="bg-transparent border-b-2 border-[#666666] border-0 text-sm  appearance-none block w-full p-2.5 focus:outline-none"
              placeholder="Leave a Message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white  px-4 py-2.5 rounded-2xl border-2 hover:bg-white hover:text-black text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
