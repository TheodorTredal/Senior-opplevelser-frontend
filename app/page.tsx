import { DestinationCarousel } from "@/src/components/destination-carousel";
import { RingOss } from "@/src/components/ringOss";


export default function Home() {
  return (
    <main className="bg-brand-bg space-y-12">
      <section className="pt-10">
        <DestinationCarousel />
      </section>

      <section>
        <RingOss></RingOss>
      </section>

    </main>
  );
}

