
import useGetQuery from "../../core/api/helper/useGetQuery";

import useAddMutation from "../../core/api/helper/useAddMutation"
import useDeleteMutation from "../../core/api/helper/useDeleteMutation"
import useUpdateMutation from "../../core/api/helper/useUpdateMutation";
  
const API = {
  ADD: `service`,
  GET_ALL: `service`,
  DELETE: `service`,
  UPDATE: `service`,

};
const KEY = "service"

  
export const useGetService = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);

export const useAddService = () => useAddMutation(KEY, API.ADD);
export const useUpdateService = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteService = () =>useDeleteMutation(KEY, API.DELETE);
