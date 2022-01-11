import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'


export function Header() {
    return (
        <Flex
            as="header"
            maxWidth={1480}
            w="100%"
            h="20"
            mt="4"
            mx="auto"
            px="6"
            align="center"
        >
            <Logo />

            <SearchBox />

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />
                <Profile />
            </Flex>
        </Flex>
    )
}