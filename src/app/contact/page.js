'use client';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const data = await client.fetch('*[_type == "contact"]');
      setContactData(data); // ناخد كل العناصر
    };

    fetchContactInfo();
  }, []);

  if (!contactData.length) {
    return (
      <div className="animate-pulse p-6 space-y-4">
        <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
        <div className="h-6 bg-gray-300 w-1/2 rounded"></div>
        <div className="h-6 bg-gray-300 w-1/4 rounded"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {contactData.map((contact, index) => (
        <div key={index} className="bg-blue-100 text-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Contact Information #{index + 1}</h2>

            <div className="space-y-4 text-gray-600">
              <p className="flex items-center">
                <strong className="mr-2 text-gray-800">📧 Email:</strong>
                <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-400 transition">{contact.email}</a>
              </p>
              <p className="flex items-center">
                <strong className="mr-2 text-gray-800">🔗 LinkedIn:</strong>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 transition">{contact.linkedin}</a>
              </p>
              <p className="flex items-center">
                <strong className="mr-2 text-gray-800">💻 GitHub:</strong>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 transition">{contact.github}</a>
              </p>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600">Feel free to reach out via any of the platforms above. We are happy to connect!</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
