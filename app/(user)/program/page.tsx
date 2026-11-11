import Header from "@/components/Header";
import Image from "next/image";
import Image1 from "../../public/jalak-bali.webp";
import ScrollToHash from "@/components/ScrollToHash";
import type { Metadata } from "next";
import { Program } from "@/types/program";
import { Paginated } from "@/types/pagination";

export const metadata: Metadata = {
  title: "Program Desa",
  description:
    "Program unggulan Desa Karang Dalem Tua: pengkaderan Jalak Bali, budidaya lebah madu, biogas, kerajinan daur ulang, dan kerajinan perak.",
  keywords: [
    "program desa Bali",
    "pengkaderan Jalak Bali",
    "budidaya lebah madu",
    "biogas desa",
    "kerajinan daur ulang",
    "kerajinan perak",
    "desa mandiri berkelanjutan",
  ],
  alternates: { canonical: "/program" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Desa Karang Dalem Tua",
    title: "Program Desa | Desa Karang Dalem Tua",
    description:
      "Lima program unggulan desa untuk pelestarian alam, energi terbarukan, dan ekonomi kreatif masyarakat.",
    url: "/program",
    images: [
      {
        url: "/jalak_bali-1.webp",
        width: 1200,
        height: 630,
        alt: "Program Desa Karang Dalem Tua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Desa | Desa Karang Dalem Tua",
    description:
      "Jalak Bali, lebah madu, biogas, daur ulang, dan kerajinan perak.",
    images: ["/jalak_bali-1.webp"],
  },
};

const jalak = {
  left: [
    { src: "/daur-2.webp" },
    { src: "/jalak_bali-2.webp" },
    { src: "/jalak_bali-3.webp" },
  ],
  right: [{ src: "/jalak_bali-4.webp" }, { src: "/jalak_bali-5.webp" }],
};

const daur = {
  left: [
    { src: "/daur-1.webp" },
    { src: "/daur-3.webp" },
    { src: "/daur-4.webp" },
  ],
  right: [{ src: "/daur-5.webp" }, { src: "/daur-6.webp" }],
};

const perak = {
  left: [
    { src: "/perak-6.webp" },
    { src: "/perak-2.webp" },
    { src: "/perak-5.webp" },
  ],
  right: [{ src: "/perak-4.webp" }, { src: "/perak-3.webp" }],
};

const lebah = {
  left: [
    { src: "/lebah-2.webp" },
    { src: "/lebah-1.webp" },
    { src: "/lebah-4.webp" },
  ],
  right: [{ src: "/lebah-5.webp" }, { src: "/lebah-3.webp" }],
};

const biogas = {
  left: [
    { src: "/biogas-3.webp" },
    { src: "/biogas-2.webp" },
    { src: "/biogas-4.webp" },
  ],
  right: [{ src: "/biogas-1.webp" }, { src: "/biogas-5.webp" }],
};

/* ------------------------------------------------------------------
 * DATA GAMBAR: jalak, daur, perak, lebah, biogas
 * Tetap di sini, persis seperti yang sudah ada di file Anda (tidak diubah).
 * Bentuknya: { left: { src: string }[], right: { src: string }[] }
 * ------------------------------------------------------------------ */

type Img = { src: string };
type ImageSet = { left: Img[]; right: Img[] };

// Urutan section = urutan data di database (dibuat dari yang paling awal).
const sections: { id: string; images: ImageSet; reverse: boolean }[] = [
  { id: "jalak-bali", images: jalak, reverse: false },
  { id: "daur-ulang", images: daur, reverse: true },
  { id: "perak", images: perak, reverse: false },
  { id: "lebah-madu", images: lebah, reverse: true },
  { id: "biogas", images: biogas, reverse: false },
];

async function getPrograms(): Promise<Program[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/programs?per_page=${sections.length}`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 }, // di-cache 60 detik; ganti ke cache: "no-store" jika harus selalu terbaru
      },
    );

    if (!res.ok) return [];

    const json = (await res.json()) as Paginated<Program>;

    // API mengurutkan dari yang terbaru. Urutkan naik berdasarkan id supaya
    // data yang dibuat paling awal tampil di section pertama.
    return [...json.data].sort((a, b) => a.id - b.id);
  } catch {
    return [];
  }
}

// Baris kosong di deskripsi = paragraf baru (pengganti <br /><br />)
const Paragraphs = ({ text }: { text: string }) => (
  <>
    {text
      .split(/\n\s*\n/)
      .filter((p) => p.trim() !== "")
      .map((p, i) => (
        <p key={i} className="whitespace-pre-line">
          {p.trim()}
        </p>
      ))}
  </>
);

// Satu kolom gambar. "left" dan "right" punya sedikit perbedaan kelas seperti kode asli.
const ImageColumn = ({
  images,
  variant,
}: {
  images: Img[];
  variant: "left" | "right";
}) => (
  <div className="flex flex-col gap-3">
    {images.map((img, i) =>
      variant === "left" ? (
        <Image
          key={i}
          src={img.src}
          alt=""
          width={1000}
          height={1000}
          sizes="(max-width: 759px) calc((100vw - 52px) / 2), 260px"
          className="w-full aspect-square md:w-65 md:h-65 rounded-md object-cover"
          style={{ aspectRatio: "auto" }}
        />
      ) : (
        <Image
          key={i}
          src={img.src}
          alt=""
          width={1000}
          height={1000}
          sizes="(max-width: 759px) calc((100vw - 52px) / 2), 260px"
          className="w-full aspect-square md:w-65 md:h-65 rounded-md object-cover flex-1"
        />
      ),
    )}
  </div>
);

type SectionProps = {
  id: string;
  images: ImageSet;
  reverse: boolean; // true = latar primary, gambar di kiri (desktop)
  title: string;
  content: string;
};

const ProyekSection = ({
  id,
  images,
  reverse,
  title,
  content,
}: SectionProps) => (
  <section
    id={id}
    className={
      reverse
        ? "bg-primary text-background w-screen lg:min-h-180 min-h-100 grid grid-cols-2 grid-flow-row place-items-center gap-8 md:gap-8 md:justify-items-center md:items-center py-12 2xl:px-32 md:px-12 px-5"
        : "w-screen lg:min-h-180 min-h-100 bg-background grid grid-cols-2 place-items-center gap-8 md:gap-8 md:justify-items-center md:items-center py-12 2xl:px-32 md:px-12 px-5"
    }
  >
    <div
      className={
        reverse
          ? "col-span-2 md:col-span-1 pt-12 lg:pt-0 order-1 md:order-2"
          : "col-span-2 md:col-span-1 pt-12 lg:pt-0"
      }
    >
      <h2 className="text-heading2">{title}</h2>
      <article className="text-body mt-6 space-y-4">
        <Paragraphs text={content} />
      </article>
    </div>

    <div
      className={
        reverse
          ? "col-span-2 md:col-span-1 order-2 md:order-1"
          : "col-span-2 md:col-span-1"
      }
    >
      <div className="grid grid-cols-2 gap-3">
        {reverse ? (
          <>
            <ImageColumn images={images.right} variant="right" />
            <ImageColumn images={images.left} variant="left" />
          </>
        ) : (
          <>
            <ImageColumn images={images.left} variant="left" />
            <ImageColumn images={images.right} variant="right" />
          </>
        )}
      </div>
    </div>
  </section>
);

const ProyekPage = async () => {
  const programs = await getPrograms();

  return (
    <>
      <Header text="PROYEK KAMI" />
      <main className="w-screen min-h-screen">
        <ScrollToHash />

        {programs.length === 0 && (
          <p className="py-24 text-center text-body">
            Data proyek belum tersedia.
          </p>
        )}

        {sections.map((section, i) => {
          const item = programs[i];
          if (!item) return null;

          return (
            <ProyekSection
              key={item.id}
              id={section.id}
              images={section.images}
              reverse={section.reverse}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </main>
    </>
  );
};
export default ProyekPage;
