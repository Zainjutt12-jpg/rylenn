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




export default function Info() {
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
      img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700",
    },
    {
      img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_2.png?v=1731770765&width=700",
    },
    {
      img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_2.png?v=1731770765&width=700",
    },
    {
      img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_2.png?v=1731770765&width=700",
    },
  ];

  const newArrivalProducts = [
    { name: "Winter Collection", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" ,router:'/info'},
    { name: "Winter Collection ", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Winter Collection", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Winter Collection", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
  ];


  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);


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

  return (
  <>
 <div className=" md:flex px-4 md:px-24 pt-10 gap-y-6 md:pb-20 w-full">
    <div className="flex flex-col w-full md:w-[50%] gap-y-4 items-center md:items-start ">
      {/* Main Image Carousel */}
      <div className="relative w-[400px] md:w-[600px] h-[400px]  md:h-[500px] overflow-hidden md:mb-4">
        <div
          className="flex transition-transform  duration-500 ease-in-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {productArray.map((product, index) => (
            <div key={index} className="min-w-[400px] md:min-w-[600px]">
              <Card>
                <CardContent className="flex aspect-square items-center  justify-center p-2 md: p-6">
                  <img
                    src={product.img}
                    className="h-full w-full object-contain"
                    alt={`product-${index}`}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Custom Prev/Next buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 md:top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 md:top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4  md:mt-6">
        {productArray.map((product, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`border-2 rounded-lg cursor-pointer transition ${
              selectedIndex === index ? "border-black" : "border-gray-300"
            }`}
          >
            <img
              src={product.img}
              alt={`thumbnail-${index}`}
              className="w-24 h-24 object-contain p-1"
            />
          </div>
        ))}
      </div>
    </div>

    {/* 2nd Part */}
     <div className="flex flex-col mt-12 md:mt-0 w-full md:w-[50%] gap-y-4 py-4 px-2">
        {/*  */}
        <div className="md:flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:justify-between">
            {/*  */}
            <div className="flex flex-col gap-y-8 md:gap-y-6">
            <h1 className="font-semibold text-5xl">Hoodie Bay</h1>
            <p className="font-extralight  text-base">Color: Slate Green</p>
            <div className="bg-[#4E6B50] w-8 h-8 rounded-full"></div>
            <p className="font-extralight  text-lg">Size: S</p>
            <div className="flex gap-x-2">
            <div className="bg-transparent rounded-md border border-[4E6B50] px-4 py-3">S</div>
            <div className="bg-transparent rounded-md border border-[4E6B50] px-4 py-3">M</div>
            <div className="bg-transparent rounded-md border border-[4E6B50] px-4 py-3">L</div>
            <div className="bg-transparent rounded-md border border-[4E6B50] px-4 py-3">XL</div>
            </div>
            <Badge variant="outline" className="mt-2"> <span className="flex items-center justify-center gap-x-2">
            <span className="bg-[#4E6B50] w-2 h-2 rounded-full"></span> <span>In Stock</span>
              </span> </Badge>
            </div>
             {/* 2nd Part */}
             <div className="grid gap-y-8 mt-8 md:mt-0 md:gap-y-0 grid-cols-1">
             <span className="text-[#4E6B50] mt-2 gap-1.5 text-xl">
              <span>2700.00</span> <span>PKR</span>
            </span>
            <p className="font-extralight underline  text-base">Size Chart</p>
            
             </div>
        </div>

        {/*  */}
        <div className="flex items-center mt-4 gap-2">
      <Button className=" px-6 bg-transparent text-black border border-gray-200  rounded-full h-[55px] flex items-center justify-center" onClick={() => setCount(count + 1)}>
        + 
      </Button>
      <span>{count}</span>
      <Button className="px-6 text-black bg-transparent border border-gray-200 rounded-full h-[55px] flex items-center justify-center" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        - 
      </Button>
      <div className="w-[200px] md:w-[600px]">
      <Button  className="w-full bg-black rounded-full h-[55px] flex items-center justify-center">Add to cart</Button>
      </div>
      
    </div>
      <div>
        <Button variant={"outline"} className="w-full h-[55px]">Buy it now</Button>
      </div>
      <div className="space-y-4">
      {collapsibles.map((item, index) => (
        <Collapsible
          key={index}
          open={openStates[index]}
          onOpenChange={(val) => toggleCollapsible(index, val)}
          className="md:w-[350px] space-y-2"
        >
          <div className="flex mt-3 items-center justify-between space-x-4 px-2">
            <h4 className="text-lg tracking-wide font-extralight">{item.title}</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4 ml-5" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-2 px-4">
            {item.content.map((text, idx) => (
              <div
                key={idx}
                className="rounded-md border px-4 py-3 font-mono text-sm"
              >
                {text}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
     </div>
    </div>
    <Items   title="You May Also Like"   products={newArrivalProducts} />
    </>
  );
}
