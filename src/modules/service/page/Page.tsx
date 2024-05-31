import Table from "../components/Table";
import { FaPlus } from "react-icons/fa";


import AddModalForm from "../components/Model/AddModel";
import EditModalForm from "../components/Model/EditModel";
import { useTranslation } from "react-i18next";
import useModalHandler from "../../core/hooks/useModalHandler";
import { ModalEnum } from "../enums/Model";

const TableHeader = () => {
  const { handel_open_model } = useModalHandler();
  const [t] = useTranslation();

  return (
    <div className="TableWithHeader">
      <header className="d-flex justify-content-between">

          <div className="Selects">
            <button
              onClick={() => handel_open_model(ModalEnum?.SERVICE_ADD)}
              className="add_button"
            >
              {t("practical.add")} {t("models.teacher")} <FaPlus />
            </button>
          </div>
    
      </header>

      <Table />

      <AddModalForm />
      <EditModalForm />
    </div>
  );
};

export default TableHeader;
