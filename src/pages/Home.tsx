// @ts-ignore
import HeroSection from "@/sections/Hero";
import { AboutSection } from "../sections/about3.tsx";
import {WhyWeStandOutSection} from "../sections/WhyWeStandOutSection.tsx";
import {TestHero} from "../sections/TestHero.tsx"; // ← default import
export function Home() {
    return (
        <div className="bg-white text-gray-900">
            <HeroSection />
            <AboutSection />
            <WhyWeStandOutSection />
            <TestHero />
        </div>
    )
}
