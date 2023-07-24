import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup
    .string()
    .required("* Rest_id is not empty")
});