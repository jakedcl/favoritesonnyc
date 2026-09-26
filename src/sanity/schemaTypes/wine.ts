import { defineField, defineType } from "sanity";
import { BottleIcon } from "@sanity/icons/Bottle";

export const wine = defineType({
  name: "wine",
  title: "Wine",
  type: "document",
  icon: BottleIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "meta",
      title: "Vintage / region / grapes",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "note",
      title: "Tasting note",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "glass",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "bottle",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "section",
      type: "string",
      options: {
        list: [
          { title: "Sparkling", value: "sparkling" },
          { title: "White & orange", value: "white" },
          { title: "Red", value: "red" },
          { title: "Sweet", value: "sweet" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "On the list", value: "on" },
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
      title: "List order",
      name: "orderAsc",
      by: [
        { field: "section", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "name", meta: "meta", status: "status" },
    prepare({ title, meta, status }) {
      return {
        title,
        subtitle: status === "off" ? "off tonight" : meta,
      };
    },
  },
});
