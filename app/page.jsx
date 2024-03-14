import Image from "next/image";
import Header from "@/components/page-header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
    <Header />

    <main className="block">
      <article className="block">
        <Hero />
      </article>
    </main>
    </>
  );
}
