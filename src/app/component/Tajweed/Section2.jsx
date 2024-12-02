import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  return (
    <div
      className="py-8 bg-cover bg-center bg-no-repeat relative bg-blue-gray-50"
      style={{
        backgroundColor: "",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-6 max-w-4xl mx-auto mt-8 border border-gray-500 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <Image
            src="/assests/Courses/t1.png"
            alt="Guiding star"
            width={96}
            height={96}
            className="object-contain"
          />
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-4 md:mt-0 md:ml-4">
            You can be your own <br className="hidden md:block" />
            <span className="text-gray-900">Guiding star with our help!</span>
          </p>
        </div>

        <button className="bg-[#204f61] text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition w-full md:w-auto">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Section2;
