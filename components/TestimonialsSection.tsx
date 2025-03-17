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
  },
  {
    quote: "GrandFleet has been a game-changer for our business. Their experience in the car rental industry has made things so much easier for us, especially when it comes to managing tolls and payments. On top of that, their pricing is much more affordable. We also got our booking website done through them, and the whole process was smooth though it took around 3 weeks but we were satisfied. Honestly, when we first approached them, they were just starting out, and we weren’t sure what to expect. But looking back, it was one of the best decisions we made. Highly recommend their services!",
    author: "Veera Rentals",
  },
  {
    quote: "I am happy working with Grand Fleet  highly recommend to others. 5 star to their services",
    author: "Riaj Motorpoint",
  }
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (

<section id="testimonials" className="w-full bg-white px-6 py-24 sm:py-32 lg:px-8 -z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-[#1A1919]">Testimonials</h2>
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
