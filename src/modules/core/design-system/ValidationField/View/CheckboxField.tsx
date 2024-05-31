import React from "react";
import useFormField from "../utils/useFormField";
import { Checkbox, Form } from "antd";

const CheckboxField = ({
  name,
  label,
  isDisabled,
  onChange,
  Group,
  className,
  props,
  no_label,
  label_icon,
}: any) => {
  const { t, formik, isError, errorMsg } = useFormField(name, props);
  const CheckboxhandleChange = (value: any) => {
    formik.setFieldValue(name, value?.target?.checked);
  };
  return (
    <div className={Group ? "d-inline mt-3 Checkboxs" : ``}>
      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
        <Checkbox
          onChange={onChange || CheckboxhandleChange}
          disabled={isDisabled}
          checked={formik.values[name] ?? false}
          className={className}
        >
          {t(`input.${label ? label : name}`)}
        </Checkbox>
      </Form.Item>
    </div>
  );
};

export default CheckboxField;
