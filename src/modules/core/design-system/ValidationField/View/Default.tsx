import { Form, Input } from "antd";
import React from "react";
import useFormField from "../utils/useFormField";import { MdOutlineEdit } from "react-icons/md";

const Default = ({
  name,
  label,
  placeholder,
  isDisabled,
  onChange,
  props,
  type,
  no_label,
  label_icon,
}: any) => {
  const { Field, formik, isError, errorMsg, t } = useFormField(name, props);

  return (
    <div className="ValidationField w-100">
      {no_label ? (
        <label htmlFor={name} className="text">
          <span>empty</span>
        </label>
      ) : label_icon ? (
        <div className="LabelWithIcon">
          <label htmlFor={name} className="text">
            {t(`input.${label ? label : name}`)}
          </label>
          <MdOutlineEdit size={22} style={{ color: "#A098AE" }} />
        </div>
      ) : (
        <label htmlFor={name} className="text">
          {t(`input.${label ? label : placeholder ? placeholder : name}`)}
        </label>
      )}

      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
        <Field
          as={Input}
          type={type ?? "text"}
          placeholder={t(
            `input.${placeholder ? placeholder : label ? label : name}`,
          )}
          name={name}
          disabled={isDisabled}
          size="large"

          //  onChange={onChange ? onChange : handleChange}
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(Default);
