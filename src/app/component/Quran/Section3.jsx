import React from "react";
import Image from "next/image";
const Section3 = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      {/* Header */}
      <div className="text-left mb-12 pl-4 md:pl-40">
        <h2 className="text-3xl md:text-5xl text-black">
          Related <span className="text-[#f14d5d] font-bold">Course</span>
        </h2>
        <p className="mt-4 text-gray-600">
          You don&apos;t have to struggle alone, you&apos;ve got our assistance and help.
        </p>
      </div>

      {/* Course Cards */}
      <div className="flex flex-col md:flex-row justify-center md:justify-left gap-6 pl-4 md:pl-40">
        {/* Card 1 */}
        <a
          href="/courses/quranic-studies"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-full md:w-[300px] hover:shadow-lg transition-shadow duration-300"
          aria-label="Quranic Studies Course"
        >
          <div className="relative">
            <Image
              src="/assests/Courses/quran3.jpg"
              alt="Quranic Studies Course Cover"
              width={300}
              height={192}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-sm px-3 py-1 rounded-full">
              Quranic   
           </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis consectetur, porro possimus neque perferendi
            </h3>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="/courses/arabic-studies"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-full md:w-[300px] hover:shadow-lg transition-shadow duration-300"
          aria-label="Arabic Studies Course"
        >
          <div className="relative">
            <Image
              src="/assests/Courses/quran2.jpg"
              alt="Mechanical"
              width={300}  // Specify the width
              height={192} // Specify the height
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-sm px-3 py-1 rounded-full">
              Arabic
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg  text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam nesciunt numquam magni maiores iste    
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section3;
