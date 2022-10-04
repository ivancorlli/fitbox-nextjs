import React from 'react'
import { Container, Flex, Show } from '@chakra-ui/react'
import {
  HomeOutlined,
  HeartOutlined,
  BellOutlined,
  CalendarOutlined,
  MessageOutlined,
  UserOutlined
} from '@ant-design/icons'
import FooterButton from '../../atoms/button/FooterButton'
import { useRouter } from 'next/router'

enum FootbarVariant {
  Logged = 'logged'
}

interface NavbarItems {
  icon: any
  text: string
  href: string
}

const activeStyle = {
  fontSize: '25px',
  color: '#0349FE'
}
const inactiveStyle = {
  fontSize: '25px',
  color: '#0f141980'
}

const Footbar = ({ variant }: { variant?: string }) => {
  switch (variant) {
    case FootbarVariant.Logged:
      return (
        <Show below="lg">
          <FootbarLogged />
        </Show>
      )
    default:
      return (
        <Show below="lg">
          <FootbarDefault />
        </Show>
      )
  }
}
export default Footbar

// VARIANTES

const FootbarDefault = () => {
  const router = useRouter()
  const items: NavbarItems[] = [
    {
      icon: () => (
        <HomeOutlined
          style={router.asPath === '/' ? activeStyle : inactiveStyle}
        />
      ),
      text: 'Inicio',
      href: '/'
    },
    {
      icon: () => (
        <HeartOutlined
          style={router.asPath === '/wishlist' ? activeStyle : inactiveStyle}
        />
      ),
      text: 'Favoritos',
      href: '/wishlist'
    },
    {
      icon: () => (
        <UserOutlined
          style={router.asPath === `/auth/signin` ? activeStyle : inactiveStyle}
        />
      ),
      text: 'Iniciar Sesion',
      href: `/auth/signin`
    }
  ]

  return (
    <Container
      maxW="100%"
      position="fixed"
      bottom="0"
      left="0"
      borderTop="1px"
      borderColor="blackAlpha.300"
      bg="white"
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        gap="35px"
        alignItems="center"
        paddingY="15px"
      >
        {items.map((menuItem, idx) => {
          return (
            <FooterButton
              href={menuItem.href}
              key={idx}
              Icon={menuItem.icon}
              text={menuItem.text}
              router={router}
            />
          )
        })}
      </Flex>
    </Container>
  )
}

const FootbarLogged = () => {
  const router = useRouter()
  const items: NavbarItems[] = [
    {
      icon: BellOutlined,
      text: 'Descubri',
      href: '/'
    },
    {
      icon: HeartOutlined,
      text: 'Favoritos',
      href: '/wishlist'
    },
    {
      icon: CalendarOutlined,
      text: 'Turnos',
      href: '/turns'
    },
    {
      icon: MessageOutlined,
      text: 'Mensajes',
      href: '/chat'
    }
  ]
  return (
    <Container
      maxW="100%"
      position="fixed"
      bottom="0"
      left="0"
      borderTop="1px"
      borderColor="blackAlpha.300"
      bg="white"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        gap="5px"
        alignItems="center"
        paddingY="5px"
      >
        {items.map((menuItem, idx) => {
          return (
            <FooterButton
              href={menuItem.href}
              key={idx}
              Icon={menuItem.icon}
              text={menuItem.text}
              router={router}
            />
          )
        })}
      </Flex>
    </Container>
  )
}
