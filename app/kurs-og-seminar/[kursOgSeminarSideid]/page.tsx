import { KursOgSeminarBreadcrumb } from "@/src/components/reiseBreadCrumb";
import { InfoOmOpplevelsen } from "@/src/components/infoOmTuren";
import { StickyBestillingsButtonKursOgSeminar } from "@/src/components/stickyBestillingsButton";
import { DatoOgPriserKursOgSeminarer } from "@/src/components/datoOgPris";
import OpplevelsenInkluderer from "@/src/components/opplevelsenInkluderer";
import { ReiseProgramKomponent } from "@/src/components/reiseProgram";

const dagsProgram = [
  { tid: "17:00", aktivitet: "Ankomst og velkomst" },
  { tid: "17:15", aktivitet: "Introduksjon til kveldens viner og program" },
  { tid: "17:30", aktivitet: "Smaking av de første vinene med veiledning" },
  { tid: "18:30", aktivitet: "Pause med lett servering" },
  { tid: "19:00", aktivitet: "Videre vinsmaking og fordypning i smaksnoter" },
  { tid: "20:30", aktivitet: "Åpen smaking og spørsmål til sommelier" },
  { tid: "21:30", aktivitet: "Avslutning og mulighet for kjøp av vin" },
  { tid: "22:00", aktivitet: "Takk for i kveld" },
]

const kursOgSeminarSpesifikkInfo = [
  {
    id: "1",
    dato: "12. juni 2026",
    tid: "17:00",
    sted: "Bergen",
    varighet: "5 timer",
    pris: "995 kr",
  },
  {
    id: "2",
    dato: "20. juli 2026",
    tid: "17:00",
    sted: "Bergen",
    varighet: "5 timer",
    pris: "995 kr",
  },
]

const inkludert = [
  "Guidet vinsmaking med erfaren sommelier",
  "Smaking av 5-7 utvalgte viner",
  "Introduksjon til druer, produksjon og smaksnoter",
  "Lett servering som passer til vinene",
  "Tilgang til eksklusive viner som ikke selges i butikk",
  "Mulighet for kjøp av favorittvinene etter smakingen",
  "Hyggelig og sosial opplevelse i stemningsfulle omgivelser",
]


interface PageProps {
  params: {
    kursOgSeminarSideid: string;
  }
}

const altImg = "https://placehold.co/1200x600";

const KursOgSeminarerPage = async ({ params }: PageProps) => {
  
    const { kursOgSeminarSideid } = await params;

      const title = kursOgSeminarSideid
    .replaceAll("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())

  
    return (
    <main className="flex flex-col space-y-6 min-h-screen p-8 bg-gray-200 pb-24">

        <KursOgSeminarBreadcrumb title={title}></KursOgSeminarBreadcrumb>

        <section className="space-y-2">
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

        <StickyBestillingsButtonKursOgSeminar />

        <div id="etter-bilde-trigger" />

        <section id="om-kurset" className="scroll-mt-24">
            <InfoOmOpplevelsen
                tittel="Tittel"
                innhold="vinsmaking på hotel grand terminus"
                lesMerInnhold="Mer info om vinsmaking på hotel terminus"
            />
        </section>

        <section id="dato-og-priser" className="scroll-mt-24">
            <DatoOgPriserKursOgSeminarer 
                avganger={kursOgSeminarSpesifikkInfo} 
            />
        </section>

        <section id="kurset-inkluderer">
            <OpplevelsenInkluderer
                inkludert={inkludert}
            >
            </OpplevelsenInkluderer>
        </section>

        <section id="program" className="scroll-mt-24">
            <ReiseProgramKomponent
                program={dagsProgram}
            />            
        </section>
    </main>
  )
}

export default KursOgSeminarerPage
