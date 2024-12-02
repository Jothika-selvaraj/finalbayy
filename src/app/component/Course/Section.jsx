import React from 'react'
import Image from 'next/image'
const Section = () => {
  return (
    <div className="container mx-auto">
      {/* First Section */}
      <div className="py-4 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full flex justify-center md:justify-start">
            <Image
              src="/assests/Course/course1.png"
              alt="Tajweed"
              className="rounded-lg object-cover w-full max-w-[320px] md:max-w-none"
              width={320}
              height={320}
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left space-y-3 md:space-y-4">
            <h3 className="text-[#f14d5d] font-bold text-base md:text-lg">Tajweed</h3>
            <h2 className="text-gray-900 text-2xl md:text-4xl">
              Learn Advance <span className="text-[#f14d5d]">Tajweed</span>
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="bg-[#f14d5d] text-white px-6 py-2 rounded hover:bg-[#e0dada] hover:text-black">
              Enroll Today
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-2 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-3 md:space-y-4 md:order-2">
            <h3 className="text-[#f14d5d] font-bold text-base md:text-lg">Islamic</h3>
            <h2 className="text-gray-900 text-2xl md:text-4xl">
              Learn Advance <span className="text-[#f14d5d]">Islamic</span>
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="bg-[#f14d5d] text-white px-6 py-2 rounded hover:bg-[#e0dada] hover:text-black">
              Enroll Today
            </button>
          </div>
          
          {/* Image Section */}
          <div className="relative w-full flex justify-center md:justify-end">
            <Image
              src="/assests/Course/course2.png"
              alt="Robotics"
              className="rounded-lg object-cover w-full max-w-[400px] md:max-w-none"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
