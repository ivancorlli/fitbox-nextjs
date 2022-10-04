import { extendTheme } from '@chakra-ui/react'

export const FitTheme = extendTheme({
  colors: {
    primary: '#0349FE',
    secondary: '#657786',
    alternate: '#0f141980',
    primaryText: '#101213',
    secondaryText: '#717171',
    // Dark Mode
    primaryDark: '#0032B4',
    secondaryDark: '#AAB8C2'
  },

  fonts: {
    heading: `'Heebo', sans-serif`,
    body: `'Heebo', sans-serif`
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '64em',
    xl: '75em'
  }
})
