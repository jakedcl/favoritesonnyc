import { defineField, defineType } from "sanity";
import { LemonIcon } from "@sanity/icons/Lemon";

export const dish = defineType({
  name: "dish",
  title: "Dish",
  type: "document",
  icon: LemonIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      type: "string",
      description: "Ingredients or a short note under the name.",
    }),
    defineField({
      name: "price",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "section",
      type: "string",
      options: {
        list: [
          { title: "Small plates", value: "smallPlates" },
          { title: "Red pies", value: "redPies" },
          { title: "White pies", value: "whitePies" },
          { title: "Dolci", value: "desserts" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nuts",
      title: "Contains nuts",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "On the menu", value: "on" },
          { title: "Off tonight", value: "off" },
        ],
        layout: "radio",
      },
      initialValue: "on",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Lower numbers show first.",
      initialValue: 0,
      validation: (rule) => rule.required().integer(),
    }),
  ],
  orderings: [
    {
      title: "Menu order",
      name: "orderAsc",
      by: [
        { field: "section", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "name", detail: "detail", section: "section", status: "status" },
    prepare({ title, detail, section, status }) {
      return {
        title,
        subtitle: [section, status === "off" ? "off tonight" : detail]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});
