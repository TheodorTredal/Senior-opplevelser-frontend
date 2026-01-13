import { ReiseBreadcrumb } from "@/src/components/reiseBreadCrumb"
import { InfoOmOpplevelsen } from "@/src/components/infoOmTuren";
import { DatoOgPriser } from "@/src/components/datoOgPris";
import { OpplevelsenInkluderer } from "@/src/components/opplevelsenInkluderer";
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

const avganger = [
  {
    id: "1",
    dato: "12. juni 2026",
    sted: "Oslo",
    varighet: "5 dager",
    pris: "1 995 kr",
  },
  {
    id: "2",
    dato: "20. juli 2026",
    sted: "Bergen",
    varighet: "7 dager",
    pris: "2 495 kr",
  },
]


const inkludert = [
  "Flyreise tur-retur fra Oslo",
  "Overnatting i 7 netter på hotell",
  "Frokost inkludert hver dag",
  "Transfer mellom flyplass og hotell",
  "Reiseforsikring",
  "Guidet bytur første dag",
  "Gratis avbestilling frem til 14 dager før avreise",
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
          <InfoOmOpplevelsen
            tittel="Om reisen"
            innhold="Denne reisen tar deg med gjennom spektakulære landskap,
                    fjorder og ikoniske utsiktspunkt."
            lesMerInnhold="Turen inkluderer guidede opplevelser, komfortabel transport
                            og nøye utvalgte stopp langs veien.

                            Du får god tid til fotografering, korte fotturer og lokale
                            matopplevelser - perfekt både for førstegangsbesøkende og
                            erfarne reisende."
          />
        </section>
        
        <section id="dato-og-priser" className="scroll-mt-24">
            <div>
                <DatoOgPriser avganger={avganger}></DatoOgPriser>
            </div>
        </section>

        <section id="reisen-inkluderer" className="scroll-mt-24">
            <OpplevelsenInkluderer inkludert={inkludert}></OpplevelsenInkluderer>
        </section>

        <section id="program" className="scroll-mt-24">
          <ReiseProgramKomponent program={dagsProgram}></ReiseProgramKomponent>
        </section>
    </main>
  )
}
