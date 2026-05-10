import {
  AdviseReason,
  ContactSupport,
  Hero,
  RegisterForConsultation,
} from "@/components/tu-van";

export default async function TuVan() {
  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <AdviseReason />
        <RegisterForConsultation />
        <ContactSupport />
      </div>
    </div>
  );
}
