export type Blog = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  image_url: string | null;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type BlogForm = {
  title: string;
  subtitle: string;
  content: string;
  image?: File | null; // wajib saat tambah, opsional saat edit
};
