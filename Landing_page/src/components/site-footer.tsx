import X from "@/assets/social-x.svg"
import Instagram from "@/assets/social-instagram.svg"
import Youtube from "@/assets/social-youtube.svg"
import SiteLogo from "@/assets/logo.svg";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <>
            <footer className="py-6 md:px-8 md:py-0 border-t-2 bg-black">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">

                    <section className={"flex items-center gap-3"}>
                        <div className={"size-12 rounded-lg inline-flex items-center justify-center"}>
                            <SiteLogo className={"size-10 h-auto rounded-lg"}/>
                        </div>
                        <p className={"font-medium"}>OUTFIT</p>
                    </section>



                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2025 OUTFIT, All rights reserved. Built by <a
                        href={"https://www.linkedin.com/in/gopalkrishna-nuthakki/"}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Gopala Krishna
                    </a>
                        .
                    </p>
                    <div>
                        <ul className={"flex justify-center gap-3 text-white/40"}>
                            <li className={"hover:text-white cursor-pointer"}><X/></li>
                            <li className={"hover:text-white cursor-pointer"}><Instagram/></li>
                            <li className={"hover:text-white cursor-pointer"}><Youtube/></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
