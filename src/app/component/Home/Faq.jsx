import React, { useState } from 'react';



const Faq = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: "How long has your company been established?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis." },
    { question: "How many staff work there?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis." },
    { question: "Does your company open job vacancies?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis." },
    { question: "Can I consult about your services first?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis." },
    { question: "Does your company have subsidiaries?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus neque eget eros aliquet, sit amet dignissim nisl venenatis." },
    { question: "What payment methods do you provide?", answer: "" },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-gray-600 text-sm font-medium tracking-wide uppercase mb-2">FAQs</h2>
        <h1 className="text-center text-2xl sm:text-4xl text-black mb-8">Got Questions? We&apos;ve Got Answers</h1>

        <div className="shadow-md rounded-2xl divide-y divide-gray-300 bg-white py-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 sm:p-8">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-gray-800 font-medium focus:outline-none"
              >
                <h2 className="text-base sm:text-lg">{faq.question}</h2>
                <span
                  className="text-white bg-[#c1dbe5] h-6 w-6 sm:h-8 sm:w-8 rounded-full text-center active:bg-[#204F61] cursor-pointer"
                >
                  {open === index ? "−" : "+"}
                </span>
              </button>
              {open === index && faq.answer && (
                <p className="text-gray-600 mt-3 text-base sm:text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="bg-[#F14D5D] text-white px-4 py-2 sm:px-6 sm:py-4 rounded-md shadow-md hover:bg-white hover:text-black focus:outline-none">
            Book Free Evaluation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
