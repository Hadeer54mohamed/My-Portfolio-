'use client';
import { client } from '@/sanity/lib/client';
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
        <p className="text-gray-600">Sorry, we couldn't find any about information at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h2>
      <div className="space-y-6">
        {aboutData.map((about, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-100 via-pink-100 to-red-100 text-gray-800 rounded-xl overflow-hidden shadow-md"
          >
            <div className="p-6">
              {about.profileImage && (
                <div className="flex justify-center mb-6">
                  <img
                    src={about.profileImage.asset?.url}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-2xl font-semibold">{about.name}</h3>
              </div>

              <p className="text-md leading-relaxed mb-4 text-center">{about.bio}</p>

              <p className="text-center text-sm text-gray-700">
                We believe in delivering quality work to our clients. Feel free to connect with us!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
