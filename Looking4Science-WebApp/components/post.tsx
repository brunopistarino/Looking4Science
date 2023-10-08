import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Post({ post }: { post: any }) {
  return (
    <Link
      href={post.link || ""}
      target="_blank"
      className="group flex flex-col gap-2 relative"
    >
      {post.imageUrl && (
        <img src={post.imageUrl} alt="" className="aspect-[4/3] object-cover" />
      )}
      <div>
        <p className="text-base font-semibold group-hover:underline underline-offset-4">
          {post.name}
        </p>
        <p className="text-sm line-clamp-3">{post.description}</p>
      </div>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="absolute top-2 right-2 bg-slate-300 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart />
      </Button>
    </Link>
  );
}
