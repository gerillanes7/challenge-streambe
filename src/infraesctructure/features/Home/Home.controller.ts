import { useContext, useMemo } from "react";
import { useGetUsers } from "../../hooks";
import { AuthenticationContext } from "../../context/AuthenticationContext/AuthenticationContext";

const useHomeController = () => {
  const { data: users, loading } = useGetUsers();
  const { userLogged, removeUserLogged } = useContext(AuthenticationContext)

  const columns = [
    'Name',
    'BirthDate',
    'Photo'
  ]

  const userFullName = useMemo(() => `${userLogged?.name} ${userLogged?.lastname}`, [])


  return { columns, users, loading, userFullName, removeUserLogged };
};

export default useHomeController;
