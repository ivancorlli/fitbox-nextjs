import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import RegisterForm from '../../components/organisms/form/RegisterForm'
import LayoutFooter from '../../components/organisms/layout/LayoutFooter'

const SignupTemplate = () => {
  function onSubmit() {}
  function handleChange() {}

  return (
    <LayoutFooter>
      <Flex flexDir="column" gap="3rem" h="100%" maxW="md" w="100%">
        <Box p="20px">
          <Text fontSize="4xl" w="extrabold">
            Crear Cuenta
          </Text>
          <Text variant="description">
            Selecciona el tipo de cuenta que quieres crear.
          </Text>
        </Box>
        <RegisterForm onSubmit={onSubmit} handleChange={handleChange} />
      </Flex>
    </LayoutFooter>
  )
}

export default SignupTemplate
