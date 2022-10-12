import React from 'react'
import { Container, Flex, Show, useColorMode } from '@chakra-ui/react'
import {
  HomeOutlined,
  HeartOutlined,
  BellOutlined,
  CalendarOutlined,
  MessageOutlined,
  UserOutlined,
  HeartFilled,
  HomeFilled
} from '@ant-design/icons'
import FooterButton from '../button/FooterButton'
import { useRouter } from 'next/router'
import { ColorMode } from '../../../utils/ColorMode'

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
const activeStyleDark = {
  fontSize: '25px',
  color: 'white'
}
const inactiveStyleDark = {
  fontSize: '25px',
  color: 'whiteAlpha.300'
}

const Footbar = ({ variant }: { variant?: string }) => {
  const { colorMode } = useColorMode()
  switch (variant) {
    case FootbarVariant.Logged:
      return (
        <Show below="lg">
          <FootbarLogged colorMode={colorMode} />
        </Show>
      )
    default:
      return (
        <Show below="lg">
          <FootbarDefault colorMode={colorMode} />
        </Show>
      )
  }
}
export default Footbar

// VARIANTES

const FootbarDefault = ({ colorMode }: { colorMode: string }) => {
  const router = useRouter()
  const items: NavbarItems[] = [
    {
      icon: () =>
        router.asPath === '/' ? (
          <HomeFilled
            style={
              colorMode === ColorMode.Light
                ? router.asPath === '/'
                  ? activeStyle
                  : inactiveStyle
                : router.asPath === '/'
                ? activeStyleDark
                : inactiveStyleDark
            }
          />
        ) : (
          <HomeOutlined
            style={
              colorMode === ColorMode.Light
                ? router.asPath === '/'
                  ? activeStyle
                  : inactiveStyle
                : router.asPath === '/'
                ? activeStyleDark
                : inactiveStyleDark
            }
          />
        ),
      text: 'Inicio',
      href: '/'
    },
    {
      icon: () =>
        router.asPath === '/wishlist' ? (
          <HeartFilled
            style={
              colorMode === ColorMode.Light
                ? router.asPath === '/wishlist'
                  ? activeStyle
                  : inactiveStyle
                : router.asPath === '/wishlist'
                ? activeStyleDark
                : inactiveStyleDark
            }
          />
        ) : (
          <HeartOutlined
            style={
              colorMode === ColorMode.Light
                ? router.asPath === '/wishlist'
                  ? activeStyle
                  : inactiveStyle
                : router.asPath === '/wishlist'
                ? activeStyleDark
                : inactiveStyleDark
            }
          />
        ),
      text: 'Favoritos',
      href: '/wishlist'
    },
    {
      icon: () => (
        <UserOutlined
          style={
            colorMode === ColorMode.Light
              ? router.asPath === '/auth/signin'
                ? activeStyle
                : inactiveStyle
              : router.asPath === '/auth/signin'
              ? activeStyleDark
              : inactiveStyleDark
          }
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
      borderColor={
        colorMode === ColorMode.Light ? 'blackAlpha.300' : 'whiteAlpha.300'
      }
      bg={colorMode === ColorMode.Light ? 'white' : 'base'}
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
              colorMode={colorMode}
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

const FootbarLogged = ({ colorMode }: { colorMode: string }) => {
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
      borderColor={
        colorMode === ColorMode.Light ? 'blackAlpha.300' : 'whiteAlpha.300'
      }
      bg={colorMode === ColorMode.Light ? 'white' : 'base'}
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
              colorMode={colorMode}
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
