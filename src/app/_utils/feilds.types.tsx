import * as yup from "yup";

export default interface Fields {
  email: yup.StringSchema;
  password: yup.StringSchema;
  confirmPassword: yup.StringSchema;

  firstName: yup.StringSchema;
  lastName: yup.StringSchema;
}
