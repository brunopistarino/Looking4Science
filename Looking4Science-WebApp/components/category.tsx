import Link from "next/link";

export default function Category({ category }: { category: any }) {
  return (
    <Link
      href={`/search?category=${category.id}`}
      className="h-96 bg-gray-200 relative bg-center group overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110 bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url(${category.imageUrl})`,
        }}
      ></div>
      <p className="text-white bottom-4 left-4 absolute text-3xl z-10">
        {category.name} {"   "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </p>
    </Link>
  );
}
