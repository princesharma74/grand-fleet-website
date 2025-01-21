"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {

  return (
    // <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
    <header className="sticky top-0 w-full bg-brand_blue text-white flex items-center justify-center">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo for Mobile */}
        <Link href="/" className="font-bold md:hidden">
            <Image
              alt="Logo"
              className="rounded-xl object-cover object-center"
              src="/GrandFleet.png"
              height={10}
              width={50}
            />
            <span className="hidden font-bold">GrandFleet</span>
        </Link>
        {/* Desktop View - Logo and Navigation */}
        <div className="mr-4 hidden md:flex">
            <Image
              alt="Logo"
              className="rounded-xl object-cover object-center"
              src="/GrandFleet.png"
              height={10}
              width={50}
            />
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">GrandFleet</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {["Home", "About Us", "Services", "Testimonials", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Get Started Button */}
        <div className="flex items-center justify-end space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href={"#contact"} className="bg-brand_orange text-white hover:bg-[#FF8A00]/90 w-full py-2 px-5 rounded-full font-bold">
            Get a qoute
            </Link>
          </div>
          {/* Mobile View - Hamburger and Logo */}
          <div className="flex items-center md:hidden">
            {/* Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="pr-0">
                <nav className="flex flex-col space-y-3">
                  {[
                    "Home",
                    "About Us",
                    "Services",
                    "Testimonials",
                    "Contact",
                  ].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;