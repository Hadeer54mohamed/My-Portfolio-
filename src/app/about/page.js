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
  if (aboutData?.isHidden) {
    return null;}

  if (aboutData.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-4">No About Information Available</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find any about information at the moment.
        </p>
      </div>
    );
  }

  return (
<div className="mt-20 p-6 min-h-screen rounded-3xl bg-gradient-to-tl from-blue-50 via-green-50 to-gray-50 backdrop-blur-sm bg-opacity-80">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">About Us</h2>

      <div
        className={
          aboutData.length === 1
            ? 'flex justify-center'
            : 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
        }
      >
        {aboutData.map((about, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-md shadow-md hover:shadow-lg rounded-[2rem] p-8 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {about.image && (
              <div className="mb-6">
                <img
                  src={urlFor(about.image).url()}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow"
                />
              </div>
            )}

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{about.name}</h3>
            <p className="text-md leading-relaxed text-gray-700 mb-4 text-center">
              {about.bio}
            </p>

            <p className="text-sm text-gray-600 text-center italic">
              We believe in delivering quality work to our clients.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
