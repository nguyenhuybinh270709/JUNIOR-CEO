import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Feature {
  icon: string;
  title: string;
}

interface Content {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface Examiner {
  image: string;
  title: string;
  name: string;
  role: string;
}

interface Prize {
  icon: string;
  rank: string;
  value: string;
  benefit: string;
}

export interface PitchingDayData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: string;
  item_5: {
    features: Feature[];
  };
  item_6: {
    text: string;
  };
  item_7: string;
  item_8: {
    title: string;
    description: string;
    content: Content[];
  };
  item_9: {
    title: string;
    steps: Step[];
  };
  item_10: {
    title: string;
    sub_title: string;
    examiners: Examiner[];
  };
  item_11: {
    title: string;
    sub_title: string;
    prizes: Prize[];
    image: string;
  };
  item_12: {
    title: string;
    images: string[];
  };
  item_13: {
    text_1: string;
    text_2: string;
  };
}
const SLUG = "pitching-day";

export const PitchingDayService = {
  async getData(): Promise<PitchingDayData | null> {
    const data = await getACFDataBySlug<PitchingDayData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_5: {
        ...data.item_5,
        features: Object.values(data.item_5.features || {}),
      },
      item_8: {
        ...data.item_8,
        content: Object.values(data.item_8.content || {}),
      },
      item_9: {
        ...data.item_9,
        steps: Object.values(data.item_9.steps || {}),
      },
      item_10: {
        ...data.item_10,
        examiners: Object.values(data.item_10.examiners || {}),
      },
      item_11: {
        ...data.item_11,
        prizes: Object.values(data.item_11.prizes || {}),
      },
      item_12: {
        ...data.item_12,
        images: Object.values(data.item_12.images || {}),
      },
    };
  },
};
