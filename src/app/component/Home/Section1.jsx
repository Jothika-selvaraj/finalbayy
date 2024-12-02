import React from 'react';
import Image from 'next/image';
const Section1 = () => {
  const courses = [
    {
      id: 1,
      price: "Tajweed Course",
      img: "/assests/Course/Tajweed.png", // Updated for Next.js public path
      title: "Tajweed & Makhraj",
      desc: "Learn proper pronunciation and recitation of the Quran with expert guidance.",
    },
    {
      id: 2,
      price: "Quran Hifz",
      img: "/assests/Course/Islamic course.png", // Updated for Next.js public pathany
      title: "Quran Hifz",
      desc: "Master the memorization of the Quran with this comprehensive course.",
    },
    {
      id: 3,
      price: "Arabic Language",
      img: "/assests/Course/Arabic language.png", // Updated for Next.js public path
      title: "Arabic Language",
      desc: "Learn Arabic fluently with a focus on grammar, vocabulary, and communication.",
    },
  ];

  return (
    <section className="py-4 sm:py-9 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-10 px-4">
        <h2 className="text-base sm:text-lg text-[#f14d5d] font-semi-bold uppercase">Find your Path</h2>
        <h3 className="text-2xl sm:text-4xl">We Offering Courses From</h3>
        <p className="text-sm sm:text-base text-gray-500 mt-2">Discover Your Perfect Program In Our Courses.</p>
      </div>

      {/* Course Grid */}
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-3xl transition-shadow duration-300 py-6 sm:py-12 px-2 sm:px-4"
            >
              {/* Course Image */}
              <div className="relative">
                <div className="w-full sm:w-[240px] h-[160px] sm:h-[200px] mx-auto">
                  <Image
                    src={course.img}
                    alt={course.title}
                    width={240}
                    height={200}
                    className="object-contain sm:object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -left-2 sm:-left-4 -bottom-1 bg-[#f14d5d] text-white text-sm sm:text-md px-3 sm:px-4 py-2 sm:py-3">
                  {course.price}
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ease-in duration-500">
                <h3 className="text-xl font-bold text-black mb-4">{course.title}</h3>
                <p className="text-sm text-gray-800 text-center mb-4 px-4">{course.desc}</p>
                <a
                  href="/course"
                  className="text-sm font-bold bg-[#f14d5d] text-white px-4 py-2 rounded hover:bg-[#d93d4d] transition"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
