"use client"

import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; 

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const endpoint = 'http://88.222.215.48:3001/api/blogs';
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBlogs(data.blogs || data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blogs. Please try again later.');
      setBlogs([]); // Set empty array in case of error
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`http://88.222.215.48:3001/api/blogs/${id}`);
      console.log("BlogList component loaded", response.data);
      toast.success(response?.data?.msg || 'Blog deleted successfully');
      fetchBlogs(); // Refresh blog list
    } catch (error) {
      console.error('Error deleting blog:', error.response?.data || error.message);
      toast.error('Failed to delete the blog.');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8 px-6 py-10">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 flex-1">
          {blogs.map((blog) => (
            <a 
              href={`/blog/${blog._id}`} 
              key={blog._id}
              className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 max-w-md mx-auto w-full cursor-pointer h-96"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h4 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-600">
                  By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm">{blog.description}</p>
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
              {blogs.slice(0, 3).map((blog) => (
                <li key={blog._id}>
                  <a 
                    href={`/blog/${blog._id}`}
                    className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded-md transition-colors"
                  >
                    <img
                      src={blog.image}
                      alt="Blog Thumb"
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <span className="text-sm text-gray-700 hover:text-blue-500">
                        {blog.title}
                      </span>
                      <p className="text-xs text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
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
