import {
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  Link
} from '@chakra-ui/react'
import React from 'react'
import { ButtonBaseStyle } from '../../atoms/button/Button'
import { InputBaseStyle } from '../../atoms/input/Input'
import InputPassword from '../../atoms/input/InputPassword'
import Text from '../../atoms/text/Text'

interface props {
  onSubmit: () => void
}

const LoginForm = ({ onSubmit }: props) => {
  return (
    <FormControl onSubmit={onSubmit} h="100%">
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
            {...InputBaseStyle}
            placeholder="Email o nombre de usuario"
            type="text"
          />
          <InputPassword />
          <Link alignSelf="flex-end">
            <Text variant="caption" color="alternate">
              Olvidaste tu contraseña ?
            </Text>
          </Link>
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
            <Text variant="caption" color="alternate">
              No tienes cuenta ?
            </Text>
            <Link px="5px">
              <Text variant="caption" color="primary" weight="bold">
                Registrate
              </Text>
            </Link>
          </Flex>
          <Button {...ButtonBaseStyle} w="75%">
            <Text variant="textbutton">Iniciar Sesion</Text>
          </Button>
        </GridItem>
      </Grid>
    </FormControl>
  )
}

export default LoginForm
