import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  return (
    <div
      className="py-8 bg-cover bg-center bg-no-repeat relative bg-blue-gray-50"
      style={{
        backgroundColor: "", // Optional fallback for opacity
        backgroundBlendMode: "overlay", // Blends image with color for opacity
      }}
    >
      <div className="bg-white shadow-md rounded-lg flex items-center justify-between p-6 max-w-4xl mx-auto mt-8">
        {/* Image Section */}
        <div className="flex items-center">
          <Image
            src="/assests/Courses/t1.png" // Replace with the actual image path
            alt="Guiding star"
            width={96}  // Define the width of the image
            height={96} // Define the height of the image
            className="object-contain"
          />
          <p className="text-xl md:text-2xl font-semibold text-gray-800 ml-4">
            You can be your own <br />
            <span className="text-gray-900">Guiding star with our help!</span>
          </p>
        </div>

        {/* Button Section */}
        <button className="bg-[#204f61] text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Section2;
