import Header from "@/components/Header";
import Image from "next/image";
import Image1 from "../../public/jalak-bali.webp";
import ScrollToHash from "@/components/ScrollToHash";
import type { Metadata } from "next";
import { tradition } from "@/types/tradition";
import { Paginated } from "@/types/pagination";

export const metadata: Metadata = {
  title: "Tradisi & Budaya",
  description:
    "Jelajahi tradisi, upacara adat, seni, dan kearifan lokal masyarakat Desa Karang Dalem Tua, Bali yang terus dilestarikan lintas generasi.",
  keywords: [
    "tradisi Bali",
    "budaya Desa Karang Dalem Tua",
    "upacara adat Bali",
    "kearifan lokal Bali",
    "seni dan budaya Bali",
    "wisata budaya Bali",
  ],
  alternates: { canonical: "/tradisi" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Desa Karang Dalem Tua",
    title: "Tradisi & Budaya | Desa Karang Dalem Tua",
    description:
      "Tradisi, upacara adat, dan kearifan lokal masyarakat Desa Karang Dalem Tua, Bali.",
    url: "/tradisi",
    images: [
      {
        url: "/penjor.webp",
        width: 1200,
        height: 630,
        alt: "Tradisi Desa Karang Dalem Tua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradisi & Budaya | Desa Karang Dalem Tua",
    description: "Tradisi dan kearifan lokal Desa Karang Dalem Tua, Bali.",
    images: ["/penjor.webp"],
  },
};

const sections = [
  { id: "penjor", image: "/penjor.webp", alt: "Penjor Bali", imageFirst: true },
  {
    id: "tata-ruang",
    image: "/ruang-2.webp",
    alt: "Tata Ruang Pura",
    imageFirst: false,
  },
];

async function getTradisi(): Promise<tradition[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tradisi?per_page=2`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 }, // data di-cache 60 detik; ganti ke cache: "no-store" jika harus selalu terbaru
      },
    );

    if (!res.ok) return [];

    const json = (await res.json()) as Paginated<tradition>;

    // API mengurutkan dari yang terbaru. Urutkan naik berdasarkan id supaya
    // data yang dibuat lebih dulu (penjor) tampil di section pertama.
    return [...json.data].sort((a, b) => a.id - b.id);
  } catch {
    return [];
  }
}

// Pisahkan isi menjadi paragraf berdasarkan baris kosong
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

type SectionProps = {
  id: string;
  image: string;
  alt: string;
  imageFirst: boolean;
  title: string;
  content: string;
};

const TradisiSection = ({
  id,
  image,
  alt,
  imageFirst,
  title,
  content,
}: SectionProps) => (
  <section
    id={id}
    className="2xl:min-h-screen lg:min-h-100 min-h-120 py-12 px-8 md:px-12 grid md:grid-cols-2 grid-cols-1 grid-flow-row justify-items-center items-start lg:items-center gap-12 md:gap-8 lg:gap-0"
  >
    <div
      className={`order-2 col-span-1 ${imageFirst ? "md:order-1" : "md:order-2"}`}
    >
      <figure className="relative 2xl:w-132.25 2xl:h-154.75 lg:w-90 lg:h-110 md:w-60 md:h-80 w-44 h-56">
        <Image
          src={image}
          alt={alt}
          width={2000}
          height={1365}
          sizes="(max-width: 759px) 176px, (max-width: 1024px) 240px, (max-width: 1279px) 360px, 529px"
          className="object-cover w-full h-full rounded-2xl"
        />
      </figure>
    </div>
    <div
      className={`order-1 col-span-1 ${
        imageFirst
          ? "md:order-2 2xl:pe-32 lg:pe-10"
          : "md:order-1 2xl:ps-32 lg:ps-10"
      }`}
    >
      <h2 className="text-heading2">{title}</h2>
      <article className="text-body md:mt-8 space-y-4">
        <Paragraphs text={content} />
      </article>
    </div>
  </section>
);

const TradisiPage = async () => {
  const tradisi = await getTradisi();

  return (
    <>
      <Header text="TRADISI" />
      <main className="w-screen min-h-screen md:min-h-200 lg:min-h-screen">
        <ScrollToHash />

        {tradisi.length === 0 && (
          <p className="py-24 text-center text-body">
            Data tradisi belum tersedia.
          </p>
        )}

        {sections.map((section, i) => {
          const item = tradisi[i];
          if (!item) return null;

          return (
            <TradisiSection
              key={item.id}
              id={section.id}
              image={section.image}
              alt={section.alt}
              imageFirst={section.imageFirst}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </main>
    </>
  );
};
export default TradisiPage;
