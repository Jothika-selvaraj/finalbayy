import React from "react";
import Image from "next/image";
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/assests/Blog/b1.jpeg",
      title: "Quality online courses for all",
      alt: "Quality online courses",
    },
    {
      id: 2,
      image: "/assests/Blog/b2.jpeg",
      title: "Increase your skill in no time",
      alt: "Increase your skill",
    },
    {
      id: 3,
      image: "/assests/Blog/b6.jpeg",
      title: "Learn anytime and anywhere",
      alt: "Learn anytime and anywhere",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-base sm:text-lg font-semibold text-[#204f61]">BLOGS & NEWS</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-5 text-black mb-3 sm:mb-4">
            Articles and Blog From Educine
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 sm:mt-10 text-base sm:text-lg px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper, pulvinar dapibus leo.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-9 w-full lg:w-5/6 mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={500}
                  height={300}
                  className="w-full h-48 sm:h-60 object-cover"
                />
                <div className="p-4 sm:p-6 bg-blue-gray-50">
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">ASK Project • June 3, 2024</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    venenatis odio...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    venenatis odio...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
