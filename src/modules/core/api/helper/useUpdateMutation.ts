import { useMutation, UseMutationResult } from "react-query";
import useAxios from "./useAxios";
import { HEADER_KEY } from "../config";
import { AxiosResponse } from "axios";

const useUpdateMutation = (
  key: string,
  url: string,
  message?: string,
): UseMutationResult<AxiosResponse, any, any, any> => {
  const axios = useAxios();

  return useMutation<AxiosResponse, any, any>(async (dataToSend) => {
    let request = null;
    let id = null;

    if (dataToSend instanceof FormData) {
      dataToSend.append("_method", "PUT");
      request = dataToSend;
      id = dataToSend.get("id");
    } else {
      request = { ...dataToSend, _method: "PUT" };
      id = dataToSend?.id;
    }

    const { data } = await axios.post(url + `/` + id, request, {
      headers: {
        "Content-Type": "multipart/form-data",
        [HEADER_KEY]: key,
      },
    });
    return data;
  });
};

export default useUpdateMutation;
