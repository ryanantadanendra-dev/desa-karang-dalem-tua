"use client";

import { useState } from "react";
import { useBlog } from "@/hooks/blog";
import { Blog } from "@/types/blog";
import { FormErrors } from "@/types/validation";

type Props = {
  blog: Blog | null; // null = tambah baru, ada isi = edit
  onClose: () => void;
};

const input =
  "mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#4C5BD4] focus:ring-2 focus:ring-[#4C5BD4]/20";

export default function BlogFormModal({ blog, onClose }: Props) {
  const { createBlog, updateBlog } = useBlog();

  const [title, setTitle] = useState(blog?.title ?? "");
  const [subtitle, setSubtitle] = useState(blog?.subtitle ?? "");
  const [content, setContent] = useState(blog?.content ?? "");
  const [image, setImage] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = blog
      ? await updateBlog({
          id: blog.id,
          title,
          subtitle,
          content,
          image,
          setErrors,
          setIsLoading,
        })
      : await createBlog({
          title,
          subtitle,
          content,
          image,
          setErrors,
          setIsLoading,
        });

    if (ok) onClose();
  };

  const err = (field: string) =>
    errors[field]?.[0] ? (
      <p className="mt-1 text-xs text-rose-600">{errors[field][0]}</p>
    ) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <form
        onSubmit={onSubmit}
        className="max-h-[90vh] w-full max-w-lg space-y-4 overflow-y-auto rounded-xl bg-white p-6"
      >
        <h2 className="text-lg font-semibold">
          {blog ? "Edit blog" : "Tambah blog"}
        </h2>

        <label className="block text-sm font-medium">
          Judul
          <input
            className={input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {err("title")}
        </label>

        <label className="block text-sm font-medium">
          Subjudul
          <input
            className={input}
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          {err("subtitle")}
        </label>

        <label className="block text-sm font-medium">
          Isi
          <textarea
            className={input}
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {err("content")}
        </label>

        <div className="text-sm font-medium">
          Gambar{" "}
          {blog && (
            <span className="font-normal text-slate-400">
              (kosongkan jika tidak diganti)
            </span>
          )}
          {blog?.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={blog.image_url}
              alt=""
              className="mt-2 h-20 w-32 rounded-lg object-cover"
            />
          )}
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="mt-2 block w-full text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm"
            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
          />
          {err("image")}
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-[#4C5BD4] px-4 py-2 text-sm font-medium text-white hover:bg-[#3F4DBF] disabled:opacity-60"
          >
            {isLoading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}
