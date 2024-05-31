import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import useFormField from "../utils/useFormField";import { ImageBaseURL } from "../../../api/config";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const DropFile = ({
  name,
  label,
  onChange,
  isDisabled,
  placholder,
  className,
  props,
  no_label,
  label_icon,
}: any) => {
  const { formik, t, isError } = useFormField(name, props);
  let FormikName = formik?.values[name];

  const FormikValue =
    typeof FormikName === "string"
      ? ImageBaseURL + FormikName
      : FormikName instanceof File
        ? URL.createObjectURL(FormikName)
        : "";

  const [imageUrl, setImageUrl] = useState<any>(FormikValue ?? "");

  useEffect(() => {
    setImageUrl(FormikName);
  }, [FormikName]);

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setImageUrl(url);
      });
    }
    formik.setFieldValue(name, info.file.originFileObj);
  };
  const customRequest = async ({ onSuccess }: any) => {
    onSuccess();
  };
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <div className={`CustomFile  ${isError ? "uploader_error" : ""} `}>
        {t("input.drag_and_drop_or_click_here_to_select_the_file")}
      </div>
    </button>
  );

  return (
    <div className="ValidationField w-100">
      <label htmlFor={name} className="text">
        {t(`input.${label || name}`)}
      </label>
      <Upload
        name="avatar"
        listType="picture-card"
        className={`avatar-uploader ${isError ? "uploader_error" : ""} ${className}`}
        showUploadList={false}
        customRequest={customRequest}
        onChange={onChange || handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default DropFile;
