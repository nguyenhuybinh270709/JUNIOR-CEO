import {
  About,
  Hero,
  PitchingInfo,
  Prize,
  Moments,
  EnrollmentBanner,
} from "@/components/pitching-day";
import { PitchingDayService } from "@/services/pitching-day-service";

export default async function PitchingDay() {
  const data = await PitchingDayService.getData();
  if (!data) return null;

  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero
        item_1={data.item_1}
        item_2={data.item_2}
        item_3={data.item_3}
        item_4={data.item_4}
        item_5={data.item_5}
        item_6={data.item_6}
        item_7={data.item_7}
      />
      <div className="px-8 space-y-8">
        <About item_8={data.item_8} />
        <PitchingInfo item_9={data.item_9} item_10={data.item_10} />
        <Prize item_11={data.item_11} />
        <Moments item_12={data.item_12} />
        <EnrollmentBanner item_13={data.item_13} />
      </div>
    </div>
  );
}
