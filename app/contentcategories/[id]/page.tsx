// /app/category/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import CategoryItems from "@/components/categoryitems/page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"




export default function CategoryPage() {
  const params = useParams();
  const id = Number( params?.id);
  return (
    <>
    <div className='px-2 pt-10 md:px-24 flex flex-col gap-y-2'>

      {/* Bread crumb */}
  <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Categories</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbLink href="/components">Asthetics</BreadcrumbLink>
  </BreadcrumbList>
</Breadcrumb>
{/* Heading */}
    <div className='NewAmsterdam md:text-7xl text-4xl font-bold'>
       Summer Capsule 2X25
    </div>
    {/* Little Desc */}
     <p className='text-gray-600 text-xl pt-4'>25 + New Designs, Uni-Sex 6 + colors: For the rule breakers , redefined fashions</p>
    </div>
    <CategoryItems categoryId={id} />;
    </>
  )
}
