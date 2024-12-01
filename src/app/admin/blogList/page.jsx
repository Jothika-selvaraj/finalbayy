'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Image from 'next/image';

const Page = () => {

  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const endpoint = 'http://localhost:3001/api/blogs';
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
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

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
                <table className="w-full text-sm text-gray-500">
                    <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="hidden sm:block px-6 py-3">
                                Author name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Blog Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
        <tbody>
          {Array.isArray(blogs) ? (
               blogs.map((blog) => (
                 <tr key={blog._id}>
                  <td>{blog.author}</td>
                  <td>{blog.title}</td>
                  <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td>
                    {blog.image ? (
                      <Image 
                        src={`http://localhost:3001/${blog.image}`} 
                        alt={blog.title}
                        className="w-24 h-16 object-cover"
                      />
                    ) : (
                      <span>No image available</span>
                    )}
                  </td>
                  <td>
                    <button onClick={() => deleteBlog(blog._id)}>Delete</button>
                  </td>
                </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No blogs found</td>
          </tr>
        )}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Page
