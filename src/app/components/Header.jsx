'use client';

import { client } from '@/sanity/lib/client'; // Make sure this points to your configured Sanity client
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

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          My Portfolio
        </Link>

        {/* Navigation */}
        <nav className="space-x-4">
          {headerData?.menuItems?.length > 0 ? (
            headerData.menuItems.map((item, index) => (
              <Link
                key={index}
                href={item?.slug?.current || '/'} // Use slug.current for valid navigation
                className="transition duration-300 hover:text-blue-600 focus:text-blue-700"
              >
                {item?.title} {/* Display the title of the menu item */}
              </Link>
            ))
          ) : (
            <span className="text-gray-400 text-sm">Loading menu...</span>
          )}
        </nav>
      </div>
    </header>
  );
}
