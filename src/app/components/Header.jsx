'use client';

import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const data = await client.fetch(`*[_type == "header"][0]`);
        setHeaderData(data);
        console.log('Header data fetched:', data);
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };

    fetchHeaderData();
  }, []);

  useEffect(() => {
    if (headerData) {
      console.log('Header data updated:', headerData);
    }
  }, [headerData]);

  if (!headerData || headerData.isHidden) {
    return null;
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {headerData.logoText || 'My Portfolio'}
        </Link>
        <nav className="space-x-6  flex">
          {headerData.menuItems?.map((item, index) => (
            <Link key={index} href={item?.url || '/'} className="text-gray-700 hover:text-blue-600 font-medium transition">
              {item?.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
