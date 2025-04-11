'use client';

import Image from "next/image";
import { Button } from "../ui/button";
import { FilePenLine } from "lucide-react";
import { useRouter } from "next/navigation";

// Type for product items
type Product = {
  name: string;
  img: string;
  price: string;
  router?: string;
};

// Props type
type ItemsProps = {
  title: string;
  products: Product[];
};

export default function Items({ title, products }: ItemsProps) {
  const router = useRouter();

  return (
    <div className="flex w-full mt-12 md:mt-20  py-12 md:py-20 overflow-hidden flex-col gap-y-12">
      {/* Heading */}
      <div className="font-new-amsterdam text-6xl tracking-wider font-bold text-center">
        {title}
      </div>
      <div className="justify-center w-full flex">
        <Button variant="outline" className="gap-2 px-6 py-6">
          <FilePenLine className="w-5 h-5" />
          View All
        </Button>
      </div>

      {/* Responsive Container */}
      <div className="px-4 md:px-16 py-6">
        {/* MOBILE: Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto md:hidden">
          {products.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-80 flex flex-col gap-y-2">
              <div className="bg-slate-100 rounded-3xl min-h-96 w-80 flex flex-col px-4">
                <div className="flex p-2 justify-between">
                  <div className="bg-[#4E6B50] rounded-full text-white px-4 text-sm py-1">
                    Premium
                  </div>
                </div>
                <Image
                  src={product.img}
                  alt="product-image"
                  height={300}
                  width={400}
                  quality={100}
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div
                  onClick={() =>
                    product.router ? router.replace(product.router) : null
                  }
                  className="w-full flex justify-between cursor-pointer"
                >
                  <span className="text-lg">{product.name}</span>
                  <span className="text-[#4E6B50] gap-1.5 text-base">
                    <span>{product.price}</span> <span>PKR</span>
                  </span>
                </div>
                <div className="bg-[#4E6B50] w-4 h-4 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP/TABLET: Grid layout */}
        <div className="hidden md:grid gap-x-4 gap-y-16 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col max-w-80 gap-y-2">
              <div className="bg-slate-100 rounded-3xl min-h-96 w-80 flex flex-col px-4">
                <div className="flex p-2 justify-between">
                  <div className="bg-[#4E6B50] rounded-full text-white px-4 text-sm py-1">
                    Premium
                  </div>
                </div>
                <Image
                  src={product.img}
                  alt="product-image"
                  height={300}
                  width={400}
                  quality={100}
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <div
                  onClick={() =>
                    product.router ? router.replace(product.router) : null
                  }
                  className="w-full flex justify-between cursor-pointer"
                >
                  <span className="text-lg">{product.name}</span>
                  <span className="text-[#4E6B50] gap-1.5 text-base">
                    <span>{product.price}</span> <span>PKR</span>
                  </span>
                </div>
                <div className="bg-[#4E6B50] w-4 h-4 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
