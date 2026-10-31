"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import SocialFormModal from "@/components/Socialformmodal ";
import { useSocial } from "@/hooks/social";
import { Social } from "@/types/social";

export default function SocialDashboard() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState(""); // search yang sudah di-debounce
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Social | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const { socials, error, isLoading, deleteSocial } = useSocial({
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

  // const openCreate = () => {
  //   setEditing(null);
  //   setShowForm(true);
  // };

  const openEdit = (social: Social) => {
    setEditing(social);
    setShowForm(true);
  };

  // const onDelete = async (social: Social) => {
  //   if (!confirm(`Hapus ${social.platform}?`)) return;

  //   setDeletingId(social.id);
  //   try {
  //     await deleteSocial(social.id);
  //     // Kalau yang dihapus data terakhir di halaman ini, mundur satu halaman
  //     if (socials && socials.data.length === 1 && page > 1) setPage(page - 1);
  //   } finally {
  //     setDeletingId(null);
  //   }
  // };

  return (
    <main className="min-h-screen bg-[#EEF1F6] px-4 py-8 text-[#1B2433] sm:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Social media
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {socials
                ? `${socials.total} platform`
                : "Kelola platform media sosial Anda."}
            </p>
          </div>
        </header>

        <section className="rounded-xl bg-white ring-1 ring-slate-200/70">
          <div className="p-4 sm:p-5">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari platform..."
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#4C5BD4] focus:ring-2 focus:ring-[#4C5BD4]/20 sm:max-w-xs"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-y border-slate-100 text-xs text-slate-500">
                <tr>
                  <th className="px-5 py-2.5 font-medium">Platform</th>
                  <th className="px-3 py-2.5 font-medium">Link</th>
                  <th className="px-3 py-2.5 font-medium">Text</th>
                  <th className="px-5 py-2.5 text-right font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {isLoading && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-5 py-10 text-center text-slate-400"
                    >
                      Memuat data...
                    </td>
                  </tr>
                )}

                {error && !isLoading && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-5 py-10 text-center text-rose-600"
                    >
                      Gagal memuat data. Periksa koneksi ke server.
                    </td>
                  </tr>
                )}

                {socials && socials.data.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-5 py-10 text-center text-slate-400"
                    >
                      {keyword
                        ? "Tidak ada platform yang cocok dengan pencarian."
                        : "Belum ada platform."}
                    </td>
                  </tr>
                )}

                {socials?.data.map((social) => (
                  <tr key={social.id} className="hover:bg-slate-50/60">
                    <td className="px-5 py-3 font-medium">{social.platform}</td>
                    <td className="max-w-xs px-3 py-3">
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-[#4C5BD4] hover:underline"
                      >
                        {social.link}
                      </a>
                    </td>
                    <td className="px-5 py-3 font-medium">{social.text}</td>
                    <td className="px-5 py-3 text-right">
                      <button
                        onClick={() => openEdit(social)}
                        className="rounded-lg px-3 py-1.5 text-[#4C5BD4] hover:bg-slate-100"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {socials && (
            <Pagination
              currentPage={socials.current_page}
              lastPage={socials.last_page}
              total={socials.total}
              from={socials.from}
              to={socials.to}
              onPageChange={setPage}
            />
          )}
        </section>
      </div>

      {showForm && (
        <SocialFormModal social={editing} onClose={() => setShowForm(false)} />
      )}
    </main>
  );
}
