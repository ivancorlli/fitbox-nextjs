import { ChakraProps } from '@chakra-ui/react'

export const ButtonBaseStyle: ChakraProps = {
  bg: 'primary',
  _hover: {
    bg: 'primary',
    filter: 'auto',
    brightness: '.75'
  },
  transition: '.25s ease',
  color: 'white'
}
