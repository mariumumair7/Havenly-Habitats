import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Popular Suede Sofa',
    price: 980,
    image: '/sofa.jpeg',
    href: '/product/popular-suede-sofa',
    width: 500, // Increased width of sofa image
  },
  {
    id: 2,
    name: 'The Dandy Chair',
    price: 250,
    image: '/chair.jpeg',
    href: '/product/dandy-chair',
    width: 400, // Width of the chair image
  },
  {
    id: 3,
    name: 'The Dandy Chair',
    price: 250,
    image: '/blackchair.jpeg',
    href: '/product/black-chair',
    width: 400, // Width of the chair image
  },
];

const ProductListing = () => {
  return (
    <section className="container mx-auto py-16 px-4 flex flex-col">
      <h2 className="text-[22px] font-clash-display font-normal leading-[39.36px] text-[#2A254B] w-[217px] h-[39px] ml-0">
        Our Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <Link key={product.id} href={product.href} className="group">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div
                className={`${
                  product.name === 'Popular Suede Sofa'
                    ? 'w-[500px] h-[462px]'
                    : 'w-[400px] h-[462px]'
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.width} // Dynamic width for sofa and chairs
                  height={462} // Fixed height
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 font-clash-display font-normal text-[20px] leading-[28px]">
                  {product.name}
                </h3>
                <p className="text-gray-600">£{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="mt-[50px] flex justify-center">
        <Link href="/collections">
          <button
            className="bg-[#F9F9F9] hover:bg-gray-300 text-gray-800 font-satoshi font-normal text-[14px] leading-[24px] px-[32px] py-[16px] rounded-lg w-[170px] h-[56px]"
            style={{ gap: '10px' }}
          >
            View Collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductListing;
