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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
         <h3 className="text-lg font-semibold text-[#204f61]">BLOGS & NEWS</h3>
          <h2 className="text-5xl mt-5 text-black mb-4">
            Articles and Blog From Educine
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper, pulvinar dapibus leo.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 h-full lg:w-5/6 mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 bg-blue-gray-50">
                  <p className="text-sm text-gray-500 mb-2">ASK Project • June 3, 2024</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">
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
