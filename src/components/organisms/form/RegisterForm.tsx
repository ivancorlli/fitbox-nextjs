import { Button, FormControl, Grid, GridItem, Input } from '@chakra-ui/react'
import React from 'react'
import { ButtonBaseStyle } from '../../atoms/button/Button'
import { InputBaseStyle } from '../../atoms/input/Input'
import InputPassword from '../../atoms/input/InputPassword'
import Text from '../../atoms/text/Text'

interface props {
  onSubmit: () => void
}

const RegisterForm = ({ onSubmit }: props) => {
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
            placeholder="Nombre de usuario"
            type="text"
          />
          <Input
            {...InputBaseStyle}
            placeholder="Correo electronico"
            type="email"
          />
          <InputPassword />
        </GridItem>
        <GridItem
          w="100%"
          rowSpan={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
        >
          <Button {...ButtonBaseStyle} w="75%">
            <Text variant="textbutton">Registrarse</Text>
          </Button>
        </GridItem>
      </Grid>
    </FormControl>
  )
}

export default RegisterForm
