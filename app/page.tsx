import { DestinationCarousel } from "@/src/components/destination-carousel";
import { RingOss } from "@/src/components/ringOss";
import { VaareOpplevelser } from "@/src/components/vareOpplevelser";

export default function Home() {
  return (
    <main className="bg-brand-bg space-y-12">
      <section className="pt-10">
        <DestinationCarousel />
      </section>

      <section>
        <RingOss></RingOss>
      </section>

      <section>
        <VaareOpplevelser></VaareOpplevelser>
      </section>

    </main>
  );
}

