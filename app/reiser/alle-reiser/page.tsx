import { ReiseCard } from "@/src/components/reiseCard";
import { ReiseFilter } from "@/src/components/filtrerReiser";

const vestlandetReiser = [
  {
    title: "Opplev Geirangerfjorden",
    imageSrc: "/images/destinations/geiranger.jpg",
    imageAlt: "Geirangerfjorden sett fra fjellet",
    price: 1995,
    duration: "5 dager",
    highlights: "Komfortabel buss • Lokal guide",
    slug: "opplev-geiranger",
  },
  {
    title: "Bergen & Fløyen",
    imageSrc: "/images/destinations/bergen.jpg",
    imageAlt: "Bryggen i Bergen",
    price: 1495,
    duration: "3 dager",
    highlights: "Byvandring • Fløibanen",
    slug: "bergen-og-floyen",
  },
  {
    title: "Sognefjorden rundt",
    imageSrc: "/images/destinations/sognefjorden.jpg",
    imageAlt: "Sognefjorden i sollys",
    price: 2495,
    duration: "6 dager",
    highlights: "Fjordcruise • Spektakulær natur",
    slug: "sognefjorden-rundt",
  },
  {
    title: "Hardanger & Vøringsfossen",
    imageSrc: "/images/destinations/hardanger.jpg",
    imageAlt: "Vøringsfossen i Hardanger",
    price: 1795,
    duration: "4 dager",
    highlights: "Fosser • Fjordlandskap",
    slug: "hardanger-voringsfossen",
  },
  {
    title: "Preikestolen & Lysefjorden",
    imageSrc: "/images/destinations/preikestolen.jpg",
    imageAlt: "Utsikt fra Preikestolen",
    price: 2295,
    duration: "5 dager",
    highlights: "Fottur • Fjordcruise",
    slug: "preikestolen-lysefjorden",
  },
]

export default function AlleReiserPage() {
  return (
    <main className="p-8">
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">
          Alle reiser
        </h1>
      </header>
        <div className="flex w-full gap-8 pt-10">
          <aside className="w-96 ">
            <ReiseFilter />
          </aside>

            <section className="flex flex-col gap-10 w-full">
              {vestlandetReiser.map((reise) => (
                  <div key={reise.slug} className="p-2">

                  <ReiseCard {...reise} />
                </div>
              ))}
            </section>
        </div>
    </main>
  );
}