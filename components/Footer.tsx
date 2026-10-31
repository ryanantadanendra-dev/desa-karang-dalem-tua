"use client";

import { useSocial } from "@/hooks/social";

const navLinks = [
  { label: "Tentang", href: "/tentang-kami" },
  { label: "Proyek", href: "/proyek" },
  { label: "Tradisi", href: "/tradisi" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  const { socials } = useSocial();
  const instagram = socials?.data.find((s) => s.platform == "Instagram");
  const whatsapp = socials?.data.find((s) => s.platform == "Whatsapp");
  const email = socials?.data.find((s) => s.platform == "Email");

  return (
    <footer className="bg-primary text-background">
      <div className="mx-auto max-w-7xl px-8 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Kontak */}
          <div>
            <h3 className="font-cormorant text-2xl font-semibold sm:text-3xl">
              HUBUNGI DESA
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-background/90">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-.414.336-.75.75-.75h18a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-18a.75.75 0 01-.75-.75V6.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75l9.75 6.75 9.75-6.75"
                  />
                </svg>
                <a
                  href={email?.link}
                  className="transition-colors hover:text-accent"
                >
                  {email?.text}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 4.5c0-.414.336-.75.75-.75h3a.75.75 0 01.75.65c.126.98.36 1.933.696 2.848a.75.75 0 01-.187.795l-1.5 1.5a11.25 11.25 0 006 6l1.5-1.5a.75.75 0 01.795-.187 11.19 11.19 0 002.848.696.75.75 0 01.65.75v3a.75.75 0 01-.75.75h-.75C8.75 20.75 3.25 15.25 3.25 8.25V7.5z"
                  />
                </svg>
                <a
                  href={whatsapp?.link}
                  className="transition-colors
                hover:text-accent"
                >
                  {whatsapp?.text}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a
                  href={instagram?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {instagram?.text}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-cormorant text-2xl font-semibold sm:text-3xl">
              NAVIGASI
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-background/90">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasi */}
          <div>
            <h3 className="font-cormorant text-2xl font-semibold sm:text-3xl">
              LOKASI
            </h3>
            <div className="mt-6 overflow-hidden rounded-lg">
              {" "}
              <iframe
                title="Lokasi Desa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.902006710502!2d115.23335793813393!3d-8.461203550866161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd223004bd2648d%3A0x250a19d2e163a1f0!2sKarang%20Dalem%20Tua!5e0!3m2!1sen!2sid!4v1793287870141!5m2!1sen!2sid"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-10"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
