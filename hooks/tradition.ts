import useSWR, { useSWRConfig } from "swr";
import axios from "@/lib/axios";
import { Dispatch, SetStateAction } from "react";
import { FormErrors } from "@/types/validation";
import { tradition, TradisiForm } from "@/types/tradition";
import { ListParams, Paginated } from "@/types/pagination";

type ActionProp<T> = T & {
  setErrors: Dispatch<SetStateAction<FormErrors>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

// Route tulis dilindungi auth:sanctum, jadi ambil cookie CSRF dulu sebelum POST/PUT/DELETE
const csrf = () => axios.get("/sanctum/csrf-cookie");

/**
 * Daftar tradisi dengan pagination + aksi tambah, edit, hapus.
 * GET    /api/tradisi
 * POST   /api/tradisi
 * PUT    /api/tradisi/{id}
 * DELETE /api/tradisi/{id}
 */
export const useTradisi = ({
  page = 1,
  perPage = 10,
  search = "",
}: ListParams = {}) => {
  const { mutate: globalMutate } = useSWRConfig();

  const {
    data: tradisi,
    error,
    isLoading,
  } = useSWR(
    ["/api/tradisi", page, perPage, search],
    () =>
      axios
        .get("/api/tradisi", {
          params: { page, per_page: perPage, search: search || undefined },
        })
        .then((res) => res.data as Paginated<tradition>),
    { keepPreviousData: true },
  );

  // Muat ulang semua daftar tradisi (semua halaman/pencarian)
  const refresh = () =>
    globalMutate((key) => Array.isArray(key) && key[0] === "/api/tradisi");

  //   const createTradisi = async ({
  //     setErrors,
  //     setIsLoading,
  //     ...form
  //   }: ActionProp<TradisiForm>): Promise<boolean> => {
  //     setErrors({});
  //     setIsLoading(true);

  //     try {
  //       await csrf();
  //       await axios.post("/api/tradisi", form);
  //       await refresh();
  //       return true;
  //     } catch (error: any) {
  //       if (error?.response?.status !== 422) throw error;
  //       setErrors(error.response.data.errors);
  //       return false;
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  const updateTradisi = async ({
    id,
    setErrors,
    setIsLoading,
    ...form
  }: ActionProp<TradisiForm & { id: number }>): Promise<boolean> => {
    setErrors({});
    setIsLoading(true);

    try {
      await csrf();
      await axios.put(`/api/tradisi/${id}`, form);
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

  //   const deleteTradisi = async (id: number) => {
  //     await csrf();
  //     await axios.delete(`/api/tradisi/${id}`);
  //     await refresh();
  //   };

  return {
    tradisi,
    error,
    isLoading,
    updateTradisi,
  };
};
