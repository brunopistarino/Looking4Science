import Link from "next/link";
import { Separator } from "./ui/separator";

import supabase from "@/lib/supabase";

export default async function Footer() {
  const { data: categories } = await supabase
    .from("categoryd")
    .select()
    .is("categoryId", null);

  return (
    <footer className=" bg-slate-950 px-8 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex flex-shrink-0 flex-col gap-4">
            <p className="text-2xl font-semibold">Navigation</p>
            <div className="flex flex-col gap-2">
              <a
                href="/#organizations"
                className="text-sm text-slate-200 hover:underline"
              >
                Organizations
              </a>
              <a
                href="/#categories"
                className="text-sm text-slate-200 hover:underline"
              >
                Categories
              </a>
              <a
                href="/search"
                className="text-sm text-slate-200 hover:underline"
              >
                Posts
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:max-w-lg">
            <p className="text-2xl font-semibold">Categorías</p>
            <div className="grid grid-cols-3 gap-2">
              {categories?.map((category) => (
                <Link
                  key={category.id}
                  href={`/search?category=${category.id}`}
                  className="text-sm text-slate-200 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator className="bg-slate-400" />
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Looking4Science
          </p>
          <p className="text-sm md:whitespace-nowrap">
            {" "}
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/brunopistarino/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Bruno Pistarino
            </a>
            , Zoe Bertone, Agustín Duelli and{" "}
            <a
              href="https://www.linkedin.com/in/lucapierini/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Luca Pierini
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
