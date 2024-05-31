import React, { useEffect } from "react";
import "./utils/ValidationField.scss";
import {
  Date,
  Time,
  File,
  DataRange,
  SelectField,
  Default,
  CheckboxField,
  MaltyFile,
  SearchField,
  TextField,
  DropFile,
} from "./View";
import { ValidationFieldProps, ValidationFieldType } from "./utils/types";
import LocalSearchField from "./View/LocalSearch";
import { useFormikContext } from "formik";
import { useValidationState } from "./utils/ValidationState";

const components: { [key: string]: React.FC<any> } = {
  Select: SelectField,
  Search: SearchField,
  LocalSearch: LocalSearchField,
  DataRange: DataRange,
  TextArea: TextField,
  Date: Date,
  Time: Time,
  File: File,
  DropFile: DropFile,
  MaltyFile: MaltyFile,
  Checkbox: CheckboxField,
};

const ValidationField: React.FC<ValidationFieldProps> = React.memo(({ type, ...otherProps }) => {
  const Component = components[type as ValidationFieldType];
  const formik = useFormikContext()
  const {Validation} = useValidationState(state=>state)
  console.log(Validation,"Validation");
  
    useEffect(() => {
      formik.setErrors(Validation);

    }, [Validation])
    
  if (!Component) {
    return <Default {...otherProps} />;
  }
  return <Component {...otherProps} />;
});

export default ValidationField;
