import Header from "@/components/Header";
import BlogsList from "@/components/BlogsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Berita, cerita, dan kegiatan terbaru dari Desa Karang Dalem Tua, Bali: pengkaderan Jalak Bali, lebah madu, biogas, kerajinan, dan tradisi desa.",
  keywords: [
    "blog Desa Karang Dalem Tua",
    "berita desa Bali",
    "kegiatan desa",
    "artikel desa wisata Bali",
  ],
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": "/blog/feed.xml", // hapus jika belum ada RSS
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Desa Karang Dalem Tua",
    title: "Blog | Desa Karang Dalem Tua",
    description: "Berita dan cerita terbaru dari Desa Karang Dalem Tua, Bali.",
    url: "/blog",
    images: [
      {
        url: "/patung-3.webp",
        width: 1200,
        height: 630,
        alt: "Blog Desa Karang Dalem Tua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Desa Karang Dalem Tua",
    description: "Berita dan cerita terbaru dari Desa Karang Dalem Tua, Bali.",
    images: ["/patung-3.webp"],
  },
};

const BlogsPage = () => {
  return (
    <>
      <Header text="KISAH PILIHAN" />
      <main className="w-dvw min-h-screen py-12 overflow-x-hidden">
        <h2 className="text-heading text-4xl font-bold ms-7">
          Semua Artikel Kami
        </h2>
        <BlogsList />
      </main>
    </>
  );
};

export default BlogsPage;
