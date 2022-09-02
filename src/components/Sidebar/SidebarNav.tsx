import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={RiDashboardLine} title="Dashboard" href="/dashboard" />

        <NavLink icon={RiContactsLine} title="Users" href="/users" />
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink icon={RiInputMethodLine} title="Forms" href="/forms" />

        <NavLink icon={RiGitMergeLine} title="Automation" href="/automation" />
      </NavSection>
    </Stack>
  );
}
