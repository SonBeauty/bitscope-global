import * as yup from "yup";
export const activeSchema = yup.object({
  email: yup
    .string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "* Invalid Email")
    .required("* Email is required"),
});