import * as Yup from "yup";

import dayjs from "dayjs";

export const getInitialValues = (objectToEdit: any): any => {
  // console.log(objectToEdit?.name,"objectToEdit");

  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? null,
    description: objectToEdit?.address ?? null,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    // description: Yup.string().required("validation.required"),
    title: Yup.string().required("validation.required"),
  });
};
