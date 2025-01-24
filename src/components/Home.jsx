import React from "react";
import ProfilePic from "../assets/image.jpg";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>
      <img
        src={ProfilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-gray-900 shadow-lg z-10"
      />
      <h1 className="mt-4 text-4xl font-extrabold text-gray-800">
        Rendelle Bertes
      </h1>
      <p className="mt-2 text-lg text-gray-600 max-w-lg">
        Hi! I'm an Aspiring Web Developer. Proficient in using React and
        Tailwind CSS
      </p>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Home;
