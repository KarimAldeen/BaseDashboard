import { Form, TimePicker } from "antd";
import React from "react";
import useFormField from "../utils/useFormField";import { MdOutlineEdit } from "react-icons/md";
import dayjs from "dayjs";

const Time = ({
  name,
  label,
  className,
  isDisabled,
  onChange,
  props,
  placeholder,
  no_label,
  label_icon,
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const onCalendarChange = (value: any) => {
    formik.setFieldValue(name, value);
  };

  const Formater = "H:mm";
  const FormikValue = formik.values[name];

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
        <TimePicker
          allowClear
          className={`${className} w-100`}
          size="large"
          value={FormikValue ? dayjs(FormikValue, Formater) : null}
          onChange={onChange || onCalendarChange}
          disabled={isDisabled}
          placeholder={t(
            `input.${placeholder ? placeholder : label ? label : name}`,
          )}
          format={Formater}
          needConfirm={false}
        />
      </Form.Item>
    </div>
  );
};

export default Time;
