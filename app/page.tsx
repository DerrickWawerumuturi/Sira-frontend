import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 items-start justify-items-center sm:justify-center lg:justify-end align-bottom min-h-screen p-8 pb-20 pt-64 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-midnight text-white">
      <Hero />
    </div>
  );
}
