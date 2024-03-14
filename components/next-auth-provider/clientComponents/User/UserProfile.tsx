"use client"
import React, { useState } from 'react'
import {signOut} from 'next-auth/react'
type Props = {}

export default function UserProfile({ }: Props) {
    
    const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async() => {
    // Your logout logic here
    await signOut()
  };

    return (
        <div className="relative">
          <button onClick={handleDropdownToggle} className="flex items-center focus:outline-none">
            <img src="https://via.placeholder.com/30" alt="User" className="w-8 h-8 rounded-full" />
            <span className="text-white ml-2">John Doe</span>
          </button>
          
          {/* Dropdown content */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
              <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">
                Logout
              </button>
            </div>
          )}
        </div>
    )
}