import React from 'react';
import Image from 'next/image';

import UserProfile from '../next-auth-provider/clientComponents/User/UserProfile';

export default function Header() {
  
    return (
        <header className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Logo and small text */}
        <div className="flex items-center">
          <Image src="/vercel.png   " alt="Logo" width={40} height={40} />
          <span className="text-white text-lg font-semibold ml-2">Your Project Name</span>
        </div>
  
        {/* User image and dropdown */}
        <UserProfile />
      </header>
  
    );
};

