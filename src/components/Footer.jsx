import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#232523] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="thumplocal"
              className="w-auto  object-contain h-16"
            />
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">Villa No. 45, Street 19, Khalifa City,</p>
              <p className="text-sm">Abu Dhabi, United Arab Emirates</p>
              <div className="flex items-center gap-2 mt-4">
                <Mail size={16} />
                <span className="text-sm">Demo@canaz@vacanyMyCost.com</span>
              </div>
            </div>
          </div>

          {/* Our Collaborators */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Our collaborators</h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">Demo company limited</p>
              <p className="text-sm">Demo task company</p>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">About Us</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Reviews
              </a>
              <a
                href="#"
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Follow us on</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-white text-[#232523] rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white text-[#232523] rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white text-[#232523] rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white text-[#232523] rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#CEBCBC]  mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Digital. All rights reserved
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Notice
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Cookies Policy & Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
