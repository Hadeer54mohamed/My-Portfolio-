'use client';

import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "contact"]');
      setContactData(data);
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

  if (contactData.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-4">No Contact Information Available</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find any contact information at the moment.
        </p>
      </div>
    );
  }
  if (contactData?.isHidden) {
    return null;
  }

  return (
   
  <div className="mt-20 p-4 max-w-6xl mx-auto rounded-3xl bg-gradient-to-tl from-blue-50 via-green-50 to-gray-50 backdrop-blur-sm bg-opacity-80">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Contact Us</h2>

    <div
      className={
        contactData.length === 1
          ? 'flex justify-center'
          : 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
      }
    >
      {contactData.map((contact, index) => (
        <div
          key={index}
          className="bg-white/60 backdrop-blur-md shadow-md hover:shadow-lg rounded-[2rem] p-8 flex flex-col items-center transition-transform transform hover:scale-105"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Info {contactData.length > 1 ? `#${index + 1}` : ''}
          </h3>

          <div className="space-y-3 text-center text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">📧 Email:</span>{' '}
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-600 hover:underline break-all"
              >
                {contact.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-900">🔗 LinkedIn:</span>{' '}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {contact.linkedin}
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-900">💻 GitHub:</span>{' '}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {contact.github}
              </a>
            </p>
          </div>

          <p className="text-sm text-gray-600 text-center italic mt-6">
            We’re always open to collaboration. Feel free to reach out!
          </p>
        </div>
      ))}
    </div>
  </div>
);


}
