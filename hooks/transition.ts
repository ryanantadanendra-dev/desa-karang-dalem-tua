import { useEffect, useRef, useState } from "react";

/**
 * Mengatur animasi masuk dan keluar modal.
 * - mounted: modal masih perlu dirender (termasuk selama animasi keluar)
 * - visible: true = tampilan akhir (terlihat), false = tampilan awal (transparan)
 */
export function useModalTransition(open: boolean, duration = 200) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // Dua frame supaya kondisi awal (transparan) sempat tergambar sebelum animasi dimulai
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
      };
    }

    setVisible(false);
    const timer = setTimeout(() => setMounted(false), duration);
    return () => clearTimeout(timer);
  }, [open, duration]);

  return { mounted, visible };
}

/**
 * Menyimpan nilai terakhir saat modal sedang menutup, supaya teks tidak
 * tiba-tiba kosong selama animasi keluar (misalnya pesan yang menjadi null).
 */
export function useLastValue<T>(value: T, active: boolean): T {
  const ref = useRef(value);
  if (active) ref.current = value;
  return ref.current;
}
