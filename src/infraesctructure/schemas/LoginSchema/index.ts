import { object, string } from "yup";
import { USER } from "../../hooks/useAuth/types";
import { EMAIL_REQUIRED, PASSWORD_REQUIRED } from "../messages";

export const LoginSchema = object({
  username: string()
    .required(EMAIL_REQUIRED)
    .test("is-valid-username", EMAIL_REQUIRED, (value) => {
      return value === USER.EMAIL;
    }),
  password: string()
    .required(PASSWORD_REQUIRED)
    .test("is-valid-password", PASSWORD_REQUIRED, function (value) {
      return value === USER.PASSWORD;
    }),
});
