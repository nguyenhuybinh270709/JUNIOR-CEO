import {
  BottomBanner,
  CurriculumTable,
  FeatureBar,
  Hero,
  Roadmap,
  SevenModule,
} from "@/components/chuong-trinh";
import { ChuongTrinhService } from "@/services/chuong-trinh-service";

export default async function ChuongTrinh() {
  const data = await ChuongTrinhService.getData();
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
        <FeatureBar item_7={data.item_7} />
        <SevenModule item_8={data.item_8} />
        <Roadmap item_9={data.item_9} />
        <CurriculumTable item_10={data.item_10} item_11={data.item_11} />
        <BottomBanner item_12={data.item_12} />
      </div>
    </div>
  );
}
