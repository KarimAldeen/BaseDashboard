import { useQuery } from "react-query";
import useAxios from "./useAxios";
import { useLocation } from "react-router-dom";
import React from "react";
import { filterParams } from "../utils/filterParams";
import { PaginationParams } from "../utils/PaginationParams";

function useGetQuery(
  KEY: string | string[],
  url: string,
  params: any = {},
  options: any = {},
) {
  const axios = useAxios();

  const { show, pagination, querys, ...remainingParams } = params;

  const location = useLocation();

  const { page, per_page } = PaginationParams(location);

  const param_to_send = pagination
    ? { ...remainingParams, page: page, per_page: per_page }
    : { ...remainingParams };

  const filteredParams = filterParams(param_to_send);

  return useQuery(
    [KEY, filteredParams, show],
    async () => {
      const response = await axios.get(url + (show ? `/${show}` : ""), {
        params: filteredParams,
      });
      return response?.data ?? [];
    },
    options,
  );
}

export default useGetQuery;
