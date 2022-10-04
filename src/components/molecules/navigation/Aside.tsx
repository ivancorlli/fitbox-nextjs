import { Avatar, Box, Button, Flex, Hide } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { ButtonBaseStyle } from '../../atoms/button/Button'
import AsideContent from '../menu/AsideContent'

const Aside = () => {
  return (
    <Hide below="lg">
      <Flex
        h="100%"
        w="100%"
        paddingX="12px"
        paddingY="5px"
        borderRight="1px"
        borderColor="blackAlpha.200"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box maxH="max-content" maxW="250px">
          <AsideContent />
        </Box>
        <Box maxW="250px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="start"
            gap="10px"
          >
            <Avatar name="" />
            <Link href="/auth/signin">
              <Button w="100%" {...ButtonBaseStyle}>
                Iniciar Sesion
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Hide>
  )
}

export default Aside
