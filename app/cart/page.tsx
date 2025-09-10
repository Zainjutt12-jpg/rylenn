'use client';
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Header } from "@/components/header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/footer/page";

type CartItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export default function CartScreen() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const desktop_img = '/Cream  Minimal Elegant Business Tech Newsletter (1).png';

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Black Leather Wallet",
      description: "Genuine leather, minimalist design.",
      price: 1500,
      quantity: 1,
      imageUrl: "/19 Best Knitted Polo Shirts 2023_ Retro-Doused Polos From Beams, Todd Snyder, and More.jpg",
    },
    {
      id: 2,
      title: "Minimalist Watch",
      description: "Stainless steel, water resistant.",
      price: 1200,
      quantity: 1,
      imageUrl: "/19 Best Knitted Polo Shirts 2023_ Retro-Doused Polos From Beams, Todd Snyder, and More.jpg",
    },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: number, type: 'increment' | 'decrement') => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'increment'
                ? item.quantity + 1
                : item.quantity > 1
                ? item.quantity - 1
                : 1,
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header textColor="black" />

      <div className="font-lato flex flex-col md:flex-row h-auto md:h-[calc(100vh-80px)] bg-white">
        {/* Left image for desktop */}
        <div className="hidden md:block w-1/2 h-full">
          <img src={desktop_img} alt="Cart Visual" className="w-full h-full object-cover" />
        </div>

        {/* Cart Section */}
        <div className="w-full md:w-1/2 px-4 py-6 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl  text-black border-b pb-3">Your Shopping Progress</h2>

            {/* Cart Items */}
<div className="mt-6 space-y-6 overflow-y-auto pr-2 max-h-[60vh]">
  {cartItems.map((item) => (
    <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex items-start gap-4 bg-white">
      <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
      <div className="flex-1">
        <h3 className="text-base font-semibold text-black">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
        <p className="mt-2 text-sm font-medium text-black">Rs. {item.price}</p>

        <div className="flex items-center mt-3 space-x-2">
          <button
            className="h-8 w-8 border border-gray-300 rounded text-sm font-medium text-black"
            onClick={() => handleQuantityChange(item.id, 'decrement')}
          >-</button>
          <span className="px-2 text-sm">{item.quantity}</span>
          <button
            className="h-8 w-8 border border-gray-300 rounded text-sm font-medium text-black"
            onClick={() => handleQuantityChange(item.id, 'increment')}
          >+</button>
          <Trash2
            onClick={() => handleRemove(item.id)}
            className="ml-auto cursor-pointer text-gray-400 hover:text-red-500 transition"
            size={18}
          />
        </div>
      </div>
    </div>
  ))}
</div>
          </div>

          {/* Subtotal & Checkout */}
          <div className="pt-4 border-t mt-6">
            <div className="flex justify-between text-lg font-medium mb-4">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg text-base font-medium hover:bg-neutral-800 transition-all"
              onClick={() => console.log("Proceeding to checkout with:", cartItems)}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
