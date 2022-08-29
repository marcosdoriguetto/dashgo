import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

import { ProfileProps } from "./Header.interface";

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcos Fernandes</Text>
          <Text color="gray.300" fontSize="small">
            marcosdoriguetto@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcos Fernandes" />
    </Flex>
  );
}
