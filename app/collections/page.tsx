import { Button } from "@/components/ui/button";
import { FilePenLine } from "lucide-react"; // similar to icon in screenshot

export default function Collections() {
    return (
        <div className="py-20">
            <div className="relative w-full h-[580px] bg-black">
                <img
                    src="https://wallpaperaccess.com/full/9351603.jpg"
                    alt="err"
                    className="w-full h-full object-contain"
                />
                
                {/* Bottom-left content */}
                <div className="absolute bottom-8 left-6 text-white">
                <Button variant="outline" className="gap-2 bg-black px-6 py-6">
          <FilePenLine className="w-5 h-5" />
           View Collections
        </Button>
                </div>
            </div>
        </div>
    );
}
