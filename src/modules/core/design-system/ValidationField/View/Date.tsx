import { Form, DatePicker } from "antd";
import React from "react";
import useFormField from "../utils/useFormField";import { MdOutlineEdit } from "react-icons/md";
import dayjs from "dayjs";

const Date = ({
  name,
  label,
  picker = "date",
  isDisabled,
  props,
  onChange,
  placeholder,
  className,
  no_label,
  label_icon,
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);

  const FormikValue = formik.values[name];
  const onCalendarChange = (value: any) => {
    formik.setFieldValue(name, value);
    // console.log(value,"value ");
  };

  const Formater = "YYYY/MM/DD";
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
        <DatePicker
          picker={picker}
          placeholder={t(`input.${placeholder}`)}
          allowClear
          className={`${className} w-100`}
          value={FormikValue ? FormikValue : null}
          size="large"
          onChange={onChange || onCalendarChange}
          disabled={isDisabled}
          format={Formater}
        />
        {/* <DatePicker onChange={onChange} /> */}
      </Form.Item>
    </div>
  );
};

export default Date;
