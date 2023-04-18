import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("* Invalid Email"),
  password: yup.string().required("* Invalid Password"),
});