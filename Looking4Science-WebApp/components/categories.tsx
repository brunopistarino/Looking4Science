import { ArrowRight, Cat } from "lucide-react";
import Link from "next/link";
import Category from "@/components/category";

import LandingSection from "@/components/landing-section";
import SectionTitle from "@/components/section-title";

import supabase from "@/lib/supabase";

export default async function Categories() {
  const { data: categories } = await supabase
    .from("categoryd")
    .select()
    .is("categoryId", null);

  return (
    <LandingSection>
      <SectionTitle>Categories</SectionTitle>
      <div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 scroll-my-60"
        id="categories"
      >
        {categories?.map((category, x) => (
          <Category category={category} key={x} />
        ))}
      </div>
    </LandingSection>
  );
}
