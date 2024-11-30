import React from 'react';
import Link from 'next/link'; // Import Next.js Link
import { FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import Image from 'next/image'; // Import Image from next/image

const Header = () => {
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
              className='h-auto'
            />
          </Link>
        </div>

        {/* Centered Navigation Menu */}
        <nav className="flex justify-center items-center space-x-6">
          <ul className="list-none p-0 flex gap-6">
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
