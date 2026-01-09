"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";


const TravelCard = ({ title }: { title?: string }) => {
  return (
    <Card className="w-full max-w-sm h-40 overflow-hidden shadow-lg border-none bg-brand-cta flex flex-col">
      
      <CardHeader className="px-4 py-2 space-y-0 text-white">
        <span className="uppercase tracking-wide text-xs opacity-90">
          Reise til.. ?
        </span>

        <CardTitle className="text-lg font-semibold leading-tight">
          {title ?? " "}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-between items-center bg-white px-4 py-3">
        <p className="text-xl font-bold text-gray-700">
          Fra 1 995 kr
        </p>

        <Button size="sm">Les mer</Button>
      </CardContent>

    </Card>
  );
};












const destinations = [
  {
    title: "Geirangerfjorden",
    image: "/images/destinations/geiranger.jpg",
    alt: "Geirangerfjorden med fjell og fjord",
  },
  {
    title: "Lofoten",
    image: "/images/destinations/lofoten.jpg",
    alt: "Lofoten med fjell og rorbuer",
  },
  {
    title: "Odda",
    image: "/images/destinations/odda.jpeg",
    alt: "Stavkirken i Odda",
  },
];

export function DestinationCarousel() {
  return (
    <Carousel
      className="w-full max-w-7xl mx-auto"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {destinations.map((dest, index) => (
        <CarouselItem key={index}>
          <div className="relative h-80 md:h-125 overflow-hidden rounded-xl">
                
            <Image
              src={dest.image}
              alt={dest.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
        
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
                
            {/* Card – riktig plassert */}
            <div className="min-w-80 absolute bottom-6 left-6">
              <TravelCard title={dest.title} />
            </div>
                
          </div>
        </CarouselItem>

        ))}
      </CarouselContent>

      {/* Store piler – bra for eldre */}
      <CarouselPrevious className="left-4 h-12 w-12" />
      <CarouselNext className="right-4 h-12 w-12" />
    </Carousel>
  );
}
