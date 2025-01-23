"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Ash has been a tremendous help to me and my car rental company. Her dedication to finding clients and ensuring we stay on top of our game is truly remarkable. She consistently delivers exceptional results and never fails to impress with her professionalism and work ethic. Highly recommend her services!",
    author: "Solutiondash Rentals, Dandenong",
  },
  {
    quote: "Grand Fleet has been a game-changer for my car rental business! Their fleet management and driver lead services are top-notch. I’m truly impressed with the quality of their work. Even though they’re a startup, their services are excellent and perfectly tailored for car rental business owners.",
    author: "Foton Enterprises",
  }
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (

<section id="testimonials" className="bg-white px-6 py-24 sm:py-32 lg:px-8 mt-16 -z-10">
  <div className="bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div className="right-1/2 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <figure className="mt-10">
                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9 transition-opacity duration-500 ease-in-out">
                  <p>&quot;{testimonial.quote}&quot;</p>
                </blockquote>
                <figcaption className="mt-10">
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</section>
  );
};

export default TestimonialsSection;
