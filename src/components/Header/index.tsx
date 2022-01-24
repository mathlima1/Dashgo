import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarDrawer } from '../../context/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'


export function Header() {

    const { onOpen } = useSideBarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
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

            {!isWideVersion && (
                <IconButton
                    aria-label="open navegation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSIze="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"

                >

                </IconButton>
            )}
            <Logo />
            {isWideVersion && <SearchBox />}


            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}