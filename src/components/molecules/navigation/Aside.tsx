import { Avatar, Box, Button, Flex, Hide, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { ColorMode } from '../../../utils/ColorMode'
import AsideContent from '../menu/AsideContent'

const Aside = () => {
  const { colorMode } = useColorMode()
  return (
    <Hide below="lg">
      <Flex
        h="100%"
        w="100%"
        padding="10px"
        borderRight="1px"
        borderColor={
          colorMode === ColorMode.Light ? 'blackAlpha.200' : 'whiteAlpha.300'
        }
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        display={['none', 'none', 'none', 'flex']}
      >
        <Box w="100%" maxW="300px" flexGrow={1}>
          <AsideContent />
        </Box>
        <Box w="100%" maxW="250px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="start"
            gap="10px"
          >
            <Avatar name="" h="35px" w="35px" />
            <Link href="/auth/signin">
              <Button w="100%" h="35px" variant="outline">
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
