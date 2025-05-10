import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default async function Page({ params }) {
  const id = params?.id;
  const query = `*[_type == "service" && slug.current == $id][0]`;
  const data = await client.fetch(query, { id });

  console.log('Service Data:', data);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-red-600 text-lg">
        Service not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-10 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">{data.title}</h1>
      <p className="text-gray-600 leading-relaxed">{data.description}</p>
      <p className="text-lg font-medium text-blue-700">💰 Price: ${data.price}</p>

      {data.image && data.image[0]?.asset && (
        <img
          src={urlFor(data.image[0]).url()}
          alt={`${data.title} image`}
          className="rounded-xl shadow-md object-cover w-full h-64"
        />
      )}
    </div>
  );
}
