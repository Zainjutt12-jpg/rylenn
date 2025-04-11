
export default function Footer(){
    return (
        <div className="bg-black min-h-96 w-full  rounded-t-[30px]">
           <div className="p-16 w-full md:flex md:justify-between">
               {/* 1st */}
               <div className="w-full md:border-r  flex gap-x-24">
               <div className="font-new-amsterdam tracking-wide text-white text-5xl font-bold">
                Rylenn
                </div>
                <div className=" hidden md:flex text-white flex-col gap-y-8">
                   <div className="text-2xl font-semibold">About Us</div>
                   <p className="text-base font-light max-w-[340px] ">Rylenn is a lifestyle brand inspired by old-school aesthetics, blending vintage charm with modern minimalism. Focused on premium quality and timeless style, we craft pieces that are made to last and designed to stand out.</p>

                   <h1 className="text-2xl font-semibold">Customer <br /> Support</h1>
                   <div className="flex gap-y-2 flex-col ">
                   <p className="text-base font-light max-w-80 text-gray-200">Privacy Policy</p>
                   <p className="text-base font-light max-w-80 text-gray-200">Shipping Policy</p>
                   <p className="text-base font-light max-w-80 text-gray-200">Privacy Policy</p>
                   <p className="text-base font-light max-w-80 text-gray-200">Privacy Policy</p>
                   <p className="text-base font-light max-w-80 text-gray-200">Customer <br /> Information</p>

                   </div>

                </div>
                <div>

                </div>

               </div>
            
            {/* 2nd */}
            <div className="md:pl-16 pt-10 md:pt-0  md:min-w-[600px] flex flex-col gap-y-4">
                <div className="md:text-4xl text-3xl text-white font-bold">
                  Stay in the loop with <br />  out weekly newsletter
                </div>
               {/* Input */}
               {/* <Input type="email" placeholder="Email" /> */}
            </div>
               
           </div>
        </div>
    )
}