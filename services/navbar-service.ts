import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface NavbarLink {
  label: string;
  endpoint: string;
  sort_order: number;
}

export interface NavbarButtons {
  label: string;
  endpoint: string;
}

interface NavbarMiddleRaw {
  [key: string]: NavbarLink;
}

interface NavbarRightRaw {
  [key: string]: NavbarButtons;
}

interface NavbarRawResponse {
  navbar_left: {
    image: string;
    endpoint: string;
  };
  navbar_middle: NavbarMiddleRaw;
  navbar_right: NavbarRightRaw;
}

export interface NavbarData {
  navbar_left: {
    image: string;
    endpoint: string;
  };
  navbar_middle: NavbarLink[];
  navbar_right: NavbarButtons[];
}

export const NavbarService = {
  getNavbarConfig: async (): Promise<NavbarData | null> => {
    const data = await getACFDataBySlug<NavbarRawResponse>("navbar");

    if (!data) return null;

    const navbarLinks: NavbarLink[] = data.navbar_middle
      ? Object.values(data.navbar_middle)
      : [];

    const navbarButtons: NavbarButtons[] = data.navbar_right
      ? Object.values(data.navbar_right)
      : [];

    const sortedNavbarLinks = navbarLinks.sort((a, b) => {
      return (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0);
    });

    return {
      navbar_left: data.navbar_left,
      navbar_middle: sortedNavbarLinks,
      navbar_right: navbarButtons,
    };
  },
};
