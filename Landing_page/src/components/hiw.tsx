// "use client";

// import Image from "next/image";
// import { Play } from "lucide-react";
// import Image1 from "@/assets/image-woq47pHL0WFXZue4AlIbAoW3sq9QMk.avif";
// import Image2 from "@/assets/wardrobe_cropped.png";
// import Image3 from "@/assets/outfit (2).png";


// import { CheckboxCapsules } from "@/components/checkbox-capsules"

// export function HowItWorks() {
//     return (
//         <div className="bg-black text-white min-h-screen">
//             <div className="max-w-5xl mx-auto px-4 py-12">
//                 <h1 className="text-5xl font-bold text-center mb-20">How it works</h1>

//                 {/* First section */}
//                 <div className="flex flex-col md:flex-row gap-16 mb-24 items-center">
//                     <div className="w-full md:w-1/2">
//                         <div className="relative max-w-md mx-auto">
//                             <CheckboxCapsules />
//                         </div>
//                     </div>
//                     <div className="w-full md:w-1/2">
//                         <h2 className="text-3xl font-bold mb-4">Test your website with natural language</h2>
//                         <p className="text-lg text-gray-300 mb-6">
//                             It takes minutes—not days—to spin up reliable automated tests that test your site exactly as your users
//                             would use it
//                         </p>
//                     </div>
//                 </div>

//                 {/* Second section */}
//                 <div className="flex flex-col md:flex-row gap-16 mb-24 items-center">
//                     <div className="order-2 md:order-1 w-full md:w-1/2">
//                         <h2 className="text-3xl font-bold mb-4">
//                             View video replays of the test runs and an in-depth analysis of each step
//                         </h2>
//                         <p className="text-lg text-gray-300 mb-6">
//                             Watch Spur Agent in action, and see every move. Real-time playback and detailed analysis make debugging a
//                             breeze.
//                         </p>
//                     </div>
//                     <div className="relative order-1 md:order-2 w-full md:w-1/2">
//                         <div className="relative max-w-md mx-auto">
//                             <Image
//                                 src={Image2}
//                                 alt="Video playback of test"
//                                 width={500}
//                                 height={350}
//                                 className="rounded-lg shadow-lg"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Third section */}
//                 <div className="flex flex-col md:flex-row gap-16 items-center">
//                     <div className="w-full md:w-1/2 flex justify-center">
//                         <div className="relative">
//                             <Image
//                                 src={Image3}
//                                 alt="30 days free trial"
//                                 width={400}
//                                 height={400}
//                                 className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto rounded-lg shadow-lg"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                     <div className="w-full md:w-1/2">
//                         <h2 className="text-3xl font-bold mb-4">Make testing more reliable — even if your site changes</h2>
//                         <p className="text-lg text-gray-300 mb-6">
//                             Spur tests are AI-powered. No CSS selectors, no maintenance headaches. Your tests adapt to UI changes
//                             automatically.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Image1 from "@/assets/image-woq47pHL0WFXZue4AlIbAoW3sq9QMk.avif";
import Image2 from "@/assets/wardrobe_cropped.png";
import Image3 from "@/assets/outfit (2).png";
import { CheckboxCapsules } from "@/components/checkbox-capsules"

export function HowItWorks() {
    return (
        <div className="bg-black text-white">
            <div className="max-w-5xl mx-auto px-4 py-12 pb-0">
                <h1 className="text-5xl font-bold text-center mb-20">How it works</h1>

                {/* First section */}
                <div className="flex flex-col md:flex-row gap-16 mb-24 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative max-w-md mx-auto">
                            <CheckboxCapsules />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Choose the styles that match your vibe</h2>
                        <p className="text-lg text-gray-300 mb-6">
                        Discover your vibe easily with our style picks—casual, classic, retro, and more. Select what you love, and let us create outfit ideas tailored just for you!
                        </p>
                    </div>
                </div>

                {/* Second section */}
                <div className="flex flex-col md:flex-row gap-16 mb-24 items-center">
                    <div className="order-2 md:order-1 w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">
                        Snap, Upload & Build Your Digital Wardrobe Take a quick snap or upload from your gallery
                        </h2>
                        <p className="text-lg text-gray-300 mb-6">
                        your entire wardrobe, now at your fingertips! No more "I have nothing to wear" moments—your closet is now just a click away!
                        </p>
                    </div>
                    <div className="relative order-1 md:order-2 w-full md:w-1/2">
                        <div className="relative max-w-md mx-auto">
                            <Image
                                src={Image2}
                                alt="Video playback of test"
                                width={500}
                                height={350}
                                className="rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Third section */}
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <Image
                                src={Image3}
                                alt="30 days free trial"
                                width={400}
                                height={400}
                                className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Fashion made simple — design your perfect look anytime</h2>
                        <p className="text-lg text-gray-300 mb-6">
                        Easily combine your favorite pieces to create fresh, stylish outfits. Whether you're going bold or keeping it chill, endless possibilities are just a tap away!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

