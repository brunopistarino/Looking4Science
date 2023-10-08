import Categories from "@/components/categories";
import Communities from "@/components/communities";
import Contribute from "@/components/contribute";
import Hero from "@/components/hero";
import Organizations from "@/components/oranizations";
import Trending from "@/components/trending";

export default function Page() {
  return (
    <>
      <Hero />
      <Organizations />
      <Trending />
      <Communities />
      <Categories />
      <Contribute />
    </>
  );
}
