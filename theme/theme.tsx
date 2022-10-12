import { extendTheme } from '@chakra-ui/react'

export const FitTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  colors: {
    primary: '#0349FE',
    'primary.dark': '#18206F',
    secondary: '#657786',
    alternate: '#0f141980'
    // primaryText: '#101213',
    // secondaryText: '#717171'
    // Dark Mode
    // primaryDark: '#0032B4',
    // secondaryDark: '#AAB8C2'
  },
  styles: {
    body: {
      fontFamily: 'Heebo'
    }
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '64em',
    xl: '75em'
  },
  components: {
    Button: {
      variants: {
        filled: {
          borderRadius: '16px',
          bg: 'primary',
          color: 'white',
          fontSize: 'sm',
          letterSpacing: '1.5px',
          _hover: {
            bg: 'primary.dark',
            transition: 'all ease 0.5s'
          }
        },
        outline: {
          borderRadius: '16px',
          border: '1px',
          borderColor: 'primary',
          color: 'primary',
          fontSize: 'sm',
          letterSpacing: '1.5px',
          _hover: {
            bg: 'primary',
            color: 'white',
            transition: 'all ease 0.25s'
          }
        }
      }
    },
    Input: {
      variants: {
        filled: {
          field: {
            fontSize: 'sm',
            borderRadius: '16px',
            _focus: {
              borderRadius: '16px',
              border: '1px',
              borderColor: 'primary'
            }
          }
        }
      }
    },
    Text: {
      variants: {
        link: (props: any) => ({
          fontSize: 'xs',
          color: props.colorMode === 'light' ? 'primary.dark' : 'white',
          _hover: {
            color: 'primary'
          }
        }),
        'link.dark': (props: any) => ({
          fontSize: 'xs',
          color: props.colorMode === 'light' ? 'alternate' : 'whiteAlpha.300',
          _hover: {
            color: props.colorMode === 'light' ? 'primary' : 'white'
          }
        }),
        description: (props: any) => ({
          fontSize: 'md ',
          color: props.colorMode === 'light' ? 'alternate' : 'whiteAlpha.300'
        })
      }
    }
  }
})
