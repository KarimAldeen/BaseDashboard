import { Form, DatePicker } from "antd";

import React from "react";
import useFormField from "../utils/useFormField";import { MdOutlineEdit } from "react-icons/md";

const { RangePicker } = DatePicker;

const DataRange = ({
  name,
  label,
  Format,
  props,
  onChange,
  isDisabled,
  placeholder,
  className,
  no_label,
  label_icon,
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const onCalendarChange = (value: any) => {
    formik.setFieldValue(name, value);
  };
  return (
    <div className="ValidationField w-100 ">
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
        <RangePicker
          placeholder={placeholder}
          size="large"
          allowClear
          className={`${className} w-100`}
          format={Format}
          onChange={onChange || onCalendarChange}
          disabled={isDisabled}
          defaultValue={formik.values[name]}
        />
      </Form.Item>
    </div>
  );
};

export default DataRange;
