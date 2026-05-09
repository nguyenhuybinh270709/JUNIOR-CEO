import {
  CourseValues,
  EnrollmentBanner,
  FeaturedStudents,
  Hero,
  ProgramOverview,
} from "@/components/chung-nhan";
import { ChungNhanService } from "@/services/chung-nhan-service";

export default async function ChungNhan() {
  const data = await ChungNhanService.getData();
  if (!data) return null;

  return (
    <div className="text-white space-y-4 pt-8 mt-8 mb-10">
      <Hero
        item_1={data.item_1}
        item_2={data.item_2}
        item_3={data.item_3}
        item_4={data.item_4}
        item_5={data.item_5}
        item_6={data.item_6}
      />
      <div className="px-8 space-y-8">
        <CourseValues item_7={data.item_7} />
        <ProgramOverview
          item_8={data.item_8}
          item_9={data.item_9}
          item_10={data.item_10}
        />
        <FeaturedStudents item_11={data.item_11} />
        <EnrollmentBanner item_12={data.item_12} />
      </div>
    </div>
  );
}
