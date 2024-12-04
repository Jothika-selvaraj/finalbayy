



"use client";
import React from 'react';

const Blogdetails = ({ params }) => {
  const [blog, setBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        if (!params?.id) {
          throw new Error('Blog ID is missing');
        }
        const response = await fetch(`http://88.222.215.48:3001/api/blogs/${params.id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch blog details: ${response.status}`);
        }
        const data = await response.json();
        setBlog(data); // Assuming `data` contains the blog details
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog details:', err);
        setError('Failed to load blog details. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [params?.id]);

  if (loading) {
    return <div className="blog-details">Loading...</div>;
  }

  if (error) {
    return <div className="blog-details text-red-500">{error}</div>;
  }

  return (
    <div className="blog-details container mx-auto max-w-4xl px-4 py-8">
      {blog && (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="text-gray-600 mb-6">
            By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
          </div>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover mb-6 rounded-lg"
          />
          <div className="blog-content text-lg text-gray-700">{blog.content}</div>
        </>
      )}
    </div>
  );
};

export default Blogdetails;
