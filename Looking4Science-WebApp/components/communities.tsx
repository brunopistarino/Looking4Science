import LandingSection from "@/components/landing-section";
import SectionTitle from "@/components/section-title";
import Link from "next/link";

export default function Communities() {
  const communities = [
    {
      name: "Sateliters",
      members: 17509,
      posts: 56,
      image:
        "https://www.nasa.gov/wp-content/uploads/2018/07/174116main_2006_01777_highres.jpg?resize=2000,1600",
    },
    {
      name: "Rafaelinos",
      members: 7324,
      posts: 10,
      image:
        "https://www.earthdata.nasa.gov/sites/default/files/2021-10/Land_AgDP.jpg",
    },
    {
      name: "Space Researchers",
      members: 2039,
      posts: 10,
      image:
        "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg",
    },
    {
      name: "CONEAU",
      members: 1430,
      posts: 10,
      image:
        "https://www.earthdata.nasa.gov/s3fs-public/2022-05/laser-crops-th.jpg",
    },
  ];

  return (
    <LandingSection>
      <div className="flex justify-between items-baseline">
        <SectionTitle>Join a community</SectionTitle>
      </div>
      <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 hide-sb snap-x snap-mandatory">
        {communities.map((community, x) => (
          <Link
            key={x}
            href={"/community"}
            className="flex-shrink-0 min-w-0 flex gap-4 items-center border p-4 snap-start"
            style={{ flex: "0 0 auto" }}
          >
            <img
              src={community.image}
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">{community.name}</p>
              <p className="text-sm text-slate-600">1,000 members · 10 posts</p>
            </div>
          </Link>
        ))}
      </div>
    </LandingSection>
  );
}
