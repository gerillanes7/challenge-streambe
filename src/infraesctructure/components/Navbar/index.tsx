import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { INavbar } from "./types";

export const Navbar = ({ username, logOut }: INavbar) => {
  return (
    <Box w={"100vw"} py={"1rem"} px={"2rem"} shadow={"md"}>
      <Flex align={"center"} justifyContent={"space-between"}>
        <Heading fontWeight={"400"} fontSize={"2xl"}>
          Hola {username}
        </Heading>
        <Button
          display={"flex"}
          alignItems={"center"}
          bgColor={"transparent"}
          variant={"unstyled"}
          onClick={logOut}
        >
          <Avatar />
          <Text fontSize={"2xl"} ml={"0.5rem"} fontWeight={"400"}>
            Log out
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};
