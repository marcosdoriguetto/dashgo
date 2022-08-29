import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavSectionProps } from "./Sidebar.interface";

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small" mb="8">
        {title}
      </Text>
      <Stack spacing="4" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
