// components/ScrollToHash.tsx
"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      const el = document.getElementById(target);
      if (el) {
        const navbarHeight = 80;
        const top =
          el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, []);

  return null;
}
