"use client";

import { useState } from "react";
import ScrollBtn from "./ScrollBtn";
import Link from "next/link";

type SubLink = { label: string; href: string };
type NavLink = { label: string; href: string; submenu?: SubLink[] };

const links: NavLink[] = [
  { label: "Tentang", href: "/tentang-kami" },
  {
    label: "Proyek",
    href: "/proyek",
    submenu: [
      { label: "Jalak Bali", href: "/proyek#jalak-bali" },
      { label: "Kerajinan Daur Ulang", href: "/proyek#daur-ulang" },
      { label: "Kerajinan Perak", href: "/proyek#perak" },
      { label: "Budiidaya Lebah Madu", href: "/proyek#lebah-madu" },
      { label: "Biogas", href: "/proyek#biogas" },
    ],
  },
  {
    label: "Tradisi",
    href: "/tradisi",
    submenu: [
      { label: "Penjor", href: "/tradisi#penjor" },
      { label: "Tata Ruang Pura Dua", href: "/tradisi#tata-ruang" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopSubmenu, setDesktopSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed w-screen top-0 z-50 scroll-mt-28 bg-primary text-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <a
          href="/"
          className="font-cormorant text-sm font-semibold tracking-[0.3em] uppercase"
        >
          Home
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 text-xs font-medium tracking-[0.2em] uppercase sm:flex">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.submenu && setDesktopSubmenu(link.label)}
              onMouseLeave={() => link.submenu && setDesktopSubmenu(null)}
            >
              <ScrollBtn
                href={link.href}
                className="flex items-center gap-1 transition-colors hover:text-accent"
              >
                {link.label}
                {link.submenu && (
                  <svg
                    className={`h-3 w-3 transition-transform ${
                      desktopSubmenu === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </ScrollBtn>

              {/* Desktop dropdown */}
              {link.submenu && (
                <ul
                  className={`absolute left-0 top-full min-w-45 bg-primary py-2 shadow-lg transition-all duration-200 ${
                    desktopSubmenu === link.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {link.submenu.map((sub) => (
                    <li key={sub.label}>
                      <ScrollBtn
                        href={sub?.href}
                        className="block px-4 py-2 tracking-[0.15em] transition-colors hover:text-accent"
                      >
                        {sub.label}
                      </ScrollBtn>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-5 bg-background transition-transform ${
              open ? "translate-y-0.75 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-background transition-transform ${
              open ? "-translate-y-0.75 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:hidden ${
          open ? "max-h-112" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-4 text-xs font-medium tracking-[0.2em] uppercase">
          {links.map((link) => (
            <li key={link.label}>
              {link.submenu ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu((prev) =>
                        prev === link.label ? null : link.label,
                      )
                    }
                    className="flex w-full items-center justify-between py-2 transition-colors hover:text-accent"
                  >
                    {link.label}
                    <svg
                      className={`h-3 w-3 transition-transform ${
                        mobileSubmenu === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden pl-4 transition-[max-height] duration-300 ease-in-out ${
                      mobileSubmenu === link.label ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <ul className="flex flex-col gap-1 py-1">
                      {link.submenu.map((sub) => (
                        <li key={sub.label}>
                          <ScrollBtn
                            href={sub.href}
                            onClick={() => {
                              setOpen(false);
                              setMobileSubmenu(null);
                            }}
                            className="block py-2 tracking-[0.15em] text-background/80 transition-colors hover:text-accent"
                          >
                            {sub.label}
                          </ScrollBtn>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
