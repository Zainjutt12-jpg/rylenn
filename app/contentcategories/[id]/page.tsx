// /app/category/[id]/page.tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import CategoryItems from "@/components/categoryitems/page";
import { Slash } from "lucide-react"
import { Header } from "@/components/header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Footer from '@/components/footer/page';


export default function CategoryPage() {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const params = useParams();
  const id = Number( params?.id);
  const router = useRouter();
  return (
    <>
    <Header textColor="black" />
    <div data-aos="fade-left" className='px-2 pt-10 md:px-6 w-full overflow-x-hidden  font-lato flex flex-col gap-y-2'>

{/* Heading */}
    {/* <div className='font-inter md:text-7xl text-4xl font-medium'>
       Summer Capsule 2X25
    </div>
     <p className='text-gray-600 text-xl pt-4'>25 + New Designs, Uni-Sex 6 + colors: For the rule breakers , redefined fashions</p> */}
     <div data-aos="fade-left" className='w-full flex md:h-[700px]  flex-col md:flex-row gap-12'>
        {/* Mobile view: image with overlay */}
        <div data-aos="fade-left" className="relative w-full md:hidden">
           <img data-aos="fade-left" alt='' className='h-full w-full object-cover' src='/Openwork cotton knitte polo shirt  - Men _ MANGO Canada.jpg' onClick={() => router.push('/info')} style={{ cursor: 'pointer' }}/>
           <div data-aos="fade-left" className="absolute top-4 left-0 w-full flex items-center justify-center z-10">
             <svg width="80" height="32" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
               <path d="M8 24H104" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/>
               <path d="M96 16L104 24L96 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/>
             </svg>
             <span className="font-lato text-white text-3xl drop-shadow-lg">Rylenn Trex One</span>
           </div>
        </div>
        {/* Desktop view: image only */}
        <div data-aos="fade-left" className="hidden md:block ">
           <img alt='' className='h-full' src='/Openwork cotton knitte polo shirt  - Men _ MANGO Canada.jpg' onClick={() => router.push('/info')} style={{ cursor: 'pointer' }}/>
        </div>
        <div data-aos="fade-left">
           <img alt='' className='h-[600px] md:h-full w-full object-cover' src='/19 Best Knitted Polo Shirts 2023_ Retro-Doused Polos From Beams, Todd Snyder, and More.jpg' onClick={() => router.push('/info')} style={{ cursor: 'pointer' }}/>
        </div>
        <div data-aos="fade-left" className=' text-center hidden md:flex justify-center items-center'>
            <div className='font-lato text-center text-5xl'>Rylenn Trex <br /> One</div>
        </div>
        <div>

        </div>
     </div>

     <div data-aos="fade-left" className='w-full flex h-auto md:h-[700px] mt-8  flex-col md:flex-row gap-12'>
        {/* Mobile view: image with overlay */}
        <div data-aos="fade-left"  className="relative w-full md:hidden">
           <img   alt='' className='h-full w-full object-cover' src='/download (1).jpg' onClick={() => router.push('/info')} style={{ cursor: 'pointer' }}/>
           <div  className="absolute top-4 left-0 w-full flex items-center justify-center z-10">
             <svg width="80" height="32" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
               <path d="M8 24H104" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/>
               <path d="M96 16L104 24L96 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/>
             </svg>
             <span className="font-lato text-white text-3xl drop-shadow-lg">Rylenn Trex Two</span>
           </div>
        </div>
        {/* Desktop view: image only */}
        <div data-aos="fade-left" className="hidden md:block ">
           <img alt='' className='h-full' src='/download (1).jpg' onClick={() => router.push('/info')} style={{ cursor: 'pointer' }}/>
        </div>
        <div  data-aos="fade-left">
           <img alt='' className='h-[600px] md:h-full w-full object-cover' src='/Abercrombie & Fitch _ Authentic American clothing since 1892.jpg' onClick={() => router.push('/info')} style={{ cursor: 'pointer' }}/>
        </div>
        <div data-aos="fade-left" className='hidden md:flex text-center justify-center items-center'>
            <div className='font-lato text-center text-5xl'>Rylenn Trex <br /> Two</div>
        </div>
        <div>

        </div>
     </div>

     <div className='pt-4'>
         {/* <img
           src="/news.png"
           className="w-full md:w-[50%] h-full"
           alt=""
         /> */}
         {/* <div className='p-6 flex hidden md:flex flex-col gap-3'>
            <div className='font-lato  text-5xl'>Rylenn</div>

         </div> */}
      <Footer/>
     </div>

    </div>

    

    {/* <CategoryItems categoryId={id} />; */}
    </>
  )
}
