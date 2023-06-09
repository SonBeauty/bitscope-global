import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("* Invalid Email"),
  name: yup
    .string()
    .min(2, "* Minimum 2 characters")
    .required("* Invalid Name"),
  password: yup
    .string()
    .required("* Invalid Password")
    .min(6, "* Minimum 6 characters")
    .matches(/[A-Z]/, "* At least 1 capital letter")
    .matches(/[0-9]/, "* At least 1 digit")
    .max(32, "* Up to 32 characters"),
  rePassword: yup
    .string()
    .required("* Invalid The Password")
    .min(6, "* Minimum 6 characters")
    .matches(/[A-Z]/, "* At least 1 capital letter")
    .matches(/[0-9]/, "* At least 1 digit")
    .max(32, "* Up to 32 characters")
    .oneOf([yup.ref("password"), null], "* Pasword does not match."),
  check: yup
    .bool()
    .oneOf([true], "* Accept Invalid")
    .required(false, "* Accept Invalid"),
});
