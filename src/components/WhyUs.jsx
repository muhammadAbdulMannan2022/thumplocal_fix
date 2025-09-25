import React from "react";
import { CheckCircle } from "lucide-react";
import whyUsImage from "../assets/images/whyus.png";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const WhyUs = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary text-sm font-medium mb-2">
                Donec adipiscing fdadtydd
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#393764] text-[60px] mb-6">
                Why Us?
              </h2>
            </div>

            <div className=" text-[#687388] text-[20px] py-8">
              <p className="leading-relaxed">
                particularly impressed by your recent project launch. Given your
                role as Chief Technology Officer, I believe you I recently came
                across TechNova Solutions's innovative work in cloud solutions
                and was particularly impressed by your recent project launch.
                Given your role as Chief Technology Officer, I believe you
                recently came across TechNova Solutions's innovative work in
                cloud solutions and was particularly impressed by your recent
                project launch. Given your role as Chief Tec
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Donec adipiscing tristique risus nec feugiat in",
                "Donec adipiscing tristique risus nec feugiat in",
                "Donec adipiscing tristique risus nec feugiat in",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <TbArrowBadgeRightFilled className="text-[#8BB353] w-5 h-5 flex-shrink-0" />
                  <span className="text-[#687388] text-[21px]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-6 py-3 rounded-lg bg-[#8BB353] text-white font-medium shadow-md hover:bg-primary/90 transition">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="">
            <div className="relative">
              <img
                src={whyUsImage}
                alt="Team collaboration illustration"
                className="w-full max-w-lg h-auto"
              />

              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="text-white w-8 h-8" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/90 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🤝</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
