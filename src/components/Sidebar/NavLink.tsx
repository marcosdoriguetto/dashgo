import { ActiveLink } from "../ActiveLink";

import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";

import { NavLinkProps } from "./Sidebar.interface";

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
