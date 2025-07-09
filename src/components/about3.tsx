import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Construction, Globe, ShieldCheck, Leaf } from "lucide-react";

export const AboutSection = () => {
  return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left side - Cards */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Building the Future
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mission Card */}
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                      <Construction className="text-amber-600 w-6 h-6" />
                    </div>
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      To provide high-quality cement products that form the foundation for durable, sustainable infrastructure worldwide.
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* Vision Card */}
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                      <Globe className="text-blue-600 w-6 h-6" />
                    </div>
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      To be the most trusted cement manufacturer, innovating for a greener construction future.
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* Values Card */}
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                      <ShieldCheck className="text-green-600 w-6 h-6" />
                    </div>
                    <CardTitle>Our Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Quality, integrity, innovation, and environmental responsibility guide every decision we make.
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* Sustainability Card */}
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                      <Leaf className="text-emerald-600 w-6 h-6" />
                    </div>
                    <CardTitle>Sustainability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Reducing our carbon footprint by 25% by 2030 through innovative production methods.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/5]">
                <img
                    src="/images/cement-factory.jpg"
                    alt="Our modern cement production facility"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Since 1985</h3>
                  <p className="text-gray-200">
                    Delivering construction excellence for nearly four decades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};