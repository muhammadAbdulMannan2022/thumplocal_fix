import React from "react";
import contactBg from "../assets/images/contact.jpg";

const Contact = () => {
  return (
    <section
      className="py-16 lg:py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-[62px] font-bold text-[#CDCDCD] mb-4">
            CONTACT US
          </h2>
          <p className="text-[36px] text-[#B2B2B2] ">
            Have a question? Reach out to us!
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#B2B2B2] text-[24px] font-medium mb-2">
                First name
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full rounded-md px-4 py-3 bg-[#1B1B1B] border border-[#555555] text-white placeholder:text-[#ACACAC]  focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-[#B2B2B2] text-[24px] font-medium mb-2">
                Last name
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full rounded-md px-4 py-3 bg-[#1B1B1B] border border-[#555555] text-white placeholder:text-[#ACACAC]  focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#B2B2B2] text-[24px] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter here"
                className="w-full rounded-md px-4 py-3 bg-[#1B1B1B] border border-[#555555] text-white placeholder:text-[#ACACAC]  focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-[#B2B2B2] text-[24px] font-medium mb-2">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Enter here"
                className="w-full rounded-md px-4 py-3 bg-[#1B1B1B] border border-[#555555] text-white placeholder:text-[#ACACAC]  focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#B2B2B2] text-[24px] font-medium mb-2">
                Town
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full rounded-md px-4 py-3 bg-[#1B1B1B] border border-[#555555] text-white placeholder:text-[#ACACAC] focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-[#B2B2B2] text-[24px] font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full rounded-md px-4 py-3 bg-[#1B1B1B] border border-[#555555] text-white placeholder:text-[#ACACAC]  focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-[#B2B2B2] text-[24px] font-medium mb-2">
              How can we help you?
            </label>
            <textarea
              placeholder="Enter here"
              rows={6}
              className="w-full rounded-md px-4 py-3 bg-[#1B1B1B] border border-[#555555] text-white placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-30 py-3 rounded bg-[#8BB353] text-white font-medium shadow-md hover:bg-primary/90 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
