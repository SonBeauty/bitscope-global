import * as yup from "yup";
export const schema = yup.object({
  twitter: yup.string().required("* Please check the social network link"),
  telegram: yup.string().required("* Please check the social network link"),
});