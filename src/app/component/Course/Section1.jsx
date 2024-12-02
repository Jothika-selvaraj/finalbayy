import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="container mx-auto px-4">
      {/* First Section */}
      <div className="py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full flex justify-center md:justify-start">
            <Image
              src="/assests/Course/course4.png"
              alt="Tajweed"
              className="rounded-lg object-cover w-full max-w-[320px] md:max-w-none"
              width={320}
              height={320}
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-[#f14d5d] font-bold text-base md:text-lg">Tajweed</h3>
            <h2 className="text-gray-900 text-2xl md:text-4xl">
              Learn Advance <span className="text-[#f14d5d]">Tajweed</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="w-full md:w-auto bg-[#f14d5d] text-white px-6 py-2 rounded hover:bg-[#e0dada] hover:text-black transition-colors">
              Enroll Today
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-4 order-2 md:order-1">
            <h3 className="text-[#f14d5d] font-bold text-base md:text-lg">Islamic</h3>
            <h2 className="text-gray-900 text-2xl md:text-4xl">
              Learn Advance <span className="text-[#f14d5d]">Islamic</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="w-full md:w-auto bg-[#f14d5d] text-white px-6 py-2 rounded hover:bg-[#e0dada] hover:text-black transition-colors">
              Enroll Today
            </button>
          </div>

          {/* Image Section */}
          <div className="relative w-full flex justify-center md:justify-start order-1 md:order-2">
            <Image
              src="/assests/Course/course3.png"
              alt="Robotics"
              className="rounded-lg object-cover w-full max-w-[320px] md:max-w-none"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
