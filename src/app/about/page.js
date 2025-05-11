'use client';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useEffect, useState } from 'react';

export default function About() {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "about"]');
      setAboutData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
     return (
      <div className="space-y-4 animate-pulse p-6">
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
      </div>
    );
  }

  if (aboutData.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-4">No About Information Available</h2>
        <p className="text-gray-600">Sorry, we couldn't find any about information at the moment.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutData.map((about, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            {about.image && (
              <div className="mb-6">
                <img
                  src={urlFor(about.image).url()}
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 shadow-md"
                />
              </div>
            )}

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{about.name}</h3>
            <p className="text-md leading-relaxed text-gray-700 mb-4 text-center">{about.bio}</p>

            <p className="text-sm text-gray-600 text-center">
              We believe in delivering quality work to our clients. Feel free to connect with us!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
