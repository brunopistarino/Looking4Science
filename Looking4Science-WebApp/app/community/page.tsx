import LandingSection from "@/components/landing-section";
import SectionTitle from "@/components/section-title";
import { User2 } from "lucide-react";

import supabase from "@/lib/supabase";
import Post from "@/components/post";

export default async function Page() {
  const { data: posts } = await supabase.from("postd").select().limit(3);

  return (
    <LandingSection>
      <div
        className="flex lg:flex-row flex-col gap-8"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <div className="border p-4 flex flex-col gap-4 w-full lg:w-96">
            <p className="text-3xl font-semibold">Community Leads</p>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 h-16 w-16 rounded-full flex justify-center items-center shrink-0">
                <User2 size="40" className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg">Ana Smith</p>
                <p className="text-slate-500">Argentina, Rafaela</p>
              </div>
            </div>
          </div>
          <div className="border p-4 flex flex-col gap-4 w-full lg:w-96">
            <p className="text-3xl font-semibold">Upcoming events</p>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-lg">Marcha contra la tala</p>
              <p className="text-slate-500">Martes 20 de noviembre</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="border p-4 flex flex-col gap-4">
            <p className="text-3xl font-semibold">Quienes somos</p>
            <p>
              Welcome to our community of inquisitive minds and science
              enthusiasts! Here, professional scientists and enthusiasts from
              all disciplines come together to share knowledge, discuss
              innovative ideas, and foster collaboration in the exciting world
              of science. Whether you&apos;re an experienced scientist or simply
              have a deep admiration for scientific exploration, this is the
              perfect place to learn, be inspired, and connect with fellow
              science lovers.
            </p>
          </div>
          <div className="border p-4 flex flex-col gap-4">
            <p className="text-3xl font-semibold">Messages</p>
            <div className="flex flex-col items-start gap-4">
              <div className="flex gap-2">
                <div className="bg-blue-600 h-6 w-6 rounded-full flex justify-center items-center shrink-0">
                  <User2 size="16" className="text-white" />
                </div>
                <p className="bg-gray-200 rounded-lg px-2 py-1 rounded-es-none">
                  Hi nature lovers! Studying ecosystems and biodiversity.
                  Who&apos;s passionate about nature? Let&apos;s connect and
                  explore together!
                </p>
              </div>
              <div className="flex gap-2">
                <div className="bg-blue-600 h-6 w-6 rounded-full flex justify-center items-center shrink-0">
                  <User2 size="16" className="text-white" />
                </div>
                <p className="bg-gray-200 rounded-lg px-2 py-1 rounded-es-none">
                  Hello, community! I&apos;m a stargazer. Saw an epic meteor
                  shower last night. Tips or celestial chats, anyone?
                </p>
              </div>
            </div>
          </div>
          <div className="border p-4 flex flex-col gap-4">
            <p className="text-3xl font-semibold">Shared posts</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {posts?.map((post: any, x: number) => (
                <Post key={x} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LandingSection>
  );
}
