import { Pagination } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const PaginationBody = ({ data }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pagination = location?.search || "";
  const currentPage = parseInt(
    new URLSearchParams(location.search).get("page") || "1",
    10,
  );
  const pageSize = parseInt(
    new URLSearchParams(location.search).get("per_page") || "8",
    10,
  );

  const [searchParams] = useSearchParams();
  const onChange = (page: number, pageSize?: number) => {
    navigate(
      `?page=${page}&per_page=${pageSize || data?.per_page}&search=${searchParams.get("search")}`,
      { replace: true },
    );
  };

  const onShowSizeChange = (current: number, pageSize: number) => {
    navigate(
      `?page=${current}&per_page=${pageSize}&search=${searchParams.get("search")}`,
      { replace: true },
    );
  };

  return (
    <Pagination
      className="text-center mt-3 paginateStyle"
      total={data}
      showTotal={(total: any) => `Total ${total} items`}
      pageSize={pageSize}
      pageSizeOptions={[8, 16, 24, 32, 40]}
      defaultCurrent={currentPage}
      current={currentPage} // Adding this line will set the current page correctly
      onChange={onChange}
      onShowSizeChange={onShowSizeChange}
    />
  );
};
