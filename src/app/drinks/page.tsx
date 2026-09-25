import type { Metadata } from "next";
import { DashedRule } from "@/components/DashedRule";
import { MenuRow } from "@/components/MenuRow";
import { Sheet } from "@/components/Sheet";
import { WineRow } from "@/components/WineRow";
import {
  beers,
  cocktails,
  redWines,
  sparkling,
  sweetWines,
  whiteWines,
  type Wine,
} from "@/content/menu";

export const metadata: Metadata = {
  title: "wine & drinks",
  description:
    "Natural wine by the glass and bottle, cocktails at $16, and beer at Favorite Son on Forest Avenue.",
};

function WineBlock({ title, wines }: { title: string; wines: Wine[] }) {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      {wines.map((wine) => (
        <WineRow key={wine.name} {...wine} />
      ))}
    </section>
  );
}

export default function DrinksPage() {
  return (
    <Sheet title="wine & drinks" kicker="natural wine, cocktails, beer">
      <p className="price-key">glass / bottle</p>
      <div className="wine-board">
        <div>
          <WineBlock title="sparkling" wines={sparkling} />
          <WineBlock title="white & orange" wines={whiteWines} />
        </div>
        <div>
          <WineBlock title="red" wines={redWines} />
          <WineBlock title="sweet" wines={sweetWines} />
        </div>
      </div>
      <DashedRule />
      <h2 className="section-title">cocktails — $16</h2>
      <div className="menu-list">
        {cocktails.map((drink) => (
          <MenuRow key={drink.name} {...drink} />
        ))}
      </div>
      <DashedRule />
      <h2 className="section-title">beers</h2>
      <div className="menu-list">
        {beers.map((beer) => (
          <MenuRow key={beer.name} name={beer.name} detail={beer.detail || undefined} price={beer.price} />
        ))}
      </div>
    </Sheet>
  );
}
