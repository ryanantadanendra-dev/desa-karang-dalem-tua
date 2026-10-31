import useSWR, { useSWRConfig } from "swr";
import axios from "@/lib/axios";
import { Dispatch, SetStateAction } from "react";
import { ValidationErrors } from "@/types/auth";
import { Social, SocialForm } from "@/types/social";
import { ListParams, Paginated } from "@/types/pagination";

type ActionProp<T> = T & {
  setErrors: Dispatch<SetStateAction<ValidationErrors>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

/**
 * Daftar social dengan pagination + aksi tambah, edit, hapus.
 * GET    /api/socials
 * POST   /api/socials
 * PUT    /api/socials/{id}
 * DELETE /api/socials/{id}
 */
export const useSocial = ({
  page = 1,
  perPage = 10,
  search = "",
}: ListParams = {}) => {
  const { mutate: globalMutate } = useSWRConfig();

  const {
    data: socials,
    error,
    isLoading,
  } = useSWR(
    ["/api/socials", page, perPage, search],
    () =>
      axios
        .get("/api/socials", {
          params: { page, per_page: perPage, search: search || undefined },
        })
        .then((res) => res.data as Paginated<Social>),
    { keepPreviousData: true },
  );

  const refresh = () =>
    globalMutate((key) => Array.isArray(key) && key[0] === "/api/socials");

  const createSocial = async ({
    setErrors,
    setIsLoading,
    ...form
  }: ActionProp<SocialForm>): Promise<boolean> => {
    setErrors({});
    setIsLoading(true);

    try {
      await axios.post("/api/socials", form);
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

  const updateSocial = async ({
    id,
    setErrors,
    setIsLoading,
    ...form
  }: ActionProp<SocialForm & { id: number }>): Promise<boolean> => {
    setErrors({});
    setIsLoading(true);

    try {
      await axios.put(`/api/socials/${id}`, form);
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

  const deleteSocial = async (id: number) => {
    await axios.delete(`/api/socials/${id}`);
    await refresh();
  };

  return {
    socials,
    error,
    isLoading,
    createSocial,
    updateSocial,
    deleteSocial,
  };
};
