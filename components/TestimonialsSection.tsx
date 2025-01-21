"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "GrandFleet transformed our operations, and their website design brought in 40% more bookings!",
    author: "John D., CarMax Rentals",
  },
  {
    quote:
      "The customer support management has reduced our costs significantly. Highly recommended!",
    author: "Sarah L., City Wheels",
  },
  {
    quote:
      "Their marketing strategies have helped us attract more long-term rental drivers. Great ROI!",
    author: "Mike R., Express Auto Rentals",
  },
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
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
