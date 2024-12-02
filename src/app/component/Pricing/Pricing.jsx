import React from "react";

const Pricing = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-gray-800">
          Select The Best Plan <br className="hidden sm:block" /> For Your Needs
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Simple and Transparent with no hidden fees.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="w-full bg-white border-[2px] border-[#f14d5d] rounded-3xl shadow-lg text-center overflow-hidden">
          {/* Title Section */}
          <div className="p-2">
            <h3 className="text-2xl font-bold text-[#f14d5d]">Basic</h3>
          </div>

          {/* Gradient Section */}
          <div className="relative bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] rounded-t-3xl p-6">
            {/* Price Section */}
            <div className="relative flex justify-center items-center mb-6">
              <span className="text-4xl font-extrabold text-gray-900">$16.00</span>
              <span className="absolute -top-2 right-0 text-xs bg-[#f14d5d] text-white px-2 py-1 rounded-full shadow-md">
                Save 65%
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-6">
              / hour / class / monthly <br />
              +3 Extra months
            </p>

            {/* Features */}
            <ul className="space-y-3 text-sm text-white text-left ml-4">
              <li>✔ 2 Classes in Week*</li>
              <li>✔ 4 Hours in a Month</li>
              <li>✔ E-Syllabus Access</li>
              <li>✔ Progress Report (Quarterly)</li>
              <li>✔ Video Recordings</li>
              <li>✔ Limited Dashboard Access</li>
              <li>✔ E-Certificate</li>
              <li>✔ 00% Family Discount *</li>
            </ul>

            {/* Button */}
            <button className="w-full mt-8 bg-[#f14d5d] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#e04154] transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-white border-[2px] border-[#5b8dfc] rounded-3xl shadow-lg text-center overflow-hidden">
          {/* Title Section */}
          <div className="p-2">
            <h3 className="text-2xl font-bold text-[#5b8dfc]">Necessary</h3>
          </div>

          {/* Gradient Section */}
          <div className="relative bg-gradient-to-t from-[#9ab9fc] to-[#5b8dfc] rounded-t-3xl p-6">
            {/* Price Section */}
            <div className="relative flex justify-center items-center mb-6">
              <span className="text-4xl font-extrabold text-gray-900">$16.00</span>
              <span className="absolute -top-2 right-0 text-xs bg-[#f14d5d] text-white px-2 py-1 rounded-full shadow-md">
                Save 65%
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-6">
              / hour / class / monthly <br />
              +3 Extra months
            </p>

            {/* Features */}
            <ul className="space-y-3 text-sm text-white text-left ml-4">
              <li>✔ 2 Classes in Week*</li>
              <li>✔ 4 Hours in a Month</li>
              <li>✔ E-Syllabus Access</li>
              <li>✔ Progress Report (Quarterly)</li>
              <li>✔ Video Recordings</li>
              <li>✔ Limited Dashboard Access</li>
              <li>✔ E-Certificate</li>
              <li>✔ 00% Family Discount *</li>
            </ul>

            {/* Button */}
            <button className="w-full mt-8 bg-[#5b8dfc] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#4a7be2] transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-white border-[2px] border-gray-400 rounded-3xl shadow-lg text-center overflow-hidden">
          {/* Title Section */}
          <div className="p-2">
            <h3 className="text-2xl font-bold text-gray-900">Exclusive</h3>
          </div>

          {/* Gradient Section */}
          <div className="relative bg-gradient-to-t from-gray-300 to-gray-400 rounded-t-3xl p-6">
            {/* Price Section */}
            <div className="relative flex justify-center items-center mb-6">
              <span className="text-4xl font-extrabold text-gray-900">$16.00</span>
              <span className="absolute -top-2 right-0 text-xs bg-[#f14d5d] text-white px-2 py-1 rounded-full shadow-md">
                Save 65%
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-6">
              / hour / class / monthly <br />
              +3 Extra months
            </p>

            {/* Features */}
            <ul className="space-y-3 text-sm text-white text-left ml-4">
              <li>✔ 2 Classes in Week*</li>
              <li>✔ 4 Hours in a Month</li>
              <li>✔ E-Syllabus Access</li>
              <li>✔ Progress Report (Quarterly)</li>
              <li>✔ Video Recordings</li>
              <li>✔ Limited Dashboard Access</li>
              <li>✔ E-Certificate</li>
              <li>✔ 00% Family Discount *</li>
            </ul>

            {/* Button */}
            <button className="w-full mt-8 bg-gray-400 text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-500 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full bg-white border-[2px] border-[#7b5bf9] rounded-3xl shadow-lg text-center overflow-hidden">
          {/* Title Section */}
          <div className="p-2">
            <h3 className="text-2xl font-bold text-[#7b5bf9]">Premium</h3>
          </div>

          {/* Gradient Section */}
          <div className="relative bg-gradient-to-t from-[#b49dfc] to-[#7b5bf9] rounded-t-3xl p-6">
            {/* Price Section */}
            <div className="relative flex justify-center items-center mb-6">
              <span className="text-4xl font-extrabold text-gray-900">$16.00</span>
              <span className="absolute -top-2 right-0 text-xs bg-[#f14d5d] text-white px-2 py-1 rounded-full shadow-md">
                Save 65%
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-6">
              / hour / class / monthly <br />
              +3 Extra months
            </p>

            {/* Features */}
            <ul className="space-y-3 text-sm text-white text-left ml-4">
              <li>✔ 2 Classes in Week*</li>
              <li>✔ 4 Hours in a Month</li>
              <li>✔ E-Syllabus Access</li>
              <li>✔ Progress Report (Quarterly)</li>
              <li>✔ Video Recordings</li>
              <li>✔ Limited Dashboard Access</li>
              <li>✔ E-Certificate</li>
              <li>✔ 00% Family Discount *</li>
            </ul>

            {/* Button */}
            <button className="w-full mt-8 bg-[#7b5bf9] text-white py-2 px-4 rounded-full font-semibold hover:bg-[#684ac9] transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-left px-4">
        <p className="text-xs sm:text-sm text-gray-600">
          * The rescheduled class must be completed within 20 days. <br />
          ** Re-Schedule or Cancellations must be informed to Teacher/Admin at least 4 hours before
          the lesson&apos;s start time. <br />
          *** Discounts are offered for two siblings; discounts do not apply to group lessons. <br />
          **** Payments need to be made in US currency only.
        </p>
      </div>
      <div className="mt-12 text-center bg-white p-4 sm:p-6 shadow-md rounded-lg max-w-4xl mx-auto border-4 sm:border-8 border-gray-400">
        <button className="hover:underline text-sm sm:text-base">
          Join the Academy and Transform Your Skills
        </button>
      </div>
    </div>
  );
};

export default Pricing;
