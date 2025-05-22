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
    <div className="p-6 min-h-screen bg-gradient-to-bl from-white via-green-50 to-blue-100 flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 py-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          {data.image?.asset && (
            <img
              src={urlFor(data.image).url()}
              alt={`${data.title} image`}
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-md"
            />
          )}

          {/* Content */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{data.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{data.description}</p>
            <div className="text-xl font-semibold text-blue-700 mb-6">
              💰 Price: <span className="text-gray-900">${data.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
