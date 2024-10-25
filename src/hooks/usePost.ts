import { useMutation, UseMutationOptions } from "react-query";
import { AxiosResponse } from "axios";
import api from "../api/api";

const usePost = <Variables = any, Response = any, Error = any>(
  url: string,
  options?: UseMutationOptions<AxiosResponse<Response>, Error, Variables>
) =>
  useMutation<AxiosResponse<Response>, Error, Variables>(
    async (data) => await api.post(url, data),
    {
      onError: (err: any) => {
        if (err?.message && !options) console.error(err?.message);
      },
      onSuccess: (res: any) => {
        if (res?.message && !options) console.log(res?.message);
      },
      ...options,
    }
  );

export default usePost;
