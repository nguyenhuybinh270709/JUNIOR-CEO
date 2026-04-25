import { FeatureBar } from "@/pages/home/components/FeatureBar";
import { Hero } from "@/pages/home/components/Hero";
import { Benefit } from "@/pages/home/components/Benefit";
import { SevenModule } from "@/pages/home/components/SevenModule";
import { Roadmap } from "@/pages/home/components/Roadmap";
import { Highlight } from "@/pages/home/components/Highlight";
import { ContactBanner } from "@/pages/home/components/ContactBanner";

export default function Home() {
  return (
    <>
      <title>JUNIOR CEO</title>

      <div className="text-white space-y-4">
        <Hero />
        <div className="px-8 space-y-2">
          <FeatureBar />
          <Benefit />
          <SevenModule />
          <Roadmap />
          <Highlight />
        </div>
        <ContactBanner />
      </div>
    </>
  );
}
