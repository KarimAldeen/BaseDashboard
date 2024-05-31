import { TableProps } from "antd";
import { useMemo } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const PaginationOptions = (dataWpagination: any) => {
  return useMemo(() => {
    if (!dataWpagination || !dataWpagination.data.pagination) return {};
    // console.log(dataWpagination,"dataWpagination");

    return {
      pageSize: dataWpagination?.data?.pagination.per_page,
      current: dataWpagination?.data?.pagination.current_page,
      total: dataWpagination?.data?.pagination.total_items,
      prevIcon: <IoMdArrowDropright color="#A098AE" size={30} />,
      nextIcon: <IoMdArrowDropleft color="#A098AE" size={30} />,
    };
  }, [dataWpagination]);
};

export const useTableOnChange = () => {
  const navigate = useNavigate();

  return (pagination: any, _filters: any, _sorter: any, _extra: any) => {
    if (pagination) {
      // navigate(`?page=${pagination.current}&per_page=${pagination.pageSize}`);
      navigate(`?page=${pagination.current}`);
    }
  };
};
