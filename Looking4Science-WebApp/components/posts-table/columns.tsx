"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  categoryId: number;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  organization: string;
  date: string;
  location: string;
  //   status: "pending" | "processing" | "success" | "failed";
};

export const postsColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Title",
    cell: (props) => {
      const name: string = props.row.original.name;
      const link: string = props.row.original.link;
      return (
        // <div className="flex items-center">
        //   <img
        //     src={props.row.original.imageUrl}
        //     alt={props.row.original.name}
        //     className="w-16 h-16 rounded-md"
        //   />
        //   <div className="ml-4">
        //     <p className="text-lg font-semibold">{props.row.original.name}</p>
        //     <p className="text-sm text-gray-500">
        //       {props.row.original.organization}
        //     </p>
        //   </div>
        // </div>
        <Link
          href={link || ""}
          target="_blank"
          referrerPolicy="no-referrer"
          className="hover:underline underline-offset-2 font-semibold"
        >
          {name}
        </Link>
      );
    },
  },
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "views",
    header: "Views",
  },
  {
    accessorKey: "likes",
    header: "Likes",
  },
];
