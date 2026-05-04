import {
  ComparisonTable,
  ContactCTA,
  Hero,
  Info,
  Pricing,
} from "@/components/hoc-phi";

export default function HocPhi() {
  return (
    <div className="text-white space-y-4 pt-8 mt-8 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <Pricing />
        <ComparisonTable />
        <Info />
        <ContactCTA />
      </div>
    </div>
  );
}
