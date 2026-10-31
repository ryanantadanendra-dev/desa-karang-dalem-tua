import BlogDetails from "@/components/BlogDetails";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import axios from "@/lib/axios";
import { isAxiosError } from "axios";

type Post = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

const getPost = cache(async (slug: string): Promise<Post | null> => {
  try {
    const { data } = await axios.get<{ data: Post }>(
      `/blogs/${encodeURIComponent(slug)}`,
    );
    return data.data; // jika API tidak dibungkus "data", ganti menjadi: return data
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) return null;
    throw error;
  }
});

// Ubah path gambar dari Laravel menjadi URL absolut
function resolveImage(image?: string | null) {
  if (!image) return "/desa-1.webp"; // fallback, relatif ke metadataBase
  if (image.startsWith("http")) return image;
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image.replace(/^\//, "")}`;
}

// Fallback deskripsi dari content (longText biasanya berisi HTML)
function toPlainText(html: string, max = 160) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max - 1).trim()}…` : text;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
      robots: { index: false, follow: false },
    };
  }

  const url = `/blog/${post.slug}`;
  const description = post.subtitle || toPlainText(post.content);
  const image = resolveImage(post.image);

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "id_ID",
      siteName: "Desa Karang Dalem Tua",
      title: post.title,
      description,
      url,
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}

type BlogPageProp = {
  params: Promise<{ slug: string }>;
};

const BlogPage = async ({ params }: BlogPageProp) => {
  const { slug } = await params;

  return (
    <main className="w-dvw min-h-screen py-12 overflow-x-hidden">
      <h1>Blog Page</h1>
      <BlogDetails slug={slug} />
    </main>
  );
};

export default BlogPage;
