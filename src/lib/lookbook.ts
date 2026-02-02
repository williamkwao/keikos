import items from "@/data/months.json";

export type LookbookItem = {
  pageIndex: number;
  title: string | null;
  body: string;
  image: string;
  type: "cover" | "month" | "extra";
};

export const lookbookItems = items as LookbookItem[];

export const heroItem = lookbookItems.find((item) => item.type === "cover") ?? lookbookItems[0];

export const storyItems = lookbookItems.filter((item) => item.type === "extra");

export const featureItems = storyItems.slice(0, 3);
