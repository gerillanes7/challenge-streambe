import { useState, useContext } from "react";
import { AuthService } from "../../../domain/services/AuthService/AuthService.service";
import { AuthenticationContext } from "../../context/AuthenticationContext/AuthenticationContext";

const useAuth = () => {
  const AuthServiceInstance = new AuthService();
  const { loginUser } = useContext(AuthenticationContext)
  const [loading, setLoading] = useState<"loading" | "idle" | "failed">("idle");

  const login = async () => {
    setLoading("loading");
    try {
      const userAuthorizated = await AuthServiceInstance.login();

      if(userAuthorizated) loginUser(userAuthorizated)
    } catch (e) {
      setLoading("failed");
      throw new Error(e as string);
    } finally {
      setLoading("idle");
    }
  };

  return { login, loading };
};

export default useAuth;
