"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TravelCard = ({ title }: { title?: string }) => {
  return (
    <Card className="w-72 max-w-sm overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-none">
      
      {/* Header med gradient */}
      <CardHeader className="px-4 py-2 bg-brand-cta text-white">
        <span className="font-semibold tracking-wide text-xs opacity-90">
          Opplev.. ?
        </span>

        <CardTitle className="text-lg font-bold leading-tight mt-1">
          {title ?? "Destinasjon"}
        </CardTitle>
      </CardHeader>

      {/* Innhold */}
      <CardContent className="flex justify-between items-center px-4 bg-white">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Fra</span>
          <span className="text-xl font-bold text-gray-800">1 995 kr</span>
        </div>

        <Button size="sm" className="bg-brand-blue text-white hover:bg-brand-purple">
          Les mer
        </Button>
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
