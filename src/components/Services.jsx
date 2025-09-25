import React from "react";
import serviceIcon1 from "../assets/images/serviceIcon1.png";
import serviceIcon2 from "../assets/images/serviceIcon2.png";
import serviceIcon3 from "../assets/images/serviceIcon3.png";
// Individual Service Card Component
const ServiceCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
      {/* Image with circular border and pointer */}
      <div className="relative mb-6">
        <div className="  flex items-center justify-center bg-white p-4">
          <img
            src={imageUrl}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </div>
        {/* <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-gray-300"></div> */}
      </div>

      {/* Timeline dot */}
      <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 z-10"></div>

      {/* Text content */}
      <div className="mt-4">
        <h3
          className={`text-[23px] font-bold ${
            title === "Marketing"
              ? "text-[#19C0D4]"
              : title === "Online activity"
              ? "text-[#625DC0]"
              : "text-[#D75EC7]"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 text-g[#767171] text-[18px]">{description}</p>
      </div>
    </div>
  );
};

// Main Services Timeline Component
const ServicesTimeline = () => {
  const services = [
    {
      imageUrl: serviceIcon1,
      title: "Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the",
    },
    {
      imageUrl: serviceIcon2,
      title: "Online activity",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the",
    },
    {
      imageUrl: serviceIcon3,
      title: "Management",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the",
    },
  ];

  return (
    <section className="bg-white font-sans py-32">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-[65px] font-extrabold text-[#393764]">
            Services Of Demo. Ai
          </h2>
          <p className="mt-4 text-[#7A7989] text-[28px]  mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[348px] left-0 w-full h-0.5 bg-gray-300"></div>

          {/* Service Cards Container */}
          <div className="flex flex-col md:flex-row justify-between relative space-y-12 md:space-y-0">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTimeline;
