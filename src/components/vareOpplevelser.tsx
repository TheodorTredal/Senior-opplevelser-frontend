import { Card, CardContent, CardTitle } from "@/components/ui/card"

interface OpplevelseProps {
  title: string
  description: string
  img?: string
}

export const VaareOpplevelserCard = ({ title, description, img }: OpplevelseProps) => {
  return (
    <Card className="w-64 h-80 hover:shadow-xl transition-shadow duration-200 rounded-2xl overflow-hidden">
      {img && (
        <div className="h-32 w-full">
          <img
            src={img}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <CardContent className="flex flex-col gap-2 p-4">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <p className="text-gray-700 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}


const opplevelser = [
  { title: "Vinsmaking", description: "Hos ... er det vinsmakingskurs", img: "https://placehold.co/400x200" },
  { title: "Kajakktur", description: "Opplev fjorden fra kajakk", img: "https://placehold.co/400x200" },
  { title: "Matkurs", description: "Lær å lage lokale retter", img: "https://placehold.co/400x200" },
  { title: "Fjelltur", description: "Guidet tur i nærområdet", img: "https://placehold.co/400x200" },
]


export const VaareOpplevelser = () => {

  return (
    <div className="w-full py-8">
      <h1 className="text-4xl font-semibold mb-6 pl-12">Våre opplevelser</h1>

      <div className="flex flex-row justify-around gap-6">
        {opplevelser.map((o, i) => (
          <VaareOpplevelserCard
            key={i}
            title={o.title}
            description={o.description}
            img={o.img}
          />
        ))}
      </div>
    </div>
  )
}
