interface WordPressPage<T> {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: T;
}

const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;

export async function getACFDataBySlug<T>(slug: string): Promise<T | null> {
  if (!REST_URL) {
    console.error("Error: NEXT_PUBLIC_WP_REST_URL is missing in .env");
    return null;
  }

  try {
    const res = await fetch(`${REST_URL}/pages?slug=${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`Error occurred while fetching page: ${slug}`);

    const data: WordPressPage<T>[] = await res.json();

    if (data.length === 0) return null;

    return data[0].acf;
  } catch (error) {
    console.error(`WordPress API Error (${slug}):`, error);
    return null;
  }
}
