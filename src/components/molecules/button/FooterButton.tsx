import { Flex, IconButton, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { NextRouter } from 'next/router'
import React from 'react'
import { ColorMode } from '../../../utils/ColorMode'

interface Props {
  Icon: any
  href: string
  text: string
  router: NextRouter
  colorMode: string
}

const FooterButton = ({ router, Icon, text, href, colorMode }: Props) => {
  const isActive = router.asPath === href ?? false
  return (
    <Link href={href}>
      <IconButton
        aria-label="icon button"
        p="10px"
        bg="transparent"
        _active={{ bg: 'unset' }}
        _hover={{ bg: 'unset' }}
      >
        <Flex flexDirection="column" alignItems="center" gap="7px">
          <Icon />
          <Text
            fontSize={isActive ? 'smaller' : 'xs'}
            color={
              colorMode === ColorMode.Light
                ? isActive
                  ? 'primary'
                  : 'alternate'
                : isActive
                ? 'white'
                : 'whiteAlpha.600'
            }
          >
            {text}
          </Text>
        </Flex>
      </IconButton>
    </Link>
  )
}

export default FooterButton
