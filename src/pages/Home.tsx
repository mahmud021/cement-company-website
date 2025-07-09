// @ts-ignore
import HeroSection from "@/sections/Hero";
import { AboutSection } from "../components/about3.tsx"; // ← default import
export function Home() {
    return (
        <div className="bg-white text-gray-900">
            <HeroSection />
            <AboutSection />
        </div>
    )
}
