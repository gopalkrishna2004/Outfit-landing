"use client"

import { ActionButton } from "./action-button";
import { Search, Code, MessageSquare, BrainCircuit, Database } from "lucide-react";
import Image from "next/image";
import HeroGif from "@/assets/outfit_gif.gif";

export function HeroSection() {
    return (
        <section id="hero" className={"min-h-[600px] flex items-center relative backdrop-blur overflow-hidden bg-black"}>
            <div className={"container relative pt-14 pb-20 flex flex-col md:flex-row items-center"}>
                {/* Left side - Main content */}
                <div className="md:w-7/12 z-10">
                    {/* <h1 className={"text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-transparent text-left"}>Your AI Stylist</h1> */}
                    {/* <div className="heading-container">
                        <h1 className={"text-8xl md:text-[140px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-transparent text-left"}>
                            OUTFIT
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-7xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,#f0f0ff,rgba(120,90,180,0.6))] bg-clip-text text-transparent text-left mt-0">
                            Your AI Stylist
                        </h2>
                    </div> */}
                    <div className="heading-container">
                        <h1 className="text-7xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-white text-left leading-[0.9]">
                            OUTFIT
                        </h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight bg-[linear-gradient(90deg,#ffffff,#d8d0f0)] bg-clip-text text-transparent text-left mt-3 pl-2">
                            Your AI Stylist
                        </h2>
                    </div>
                    <p className={"text-lg md:text-xl max-w-xl text-white/70 mt-5 text-left"}>
                        An AI-powered fashion assistant that helps you mix, match, and style outfits effortlessly for any occasion.
                    </p>
                    <div className={"flex justify-start mt-8"}>
                        <ActionButton 
                            label={"Join Waitlist"} 
                            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWKOCVcc5-ldMauV1BW8Sqx2mge56zalKKuuX4CmsLaNzdeg/formResponse?pli=1"
                        />
                    </div>
                </div>

                {/* Right side - GIF */}
                <div className="md:w-5/12 relative z-10 mt-10 md:mt-0 flex justify-center">
                    <div className="relative w-[280px] h-[500px]">
                        <Image
                            src={HeroGif}
                            alt="AI Stylist Demo"
                            className="rounded-[20px] shadow-2xl"
                            priority
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}



// "use client"

// import { ActionButton } from "./action-button";
// import { Search, Code, MessageSquare, BrainCircuit, Database } from "lucide-react";
// import Image from "next/image";
// import HeroGif from "@/assets/ezgif.com-optimize.gif";

// export function HeroSection() {
//     return (
//         <section className={"min-h-[600px] flex items-center relative backdrop-blur overflow-hidden bg-black"}>
//             <div className={"container relative pt-14 pb-20 flex flex-col md:flex-row items-center justify-center gap-0"}>
//                 {/* Left side - Main content */}
//                 <div className="md:w-6/12 z-10 md:pr-6">
//                     <div className="heading-container">
//                         <h1 className="text-7xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-white text-left leading-[0.9]">
//                             OUTFIT
//                         </h1>
//                         <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight bg-[linear-gradient(90deg,#ffffff,#d8d0f0)] bg-clip-text text-transparent text-left mt-3 pl-2">
//                             Your AI Stylist
//                         </h2>
//                     </div>
//                     <p className={"text-lg md:text-xl max-w-xl text-white/70 mt-5 text-left"}>
//                         An AI-powered fashion assistant that helps you mix, match, and style outfits effortlessly for any occasion.
//                     </p>
//                     <div className={"flex justify-start mt-8"}>
//                         <ActionButton 
//                             label={"Join Waitlist"} 
//                             href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWKOCVcc5-ldMauV1BW8Sqx2mge56zalKKuuX4CmsLaNzdeg/formResponse?pli=1"
//                         />
//                     </div>
//                 </div>

//                 {/* Right side - GIF */}
//                 <div className="md:w-5/12 relative z-10 mt-10 md:mt-0 flex justify-start md:justify-center">
//                     <div className="relative w-[280px] h-[500px] md:-ml-12">
//                         <Image
//                             src={HeroGif}
//                             alt="AI Stylist Demo"
//                             className="rounded-[30px] shadow-2xl"
//                             priority
//                             fill
//                             style={{ objectFit: 'contain' }}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }