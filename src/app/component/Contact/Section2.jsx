import React from "react";
import { AiOutlineSmile } from "react-icons/ai"; // Import for the smile icon
import { BsChatDots } from "react-icons/bs"; // Import for the chat bubble icon

const Section2 = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-0">
        {/* Knowledge Base Card */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-12 text-center">
          <div className="flex justify-center items-center mb-4 text-blue-400 text-4xl sm:text-5xl">
            <AiOutlineSmile /> {/* React icon for smile */}
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Knowledge Base</h2>
          <p className="text-gray-600 mb-4">
            My good sir plastered cuppa barney <br />cobblers mush argy bargy ruddy.
          </p>
          <button className="px-4 sm:px-6 mt-4 py-2 sm:py-4 border border-gray-400 text-gray-800 font-medium hover:bg-gray-100">
             Visit documentation
           </button>
        </div>

        {/* Online Support Card */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-12 text-center">
          <div className="flex justify-center items-center mb-4 text-blue-500 text-4xl sm:text-5xl">
            <BsChatDots /> {/* React icon for chat bubble */}
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Online Support</h2>
          <p className="text-gray-600 mb-4">
            My good sir plastered cuppa barney cobblers <br />mush argy bargy ruddy.
          </p>
          <button className="px-4 sm:px-6 mt-4 py-2 sm:py-4 border border-gray-400 text-gray-800 font-medium hover:bg-gray-100">
             Send Ticket
           </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
