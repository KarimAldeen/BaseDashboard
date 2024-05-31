export type ValidationFieldType =
  | "text"
  | "Select"
  | "LocalSearch"
  | "Search"
  | "DataRange"
  | "Date"
  | "Time"
  | "File"
  | "MaltyFile"
  | "DropFile"
  | "Checkbox"
  | "number"
  | "password"
  | "email"
  | "TextArea";

export interface ValidationFieldPropsText {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "text";
  placeholder?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
}

export interface ValidationFieldPropsSelect {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "Select";
  placeholder?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: any;
  dir?: "ltr" | "rtl";
  option: any[];
  isMulti?: boolean;
}

export interface ValidationFieldPropsLocalSearch {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "LocalSearch";
  placeholder?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
  option: any[];
  isMulti?: boolean;
}
export interface ValidationFieldPropsSearch {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "Search";
  placeholder?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
  option: any[];
  isMulti?: boolean;
  searchBy: string;
}
export interface ValidationFieldPropsDataRange {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "DataRange";
  placeholder?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
  Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM" | "YYYY-MM-DD HH:mm:ss.SSS";
}
export interface ValidationFieldPropsDate {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "Date";
  placeholder?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
  picker?: "data" | "week" | "month" | "quarter" | "year";
}

export interface ValidationFieldPropsTime {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "Time";
  label?: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
}

export interface ValidationFieldPropsFile {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "File" | "MaltyFile" | "DropFile";
  placeholder?: string;
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
}
export interface ValidationFieldPropsCheckbox {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type: "Checkbox";
  label?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
  Group?: boolean;
}
export interface ValidationFieldPropstext {
  name: string;
  no_label?: boolean;
  label_icon?: boolean;
  type?: "text" | "number" | "password" | "email" | "TextArea";
  label?: string;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
  dir?: "ltr" | "rtl";
  Group?: boolean;
}

export type ValidationFieldProps =
  | ValidationFieldPropsText
  | ValidationFieldPropsSelect
  | ValidationFieldPropsLocalSearch
  | ValidationFieldPropsDataRange
  | ValidationFieldPropsDate
  | ValidationFieldPropsTime
  | ValidationFieldPropsFile
  | ValidationFieldPropsCheckbox
  | ValidationFieldPropstext
  | ValidationFieldPropsSearch;
