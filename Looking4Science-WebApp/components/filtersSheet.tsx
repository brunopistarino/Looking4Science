import {
  Sheet,
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
  TextQuote,
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

export default function FiltersSheet() {
  const organizations = ["NASA", "NOAA", "USGS", "NIH", "USDA", "EPA"];
  const sortings = ["Name", "Date", "Likes", "Comments", "Shares", "Views"];

  const [style, setStyle] = useQueryState("style", parseAsString);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-4" variant={"outline"}>
          <SlidersHorizontal />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 mt-4">
          <div className="grid gap-1">
            <p>Disposición</p>
            <Tabs
              defaultValue={style || "grid"}
              onValueChange={(e) => setStyle(e)}
            >
              <TabsList className="w-full">
                <TabsTrigger value="grid" className="w-full gap-2">
                  <LayoutGrid size={16} />
                  Grid
                </TabsTrigger>
                <TabsTrigger value="table" className="w-full gap-2">
                  <AlignJustify size={16} />
                  Table
                </TabsTrigger>
                <TabsTrigger value="tree" className="w-full gap-2">
                  <TextQuote size={16} />
                  Tree
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-1">
            <p>Organization</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All organizations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All organizations</SelectItem>
                {organizations.map((organization, x) => (
                  <SelectItem key={x} value={organization}>
                    {organization}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1">
            <p>Sort by</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Name" />
              </SelectTrigger>
              <SelectContent>
                {sortings.map((organization, x) => (
                  <SelectItem key={x} value={organization}>
                    {organization}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Tabs defaultValue="descending">
              <TabsList className="w-full">
                <TabsTrigger value="ascending" className="w-full">
                  Ascending
                </TabsTrigger>
                <TabsTrigger value="descending" className="w-full">
                  Descending
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
