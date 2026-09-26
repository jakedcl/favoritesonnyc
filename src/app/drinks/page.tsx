import type { Metadata } from "next";
import { DashedRule } from "@/components/DashedRule";
import { MenuRow } from "@/components/MenuRow";
import { Sheet } from "@/components/Sheet";
import { WineRow } from "@/components/WineRow";
import { getDrinks } from "@/lib/cms";
import type { Wine } from "@/content/menu";

export const metadata: Metadata = {
  title: "wine & drinks",
  description:
    "Natural wine by the glass and bottle, cocktails at $16, and beer at Favorite Son on Forest Avenue.",
};

function WineBlock({ title, wines }: { title: string; wines: Wine[] }) {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      {wines.length === 0 ? (
        <p className="empty-copy">nothing listed.</p>
      ) : (
        wines.map((wine) => <WineRow key={wine.name} {...wine} />)
      )}
    </section>
  );
}

export default async function DrinksPage() {
  const drinks = await getDrinks();

  return (
    <Sheet title="wine & drinks" kicker="natural wine, cocktails, beer">
      {drinks.empty ? (
        <p className="empty-copy">the list is blank tonight. ask the floor.</p>
      ) : (
        <>
          <p className="price-key">glass / bottle</p>
          <div className="wine-board">
            <div>
              <WineBlock title="sparkling" wines={drinks.sparkling} />
              <WineBlock title="white & orange" wines={drinks.whiteWines} />
            </div>
            <div>
              <WineBlock title="red" wines={drinks.redWines} />
              <WineBlock title="sweet" wines={drinks.sweetWines} />
            </div>
          </div>
          <DashedRule />
          <h2 className="section-title">cocktails — $16</h2>
          <div className="menu-list">
            {drinks.cocktails.length === 0 ? (
              <p className="empty-copy">no cocktails listed.</p>
            ) : (
              drinks.cocktails.map((drink) => (
                <MenuRow key={drink.name} {...drink} />
              ))
            )}
          </div>
          <DashedRule />
          <h2 className="section-title">beers</h2>
          <div className="menu-list">
            {drinks.beers.length === 0 ? (
              <p className="empty-copy">no beers listed.</p>
            ) : (
              drinks.beers.map((beer) => (
                <MenuRow
                  key={beer.name}
                  name={beer.name}
                  detail={beer.detail || undefined}
                  price={beer.price}
                  status={beer.status}
                />
              ))
            )}
          </div>
        </>
      )}
    </Sheet>
  );
}
