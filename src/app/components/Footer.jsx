'use client';

import { client } from '@/sanity/lib/client'; // Sanity client
import { useEffect, useState } from 'react';

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch(`*[_type == "footer"][0]`);
        setFooterData(data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchFooterData();
  }, []);

  return (
<footer className="bg-blue-50 backdrop-blur-sm text-center py-6 mt-10 border-t border-gray-200">
      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Custom footer text or copyright */}
        <p className="text-sm text-gray-600 mb-4">
          {footerData?.footerText || `&copy; ${new Date().getFullYear()} ElBoghdady Portfolio. All rights reserved.`}
        </p>
        
        {/* Social media links */}
        <div className="flex justify-center space-x-5">
          {footerData?.socialLinks?.map((link, index) => (
            <a key={index} href={link.url} className="text-gray-500 hover:text-blue-600 transition duration-300">
              <img src={link.iconUrl} alt={link.platform} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
