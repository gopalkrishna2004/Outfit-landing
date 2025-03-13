import SiteHeader from "@/components/site-header";
import {HeroSection} from "@/components/hero-section";
import SiteFooter from "@/components/site-footer";
import {CallToAction} from "@/components/call-to-action";
import { HowItWorks } from "@/components/hiw";
import {Faq} from "@/components/Faq";
import { Features } from "@/components/Features";

export default function Home() {
    return (
        <>
            <SiteHeader />
            <HeroSection />
            <HowItWorks />
            {/* <Features/> */}
            <Faq/>
            <CallToAction />
            <SiteFooter />
        </>
    );
}
