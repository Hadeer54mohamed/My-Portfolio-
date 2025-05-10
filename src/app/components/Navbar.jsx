'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <div className="topbar bg-gray-800 text-white p-4 flex items-center justify-between flex-wrap">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold text-blue-400">ReNewTech</Link>
        <Link href="/" className="hover:text-blue-300">Contact Us</Link>
        <Link href="/" className="hover:text-blue-300">About</Link>
        <Link href="/" className="hover:text-blue-300">Products</Link>
        <Link href="/" className="hover:text-blue-300">Buy Now</Link>
        <Link href="/" className="hover:text-blue-300">Subscribe</Link>
      </div>
      
      <div className="flex items-center mt-2 md:mt-0">
        <input
          type="text"
          placeholder="ASK Me..."
          className="search-container px-3 py-1 rounded-l bg-white text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-btn bg-blue-500 px-3 py-1 rounded-r text-white hover:bg-blue-600"
          onClick={() => alert(`You searched for: ${search}`)}
        >
          🔍
        </button>
      </div>
    </div>
  );
}
