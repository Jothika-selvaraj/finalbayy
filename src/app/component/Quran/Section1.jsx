"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import Image from "next/image";
import { FaChalkboardTeacher, FaClock, FaBookOpen, FaCalendarAlt, FaUsers, FaGlobe, FaCertificate } from "react-icons/fa";

const Section1 = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="p-2 sm:p-6 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Quran & Memorization
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Brief summary of the course. Brief summary of the course. Brief
            summary of the course.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 p-4 sm:p-6">
            <div className="bg-gray-100 border border-gray-300 rounded-lg h-64 flex items-center justify-center overflow-hidden">
              <Image
                src="/assests/Courses/quran1.jpg" // Replace this with the actual path to your image
                alt="Course Image"
                className="w-full h-full object-cover"
                width={600} // Specify the width of the image
                height={400} // Specify the height of the image
              />
            </div>
            <div className="mt-4">
              {/* Tabs */}
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 border-b border-gray-300">
                <button
                  className={`pb-2 text-sm sm:text-base uppercase ${
                    activeTab === "description"
                      ? "bg-[#f14d5d] text-white p-2 rounded border-b-2 uppercase"
                      : "text-gray-900"
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`pb-2 text-sm sm:text-base uppercase ${
                    activeTab === "courseContent"
                      ? "bg-[#f14d5d] text-white p-2 rounded border-b-2 uppercase"
                      : "text-gray-900"
                  }`}
                  onClick={() => setActiveTab("courseContent")}
                >
                  Course Content
                </button>
                <button
                  className={`pb-2 text-sm sm:text-base uppercase ${
                    activeTab === "requirements"
                      ? "bg-[#f14d5d] text-white p-2 rounded border-b-2 uppercase"
                      : "text-gray-900"
                  }`}
                  onClick={() => setActiveTab("requirements")}
                >
                  Requirements
                </button>
                <button
                  className={`pb-2 text-sm sm:text-base uppercase ${
                    activeTab === "whatYouLearn"
                      ? "bg-[#f14d5d] text-white p-2 rounded border-b-2 uppercase"
                      : "text-gray-900"
                  }`}
                  onClick={() => setActiveTab("whatYouLearn")}
                >
                  What You&apos;ll Learn
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-4 sm:mt-8 text-gray-700 text-sm sm:text-base">
                {activeTab === "description" && (
                  <p>
                    <span className="text-[#204f61] text-left font-bold">QURAN COURSE</span><br /> <br />
                    This is the description of the course. Learn Tajweed & Makhraj with detailed guidance and practice. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati facere, inventore magni unde laboriosam doloribus recusandae omnis autem harum molestiae, quaerat odio? Velit, sapiente! Cum debitis eum deserunt possimus dolor.
                  </p>
                )}
                {activeTab === "courseContent" && (
                  <p>Here is the detailed course content outline.</p>
                )}
                {activeTab === "requirements" && (
                  <p>These are the requirements for the course.</p>
                )}
                {activeTab === "whatYouLearn" && (
                  <p>Here is what you’ll learn in this course.</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 p-4 sm:p-6 border-l border-gray-200">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <Image
                src="/assests/Courses/tajweed.jpg"
                alt="Course Thumbnail"
                width={500} // Set the width for the image
                height={300} // Set the height for the image
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                Course Details
              </h3>
              <ul className="mt-4 text-gray-600 space-y-6 px-4">
                <li className="flex items-center space-x-2">
                  <FaChalkboardTeacher className="text-black" />
                  <span>
                    <span className="font-medium text-[#f14d5d]">Instructor: </span>Eleanor Fant
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaClock className="text-black" />
                  <span>
                    <span className="font-medium text-[#f14d5d]">Class Duration: </span>30-60 Mins
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBookOpen className="text-black" />
                  <span>
                    <span className="font-medium text-[#f14d5d]">Lectures: </span>14
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-black" />
                  <span>
                    <span className="font-medium text-[#f14d5d]">Timeframe: </span>4-6 Months
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaUsers className="text-black" />
                  <span>
                    <span className="font-medium text-[#f14d5d]">Enrolled: </span>20 Students
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaGlobe className="text-black" />
                  <span>
                    <span className="font-medium text-[#f14d5d]">Language: </span>English
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCertificate className="text-black" />
                  <span>
                    <span className="font-medium text-[#f14d5d]">E-Certificate: </span>Yes
                  </span>
                </li>
              </ul>
              <button className="mt-4 w-full bg-[#f14d5d] text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
