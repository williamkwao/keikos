import items from "@/data/months.json";

export type LookbookItem = {
  pageIndex: number;
  title: string | null;
  body: string;
  image: string;
  type: "cover" | "month" | "extra";
};

const allItems = items as LookbookItem[];

// Remove pure calendar grid pages from the gallery and use the manually cropped images.
export const lookbookItems = allItems
  .filter((item) => item.type !== "month")
  .map((item) => ({
    ...item,
    image: item.image.replace("/calendar/", "/gallery/"),
  }));

export const heroItem = lookbookItems.find((item) => item.type === "cover") ?? lookbookItems[0];

export const storyItems = lookbookItems.filter((item) => item.type === "extra");

export const featureItems = storyItems.slice(0, 3);
