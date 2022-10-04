import { Flex, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { NextRouter } from 'next/router'
import React from 'react'
import Text from '../text/Text'

interface Props {
  Icon: any
  href: string
  text: string
  router: NextRouter
}

const FooterButton = ({ router, Icon, text, href }: Props) => {
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
          <Text variant="caption" color={isActive ? 'primary' : 'alternate'}>
            {text}
          </Text>
        </Flex>
      </IconButton>
    </Link>
  )
}

export default FooterButton
