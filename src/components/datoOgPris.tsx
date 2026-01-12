
import { Button } from "@/components/ui/button"

export const DatoOgPris = () => {
  return (
    <div className="w-full rounded-xl border bg-background">
      <div className="flex justify-between p-4">
        <InfoItem label="Avreise" value="12. juni 2026" />
        <InfoItem label="Avreisested" value="Oslo" />
        <InfoItem label="Varighet" value="5 dager" />
        <InfoItem label="Pris fra" value="1 995 kr" />

        <div className="flex items-center">
            <Button className="bg-brand-blue"
            size="lg">Bestill reise</Button>
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



export const DatoOgPriser = () => {

    return (
        <div className="space-y-2 p-6">
            <DatoOgPris></DatoOgPris>
            <DatoOgPris></DatoOgPris>
            <DatoOgPris></DatoOgPris>
            <DatoOgPris></DatoOgPris>
        </div>
    )
}