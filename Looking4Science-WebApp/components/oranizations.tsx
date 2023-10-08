import Link from "next/link";

import LandingSection from "@/components/landing-section";
import SectionTitle from "@/components/section-title";

export default function Organizations() {
  const organizations = [
    {
      name: "NASA",
      image: "/logos/NASA.png",
    },
    {
      name: "NOAA",
      image: "/logos/NOAA.png",
    },
    {
      name: "USGS",
      image: "/logos/USGS.png",
    },
    {
      name: "NIH",
      image: "/logos/NIH.png",
    },
    {
      name: "USDA",
      image: "/logos/USDA.png",
    },
    {
      name: "EPA",
      image: "/logos/EPA.png",
    },
  ];

  return (
    // <div className="flex h-20 my-12 mt-24 mx-12 justify-around">
    <LandingSection>
      <SectionTitle>Organizations</SectionTitle>
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-8 scroll-my-60"
        id="organizations"
      >
        {organizations.map((organization, x) => (
          <Link
            key={x}
            href={`/search?organization=${organization.name}`}
            className="bg-gray-200 h-36 sm:h-52 flex justify-center items-center group"
          >
            <img
              src={organization.image}
              className="w-1/2 grayscale group-hover:grayscale-0 transition-all"
              alt="a"
            />
          </Link>
        ))}
      </div>
    </LandingSection>
  );
}
