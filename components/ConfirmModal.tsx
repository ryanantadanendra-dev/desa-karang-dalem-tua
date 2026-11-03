"use client";

import { useEffect, useRef } from "react";
import { useLastValue, useModalTransition } from "@/hooks/transition";

type ConfirmModalProps = {
  open: boolean;
  title: string;
  message: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  error?: string | null;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({
  open,
  title,
  message,
  confirmText = "Hapus",
  cancelText = "Batal",
  loading = false,
  error = null,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { mounted, visible } = useModalTransition(open, 200);

  // Simpan isi terakhir agar teks tidak hilang saat animasi keluar
  const shownTitle = useLastValue(title, open);
  const shownMessage = useLastValue(message, open);
  const shownError = useLastValue(error, open);

  // Fokus ke tombol Batal setelah modal muncul
  useEffect(() => {
    if (open && mounted) cancelRef.current?.focus();
  }, [open, mounted]);

  // Tutup dengan Escape (diabaikan saat proses berjalan)
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, loading, onCancel]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => !loading && onCancel()} // klik latar belakang = batal
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
        className={`w-full max-w-sm rounded-xl bg-white p-6 shadow-xl transition duration-200 ease-out motion-reduce:transition-none ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-600">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />
          </svg>
        </div>

        <h2
          id="confirm-title"
          className="mt-4 text-lg font-semibold text-[#1B2433]"
        >
          {shownTitle}
        </h2>
        <p
          id="confirm-message"
          className="mt-2 text-sm leading-relaxed text-slate-500"
        >
          {shownMessage}
        </p>

        {shownError && (
          <p className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {shownError}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <button
            ref={cancelRef}
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 disabled:opacity-60"
          >
            {loading ? "Menghapus..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
