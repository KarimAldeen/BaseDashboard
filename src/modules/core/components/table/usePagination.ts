import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Data {
  meta: any;
}

const usePagination = (data: Data) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pagination, setPagination] = useState<any>({
    current: data?.meta?.current_page || 1,
    pageSize: data?.meta?.per_page || 10,
    total: data?.meta?.total || 0,
  });

  useEffect(() => {
    setPagination({
      current: data?.meta?.current_page || 1,
      pageSize: data?.meta?.per_page || 10,
      total: data?.meta?.total || 0,
    });
  }, [data]);

  
  const handlePageChange = (page: number) => {
    navigate(`?page=${page}`);
  };

  return { pagination, handlePageChange };
};

export default usePagination;
