"use client";


import { Button } from "@/components/ui/button"

export interface AvreiseProps {
  id: string;
  dato: string;
  tid?: string;
  sted: string;
  varighet: string;
  pris: string;
}

export interface DatoOgPrisProps {
  avreise: AvreiseProps;
  onBestill?: (id: string) => void;
}


export interface DatoOgPriserProps {
  avganger: AvreiseProps[];
}


export const DatoOgPris = ({ avreise, onBestill}: DatoOgPrisProps) => {
  return (
    <div className="w-full rounded-xl border bg-background">
      <div className="flex justify-between p-4">
        <InfoItem label="Dato" value={avreise.dato} />
        <InfoItem label="Avreisested" value={avreise.sted} />
        <InfoItem label="Varighet" value={avreise.varighet} />
        <InfoItem label="Pris fra" value={avreise.pris} />

        <div className="flex items-center">
            <Button 
              className="bg-brand-blue"
              size="lg"
              onClick={() => onBestill?.(avreise.id)}
            >
              Bestill reise
            </Button>
        </div>
      </div>
    </div>
  )
}

const InfoItem = ({
  label,
  value,
}: {
  label: string
  value: string
}) => (
  <div className="p-6 space-y-1">
    <p className="text-md text-brand-cta">
      {label}
    </p>
    <p className="font-semibold">
      {value}
    </p>
  </div>
)




export const DatoOgPriser = ({ avganger }: DatoOgPriserProps) => {

    return (
        <div className="space-y-2 p-6">
          {avganger.map((avreise) => (
            <DatoOgPris
              key={avreise.id}
              avreise={avreise}
              onBestill={(id) => {
                console.log("Bestiller avreise:", id);
              }}
            
            ></DatoOgPris>
          ))}
        </div>
    )
}





export const DatoOgPrisKursOgSeminar = ({ avreise, onBestill}: DatoOgPrisProps) => {
  return (
    <div className="w-full rounded-xl border bg-background">
      <div className="flex justify-between p-4">
        <InfoItem label="Dato" value={avreise.dato} />
        <InfoItem label="Tidspunkt" value={avreise.tid ?? "Kommer snart"} />
        <InfoItem label="Sted" value={avreise.sted} />
        <InfoItem label="Varighet" value={avreise.varighet} />
        <InfoItem label="Pris fra" value={avreise.pris} />

        <div className="flex items-center">
            <Button 
              className="bg-brand-blue"
              size="lg"
              onClick={() => onBestill?.(avreise.id)}
            >
              Bestill reise
            </Button>
        </div>
      </div>
    </div>
  )
}





export const DatoOgPriserKursOgSeminarer = ({ avganger }: DatoOgPriserProps) => {

    return (
        <div className="space-y-2 p-6">
          {avganger.map((avreise) => (
            <DatoOgPrisKursOgSeminar
              key={avreise.id}
              avreise={avreise}
              onBestill={(id) => {
                console.log("Bestiller avreise:", id);
              }}
            
            ></DatoOgPrisKursOgSeminar>
          ))}
        </div>
    )
}