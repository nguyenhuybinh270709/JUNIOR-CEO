import {
  ContactSupport,
  FAQComponent,
  FeatureBar,
  Hero,
} from "@/components/faq";

export default async function FAQ() {
  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <FeatureBar />
        <FAQComponent />
        <ContactSupport />
      </div>
    </div>
  );
}
