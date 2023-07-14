import * as yup from "yup";
export const schema = yup.object({
  version: yup.string().required("* Invalid Version"),
});
