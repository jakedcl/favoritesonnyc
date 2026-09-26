import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { schemaTemplates } from "./src/sanity/schemaTypes/templates";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "favoriteson",
  title: "favorite son",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      title: "Edit the website",
      structure,
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev.filter(
        (template) => !["dish", "wine", "pour"].includes(template.schemaType),
      ),
      ...schemaTemplates,
    ],
  },
});
