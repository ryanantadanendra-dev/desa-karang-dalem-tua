"use client";

import { useState } from "react";
import { useTradisi } from "@/hooks/tradition";
import { FormErrors } from "@/types/validation";
import { tradition } from "@/types/tradition";

type Props = {
  tradisi: tradition | null; // null = tambah baru, ada isi = edit
  onClose: () => void;
  onSuccess?: (message: string) => void;
};

const input =
  "mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#4C5BD4] focus:ring-2 focus:ring-[#4C5BD4]/20";

export default function TraditionFormModal({
  tradisi,
  onClose,
  onSuccess,
}: Props) {
  const { updateTradisi } = useTradisi();

  const [title, setTitle] = useState(tradisi?.title ?? "");
  const [content, setContent] = useState(tradisi?.content ?? "");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok =
      tradisi &&
      (await updateTradisi({
        id: tradisi.id,
        title,
        content,
        setErrors,
        setIsLoading,
      }));

    if (ok) {
      onSuccess?.(
        tradisi
          ? "Tradisi berhasil diperbarui."
          : "Tradisi berhasil ditambahkan.",
      );
      onClose();
    }
  };

  const err = (field: string) =>
    errors[field]?.[0] ? (
      <p className="mt-1 text-xs text-rose-600">{errors[field][0]}</p>
    ) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <form
        onSubmit={onSubmit}
        className="max-h-[90vh] w-full max-w-lg space-y-4 overflow-y-auto rounded-xl bg-white p-6"
      >
        <h2 className="text-lg font-semibold">
          {tradisi ? "Edit tradisi" : "Tambah tradisi"}
        </h2>

        <label className="block text-sm font-medium">
          Judul
          <input
            className={input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {err("title")}
        </label>

        <label className="block text-sm font-medium">
          Isi
          <textarea
            className={input}
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {err("content")}
        </label>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-[#4C5BD4] px-4 py-2 text-sm font-medium text-white hover:bg-[#3F4DBF] disabled:opacity-60"
          >
            {isLoading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}
