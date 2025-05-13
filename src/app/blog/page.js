'use client';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "blog"]');
      setBlogData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-2 animate-pulse p-6">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
      </div>
    );
  }
  if (blogData?.isHidden) { return null; }
  
  if (blogData.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-4">No Blogs Available</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find any blogs at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className=" mt-20 p-6 min-h-screen bg-gradient-to-br from-white via-green-50 to-blue-100 rounded-3xl">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Our Blogs</h2>

      <div
        className={`grid gap-8 ${
          blogData.length === 1
            ? 'grid-cols-1 justify-center'
            : 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {blogData
          .filter((blog) => blog.slug && blog.slug.current)
          .map((blog) => (
            <div
              key={blog._id}
              className="bg-white/90 backdrop-blur-md text-gray-800 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
            >
              {blog.image?.asset && (
                <img
                  src={urlFor(blog.image)?.url()}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
              )}

              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-2xl font-semibold mb-3 text-gray-800">{blog.title}</h4>
                <p className="text-sm text-gray-700 line-clamp-3 mb-4">{blog.description}</p>

                <div className="mt-auto">
                  <Link
                    href={`/blog/${blog.slug.current}`}
                    className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
