import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup
    .string()
    .required("* Username is empty")
    .matches(/^@/, "* Please start with @")
    .min(5, "* @ and at least 4 characters"),
});