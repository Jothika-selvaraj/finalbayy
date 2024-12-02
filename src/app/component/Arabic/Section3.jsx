import React from "react";
import Image
 from "next/image";
const Section3 = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-8 bg-gray-50">
      {/* Header */}
      <div className="text-left mb-8 sm:mb-12 px-2 sm:pl-40">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-black">
          Related <span className="text-[#f14d5d] font-bold">Course</span>
        </h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600">
          You don&apos;t have to struggle alone, you&apos;ve got our assistance and help.
        </p>
      </div>

      {/* Course Cards */}
      <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 px-2 sm:pl-40">
        {/* Card 1 */}
        <a
          href="/courses/quranic-studies"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-full sm:w-[300px] mb-4 sm:mb-0 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative">
            <Image
              src="/assests/Courses/quran3.jpg"
              alt="Quranic Studies Course"
              width={300}
              height={192}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
              Quranic
            </span>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-base sm:text-lg text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis consectetur, porro possimus neque perferendi
            </h3>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="/courses/arabic-language"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-full sm:w-[300px] hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative">
            <Image
              src="/assests/Courses/arabic3.jpg"
              alt="Arabic Language Course"
              width={300}
              height={192}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-sm px-3 py-1 rounded-full">
              Arabic
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam nesciunt numquam magni maiores iste    
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section3;
