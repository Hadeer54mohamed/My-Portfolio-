'use client';

import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch(`*[_type == "footer"][0]`);
        setFooterData(data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  if (loading || footerData?.isHidden) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 backdrop-blur-sm text-center py-6 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm text-gray-600 mb-4">
          {footerData?.footerText || `© ${currentYear} ElBoghdady Portfolio. All rights reserved.`}
        </p>

        {footerData?.socialLinks?.length > 0 && (
          <div className="flex justify-center space-x-5">
            {footerData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition duration-300"
              >
                <img src={link.iconUrl} alt={link.platform} className="w-6 h-6" />
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
