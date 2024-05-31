import { Col, Row } from "reactstrap";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useModalState } from "../../../core/state/Modal";
import ValidationField from "../../../core/design-system/ValidationField/ValidationField";

const Form = () => {
  const formik = useFormikContext();
  const { isOpen } = useModalState((state) => state);

  useEffect(() => {
    if (isOpen === "") {
      formik.setErrors({});
    }
    if (isOpen === "isSuccess") {
      formik.setErrors({});
      formik.resetForm();
    }
  }, [isOpen]);
  return (
    <Row className="w-100">
      <Col>
        <ValidationField placeholder="title" label="title" name="title" />
      </Col>
      <Col>
        <ValidationField placeholder="description" label="description" name="description" />
      </Col>
    </Row>
  );
};

export default Form;
