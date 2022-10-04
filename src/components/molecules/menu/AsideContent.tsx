import {
  HomeOutlined,
  HomeFilled,
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons'
import { Box, Button, HStack, Icon, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FitIconDark } from '../../../assets/icons/FitIcon'
import { AsideButton } from '../../atoms/button/AsideButton'
import { ButtonBaseStyle } from '../../atoms/button/Button'
import Text from '../../atoms/text/Text'

interface NavbarItems {
  Icon: any
  text: string
  href: string
}

const style = {
  fontSize: '30px'
}

const AsideContent = () => {
  const router = useRouter()

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
  return (
    <VStack w="100%" maxW="100%" alignItems="start" marginY="15px" gap="5px">
      <Box w="100%" maxW="100%" paddingX="30px">
        <Icon as={FitIconDark} />
      </Box>
      {items.map((el, idx) => {
        return (
          <Link href={el.href} key={idx}>
            <Box cursor="pointer">
              <Button {...AsideButton}>
                <HStack alignItems="center" justifyContent="center">
                  <el.Icon />
                  <Text
                    variant="H6"
                    weight={router.asPath === el.href ? 'bold' : 'normal'}
                  >
                    {el.text}
                  </Text>
                </HStack>
              </Button>
            </Box>
          </Link>
        )
      })}
      <Link href="/auth/signup">
        <Button w="100%" {...ButtonBaseStyle}>
          Registrarse
        </Button>
      </Link>
    </VStack>
  )
}

export default AsideContent
