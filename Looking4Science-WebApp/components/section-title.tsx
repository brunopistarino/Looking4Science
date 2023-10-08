export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-3xl md:text-5xl font-bold">{children}</p>;
}
