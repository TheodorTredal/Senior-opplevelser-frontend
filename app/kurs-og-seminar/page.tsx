import { ReiseCard } from "@/src/components/reiseCard";
import { ReiseFilter } from "@/src/components/filtrerReiser";


const kursOgSeminarer = [
  {
    title: "Vinkurs med Tendjord på Terminus",
    imageSrc: "/images/destinations/vinsmaking.jpg",
    imageAlt: "Geirangerfjorden sett fra fjellet",
    price: 1995,
    duration: "",
    location: "Terminus hotell",
    highlights: "",
    slug: "kurs-og-seminar/vinkurs-terminus",
  },
]


const KursOgSeminarPage = () => {
    return (
    <main className="p-8">
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">
          Kurs og Seminar
        </h1>
      </header>


        <div className="flex gap-8 pt-10">
          <aside className=" w-72 p-2">
            <ReiseFilter />
          </aside>


        <section className="flex flex-col gap-4 w-full">
          {kursOgSeminarer.map((reise) => (
              <div key={reise.slug} className="p-2 w-full">
              <ReiseCard {...reise} />
            </div>
          ))}
        </section>



        </div>



      </main>
    )
}



export default KursOgSeminarPage;