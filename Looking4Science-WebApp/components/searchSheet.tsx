import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";
import Link from "next/link";
import { Categoryd, Postd } from "@/lib/types";

// export default async function SearchSheet() {
export default function SearchSheet() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/categories");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setCategories(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response = await fetch("http://localhost:3000/api/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setPosts(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className="hover:text-blue-700">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-3xl gap-0">
        <Command className="border">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Categoories">
              {categories?.map((category: Categoryd, x) => (
                <CommandItem key={x}>
                  <Link href={`/search?category=${category.id}`}>
                    {category.name}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Posts">
              {posts?.map((post: Postd, x) => (
                <CommandItem key={x}>
                  <Link
                    href={post.link || ""}
                    referrerPolicy="no-referrer"
                    target="_blank"
                  >
                    {post.name}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
