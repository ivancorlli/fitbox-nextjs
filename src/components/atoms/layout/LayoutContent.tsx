import { Box, ChakraProps } from '@chakra-ui/react'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

const layout: ChakraProps = {
  p: '5px',
  h: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}
/**
 * Contiene a toda la informacion dinamica de la aplicacion
 */
const LayoutContent = ({ children }: Props) => {
  return <Box {...layout}>{children}</Box>
}

export default LayoutContent
