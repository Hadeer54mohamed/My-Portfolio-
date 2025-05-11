import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

export default async function Page({ params }) {
  const id = params?.id;
  const query = `*[_type == "service" && slug.current == $id][0]`;
  const data = await client.fetch(query, { id });

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-red-600 text-lg">
        Service not found
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg mt-10 transform hover:scale-105 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          {data.image?.asset && (
  <img
    src={urlFor(data.image).url()}
    alt={`${data.title} image`}
    className="w-full h-96 object-cover rounded-xl shadow-md"
  />
)}


          {/* Content */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{data.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{data.description}</p>
            <div className="text-xl font-semibold text-blue-700 mb-6">
              💰 Price: <span className="text-gray-900">${data.price}</span>
            </div>

            {/* Action Buttons */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
