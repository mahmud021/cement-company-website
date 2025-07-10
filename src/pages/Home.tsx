// @ts-ignore
import HeroSection from "@/sections/Hero";
import {WhyWeStandOutSection} from "../sections/WhyWeStandOutSection.tsx";
import {TestHero} from "../sections/TestHero.tsx";
import {InfoSection} from "../sections/info.tsx";
import AboutSection from "../sections/About.tsx"; // ← default import
export function Home() {
    return (
        <div className="bg-white text-gray-900">
            <HeroSection/>
            <InfoSection/>
            <AboutSection/>
            <WhyWeStandOutSection/>
            <TestHero/>
        </div>
    )
}
