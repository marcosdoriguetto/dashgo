import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";

export interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export interface NavLinkProps extends ChakraLinkProps {
  title: string;
  icon: ElementType;
  href: string;
}
