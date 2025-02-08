"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Graystone Vase',
      image: '/vase.jpeg',
      price: 85,
      fontSize: 16,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Basic White Vase',
      image: '/lamp.jpeg',
      price: 125,
      fontSize: 16,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => { // Change id to number
    if (newQuantity <= 0) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-Clash Display font-medium mb-6">Your Shopping Cart</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-4">Product</th>
            <th className="border p-4">Quantity</th>
            <th className="border p-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="border p-4 flex items-center">
                <Image src={item.image} alt={item.name} width={50} height={50} />
                <div className="ml-4">
                  <h3 className="text-lg" style={{ fontSize: `${item.fontSize}px` }}>{item.name}</h3>
                </div>
              </td>
              <td className="border p-4">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} // id is number
                  className="w-16 text-center border p-2"
                />
              </td>
              <td className="border p-4">£{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 ml-auto flex flex-col items-end">
        <p className="text-lg font-Satoshi">Subtotal: £{calculateSubtotal()}</p>
        <p className="text-sm">Taxes and shipping are calculated at checkout</p>

        {/* Checkout Button */}
        <Link href="/checkout">
          <button className="bg-DarkPrimary hover:bg-opacity-80 text-white font-Satoshi font-bold py-2 px-4 rounded mt-4 ml-auto block">
            Go to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
