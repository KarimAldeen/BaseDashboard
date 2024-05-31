import { useLocation } from "react-router-dom";
import React from "react";
import { useColumns } from "./useTableColumns";
import { useGetService } from "../api/Service";
import DataTable from "../../core/components/table/DataTable";

const App: React.FC = () => {
  const response = useGetService({pagination: true,});

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;
