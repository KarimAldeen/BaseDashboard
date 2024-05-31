import { Form, Input } from "antd";
import React from "react";
import useFormField from "../utils/useFormField";const { TextArea } = Input;

const TextAreaField = ({
  name,
  label,
  placeholder,
  isDisabled,
  onChange,
  props,
  type,
}: any) => {
  const { Field, formik, isError, errorMsg, t } = useFormField(name, props);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // console.log('Change:', e.target.value);
    formik.setFieldValue(name, e.target.value);
  };

  return (
    <div className="ValidationField w-100">
      <label htmlFor={name} className="text">
        {t(`input.${label ? label : name}`)}
      </label>
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
          onChange={onChange || handleChange}

          //  onChange={onChange ? onChange : handleChange}
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(TextAreaField);
