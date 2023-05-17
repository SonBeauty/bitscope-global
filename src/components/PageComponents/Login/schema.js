import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("* Invalid Email"),
  password: yup
    .string()
    .required("* Invalid Password")
    .min(6, "* Minimum 6 characters")
    .matches(/[A-Z]/, "* At least 1 capital letter")
    .matches(/[0-9]/, "* At least 1 digit")
    .max(32, "* Up to 32 characters"),
});
