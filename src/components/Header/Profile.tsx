import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Matheus de Lima</Text>
                <Text color="gray.300" fontSize="small">
                    mathelima5@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Matheus Lima" src="https://github.com/mathlima1.png" />
        </Flex>
    )
}