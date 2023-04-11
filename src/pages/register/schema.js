import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("* Invalid Email"),
  first_name: yup.string().required("* Invalid First Name"),
  last_name: yup.string().required("* Invalid Last Name"),
  password: yup.string().required("* Invalid Password"),
  rePassword: yup
    .string()
    .required("* Invalid Re Password")
    .oneOf([yup.ref("password"), null], "* Password Not Match."),
  target: yup.string().required("* Invalid Target"),
});
