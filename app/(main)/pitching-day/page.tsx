import {
  About,
  Hero,
  PitchingInfo,
  Prize,
  Moments,
  EnrollmentBanner,
} from "@/components/pitching-day";

export default function PhuHuynhNoiGi() {
  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <About />
        <PitchingInfo />
        <Prize />
        <Moments />
        <EnrollmentBanner />
      </div>
    </div>
  );
}
