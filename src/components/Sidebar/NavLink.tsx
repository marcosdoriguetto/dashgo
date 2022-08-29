import { Icon, Link, Text } from "@chakra-ui/react";

import { NavLinkProps } from "./Sidebar.interface";

export function NavLink({ title, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" py="1" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
}
