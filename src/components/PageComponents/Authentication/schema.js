import * as yup from "yup";

export const schema = yup.object().shape({
  twitter: yup.string().nullable(),
  telegram: yup.string().nullable(),
});
