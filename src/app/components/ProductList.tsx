import React from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: boolean;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-700">Price: ${product.price}</p>
          <p className={`text-sm ${product.stock ? "text-green-500" : "text-red-500"}`}>
            {product.stock ? "In Stock" : "Out of Stock"}
          </p>
          <Link href={`/product/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
