import Link from "next/link";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  return (
    <section className="w-full bg-[url('https://res.cloudinary.com/dyflt39oq/image/upload/v1737483613/Grandfleet/hero-background_bdnoeb.jpg')] bg-cover bg-center h-full">
      <div className="py-32 lg:py-48 w-full h-full bg-black bg-opacity-30 flex justify-center">
        <div className="container h-full">
          <div className="flex flex-col items-center space-y-4 text-center p-8 md:p-2 w-full">
            <div>
              <Badge className="rounded-full bg-brand_blue text-xs md:text-sm">Your Partner in Mobility, Design and Support.</Badge>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter lg:text-6xl/none text-white px-5 md:px-10">
                Comprehensive Fleet Management Services – Starting at Just
                $49/Week
              </h1>
            </div>
            <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-semibold">
              Streamline your car rental business and grow online with
              affordable, expert services.
            </p>
            <div className="grid grid-rows-2 md:grid-cols-2 gap-2 w-full md:w-fit p-5">
              <Link
                href={"#contact"}
                className="bg-brand_orange text-white hover:bg-[#FF8A00]/90 w-full py-2 px-5 rounded-full font-bold"
              >
                Get a quote
              </Link>
              <Link
                href={"#about-us"}
                className="py-2 px-5 rounded-full text-white bg-brand_blue font-bold"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
