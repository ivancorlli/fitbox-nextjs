import {
  Avatar,
  Container,
  Flex,
  Icon,
  IconButton,
  Show,
  useColorMode
} from '@chakra-ui/react'
import React from 'react'
import { BellOutlined } from '@ant-design/icons'
import { FitIconDark, FitIconLight } from '../../../assets/icons/FitIcon'

enum NavbarVariant {
  logged = 'logged'
}

const Navbar = ({
  variant,
  handleMenu
}: {
  variant?: string
  handleMenu?: React.MouseEventHandler
}) => {
  const { colorMode } = useColorMode()

  switch (variant) {
    case NavbarVariant.logged:
      return (
        <Show below="lg">
          <NavbarLogged colorMode={colorMode} handleClick={handleMenu!} />
        </Show>
      )
    default:
      return (
        <Show below="lg">
          <NavbarDefault colorMode={colorMode} />
        </Show>
      )
  }
}
export default Navbar

const NavbarDefault = ({ colorMode }: { colorMode: string }) => {
  return (
    <Container maxW="100%" position="sticky" top="0">
      <Icon as={colorMode === 'light' ? FitIconDark : FitIconLight} />
    </Container>
  )
}

const NavbarLogged = ({
  //   colorMode,
  handleClick
}: {
  colorMode: string
  handleClick: React.MouseEventHandler
}) => {
  return (
    <Container maxW="100%" position="sticky" top="0" left="0">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar
          name="Ivan Corlli"
          size="sm"
          border="1px"
          borderColor="primary"
          onClick={handleClick}
        />
        <IconButton
          aria-label="bell icon"
          icon={<BellOutlined />}
          bg="transparent"
        />
      </Flex>
    </Container>
  )
}
