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
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { CreateUserFormData } from "./CreateUser.interface";
import { resolver } from "./CreateUser.validation";

export default function CreateUser() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver,
  });

  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post("users", {
        ...user,
        created_at: new Date(),
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user-list");
      },
    }
  );

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    createUser.mutateAsync(values);

    router.push("/users");
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8" mb="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Full name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                type="email"
                name="email"
                label="Email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                type="password"
                name="password"
                label="Password"
                error={errors.password}
                {...register("password")}
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Password confirmation"
                error={errors.confirm_password}
                {...register("confirm_password")}
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
              <Button isLoading={isSubmitting} type="submit" colorScheme="pink">
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
