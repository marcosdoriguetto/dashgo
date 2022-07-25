import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={368}
        bg="gray.800"
        p={8}
        borderRadius="8px"
        flexDir="column"
      >
        <Stack spacing={4} mb={6}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: "gray.900" }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: "gray.900" }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
