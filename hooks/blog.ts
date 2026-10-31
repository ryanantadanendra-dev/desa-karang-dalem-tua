import useSWR, { useSWRConfig } from "swr";
import axios from "@/lib/axios";
import { Dispatch, SetStateAction } from "react";
import { ValidationErrors } from "@/types/auth";
import { Blog, BlogForm } from "@/types/blog";
import { ListParams, Paginated } from "@/types/pagination";

type ActionProp<T> = T & {
  setErrors: Dispatch<SetStateAction<ValidationErrors>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

// Blog memakai upload gambar, jadi dikirim sebagai FormData
const toFormData = (form: BlogForm) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("subtitle", form.subtitle);
  data.append("content", form.content);
  if (form.image) data.append("image", form.image);
  return data;
};

/**
 * Daftar blog dengan pagination + aksi tambah, edit, hapus.
 * GET    /api/blogs
 * POST   /api/blogs
 * POST   /api/blogs/{id}  (_method=PUT, karena ada upload gambar)
 * DELETE /api/blogs/{id}
 */
export const useBlog = ({
  page = 1,
  perPage = 10,
  search = "",
}: ListParams = {}) => {
  const { mutate: globalMutate } = useSWRConfig();

  const {
    data: blogs,
    error,
    isLoading,
  } = useSWR(
    ["/api/blogs", page, perPage, search],
    () =>
      axios
        .get("/api/blogs", {
          params: { page, per_page: perPage, search: search || undefined },
        })
        .then((res) => res.data as Paginated<Blog>),
    { keepPreviousData: true },
  );

  // Muat ulang semua daftar blog (semua halaman/pencarian)
  const refresh = () =>
    globalMutate((key) => Array.isArray(key) && key[0] === "/api/blogs");

  const createBlog = async ({
    setErrors,
    setIsLoading,
    ...form
  }: ActionProp<BlogForm>): Promise<boolean> => {
    setErrors({});
    setIsLoading(true);

    try {
      await axios.post("/api/blogs", toFormData(form));
      await refresh();
      return true;
    } catch (error: any) {
      if (error?.response?.status !== 422) throw error;
      setErrors(error.response.data.errors);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateBlog = async ({
    id,
    setErrors,
    setIsLoading,
    ...form
  }: ActionProp<BlogForm & { id: number }>): Promise<boolean> => {
    setErrors({});
    setIsLoading(true);

    try {
      const data = toFormData(form);

      await axios.post(`/api/blogs/${id}`, data);
      await refresh();
      return true;
    } catch (error: any) {
      if (error?.response?.status !== 422) throw error;
      setErrors(error.response.data.errors);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBlog = async (id: number) => {
    await axios.delete(`/api/blogs/${id}`);
    await refresh();
  };

  return { blogs, error, isLoading, createBlog, updateBlog, deleteBlog };
};

/**
 * Detail satu blog berdasarkan slug.
 * GET /api/blogs/{slug}
 */
export const useBlogDetail = (slug?: string) => {
  const { data, error, isLoading } = useSWR(
    slug ? `/api/blogs/${slug}` : null,
    () => axios.get(`/api/blogs/${slug}`).then((res) => res.data.data as Blog),
  );

  return { blog: data, error, isLoading };
};
