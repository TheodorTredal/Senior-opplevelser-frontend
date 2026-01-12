import Link from "next/link";

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export interface ReiseCardProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  price: number;
  duration?: string;
  highlights?: string;
  onClick?: () => void;
  slug: string;
}

export const ReiseCard = ({
  title,
  imageSrc,
  imageAlt = "Reisebilde",
  price,
  duration,
  highlights,
  onClick,
  slug,
}: ReiseCardProps) => {
  return (
    <Card
    //   onClick={onClick}
      className="
        group
        flex flex-row items-stretch
        overflow-hidden
        w-72 h-72
        p-0
        cursor-pointer
        transition-shadow
        hover:shadow-lg
      "
    >

        <Link href={`/reiser/${slug}`} className="block">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="
              w-64 h-full
              object-cover
              border-r border-brand-detail/40
            "
          />
        </Link>

      {/* Innhold */}
      <div className="flex flex-col flex-1 justify-between p-6">
        <div className="space-y-2">
          <CardTitle className="text-xl leading-snug">
            <Link href={`/reiser/${slug}`} className="hover:underline">
                {title}
            </Link>
          </CardTitle>

          {(duration || highlights) && (
            <p className="text-sm text-muted-foreground">
              {[duration, highlights].filter(Boolean).join(" • ")}
            </p>
          )}
        </div>

        <CardContent className="p-0 flex items-center justify-between">
          <p className="text-lg font-semibold">
            fra <span className="text-xl">{price.toLocaleString("nb-NO")} kr</span>
          </p>

          <Button
            className="
              bg-brand-blue text-white
              px-6 py-3
              rounded-lg
              hover:opacity-90
              focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
            "
          >
            <Link href={`/reiser/${slug}`}>
                Les mer
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
