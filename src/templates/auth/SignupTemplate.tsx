import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Text from '../../components/atoms/text/Text'
import RegisterForm from '../../components/organisms/form/RegisterForm'
import LayoutFooter from '../../components/organisms/layout/LayoutFooter'

const SignupTemplate = () => {
  function onSubmit() {}

  return (
    <LayoutFooter>
      <Flex flexDir="column" gap="3rem" h="100%" maxW="md" w="100%">
        <Box p="20px">
          <Text variant="H4" weight="extrabold">
            Crear Cuenta
          </Text>
          <Text variant="subtitle-1" color="alternate">
            Selecciona el tipo de cuenta que quieres crear.
          </Text>
        </Box>
        <RegisterForm onSubmit={onSubmit} />
      </Flex>
    </LayoutFooter>
  )
}

export default SignupTemplate
