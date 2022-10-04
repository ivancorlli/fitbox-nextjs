import { ChakraProps } from '@chakra-ui/react'

export const AsideButton: ChakraProps = {
  paddingY: '20px',
  paddingX: '35px',
  borderRadius: 'full',
  bg: 'unset',
  _hover: { bg: 'rgba(15, 20, 25, 0.1)' },
  transition: 'all 0.25s cubic-bezier(.08,.52,.52,1)',
  _active: {
    bg: 'rgba(15, 20, 25, 0.1)'
  }
}
