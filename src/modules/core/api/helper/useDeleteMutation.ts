import { useMutation, UseMutationResult } from "react-query";
import useAxios from "./useAxios";
import { HEADER_KEY } from "../config";
import { AxiosResponse } from "axios";

type DataToSend = {
  id: number | string;
};

function useDeleteMutation(
  key: any,
  url: string,
  message?: string,
): UseMutationResult<AxiosResponse, unknown, DataToSend, unknown> {
  const axios = useAxios();
  return useMutation<AxiosResponse, unknown, DataToSend, unknown>(
    async (dataToSend) => {
      const { data } = await axios.delete(url + `/` + dataToSend?.id, {
        headers: {
          [HEADER_KEY]: key,
        },
      });
      return data;
    },
  );
}

export default useDeleteMutation;
