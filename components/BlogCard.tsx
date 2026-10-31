import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group mx-auto flex h-60 w-40 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-300/40 md:w-90 lg:w-96 lg:h-[22rem] lg:w-[23rem]">
      <Link href={`/blog/${blog.slug}`} className="flex h-full flex-col">
        {/* Gambar: rasio tetap 16:9 di semua ukuran layar */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          {blog.image ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog?.image}`}
              alt={blog.title}
              unoptimized
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              Tanpa gambar
            </div>
          )}
        </div>

        {/* Konten */}
        <div className="flex flex-1 flex-col p-5">
          <time
            dateTime={blog.created_at}
            className="text-[0.6rem] md:text-xs font-medium text-[#4C5BD4]"
          >
            {dateFormat.format(new Date(blog.created_at))}
          </time>

          <h3 className="mt-2 line-clamp-2 text-[1rem] md:text-lg font-semibold leading-snug text-[#1B2433] transition group-hover:text-[#4C5BD4]">
            {blog.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-[0.6rem] md:text-sm leading-relaxed text-slate-500">
            {blog.subtitle}
          </p>

          {/* mt-auto: "Baca selengkapnya" selalu menempel di bawah, tinggi kartu tetap sama */}
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[0.6rem] md:text-sm font-medium text-[#4C5BD4]">
            Baca selengkapnya
            <span aria-hidden className="transition group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

// Tampilan saat data masih dimuat
export function BlogCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70">
      <div className="aspect-video w-full bg-slate-100" />
      <div className="space-y-3 p-5">
        <div className="h-3 w-24 rounded bg-slate-100" />
        <div className="h-5 w-4/5 rounded bg-slate-100" />
        <div className="h-4 w-full rounded bg-slate-100" />
        <div className="h-4 w-2/3 rounded bg-slate-100" />
      </div>
    </div>
  );
}
