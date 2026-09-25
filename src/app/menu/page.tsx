import type { Metadata } from "next";
import { DashedRule } from "@/components/DashedRule";
import { MenuRow } from "@/components/MenuRow";
import { Sheet } from "@/components/Sheet";
import {
  allergyNote,
  desserts,
  redPies,
  smallPlates,
  whitePies,
} from "@/content/menu";
import { restaurant } from "@/content/site";

export const metadata: Metadata = {
  title: "menu",
  description:
    "Small plates, 14-inch sourdough pies, and dolci at Favorite Son. Whole pies, six slices. Dine-in on Forest Avenue.",
};

export default function MenuPage() {
  return (
    <Sheet title="menu">
      <p className="section-note">{restaurant.notice.title}. {restaurant.notice.body}</p>
      <h2 className="section-title">small plates</h2>
      <div className="menu-list">
        {smallPlates.map((dish) => (
          <MenuRow key={dish.name} {...dish} />
        ))}
      </div>
      <DashedRule />
      <h2 className="section-title">sourdough pizza – 14 inch – 6 slices</h2>
      <div className="pie-columns">
        <section>
          <h3 className="column-label">red</h3>
          {redPies.map((dish) => (
            <MenuRow key={dish.name} {...dish} />
          ))}
        </section>
        <section>
          <h3 className="column-label">white</h3>
          {whitePies.map((dish) => (
            <MenuRow key={dish.name} {...dish} />
          ))}
        </section>
      </div>
      <DashedRule />
      <h2 className="section-title">dolci — all $9</h2>
      <div className="menu-list">
        {desserts.map((dish) => (
          <MenuRow key={dish.name} {...dish} />
        ))}
      </div>
      <p className="allergy">*{allergyNote}</p>
    </Sheet>
  );
}
