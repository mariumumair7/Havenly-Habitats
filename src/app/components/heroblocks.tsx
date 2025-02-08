import React from 'react';
import Link from 'next/link';

const HeroBlock = () => {
  return (
    <div
      className="w-full h-[704px] bg-DarkPrimary bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
    >
      {/* Container inside Hero Block centered with 100px gap */}
      <div
        className="absolute top-[60px] left-[4%] right-[4%] lg:left-[80px] lg:right-[100px] lg:w-[1280px] lg:h-[584px] bg-opacity-70 bg-DarkPrimary p-8 rounded-lg"
      >
        {/* Hero Content */}
        <div className="w-full lg:w-[513px] lg:h-[187px] gap-[41px]">
          <h2
            className="font-[Clash Display] font-normal text-[32px] leading-[44.8px] text-white mb-4"
          >
            The furniture brand for the future, with timeless designs
          </h2>
          <Link href="/view-collection">
            <button
              className="w-full lg:w-[170px] h-[56px] text-[16px] leading-[24px] font-[Satoshi] font-normal text-white bg-[#F9F9F9] bg-opacity-15 rounded-lg hover:bg-opacity-80"
            >
              View Collection
            </button>
          </Link>
        </div>
      </div>

      {/* Image on the Right-Hand Side */}
      <div
        className="absolute top-[60px] left-[4%] w-full lg:left-[760px] lg:w-[520px] lg:h-[584px] bg-cover bg-center"
        style={{ backgroundImage: 'url("./chair.jpeg")' }}
      />

      {/* Bottom Left Content */}
      <div
        className="absolute top-[443px] left-[4%] w-full lg:left-[100px] lg:w-[602px] h-[81px] text-left text-white"
        style={{
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '27px',
        }}
      >
        <p>
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand
          with nice fonts, tasteful colors, and a beautiful way to display things digitally
          using modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default HeroBlock;
