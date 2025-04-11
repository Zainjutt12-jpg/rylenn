'use client'
import Image from "next/image"

export default function Header(){
    return(
        // Main Header Structure
        <div className="h-[95px] md:h-[130px] bg-black w-full flex flex-col justify-between gap-0">
            {/* 1st Part in black */}
            <div className="bg-black dark:bg-white text-white dark:text-black p-4 h-[50px] flex justify-center items-center  w-full">
            </div>
                       {/* 2nd part */}
                       <div className="h-[80px] rounded-tr-[30px] p-4 flex justify-between items-center rounded-tl-[30px] bg-white -mt-12 w-full">
                           {/* Menu Button */}
                        <Image src="/sort_24dp_000000_FILL0_wght100_GRAD0_opsz24.png"  width={40} height={40} alt="err"></Image>
                        {/* Main Logo Rylenn */}
                        <div className="font-new-amsterdam text-5xl font-bold">
                            Rylenn
                        </div>
                        {/* Social Media Links */}
                        <div className="gap-2 flex">
                        <Image src="/nest.png"  width={40} height={40} alt="err"></Image>
                        <Image src="/moon.png"  width={40} height={40} alt="err"></Image>
                        <Image src="/notification.png"  width={40} height={40} alt="err"></Image>
                        </div>
                       </div>
        </div>
    )
}