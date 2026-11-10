"use client";

import { useEffect, useState } from "react";
import ConfirmModal from "@/components/ConfirmModal";
import Pagination from "@/components/Pagination";
import SuccessModal from "@/components/SuccessModal";
import TradisiFormModal from "@/components/TraditionFormModal";
import { useTradisi } from "@/hooks/tradition";
import { tradition } from "@/types/tradition";

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function TradisiDashboard() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState(""); // search yang sudah di-debounce
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<tradition | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { tradisi, error, isLoading } = useTradisi({
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

  const openEdit = (item: tradition) => {
    setEditing(item);
    setShowForm(true);
  };

  return (
    <main className="min-h-screen bg-[#EEF1F6] px-4 py-8 text-[#1B2433] sm:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Tradisi
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {tradisi ? `${tradisi.total} data` : "Kelola data tradisi Anda."}
            </p>
          </div>
        </header>

        <section className="rounded-xl bg-white ring-1 ring-slate-200/70">
          <div className="p-4 sm:p-5">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari judul atau isi..."
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#4C5BD4] focus:ring-2 focus:ring-[#4C5BD4]/20 sm:max-w-xs"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-y border-slate-100 text-xs text-slate-500">
                <tr>
                  <th className="px-5 py-2.5 font-medium">Tradisi</th>
                  <th className="px-3 py-2.5 font-medium">Dibuat</th>
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

                {tradisi && tradisi.data.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-5 py-10 text-center text-slate-400"
                    >
                      {keyword
                        ? "Tidak ada tradisi yang cocok dengan pencarian."
                        : "Belum ada data tradisi."}
                    </td>
                  </tr>
                )}

                {tradisi?.data.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60">
                    <td className="max-w-md px-5 py-3">
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
                        {item.content}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-slate-500">
                      {dateFormat.format(new Date(item.created_at))}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-right">
                      <button
                        onClick={() => openEdit(item)}
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

          {tradisi && (
            <Pagination
              currentPage={tradisi.current_page}
              lastPage={tradisi.last_page}
              total={tradisi.total}
              from={tradisi.from}
              to={tradisi.to}
              onPageChange={setPage}
            />
          )}
        </section>
      </div>

      {showForm && (
        <TradisiFormModal
          tradisi={editing}
          onClose={() => setShowForm(false)}
          onSuccess={setSuccessMessage}
        />
      )}

      <SuccessModal
        open={!!successMessage}
        message={successMessage}
        onClose={() => setSuccessMessage(null)}
      />
    </main>
  );
}
