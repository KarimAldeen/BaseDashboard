import { useMutation, UseMutationResult } from "react-query";
import useAxios from "./useAxios";
import { HEADER_KEY } from "../config";
import { AxiosResponse } from "axios";

function useAddMutation(
  key: string,
  url: string,
  message?: string,
): UseMutationResult<AxiosResponse, unknown, any, unknown> {
  const axios = useAxios();
  return useMutation<AxiosResponse, unknown, any, unknown>(
    async (dataToSend) => {
      // const filterDataToSend = filterData(dataToSend);

      const { data } = await axios.post(url, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          [HEADER_KEY]: key,
        },
      });
      return data;
    },
  );
}

export default useAddMutation;
