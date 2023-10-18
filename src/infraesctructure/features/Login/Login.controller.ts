import { useEffect, useContext, useState } from "react";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext/AuthenticationContext";
import { useFormik } from "formik";
import { InitialValuesFormType } from "./types";
import { LoginSchema } from "../../schemas/LoginSchema";
import { useToast } from "@chakra-ui/react";

const useLoginController = () => {
  const navigation = useNavigate();
  const toast = useToast();
  const { login } = useAuth();
  const { userLogged, loading } = useContext(AuthenticationContext);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues: InitialValuesFormType = { username: "", password: "" };
  const formik = useFormik({
    initialValues,
    onSubmit: () => login(),
    validationSchema: LoginSchema,
  });

  const { errors, handleChange, handleSubmit } = formik;

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleUserLoggedToRedirect = () => {
    navigation("/home");
    toast({
      title: "Log in",
      description: "Log in successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  
  useEffect(() => {
    if (userLogged && !loading) handleUserLoggedToRedirect();
  }, [userLogged, loading, navigation]);

  return {
    handleSubmit,
    errors,
    handleChange,
    handleShowPassword,
    showPassword,
  };
};

export default useLoginController;
