"use client"; // This makes the component a Client Component

import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  return (
    <div
        className="py-8 bg-cover bg-center bg-no-repeat relative bg-blue-gray-50"
        style={{
           backgroundBlendMode: "overlay", // Blends image with color for opacity
        }}
      >
        <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center p-6 max-w-4xl mx-auto mt-8 border border-gray-500 space-y-4 md:space-y-0 md:justify-between">
          {/* Image and Text Section - made responsive */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <Image
              src="/assests/Courses/t1.png"
              alt="Guiding star"
              className="object-contain"
              width={112}
              height={112}
              onError={(e) => {
                e.target.src = '/fallback-image.png'
              }}
            />
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-4 md:mt-0 md:ml-4">
              You can be your own <br className="hidden md:block" /> 
              <span className="text-gray-900">Guiding star with our help!</span>
            </p> 
          </div>

          {/* Button Section - added width control for mobile */}
          <button 
            onClick={() => {/* Add your action here */}}
            className="w-full md:w-auto bg-[#204f61] text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition"
          >
            Get Started Now
          </button>
        </div>
    </div>
  );
};

export default Section2;
