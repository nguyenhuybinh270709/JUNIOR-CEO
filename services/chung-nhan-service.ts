import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Module {
  icon: string;
  title: string;
}

interface Recognition {
  icon: string;
  title: string;
  description: string;
}

interface Student {
  image: string;
  name: string;
  description: string;
  achievements: string;
}

export interface ChungNhanData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: string;
  item_5: {
    benefit: Benefit[];
  };
  item_6: {
    desktop_image: string;
    mobile_image: string;
  };
  item_7: {
    title: string;
    values: Value[];
  };
  item_8: {
    title: string;
    description: string;
    modules: Module[];
  };
  item_9: {
    title: string;
    description: string;
    image: string;
  };
  item_10: {
    title: string;
    description: string;
    recognitions: Recognition[];
  };
  item_11: {
    title: string;
    students: Student[];
  };
  item_12: {
    text_1: string;
    text_2: string;
    under_register_button_text: string;
  };
}

const SLUG = "chung-nhan";

export const ChungNhanService = {
  async getData(): Promise<ChungNhanData | null> {
    const data = await getACFDataBySlug<ChungNhanData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_5: {
        ...data.item_5,
        benefit: Object.values(data.item_5?.benefit || {}),
      },
      item_7: {
        ...data.item_7,
        values: Object.values(data.item_7?.values || {}),
      },
      item_8: {
        ...data.item_8,
        modules: Object.values(data.item_8?.modules || {}),
      },
      item_10: {
        ...data.item_10,
        recognitions: Object.values(data.item_10?.recognitions || {}),
      },
      item_11: {
        ...data.item_11,
        students: Object.values(data.item_11?.students || {}),
      },
    };
  },
};
