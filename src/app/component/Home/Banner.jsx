import React from "react";
import Image  from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#204F61] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 pl-6 lg:pl-28 text-center lg:text-left">
          <h4 className="text-lg sm:text-xl mb-4 text-gray-300">
            Master Quran and Arabic, Step by Step
          </h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Arabic Quran Mastery
          </h1>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Begin your journey with expert tutors and <br /> customized courses for every learner.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button 
              className="bg-[#F14D5D] text-white hover:bg-[white] hover:text-black px-6 py-3 rounded-md"
              aria-label="Find Course"
            >
              Find Course
            </button>
            <button 
              className="bg-white hover:bg-[#F14D5D] text-black hover:text-white px-6 py-3 rounded-md"
              aria-label="Book a Free Trial Lesson"
            >
              Book a Free Trial Lesson
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[400px] relative overflow-hidden rounded-b-full">
            <Image
             src="/assests/Header/homebann.jpg"
              alt="Children learning Quran"
              width={500}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
