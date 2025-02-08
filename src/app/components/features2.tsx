'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AboutSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
    <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-clash-display font-normal leading-[33.6px] text-black mb-4">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="text-base md:text-lg font-satoshi font-normal text-[#6B6B6B] leading-7 mb-6">
          When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
        </p>
        <p className="text-base md:text-lg font-satoshi font-normal text-[#6B6B6B] leading-7">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design, so our Chelsea boutique became the hotbed for the London interior design community.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-[#F9F9F9] text-black font-satoshi font-medium rounded-lg"
          style={{
            width: '150px',
            height: '56px',
            padding: '16px 32px',
            marginTop: '100px',
            marginLeft: '20px',
            fontSize: '13px', 
            lineHeight: '24px',
            fontWeight: '400', // Satoshi font weight 400
            fontFamily: 'Satoshi, sans-serif', // Font family Satoshi
          }}
        >
          Get in Touch
        </button>
      </div>
      <div className="md:w-1/3 md:ml-10 mt-6 md:mt-0">
        <Image
          src="/444.jpeg"
          alt="About Avion"
          width={900}
          height={250}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default AboutSection;
