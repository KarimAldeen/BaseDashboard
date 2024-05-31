import React from "react";
import {
  useAddKeyToData,
  Table,
  useTranslation,
  usePagination,
} from ".";
import { Spin } from "antd";

const DataTable: React.FC<any> = ({
  response,
  useColumns,
  ...props
}) => {
  const data: any[] = response?.data?.data || [];
  const dataSource = useAddKeyToData(data);
  const columns = useColumns();
  const { pagination, handlePageChange } = usePagination(response?.data);
  const [t] = useTranslation();
  const getRowClassName = (record: any, index: number): string => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };
  const customDataSource = useAddKeyToData(props?.dataSource);
  return (
    <Table
      columns={columns}
      dataSource={props?.dataSource ? customDataSource : dataSource}
      rowClassName={(record, index) => getRowClassName(record, index)}
      className="DataTable"
      loading={{
        spinning: response?.isLoading,
        indicator: <Spin />,
        size: "large",
      }}
     
      pagination={{
        ...pagination,
        onChange: handlePageChange,
      }}
      {...props}
    />
  );
};

export default DataTable;
