import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CementAboutProps {
  companyName: string;
  foundingYear: number;
  headline: string;
  mission: string;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  certifications: Array<{
    src: string;
    alt: string;
  }>;
  teamImage: {
    src: string;
    alt: string;
  };
  facilityImage: {
    src: string;
    alt: string;
  };
  cta: {
    text: string;
    url: string;
  };
}

const CementAbout = ({
                       companyName = "SolidBase Cement",
                       foundingYear = 1985,
                       headline = "Building the Future with Strength and Reliability",
                       mission = "We manufacture high-quality cement products that form the foundation of modern infrastructure while prioritizing sustainable production methods.",
                       values = [
                         {
                           title: "Quality",
                           description: "ISO 9001 certified production with rigorous testing",
                           icon: "🏗️",
                         },
                         {
                           title: "Sustainability",
                           description: "20% reduced carbon footprint since 2015",
                           icon: "🌱",
                         },
                         {
                           title: "Innovation",
                           description: "Patented cement formulas for extreme conditions",
                           icon: "🔬",
                         },
                       ],
                       stats = [
                         { value: "2M+", label: "Tons produced annually" },
                         { value: "500+", label: "Construction partners" },
                         { value: "40+", label: "Years in operation" },
                         { value: "99.8%", label: "Quality assurance rate" },
                       ],
                       certifications = [
                         {
                           src: "/certifications/iso-9001.svg",
                           alt: "ISO 9001 Certified",
                         },
                         {
                           src: "/certifications/green-building.svg",
                           alt: "Green Building Certified",
                         },
                         {
                           src: "/certifications/aci.svg",
                           alt: "ACI Member",
                         },
                       ],
                       teamImage = {
                         src: "/images/cement-team.jpg",
                         alt: "Our expert team at SolidBase Cement",
                       },
                       facilityImage = {
                         src: "/images/production-facility.jpg",
                         alt: "Our state-of-the-art production facility",
                       },
                       cta = {
                         text: "Request Product Specifications",
                         url: "/contact",
                       },
                     }: CementAboutProps) => {
  return (
      <section className="relative py-24 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 -z-10 bg-[url('/images/concrete-texture.jpg')] opacity-5" />

        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 bg-amber-50 text-amber-800">
              Since {foundingYear}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {headline}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {mission}
            </p>
          </div>

          {/* Image showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                  src={facilityImage.src}
                  alt={facilityImage.alt}
                  className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-semibold text-white">
                  Our Production Facility
                </h3>
                <p className="text-gray-200 mt-2">
                  State-of-the-art manufacturing with capacity for 2M tons annually
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                  src={teamImage.src}
                  alt={teamImage.alt}
                  className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-semibold text-white">
                  Expert Team
                </h3>
                <p className="text-gray-200 mt-2">
                  150+ professionals dedicated to cement excellence
                </p>
              </div>
            </div>
          </div>

          {/* Core values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-900 rounded-2xl p-12 mb-20 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-300">
                      {stat.label}
                    </p>
                  </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Certifications & Memberships
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
                    <img
                        src={cert.src}
                        alt={cert.alt}
                        className="h-16 object-contain"
                    />
                  </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Build with {companyName}?
            </h2>
            <Button size="lg" asChild>
              <a href={cta.url}>
                {cta.text}
              </a>
            </Button>
          </div>
        </div>
      </section>
  );
};

export { CementAbout };