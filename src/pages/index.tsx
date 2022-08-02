import { Button, Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={368}
        bg="gray.800"
        p="8"
        borderRadius="8px"
        flexDir="column"
      >
        <Stack spacing="4" mb="6">
          <Input name="email" type="email" label="E-mail" />

          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
