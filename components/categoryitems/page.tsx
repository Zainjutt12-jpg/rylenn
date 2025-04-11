'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";


const products = [
    { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" ,router:'/info'},
    { name: "Blood Arc ", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Blood Arc ", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" },
    { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" }
]
// Props type
type ItemsProps = {
  categoryId: number;
};

export default function CategoryItems({}: ItemsProps) {
  const router = useRouter();

  return (
    <div className="flex w-full mt-12 md:mt-10  py-12 md:py-10 overflow-hidden flex-col gap-y-12">

      {/* Responsive Container */}
      <div className="px-4 md:px-16 py-6">

        {/* DESKTOP/TABLET: Grid layout */}
        <div className="grid  gap-x-4  w-full place-items-center md:place-items-start  gap-y-4 md:gap-y-16 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
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
