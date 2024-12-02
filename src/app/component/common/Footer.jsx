import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link'; // Importing Link from next/link

const Footer = () => {
  return (
    <div className="">
      {/* Newsletter Overlay - Updated for better mobile responsiveness */}
      <div className="container relative top-20 z-10 mx-auto px-4">
        <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row items-center border border-gray-400 p-3 md:p-5">
          {/* Left Section - Updated image responsiveness */}
          <div className="w-full md:w-1/3 flex justify-center p-3 md:p-6">
            <Image
              src="/assests/Common/callfor.png"
              alt="Newsletter Illustration"
              width={400}
              height={300}
              className="w-full h-auto max-w-[200px] md:max-w-[300px]"
            />
          </div>

          {/* Right Section - Updated padding and spacing */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white w-full md:w-2/3 p-4 md:p-8 flex flex-col items-center gap-4 rounded-xl">
            <div className="text-center md:text-left w-full">
              <h3 className="text-lg md:text-xl font-bold mb-2">Subscribe Our Newsletter</h3>
              <p className="text-sm">Get the most update from our news</p>
            </div>

            <form className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-full text-gray-700 outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer - Updated grid and spacing */}
      <footer className="bg-[#1E1A41] text-white py-10 relative z-0">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pt-20">
          {/* Logo Section - Updated spacing */}
          <div className="md:col-span-4 space-y-6 flex flex-col items-center md:items-start">
            <Image
              src="/assests/Header/logo.jpg" // Replace with your logo's path
              alt="Bayyinah Academy"
              width={100}
              height={100}
              className="h-12"
            />
            <p className="text-xl text-center md:text-left">Download our App</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assests/Footer/google-play.webp"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-8"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assests/Footer/apple.webp"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-8"
                />
              </a>
            </div>
          </div>

          {/* Updated spacing for menu sections */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">COURSES</h3>
            <ul className=" text-lg">
              <li><Link href="/tajweed" className="hover:text-[#f14d5d]">Tajweed</Link></li>
              <li><Link href="/Quran" className="hover:text-[#f14d5d]">Quran</Link></li>
              <li><Link href="/Arabic" className="hover:text-[#f14d5d]">Arabic</Link></li>
              <li><Link href="/" className="hover:text-[#f14d5d]">Memorization</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
            <ul className=" text-lg">
              <li><Link href="/" className="hover:text-[#f14d5d]">About us</Link></li>
              <li><Link href="/blog" className="hover:text-[#f14d5d]">Blog</Link></li>
              <li><Link href="/" className="hover:text-[#f14d5d]">Our Teachers</Link></li>
              <li><Link href="/" className="hover:text-[#f14d5d]">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-[#f14d5d]">FAQ</Link></li>
              <li><Link href="/" className="hover:text-[#f14d5d]">Career</Link></li>
              <li><Link href="/" className="hover:text-[#f14d5d]">Sitemap</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2 text-sm pt-5">
              <div className="flex space-x-4 text-lg mr-12">
                <Link href="/" className="hover:text-gray-400">
                  <FaFacebookF className="text-white hover:text-blue-500" />
                </Link>
                <Link href="/" className="hover:text-gray-400">
                  <FaTwitter className="text-white hover:text-blue-400" />
                </Link>
                <Link href="/" className="hover:text-gray-400">
                  <FaLinkedinIn className="text-white hover:text-blue-600" />
                </Link>
                <Link href="/" className="hover:text-gray-400">
                  <FaPinterestP className="text-white hover:text-red-500" />
                </Link>
                <Link href="/" className="hover:text-gray-400">
                  <FaYoutube className="text-white hover:text-red-600" />
                </Link>
              </div>

              <li className="flex items-center space-x-2 pt-2">
                <HiLocationMarker className="text-xl text-white" />
                <span className="leading-tight text-md">
                  128, City Road, London, EC1V 2NX, UNITED KINGDOM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Updated for better mobile layout */}
        <div className="border-t border-gray-700 mt-8 pt-6 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-center md:text-left">
              <p>© Bayyinah Academy Ltd.</p>
            </div>

            <div className="text-center">
              <Link href="/terms" className="hover:underline mx-2">Terms of Service</Link> |
              <Link href="/privacy" className="hover:underline mx-2">Privacy Policy</Link>
            </div>

            <div className="flex justify-center space-x-4 text-lg">
              <Link href="/" className="hover:text-gray-400">
                <FaFacebookF className="text-white hover:text-blue-500" />
              </Link>
              <Link href="/" className="hover:text-gray-400">
                <FaTwitter className="text-white hover:text-blue-400" />
              </Link>
              <Link href="/" className="hover:text-gray-400">
                <FaLinkedinIn className="text-white hover:text-blue-600" />
              </Link>
              <Link href="/" className="hover:text-gray-400">
                <FaPinterestP className="text-white hover:text-red-500" />
              </Link>
              <Link href="/" className="hover:text-gray-400">
                <FaYoutube className="text-white hover:text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
