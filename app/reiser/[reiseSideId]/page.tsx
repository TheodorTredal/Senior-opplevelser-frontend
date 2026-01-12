import { ReiseBreadcrumb } from "@/src/components/reiseBreadCrumb"
import { InfoOmReisen } from "@/src/components/infoOmTuren";
import { DatoOgPriser } from "@/src/components/datoOgPris";
import { ReisenInkluderer } from "@/src/components/reisenInkluderer";


const testImg = "";
const testAltImg = "";

export default async function ReisePage({
  params,
}: {
  params: Promise<{ reiseSideId: string }>
}) {
  const { reiseSideId } = await params

  const title = reiseSideId
    .replaceAll("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    
    <main className="flex flex-col space-y-6 min-h-screen p-8">
        {/* Header-seksjon */}
        <section className="space-y-2">
            <ReiseBreadcrumb title={title} />

            <h1 className="text-2xl font-bold">
            {title}
            </h1>
        </section>

        {/* Bilde */}
        <section>
          <img
            src="https://placehold.co/1200x600"
            alt="Testbilde"
            className="w-full h-96 object-cover rounded-xl"
          />
        </section>

        {/* Info */}
        <section>
          <InfoOmReisen />
        </section>
        
        <section>
            <div className="bg-gray-200">
                <DatoOgPriser></DatoOgPriser>
            </div>
        </section>

        <section>
            <ReisenInkluderer></ReisenInkluderer>
        </section>

    </main>


  )
}



/**
 * 1. Kort om destinasjonen
 * 
 * 2. Dato og prid
 * 
 * 3. Hva som er inkludert i prisen
 */