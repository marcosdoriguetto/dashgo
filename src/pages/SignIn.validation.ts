import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validateSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter correctly email address"),
  password: yup.string().required("Please enter your password"),
});

export const resolver = yupResolver(validateSchema);
