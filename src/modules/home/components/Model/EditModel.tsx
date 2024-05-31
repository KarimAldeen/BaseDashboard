import React, { useEffect } from "react";
import { Modal, Spin } from "antd";
import ModelBody from "./Edit";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { useTranslation } from "react-i18next";
import { useObjectToEdit } from "../../../core/state/ObjectToEditState";
import { useModalState } from "../../../core/state/Modal";
import { useUpdateService } from "../../api/Service";
import { ModalEnum } from "../../enums/Model";
import FormikFormModel from "../FormikFormModel";

const ModalForm: React.FC = () => {
  const { isOpen, setIsOpen } = useModalState((state) => state);
  const { object_to_edit, set_object_to_edit } = useObjectToEdit(
    (state) => state,
  );
  const { mutate, isSuccess, isLoading } = useUpdateService();
  // console.log(object_to_edit,"object_to_edit");
  const handleSubmit = (values: any) => {
    // const contactInformationJson = JSON.stringify({
    //     phone_number: values?.number
    // });
    mutate({
      id: values?.id,
      name: values?.name,
      contact_information: values?.number,
      address: values?.address,
    });
  };
  const handleCancel = () => {
    setIsOpen("");
    set_object_to_edit({});
  };

  useEffect(() => {
    if (isSuccess) {
      setIsOpen("");
    }
  }, [setIsOpen, isSuccess]);
  const [t] = useTranslation();
  return (
    <Modal
      className="ModalForm"
      centered
      width={"60vw"}
      footer={null}
      open={isOpen === ModalEnum?.SERVICE_EDIT}
      onCancel={handleCancel}
    >
      {object_to_edit && (
        <FormikFormModel
          handleSubmit={handleSubmit}
          initialValues={getInitialValues(object_to_edit)}
          validationSchema={getValidationSchema}
        >
          <header>
            {" "}
            {t("practical.edit")} {t("practical.details")} {t("models.Services")}{" "}
          </header>
          <main className="main_modal w-100">
            <ModelBody />
            <div className="buttons">
              <div onClick={handleCancel}>{t("practical.back")}</div>
              <button disabled={isLoading} type="submit">
                {t("practical.edit")}
                {isLoading && (
                  <span className="Spinier_Div">
                    <Spin />
                  </span>
                )}
              </button>
            </div>
          </main>
        </FormikFormModel>
      )}
    </Modal>
  );
};

export default ModalForm;
