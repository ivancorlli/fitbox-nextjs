import { Container, useColorMode } from '@chakra-ui/react'
import React from 'react'

/**
 * Se utiliza para tener un bg general y los ajustes ancho y largo generales
 */
const LayoutBackground = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode()

  return (
    <Container
      p="unset"
      bg={colorMode === 'light' ? 'white' : 'blackAlpha.900'}
      w="100%"
      h="100vh"
      maxWidth="1280px"
    >
      {children}
    </Container>
  )
}

export default LayoutBackground
