"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

import FiltersSheet from "@/components/filtersSheet";
import Post from "@/components/post";
import { Input } from "@/components/ui/input";
import Category from "@/components/category";

import { useWindowScroll } from "@mantine/hooks";

import TreeView from "./TreeView";

import { postsColumns } from "@/components/posts-table/columns";
import { categoriesColumns } from "@/components/categories-table/columns";
import { PostsTable } from "@/components/posts-table/posts-table";
import { CategoriesTable } from "@/components/categories-table/categories-table";

import SectionTitle from "@/components/section-title";
import {
  useQueryState,
  parseAsBoolean,
  parseAsArrayOf,
  parseAsString,
  parseAsInteger,
} from "next-usequerystate";

import supabase from "@/lib/supabase";

import type { Postd, Categoryd } from "@/lib/types";
import { env } from "process";

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [treeItems, setItems] = useState([]);

  // const { data: categories } = await supabase.from('categoryd').select().is("categoryId", null);
  const [q, setQ] = useQueryState("name");
  const [category, setCategory] = useQueryState("category", parseAsInteger);
  const [style, setStyle] = useQueryState("style", parseAsString);

  const [showPosts, setShowPosts] = useQueryState("showPosts", parseAsBoolean);
  const [showCategories, setShowCategories] = useQueryState(
    "showCategories",
    parseAsBoolean
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_URL + "/api/categories"
      ); // Replace '/api/data' with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setCategories(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/posts"); // Replace '/api/data' with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setPosts(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [scroll] = useWindowScroll();

  let filteredCategories: Categoryd[] = [];

  if (category) {
    filteredCategories = (categories || []).filter(
      (cat: Categoryd) =>
        cat.name?.toLowerCase().includes(q?.toLowerCase() || "") &&
        cat.categoryId == category
    );
  }

  let filteredPosts = posts;
  if (category) {
    filteredPosts = posts.filter(
      (pos: Postd) =>
        pos.name?.toLowerCase().includes(q?.toLowerCase() || "") &&
        pos.categoryId == category
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // @ts-ignore
    setItems(generateCategoryTree(posts || [], categories || []));
  }, [categories, posts]);

  return (
    <>
      {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(filteredItems, null, 2)}</pre> */}
      <div className="flex px-6 md:px-12 justify-center">
        <div className="max-w-7xl pt-12 pb-8 w-full flex items-baseline gap-4">
          <SectionTitle>Results</SectionTitle>
          <p className="text-sm whitespace-nowrap">
            ({filteredCategories.length} categories, {filteredPosts.length}{" "}
            posts)
          </p>
        </div>
      </div>
      <div
        className={`flex justify-center sticky top-20 pb-4 z-50 px-6 md:px-12 ${
          scroll.y > 150 && "bg-blue-700"
        }`}
      >
        <div
          className={`flex w-full justify-between transition-all gap-4 ${
            scroll.y > 150 ? "max-w-8xl" : "max-w-7xl"
          }`}
        >
          <div className="flex flex-1 items-end gap-8">
            <Input
              className="max-w-sm"
              placeholder="Filter by name..."
              value={q || ""}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <FiltersSheet />
        </div>
      </div>
      <main className="px-6 md:px-12 flex justify-center min-h-screen">
        <div className="flex flex-col gap-8 py-24 pt-0 max-w-7xl w-full">
          {style === "table" ? (
            <>
              <CategoriesTable
                // @ts-ignore
                columns={categoriesColumns}
                data={filteredCategories}
              />
              <PostsTable columns={postsColumns} data={filteredPosts} />
            </>
          ) : style === "tree" ? (
            <TreeView data={treeItems} />
          ) : (
            <>
              <div className="grid gap-8">
                {/* <p className="text-3xl font-semibold">Categories</p> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCategories.map((category, x) => (
                    <Category key={x} category={category} />
                  ))}
                </div>
              </div>

              <div className="grid gap-8">
                {/* <p className="text-3xl font-semibold">Posts</p> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {filteredPosts.map((post: any, x: number) => (
                    <Post key={x} post={post} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );

  function generateCategoryTree(posts: Postd[], categories: Categoryd[]) {
    const items = (categories || []).map((category) => ({
      id: category.id,
      parent_id: category.categoryId ?? null,
      name: category.name,
      link: null,
    }));

    (posts || []).forEach((post) => {
      items.push({
        id: -post.id,
        parent_id: post.categoryId,
        name: post.name,
        // @ts-ignore
        link: post.link,
      });
    });

    return items;
  }
}
