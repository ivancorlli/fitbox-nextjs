import { Container } from '@chakra-ui/react'
import React from 'react'

/**
 * Se utiliza para tener un bg general y los ajustes ancho y largo generales
 */
const LayoutBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container p="unset" w="100%" h="100vh" maxWidth="1280px">
      {children}
    </Container>
  )
}

export default LayoutBackground
