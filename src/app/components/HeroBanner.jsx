'use client';

import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      const data = await client.fetch('*[_type == "hero"][0]');
      setHeroData(data);
    };

    fetchHeroData();
  }, []);
  

  if (!heroData) {
    return (
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-100">
        <div className="text-center animate-pulse">
          <h1 className="text-4xl font-bold text-gray-400">Loading...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-8">
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">{heroData.title}</h1>
        <p className="text-lg text-gray-600">{heroData.subtitle}</p>
        {heroData.ctaLink && heroData.ctaText && (
          <a
            href={heroData.ctaLink}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition"
          >
            {heroData.ctaText}
          </a>
        )}
      </div>

      {heroData.backgroundImage?.asset && (
        <img
          src={urlFor(heroData?.backgroundImage
).url()}
          alt="Hero"
          className="w-full max-w-sm rounded-xl shadow-lg"
        />
      )}
    </section>
  );
}
