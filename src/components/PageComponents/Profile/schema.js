import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("* Invalid Email"),
  name: yup.string().required("* Invalid Last Name"),
  username: yup.string().nullable("* Invalid username"),
  phone: yup.string().nullable("* Invalid Phone Number"),
  password: yup.string().nullable(),
  rePassword: yup
    .string()
    .nullable()
    .oneOf([yup.ref("password"), null], "* Password Not Match."),
});
