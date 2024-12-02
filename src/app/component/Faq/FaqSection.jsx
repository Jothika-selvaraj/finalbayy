"use client";

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import react icons

const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Updated FAQ data - Quran, Arabic, and Tajweed related
  const faqData = [
    {
      question: 'What is Tajweed, and why is it important?',
      answer: 'Tajweed is the set of rules governing the pronunciation of Quranic letters to ensure proper recitation. It enhances understanding and preserves the meaning of the Quran.'
    },
    {
      question: 'Can beginners learn Quran with Tajweed?',
      answer: 'Yes, beginners can learn Quran with Tajweed. Our classes are tailored for all levels, from basic to advanced, ensuring a smooth learning curve.'
    },
    {
      question: 'Do you offer online Quran classes?',
      answer: 'Yes, we provide online Quran classes for students worldwide, with flexible schedules to accommodate different time zones.'
    },
    {
      question: 'How long does it take to learn Arabic for Quran reading?',
      answer: 'The duration depends on your current proficiency. For most beginners, learning to read Arabic fluently for Quranic purposes can take 3-6 months with consistent practice.'
    },
    {
      question: 'What is the age limit for joining the classes?',
      answer: 'There is no age limit. We offer classes for children, adults, and seniors, ensuring everyone has access to Quranic education.'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(index === openQuestion ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Search Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl text-gray-800">How Can We Help You?</h2>
        <form onSubmit={handleSearch} className="mt-6 sm:mt-8 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter the keyword..."
            className="px-3 sm:px-4 py-3 sm:py-4 w-full max-w-md border shadow-md rounded-xl text-sm sm:text-base"
          />
          <button className="px-4 sm:px-6 py-2 bg-[#1f1a41] text-white rounded-r-md hover:bg-gray-800 text-sm sm:text-base">
            Search
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: FAQ List */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-3xl sm:text-4xl text-gray-800 mb-4 sm:mb-6">Frequently Asked Questions</h3>
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((question, index) => (
              <button
                key={index}
                className="border-b border-gray-300 pb-3 sm:pb-4 cursor-pointer py-4 sm:py-6 w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg sm:text-xl text-gray-800 pr-4">{question.question}</h4>
                  {openQuestion === index ? (
                    <FiChevronUp className="text-gray-600 text-lg sm:text-xl flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="text-gray-600 text-lg sm:text-xl flex-shrink-0" />
                  )}
                </div>
                {openQuestion === index && (
                  <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">{question.answer}</p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div
          className="w-full lg:w-1/3 bg-gray-50 p-4 rounded-lg shadow-md"
          style={{ height: '30rem' }}
        >
          <h4 className="text-2xl text-gray-800 mb-3">Any Other Question?</h4>
          <form>
            <div className="mb-3">
              <label className="block text-gray-600 mb-1 text-md">Name</label>
              <input
                type="text"
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-600 mb-1 text-md">Email</label>
              <input
                type="email"
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-600 mb-1 text-md">Message</label>
              <textarea
                className="w-full px-3 py-3 border rounded-md text-sm"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#231e42] text-white text-xl py-4 rounded-md  hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
