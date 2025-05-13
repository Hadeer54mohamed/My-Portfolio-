'use client';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default function Service() {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "service"]');
      setServiceData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse p-6">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
      </div>
    );
  }
  if (serviceData?.isHidden) {
    return null;}
    
  if (serviceData.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-4">No Services Available</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find any services at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-bl from-white via-green-50 to-blue-100 rounded-3xl mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData
          .filter((service) => service.slug && service.slug.current)
          .map((service) => (
            <div
              key={service._id}
              className="bg-white/80 backdrop-blur-sm text-gray-800 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-[450px]"
            >
              {service.image?.asset && (
                <img
                  src={urlFor(service.image)?.url()}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
              )}

              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h4>
                <p className="text-sm text-gray-700 line-clamp-3">{service.description}</p>

                <div className="mt-auto flex justify-end">
                  <Link
                    href={`/service/${service.slug.current}`}
                    className="text-white bg-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
