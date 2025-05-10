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
      <div className="space-y-2 animate-pulse p-6">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
      </div>
    );
  }

  if (serviceData.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-4">No Services Available</h2>
        <p className="text-gray-600">Sorry, we couldn't find any services at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((service) => (
          <div
            key={service._id}
            className="bg-gradient-to-br from-blue-100 via-pink-100 to-red-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {service.image?.asset && (
              <img
                src={urlFor(service.image)?.url()}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h4>
              <p className="text-sm mb-4 text-gray-700">{service.description}</p>

              <div className="flex items-center justify-between">
                {service.slug?.current && (
                  <Link
                    href={`/service/${service.slug.current}`}
                    className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition"
                  >
                    View Details
                  </Link>
                )}
                <span className="bg-white text-red-600 font-semibold px-3 py-1 rounded">
                  ${service.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
