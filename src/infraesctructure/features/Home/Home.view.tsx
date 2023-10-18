import { Box } from "@chakra-ui/react";
import { Table } from "../../components";
import { Navbar } from "../../components/Navbar";
import useHomeController from "./Home.controller";

const Home = () => {
  const { columns, users, loading, userFullName, removeUserLogged } = useHomeController();

  return (
    <>
      <Navbar username={userFullName} logOut={removeUserLogged} />

      <Box p={"8rem"} w={'100%'} height={'100%'} >
        <Table columns={columns} data={users} loading={loading} />
      </Box>
    </>
  );
};

export default Home;
