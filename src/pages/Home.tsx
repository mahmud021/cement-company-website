// @ts-ignore
import HeroSection from "@/sections/Hero";
import {InfoSection} from "../sections/info.tsx";
import AboutSection from "../sections/About.tsx";
import {FeaturesSection} from "../sections/Feature.tsx";
import {TeamSection} from "../sections/Team.tsx";
import {Navbar} from "../components/Navbar.tsx";
export function Home() {
    return (
        <div className="bg-white text-gray-900">
            <Navbar/>
            <HeroSection/>
            <InfoSection/>
            <AboutSection/>
            <FeaturesSection/>
            <TeamSection/>
        </div>
    )
}
