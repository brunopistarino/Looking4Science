export default function LandingSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 justify-center flex">
      <div className="flex flex-col gap-8 md:gap-12 max-w-8xl w-full">
        {children}
      </div>
    </section>
  );
}
