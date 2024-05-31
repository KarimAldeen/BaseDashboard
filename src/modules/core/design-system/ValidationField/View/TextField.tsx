import { Form, Input } from "antd";
import React from "react";
import useFormField from "../utils/useFormField";import { MdOutlineEdit } from "react-icons/md";
const { TextArea } = Input;

const TextField = ({
  name,
  label,
  placeholder,
  isDisabled,
  onChange,
  props,
  no_label,
  label_icon,
}: any) => {
  const { Field, formik, isError, errorMsg, t } = useFormField(name, props);
  const TextFieldhandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // console.log('Change:', e.target.value);
    formik.setFieldValue(name, e.target.value);
  };
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
          {t(`input.${label ? label : name}`)}
        </label>
      )}

      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
        <Field
          as={TextArea}
          placeholder={t(`input.${placeholder ? placeholder : name}`)}
          name={name}
          disabled={isDisabled}
          size="large"
          // showCount
          maxLength={1000}
          onChange={onChange || TextFieldhandleChange}
          style={{ height: 100, resize: "none" }}
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(TextField);
