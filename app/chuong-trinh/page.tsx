import {
  BottomBanner,
  CurriculumTable,
  FeatureBar,
  Hero,
  Roadmap,
  SevenModule,
} from "@/components/chuong-trinh";

export default function ChuongTrinh() {
  return (
    <div className="text-white space-y-4 pt-8 mt-8 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <FeatureBar />
        <SevenModule />
        <Roadmap />
        <CurriculumTable />
        <BottomBanner />
      </div>
    </div>
  );
}
