import { PROJECT_NAME } from "../config/config";
import { AppRoutes, CrudRoutes } from "../page/Routes";

export const usegetTitleFromRoute = (path: any) => {
  if (AppRoutes[path]) {
    return `${PROJECT_NAME} | ${AppRoutes[path]}`;
  } else if (CrudRoutes[path]) {
    return `${PROJECT_NAME} | ${CrudRoutes[path]}`;
  }
};
