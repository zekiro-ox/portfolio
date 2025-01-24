import React from "react";
import ProfilePic from "../assets/image.jpg";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-[#191d26]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#661b1c] rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#1b222c] rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>

      {/* Profile Picture */}
      <img
        src={ProfilePic}
        alt="Profile"
        className="w-60 h-60 rounded-full border-4 border-[#12151c] shadow-lg z-10"
      />

      {/* Name and Title */}
      <h1 className="mt-4 text-4xl font-extrabold text-white">
        Rendelle Bertes
      </h1>
      <p className="mt-2 text-lg text-gray-300 max-w-lg">
        Hi! I'm an Aspiring Web Developer. Proficient in using React and
        Tailwind CSS
      </p>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#531516] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#661b1c] rounded-full animate-bounce"></div>
    </div>
  );
};

export default Home;
