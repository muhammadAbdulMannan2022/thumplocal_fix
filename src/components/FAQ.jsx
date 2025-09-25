import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI-powered project setup work?",
      answer:
        "Our AI system analyzes your business requirements and automatically configures the optimal project setup tailored to your needs.",
    },
    {
      question: "Can I integrate with other tools we already use?",
      answer:
        "Yes, our platform supports integration with over 100+ popular business tools and services through our API and native connectors.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with GDPR, HIPAA, and other regulations. Your data is stored in SOC 2 compliant data centers.",
    },
    {
      question: "Can I customize the platform for my industry?",
      answer:
        "Yes, our platform is highly customizable and can be tailored to meet the specific needs of various industries including healthcare, finance, retail, and more.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to assist you.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started.",
    },
    {
      question: "How often do you release updates?",
      answer:
        "We release regular updates and new features monthly, with security patches and bug fixes deployed as needed. All updates are automatic and don't require any downtime.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-[62px] font-bold text-[#413535] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[20px] text-[#413535] leading-relaxed">
            Find answers to common questions about our AI Project manager, learn
            how it enhances productivity, automates tasks, and streamlines
            workflows. Need more help? Our team is here to assist you!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="  p-2 space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-medium text-[#4F5256] text-[20px] cursor-pointer">
                  {faq.question}
                </span>
                <span className="ml-4 text-[#4F5256]">
                  {openIndex === index ? (
                    <IoMdArrowDropup size={24} />
                  ) : (
                    <IoMdArrowDropdown size={24} />
                  )}
                </span>
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
