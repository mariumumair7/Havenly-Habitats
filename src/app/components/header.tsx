
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full h-[120px] border-b border-white">
        <ul className="flex items-center justify-between w-full px-2 py-1">
          {/* Search Button */}
          <li className="flex items-center">
            <Link href="/search">
              <Image
                src="/1.png"
                alt="Search"
                width={20}
                height={20}
                className="hover:bg-gray-200 rounded-full"
              />
            </Link>
          </li>

          {/* Title */}
          <li className="font-clash-display text-2xl font-normal leading-[29.52px] text-DarkPrimary">
            <Link href="/" className="hover:underline">
            Havenly Habitats
            </Link>
          </li>

          {/* Cart and User Buttons */}
          <li className="flex items-center space-x-4">
            <Link href="/cart">
              <Image
                src="/cart.jpeg"
                alt="Cart"
                width={20}
                height={20}
                className="hover:bg-gray-200 rounded-full"
              />
            </Link>
            <Link href="/user-profile">
              <Image
                src="/user.jpeg"
                alt="User Profile"
                width={20}
                height={20}
                className="hover:bg-gray-200 rounded-full"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="absolute top-[90px] left-[382px] w-[675px] h-[22px] flex gap-[44px] text-lg text-DarkPrimary">
        <Link href="/plant-pots">Plant Pots</Link>
        <Link href="/ceramics">Ceramics</Link>
        <Link href="/tables">Tables</Link>
        <Link href="/chairs">Chairs</Link>
        <Link href="/crockery">Crockery</Link>
        <Link href="/tableware">Tableware</Link>
        <Link href="/cutlery">Cutlery</Link>
      </div>
    </div>
  );
};

export default Header;
