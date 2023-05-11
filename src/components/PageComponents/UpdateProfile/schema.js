import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("* Invalid Email"),
  name: yup.string().required("* Invalid Last Name"),
  pass: yup.boolean().required().default(false),
  password: yup.string().nullable("* Invalid Password"),
  rePassword: yup
    .string()
    .nullable("* Invalid Re Password")
    .oneOf([yup.ref("password"), null], "* Password Not Match."),
});
