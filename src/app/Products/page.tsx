"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "08j139ix", // Replace with your project ID
  dataset: "production", // Your dataset name
  apiVersion: "2025-02-05", // Latest API version
  useCdn: false, // Disable CDN for real-time updates
});

interface Product {
  _id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  tags?: string[];
  image: string; // The image URL coming from the product data
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      // Fetching product data from your external API
      const response = await fetch("https://hackathon-apis.vercel.app/api/products");
      const data = await response.json();

      // Assuming the data structure matches the following
      const allTags = new Set<string>();
      data.forEach((product: Product) => {
        product.tags?.forEach((tag) => allTags.add(tag));
      });

      setProducts(data);
      setFilteredProducts(data);
      setTags(Array.from(allTags));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);



  return (
   
        <div className="container mx-auto px-4">

<div className="p-4">
    <h2 className="text-center text-slate-800 mt-4 mb-6 text-2xl font-bold">
      Products From API's Data
    </h2>
    </div>
      <div className="my-4">
        {/* Filter by tags */}
        <select
          onChange={(e) => setSelectedTag(e.target.value)}
          value={selectedTag || ""}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Products</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts
          .filter((product) =>
            selectedTag ? product.tags?.includes(selectedTag) : true
          )
          .map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <ul className="list-disc pl-5 mb-4 text-sm">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-gray-800 mb-4">Price: ${product.price}</p>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image} // Use the correct field for the image URL
                    alt={product.name}
                    layout="fill" // Cover the container fully
                    objectFit="cover" // Ensure the image covers the area
                    className="rounded-md"
                  />
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
  <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
  {cart.length === 0 ? (
    <p className="text-gray-600 mt-2">Your cart is empty.</p>
  ) : (
    <ul className="mt-2 space-y-2">
      {cart.map((item) => (
        <li key={item._id} className="flex justify-between items-center bg-white p-2 rounded-lg shadow">
          <span className="text-gray-800 font-medium">{item.name}</span>
          <span className="text-gray-600">${item.price}</span>
        </li>
      ))}
    </ul>
  )}
</div>
    </div>
  );
};

export default ProductCards;
