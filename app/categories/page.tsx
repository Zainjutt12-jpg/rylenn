'use client';
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { FilePenLine } from "lucide-react"; // similar to icon in screenshot
import { useRouter } from "next/navigation";



export default function Categories(){
  const router = useRouter();

    const categories = [
        { name: "Rylenn Premium", img: "https://via.placeholder.com/150", price: "3500.00",id:1 },
        { name: "Oversized", img: "https://via.placeholder.com/150", price: "3500.00",id:2 },
        { name: "Best Sellers", img: "https://via.placeholder.com/150", price: "3500.00",id:3 }, 
        { name: "Blood Arc", img: "https://via.placeholder.com/150", price: "3500.00",id: 4},   
    ]

    const handleClick = (id: number) => {
      router.push(`/contentcategories/${id}`);
    };
  
    return(
        <div className="py-20 px-16 flex flex-col gap-y-4">
                    <div className="font-new-amsterdam text-6xl tracking-wider font-bold text-center">
          All Categories
        </div>
        <div className="justify-center w-full flex">

<Button variant="outline" className="gap-2 px-6 py-6">
<FilePenLine className="w-5 h-5" />
 View All
</Button>

  
</div>


<div className="py-10 px-4 md:px-0">
  {/* Mobile Horizontal Scroll */}
  <div className="flex gap-4 overflow-x-auto md:hidden">
    {categories.map((category, index) => (
      <div key={index} className="flex-shrink-0 w-72 flex flex-col gap-y-3">
        <Image
          src="https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700"
          alt="err"
          height={300}
          width={300}
          quality={100}
          priority
          className="object-cover rounded-3xl"
        />
        <h1 onClick={() => handleClick(category.id)}  className="text-2xl font-medium">{category.name}</h1>
        <p className="font-light text-gray-500 text-sm">
          See All {category.name}
        </p>
      </div>
    ))}
  </div>

  {/* Desktop/Tablet Grid */}
  <div className="hidden md:grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
    {categories.map((category, index) => (
      <div key={index} className="flex flex-col gap-y-3">
        <Image
          src="https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700"
          alt="err"
          height={300}
          width={300}
          quality={100}
          priority
          className="object-cover rounded-3xl"
        />
        <h1       onClick={() => handleClick(category.id)}
  className="text-2xl font-medium">{category.name}</h1>
        <p className="font-light text-gray-500 text-sm">
          See All {category.name}
        </p>
      </div>
    ))}
  </div>
</div>

        </div>
    )
}