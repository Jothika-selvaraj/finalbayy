'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';  // Ensure react-toastify is installed

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const endpoint = 'http://localhost:3001/api/blogs';
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("data>>>",data);
    setBlogs(data.blogs || data);
  };

  
  


  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/blogs/${id}`);
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
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">All Blogs</h1>
      
      {/* Responsive table wrapper with horizontal scroll for mobile */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog Title</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(blogs) ? (
              blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{blog.author}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{blog.title}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                    {blog.image ? (
                      <img 
                        src={blog.image} 
                        className="w-20 h-20 object-cover rounded-lg"
                        alt={blog.title}
                      />
                    ) : (
                      <span className="text-gray-400 italic">No image available</span>
                    )}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => deleteBlog(blog._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-500 text-sm">
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default BlogList;