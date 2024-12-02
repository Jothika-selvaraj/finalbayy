'use client'
import React from "react";
import Image from "next/image";
const Section = () => {
  return (
    <div className="bg-gray-200 text-white w-full py-8 md:py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4 md:px-8 gap-4 md:gap-8">
        {/* Left: Image */}
        <div className="flex-1 w-full md:w-auto">
          <Image
            src="/assests/Common/pricing.png"
            alt="Student with backpack"
            className="w-full h-auto object-contain md:object-cover"
            width={600}
            height={600}
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
          <button 
            onClick={() => {/* Add your appointment handling logic here */}}
            className="bg-yellow-400 inline-block text-sm md:text-base px-4 py-2 rounded-full uppercase mb-4 text-black hover:bg-yellow-600 transition-colors"
          >
            Make an Appointment
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-4 md:px-0">
            Get a Free Consultancy Right Now Here!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section;
