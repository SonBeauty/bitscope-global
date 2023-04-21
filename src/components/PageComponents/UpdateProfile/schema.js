import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().nullable("* Invalid Email"),
  firstName: yup.string().nullable("* Invalid First Name"),
  lastName: yup.string().nullable("* Invalid Last Name"),
  password: yup.string().nullable("* Invalid Password"),
  rePassword: yup
    .string()
    .nullable("* Invalid Re Password")
    .oneOf([yup.ref("password"), null], "* Password Not Match."),
});