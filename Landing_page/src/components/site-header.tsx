// "use client"

// import Link from "next/link";
// import SiteLogo from "@/assets/logo.svg"
// import {CodeXml, Feather, MenuIcon, Newspaper, Wallet2} from "lucide-react";
// import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
// import {useState} from "react";
// import {ActionButton} from "@/components/action-button";

// export default function SiteHeader() {
//     const [isOpen, setIsOpen] = useState(false)
//     return (
//         <>
//             <header className={"py-4 border-b max-md:backdrop-blur md:border-none sticky top-0 z-10 "}>
//                 <div className={"container max-md:px-4"}>
//                     <div className={"flex items-center justify-between md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur "}>
//                         <Link href={"/"}>
//                             <div className={"border size-10 rounded-lg inline-flex items-center justify-center"}>
//                                 <SiteLogo className={"size-8 h-auto"} />
//                             </div>
//                         </Link>
//                         <section className={"max-md:hidden"}>
//                             <nav className={"flex gap-8 items-center text-sm"}>
//                                 <Link href="#" className={"text-white/70 hover:text-white transition"}>Home</Link>
//                                 <Link href="#features" className={"text-white/70 hover:text-white transition"}>Features</Link>
//                                 <Link href="#faq" className={"text-white/70 hover:text-white transition"}>FAQ</Link>
//                                 <Link href={""} className={"text-white/70 hover:text-white transition"}>Careers</Link>
//                             </nav>
//                         </section>
//                         <section className={"flex max-md:gap-4 items-center"}>
//                             <ActionButton 
//                                 label={"Join Waitlist"} 
//                                 href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWKOCVcc5-ldMauV1BW8Sqx2mge56zalKKuuX4CmsLaNzdeg/formResponse?pli=1"
//                             />
//                             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                                 <SheetTrigger>
//                                     <MenuIcon className={"size-9 md:hidden hover:text-white/70 transition"}/>
//                                 </SheetTrigger>
//                                 <SheetContent side={"top"} className={"p-8"}>
//                                     <div className={"inline-flex items-center center gap-3"}>
//                                         <div className={"border size-8 rounded-lg inline-flex items-center justify-center"}>
//                                             <SiteLogo className={"size-6 h-auto"}/>
//                                         </div>
//                                         <p className={"font-bold"}>OUTFIT</p>
//                                     </div>
//                                     <div className={"mt-8 mb-4"}>
//                                         <nav className={"grid gap-4 items-center text-lg"}>
//                                             <Link href={"#"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Feather className={"size-6"} /> */}
//                                                 Home
//                                             </Link>
//                                             <Link href={"#features"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <CodeXml className={"size-6"} /> */}
//                                                 Features
//                                             </Link>
//                                             <Link href={"#faq"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Wallet2 className={"size-6"} /> */}
//                                                 FAQ
//                                             </Link>
//                                             <Link href={""} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Newspaper className={"size-6"} /> */}
//                                                 Careers
//                                             </Link>
//                                         </nav>
//                                     </div>
//                                 </SheetContent>
//                             </Sheet>
//                         </section>
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }


// "use client"

// import Link from "next/link";
// import SiteLogo from "@/assets/logo.svg"
// import {CodeXml, Feather, MenuIcon, Newspaper, Wallet2} from "lucide-react";
// import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
// import {useState} from "react";
// import {ActionButton} from "@/components/action-button";

// export default function SiteHeader() {
//     const [isOpen, setIsOpen] = useState(false)
//     return (
//         <>
//             <header className={"py-4 border-b max-md:backdrop-blur md:border-none sticky top-0 z-10 bg-black"}>
//                 <div className={"container max-md:px-4"}>
//                     <div className={"flex items-center justify-between md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur bg-black"}>
//                         <Link href={"/"}>
//                             <div className={"border size-10 rounded-lg inline-flex items-center justify-center"}>
//                                 <SiteLogo className={"size-8 h-auto"} />
//                             </div>
//                         </Link>
//                         <section className={"max-md:hidden"}>
//                             <nav className={"flex gap-8 items-center text-sm"}>
//                                 <Link href="#" className={"text-white/70 hover:text-white transition"}>Home</Link>
//                                 <Link href="#features" className={"text-white/70 hover:text-white transition"}>Features</Link>
//                                 <Link href="#faq" className={"text-white/70 hover:text-white transition"}>FAQ</Link>
//                                 <Link href={""} className={"text-white/70 hover:text-white transition"}>Careers</Link>
//                             </nav>
//                         </section>
//                         <section className={"flex max-md:gap-4 items-center"}>
//                             <ActionButton 
//                                 label={"Join Waitlist"} 
//                                 href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWKOCVcc5-ldMauV1BW8Sqx2mge56zalKKuuX4CmsLaNzdeg/formResponse?pli=1"
//                             />
//                             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                                 <SheetTrigger>
//                                     <MenuIcon className={"size-9 md:hidden hover:text-white/70 transition"}/>
//                                 </SheetTrigger>
//                                 <SheetContent side={"top"} className={"p-8 bg-black"}>
//                                     <div className={"inline-flex items-center center gap-3"}>
//                                         <div className={"border size-8 rounded-lg inline-flex items-center justify-center"}>
//                                             <SiteLogo className={"size-6 h-auto"}/>
//                                         </div>
//                                         <p className={"font-bold"}>OUTFIT</p>
//                                     </div>
//                                     <div className={"mt-8 mb-4"}>
//                                         <nav className={"grid gap-4 items-center text-lg"}>
//                                             <Link href={"#"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Feather className={"size-6"} /> */}
//                                                 Home
//                                             </Link>
//                                             <Link href={"#features"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <CodeXml className={"size-6"} /> */}
//                                                 Features
//                                             </Link>
//                                             <Link href={"#faq"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Wallet2 className={"size-6"} /> */}
//                                                 FAQ
//                                             </Link>
//                                             <Link href={""} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Newspaper className={"size-6"} /> */}
//                                                 Careers
//                                             </Link>
//                                         </nav>
//                                     </div>
//                                 </SheetContent>
//                             </Sheet>
//                         </section>
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }



// "use client"

// import Link from "next/link";
// import SiteLogo from "@/assets/logo.svg"
// import {CodeXml, Feather, MenuIcon, Newspaper, Wallet2} from "lucide-react";
// import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
// import {useState} from "react";
// import {ActionButton} from "@/components/action-button";

// export default function SiteHeader() {
//     const [isOpen, setIsOpen] = useState(false)
//     return (
//         <>
//             <header className={"py-4 sticky top-0 z-10 bg-transparent"}>
//                 <div className={"container max-md:px-4"}>
//                     <div className={"flex items-center justify-between border p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur-sm bg-black/20"}>
//                         <Link href={"/"}>
//                             <div className={"border size-10 rounded-lg inline-flex items-center justify-center"}>
//                                 <SiteLogo className={"size-8 h-auto"} />
//                             </div>
//                         </Link>
//                         <section className={"max-md:hidden"}>
//                             <nav className={"flex gap-8 items-center text-sm"}>
//                                 <Link href="#" className={"text-white/70 hover:text-white transition"}>Home</Link>
//                                 <Link href="#features" className={"text-white/70 hover:text-white transition"}>Features</Link>
//                                 <Link href="#faq" className={"text-white/70 hover:text-white transition"}>FAQ</Link>
//                                 <Link href={""} className={"text-white/70 hover:text-white transition"}>Careers</Link>
//                             </nav>
//                         </section>
//                         <section className={"flex max-md:gap-4 items-center"}>
//                             <ActionButton 
//                                 label={"Join Waitlist"} 
//                                 href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWKOCVcc5-ldMauV1BW8Sqx2mge56zalKKuuX4CmsLaNzdeg/formResponse?pli=1"
//                             />
//                             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                                 <SheetTrigger>
//                                     <MenuIcon className={"size-9 md:hidden hover:text-white/70 transition"}/>
//                                 </SheetTrigger>
//                                 <SheetContent side={"top"} className={"p-8 bg-black/90"}>
//                                     <div className={"inline-flex items-center center gap-3"}>
//                                         <div className={"border size-8 rounded-lg inline-flex items-center justify-center"}>
//                                             <SiteLogo className={"size-6 h-auto"}/>
//                                         </div>
//                                         <p className={"font-bold"}>OUTFIT</p>
//                                     </div>
//                                     <div className={"mt-8 mb-4"}>
//                                         <nav className={"grid gap-4 items-center text-lg"}>
//                                             <Link href={"#"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Feather className={"size-6"} /> */}
//                                                 Home
//                                             </Link>
//                                             <Link href={"#features"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <CodeXml className={"size-6"} /> */}
//                                                 Features
//                                             </Link>
//                                             <Link href={"#faq"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Wallet2 className={"size-6"} /> */}
//                                                 FAQ
//                                             </Link>
//                                             <Link href={""} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
//                                                 {/* <Newspaper className={"size-6"} /> */}
//                                                 Careers
//                                             </Link>
//                                         </nav>
//                                     </div>
//                                 </SheetContent>
//                             </Sheet>
//                         </section>
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }



"use client"

import Link from "next/link";
import SiteLogo from "@/assets/logo.svg"
import {CodeXml, Feather, MenuIcon, Newspaper, Wallet2} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {useState} from "react";
import {ActionButton} from "@/components/action-button";

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="bg-black w-full min-h-screen absolute top-0 left-0 -z-10"></div>
            <header className={"py-4 sticky top-0 z-10 bg-transparent"}>
                <div className={"container max-md:px-4"}>
                    <div className={"flex items-center justify-between border p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur-sm bg-black/30"}>
                        <Link href={"/"}>
                            <div className={"border size-10 rounded-lg inline-flex items-center justify-center"}>
                                <SiteLogo className={"size-8 h-auto"} />
                            </div>
                        </Link>
                        <section className={"max-md:hidden"}>
                            <nav className={"flex gap-8 items-center text-sm"}>
                                <Link href="#" className={"text-white/70 hover:text-white transition"}>Home</Link>
                                <Link href="#features" className={"text-white/70 hover:text-white transition"}>Features</Link>
                                <Link href="#faq" className={"text-white/70 hover:text-white transition"}>FAQ</Link>
                                <Link href={""} className={"text-white/70 hover:text-white transition"}>Careers</Link>
                            </nav>
                        </section>
                        <section className={"flex max-md:gap-4 items-center"}>
                            <ActionButton 
                                label={"Join Waitlist"} 
                                href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWKOCVcc5-ldMauV1BW8Sqx2mge56zalKKuuX4CmsLaNzdeg/formResponse?pli=1"
                            />
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger>
                                    <MenuIcon className={"size-9 md:hidden hover:text-white/70 transition"}/>
                                </SheetTrigger>
                                <SheetContent side={"top"} className={"p-8 bg-black"}>
                                    <div className={"inline-flex items-center center gap-3"}>
                                        <div className={"border size-8 rounded-lg inline-flex items-center justify-center"}>
                                            <SiteLogo className={"size-6 h-auto"}/>
                                        </div>
                                        <p className={"font-bold"}>OUTFIT</p>
                                    </div>
                                    <div className={"mt-8 mb-4"}>
                                        <nav className={"grid gap-4 items-center text-lg"}>
                                            <Link href={"#"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                {/* <Feather className={"size-6"} /> */}
                                                Home
                                            </Link>
                                            <Link href={"#features"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                {/* <CodeXml className={"size-6"} /> */}
                                                Features
                                            </Link>
                                            <Link href={"#faq"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                {/* <Wallet2 className={"size-6"} /> */}
                                                FAQ
                                            </Link>
                                            <Link href={""} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>{/* <Newspaper className={"size-6"} /> */}  Careers</Link>
                                        </nav>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </section>
                    </div>
                </div>
            </header>
        </>
    )
}