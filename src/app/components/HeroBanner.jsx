'use client';

import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';

// إعداد الصورة
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await client.fetch('*[_type == "hero"][0]');
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);
/* if (!heroData?.isHidden) {
  return <HeroSection data={heroData} />;
}
 */
  // شاشة التحميل
  if (!heroData) {
    return (
      <section className=" relative h-[70vh] flex items-center justify-center bg-gray-100">
        <div className="text-center animate-pulse">
          <svg className="animate-spin h-8 w-8 text-gray-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      </section>
    );
  }

  return (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-blue-50 to-green-50 rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-8 shadow-sm">
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
      src={urlFor(heroData.backgroundImage).url()}
      alt="Hero"
      className="w-full max-w-md rounded-2xl shadow-lg"
    />
  )}
</section>



  );
}
