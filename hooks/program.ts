import useSWR, { useSWRConfig } from "swr";
import axios from "@/lib/axios";
import { Dispatch, SetStateAction } from "react";
import { FormErrors } from "@/types/validation";
import { Program, ProgramForm } from "@/types/program";
import { ListParams, Paginated } from "@/types/pagination";

type ActionProp<T> = T & {
  setErrors: Dispatch<SetStateAction<FormErrors>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

// Route tulis dilindungi auth:sanctum, jadi ambil cookie CSRF dulu sebelum POST/PUT/DELETE
const csrf = () => axios.get("/sanctum/csrf-cookie");

/**
 * Daftar programs dengan pagination + aksi tambah, edit, hapus.
 * GET    /api/programs
 * POST   /api/programs
 * PUT    /api/programs/{id}
 * DELETE /api/programs/{id}
 */
export const usePrograms = ({
  page = 1,
  perPage = 10,
  search = "",
}: ListParams = {}) => {
  const { mutate: globalMutate } = useSWRConfig();

  const {
    data: programs,
    error,
    isLoading,
  } = useSWR(
    ["/api/programs", page, perPage, search],
    () =>
      axios
        .get("/api/programs", {
          params: { page, per_page: perPage, search: search || undefined },
        })
        .then((res) => res.data as Paginated<Program>),
    { keepPreviousData: true },
  );

  // Muat ulang semua daftar programs (semua halaman/pencarian)
  const refresh = () =>
    globalMutate((key) => Array.isArray(key) && key[0] === "/api/programs");

  //   const createProgram = async ({
  //     setErrors,
  //     setIsLoading,
  //     ...form
  //   }: ActionProp<ProgramForm>): Promise<boolean> => {
  //     setErrors({});
  //     setIsLoading(true);

  //     try {
  //       await csrf();
  //       await axios.post("/api/programs", form);
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

  const updateProgram = async ({
    id,
    setErrors,
    setIsLoading,
    ...form
  }: ActionProp<ProgramForm & { id: number }>): Promise<boolean> => {
    setErrors({});
    setIsLoading(true);

    try {
      await csrf();
      await axios.put(`/api/programs/${id}`, form);
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

  //   const deleteProgram = async (id: number) => {
  //     await csrf();
  //     await axios.delete(`/api/programs/${id}`);
  //     await refresh();
  //   };

  return {
    programs,
    error,
    isLoading,
    updateProgram,
  };
};
