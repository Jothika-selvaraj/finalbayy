"use client"
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Javascript for the Beginners",
      author: "John Kite",
      date: "06 Nov, 2022",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...",
      image: "/assests/Blog/b1.jpeg", // Replace with your image URL
    },
    {
      id: 2,
      title: "Identity Design for a New Courses Crusader Work",
      author: "Hazel Thomas",
      date: "10 Nov, 2022",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...",
      image: "/assests/Blog/b2.jpeg",
    },
    {
      id: 3,
      title: "Grow Your Students Base With Free Courses",
      author: "Joyce Knight",
      date: "12 Nov, 2022",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...",
      image: "/assests/Blog/b6.jpeg",
    },
    {
      id: 4,
      title: "Easily Create Modify & Sell Courses Online",
      author: "Hazel Thomas",
      date: "15 Nov, 2022",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...",
      image: "/assests/Blog/b5.jpeg",
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8 px-6 py-10">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 flex-1">
          {blogPosts.map((post) => (
            <a 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 max-w-md mx-auto w-full cursor-pointer h-96"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600">
                  By {post.author} • {post.date}
                </p>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-6">
          {/* Search Box */}
          <form onSubmit={(e) => { e.preventDefault(); /* Add search handling */ }} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </form>

          {/* Latest Posts Widget */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Latest Posts</h5>
            <ul className="space-y-3">
              {blogPosts.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <a 
                    href={`/blog/${post.id}`}
                    className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-md transition-colors"
                  >
                    <img
                      src={post.image}
                      alt="Blog Thumb"
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <span className="text-sm text-gray-700 hover:text-blue-500">
                        {post.title}
                      </span>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Widget */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Categories</h5>
            <ul className="divide-y divide-gray-300">
              {[
                { name: "Business", count: 4 },
                { name: "Education", count: 5 },
                { name: "Arabic", count: 1 },
                { name: "Web Development", count: 2 },
                { name: "Marketing", count: 4 },
              ].map((category) => (
                <a
                  href={`/category/${category.name.toLowerCase()}`}
                  key={category.name}
                  className="block hover:bg-gray-200 transition-colors"
                >
                  <li className="text-sm py-2 flex justify-between text-gray-700">
                    <span>{category.name}</span>
                    <span>({category.count})</span>
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* Popular Tags Widget */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Popular Tags</h5>
            <div className="flex flex-wrap gap-2">
              {[
                "Quran",
                "Art",
                "Development",
                "UI Design",
                "e-Learning",
                "Online Courses",
                "Finance",
                "Consulting",
                "Design",
                "Education",
                "Course",
              ].map((tag) => (
                <a
                  href={`/tag/${tag.toLowerCase()}`}
                  key={tag}
                  className="px-3 py-1 bg-gray-200 text-sm rounded-md text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
