
"use client"

import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link
import { FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import Image from 'next/image'; // Import Image from next/image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-2">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo on the left */}
        <div className="logo pl-4">
          <Link href="/">
            <Image
              src="/assests/Header/logo.jpg" // Replace with your logo's path
              alt="Logo"
              width={200} // Set the appropriate width for the logo
              height={200} // Set the appropriate height for the logo
              className='h-auto w-auto max-w-[150px] md:max-w-[200px]'
            />
          </Link>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button 
          className="lg:hidden text-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Menu - Desktop and Mobile */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:justify-center lg:items-center`}>
          <ul className="list-none p-4 lg:p-0 lg:flex lg:gap-6 space-y-4 lg:space-y-0">
            {/* Courses List */}
            <li className="relative group">
              <Link href="/course" className="text-black text-lg text-left hover:text-[#f14d5d]">
                Courses
              </Link>
              {/* Dropdown for Courses */}
              <ul className="absolute text-center mt-2 w-36 bg-white shadow-lg rounded-md z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <li>
                  <Link href="/tajweed" className="block px-4 py-2 text-black hover:bg-gray-100">
                    Tajweed
                  </Link>
                </li>
                <li>
                  <Link href="/quran" className="block px-4 py-2 text-black hover:bg-gray-100">
                    Quran
                  </Link>
                </li>
                <li>
                  <Link href="/arabic" className="block px-4 py-2 text-black hover:bg-gray-100">
                    Arabic
                  </Link>
                </li>
              </ul>
            </li>

            {/* Price Link */}
            <li>
              <Link href="/pricing" className="text-black text-lg hover:text-[#f14d5d]">
                Price
              </Link>
            </li>

            {/* More Dropdown */}
            <li className="relative group">
              <Link href="#" className="text-black text-lg hover:text-[#f14d5d]">
                More
              </Link>
              {/* Dropdown for More */}
              <ul className="absolute text-left w-36 bg-white shadow-lg rounded-md z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <li>
                  <Link href="/about" className="block px-4 py-2 text-black hover:bg-gray-100">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 text-black hover:bg-gray-100">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block px-4 py-2 text-black hover:bg-gray-100">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 text-black hover:bg-gray-100">
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block px-4 py-2 text-black hover:bg-gray-100">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="block px-4 py-2 text-black hover:bg-gray-100">
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>

            {/* Cart Icon */}
            <li className="relative group">
              <Link href="/" className="text-black text-lg hover:text-[#f14d5d] flex items-center space-x-2">
                <span>Cart</span>
                <FaShoppingCart className="text-2xl" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons on the right (Phone, Email) */}
        <div className="flex items-center">
          <a href="tel:+1234567890" className="text-black text-xl hover:text-[#f14d5d] mr-8">
            <FaPhone style={{ transform: 'scaleX(-1)' }} />
          </a>
          <a href="mailto:info@website.com" className="text-black text-2xl hover:text-[#f14d5d] mr-8">
              <FaEnvelope />
           </a>

        </div>
      </div>
    </header>
  );
};

export default Header;
