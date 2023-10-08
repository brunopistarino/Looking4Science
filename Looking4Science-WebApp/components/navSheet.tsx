import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  useQueryState,
  parseAsBoolean,
  parseAsArrayOf,
  parseAsString,
} from "next-usequerystate";
import { Button } from "@/components/ui/button";
import {
  AlignJustify,
  CornerDownRight,
  LayoutGrid,
  SlidersHorizontal,
  Menu,
  Heart,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import SearchSheet from "@/components/searchSheet";

export default function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Looking4Science</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-8 gap-4">
          <SheetClose asChild>
            <Link href="/#organizations">
              <Button variant="link" className=" text-lg">
                Organizations
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/#categories">
              <Button variant="link" className=" text-lg">
                Categories
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/search">
              <Button variant="link" className=" text-lg">
                Posts
              </Button>
            </Link>
          </SheetClose>
          <div className="mx-auto mt-8 flex gap-8">
            <SheetClose asChild>
              <SearchSheet />
            </SheetClose>
            <SheetClose asChild>
              <Link href="/search?favorites=true">
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:text-blue-700"
                >
                  <Heart />
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
