import Image from "next/image";
import Image1 from "../public/jalak-bali.webp";
import Link from "next/link";
import ScrollBtn from "@/components/ScrollBtn";
import Divider from "@/components/Divider";
import type { Metadata, Viewport } from "next";

const siteUrl = "https://www.karangdalemtua.org";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f6b3a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Desa Karang Dalem Tua, Bali | Wisata Desa & Program Berkelanjutan",
    template: "%s | Desa Karang Dalem Tua",
  },

  description:
    "Website resmi Desa Karang Dalem Tua, Bali. Kenali program unggulan desa: pengkaderan Jalak Bali, budidaya lebah madu, biogas, kerajinan daur ulang, dan kerajinan perak.",

  applicationName: "Desa Karang Dalem Tua",

  keywords: [
    "Desa Karang Dalem Tua",
    "desa wisata Bali",
    "pengkaderan Jalak Bali",
    "konservasi Jalak Bali",
    "budidaya lebah madu",
    "madu Bali",
    "biogas",
    "kerajinan daur ulang",
    "kerajinan perak Bali",
    "ekowisata Bali",
    "desa berkelanjutan",
  ],

  authors: [{ name: "Pemerintah Desa Karang Dalem Tua" }],
  creator: "Desa Karang Dalem Tua",
  publisher: "Desa Karang Dalem Tua",

  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      // "en-US": "/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Desa Karang Dalem Tua",
    title: "Desa Karang Dalem Tua, Bali",
    description:
      "Jelajahi program desa: pengkaderan Jalak Bali, lebah madu, biogas, kerajinan daur ulang, dan kerajinan perak.",
    images: [
      {
        url: "/desa-2.webp", // 1200x630, taruh di folder public
        width: 1200,
        height: 630,
        alt: "Desa Karang Dalem Tua, Bali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Desa Karang Dalem Tua, Bali",
    description:
      "Pengkaderan Jalak Bali, budidaya lebah madu, biogas, kerajinan daur ulang, dan kerajinan perak.",
    images: ["/desa-2.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  category: "community",
};

const projects = [
  {
    title: "Penangkaran Jalak Bali",
    image: "/jalak_bali-2.webp",
    href: "/program#jalak-bali",
  },
  {
    title: "Kerajinan Perak",
    image: "/perak-1.webp",
    href: "/program#perak",
  },
  {
    title: "Biogas",
    image: "/biogas-1.webp",
    href: "/program#biogas",
  },
  {
    title: "Budidaya Lebah Madu",
    image: "/lebah-1.webp",
    href: "/program#lebah-madu",
  },
  {
    title: "Kerajinan Daur Ulang",
    image: "/daur-1.webp",
    href: "/program#daur-ulang",
  },
];

const views = [
  "/sawah-1.webp",
  "/sawah-2.webp",
  "/sawah-3.webp",
  "/petani-1.webp",
  "/patung-1.webp",
  "/jalan-1.webp",
  "/sawah-4.webp",
  "/sawah-5.webp",
  "/patung-2.webp",
];

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <section
        id="hero"
        className="bg-background lg:h-screen lg:px-32 md:px-12 px-5 py-20 grid place-items-center grid-cols-2 2xl:itemssta 2xl:items-start md:items-center gap-12 md:gap-5 xl:gap-20"
      >
        <div className="col-span-2 md:col-span-1 md:pe-2 lg:pe-0 2xl:pt-32">
          <h1 className="text-heading1 font-extrabold text-primary text-center md:text-start">
            DESA KARANG DALEM TUA
          </h1>
          <p className="text-body font-light text-center md:text-start">
            Karang Dalem Tua – Harmoni Tradisi, Alam, dan Kehidupan
          </p>
          <ScrollBtn
            href="/#tentang"
            className=" mt-8 mx-auto md:mx-0 bg-primary text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1"
          >
            <p className="text-body">Jelajahi</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="md:w-4 w-3"
            >
              <path
                fill="#FFFFFF"
                d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
              />
            </svg>
          </ScrollBtn>
        </div>
        <div className=" col-span-2 md:col-span-1 flex items-center lg:items-start xl:gap-8 lg:gap-5 md:gap-3 gap-5 2xl:pt-12">
          <figure className="relative w-32 h-44 md:w-38 md:h-56 lg:w-48 lg:h-72 2xl:w-87.25 2xl:h-122.25">
            <Image
              src="/patung-3.webp"
              alt="Jalak Bali"
              sizes="(max-width: 759px) 128px, (max-width: 1024px) 152px, (max-width: 1279px) 192px, 349px"
              width={2000}
              height={1365}
              className="object-cover object-center w-full h-full rounded-tl-[80px] rounded-tr-[80px] rounded-br-0 rounded-bl-0"
            />
          </figure>
          <figure
            className="relative w-32 h-44
            md:w-46 md:h-100
            lg:w-56 
            2xl:w-87.25 2xl:h-186"
          >
            <Image
              src="/ruang-2.webp"
              alt="Patung"
              sizes="(max-width: 759px) 128px, (max-width: 1024px) 184px, (max-width: 1279px) 224px, 349px"
              width={1365}
              height={2000}
              className="object-cover object-center w-full h-full rounded-tl-[50px] md:rounded-tl-[80px] rounded-tr-0 rounded-br-[50px] md:rounded-br-[80px] rounded-bl-0"
            />
          </figure>
        </div>
      </section>
      <section
        id="tentang"
        className="text-background w-screen lg:min-h-screen 2xl:h-261.75 min-h-160 lg:px-20 2xl:px-32 md:px-12 px-12 py-12 md:py-0 bg-primary grid grid-cols-2 items-center gap-24 md:gap-5"
      >
        <div className="col-span-2 md:col-span-1 h-full flex items-center lg:pb-12 2xl:pb-0">
          <figure className="relative 2xl:w-155.5 2xl:h-155.5 lg:w-100 lg:h-100 md:w-80 md:h-80 w-56 h-56">
            <Image
              src="/desa-2.webp"
              alt="About Section Image"
              sizes="(max-width: 759px) 224px, (max-width: 1024px) 320px, (max-width: 1279px) 400px, 777.5px"
              width={1000}
              height={1000}
              className="object-cover aspect-square w-full h-full object-top  rounded-tl-0 rounded-tr-[80px] rounded-br-0 rounded-bl-[80px]"
            />
            <figure className="absolute 2xl:w-89.25 2xl:h-89.25 lg:w-56 lg:h-56 md:w-44 md:h-44 w-36 h-36 lg:-bottom-20 lg:-right-20 md:-right-8 -right-16 -bottom-16">
              <Image
                src="/desa-1.webp"
                alt="About Section Image"
                sizes="(max-width: 759px) 144px, (max-width: 1024px) 176px, (max-width: 1279px) 224px, 357px"
                width={1000}
                height={1000}
                className="object-cover aspect-square object-top w-full h-full rounded-tl-0 lg:rounded-tr-[80px] rounded-tr-[50px] rounded-br-0 lg:rounded-bl-[80px] rounded-bl-[50px]"
              />
            </figure>
          </figure>
        </div>
        <div className="col-span-2 md:col-span-1 h-full flex flex-col justify-center">
          <h2 className="text-background text-heading2 font-extrabold 2xl:mt-28">
            Mengenal Desa Adat Karang Dalem Tua
          </h2>
          <article className="text-body mt-6">
            Desa Adat Karang Dalem Tua terletak di wilayah Perbekelan Bongkasa
            Pertiwi, Kecamatan Abiansemal, Kabupaten Badung, Bali. Desa ini
            dikenal sebagai kawasan yang masih menjaga kelestarian adat, budaya,
            dan spiritualitas Bali secara utuh. Kehidupan masyarakat bertumpu
            pada keseimbangan antara manusia, alam, dan Tuhan, dengan lingkungan
            yang masih asri, pertanian tradisional, serta nilai gotong royong
            (ngayah) yang tetap hidup hingga kini. Karang Dalem Tua menghadirkan
            pengalaman Bali yang autentik, tenang, dan sarat makna budaya.
          </article>
          <Link
            href="/tentang-kami"
            className="lg:mt-20 mt-12  bg-accent text-primary w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1"
          >
            <p className="text-body">Jelajahi</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="md:w-4 w-3"
            >
              <path
                fill="#2a3324"
                d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
              />
            </svg>
          </Link>
        </div>
      </section>
      <section
        id="proyek"
        className="w-screen lg:min-h-screen 2xl:min-h-261.75 min-h-160 px-0 md:px-0 py-20 bg-background"
      >
        <div className="px-12 md:px-0">
          <h2 className="text-primary text-heading2 text-center font-extrabold lg:mt-20 ">
            APA YANG KAMI KERJAKAN
          </h2>
          <p className="text-body text-center">
            Ragam Kegiatan yang Kami Jaga dan Kembangkan
          </p>
        </div>
        <div className="w-screen flex justify-center flex-wrap 2xl:gap-44 lg:gap-25 md:gap-12 gap-5 lg:mt-32 mt-12">
          {projects.map((p, index) => (
            <div key={p.title} className="">
              <figure className="relative 2xl:w-87.25 2xl:h-99.5 md:w-64 w-32 h-44 md:h-80">
                <Image
                  src={p.image}
                  alt={p.title}
                  sizes="(max-width: 759px) 128px, (max-width: 1024px) 256px, 349px"
                  width={2000}
                  height={1365}
                  className="object-cover w-full h-full rounded-tl-[80px] rounded-tr-[80px] rounded-br-0 rounded-bl-0"
                />
              </figure>
              <ScrollBtn
                href={p.href}
                className="text-body text-center underline text-sky-500 mt-8 block"
              >
                {p.title}
              </ScrollBtn>
            </div>
          ))}
        </div>
      </section>
      <section
        id="tradisi"
        className="w-screen lg:h-screen 2xl:h-270.75 md:min-h-140 min-h-90 grid grid-cols-2"
      >
        <figure className="col-span-1 relative w-full lg:h-screen 2xl:h-270.75 md:min-h-140 min-h-90">
          <Image
            src="/penjor.webp"
            alt="Penjor"
            sizes="50vw"
            width={1365}
            height={2000}
            className="object-cover w-full h-full"
          />
          <div className="overlay absolute w-full h-full inset-0 top-0 left-0 bg-black opacity-50 z-0" />
          <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-background text-center text-heading2">
              Penjor Galungan
            </h2>
            <ScrollBtn
              href="/tradisi#penjor"
              className="lg:mt-3 mt-8 mx-auto bg-transparent border-2 border-background text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1"
            >
              <p className="text-body">Jelajahi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="md:w-4 w-3"
              >
                <path
                  fill="#f8f7f2"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </ScrollBtn>
          </div>
        </figure>
        <figure className="col-span-1 relative lg:h-screen 2xl:h-270.75 md:min-h-140 min-h-90">
          <Image
            src="/ruang-1.webp"
            alt="Tata Ruang Pura"
            sizes="50vw"
            width={1365}
            height={2000}
            className="object-cover w-full h-full"
          />
          <div className="overlay absolute inset-0 top-0 w-full h-full bg-black opacity-35 z-0" />
          <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-background text-center text-heading2">
              Tata Ruang Pura
            </h2>
            <ScrollBtn
              href="/tradisi#tata-ruang"
              className="lg:mt-3 mt-8 mx-auto bg-transparent border-2 border-background text-background w-28 h-12 md:w-44 md:h-16 rounded-tl-[28px] rounded-tr-0 rounded-br-[28px] rounded-bl-0 flex items-center justify-center gap-1"
            >
              <p className="text-body">Jelajahi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="md:w-4 w-3"
              >
                <path
                  fill="#f8f7f2"
                  d="M598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L470.6 169.3C458.1 156.8 437.8 156.8 425.3 169.3C412.8 181.8 412.8 202.1 425.3 214.6L498.7 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L498.7 352L425.3 425.4C412.8 437.9 412.8 458.2 425.3 470.7C437.8 483.2 458.1 483.2 470.6 470.7L598.6 342.7z"
                />
              </svg>
            </ScrollBtn>
          </div>
        </figure>
      </section>
      <section
        id="alam"
        className="bg-background w-screen lg:h-screen 2xl:h-261.75 min-h-160 px-12 gap-12 grid grid-cols-2 lg:px-12 justify-items-center items-center"
      >
        <h2 className="mt-12 text-heading2 text-center col-span-2">
          SEKILAS PESONA ALAM KAMI
        </h2>
        <div className="col-span-2 md:col-span-1">
          <figure className="relative grid grid-cols-3 2xl:gap-3 lg:gap-1 gap-1">
            {views.map((v, index) => (
              <Image
                key={index}
                src={v}
                alt="Pesona Alam Desan Karang Dalem Tua"
                sizes="(max-width: 759px) 104px, (max-width: 1024px) 128px, (max-width: 1279px) 144px, 208px"
                width={1000}
                height={1000}
                className="object-cover aspect-square 2xl:w-52 2xl:h-52 lg:w-36 lg:h-36 md:w-32 md:h-32 w-26 h-26 col-span-1 rounded-xl md:rounded-4xl"
              />
            ))}
          </figure>
        </div>
        <div className="col-span-2 md:col-span-1 2xl:pe-32 lg:pe-12">
          <article className="text-body">
            Karang Dalem Tua menawarkan suasana pedesaan Bali yang alami,
            tenang, dan asri. Hamparan persawahan, aliran Sungai Ayung, serta
            kehidupan tradisional desa menciptakan pengalaman wisata yang
            autentik dan menenangkan.
            <br />
            <br />
            Berbagai aktivitas dapat dilakukan seperti trekking alam, wisata
            pertanian, eksplorasi budaya desa, serta menikmati panorama
            pedesaan. Waktu terbaik untuk berkunjung adalah pada musim kemarau,
            antara April hingga Oktober, ketika alam berada pada kondisi paling
            indah.
          </article>
        </div>
      </section>
      <section className="w-screen lg:h-170 md:h-150 h-120 lg:px-12 2xl:px-32 md:px-12 px-5 py-12">
        <Divider />
      </section>
    </main>
  );
}
