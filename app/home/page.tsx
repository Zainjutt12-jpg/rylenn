'use client';
import { Header } from "@/components/header/Header";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { CategoryDrawerContent } from "@/components/header/CategoryDrawerContent";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/footer/page";

const images = [
  '/WhatsApp Image 2025-07-05 at 6.42.46 PM.jpeg','/WhatsApp Image 2025-07-05 at 6.53.31 PM.jpeg','/WhatsApp Image 2025-07-05 at 6.58.06 PM.jpeg','/WhatsApp Image 2025-07-05 at 6.42.46 PM.jpeg'
]

export default function Home() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const handleClick = (id: number) => {
    router.push(`/contentcategories/${id}`);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div data-aos="fade-up" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={images[currentImageIndex]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center md:object-contain lg:object-cover z-0 transition-all duration-1000 ease-in-out"
      />

      {/* Transparent header on top of image */}
      <div className="relative z-20 top-0 left-0 w-full z-10 bg-transparent">
        <Header />
      </div>

      {/* Center Right Buy Now Button with Arrow */}
      <Drawer>
        <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center z-10 pointer-events-none w-full pr-8 md:w-1/2 md:pr-40 pt-24">
          <div className="flex items-center gap-4">
            {/* Stylish Arrow SVG, pointing right toward the button */}
            <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-auto">
              <path d="M8 24H104" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/>
              <path d="M96 16L104 24L96 32" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/>
            </svg>
            <DrawerTrigger asChild>
              <button
                className="pointer-events-auto px-5 py-2 md:px-10 md:py-4 border-2 border-white text-white rounded-full font-lucian text-2xl md:text-3xl font-bold shadow-lg hover:scale-105 transition-all tracking-widest"
                style={{letterSpacing: '0.08em'}}
              >
                Buy Now
              </button>
            </DrawerTrigger>
          </div>
        </div>
        <DrawerContent className="p-6 bg-white rounded-t-2xl shadow-2xl border-0">
          <CategoryDrawerContent handleClick={handleClick} />
        </DrawerContent>
      </Drawer>

      {/* Dot indicators */}
      <div className="absolute bottom-8  left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      
      </div>
    </div>
  );
}
