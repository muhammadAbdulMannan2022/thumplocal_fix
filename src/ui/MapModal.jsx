import React from "react";
import ReactDOM from "react-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg relative min-w-[600px] min-h-[450px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 left-4 right-4 z-[99]">
          <div className="relative mb-4 bg-white">
            <input
              type="text"
              placeholder="Search location"
              className="w-full p-2 pl-10 border rounded-lg"
            />
            <FaSearch className="absolute left-3 top-2 text-gray-500" />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.063399637795!2d90.4050306760236!3d23.780756587609012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e0!3m2!1sen!2sbd!4v1758966293727!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 right-0 w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
