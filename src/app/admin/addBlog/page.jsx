'use client';

import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddBlog = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
    author: '',
    image: null, // Store the file
    imagePreviewUrl: '', // Store the generated thumbnail URL
  });

  // Handle input field changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(`[DEBUG] Updated field "${name}": ${value}`);
  };

  // Handle image selection and set the file object
  const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setData((prev) => ({ ...prev, image: file }));
      console.log('[DEBUG] Selected image:', file);
    }
  };



  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!data.title || !data.content || !data.author || !data.image) {
      toast.error('All fields (title, content, author, and image) are required');
      console.log('[DEBUG] Validation failed: Missing fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', data.title);       // Text data
    formData.append('content', data.content);   // Text data
    formData.append('author', data.author);     // Text data
    formData.append('image', data.image);       // Image file

    try {
      // Send POST request
      const response = await axios.post('http://localhost:3001/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Make sure the request content type is 'multipart/form-data'
        },
      });
      
     // Handle response
     if (response.status === 202) {
      toast.success('Blog added successfully!');
      console.log('[DEBUG] Blog added:', response.data);
      setData({ title: '', content: '', author: '', image: null }); // Reset form
    } else {
      toast.error('Error adding blog');
      console.log('[DEBUG] Unexpected response:', response);
    }
  } catch (error) {
    // Handle request error
    console.error('[DEBUG] Error during blog submission:', error.response || error.message);
    if (error.response) {
      // Log full error response from backend
      console.error('Backend error:', error.response.data);
    }
    toast.error('Failed to add blog. Please try again.');
  }
};

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image" className="mt-4 block cursor-pointer">
      <img 
       className='mt-4'
       src={data.image ? URL.createObjectURL(data.image) : '/'} // Show selected image thumbnail
       alt="Thumbnail"
       width={140}
       height={70}
     />
       
 </label>
    <input onChange={onImageChange} type="file" id="image" hidden />

 {/* Blog Title */}
    <p className="text-xl mt-4">Blog title</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Type here"
        required
      />
      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="content"
        onChange={onChangeHandler}
        value={data.content}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        placeholder="Write content here"
        rows={6}
        required
      />
      <p className="text-xl mt-4">Author</p>
      <input
        name="author"
        onChange={onChangeHandler}
        value={data.author}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Enter author name"
      />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default AddBlog;
