import React, { useEffect } from "react";
import { Modal, Spin } from "antd";
import ModelBody from "./Add";
import { getInitialValues, getValidationSchema } from "./formUtil";

import { useTranslation } from "react-i18next";
import { useModalState } from "../../../core/state/Modal";
import { useObjectToEdit } from "../../../core/state/ObjectToEditState";
import { useAddService } from "../../api/Service";
import { ModalEnum } from "../../enums/Model";
import FormikFormModel from "../FormikFormModel";

const ModalForm: React.FC = () => {
  const { isOpen, setIsOpen } = useModalState((state) => state);
  const { mutate, isSuccess, isLoading } = useAddService();
  const { set_object_to_edit } = useObjectToEdit();
  useEffect(() => {
    if (isSuccess) {
      setIsOpen("isSuccess");
      set_object_to_edit({});
    }
  }, [setIsOpen, isSuccess]);

  const handleSubmit = (values: any) => {
    // const contactInformationJson = JSON.stringify({
    //     phone_number: values?.number
    // });

    mutate({
      name: values?.name,
      contact_information: values?.number,
      address: values?.address,
    });
  };

  const handleCancel = () => {
    setIsOpen("");
    set_object_to_edit({});
  };

  const [t] = useTranslation();
  return (
    <>
      <Modal
        className="ModalForm"
        centered
        width={"60vw"}
        footer={null}
        open={isOpen === ModalEnum?.SERVICE_ADD}
        onCancel={handleCancel}
      >
        <FormikFormModel
          handleSubmit={handleSubmit}
          initialValues={getInitialValues([])}
          validationSchema={getValidationSchema}
        >
          <header>
            {t("practical.add")} {t("models.teacher")}{" "}
          </header>
          <main className="main_modal w-100">
            <ModelBody />
            <div className="buttons">
              <div onClick={handleCancel}>{t("practical.back")}</div>
              <button disabled={isLoading} type="submit">
                {t("practical.add")}
                {isLoading && (
                  <span className="Spinier_Div">
                    <Spin />
                  </span>
                )}
              </button>
            </div>
          </main>
        </FormikFormModel>
      </Modal>
    </>
  );
};

export default ModalForm;
