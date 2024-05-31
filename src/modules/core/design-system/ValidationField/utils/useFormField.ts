import { useField, useFormikContext, FieldHookConfig, FieldInputProps, FieldMetaProps, FormikContextType } from 'formik';
import { useTranslation } from 'react-i18next';
import { Field } from 'formik';

// Define the return type for the useFormField hook
interface UseFormFieldReturn {
  Field: typeof Field;
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  formik: FormikContextType<any>;
  isError: any;
  errorMsg: string;
  t: any;
}

const useFormField = (name: string, props?: FieldHookConfig<any>): UseFormFieldReturn => {
  const [field, meta] = useField({ name, ...props });
  const { t } = useTranslation();
  const formik = useFormikContext<any>();
  const isError = meta.touched && meta.error;

  const errorMsg = meta.error ? t(meta.error.toString()) : '';

  return { Field, field, meta, formik, isError, errorMsg, t };
};

export default useFormField;
