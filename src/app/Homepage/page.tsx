import React, { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: boolean;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products") // Change this URL to your actual API
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
