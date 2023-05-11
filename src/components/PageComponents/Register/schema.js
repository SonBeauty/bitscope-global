import * as yup from "yup";
export const schema = yup.object({
  email: yup.string().required("* Invalid Email"),
  name: yup.string().required("* Invalid Name"),
  password: yup.string().required("* Invalid Password"),
  check: yup
    .bool()
    .oneOf([true], "* Accept Invalid")
    .required(false, "* Accept Invalid"),
});
