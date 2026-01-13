import { ReiseCard } from "@/src/components/reiseCard";
import { ReiseFilter } from "@/src/components/filtrerReiser";
import { ReiseBreadcrumb } from "@/src/components/reiseBreadCrumb";

const tmpImageSrc = "https://placehold.co/200x200"

const vestlandetReiser = [
  {
    title: "Opplev Geirangerfjorden",
    imageSrc: "/images/destinations/geiranger.jpg",
    imageAlt: "Geirangerfjorden sett fra fjellet",
    price: 1995,
    duration: "5 dager",
    highlights: "Komfortabel buss • Lokal guide",
    slug: "reiser/opplev-geiranger",
  },
  {
    title: "Bergen & Fløyen",
    imageSrc: tmpImageSrc,
    imageAlt: "Bryggen i Bergen",
    price: 1495,
    duration: "3 dager",
    highlights: "Byvandring • Fløibanen",
    slug: "reiser/bergen-og-floyen",
  },
  {
    title: "Sognefjorden rundt",
    imageSrc: tmpImageSrc,
    imageAlt: "Sognefjorden i sollys",
    price: 2495,
    duration: "6 dager",
    highlights: "Fjordcruise • Spektakulær natur",
    slug: "reiser/sognefjorden-rundt",
  },
  {
    title: "Hardanger & Vøringsfossen",
    imageSrc: tmpImageSrc,
    imageAlt: "Vøringsfossen i Hardanger",
    price: 1795,
    duration: "4 dager",
    highlights: "Fosser • Fjordlandskap",
    slug: "reiser/hardanger-voringsfossen",
  },
  {
    title: "Preikestolen & Lysefjorden",
    imageSrc: tmpImageSrc,
    imageAlt: "Utsikt fra Preikestolen",
    price: 2295,
    duration: "5 dager",
    highlights: "Fottur • Fjordcruise",
    slug: "reiser/preikestolen-lysefjorden",
  },
]

export default function AlleReiserPage() {
  return (
    <main className="p-8">
      <ReiseBreadcrumb title=""></ReiseBreadcrumb>
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">
          Alle reiser
        </h1>
      </header>


        <div className="flex gap-8 pt-10">
          <aside className=" w-72 p-2">
            <ReiseFilter />
          </aside>

            <section className="flex flex-col gap-4 w-full">
              {vestlandetReiser.map((reise) => (
                  <div key={reise.slug} className="p-2 w-full">
                  <ReiseCard {...reise} />
                </div>
              ))}
            </section>

        </div>
    </main>
  );
}