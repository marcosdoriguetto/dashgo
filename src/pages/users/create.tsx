import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8" mb="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Full name" />
              <Input type="email" name="email" label="Email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input type="password" name="password" label="Password" />
              <Input
                type="password"
                name="password_confirmation"
                label="Password confirmation"
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
