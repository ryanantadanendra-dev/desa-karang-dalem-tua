"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import BlogFormModal from "@/components/BlogFormModal";
import { useBlog } from "@/hooks/blog";
import { Blog } from "@/types/blog";

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function BlogDashboard() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState(""); // search yang sudah di-debounce
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const { blogs, error, isLoading, deleteBlog } = useBlog({
    page,
    perPage: 10,
    search: keyword,
  });

  // Tunggu 400 ms setelah berhenti mengetik, lalu kembali ke halaman 1
  useEffect(() => {
    const t = setTimeout(() => {
      setKeyword(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  const openCreate = () => {
    setEditing(null);
    setShowForm(true);
  };

  const openEdit = (blog: Blog) => {
    setEditing(blog);
    setShowForm(true);
  };

  const onDelete = async (blog: Blog) => {
    if (!confirm(`Hapus blog "${blog.title}"?`)) return;

    setDeletingId(blog.id);
    try {
      await deleteBlog(blog.id);
      // Kalau yang dihapus data terakhir di halaman ini, mundur satu halaman
      if (blogs && blogs.data.length === 1 && page > 1) setPage(page - 1);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#EEF1F6] px-4 py-8 text-[#1B2433] sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Blog
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {blogs ? `${blogs.total} artikel` : "Kelola artikel blog Anda."}
            </p>
          </div>
          <button
            onClick={openCreate}
            className="rounded-lg bg-[#4C5BD4] px-4 py-2 text-sm font-medium text-white hover:bg-[#3F4DBF]"
          >
            Tambah blog
          </button>
        </header>

        <section className="rounded-xl bg-white ring-1 ring-slate-200/70">
          <div className="p-4 sm:p-5">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari judul atau subjudul..."
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#4C5BD4] focus:ring-2 focus:ring-[#4C5BD4]/20 sm:max-w-xs"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-y border-slate-100 text-xs text-slate-500">
                <tr>
                  <th className="px-5 py-2.5 font-medium">Artikel</th>
                  <th className="px-3 py-2.5 font-medium">Slug</th>
                  <th className="px-3 py-2.5 font-medium">Dibuat</th>
                  <th className="px-5 py-2.5 text-right font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {isLoading && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-10 text-center text-slate-400"
                    >
                      Memuat data...
                    </td>
                  </tr>
                )}

                {error && !isLoading && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-10 text-center text-rose-600"
                    >
                      Gagal memuat data. Periksa koneksi ke server.
                    </td>
                  </tr>
                )}

                {blogs && blogs.data.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-10 text-center text-slate-400"
                    >
                      {keyword
                        ? "Tidak ada blog yang cocok dengan pencarian."
                        : "Belum ada blog."}
                    </td>
                  </tr>
                )}

                {blogs?.data.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50/60">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        {blog?.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog?.image}`}
                            alt={`${blog.title} image`}
                            className="h-12 w-16 shrink-0 rounded-lg bg-slate-100 object-cover"
                          />
                        ) : (
                          <div className="h-12 w-16 object-cover shrink-0 rounded-lg bg-slate-100" />
                        )}
                        <div className="min-w-0">
                          <p className="truncate font-medium">{blog.title}</p>
                          <p className="truncate text-xs text-slate-500">
                            {blog.subtitle}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-500">{blog.slug}</td>
                    <td className="px-3 py-3 text-slate-500">
                      {dateFormat.format(new Date(blog.created_at))}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <button
                        onClick={() => openEdit(blog)}
                        className="rounded-lg px-3 py-1.5 text-[#4C5BD4] hover:bg-slate-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(blog)}
                        disabled={deletingId === blog.id}
                        className="rounded-lg px-3 py-1.5 text-rose-600 hover:bg-rose-50 disabled:opacity-50"
                      >
                        {deletingId === blog.id ? "Menghapus..." : "Hapus"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {blogs && (
            <Pagination
              currentPage={blogs.current_page}
              lastPage={blogs.last_page}
              total={blogs.total}
              from={blogs.from}
              to={blogs.to}
              onPageChange={setPage}
            />
          )}
        </section>
      </div>

      {showForm && (
        <BlogFormModal blog={editing} onClose={() => setShowForm(false)} />
      )}
    </main>
  );
}
