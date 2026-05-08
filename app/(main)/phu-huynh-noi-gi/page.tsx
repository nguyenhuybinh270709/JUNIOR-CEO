import {
  BottomBanner,
  Hero,
  OutStandingStudents,
} from "@/components/phu-huynh-noi-gi";
import TestimonialSection from "@/components/phu-huynh-noi-gi/Testimonial";
import { PhuHuynhNoiGiService } from "@/services/phu-huynh-noi-gi-service";

export default async function PhuHuynhNoiGi() {
  const data = await PhuHuynhNoiGiService.getData();
  if (!data) return null;

  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero
        item_1={data.item_1}
        item_2={data.item_2}
        item_3={data.item_3}
        item_4={data.item_4}
        item_5={data.item_5}
      />
      <div className="px-8 space-y-8">
        <TestimonialSection item_6={data.item_6} />
      </div>
      <div className="px-3 lg:px-6">
        <OutStandingStudents item_7={data.item_7} />
      </div>
      <div className="px-8">
        <BottomBanner item_8={data.item_8} />
      </div>
    </div>
  );
}
