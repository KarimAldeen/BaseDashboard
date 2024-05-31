import { Space, TableColumnsType, Tooltip } from "antd";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useModalState } from "../../core/state/Modal";
import { useObjectToEdit } from "../../core/state/ObjectToEditState";
import { ModalEnum } from "../enums/Model";

export const useColumns = () => {
  const { setIsOpen } = useModalState((state) => state);

  const { set_object_to_edit } = useObjectToEdit((state) => state);
  const handelDelete = (record: any) => {
    set_object_to_edit(record);
    setIsOpen(ModalEnum?.SERVICE_DELETE);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<any> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: t("columns.name"),
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: t("columns.address"),
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: t("columns.contact_information"),
      dataIndex: "contact_information",
      key: "contact_information",
      align: "center",
      render: (text, record, index) => {
        return <>{record?.contact_information}</>;
      },
    },
    {
      title: "",
      key: "actions",
      align: "end",
      width: "25vw",
      render: (text, record, index) => {
        const handleEdit = (record: any) => {
          // console.log(record,"record");
          set_object_to_edit(record);
          setIsOpen(ModalEnum?.SERVICE_EDIT);
        };

        const className =
          index % 2 === 0 ? "even-row buttonAction" : "odd-row buttonAction";

        return (
          <Space size="middle" className={className}>
              <Tooltip
                placement="top"
                title={t("practical.edit")}
                color="#E0E0E0"
              >
                <MdOutlineEdit
                  size={22}
                  style={{ color: "#A098AE" }}
                  onClick={() => handleEdit(record)}
                />
              </Tooltip>
        

              <RiDeleteBin6Fill
                onClick={() => handelDelete(record)}
                size={22}
                style={{ color: "#C11313" }}
              />
        
          </Space>
        );
      },
    },
  ];

  return columns;
};
