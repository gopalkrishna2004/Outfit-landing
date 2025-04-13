// "use client"

// import { ActionButton } from "./action-button";
// import { Search, Code, MessageSquare, BrainCircuit, Database } from "lucide-react";
// import Image from "next/image";
// import HeroGif from "@/assets/outfit_gif.gif";

// export function HeroSection() {
//     return (
//         <section id="hero" className={"min-h-[600px] flex items-center relative backdrop-blur overflow-hidden bg-black"}>
//             <div className={"container relative pt-14 pb-20 flex flex-col md:flex-row items-center"}>
//                 {/* Left side - Main content */}
//                 <div className="md:w-7/12 z-10">

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
//                 <div className="md:w-5/12 relative z-10 mt-10 md:mt-0 flex justify-center">
//                     <div className="relative w-[280px] h-[500px]">
//                         <Image
//                             src={HeroGif}
//                             alt="AI Stylist Demo"
//                             className="rounded-[20px] shadow-2xl"
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


"use client"

import { useState } from "react";
import { Search, Code, MessageSquare, BrainCircuit, Database } from "lucide-react";
import Image from "next/image";
import HeroGif from "@/assets/outfit_gif.gif";
import { collection, addDoc, getDocs, query, where, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Make sure this path points to your Firebase config
import { ActionButton } from "./action-button";

export function HeroSection() {
    const [email, setEmail] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            setIsSubmitting(false);
            return;
        }

        try {
            // Check if email already exists in waitlist
            const waitlistRef = collection(db, "waitlist");
            const q = query(waitlistRef, where("email", "==", email));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
                setError("This email is already on our waitlist!");
                setIsSubmitting(false);
                return;
            }

            // Add email to Firebase
            await addDoc(collection(db, "waitlist"), {
                email: email,
                timestamp: Timestamp.now()
            });
            
            setIsSubmitted(true);
            setEmail("");
        } catch (err) {
            console.error("Error adding to waitlist:", err);
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="hero" className={"min-h-[600px] flex items-center relative backdrop-blur overflow-hidden bg-black"}>
            <div className={"container relative pt-14 pb-20 flex flex-col md:flex-row items-center"}>
                {/* Left side - Main content */}
                <div className="md:w-7/12 z-10">
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
                    
                    <div className="mt-8 max-w-md">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-3 sm:space-y-0">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address" 
                                        className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white w-full"
                                        disabled={isSubmitting}
                                        required
                                    />
                                    <ActionButton 
                                        label={isSubmitting ? "Joining..." : "Join Waitlist"}
                                        type="submit"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {error && <p className="text-red-400 text-sm">{error}</p>}
                            </form>
                        ) : (
                            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                                <p className="text-green-400">Thanks for joining our waitlist! We'll notify you when we launch.</p>
                            </div>
                        )}
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