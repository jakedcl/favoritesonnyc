import type { Metadata } from "next";
import Image from "next/image";
import { Sheet } from "@/components/Sheet";
import { restaurant } from "@/content/site";

export const metadata: Metadata = {
  title: "our story",
  description:
    "Favorite Son is the Ippolito family’s sourdough pizzeria and wine bar on Forest Avenue, Staten Island.",
};

export default function StoryPage() {
  return (
    <Sheet title="our story">
      <figure className="story-photo">
        <Image
          src="/photos/kitchen.jpg"
          alt="Danny Ippolito and Graceanne Belmonte-Ippolito in the kitchen."
          fill
          sizes="(max-width: 800px) 100vw, 640px"
          priority
        />
      </figure>
      <div className="prose">
        <p>
          Favorite Son is Danny Ippolito and Graceanne Belmonte-Ippolito’s
          pizzeria on Forest Avenue. Danny is the owner, the pizzaiolo, and the
          sommelier. The name is for his mother, Maryann, from her only son.
        </p>
        <p>
          The pies are naturally leavened, New York style, baked in an electric
          Moretti Forni. The wine is natural. Danny spent about six years on the
          dough before the doors opened in September 2026, after kitchens at
          Carbone and Locanda Verde, and after Bin 5, the wine bar he had in
          Rosebank.
        </p>
        <p>
          <a href={restaurant.press}>Click here for the SILive story.</a>
        </p>
      </div>
    </Sheet>
  );
}
