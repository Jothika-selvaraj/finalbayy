import React from "react";
import { FaUsers, FaCertificate, FaComments, FaBriefcase, FaWifi, FaClock, FaCloudDownloadAlt } from 'react-icons/fa';
import Image from "next/image";
const Section2 = () => {
  return (
    <section className="bg-[#204F61] text-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section - Image and Caption */}
        <div className="w-full lg:w-1/2 relative px-6">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assests/Header/why.jpeg"
              alt="Students learning"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>
          {/* Caption Card */}
          <div className="absolute bottom-4 bg-white right-[20%] transform translate-x-1/2 translate-y-1/2 bg-blue-gray-50 text-gray-800 px-8 py-5 rounded-lg shadow-lg w-[80%] lg:w-[50%]">
            <p className="text-md mb-2">
              Affordable online courses for everyone. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
            <div className="flex items-center space-x-3">
              <Image
                src="/assests/Common/instructor-1.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-bold">Melani North</h5>
                <p className="text-xs text-gray-500">Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 p-5">
          <h4 className="text-sm uppercase tracking-wide mb-4 text-gray-300">Why Choose Us</h4>
          <h2 className="text-4xl py-2 mb-4">
            Learn More Skill Be More Competitive
          </h2>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam venenatis odio dolor quis suscipit ipsum interdum sit amet.
          </p>
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full text-3xl">
                <FaUsers className="text-gray-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-400">Trusted by Millions</h5>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-3xl rounded-full">
                <FaCertificate className="text-gray-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-400">Certificate Awarded</h5>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-3xl rounded-full">
                <FaComments className="text-gray-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-400">24/7 Online Chat</h5>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-3xl rounded-full">
                <FaBriefcase className="text-gray-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-400">Made by Professionals</h5>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-3xl rounded-full">
                <FaWifi className="text-gray-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-400">Available Offline</h5>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-3xl rounded-full">
                <FaClock className="text-gray-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-400">600+ Hours of Classes</h5>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-3xl rounded-full">
                <FaCloudDownloadAlt className="text-gray-400" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-400">Download Resources</h5>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
