"use client";

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'The Dandy Chair',
    price: 230,
    image: '/chair.jpeg',
    stockStatus: 'In Stock',
    description: 'A modern and stylish chair with a comfortable design.',
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Black', 'Brown', 'Beige'],
  },
  {
    id: 2,
    name: 'Rustic Vase Set',
    price: 155,
    image: '/vase.jpeg',
    stockStatus: 'Out of Stock',
    description: 'A handcrafted rustic vase set perfect for home decor.',
    sizes: ['Standard'],
    colors: ['White', 'Gray'],
  },
  {
    id: 3,
    name: 'The Silky Vase',
    price: 125,
    image: '/3.jpeg',
    stockStatus: 'In Stock',
    description: 'An elegant vase with a silky smooth finish.',
    sizes: ['Small', 'Medium'],
    colors: ['Pink', 'Blue'],
  },
  {
    id: 4,
    name: 'The Lucy Lamp',
    price: 399,
    image: '/lamp.jpeg',
    stockStatus: 'Out of Stock',
    description: 'A modern lamp with a warm lighting effect.',
    sizes: ['One Size'],
    colors: ['Black', 'White'],
  },
];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the product by ID
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <section className="container mx-auto py-16 px-4">
      {/* Back to Shop Button */}
      <div className="mb-6">
        <Link href="/">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            ← Back to Shop
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative w-full h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-600 text-lg mt-2">£{product.price}</p>

          {/* Stock Status */}
          <p
            className={`mt-2 ${
              product.stockStatus === 'Out of Stock'
                ? 'text-red-500'
                : 'text-green-600'
            }`}
          >
            {product.stockStatus}
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Available Sizes */}
          {product.sizes && (
            <div className="mt-4">
              <h3 className="font-semibold">Available Sizes:</h3>
              <ul className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <li
                    key={size}
                    className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Available Colors */}
          {product.colors && (
            <div className="mt-4">
              <h3 className="font-semibold">Available Colors:</h3>
              <ul className="flex gap-2 mt-2">
                {product.colors.map((color) => (
                  <li
                    key={color}
                    className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
                  >
                    {color}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            disabled={product.stockStatus === 'Out of Stock'}
          >
            {product.stockStatus === 'Out of Stock' ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
