import React from 'react';


const Coursebanner = () => {
  return (
    <div className="relative bg-cover bg-center h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]" 
    style={{
      backgroundImage: 'url(/assests/Course/course-bann.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-3 sm:px-6 md:p-8">
        <h5 className='text-[#eac755] text-xs sm:text-sm md:text-base'>And He is the Forgiving, the Loving,</h5>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Courses</h1>
        <p className="max-w-3xl text-sm sm:text-base md:text-md mt-3 sm:mt-6 px-2 sm:px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, unde! Asperiores eum autem, Lorem ipsum dolor sit,amet consectetur adipisicing elit.</p>
        <button className="bg-[#f14d5d] text-white hover:bg-[#fff] hover:text-[black] text-sm sm:text-base lg:text-lg py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg mt-3 sm:mt-4">Learn More</button>
      </div>
    </div>
  );
};

export default Coursebanner;
