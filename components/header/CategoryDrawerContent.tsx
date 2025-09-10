import { DrawerClose } from "@/components/ui/drawer";

interface CategoryDrawerContentProps {
  handleClick: (id: number) => void;
}

export function CategoryDrawerContent({ handleClick }: CategoryDrawerContentProps) {
  
  return (
    <>
      <DrawerClose asChild>
        {/* <button className="mb-4 text-right w-full text-black font-inter" aria-label="Close menu">Close</button> */}
      </DrawerClose>
      {/* Sidebar content goes here */}
      <div className="text-4xl md:text-5xl font-lucian px-2 py-3 md:p-4 mb-4 md:mb-6 text-center text-black leading-24 tracking-widest">Categories</div>
      <div className="flex flex-col gap-2 md:gap-3 px-2 md:px-0">
        <button
          className="font-inter text-base md:text-lg px-3 py-2 md:px-4 md:py-3 rounded-xl bg-gray-200 text-black font-medium shadow-sm border border-gray-300 transition-all"
          onClick={() => handleClick(1)}
        >
          Men's Collection
        </button>
        {/* <button className="font-inter text-base md:text-lg px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all">Women's Collection</button>
        <button className="font-inter text-base md:text-lg px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all">Kids</button>
        <button className="font-inter text-base md:text-lg px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all">New Arrivals</button>
        <button className="font-inter text-base md:text-lg px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all">Accessories</button>
        <button className="font-inter text-base md:text-lg px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all">Sale</button> */}
      </div>
    </>
  );
} 