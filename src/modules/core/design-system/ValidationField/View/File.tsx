import { Button, Upload, UploadFile } from "antd";
import useFormField from "../utils/useFormField";import { UploadOutlined } from "@ant-design/icons";

const File = ({
  name,
  label,
  onChange,
  isDisabled,
  placholder,
  className,
  props,
}: any) => {
  const { formik, t, isError } = useFormField(name, props);
  let imageUrl = formik?.values?.[name] ?? null;
  console.log(imageUrl);
  console.log(typeof imageUrl === "string");

  const fileList: UploadFile[] = imageUrl
    ? [
        typeof imageUrl === "string"
          ? {
              uid: "-1",
              name: "",
              status: "done",
              url: imageUrl,
              thumbUrl: imageUrl,
            }
          : {
              uid: imageUrl.uid || "-1",
              name: imageUrl.name || "",
              status: "done",
              originFileObj: imageUrl,
            },
      ]
    : [];
  // console.log(1);

  const FilehandleChange = (value: any) => {
    // console.log(value,"filevalue");
    if (value.fileList.length === 0) {
      formik.setFieldValue(name, null);
    } else {
      formik.setFieldValue(name, value?.file?.originFileObj);
    }
  };
  const customRequest = async ({ onSuccess, no_label, label_icon }: any) => {
    onSuccess();
  };
  return (
    <div className="ValidationField upload_image_button ">
      <label htmlFor={name} className="text">
        {t(`input.${label || name}`)}
      </label>

      <Upload
        disabled={isDisabled}
        listType="picture"
        maxCount={1}
        fileList={[...fileList]}
        onChange={onChange || FilehandleChange}
        customRequest={customRequest}
        className={`${className} w-100`}
      >
        <Button
          className={isError ? "isError w-100 " : " w-100"}
          icon={<UploadOutlined />}
        >
          {placholder ?? t("input.Click_to_upload_the_image")}
        </Button>
        <div className="Error_color"> {isError ? "required" : ""}</div>
      </Upload>
    </div>
  );
};

export default File;
