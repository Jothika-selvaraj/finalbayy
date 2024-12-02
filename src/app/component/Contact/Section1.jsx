import React from "react";
import Link from 'next/link';  // Import the Link component

import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

const Section1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 p-4 lg:p-8 bg-white max-w-screen-2xl mx-auto">
      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-5xl font-bold mt-4">Get In Touch</h2>
        <p className="text-gray-600 mb-2 text-lg">
          Have a question or just want to say hi? We&apos;d love to hear from you.
        </p>
        <form className="space-y-6 mt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full sm:w-1/2 p-3 border border-gray-300 bg-blue-gray-50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-1/2 p-3 border border-gray-300 bg-blue-gray-50"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 bg-blue-gray-50"
          />
          <textarea
            placeholder="Enter Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 bg-blue-gray-50 "
          ></textarea>
               <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600" />
              <label htmlFor="terms" className="text-gray-600">
                I agree to the <a href="/terms" className="text-blue-600">Terms &amp; Conditions</a> {/* Fixed the & */}
              </label>
            </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-gray-700"
          >
            Send your message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 bg-white shadow-lg justify-center h-auto min-h-[500px] mt-8 lg:mt-0">
        <div className="space-y-6">
          {/* Office Information */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt size={24} className="text-blue-600" />
            <div>
              <h3 className=" text-xl font-bold text-black">New York Office</h3>
              <p className="text-gray-600">
                Maypole Crescent 70-80 Upper St Norwich NR2 1LT
              </p>
            </div>
          </div>

          {/* Email Information */}
          <div className="flex items-start gap-4">
            <FaEnvelope size={24} className="text-blue-600" />
            <div>
              <h3 className="text-xl font-bold text-black">Email us directly</h3>
              <p className="text-blue-600 hover:underline cursor-pointer">
                support@educal.com
              </p>
              <p className="text-blue-600 hover:underline cursor-pointer">
                info@educal.com
              </p>
            </div>
          </div>

          {/* Phone Information */}
          <div className="flex items-start gap-4">
            <FaPhone size={24} className="text-blue-600" />
            <div>
              <h3 className="text-xl font-bold text-black">Phone</h3>
              <p className="text-gray-600">+ (426) 742 26 44</p>
              <p className="text-gray-600">+ (224) 762 442 32</p>
            </div>
          </div>

            <div className="flex items-start gap-4">
  <div>
    <h3 className="font-bold text-gray-700 ml-10">Follow Us</h3><br />
    <div className="flex items-center ml-10 gap-4">
      <Link href="/" passHref>
        <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
      </Link>
      <Link href="/" passHref>
        <FaTwitter size={30} className="text-blue-600 hover:text-blue-800" />
      </Link>
      <Link href="/" passHref>
        <FaPinterest size={30} className="text-blue-600 hover:text-blue-800" />
      </Link>
    </div>
  </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default Section1;
