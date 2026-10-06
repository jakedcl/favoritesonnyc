import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PieStrip } from "@/components/PieStrip";
import { SignStrips } from "@/components/SignStrips";
import { restaurant } from "@/content/site";
import { getPhotos } from "@/lib/cms";

export default async function Home() {
  const photos = await getPhotos();

  return (
    <main>
      <SignStrips />
      <Nav />
      <div className="home-lead">
        <p>whole pies, 14 inches, cut into six.</p>
        <p className="home-notice">
          <span>{`${restaurant.notice.title.split(",")[0]},`}</span>{" "}
          <span>{`${restaurant.notice.title.split(",").slice(1).join(",").trim()}.`}</span>
        </p>
        <p className="home-actions">
          <Link href="/menu">see the menu</Link>
          <a href={restaurant.maps.google}>directions</a>
          <a href={`tel:${restaurant.phoneTel}`}>call</a>
        </p>
      </div>
      <PieStrip photos={photos} />
      <div className="home-foot">
        <Footer />
      </div>
    </main>
  );
}
