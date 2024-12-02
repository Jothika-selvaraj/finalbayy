import React from "react";
import Image  from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#204F61] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 px-4 lg:pl-28 text-center lg:text-left">
          <h4 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-gray-300">
            Master Quran and Arabic, Step by Step
          </h4>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Arabic Quran Mastery
          </h1>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Begin your journey with expert tutors and <br className="hidden sm:block" /> customized courses for every learner.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button 
              className="w-full sm:w-auto bg-[#F14D5D] text-white hover:bg-[white] hover:text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base transition-colors duration-300"
              aria-label="Find Course"
            >
              Find Course
            </button>
            <button 
              className="w-full sm:w-auto bg-white hover:bg-[#F14D5D] text-black hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base transition-colors duration-300"
              aria-label="Book a Free Trial Lesson"
            >
              Book a Free Trial Lesson
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[400px] relative overflow-hidden rounded-b-full">
            <Image
              src="/assests/Header/homebann.jpg"
              alt="Children learning Quran"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
