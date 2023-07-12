import * as yup from "yup";
export const schema = yup.object({
  cookie: yup
    .string()
    .required("* Cookie is empty")
    .min(100, "* @ and at least 100 characters"),
  token: yup
    .string()
    .required("* Token is empty")
    .min(15, "* @ and at least 15 characters"),
  status: yup.string().required("* Status is empty"),
  csrfToken: yup
    .string()
    .required("* csrfToken is empty")
    .min(75, "* @ and at least 75 characters"),
});
