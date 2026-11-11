"use client";

import Link from "next/link";
import BlogCard, { BlogCardSkeleton } from "@/components/BlogCard";
import { useBlog } from "@/hooks/blog";

const TOTAL = 4; // jumlah blog terbaru yang ditampilkan

export default function LatestBlogs() {
  // API mengurutkan dari yang terbaru (latest()), jadi perPage: 3 = 3 blog terbaru
  const { blogs, error, isLoading } = useBlog({ page: 1, perPage: TOTAL });

  return (
    <section className="mx-auto w-[100dvw] px-0 py-12 md:px-0 md:py-12">
      <div className="flex flex-wrap items-end justify-between pe-0 md:pe-8 gap-4">
        <div className="md:ps-4 lg:ps-24">
          <h2 className="mt-1 font-semibold tracking-tight text-[#1B2433] text-heading2">
            Artikel Terbaru
          </h2>
          <p className="mt-2 max-w-xl text-body text-slate-500 md:text-base">
            Tulisan dan informasi terbaru yang baru saja kami terbitkan.
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-body font-medium text-[#4C5BD4] hover:underline"
        >
          Lihat semua blog <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="flex justify-center w-[100dvw]">
        <div className="mt-20 grid grid-cols-2 gap-4 md:gap-20 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {isLoading &&
            Array.from({ length: TOTAL }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}

          {!isLoading &&
            blogs?.data.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
        </div>
      </div>

      {error && !isLoading && (
        <p className="mt-8 rounded-xl bg-white p-6 text-center text-sm text-rose-600 ring-1 ring-slate-200/70">
          Gagal memuat blog. Silakan coba lagi nanti.
        </p>
      )}

      {!error && !isLoading && blogs?.data.length === 0 && (
        <p className="mt-8 rounded-xl bg-white p-6 text-center text-sm text-slate-500 ring-1 ring-slate-200/70">
          Belum ada artikel yang diterbitkan.
        </p>
      )}
    </section>
  );
}
