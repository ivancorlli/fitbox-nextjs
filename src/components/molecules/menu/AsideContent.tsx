import {
  HomeOutlined,
  HomeFilled,
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons'
import {
  Box,
  Button,
  HStack,
  Icon,
  Text,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import FitIcon from '../../../assets/icons/FitIcon'

interface NavbarItems {
  Icon: any
  text: string
  href: string
}

const style = {
  fontSize: '25px'
}

const AsideContent = () => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()

  const items: NavbarItems[] = [
    {
      Icon: () =>
        router.asPath === '/' ? (
          <HomeFilled style={style} />
        ) : (
          <HomeOutlined style={style} />
        ),
      text: 'Inicio',
      href: '/'
    },
    {
      Icon: () =>
        router.asPath === '/wishlist' ? (
          <HeartFilled style={style} />
        ) : (
          <HeartOutlined style={style} />
        ),
      text: 'Favoritos',
      href: '/wishlist'
    }
  ]

  const AsideIcon = () => <FitIcon colorMode={colorMode} />
  return (
    <VStack alignItems="start" marginY="15px">
      <Box marginY="5px" onClick={toggleColorMode}>
        <Icon as={AsideIcon} />
      </Box>
      {items.map((el, idx) => {
        return (
          <Link href={el.href} key={idx}>
            <Box cursor="pointer">
              <Button>
                <HStack alignItems="center" justifyContent="center">
                  <el.Icon />
                  <Text
                    variant="H6"
                    w={router.asPath === el.href ? 'bold' : 'normal'}
                  >
                    {el.text}
                  </Text>
                </HStack>
              </Button>
            </Box>
          </Link>
        )
      })}
    </VStack>
  )
}

export default AsideContent
