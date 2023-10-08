"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useWindowScroll, useViewportSize } from "@mantine/hooks";

import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchSheet from "@/components/searchSheet";
import NavSheet from "@/components/navSheet";

export default function NavBar() {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const current = pathname.split("/")[1];
  const [isTransparent, setIsTransparent] = useState<Boolean>();

  const [scroll] = useWindowScroll();
  const { height } = useViewportSize();

  useEffect(() => {
    if (current != "") {
      setIsTransparent(false);
    } else {
      //   if (scroll.y > height / 2) {
      if (scroll.y > 10) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    }
  }, [current, scroll, height]);

  return (
    <nav
      className={`text-3xl font-bold text-white flex justify-center px-6 md:px-12 h-20 items-center sticky top-0 z-50 transition-colors ${
        isTransparent ? "bg-transparent" : "bg-blue-700"
      }`}
    >
      <div className="max-w-8xl w-full flex justify-between">
        <a href="/" className="hidden sm:block">
          Looking4Science
        </a>
        <a href="/" className="sm:hidden block">
          L4S
        </a>
        <div className="lg:flex items-center gap-2 hidden">
          <Link href="/#organizations">
            <Button variant="link" className="text-white text-lg">
              Organizations
            </Button>
          </Link>
          <Link href="/#categories">
            <Button variant="link" className="text-white text-lg">
              Categories
            </Button>
          </Link>
          <Link href="/search">
            <Button variant="link" className="text-white text-lg">
              Posts
            </Button>
          </Link>
          <SearchSheet />
          <Link href="/search?favorites=true">
            <Button size="icon" variant="ghost" className="hover:text-blue-700">
              <Heart />
            </Button>
          </Link>
        </div>
        <div className="lg:hidden flex items-center gap-4 ">
          <NavSheet />
        </div>
      </div>
    </nav>
  );
}
