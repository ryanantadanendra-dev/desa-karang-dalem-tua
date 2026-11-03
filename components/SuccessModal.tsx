"use client";

import { useEffect, useRef } from "react";
import { useLastValue, useModalTransition } from "@/hooks/transition";

type SuccessModalProps = {
  open: boolean;
  message: React.ReactNode;
  title?: string;
  buttonText?: string;
  autoCloseMs?: number; // 0 = tidak menutup otomatis
  onClose: () => void;
};

export default function SuccessModal({
  open,
  message,
  title = "Berhasil",
  buttonText = "Oke",
  autoCloseMs = 3000,
  onClose,
}: SuccessModalProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { mounted, visible } = useModalTransition(open, 200);

  // Pesan menjadi null saat ditutup; simpan agar tidak kosong selama animasi keluar
  const shownMessage = useLastValue(message, open);

  useEffect(() => {
    if (open && mounted) buttonRef.current?.focus();
  }, [open, mounted]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const timer =
      autoCloseMs > 0 ? setTimeout(onClose, autoCloseMs) : undefined;

    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer) clearTimeout(timer);
    };
  }, [open, autoCloseMs, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 p-4 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="success-title"
        aria-describedby="success-message"
        className={`w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-xl transition duration-200 ease-out motion-reduce:transition-none ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ikon centang muncul sedikit setelah kartu, dengan efek membesar */}
        <div
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition duration-300 delay-100 ease-out motion-reduce:transition-none ${
            visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>

        <h2
          id="success-title"
          className="mt-4 text-lg font-semibold text-[#1B2433]"
        >
          {title}
        </h2>
        <p
          id="success-message"
          className="mt-2 text-sm leading-relaxed text-slate-500"
        >
          {shownMessage}
        </p>

        <button
          ref={buttonRef}
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-[#4C5BD4] px-4 py-2 text-sm font-medium text-white hover:bg-[#3F4DBF]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
