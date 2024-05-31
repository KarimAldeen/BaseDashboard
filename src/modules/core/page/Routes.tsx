import { FaHome, FaMoneyBill } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { TCrudRoute, TMenuItem } from "../types/App";
import HomePage from '../../home/page/Page'
export const menuItems: TMenuItem[] = [

  {
    header: "sidebar.homepage",
    element: <HomePage/>,
    icon: <ImBooks />,
    text: "sidebar.homepage",
    path: `/`,
  }
];

export const CrudRoute: TCrudRoute[] = [ ]



export const AppRoutes: Record<string, string> = Object.fromEntries(
  menuItems.map((route) => [
    route.path,
    route.header ? route.header : route.text,
  ]),
);

export const CrudRoutes: Record<string, string> = Object.fromEntries(
  CrudRoute.map((route) => [route.path, route.header]),
);
export const search_array: { label: string; value: string }[] = menuItems
  .map((item: TMenuItem) => ({
    label: item.header as string,
    value: item.path as string,
  }));
