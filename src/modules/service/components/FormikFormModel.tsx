import { Formik, Form } from "formik";
import React, { ReactNode } from "react";

interface FormValues {
  [key: string]: any;
}

interface FormikFormProps {
  handleSubmit: (values: any) => void;
  initialValues: FormValues;
  validationSchema: any;
  title?: string;
  children: ReactNode;
  ButtonName?: string;
}
const FormikFormModel: React.FC<FormikFormProps> = ({
  children,
  handleSubmit,
  initialValues,
  validationSchema,
}) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => <Form className="w-100">{children}</Form>}
      </Formik>
    </>
  );
};

export default FormikFormModel;
