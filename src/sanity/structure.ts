import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Favorite Son")
    .items([
      S.listItem()
        .title("Menu")
        .child(
          S.list()
            .title("Menu")
            .items([
              S.listItem()
                .title("Small plates")
                .schemaType("dish")
                .child(
                  S.documentTypeList("dish")
                    .title("Small plates")
                    .filter('_type == "dish" && section == "smallPlates"'),
                ),
              S.listItem()
                .title("Red pies")
                .schemaType("dish")
                .child(
                  S.documentTypeList("dish")
                    .title("Red pies")
                    .filter('_type == "dish" && section == "redPies"'),
                ),
              S.listItem()
                .title("White pies")
                .schemaType("dish")
                .child(
                  S.documentTypeList("dish")
                    .title("White pies")
                    .filter('_type == "dish" && section == "whitePies"'),
                ),
              S.listItem()
                .title("Dolci")
                .schemaType("dish")
                .child(
                  S.documentTypeList("dish")
                    .title("Dolci")
                    .filter('_type == "dish" && section == "desserts"'),
                ),
              S.divider(),
              S.documentTypeListItem("dish").title("All dishes"),
            ]),
        ),
      S.listItem()
        .title("Wine & drinks")
        .child(
          S.list()
            .title("Wine & drinks")
            .items([
              S.listItem()
                .title("Sparkling")
                .schemaType("wine")
                .child(
                  S.documentTypeList("wine")
                    .title("Sparkling")
                    .filter('_type == "wine" && section == "sparkling"'),
                ),
              S.listItem()
                .title("White & orange")
                .schemaType("wine")
                .child(
                  S.documentTypeList("wine")
                    .title("White & orange")
                    .filter('_type == "wine" && section == "white"'),
                ),
              S.listItem()
                .title("Red")
                .schemaType("wine")
                .child(
                  S.documentTypeList("wine")
                    .title("Red")
                    .filter('_type == "wine" && section == "red"'),
                ),
              S.listItem()
                .title("Sweet")
                .schemaType("wine")
                .child(
                  S.documentTypeList("wine")
                    .title("Sweet")
                    .filter('_type == "wine" && section == "sweet"'),
                ),
              S.divider(),
              S.listItem()
                .title("Cocktails")
                .schemaType("pour")
                .child(
                  S.documentTypeList("pour")
                    .title("Cocktails")
                    .filter('_type == "pour" && section == "cocktails"'),
                ),
              S.listItem()
                .title("Beer")
                .schemaType("pour")
                .child(
                  S.documentTypeList("pour")
                    .title("Beer")
                    .filter('_type == "pour" && section == "beers"'),
                ),
              S.divider(),
              S.documentTypeListItem("wine").title("All wines"),
              S.documentTypeListItem("pour").title("All cocktails & beer"),
            ]),
        ),
      S.documentTypeListItem("photo").title("Photos"),
    ]);
