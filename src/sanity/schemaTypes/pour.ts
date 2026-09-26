import { defineField, defineType } from "sanity";
import { IceCreamIcon } from "@sanity/icons/IceCream";

export const pour = defineType({
  name: "pour",
  title: "Cocktail or beer",
  type: "document",
  icon: IceCreamIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      type: "string",
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
          { title: "Cocktails", value: "cocktails" },
          { title: "Beer", value: "beers" },
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
