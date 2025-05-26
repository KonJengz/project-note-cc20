import * as Yup from "yup";

export const schemaRegister = Yup.object({
  email: Yup.string().email().max(50).required("Email is required"),
  password: Yup.string().max(20).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm Password is required"),
});
