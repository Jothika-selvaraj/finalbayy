import React from "react";
import Image
 from "next/image";
const Section4 = () => {
  return (
    <div className="relative bg-white text-center py-12 sm:py-20 px-4 sm:px-6">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-gray-100 opacity-30">
        <Image
          src="/assests/Course/Sec4.jpeg" // Replace with the new image URL
          alt="Background"
          className="w-full h-full object-cover"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Ensures the image maintains the correct aspect ratio
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold">
          Best teachers in every subject.
        </h1>
        <p className="text-sm sm:text-md text-[#F14D5D] font-bold mt-2 sm:mt-3 uppercase">
          We can teach you anything
        </p>
        <button className="mt-8 sm:mt-12 px-4 sm:px-6 py-2 sm:py-3 bg-[#204f61] text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Section4;
