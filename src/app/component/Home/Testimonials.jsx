import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import Image from "next/image";


const Testimonials = () => {
  const testimonial = [
    {
      id: 1,
      img: "/assests/Common/instructor-1.jpg", // Updated image path for public folder
      text: "They are creative enough. Very much creative and powerful enough. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      designation: "Marketing Specialist",
    },
    {
      id: 2,
      img: "/assests/Common/instructor-1.jpg", // Updated image path for public folder
      text: "They are creative enough. Very much creative and powerful enough. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Cory Zamora",
      designation: "Developer",
    },
    {
      id: 3,
      img: "/assests/Common/instructor-1.jpg", // Updated image path for public folder
      text: "They are creative enough. Very much creative and powerful enough. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Jackie Sanders",
      designation: "Marketing Manager",
    },
    {
      id: 4,
      img: "/assests/Common/instructor-1.jpg", // Updated image path for public folder
      text: "They are creative enough. Very much creative and powerful enough. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Nikolas Brooten",
      designation: "Developer",
    },
    {
      id: 5,
      img: "/assests/Common/instructor-1.jpg", // Updated image path for public folder
      text: "They are creative enough. Very much creative and powerful enough. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Terry Ambady",
      designation: "Developer",
    },
  ];

  // Updated Slider settings for 3 visible cards
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For tablet devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-blue-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Our Students Says</h2>
          <p className="text-gray-600">Discover Your Perfect Program In Our Courses.</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {testimonial.map((data) => (
              <div key={data.id} className="p-4">
                <div className="p-8 bg-white shadow-md rounded-md">
                  <div className="flex flex-col items-start">
                    <div className="flex justify-start items-start mb-3">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-6xl text-blue-gray-100" />
                    </div>
                    <p className="text-gray-700 text-left mb-6">{data.text}</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={data.img} // Updated image source for next/image
                          alt={data.name}
                          width={64} // Specify width
                          height={64} // Specify height
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{data.name}</h4>
                        <span className="text-gray-500 text-sm">{data.designation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
