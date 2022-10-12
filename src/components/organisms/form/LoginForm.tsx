import {
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { ChangeEvent } from 'react'
import InputPassword from '../../molecules/input/InputPassword'

interface props {
  handleSubmit: (e: React.FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const LoginForm = ({ handleSubmit, handleChange }: props) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControl h="100%">
        <Grid templateRows={['repeat(5, 1fr)']} gap={6}>
          <GridItem
            w="100%"
            rowSpan={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="1rem"
            p="5px"
          >
            <Input
              placeholder="Email o nombre de usuario"
              type="text"
              name="username"
              onChange={handleChange}
              variant="filled"
            />
            <InputPassword handleChange={handleChange} variant="filled" />
            <Text alignSelf="flex-end" variant="link.dark">
              <Link href="/">Olvidaste tu contraseña ?</Link>
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            rowSpan={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="5px"
          >
            <Flex>
              <Text fontSize="xs" variant="description">
                No tienes cuenta ?
              </Text>
              <Text variant="link" fontWeight="bold" px="5px">
                <Link href="/auth/signup">Registrate</Link>
              </Text>
            </Flex>
            <Button w="75%" type="submit" variant="filled">
              Iniciar Sesion
            </Button>
          </GridItem>
        </Grid>
      </FormControl>
    </form>
  )
}

export default LoginForm
