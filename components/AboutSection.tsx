import { CheckCircle } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about-us" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#1A1919]">
                Your Partner for Fleet and Digital Growth
              </h2>
              <p className="text-gray-600 sm:text-lg lg:text-xl max-w-prose">
                Expert solutions tailored to small and medium car rental businesses
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Reduce costs by 50%–80% with efficient customer support management.",
                "Increase visibility and leads with strategic fleet marketing.",
                "Build a strong online presence with affordable digital marketing and websites.",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF8A00]" />
                  <span className="text-gray-700 lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <Image
              alt="About Us"
              className="rounded-xl object-cover object-center"
              src="/about-image.svg"
              width={550}
              height={310}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;