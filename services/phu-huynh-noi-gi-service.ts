import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Stat {
  icon: string;
  text_1: string;
  text_2: string;
}

interface Testimonial {
  image: string;
  name: string;
  role: string;
  location: string;
  star: number;
  comment: string;
  tag: string;
}

interface Student {
  image: string;
  name: string;
  description: string;
  tag: string;
  achievement: string;
}

export interface PhuHuynhNoiGiData {
  item_1: string;
  item_2: {
    text_1: string;
    text_2: string;
  };
  item_3: {
    text_1: string;
    text_2: string;
  };
  item_4: string;
  item_5: {
    stats: Stat[];
  };
  item_6: {
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
  item_7: {
    title: string;
    description: string;
    students: Student[];
  };
  item_8: {
    image: string;
    text_1: string;
    text_2: string;
  };
}

const SLUG = "phu-huynh-noi-gi";

export const PhuHuynhNoiGiService = {
  async getData(): Promise<PhuHuynhNoiGiData | null> {
    const data = await getACFDataBySlug<PhuHuynhNoiGiData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_5: {
        ...data.item_5,
        stats: Object.values(data.item_5.stats || {}),
      },
      item_6: {
        ...data.item_6,
        testimonials: Object.values(data.item_6.testimonials || {}),
      },
      item_7: {
        ...data.item_7,
        students: Object.values(data.item_7.students || {}),
      },
    };
  },
};
