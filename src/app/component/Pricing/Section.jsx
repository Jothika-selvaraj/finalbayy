'use client'
import React from "react";
import Image from "next/image";
const Section = () => {
  return (
    <div className="bg-gray-200 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto p-8 gap-8">
        {/* Left: Image */}
        <div className="flex-1">
          <Image
            src="/assests/Common/pricing.png" // Replace with your image URL
            alt="Student with backpack"
            className="h-auto object-cover"
            width={600} // Specify a width for the image
            height={600} // Specify a height for the image
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <button 
            onClick={() => {/* Add your appointment handling logic here */}}
            className="bg-yellow-400 inline-block text-sm px-4 py-2 rounded-full uppercase mb-4 text-black hover:bg-yellow-600 transition-colors"
          >
            Make an Appointment
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Get a Free Consultancy Right Now Here!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section;
