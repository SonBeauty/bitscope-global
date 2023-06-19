import * as yup from "yup";

export const schema = yup.object().shape({
  isTwitter: yup.boolean(),
  twitter: yup
    .string()
    .nullable()
    .when("isTwitter", {
      is: true,
      then: (schema) =>
        schema
          .required("* Username is empty")
          .matches(/^@/, "* Please start with @")
          .min(5, "* @ and at least 4 characters"),
    }),
  isTelegram: yup.boolean(),
  telegram: yup
    .string()
    .nullable()
    .when("isTelegram", {
      is: true,
      then: (schema) =>
        schema
          .required("* Username is empty")
          .matches(/^@/, "* Please start with @")
          .min(6, "*  @ and at least 5 characters"),
    }),
});

export const schemaConditions = yup.object().shape({
  isTwitter: yup.boolean(),
  twitter: yup
    .string()
    .nullable()
    .when("isTwitter", {
      is: true,
      then: (schema) =>
        schema
          .required("* Username is empty")
          .matches(/^@/, "* Please start with @")
          .min(6, "* @ and at least 5 characters"),
    }),
  isTelegram: yup.boolean(),
  telegram: yup
    .string()
    .nullable()
    .when("isTelegram", {
      is: true,
      then: (schema) =>
        schema
          .required("* Username is empty")
          .matches(/^@/, "* Please start with @")
          .min(5, "*  @ and at least 4 characters"),
    }),
});
