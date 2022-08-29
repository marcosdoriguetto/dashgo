import { Button } from "@chakra-ui/react";

import { PaginationItemProps } from "./Pagination.interface";

export function PaginationItem({ isCurrent, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="sm"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="sm"
      width="4"
      bgColor="gray.700"
      _hover={{
        bgColor: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}
