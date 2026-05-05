import { Experts, Hero, Instructors, Method } from "@/components/giang-vien";

export default function GiangVien() {
  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <Instructors />
        <Experts />
        <Method />
      </div>
    </div>
  );
}
