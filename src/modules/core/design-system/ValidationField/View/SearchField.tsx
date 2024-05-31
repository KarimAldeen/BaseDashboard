import { Form, Select } from "antd";
import React, { useEffect, useState } from "react";
import useFormField from "../utils/useFormField";import { useNavigate } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";

const SearchField = ({
  name,
  label,
  placeholder,
  isDisabled,
  searchBy,
  option,
  isMulti,
  onChange,
  className,
  props,
  no_label,
  label_icon,
}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    const searchParams = new URLSearchParams(window?.location?.search);
    setSearchQuery(searchParams?.get("search") || "");
  }, []);

  const SelecthandleChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    formik?.setFieldValue(name, value);
  };
  const SearchHandleChange = (value: any) => {
    navigate(`${window?.location?.pathname}?${searchBy}=${value}`, {
      replace: true,
    });
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
        <Select
          placeholder={t(`input.${placeholder ? placeholder : name}`)}
          disabled={isDisabled}
          options={option}
          size="large"
          className={`${className} w-100`}
          value={formik.values[name]}
          allowClear
          {...(isMulti && { mode: "multiple" })}
          onChange={onChange || SelecthandleChange}
          showSearch
          optionFilterProp="label"
          onSearch={SearchHandleChange}
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(SearchField);
