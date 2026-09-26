import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons/Image";

export const photo = defineType({
  name: "photo",
  title: "Homepage photo",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      description: "Click the image to crop if needed.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Label under the photo",
      type: "string",
      description: "Short. Example: signature",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Describe the photo",
      type: "string",
      description: "For people who can’t see the image. Example: sausage and onion pie in the box.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Sort order",
      type: "number",
      description: "Lower number = earlier in the photo strip.",
      initialValue: 0,
      validation: (rule) => rule.required().integer(),
    }),
  ],
  orderings: [
    {
      title: "Strip order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "caption", media: "image" },
  },
});
