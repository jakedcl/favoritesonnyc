import { unavailable } from "@/content/site";
import type { Dish } from "@/content/menu";

export function MenuRow({ name, detail, price, nuts }: Dish) {
  const off = unavailable.includes(name);

  return (
    <div className="menu-row">
      <div>
        <p className="menu-name">
          {name}
          {nuts ? <span aria-label="contains nuts">*</span> : null}
        </p>
        {detail ? <p className="menu-detail">{detail}</p> : null}
      </div>
      <p className="menu-price">{off ? "off tonight" : price}</p>
    </div>
  );
}
