import { Container } from '@chakra-ui/react'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

/**
 * Contiene al main de la aplicacion
 */
const LayoutContainer = ({ children }: Props) => {
  return (
    <Container p="unset" h="100vh" maxWidth="100%" position="relative">
      {children}
    </Container>
  )
}

export default LayoutContainer
