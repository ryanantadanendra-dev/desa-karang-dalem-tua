"use client";

import { useSocial } from "@/hooks/social";
import { useBlog } from "@/hooks/blog";

export type CardProps = {
  label: string;
  value: number;
};

const DashboardCards = ({ c }: { c: CardProps }) => {
  const { blogs } = useBlog();
  const { socials } = useSocial();

  const totalBlogs = blogs?.data.length;
  const totalSocials = socials?.data.length;

  return (
    <div
      key={c.label}
      className="rounded-xl bg-white p-6 ring-1 ring-slate-200/70"
    >
      <p className="text-sm text-slate-500">{c.label}</p>
      <p className="mt-3 text-5xl font-semibold tabular-nums">
        {c.label == "Jumlah blog" ? totalBlogs : totalSocials}
      </p>
    </div>
  );
};

export default DashboardCards;
