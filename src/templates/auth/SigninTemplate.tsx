import { Box, Flex, Text } from '@chakra-ui/react'
import React, { ChangeEvent } from 'react'
import LoginForm from '../../components/organisms/form/LoginForm'
import LayoutFooter from '../../components/organisms/layout/LayoutFooter'

interface props {
  handleSubmit: (e: React.FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SigninTemplate = ({ handleSubmit, handleChange }: props) => {
  return (
    <LayoutFooter>
      <Flex flexDir="column" gap="3rem" h="100%" maxW="md" w="100%">
        <Box p="20px">
          <Text fontSize="4xl" fontWeight="bold">
            Iniciar Sesion
          </Text>
          <Text variant="description">Bienvenido de vuelta.</Text>
          <Text variant="description">Te hemos extrañado.</Text>
        </Box>
        <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />
      </Flex>
    </LayoutFooter>
  )
}

export default SigninTemplate
