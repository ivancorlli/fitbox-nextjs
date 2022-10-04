import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Text from '../../components/atoms/text/Text'
import LoginForm from '../../components/organisms/form/LoginForm'
import LayoutFooter from '../../components/organisms/layout/LayoutFooter'

const SigninTemplate = () => {
  function onSubmit() {}

  return (
    <LayoutFooter>
      <Flex flexDir="column" gap="3rem" h="100%" maxW="md" w="100%">
        <Box p="20px">
          <Text variant="H4" weight="extrabold">
            Iniciar Sesion
          </Text>
          <Text variant="H6" color="alternate">
            Bienvenido de vuelta.
          </Text>
          <Text variant="H6" color="alternate">
            Te hemos extrañado.
          </Text>
        </Box>
        <LoginForm onSubmit={onSubmit} />
      </Flex>
    </LayoutFooter>
  )
}

export default SigninTemplate
