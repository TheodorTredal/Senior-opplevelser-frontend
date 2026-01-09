import { DestinationCarousel } from "@/src/components/destination-carousel";


export default function Home() {
  return (
    <main className="bg-brand-bg space-y-12">
      <section className="pt-10">
        <DestinationCarousel />
      </section>
    </main>
  );
}

