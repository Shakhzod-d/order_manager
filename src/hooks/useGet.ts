/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useQuery, UseQueryOptions } from "react-query";
import { AxiosResponse } from "axios";
import api from "../api/api";

const useGet = <Data = any, Error = any>(
  url: string,
  params: object = {},
  options: UseQueryOptions<AxiosResponse<Data>, Error, null> = {}
) =>
  // @ts-ignore
  useQuery([url, params], async () => api.get<Data>(url, { params }), {
    ...options,
  });

export default useGet;
