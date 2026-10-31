"use client";

import { useState } from "react";
import { useSocial } from "@/hooks/social";
import { ValidationErrors } from "@/types/auth";
import { Social } from "@/types/social";

type Props = {
  social: Social | null; // null = tambah baru, ada isi = edit
  onClose: () => void;
};

const input =
  "mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#4C5BD4] focus:ring-2 focus:ring-[#4C5BD4]/20";

export default function SocialFormModal({ social, onClose }: Props) {
  const { createSocial, updateSocial } = useSocial();

  const [platform, setPlatform] = useState(social?.platform ?? "");
  const [link, setLink] = useState(social?.link ?? "");
  const [text, setText] = useState(social?.text ?? "");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = social
      ? await updateSocial({
          id: social.id,
          platform,
          link,
          text,
          setErrors,
          setIsLoading,
        })
      : await createSocial({ platform, link, text, setErrors, setIsLoading });

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
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-6"
      >
        <h2 className="text-lg font-semibold">
          {social ? "Edit social media" : "Tambah social media"}
        </h2>

        <label className="block text-sm font-medium">
          Platform
          <input
            className={input}
            value={platform}
            placeholder="Instagram"
            onChange={(e) => setPlatform(e.target.value)}
          />
          {err("platform")}
        </label>

        <label className="block text-sm font-medium">
          Link
          <input
            className={input}
            value={link}
            placeholder="https://instagram.com/namabrand"
            onChange={(e) => setLink(e.target.value)}
          />
          {err("link")}
        </label>

        <label className="block text-sm font-medium">
          Link
          <input
            className={input}
            value={text}
            placeholder="@instagram"
            onChange={(e) => setText(e.target.value)}
          />
          {err("text")}
        </label>

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
