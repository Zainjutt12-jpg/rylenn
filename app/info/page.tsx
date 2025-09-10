'use client';
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import React from "react";
import Items from "@/components/Items/pages";
import { Header } from "@/components/header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/footer/page";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";


export default function Info() {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const collapsibles = [
    {
      title: 'Product Description',
      content: ['@radix-ui/colors', '@stitches/react'],
    },
    {
      title: 'Dependencies',
      content: ['react', 'react-dom', 'typescript'],
    },
    {
      title: 'Dev Tools',
      content: ['eslint', 'prettier', 'vite'],
    },
  ]
  


  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(collapsibles.length).fill(false)
  )

  const toggleCollapsible = (index: number, value: boolean) => {
    const updated = [...openStates]
    updated[index] = value
    setOpenStates(updated)
  }

  const productArray = [
    {
      img: "/Openwork cotton knitte polo shirt  - Men _ MANGO Canada.jpg",
    },
    {
      img: "/19 Best Knitted Polo Shirts 2023_ Retro-Doused Polos From Beams, Todd Snyder, and More.jpg",
    },
  ];

  const newArrivalProducts = [
    { name: "Winter Collection", img: "/shirtss.png", price: "3500.00" ,router:'/info'},
    { name: "Winter Collection ", img: "/shirt.png", price: "3500.00" },
    { name: "Winter Collection", img: "/shirt.png", price: "3500.00" },
    { name: "Winter Collection", img: "/shirtss.png", price: "3500.00" },
  ];


  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? productArray.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === productArray.length - 1 ? 0 : prev + 1
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header textColor="black" />
      <div data-aos="fade-right" className="md:flex px-2 md:px-24 pt-10 gap-x-16 gap-y-12 md:pb-20 w-full bg-white">
        {/* Left: Product Image Carousel */}
        <div className="flex flex-col w-full md:w-[50%] gap-y-8 items-center md:items-start">
          <div data-aos="fade-right" className="relative w-full max-w-[480px] md:max-w-[600px] aspect-square overflow-hidden rounded-3xl  bg-white">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
            >
              {productArray.map((product, index) => (
                <div key={index} className="min-w-full">
                  <Card className="bg-white rounded-3xl shadow-none border border-gray-100">
                    <CardContent className="flex aspect-square items-center justify-center p-4 md:p-8">
                      <img
                        src={product.img}
                        className="h-full w-full object-contain rounded-2xl"
                        alt={`product-${index}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {/* Carousel Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 text-black rounded-full p-2 shadow-sm hover:bg-black hover:text-white transition"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 text-black rounded-full p-2 shadow-sm hover:bg-black hover:text-white transition"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          {/* Thumbnails */}
          <div data-aos="fade-right" className="flex gap-3 md:mt-4">
            {productArray.map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-2 rounded-xl cursor-pointer transition-all duration-200 ${selectedIndex === index ? "border-black" : "border-gray-200"}`}
                style={{ boxShadow: selectedIndex === index ? '0 2px 8px rgba(0,0,0,0.08)' : 'none' }}
              >
                <img
                  src={product.img}
                  alt={`thumbnail-${index}`}
                  className="w-16 h-16 object-contain p-1 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Product Details */}
        <div data-aos="fade-left" className="flex flex-col font-lato mt-8 md:mt-0 w-full md:w-[50%] gap-y-10 py-2 px-4 md:px-8">

{/* Product Title */}
<div className="flex flex-col gap-y-3">
  <h1 className="text-3xl md:text-5xl font-light tracking-wide text-black">Hoodie Bay</h1>

  {/* Color Selection */}
  <div className="flex items-center gap-x-4">
    <span className="text-gray-500 text-base">Color:</span>
    <span className="inline-flex items-center gap-x-2">
      <span className="bg-black w-5 h-5 rounded-full border border-gray-300"></span>
      <span className="text-sm text-black">Slate Green</span>
    </span>
  </div>

  {/* Size Options */}
  <div className="flex items-center gap-x-4">
    <span className="text-gray-500 text-base">Size:</span>
    <div className="flex gap-x-2">
      {['S', 'M', 'L', 'XL'].map((size) => (
        <div
          key={size}
          className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-black cursor-pointer hover:border-black transition-all"
        >
          {size}
        </div>
      ))}
    </div>
  </div>

  {/* Stock Badge */}
  <div className="mt-2">
    <Badge variant="outline" className="border border-gray-200 px-3 py-1 rounded-full text-black bg-white font-normal text-sm">
      <span className="flex items-center gap-x-2">
        <span className="bg-black w-2 h-2 rounded-full"></span>
        <span>In Stock</span>
      </span>
    </Badge>
  </div>

  {/* Price Section */}
  <div className="flex items-center gap-x-4 mt-3">
    <span className="text-2xl font-medium text-black">2700.00 <span className="text-base font-normal">PKR</span></span>
    <span className="text-sm text-gray-500 underline cursor-pointer hover:text-black transition">Size Chart</span>
  </div>
</div>

{/* Quantity and Action Buttons */}
<div className="flex items-center gap-4">
  <Button className="h-11 w-11 bg-white text-black border border-gray-200 rounded-full hover:bg-black hover:text-white text-lg" onClick={() => setCount(count + 1)}>
    +
  </Button>
  <span className="text-xl font-medium w-8 text-center">{count}</span>
  <Button className="h-11 w-11 bg-white text-black border border-gray-200 rounded-full hover:bg-black hover:text-white text-lg" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
    -
  </Button>
  <Button className="flex-1 bg-black text-white h-11 rounded-full text-base font-semibold hover:scale-105 transition-all">
    Add to Cart
  </Button>
</div>

<Button
  variant="outline"
  className="w-full h-11 mt-2 rounded-full border border-black text-black font-medium text-base hover:bg-black hover:text-white transition-all"
  onClick={() => setOpenModal(true)}
>
  Buy it now
</Button>

<Dialog open={openModal} onOpenChange={setOpenModal}>
  <DialogContent className="w-full max-w-2xl font-lato bg-white border border-black rounded-2xl p-6">
    <DialogHeader>
      <DialogTitle className="text-2xl font-light text-black">Confirm Order</DialogTitle>
    </DialogHeader>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {/* Order Image Preview */}
      <div className="w-full h-64 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={'/19 Best Knitted Polo Shirts 2023_ Retro-Doused Polos From Beams, Todd Snyder, and More.jpg'} alt="Order Item" className="object-contain max-h-full" />
      </div>

      {/* Form Inputs */}
      <div className="space-y-4">
        {/* <p className="text-sm text-gray-700">Edit info if you want</p> */}
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Customer Name"
          className="border border-gray-200 rounded-lg bg-white text-black"
        />
        <Input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border border-gray-200 rounded-lg bg-white text-black"
        />
        <Input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border border-gray-200 rounded-lg bg-white text-black"
        />
        <Input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="border border-gray-200 rounded-lg bg-white text-black"
        />
        
        {/* Payment Method */}
        <div className="pt-2">
          <label className="flex items-center space-x-3 text-black">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={true}
              readOnly
              className="accent-black"
            />
            <span>Cash on Delivery</span>
          </label>
          <p className="text-sm text-gray-500 mt-1">
            Online transactions will be available soon.
          </p>
        </div>
      </div>
    </div>

    <DialogFooter className="mt-6 flex flex-col gap-2">
      <Button className="w-full font-lato bg-black text-white rounded-full font-medium text-base h-12 hover:bg-gray-900 hover:scale-[1.02] transition-all duration-200">
        Checkout — 2700 PKR
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

{/* Collapsibles */}
<div data-aos="fade-left" className="space-y-4 mt-6">
  {collapsibles.map((item, index) => (
    <Collapsible
      key={index}
      open={openStates[index]}
      onOpenChange={(val) => toggleCollapsible(index, val)}
      className="w-full border border-gray-100 rounded-xl bg-white shadow-sm"
    >
      <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
        <h4 className="text-sm md:text-base font-medium text-black">{item.title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4 ml-5" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 px-4 pb-4">
        {item.content.map((text, idx) => (
          <div key={idx} className="rounded-md border border-gray-100 px-4 py-3 text-sm bg-gray-50 text-gray-700">
            {text}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ))}
</div>
</div>
    </div>
      {/* You May Also Like */}
      <div className="">
        <Items data-aos="fade-left" title={<span className="text-3xl md:text-5xl font-light tracking-wide text-black">You May Also Like</span>} products={newArrivalProducts} />
      </div>
      <Footer/>
    </>
  );
}
