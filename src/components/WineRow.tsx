import type { Wine } from "@/content/menu";

export function WineRow({ name, meta, note, glass, bottle }: Wine) {
  return (
    <div className="menu-row wine-row">
      <div>
        <p className="menu-name">{name}</p>
        <p className="menu-meta">{meta}</p>
        <p className="menu-note">{note}</p>
      </div>
      <p className="menu-price">
        {glass}
        <span className="price-split"> / </span>
        {bottle}
      </p>
    </div>
  );
}
