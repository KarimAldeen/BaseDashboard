
import { BaseURL, HEADER_KEY } from "../config";
import AxiosBuilder from "./AxiosBuilder";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useAuthState from "../../state/AuthState";
import { useValidationState } from "../../design-system/ValidationField/utils/ValidationState";
import { AxiosQueryEnum, AxiosStatusEnum } from "../../enum/Axios";

function useAxios() {
  const { isAuthenticated, token } = useAuthState();
  const { setValidation } = useValidationState((state) => state);
  const [t] = useTranslation();
  const queryClient = useQueryClient();

  const { logout } = useAuthState();
  const navigate = useNavigate();

  const buildAxios = new AxiosBuilder()
    .withBaseURL(BaseURL)
    .withResponseType("json")
    .withTimeout(120000);

  if (isAuthenticated) {
    buildAxios.withHeaders({

      Authorization: "Bearer " + token,
    });
  }

  const build_Axios = buildAxios.build();

  build_Axios.interceptors.response.use(
    function (response: any) {
      const responseMsg = response?.data?.message;
      const method = response.config.method;

      const key = response.config.headers[HEADER_KEY];
      const ResponseMessage =
        responseMsg || t("validation.the_possess_done_successful");
      if (method !== AxiosQueryEnum?.GET) {
        queryClient.invalidateQueries(key);
        toast.success(ResponseMessage);
        setValidation([{}]);
      }
      return response;
    },
    function (error) {
      const status = error?.request?.status;
      const errorMsg = error?.response?.data?.message;
      const errorField = error?.response?.data;
      const method = error.config.method;

      if (status === AxiosStatusEnum.VALIDATION) {
        setValidation(errorMsg ?? errorField);
        const errorMessage = errorMsg || t("validation.some_thing_went_wrong");
        console.log(errorMessage, "errorMessage");
        toast.error(errorMessage);
      }
      if (status === AxiosStatusEnum.AUTHENTICATED) {
        logout();
        navigate("/auth");
      }

      if (method !== AxiosQueryEnum?.GET) {
        const errorMessage = errorMsg || t("validation.some_thing_went_wrong");
        toast.error(errorMessage);
        return Promise.reject(error);
      }
    },
  );
  return build_Axios;

  // return buildAxios.build();
}

export default useAxios;
