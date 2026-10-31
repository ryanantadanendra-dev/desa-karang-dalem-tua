"use client";

import { useBlogDetail } from "@/hooks/blog";
import Link from "next/link";
import Image from "next/image";

type DetailsProp = {
  slug: string;
};

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#EEF1F6] px-4 py-8 text-[#1B2433] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#4C5BD4] hover:underline"
        >
          <span aria-hidden>←</span> Kembali ke blog
        </Link>
        {children}
      </div>
    </main>
  );
}

export default function BlogDetail({ slug }: { slug: string }) {
  const { blog, error, isLoading } = useBlogDetail(slug);

  if (isLoading) {
    return (
      <Shell>
        <div className="mt-6 animate-pulse space-y-4">
          <div className="h-4 w-28 rounded bg-slate-200" />
          <div className="h-9 w-4/5 rounded bg-slate-200" />
          <div className="h-5 w-2/3 rounded bg-slate-200" />
          <div className="aspect-video w-full rounded-2xl bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-3/4 rounded bg-slate-200" />
        </div>
      </Shell>
    );
  }

  if (error || !blog) {
    return (
      <Shell>
        <div className="mt-10 rounded-2xl bg-white p-8 text-center ring-1 ring-slate-200/70">
          <h1 className="text-xl font-semibold">Blog tidak ditemukan</h1>
          <p className="mt-2 text-sm text-slate-500">
            Artikel yang Anda cari mungkin sudah dihapus atau alamatnya salah.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <article className="mt-6 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70">
        {blog?.image && (
          <div className="relative aspect-video w-full bg-slate-100">
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog?.image}`}
              alt={blog.title}
              unoptimized
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="p-5 sm:p-8">
          <time
            dateTime={blog.created_at}
            className="text-sm font-medium text-[#4C5BD4]"
          >
            {dateFormat.format(new Date(blog.created_at))}
          </time>

          <h1 className="mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {blog.title}
          </h1>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            {blog.subtitle}
          </p>

          <hr className="my-6 border-slate-100" />

          {/* whitespace-pre-line mempertahankan baris baru dari isi blog */}
          <div className="whitespace-pre-line text-base leading-relaxed text-slate-700 sm:text-[17px] sm:leading-8">
            {blog.content}
          </div>
        </div>
      </article>
    </Shell>
  );
}
