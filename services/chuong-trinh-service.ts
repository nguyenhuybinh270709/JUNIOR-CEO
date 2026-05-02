import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface ProgramHighlight {
  icon: string;
  text_1: string;
  text_2: string;
}

interface Module {
  icon: string;
  text: string;
}

interface Roadmap {
  icon: string;
  title: string;
  description: string;
  content: string;
}

interface ModuleTable {
  title: string;
  content: string;
  result: string;
}

interface ExclusiveHighlight {
  icon: string;
  title: string;
  description: string;
}

interface Item12RightSideStat {
  credential: string;
  text: string;
}

export interface ChuongTrinhData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: string;
  item_5: ProgramHighlight[];
  item_6: string;
  item_7: ProgramHighlight[];
  item_8: Module[];
  item_9: Roadmap[];
  item_10: ModuleTable[];
  item_11: ExclusiveHighlight[];
  item_12: {
    left_side: {
      background_image: string;
      title_1: string;
      title_2: string;
      text: string;
    };
    right_side: Item12RightSideStat[];
  };
}

const SLUG = "chuong-trinh";

export const ChuongTrinhService = {
  async getData(): Promise<ChuongTrinhData | null> {
    const data = await getACFDataBySlug<ChuongTrinhData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_5: Object.values(data.item_5 || {}),
      item_7: Object.values(data.item_7 || {}),
      item_8: Object.values(data.item_8 || {}),
      item_9: Object.values(data.item_9 || {}),
      item_10: Object.values(data.item_10 || {}),
      item_11: Object.values(data.item_11 || {}),
      item_12: {
        ...data.item_12,
        right_side: Object.values(data.item_12?.right_side || {}),
      },
    };
  },
};
