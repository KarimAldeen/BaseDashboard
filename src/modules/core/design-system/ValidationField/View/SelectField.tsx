import { Form, Select } from "antd";
import React from "react";
import useFormField from "../utils/useFormField";import { MdOutlineEdit } from "react-icons/md";
import { translateOptions } from "../utils/translatedOptions";

const SelectField = ({
  name,
  label,
  placeholder,
  isDisabled,
  option,
  isMulti,
  onChange,
  className,
  props,
  no_label,
  label_icon,
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const SelecthandleChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    formik.setFieldValue(name, value);
  };
  // console.log(name,"Select");
  

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
        <Select
          placeholder={t(
            `input.${placeholder ? placeholder : label ? label : name}`,
          )}
          disabled={isDisabled}
          options={translateOptions(option, t)}
          loading={option?.length < 1}
          size="large"
          className={`${className} ${isError ? "Select_error" : ""} w-100`}
          value={formik.values[name]}
          allowClear
          {...(isMulti && { mode: "multiple" })}
          onChange={onChange || SelecthandleChange}
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(SelectField);
