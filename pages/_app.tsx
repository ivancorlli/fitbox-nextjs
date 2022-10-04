import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { FitTheme } from '../theme/theme'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={FitTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
