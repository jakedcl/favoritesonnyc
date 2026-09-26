import type { Template } from "sanity";

export const schemaTemplates: Template[] = [
  {
    id: "dish-smallPlates",
    title: "Small plate",
    schemaType: "dish",
    value: { section: "smallPlates", status: "on", nuts: false, order: 0 },
  },
  {
    id: "dish-redPies",
    title: "Red pie",
    schemaType: "dish",
    value: { section: "redPies", status: "on", nuts: false, order: 0 },
  },
  {
    id: "dish-whitePies",
    title: "White pie",
    schemaType: "dish",
    value: { section: "whitePies", status: "on", nuts: false, order: 0 },
  },
  {
    id: "dish-desserts",
    title: "Dolci",
    schemaType: "dish",
    value: { section: "desserts", status: "on", nuts: false, order: 0 },
  },
  {
    id: "wine-sparkling",
    title: "Sparkling wine",
    schemaType: "wine",
    value: { section: "sparkling", status: "on", order: 0 },
  },
  {
    id: "wine-white",
    title: "White or orange wine",
    schemaType: "wine",
    value: { section: "white", status: "on", order: 0 },
  },
  {
    id: "wine-red",
    title: "Red wine",
    schemaType: "wine",
    value: { section: "red", status: "on", order: 0 },
  },
  {
    id: "wine-sweet",
    title: "Sweet wine",
    schemaType: "wine",
    value: { section: "sweet", status: "on", order: 0 },
  },
  {
    id: "pour-cocktails",
    title: "Cocktail",
    schemaType: "pour",
    value: { section: "cocktails", status: "on", order: 0 },
  },
  {
    id: "pour-beers",
    title: "Beer",
    schemaType: "pour",
    value: { section: "beers", status: "on", order: 0 },
  },
];
