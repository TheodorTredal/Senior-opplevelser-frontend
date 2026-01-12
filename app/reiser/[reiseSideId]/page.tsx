import { ReiseBreadcrumb } from "@/src/components/reiseBreadCrumb"
import { InfoOmReisen } from "@/src/components/infoOmTuren";
import { DatoOgPriser } from "@/src/components/datoOgPris";
import { ReisenInkluderer } from "@/src/components/reisenInkluderer";
import { ReiseProgramKomponent } from "@/src/components/reiseProgram";
import { StickyBestillingsButton } from "@/src/components/stickyBestillingsButton";


const testImg = "";
const altImg = "https://placehold.co/1200x600";


const dagsProgram = [
  { tid: "08:00", aktivitet: "Oppmøte" },
  { tid: "09:30", aktivitet: "Avreise til dagens utflukt" },
  { tid: "10:30", aktivitet: "Guidet sightseeing i sentrum" },
  { tid: "13:00", aktivitet: "Lunsj på lokal restaurant" },
  { tid: "15:00", aktivitet: "Tid på egen hånd / shopping" },
  { tid: "18:30", aktivitet: "Felles middag" },
  { tid: "20:00", aktivitet: "Buss tilbake" },
]


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
    
    <main className="flex flex-col space-y-6 min-h-screen p-8 bg-gray-200 pb-24">
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
            alt={altImg}
            className="w-full h-96 object-cover rounded-xl"
          />
        </section>
        
        <StickyBestillingsButton></StickyBestillingsButton>

        <div id="etter-bilde-trigger" />

        {/* Info */}
        <section id="om-reisen" className="scroll-mt-24">
          <InfoOmReisen />
        </section>
        
        <section id="dato-og-priser" className="scroll-mt-24">
            <div>
                <DatoOgPriser></DatoOgPriser>
            </div>
        </section>

        <section id="reisen-inkluderer" className="scroll-mt-24">
            <ReisenInkluderer></ReisenInkluderer>
        </section>

        <section id="program" className="scroll-mt-24">
          <ReiseProgramKomponent program={dagsProgram}></ReiseProgramKomponent>
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