import { useEffect, useState } from "react";
import { UserService } from "../../../domain/services/UserService/UserService.service";
import { UserData } from "../../../domain/entities/UserDto";

const useGetUsers = () => {
  const UsersServiceInstance = new UserService();
  const [loading, setLoading] = useState<"loading" | "idle" | "failed">("idle");
  const [data, setData] = useState<UserData[]>([]);

  const getUsers = async () => {
    setLoading("loading");
    try {
      const users = await UsersServiceInstance.getUsers();
      setData(users)
    } catch (e) {
      setLoading("failed");
      throw new Error(e as string);
    } finally {
      setLoading("idle");
    }
  };

  useEffect(() => {
    getUsers()
  }, [])

  return { loading, data };
};

export default useGetUsers;
