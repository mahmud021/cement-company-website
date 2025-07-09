// @ts-ignore
import HeroSection from "@/sections/Hero";
import { AboutSection } from "../sections/about3.tsx";
import {WhyWeStandOutSection} from "../sections/WhyWeStandOutSection.tsx"; // ← default import
export function Home() {
    return (
        <div className="bg-white text-gray-900">
            <HeroSection />
            <AboutSection />
            <WhyWeStandOutSection />
        </div>
    )
}
