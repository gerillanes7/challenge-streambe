import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import useLoginController from "./Login.controller";

const Login = () => {
  const {
    handleSubmit,
    errors,
    handleChange,
    handleShowPassword,
    showPassword,
  } = useLoginController();
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="primary">Login</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Stack spacing={4} p="1rem">
            <FormControl isInvalid={Boolean(errors.username)}>
              <InputGroup>
                <Input
                  type="email"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </InputGroup>
              {errors.username && (
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={Boolean(errors.password)}>
              <InputGroup>
                <Input
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement width="4.5rem" mr={1}>
                  <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                    Mostrar
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              bgColor={"#D9534F"}
              width="full"
              color={"#FFF"}
              rounded={8}
              onClick={() => handleSubmit()}
            >
              Ingresar
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
