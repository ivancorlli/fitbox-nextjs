import { ChakraProps, InputProps } from '@chakra-ui/react'

export const InputBaseStyle: ChakraProps & InputProps = {
  pr: '4.5rem',
  _placeholder: {
    color: 'alternate'
  },
  border: '1px',
  borderColor: 'alternate',
  focusBorderColor: 'alternate',
  borderRadius: 'lg'
}
