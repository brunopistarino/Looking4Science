import Post from "@/components/post";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import LandingSection from "@/components/landing-section";
import SectionTitle from "@/components/section-title";
import supabase from "@/lib/supabase";

export default async function Trending() {
  const { data: posts } = await supabase
    .from("postd")
    .select()
    .in("id", [9, 80, 36, 75]);

  const papers = [
    {
      name: "NASA Invites Media to Upcoming SpaceX Resupply Launch to Space Station",
      description:
        "Media accreditation is open through Oct. 18, 2023, for SpaceX’s 29th commercial resupply mission for NASA to the International Space…",
      imageUrl:
        "https://images-assets.nasa.gov/image/iss056e201248/iss056e201248~large.jpg?w=1536&h=1024&fit=crop&crop=faces%2Cfocalpoint",
      link: "https://www.nasa.gov/news-release/nasa-invites-media-to-upcoming-spacex-resupply-launch-to-space-station/",
    },
    {
      name: "NASA Airs Coverage of Space Station Research, Development Conference",
      description:
        "NASA will highlight groundbreaking discoveries, benefits for humanity, and how the agency and its commercial and international partners are maximizing…",
      imageUrl:
        "https://www.nasa.gov/wp-content/uploads/2023/07/51710869257_37958c1b6c_o_1.jpg?resize=300,200",
      link: "https://www.nasa.gov/news-release/nasa-airs-coverage-of-space-station-research-development-conference/",
    },
    {
      name: "NASA to Provide Live Coverage of Space Station Cargo Launch, Docking",
      description:
        "NASA will provide live launch and docking coverage of the Roscosmos Progress 84 cargo spacecraft carrying about three tons of…",
      imageUrl:
        "https://www.nasa.gov/wp-content/uploads/2023/05/iss068e046973large.jpeg?resize=768,431",
      link: "https://www.nasa.gov/news-release/nasa-to-provide-live-coverage-of-space-station-cargo-launch-docking-3/",
    },
    {
      name: "Smithsonian Latino Museum Students to Hear from NASA Station Astronaut",
      description:
        "Frank Rubio, a NASA astronaut aboard the International Space Station, will speak to students associated with the Smithsonian Institution’s National…",
      imageUrl:
        "https://www.nasa.gov/wp-content/uploads/2023/05/iss068e015480.jpeg?resize=300,200",
      link: "https://www.nasa.gov/news-release/smithsonian-latino-museum-students-to-hear-from-nasa-station-astronaut/",
    },
  ];

  if (!(posts && posts[0] && posts[1] && posts[2] && posts[3])) {
    return <p>loading</p>;
  }
  return (
    <LandingSection>
      <SectionTitle>Trending posts</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Post post={posts[0]} />
        <div className="flex flex-col gap-4">
          <Link
            href={posts[1].link || ""}
            target="_blank"
            className="group flex gap-2"
          >
            <div>
              <p className="text-base font-semibold group-hover:underline underline-offset-4">
                {posts[1].name}
              </p>
              <p className="text-sm line-clamp-3">{papers[1].description}</p>
            </div>
            <img
              src={posts[1].imageUrl || ""}
              alt=""
              className="aspect-[4/3] w-1/3 object-cover"
            />
          </Link>
          <Link
            href={posts[2].link || ""}
            target="_blank"
            className="group flex gap-2"
          >
            <div>
              <p className="text-base font-semibold group-hover:underline underline-offset-4">
                {papers[2].name}
              </p>
              <p className="text-sm line-clamp-3">{papers[2].description}</p>
            </div>
            <img
              src={posts[2].imageUrl || ""}
              alt=""
              className="aspect-[4/3] w-1/3 object-cover"
            />
          </Link>
          <Link
            href={posts[3].link || ""}
            target="_blank"
            className="group flex gap-2"
          >
            <div>
              <p className="text-base font-semibold group-hover:underline underline-offset-4">
                {posts[3].name}
              </p>
              <p className="text-sm line-clamp-3">{papers[3].description}</p>
            </div>
            <img
              src={posts[3].imageUrl || ""}
              alt=""
              className="aspect-[4/3] w-1/3 object-cover"
            />
          </Link>
        </div>
      </div>
    </LandingSection>
  );
}
