import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

export default async function Page({ params }) {
  const id = params?.id;
  const query = `*[_type == "blog" && slug.current == $id][0]`;
  const data = await client.fetch(query, { id });

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-red-600 text-lg">
        Blog not found
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white via-green-50 to-blue-100 rounded-3xl">
      <div className="max-w-5xl mx-auto px-6 py-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg mt-10 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          {data.image?.asset && (
            <img
              src={urlFor(data.image).url()}
              alt={`${data.title} image`}
              className="w-full h-96 object-cover rounded-3xl shadow-md"
            />
          )}

          {/* Content */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{data.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{data.description}</p>

            {/* CTA Button */}
            {data.cta?.url && data.cta?.text && (
              <Link
                href={data.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition"
              >
                {data.cta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
