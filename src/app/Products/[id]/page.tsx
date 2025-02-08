import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await getProductById(Number(params.id));

  if (!product) return notFound(); // Handle not found error

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-2">Price: ${product.price}</p>
      <p className={`text-lg mt-2 ${product.stock ? "text-green-500" : "text-red-500"}`}>
        {product.stock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}
