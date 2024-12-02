import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const FaqBanner = () => {
  return (
    <div
       className="relative py-10"
        style={{
              backgroundImage: "url('/assests/Common/faq.jpg')",
              backgroundSize: "cover",
               backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
             }}
        >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-10 md:py-20 px-4 gap-4 md:gap-0">
        {/* Left Section (FAQ Heading) */}
        <h1 className="text-5xl font-bold text-white">FAQ</h1>

        {/* Right Section (Breadcrumb Navigation) */}
        <nav>
          <ul className="flex items-center space-x-2 text-black text-md">
            <li>
              <Link href="/home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-pink-500">›</li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FaqBanner;
