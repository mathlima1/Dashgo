import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrentPage?: boolean;
}

export function PaginationItem({ isCurrentPage = false, number }: PaginationItemProps) {
    if (isCurrentPage) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                coloScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default',
                }}
            >
                {number}
            </Button>
        )
    }
    else {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                bg="gray.700"
                _hover={{
                    bg: 'gray.500'
                }}
            >
                {number}
            </Button>
        )
    }
}