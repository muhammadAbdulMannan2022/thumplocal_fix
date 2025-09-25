import React from "react";
import { Link } from "react-router";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className=" ">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Illustration */}
          <div className="order-1 lg:order-none md:col-span-7 col-span-12 flex justify-center lg:justify-start">
            <img
              src={heroImage}
              alt="AI Marketing Dashboard Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="order-2 lg:order-none md:col-span-5 col-span-12 flex flex-col justify-center text-center lg:text-left px-4">
            <div className="space-y-4 sm:space-y-6 max-w-lg md:text-right text-center">
              <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl lg:text-[93px] text-[#53B3AB] block">
                AI
              </h1>
              <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl lg:text-[93px] text-[#53B3AB] block">
                MARKETING
              </h1>

              <p className="text-base sm:text-lg lg:text-[24px] text-[#484D44] dark:text-gray-300 leading-relaxed max-w-md lg:max-w-full mx-auto lg:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <div className="pt-4 flex justify-center lg:justify-end gap-3">
                <button className="px-6 sm:px-8 py-3 bg-[#8BB353] hover:bg-[#589700] text-white text-base font-medium rounded-lg shadow-md transition cursor-pointer">
                  Get Started
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
