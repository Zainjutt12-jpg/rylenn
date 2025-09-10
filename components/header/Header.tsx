'use client'
import Image from "next/image"
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer"
import { useRouter } from "next/navigation"
import { CategoryDrawerContent } from "./CategoryDrawerContent"

export function Header({ textColor = "white" }: { textColor?: "white" | "black" }){
    const router = useRouter();
    const handleClick = (id: number) => {
        router.push(`/contentcategories/${id}`);
      };
  
    const textClass = textColor === "black" ? "text-black" : "text-white";
    const invertClass = textColor === "black" ? "" : "invert";
    const bgClass = textColor === "white" ? "bg-black/10" : "bg-transparent";
    return(
        // Main Header Structure
        <div   className={`h-[95px] md:h-[90px] ${bgClass} ${textClass} w-full flex flex-col justify-between gap-0`}>
                       {/* 2nd part */}
                       <div className="h-[80px]  p-4 flex justify-between items-center  bg-transparent  w-full">
                           {/* Menu Button with Drawer */}
                           <Drawer>
                               <DrawerTrigger asChild>
                                   <button aria-label="Open menu">
                                       <Image src="/sort_24dp_000000_FILL0_wght100_GRAD0_opsz24.png" className={invertClass} width={55} height={55} alt="Menu" />
                                   </button>
                               </DrawerTrigger>
                               <DrawerContent className="p-6 bg-white rounded-t-2xl shadow-2xl border-0">
                                   <CategoryDrawerContent handleClick={handleClick} />
                               </DrawerContent>
                           </Drawer>
                           {/* Main Logo Rylenn */}
                           <div
                             className={`font-lucian tracking-wider ${textClass} text-5xl md:text-6xl cursor-pointer`}
                             onClick={() => router.push("/")}
                             role="button"
                             tabIndex={0}
                             onKeyDown={e => { if (e.key === "Enter" || e.key === " ") router.push("/"); }}
                             aria-label="Go to home"
                           >
                               <div>Rylenn</div>  
                               <div className=" text-[10px] md:text-xs">Never Settle For less</div>
                           </div>
                           {/* Social Media Links */}
                           <div  className={`gap-2 flex ${invertClass}`}>
                               <Image src="/nest.png" onClick={()=> router.push('/cart')}   width={55} height={55} alt="err"></Image>
                               {/*<Image src="/moon.png"  width={40} height={40} alt="err"></Image>
                               <Image src="/notification.png"  width={40} height={40} alt="err"></Image> */}
                           </div>
                       </div>
        </div>
    )
} 