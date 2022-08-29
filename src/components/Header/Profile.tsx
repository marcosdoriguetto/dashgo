import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcos Fernandes</Text>
        <Text color="gray.300" fontSize="small">
          marcosdoriguetto@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Marcos Fernandes" />
    </Flex>
  )
}