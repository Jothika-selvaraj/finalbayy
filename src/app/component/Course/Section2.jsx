import React from 'react';
import Image
 from 'next/image';
const Section2 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-yellow-400 py-8 sm:py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
          <div className="relative overflow-hidden rounded-lg pr-4 md:pr-12">
            <Image
              src="/assests/Course/b5.png"
              alt="Computer Engineering"
              className="w-full h-auto"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left px-4 md:px-0">
          <h3 className="text-[#f14d5d] font-bold text-base sm:text-lg uppercase">
            QURAN MASTER STUDIES
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2">Learn Quranic,Masters</h1>
          <p className="mt-4 sm:mt-8 text-base sm:text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 bg-[#f14d5d] text-white font-bold rounded-md shadow-md hover:bg-white hover:text-black text-sm sm:text-base">
            Enroll Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
