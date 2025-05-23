'use client';

import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocale } from 'next-intl';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const data = await client.fetch(`*[_type == "header"][0]`);
        setHeaderData(data);
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };

    fetchHeaderData();
  }, []);

  if (!headerData || headerData.isHidden) {
    return null;
  }

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3 gap-3 md:gap-0">
          
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
            {headerData.logoText?.[locale] || headerData.logoText?.en || 'My Portfolio'}
          </Link>

          {/* زر الهامبرغر للهواتف في أقصى اليمين */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ml-auto"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* القائمة للـ desktop */}
          <nav className="hidden md:flex flex-row items-center gap-6">
            {headerData.menuItems?.map((item, index) => (
              <Link
                key={index}
                href={item?.url || '/'}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {item.label?.[locale] || item.label?.en || 'Menu Item'}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* القائمة الجانبية للهواتف */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-60 transform transition-transform duration-300
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
          flex flex-col
          p-6
          gap-4
          overflow-y-auto
        `}
      >
        {headerData.menuItems?.map((item, index) => (
          <Link
            key={index}
            href={item?.url || '/'}
            className="text-gray-800 hover:text-blue-600 font-semibold py-2 border-b border-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            {item.label?.[locale] || item.label?.en || 'Menu Item'}
          </Link>
        ))}
        <div className="mt-auto">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Overlay خلف القائمة الجانبية - شفافية خفيفة */}
      {menuOpen && (
        <div
          className="fixed inset-0  bg-opacity-10 z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
