import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validateSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter correctly email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password is needed minimal 6 characters"),
  confirm_password: yup
    .string()
    .oneOf([null, yup.ref("password")], "Passwords must be the same"),
});

export const resolver = yupResolver(validateSchema);
