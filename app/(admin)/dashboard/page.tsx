// app/dashboard/page.tsx (atau app/page.tsx)
// Hanya konten halaman: tanpa navbar, tanpa layout. Memakai Tailwind CSS.
// Ganti dua angka di bawah dengan data asli dari API/database Anda.

import DashboardCards from "@/components/DashboardCards";

const totalBlog = 12;
const totalPlatform = 5;

const cards = [
  { label: "Jumlah blog", value: totalBlog },
  { label: "Jumlah platform media sosial", value: totalPlatform },
];

export default function DashboardHome() {
  return (
    <main className="min-h-screen bg-[#EEF1F6] px-4 py-8 text-[#1B2433] sm:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Ringkasan blog dan media sosial Anda.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <DashboardCards key={c.label} c={c} />
          ))}
        </section>
      </div>
    </main>
  );
}
